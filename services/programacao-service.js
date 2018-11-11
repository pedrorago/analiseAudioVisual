const Programacao = require('../server/models').Programacao
const sequelize = require('../server/models').sequelize;

module.exports = {

    get_all_promogramacao: function (req) {
        sql = 'where 1 = 1';
        if(req.body.emissora){
            sql = sql + ' and emissora = '+ "'"+req.body.emissora+"'";
        }
        if(req.body.dia_emissao){
            sql = sql + ' and DATE_FORMAT(dia_emissao,"%d/%m/%Y") = '+ '"'+req.body.dia_emissao+'"';
        }
        if(req.body.status){
            sql = sql + ' and status = '+ '"'+req.body.status+'"';
        }
        sql = sql + ' and excluido = 0 order by id desc';

        return new Promise(function (resolve, reject) {
            sequelize.query(" select * from programacao "+ sql, { type: sequelize.QueryTypes.SELECT})
            .then(resp => {
                resolve(resp);
                // We don't need spread here, since only the results will be returned for select queries
            }).catch(e =>{
                reject(e);
            })
        })
    },


    save_promogramacao: function (programacao) {
        return new Promise(function (resolve, reject) {
            //programacao.dia_emissao = new Date();
            Programacao.create(programacao).then(resp => {
                resolve(resp);
            }).catch(e => {
                reject(e);
            })
        })
    },

    /*get_all_promogramacao: function () {
        return new Promise(function (resolve, reject) {
            Programacao.findAll({where:{excluido:0}, order: [
                ['id', 'DESC']
            ],}).then(programacao => {
                resolve(programacao);
            }).catch(e => {
                reject(e);
            })
        })
    },*/

    get_promogramacao: function (id) {
        return new Promise(function (resolve, reject) {
            Programacao.findOne({ where: { id: id } }).then(programacao => {
                resolve(programacao);
            }).catch(e => {
                reject(e);
            })
        })
    },

    edit_promogramacao: function (program) {
        return new Promise(function (resolve, reject) {
            console.log(req.params)
            Programacao.update(program,
                { where: { id: req.params.program_id } }
            ).then(function (rowsUpdated) {
                resolve(rowsUpdated);
            })
                .catch(e => {
                    reject(e);
                })
        })
    },

    update_status_programa: function (id,status) {
        return new Promise(function (resolve, reject) {
            sequelize.query("update programacao set status='"+status+"' where id="+id)
            .then(resp => {
                resolve(resp);
                // We don't need spread here, since only the results will be returned for select queries
            }).catch(e =>{
                reject(e);
            })
        })
    },


    delete_promogramacao: function (id) {
        return new Promise(function (resolve, reject) {
            Programacao.update({ excluido: 1 },
                { where: { id: id } }
            ).then(function (rowsUpdated) {
                resolve(rowsUpdated);
            })
                .catch(e => {
                    reject(e);
                })
        })
    }
}