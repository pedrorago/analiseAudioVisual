const Programacao = require('../server/models').Programacao

module.exports = {
    save_promogramacao : function(programacao){
        return new Promise(function(resolve,reject){
            programacao.dia_emissao = new Date();
            Programacao.create(programacao).then(resp=>{
                resolve(resp);
            }).catch(e=>{
                reject(e);
            })
        })
    }
}