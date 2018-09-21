const request     = require('request');
const Busboy      = require('busboy');
const UtilService = require('../services/util-service');
const ProgramacaoService = require('../services/programacao-service');

module.exports = function(app, passport) {


    app.post('/s3StreamUpload', function(req, res, next) {
        var busboy = new Busboy({headers: req.headers});

        Promise.all([UtilService.upload_promise(busboy),
                     UtilService.form_to_json(busboy)]).then(resp=>{

            let programacao = resp[1];
            programacao.link_video = resp[0].Location;
            programacao.nome_video = resp[0].key;

            ProgramacaoService.save_promogramacao(programacao).then(resp=>{
                res.json({msg:"Sucesso ao cadastrar programação!"})
            });
        }).catch(function(e){
            res.json({msg:"Erro"+e});
        })

        req.pipe(busboy);
     });


    app.get('/', function(req, res) {
        res.render('index.ejs'); // load the index.ejs file
    });

    app.get('/program', function(req, res) {
        res.render('program.ejs'); // load the index.ejs file
    });

    app.get('/profile_program', function(req, res) {
        res.render('profile_program.ejs'); // load the index.ejs file
    });

    app.get('/edit_program', function(req, res) {
        res.render('edit_program.ejs'); // load the index.ejs file
    });


    app.get('/singUp_program', function(req, res) {
        res.render('singUp_program.ejs'); // load the index.ejs file
    });

    app.get('/singUp_program', function(req, res) {
        res.render('singUp_program.ejs'); // load the index.ejs file
    });
    app.get('/profile', function(req, res) {
        res.render('profile.ejs'); // load the index.ejs file
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