var request = require('request');

module.exports = function(app, passport) {

const AWS = require('aws-sdk');
const Busboy = require('busboy');


function uploadToS3(file,res) {
 let s3bucket = new AWS.S3({
   accessKeyId: IAM_USER_KEY,
   secretAccessKey: IAM_USER_SECRET,
   Bucket: BUCKET_NAME,
 });
 
 s3bucket.createBucket(function () {
   var params = {
    Bucket: BUCKET_NAME,
    Key: file.name,
	Body: file.data,
	ACL: 'public-read'
   };
   s3bucket.upload(params, function (err, data) {
    if (err) {
     console.log('error in callback');
     console.log(err);
    }
    console.log('success');
	console.log(data);
	res.send('File uploaded!');
   }).on('httpUploadProgress', function(progress) { // TypeError here
	console.log("progress: " + progress[0]);
  });;
 });
}

//UPLOAD FILE
app.post('/upload', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;

  var busboy = new Busboy({ headers: req.headers });

  // The file upload has completed
  busboy.on('finish', function() {

	console.log('Upload finished');
	
	// Your files are stored in req.files. In this case,
	// you only have one and it's req.files.element2:
	// This returns:
	// {
	//    element2: {
	//      data: ...contents of the file...,
	//      name: 'Example.jpg',
	//      encoding: '7bit',
	//      mimetype: 'image/png',
	//      truncated: false,
	//      size: 959480
	//    }
	// }
	
	// Grabs your file object from the request.
	const file = req.files.element2;
	console.log(file);
	
	// Begins the upload to the AWS S3
	uploadToS3(sampleFile,res);
  });

  req.pipe(busboy);
  //uploadToS3(sampleFile);
 
  // Use the mv() method to place the file somewhere on your server
  /*sampleFile.mv('./upload/'+sampleFile.name, function(err) {
    if (err)
      return res.status(500).send(err);
 
    res.send('File uploaded!');
  });*/
});

	app.get('/',isLoggedIn, function(req, res) {
		res.render('index.ejs'); // load the index.ejs file
	});

	app.get('/login', function(req, res) {
		res.render('login.ejs', { message: req.flash('loginMessage') });
	});

	app.post('/login',  function(req, res, next) { 
		passport.authenticate('local-login', function(err,user,info){
			console.log(user)
		if (err) { return res.json({"responseCode" : 0}) }
		if (!user) { return res.json({"responseCode" : 0}) }
		req.logIn(user, function(err) {
            if (err) { return next(err); }
			return res.json({"responseCode" : 1})
        });
		})(req, res, next)
	})

	app.get('/signup', function(req, res) {		
		res.render('signup.ejs', { message: req.flash('signupMessage') });
	});


	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/profile', 
		failureRedirect : '/signup', 
		failureFlash : true 
	}));

	app.get('/profile', isLoggedIn, function(req, res) {
		res.render('profile.ejs', {
			user : req.user 
		});
	});

	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
 
};

function isLoggedIn(req, res, next) {

	if (req.isAuthenticated())
		return next();
	res.redirect('/login');
}

function recaptcha(req, res, next) { // <<-- 1. have next passed here
    console.log('HERE');
	if(req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
		return res.json({"responseCode" : 1,"responseDesc" : "Marque o captcha!"});
	  }
	  // Put your secret key here.
	  var secretKey = "--paste your secret key here--";
	  // req.connection.remoteAddress will provide IP address of connected user.
	  var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
	  // Hitting GET request to the URL, Google will respond with success or error scenario.
	  request(verificationUrl,function(error,response,body) {
		body = JSON.parse(body);
		// Success will be true or false depending upon captcha validation.
		if(body.success !== undefined && !body.success) {
	      return next();
		  return res.json({"responseCode" : 1,"responseDesc" : "Falha ao verificar captcha"});
		}
		  return next();
	  })
}