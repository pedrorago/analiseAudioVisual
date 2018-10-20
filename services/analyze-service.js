const Analise = require('../server/models').Analise
const ProgramaService = require('../services/programacao-service');
const sequelize = require('../server/models').sequelize;

module.exports = {
    save_analise: function (req) {
        return new Promise(function (resolve, reject) {
            let analise = req.body;
            //analise.id_user = req.user.id;
           
            analise.id_user = 1;
            analise.data_created = new Date();
            console.log(analise);
            Analise.create(analise).then(resp => {
                ProgramaService.update_status_programa(analise.id_programacao,"Analisado").then(resp=>{
                    resolve(resp);
                });
            }).catch(e => {
                reject(e);
            })
        }).catch(e =>{
            reject(e);
        })
    },

    get_all_analise: function () {
            return new Promise(function (resolve, reject) {
                sequelize.query("select u.name, TIMEDIFF(a.data_created,NOW()) from analise a inner join Users u on a.id_user = u.id order by data_created asc  limit 10;")
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
            Analise.findAll().then(programacao => {
                resolve(programacao);
            }).catch(e => {
                reject(e);
            })
        })
    },

    get_analise: function (id) {
        return new Promise(function (resolve, reject) {
            Analise.findOne({ where: { id: id } }).then(programacao => {
                resolve(programacao);
            }).catch(e => {
                reject(e);
            })
        })
    },

    edit_analise: function (program) {
        return new Promise(function (resolve, reject) {
            console.log(req.params)
            Analise.update(program,
                { where: { id: req.params.program_id } }
            ).then(function (rowsUpdated) {
                resolve(rowsUpdated);
            })
                .catch(e => {
                    reject(e);
                })
        })
    },

    delete_analise: function (id) {
        return new Promise(function (resolve, reject) {
            console.log(req.params)
            Analise.update({ excluido: 1 },
                { where: { id: req.params.program_id } }
            ).then(function (rowsUpdated) {
                resolve(rowsUpdated);
            })
                .catch(e => {
                    reject(e);
                })
        })
    }
}