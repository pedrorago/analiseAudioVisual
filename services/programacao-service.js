const Programacao = require('../server/models').Programacao

module.exports = {
    save_promogramacao: function (programacao) {
        return new Promise(function (resolve, reject) {
            programacao.dia_emissao = new Date();
            Programacao.create(programacao).then(resp => {
                resolve(resp);
            }).catch(e => {
                reject(e);
            })
        })
    },

    get_all_promogramacao: function () {
        return new Promise(function (resolve, reject) {
            Programacao.findAll().then(programacao => {
                resolve(programacao);
            }).catch(e => {
                reject(e);
            })
        })
    },

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

    delete_promogramacao: function (id) {
        return new Promise(function (resolve, reject) {
            console.log(req.params)
            Programacao.update({ excluido: 1 },
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