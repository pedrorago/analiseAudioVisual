const request = require('request');
const Busboy = require('busboy');
const UtilService = require('../services/util-service');

module.exports = function(app, passport) {

    //UPLOAD FILE
    app.post('/salvar-programacao', function(req, res) {

        let sampleFile = req.files.sampleFile;
				let name_file  = new Date().getTime()+"-"+req.files.sampleFile;
				
        var busboy = new Busboy({
            headers: req.headers
        });

        // The file upload has completed
        busboy.on('finish', function() {
            Promise.all([UtilService.upload_file(sampleFile, name_file)]).then(resp => {


            })
        });

        req.pipe(busboy);

    });

    app.get('/', isLoggedIn, function(req, res) {
        res.render('index.ejs'); // load the index.ejs file
    });

    app.get('/login', function(req, res) {
        res.render('login.ejs', {
            message: req.flash('loginMessage')
        });
    });

    app.post('/login', function(req, res, next) {
        passport.authenticate('local-login', function(err, user, info) {
            console.log(user)
            if (err) {
                return res.json({
                    "responseCode": 0
                })
            }
            if (!user) {
                return res.json({
                    "responseCode": 0
                })
            }
            req.logIn(user, function(err) {
                if (err) {
                    return next(err);
                }
                return res.json({
                    "responseCode": 1
                })
            });
        })(req, res, next)
    })

    app.get('/signup', function(req, res) {
        res.render('signup.ejs', {
            message: req.flash('signupMessage')
        });
    });


    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile',
        failureRedirect: '/signup',
        failureFlash: true
    }));

    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user: req.user
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
    if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
        return res.json({
            "responseCode": 1,
            "responseDesc": "Marque o captcha!"
        });
    }
    // Put your secret key here.
    var secretKey = "--paste your secret key here--";
    // req.connection.remoteAddress will provide IP address of connected user.
    var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
    // Hitting GET request to the URL, Google will respond with success or error scenario.
    request(verificationUrl, function(error, response, body) {
        body = JSON.parse(body);
        // Success will be true or false depending upon captcha validation.
        if (body.success !== undefined && !body.success) {
            return next();
            return res.json({
                "responseCode": 1,
                "responseDesc": "Falha ao verificar captcha"
            });
        }
        return next();
    })
}