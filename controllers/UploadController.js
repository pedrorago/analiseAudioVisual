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