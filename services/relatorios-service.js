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
    },
    get_qtd_analises: function () {
        return new Promise(function (resolve, reject) {
            sequelize.query("SELECT  count(*) as qtd ,DATE_FORMAT(data_created, '%m') as mes from analise  where DATE_FORMAT(data_created, '%Y') = YEAR(CURDATE()) group by mes;", { type: sequelize.QueryTypes.SELECT})
            .then(resp => {
                resolve(resp);
                // We don't need spread here, since only the results will be returned for select queries
            }).catch(e =>{
                reject(e);
            })
        })
    },
    get_qtd_programacao: function () {
        return new Promise(function (resolve, reject) {
            sequelize.query("SELECT  count(*) as qtd ,DATE_FORMAT(createdAt, '%m') as mes from programacao  where DATE_FORMAT(createdAt, '%Y') = YEAR(CURDATE()) group by mes;", { type: sequelize.QueryTypes.SELECT})
            .then(resp => {
                resolve(resp);
                // We don't need spread here, since only the results will be returned for select queries
            }).catch(e =>{
                reject(e);
            })
        })
    },
    get_qtd_analisada_todas: function () {
        return new Promise(function (resolve, reject) {
            sequelize.query("select count(*) as todas , count(id_programacao) as analisadas from programacao p left join  analise a on a.id_programacao = p.id;", { type: sequelize.QueryTypes.SELECT})
            .then(resp => {
                resolve(resp);
                // We don't need spread here, since only the results will be returned for select queries
            }).catch(e =>{
                reject(e);
            })
        })
    },
    get_qtd_emissoras: function () {
        return new Promise(function (resolve, reject) {
            sequelize.query("select  count(*) as qtd ,nome_emissora from programacao p inner join analise a on p.id = a.id_programacao group by nome_emissora;", { type: sequelize.QueryTypes.SELECT})
            .then(resp => {
                resolve(resp);
                // We don't need spread here, since only the results will be returned for select queries
            }).catch(e =>{
                reject(e);
            })
        })
    }

}