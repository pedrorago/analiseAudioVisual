const User = require('../server/models').User
var bCrypt = require('bcrypt-nodejs');

module.exports = {
    create_user: function (user) {
        return new Promise((resolve, reject) => {
            let newpassword = bCrypt.hashSync(user.password, bCrypt.genSaltSync(8), null);
            user.password = newpassword;

            User.findOne({ where: { email: user.email } }).then(function (u) {

                if (u) {
                    reject('email já existe!');
                }

                else {
                    console.log(user)
                    User.create(user).then(function (newUser, created) {
                        resolve(newUser)
                    });
                }
            }).catch(e => {
                reject(e);
            });
        })
    },
    edit_user: function (user) {
        var generateHash = function (password) {
            return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };

        return new Promise((resolve, reject) => {
            User.findOne({ where: { email: user.email } }).then(function (u) {
                let currentPassword = user.currentPassword;
                if (u) {
                    let valide = bCrypt.compareSync(currentPassword, u.password);
                    if (!valide) {
                        reject("senha não confere");
                    } else {
                        var userPassword = generateHash(user.newpassword);
                        user.password = userPassword;
                        console.log(user)
                        User.update(
                            user,
                            { where: { email: user.email } }
                        ).then(res => {
                            resolve(res);
                        })
                    }
                }
                else {
                    reject('email não encontrado');
                }
            })
        })
    },
    send_email(user) {

        const nodemailer = require('nodemailer');

        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        nodemailer.createTestAccount((err, account) => {
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                       user: 'saav.analise@gmail.com',
                       pass: 'saav123456'
                   }
               });

            // setup email data with unicode symbols
            let mailOptions = {
                from: 'SAAV', // sender address
                to: user.email, // list of receivers
                subject: 'Senha de acesso - SAAV', // Subject line
                text: 'Senha de acesso - SAAV', // plain text body
                html: "<div style='margin: 0 auto; padding: 0; display: grid; background: #262d41;'> <div style=' width: 100%; height: 100%; opacity: 0.2; background-image:url(http://creativeit.io/material-dashboard-lite/images/Dark_background_1920x1080.png); display: grid; padding: 3em 0em;'> <div style='width: 39em; border-top: 5px solid #00acc7; height: 30em; margin: auto; padding: 4em 5em; background: #000000; margin-bottom: 15em'> <div><img src='https://image.ibb.co/bs8kLA/logo.png' style='margin-left: -1.9em' alt='Logomarca SAAV'></div><div> <h3 style=' font-family: Roboto; color: #fff; font-size: 1.4em; font-weight: 500; margin-top: 0em; margin-bottom: .2em;'>SAAV</h3> <p style=' color: #fff; font-size: 1.2em; font-weight: 300; margin-top: 0em; margin-bottom: 2em;'>Sistema de Analise Audiovisual</p><p style=' color: #fff; margin-left: 0; font-size: 1em; font-weight: 300; margin-top: 0em;'>Você foi convidado para se tornar um membro do Sistema de Anlise Audiovisual.</p><p style=' color: #fff; font-size: 1em; font-weight: 300; margin-top: 0em;'>Para mais utilizar o nosso sistema <a href='http://saav-analise.com' target='_blank'>clique aqui</a> e faça login.</p><p style=' color: #fff; font-size: 1em; font-weight: 300; margin-top: 0em;'><strong>Login: </strong> " +user.email+"</p><p style=' color: #fff; font-size: 1em; font-weight: 300; margin-top: 0em;'><strong>Senha:</strong> "+user.password+"</p><p style='color: #fff; font-size: .9em; font-weight: 300; margin-top: 4em;'>Cuida da sua senha, não à informe para ninguém para evitar roubo e fraude. Todos os direitos reservados a SAAV.</p></div></div></div></div>"
            }
            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            });
        });
    }
}