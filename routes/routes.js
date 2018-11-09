const request = require('request');
const Busboy = require('busboy');
const UtilService = require('../services/util-service');
const ProgramacaoService = require('../services/programacao-service');
const UserService = require('../services/users-service');
const AnalyzeService = require('../services/analyze-service');

module.exports = function (app, passport) {


    app.post('/s3StreamUpload', function (req, res, next) {
        req.setTimeout(5000000000);
        var busboy = new Busboy({ headers: req.headers });

        Promise.all([UtilService.upload_promise(busboy),
        UtilService.form_to_json(busboy)]).then(resp => {
            resp[1]['status'] = 'Não Analisado';
            let programacao = resp[1];
            programacao.link_video = resp[0].Location;
            programacao.nome_video = resp[0].key;
            console.log(programacao);
            ProgramacaoService.save_promogramacao(programacao).then(resp => {
                res.json({ msg: "Sucesso ao cadastrar programação!" })
            });
        }).catch(function (e) {
            res.json({ msg: "Erro" + e });
        })

        req.pipe(busboy);
    });


    app.get('/get-all-program', function (req, res) {
        ProgramacaoService.get_all_promogramacao().then(resp => {
            res.json(resp);
        }).catch(e => {
            res.json(e);
        });
    });

    app.post('/edit-program/:program_id', function (req, res) {

        var busboy = new Busboy({ headers: req.headers });
        Promise.all([UtilService.upload_promise(busboy),
        UtilService.form_to_json(busboy)])

            .then(resp => {

                let programacao = resp[1];
                programacao.link_video = resp[0].Location;
                programacao.nome_video = resp[0].key;

                ProgramacaoService.edit_promogramacao(programacao).then(resp => {
                    res.json({ msg: "Sucesso ao cadastrar programação!" })
                });

            }).catch(function (e) {
                res.json({ msg: "Erro" + e });
            })
    });

    app.get('/delete-program/:program_id',isLoggedIn, function (req, res) {
        res.locals.user = req.user;
        ProgramacaoService.delete_promogramacao(req.params.program_id).then(resp => {
            res.redirect('/program');
        });
    });

    app.post('/create-user', function (req, res) {
        let user = {};
        var busboy = new Busboy({ headers: req.headers });
        Promise.all([UtilService.file_to_base64(busboy),
        UtilService.form_to_json(busboy)])
            .then(resp => {
                
                user = resp[1];
                user['photo'] = resp[0][0];
                user.createdAt = new Date();

                return UserService.create_user(user);

            }).then(resp => {
                res.locals.user = req.user;
                res.render('signup.ejs', {
                    message: req.flash('signupMessage')
                });
            })
            .catch(function (e) {
                res.json(e);
            })
        req.pipe(busboy);
    });

    app.post('/edit-user', function (req, res) {
        res.locals.user = req.user;
        var busboy = new Busboy({ headers: req.headers });
        Promise.all([UtilService.file_to_base64(busboy),
        UtilService.form_to_json(busboy)])
            .then(resp => {
                let user = resp[1];
                user['photo'] = resp[0][0];
                return UserService.edit_user(user);

            }).then(resp => {
                res.redirect('profile');
            })
            .catch(function (e) {
                res.json(e);
            })
        req.pipe(busboy);
    });

    app.get('/',isLoggedIn, function (req, res) {
        res.locals.user = req.user;
        AnalyzeService.get_last_analise().then(resp =>{
            AnalyzeService.get_my_analise(req.user.id).then(resp2 =>{
                res.render('index.ejs',{last:resp,mine:resp2}); // load the index.ejs file
            })
        })
    });

    app.get('/program',isLoggedIn, function (req, res) {
        res.locals.user = req.user;
        ProgramacaoService.get_all_promogramacao().then(resp=>{
            //res.json(resp); // load the index.ejs file
            res.render('program.ejs',
            {   programs:resp
            });
        })
    });

    
    app.get('/reports', function (req, res) {
        res.locals.user = req.user;
        res.render('reports.ejs'); // load the index.ejs file
    });


    app.get('/analyze', function (req, res) {
        res.locals.user = req.user;
        res.render('analyze.ejs'); // load the index.ejs file
    });

    app.post('/save-analyze', function (req, res) {
        res.locals.user = req.user;
        AnalyzeService.save_analise(req).then(resp => {
            res.json("Sucesso ao salvar analise!");
        });
    });

    app.get('/analyze/:id_program',isLoggedIn, function (req, res) {
        res.locals.user = req.user;
        ProgramacaoService.get_promogramacao(req.params.id_program).then(resp=>{
            //res.json(resp); // load the index.ejs file

            res.render('analyze.ejs',
            {   program:resp
            });
        })
    });

    app.get('/profile_program/:id_program', function (req, res) {
        res.locals.user = req.user;
        ProgramacaoService.get_promogramacao(req.params.id_program).then(resp=>{
            //res.json(resp); // load the index.ejs file

            res.render('profile_program.ejs',
            {   program:resp
            });
        })

    });

    app.get('/profile_program',isLoggedIn, function (req, res) {
       
            res.render('profile_program.ejs',
            {   program:null
            });

    });

    app.get('/edit_program/:id_program',isLoggedIn, function (req, res) {
        res.locals.user = req.user;
        ProgramacaoService.get_promogramacao(req.params.id_program).then(resp=>{
            //res.json(resp); // load the index.ejs file

            res.render('edit_program.ejs',
            {   program:resp
            });
        })
        // // load the index.ejs file
    });

    app.get('/edit_program',isLoggedIn, function (req, res) {
        res.locals.user = req.user;
            res.render('edit_program.ejs',
            {   program:null
            });
        // // load the index.ejs file
    });

    app.get('/singUp_program',isLoggedIn, function (req, res) {
        res.locals.user = req.user;
        res.render('singUp_program.ejs'); // load the index.ejs file
    });

    app.get('/statistics',isLoggedIn, function (req, res) {
        res.locals.user = req.user;
        res.render('statistics.ejs'); // load the index.ejs file
    });
    app.get('/profile',isLoggedIn, function (req, res) {
        res.locals.user = req.user;
        res.render('profile.ejs'); // load the index.ejs file
    });


    app.get('/login', function (req, res) {
        res.render('login.ejs', {
            message: req.flash('loginMessage')
        });
    });
    app.get('/forgot', function (req, res) {
        res.render('forgot.ejs', {
            message: req.flash('forgotMessege')
        });
    });
    app.post('/login', function (req, res, next) {
        passport.authenticate('local-login', function (err, user, info) {
            console.log(user)
            if (err) {
                return res.json({
                    "responseCode": 0, msg: err
                })
            }
            if (!user) {
                return res.json({
                    "responseCode": 0, msg: info
                })
            }
            req.logIn(user, function (err) {
                if (err) {
                    return next(err);
                }
                /*return res.json({
                    "responseCode": 1
                })*/
                res.locals.user = req.user;
                req.user = user;
                res.redirect('/');
            });
        })(req, res, next)
    })

    app.get('/signup',isLoggedIn, function (req, res) {
        res.render('signup.ejs', {
            message: req.flash('signupMessage')
        });
    });


    app.post('/signup',isLoggedIn, passport.authenticate('local-signup', {
        successRedirect: '/profile',
        failureRedirect: '/signup',
        failureFlash: true
    }));

    app.get('/profile', isLoggedIn, function (req, res) {
        res.render('profile.ejs', {
            user: req.user
        });
    });

    app.get('/logout', function (req, res) {
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
    request(verificationUrl, function (error, response, body) {
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