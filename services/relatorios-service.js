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
    },
    export: function(res) {
        const excel = require('node-excel-export');
        models.sequelize.query("SELECT * FROM analise a INNER JOIN programacao p on a.id_programacao = p.id;", 
           {type: models.sequelize.QueryTypes.SELECT
        }).then((results, metadata) => {
              //Here you specify the export structure
              const specification = {
                data_created: { // <- the key should match the actual data key
                  displayName: 'Data do início da análise', // <- Here you specify the column header
                  headerStyle: {fgColor: {rgb: 'FFFF0000'}},
                  width: 120 // <- width in pixels
                },
                dia_transmissao: {
                    displayName: 'Dia da veiculação',
                    headerStyle: {fgColor: {rgb: 'FFFF0000'}},
                    width: 220 // <- width in chars (when the number is passed as string)
                  },
                /*emissora: {
                  displayName: 'Emissora',
                  headerStyle: {fgColor: {rgb: 'FFFF0000'}},
                  width: 220 // <- width in chars (when the number is passed as string)
                },*/
                nome_programa: {
                    displayName: 'Nome do programa',
                    headerStyle: {fgColor: {rgb: 'FFFF0000'}},
                    width: 220 // <- width in chars (when the number is passed as string)
                  },
                /*macro_genero: {
                    displayName: 'Macro-gênero',
                    headerStyle: {fgColor: {rgb: 'FFFF0000'}},
                    width: 220 // <- width in chars (when the number is passed as string)
                },*/
                genero: {
                    displayName: 'Gênero',
                    headerStyle: {fgColor: {rgb: 'FFFF0000'}},
                    width: 220 // <- width in chars (when the number is passed as string)
                },
                idioma: {
                    displayName: 'Idioma',
                    headerStyle: {fgColor: {rgb: 'FFFF0000'}},
                    width: 220 // <- width in chars (when the number is passed as string)
                },
                nacionalidade_producao: {
                    displayName: 'Nacionalidade de produção',
                    headerStyle: {fgColor: {rgb: 'FFFF0000'}},
                    width: 220 // <- width in chars (when the number is passed as string)
                },
                conteudo: {
                    displayName: 'O conteúdo é',
                    headerStyle: {fgColor: {rgb: 'FFFF0000'}},
                    width: 220 // <- width in chars (when the number is passed as string)
                },
                /*material_analisado: {
                    displayName: 'Material analisado',
                    headerStyle: {fgColor: {rgb: 'FFFF0000'}},
                    width: 220 // <- width in chars (when the number is passed as string)
                },*/
                classificacao_indicativa: {
                    displayName: 'Classificação indicativa inicialmente divulgada pela emissora',
                    headerStyle: {fgColor: {rgb: 'FFFF0000'}},
                    width: 220 // <- width in chars (when the number is passed as string)
                },
                enredo_conteudo: {
                    displayName: 'Enredo do conteúdo',
                    headerStyle: {fgColor: {rgb: 'FFFF0000'}},
                    width: 220 // <- width in chars (when the number is passed as string)
                },
                conteudo_violento: {
                    displayName: 'O material em análise apresenta algum tipo de conteúdo violento?',
                    headerStyle: {fgColor: {rgb: 'FFFF0000'}},
                    width: 220 // <- width in chars (when the number is passed as string)
                },
                relevancia_conteudo_trama: {
                    displayName: 'Relevância do conteúdo violento para a trama',
                    headerStyle: {fgColor: {rgb: 'FFFF0000'}},
                    width: 220 // <- width in chars (when the number is passed as string)
                },
                referencia_conteudo_violento: {
                    displayName: 'Referências ao conteúdo violento:',
                    headerStyle: {fgColor: {rgb: 'FFFF0000'}},
                    width: 220 // <- width in chars (when the number is passed as string)
                },
                tipo_violencia: {
                    displayName: 'Quanto ao tipo de violência envolvida:',
                    headerStyle: {fgColor: {rgb: 'FFFF0000'}},
                    width: 220 // <- width in chars (when the number is passed as string)
                },
                cena_nudes: {
                    displayName: 'O material em análise apresenta cenas de nudez:',
                    headerStyle: {fgColor: {rgb: 'FFFF0000'}},
                    width: 220 // <- width in chars (when the number is passed as string)
                },
                cena_sexuais: {
                    displayName: 'O material em análise apresenta cenas de relações sexuais em quaisquerperspectivas?',
                    headerStyle: {fgColor: {rgb: 'FFFF0000'}},
                    width: 220 // <- width in chars (when the number is passed as string)
                },
                proprocao_conteudo_sexual: {
                    displayName: 'Não Contém Proporção do conteúdo sexual/com nudez no material analisado:',
                    headerStyle: {fgColor: {rgb: 'FFFF0000'}},
                    width: 220 // <- width in chars (when the number is passed as string)
                },
                relevancia_conteudo_sexual: {
                    displayName: 'Relevância do conteúdo sexual para a trama:',
                    headerStyle: {fgColor: {rgb: 'FFFF0000'}},
                    width: 220 // <- width in chars (when the number is passed as string)
                },
                referencia_conteudo_sexual: {
                    displayName: 'Referências do conteúdo sexual/de nudez no material analisado:',
                    headerStyle: {fgColor: {rgb: 'FFFF0000'}},
                    width: 220 // <- width in chars (when the number is passed as string)
                },
                conteudo_narcoticos: {
                    displayName: 'O material em análise apresenta algum tipo de conteúdo envolvendo drogas?:',
                    headerStyle: {fgColor: {rgb: 'FFFF0000'}},
                    width: 220 // <- width in chars (when the number is passed as string)
                },
                relevancia_conteudo_narcotico: {
                    displayName: 'Relevância do conteúdo envolvendo drogas para a trama:',
                    headerStyle: {fgColor: {rgb: 'FFFF0000'}},
                    width: 220 // <- width in chars (when the number is passed as string)
                },
                referencia_conteudo_drogas: {
                    displayName: 'Referência  ao conteúdo envolvendo drogas:',
                    headerStyle: {fgColor: {rgb: 'FFFF0000'}},
                    width: 220 // <- width in chars (when the number is passed as string)
                },
                tipo_linguagem: {
                    displayName: 'Quanto ao tipo de linguagem:',
                    headerStyle: {fgColor: {rgb: 'FFFF0000'}},
                    width: 220 // <- width in chars (when the number is passed as string)
                },
                tipo_descriminacao: {
                    displayName: 'Quanto ao tipo de discriminação apresentada:',
                    headerStyle: {fgColor: {rgb: 'FFFF0000'}},
                    width: 220 // <- width in chars (when the number is passed as string)
                },
                vinculacao_esteriotipo: {
                    displayName: 'Quando da apresentação de alguns destes grupos há, na maior parte das cenas, a veiculação de estereótipos?',
                    headerStyle: {fgColor: {rgb: 'FFFF0000'}},
                    width: 220 // <- width in chars (when the number is passed as string)
                },
                intensidade_comportamento_descriminatorio: {
                    displayName: 'Quando à intensidade da presença de comportamento discriminatório',
                    headerStyle: {fgColor: {rgb: 'FFFF0000'}},
                    width: 220 // <- width in chars (when the number is passed as string)
                },
                comportamento_descriminatorio: {
                    displayName: 'Quanto ao comportamento discriminatório.',
                    headerStyle: {fgColor: {rgb: 'FFFF0000'}},
                    width: 220 // <- width in chars (when the number is passed as string)
                },
                facebook_id: {
                  displayName: 'FACEBOOK',
                  headerStyle: {fgColor: {rgb: 'FFFF0000'}},
                  width: 220, // <- width in pixels,
                  cellFormat: function(value, row) { // <- style renderer function
                    // if the status is 1 then color in green else color in red
                    // Notice how we use another cell value to style the current one
                    console.log(value)
                    if(value != null){
                        return "Sim"
                    }else{
                        return "Não"
                    }
                  },
                }
              }
               
              // The data set should have the following shape (Array of Objects)
              // The order of the keys is irrelevant, it is also irrelevant if the
              // dataset contains more fields as the report is build based on the
              // specification provided above. But you should have all the fields
              // that are listed in the report specification
              const dataset = results;
               
              // Define an array of merges. 1-1 = A:1
              // The merges are independent of the data.
              // A merge will overwrite all data _not_ in the top-left cell.

               
              // Create the excel report.
              // This function will return Buffer
              const report = excel.buildExport(
                [ // <- Notice that this is an array. Pass multiple sheets to create multi sheet report
                  {
                    name: 'rank', // <- Specify sheet name (optional)
                    specification: specification, // <- Report specification
                    data: dataset // <-- Report data
                  }
                ]
              );
               
              // You can then return this straight
              res.attachment('rank.xlsx'); // This is sails.js specific (in general you need to set headers)
              return res.send(report);

        })
    }

}