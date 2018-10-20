const sequelize = require('../server/models').sequelize;

module.exports = {

    get_last_analise: function () {
            return new Promise(function (resolve, reject) {
                sequelize.query("select u.name,u.photo, TIMEDIFF(NOW(),a.data_created) as time from analise a inner join Users u on a.id_user = u.id order by time asc limit 5;", { type: sequelize.QueryTypes.SELECT})
                .then(resp => {
                    resolve(resp);
                    // We don't need spread here, since only the results will be returned for select queries
                }).catch(e =>{
                    reject(e);
                })
            })
    },

    get_last_analise: function () {
            return new Promise(function (resolve, reject) {
                sequelize.query("select u.name,u.photo, TIMEDIFF(NOW(),a.data_created) as time from analise a inner join Users u on a.id_user = u.id order by time asc limit 5;", { type: sequelize.QueryTypes.SELECT})
                .then(resp => {
                    resolve(resp);
                    // We don't need spread here, since only the results will be returned for select queries
                }).catch(e =>{
                    reject(e);
                })
            })
    }

}