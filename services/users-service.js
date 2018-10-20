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
        var generateHash = function(password) {
            return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };

        return new Promise((resolve, reject) => {
            User.findOne({ where: { email: user.email } }).then(function (u) {
                let currentPassword = user.currentPassword;
                if (u) {
                    let valide = bCrypt.compareSync(currentPassword ,u.password);
                    if (!valide) {
                        reject("senha não confere");
                    }else{
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
    }
}