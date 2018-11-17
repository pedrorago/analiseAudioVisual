const sequelize = require('../server/models').sequelize;


module.exports = {

    get_last_analise: function() {
        return new Promise(function(resolve, reject) {
            sequelize.query("select u.name,u.photo, TIMEDIFF(NOW(),a.data_created) as time from analise a inner join Users u on a.id_user = u.id order by time asc limit 5;", {
                    type: sequelize.QueryTypes.SELECT
                })
                .then(resp => {
                    resolve(resp);
                    // We don't need spread here, since only the results will be returned for select queries
                }).catch(e => {
                    reject(e);
                })
        })
    },

    get_last_analise: function() {
        return new Promise(function(resolve, reject) {
            sequelize.query("select u.name,u.photo, TIMEDIFF(NOW(),a.data_created) as time from analise a inner join Users u on a.id_user = u.id order by time asc limit 5;", {
                    type: sequelize.QueryTypes.SELECT
                })
                .then(resp => {
                    resolve(resp);
                    // We don't need spread here, since only the results will be returned for select queries
                }).catch(e => {
                    reject(e);
                })
        })
    },
    get_qtd_analises: function() {
        return new Promise(function(resolve, reject) {
            sequelize.query("SELECT  count(*) as qtd ,DATE_FORMAT(data_created, '%m') as mes from analise  where DATE_FORMAT(data_created, '%Y') = YEAR(CURDATE()) group by mes;", {
                    type: sequelize.QueryTypes.SELECT
                })
                .then(resp => {
                    resolve(resp);
                    // We don't need spread here, since only the results will be returned for select queries
                }).catch(e => {
                    reject(e);
                })
        })
    },
    get_qtd_programacao: function() {
        return new Promise(function(resolve, reject) {
            sequelize.query("SELECT  count(*) as qtd ,DATE_FORMAT(createdAt, '%m') as mes from programacao  where DATE_FORMAT(createdAt, '%Y') = YEAR(CURDATE()) group by mes;", {
                    type: sequelize.QueryTypes.SELECT
                })
                .then(resp => {
                    resolve(resp);
                    // We don't need spread here, since only the results will be returned for select queries
                }).catch(e => {
                    reject(e);
                })
        })
    },
    get_qtd_analisada_todas: function() {
        return new Promise(function(resolve, reject) {
            sequelize.query("select count(*) as todas , count(id_programacao) as analisadas from programacao p left join  analise a on a.id_programacao = p.id;", {
                    type: sequelize.QueryTypes.SELECT
                })
                .then(resp => {
                    resolve(resp);
                    // We don't need spread here, since only the results will be returned for select queries
                }).catch(e => {
                    reject(e);
                })
        })
    },
    get_qtd_emissoras: function() {
        return new Promise(function(resolve, reject) {
            sequelize.query("select  count(*) as qtd ,nome_emissora from programacao p inner join analise a on p.id = a.id_programacao group by nome_emissora;", {
                    type: sequelize.QueryTypes.SELECT
                })
                .then(resp => {
                    resolve(resp);
                    // We don't need spread here, since only the results will be returned for select queries
                }).catch(e => {
                    reject(e);
                })
        })
    },
    export: function(res) {
        const excel = require('node-excel-export');
        sequelize.query("SELECT * FROM programacao p left JOIN analise a on a.id_programacao = p.id left join Users u ON u.id = a.id_user", {
            type: sequelize.QueryTypes.SELECT
        }).then((results, metadata) => {
            //Here you specify the export structure
            const specification = {

                dia_transmissao: {
                    displayName: ' dia_transmissao ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                emissora: {
                    displayName: ' nome_emissora ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                nome: {
                    displayName: '  nome_programa',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                macrogenero: {
                    displayName: ' macrogenero ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                periodo_transmissao: {
                    displayName: ' periodo_transmissao ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                genero: {
                    displayName: ' genero ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                idioma: {
                    displayName: ' idioma ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                nacionalidade_procucao: {
                    displayName: ' nacionalidade_procucao ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                conteudo: {
                    displayName: ' conteudo ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                material_analisado: {
                    displayName: ' material_analisado ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                classificacao: {
                    displayName: ' classificacao ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                violencia_fisica: {
                    displayName: ' violencia_fisica ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                violencia_fisica_praticada_por: {
                    displayName: ' violencia_fisica_praticada_por ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                violencia_fisica_praticada_contra: {
                    displayName: ' violencia_fisica_praticada_contra ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                tempo_violencia_fisica: {
                    displayName: 'tempo_violencia_fisica  ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                suicidio: {
                    displayName: ' suicidio ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                suicidio_praticado_por: {
                    displayName: ' suicidio_praticado_por ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                tempo_suicidio: {
                    displayName: ' tempo_suicidio ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                mutilacao: {
                    displayName: '  mutilacao',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                mutilacao_praticada_por: {
                    displayName: ' mutilacao_praticada_por ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                tempo_mutilacao: {
                    displayName: '  tempo_mutilacao',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                tortura_fisica: {
                    displayName: ' tortura_fisica ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                tortura_fisica_praticada_por: {
                    displayName: ' tortura_fisica_praticada_por ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                tortura_fisica_praticada_contra: {
                    displayName: ' tortura_fisica_praticada_contra ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                tempo_tortura_fisica: {
                    displayName: ' tempo_tortura_fisica ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                tortura_psicologica: {
                    displayName: ' tortura_psicologica ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                tortura_psicologica_praticada_por: {
                    displayName: ' tortura_psicologica_praticada_por ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                tortura_psicologica_praticada_contra: {
                    displayName: ' tortura_psicologica_praticada_contra ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                tempo_tortura_psicologica: {
                    displayName: ' tempo_tortura_psicologica ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                violencia_psicologica: {
                    displayName: ' violencia_psicologica ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                violencia_psicologica_causada_por: {
                    displayName: ' violencia_psicologica_causada_por ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                violencia_psicologica_praticada_contra: {
                    displayName: 'violencia_psicologica_praticada_contra  ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                tempo_violencia_psicologica: {
                    displayName: ' tempo_violencia_psicologica ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                violencia_moral: {
                    displayName: 'violencia_moral  ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                violencia_moral_praticada_por: {
                    displayName: ' violencia_moral_praticada_por ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                violencia_moral_praticada_contra: {
                    displayName: '  violencia_moral_praticada_contra',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                tempo_violencia_moral: {
                    displayName: ' tempo_violencia_moral ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                assedio_sexual: {
                    displayName: ' assedio_sexual ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                assedio_sexual_praticada_por: {
                    displayName: ' assedio_sexual_praticada_por ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                assedio_sexual_praticada_contra: {
                    displayName: 'assedio_sexual_praticada_contra  ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                tempo_assedio_sexual: {
                    displayName: ' tempo_assedio_sexual ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                violencia_sexual: {
                    displayName: ' violencia_sexual ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                violencia_sexual_praticada_por: {
                    displayName: ' violencia_sexual_praticada_por ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                violencia_sexual_praticada_contra: {
                    displayName: ' violencia_sexual_praticada_contra ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                tempo_violencia_sexual: {
                    displayName: ' tempo_violencia_sexual ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                exploracao_sexual: {
                    displayName: ' exploracao_sexual ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                exploracao_sexual_praticada_por: {
                    displayName: '  exploracao_sexual_praticada_por',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                exploracao_sexual_praticada_contra: {
                    displayName: ' exploracao_sexual_praticada_contra  ',  
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120 // <- width in pixels
                },
                tempo_exploracao_sexual: {
                    displayName: ' tempo_exploracao_sexual',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                misoginia: {
                    displayName: ' misoginia',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                violencia_fisica_mulher: {
                    displayName: ' violencia_fisica_mulher',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                violencia_fisica_mulher_praticada_por: {
                    displayName: 'violencia_fisica_mulher_praticada_por ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                violencia_fisica_mulher_praticada_contra: {
                    displayName: ' violencia_fisica_mulher_praticada_contra',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_violencia_fisica_mulher: {
                    displayName: 'tempo_violencia_fisica_mulher ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                violencia_psicologica_mulher: {
                    displayName: ' violencia_psicologica_mulher',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                violencia_psicologica_mulher_praticada_por: {
                    displayName: 'violencia_psicologica_mulher_praticada_por ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_violencia_psicologica_mulher: {
                    displayName: 'tempo_violencia_psicologica_mulher ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                violencia_sexual_mulher: {
                    displayName: ' violencia_sexual_mulher',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                violencia_sexual_mulher_praticada_por: {
                    displayName: 'violencia_sexual_mulher_praticada_por ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_violencia_sexual_mulher: {
                    displayName: ' tempo_violencia_sexual_mulher',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                feminicidio: {
                    displayName: 'feminicidio ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                feminicidio_praticada_por: {
                    displayName: ' feminicidio_praticada_por',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_feminicidio: {
                    displayName: ' tempo_feminicidio',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                violencia_familiar: {
                    displayName: ' violencia_familiar',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                violencia_familiar_praticada_por: {
                    displayName: ' violencia_familiar_praticada_por',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                violencia_familiar_praticada_contra: {
                    displayName: 'violencia_familiar_praticada_contra ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_violencia_familiar: {
                    displayName: ' tempo_violencia_familiar',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                violencia_patrimonial: {
                    displayName: 'violencia_patrimonial ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                vviolencia_patrimonial_praticada_por: {
                    displayName: 'vviolencia_patrimonial_praticada_por ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                vviolencia_patrimonial_praticada_contra: {
                    displayName: 'vviolencia_patrimonial_praticada_contra ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_violencia_patrimonial: {
                    displayName: ' tempo_violencia_patrimonial',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                homicidio_culposo: {
                    displayName: ' homicidio_culposo',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                homicidio_culposo_praticada_por: {
                    displayName: ' homicidio_culposo_praticada_por',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                homicidio_culposo_praticada_contra: {
                    displayName: ' homicidio_culposo_praticada_contra',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_homicidio_culposo: {
                    displayName: 'tempo_homicidio_culposo ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                homicidio_doloso: {
                    displayName: ' homicidio_doloso',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                homicidio_doloso_praticada_por: {
                    displayName: 'homicidio_doloso_praticada_por ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                homicidio_doloso_praticada_contra: {
                    displayName: ' homicidio_doloso_praticada_contra',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_homicidio_doloso: {
                    displayName: 'tempo_homicidio_doloso ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                homicidio_qualificado: {
                    displayName: 'homicidio_qualificado ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                homicidio_qualificado_praticada_por: {
                    displayName: ' homicidio_qualificado_praticada_por',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                homicidio_qualificado_praticada_contra: {
                    displayName: ' homicidio_qualificado_praticada_contra',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_homicidio_qualificado: {
                    displayName: ' tempo_homicidio_qualificado',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                nudez_completa: {
                    displayName: ' nudez_completa',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                nudez_completa_praticada_por: {
                    displayName: ' nudez_completa_praticada_por',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_nudez_completa: {
                    displayName: ' tempo_nudez_completa',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                nudez_parcial: {
                    displayName: ' nudez_parcial',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                nudez_parcial_praticada_por: {
                    displayName: ' nudez_parcial_praticada_por',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_nudez_parcial: {
                    displayName: 'tempo_nudez_parcial ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                nudez_velada_opaca: {
                    displayName: 'nudez_velada_opaca ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                nudez_velada_opaca_praticada_por: {
                    displayName: ' nudez_velada_opaca_praticada_por',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_nudez_velada_opaca: {
                    displayName: 'tempo_nudez_velada_opaca ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                insinuacao_sexual: {
                    displayName: 'insinuacao_sexual ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                insinuacao_sexual_praticada_por: {
                    displayName: 'insinuacao_sexual_praticada_por ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_insinuacao_sexual: {
                    displayName: ' tempo_insinuacao_sexual',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                cena_sexo_amor_paixao: {
                    displayName: ' cena_sexo_amor_paixao',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                cena_sexo_amor_paixao_praticada_por: {
                    displayName: ' cena_sexo_amor_paixao_praticada_por',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_cena_sexo_amor_paixao: {
                    displayName: 'tempo_cena_sexo_amor_paixao ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                cena_traicao: {
                    displayName: 'cena_traicao ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                cena_traicao_praticada_por: {
                    displayName: 'cena_traicao_praticada_por ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_cena_traicao: {
                    displayName: 'tempo_cena_traicao ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                cena_sexo_promiscuidade: {
                    displayName: 'cena_sexo_promiscuidade ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                cena_sexo_promiscuidade_praticada_por: {
                    displayName: ' cena_sexo_promiscuidade_praticada_por',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_cena_sexo_promiscuidade: {
                    displayName: 'tempo_cena_sexo_promiscuidade ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                cena_sexo_sem_copulacao: {
                    displayName: ' cena_sexo_sem_copulacao',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                cena_sexo_sem_copulacao_praticada_por: {
                    displayName: 'cena_sexo_sem_copulacao_praticada_por ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_cena_sexo_sem_copulacao: {
                    displayName: ' tempo_cena_sexo_sem_copulacao',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                cena_sexo_oral_anal: {
                    displayName: ' cena_sexo_oral_anal',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                cena_sexo_oral_anal_praticada_por: {
                    displayName: 'cena_sexo_oral_anal_praticada_por ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_cena_sexo_oral_anal: {
                    displayName: ' tempo_cena_sexo_oral_anal',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                insinuacao_sexo_oral_anal: {
                    displayName: ' insinuacao_sexo_oral_anal',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                insinuacao_sexo_oral_anal_praticada_por: {
                    displayName: 'insinuacao_sexo_oral_anal_praticada_por ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_insinuacao_sexo_oral_anal: {
                    displayName: ' tempo_insinuacao_sexo_oral_anal',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                cena_masturbacao_explicita: {
                    displayName: ' cena_masturbacao_explicita',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                cena_masturbacao_explicita_praticada_por: {
                    displayName: ' cena_masturbacao_explicita_praticada_por',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_cena_masturbacao_explicita: {
                    displayName: ' tempo_cena_masturbacao_explicita',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                cena_incesto_explicita: {
                    displayName: 'cena_incesto_explicita ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                cena_incesto_explicita_praticada_por: {
                    displayName: 'cena_incesto_explicita_praticada_por ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_cena_incesto_explicita: {
                    displayName: ' tempo_cena_incesto_explicita',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                cena_insinuacao_incesto: {
                    displayName: ' cena_insinuacao_incesto',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                cena_insinuacao_incesto_praticada_por: {
                    displayName: 'cena_insinuacao_incesto_praticada_por ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_cena_insinuacao_incesto: {
                    displayName: 'tempo_cena_insinuacao_incesto ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                cena_mulher_objeto: {
                    displayName: 'cena_mulher_objeto ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_cena_mulher_objeto: {
                    displayName: ' tempo_cena_mulher_objeto',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                cena_estrupo: {
                    displayName: 'cena_estrupo ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                cena_estrupo_praticada_por: {
                    displayName: ' cena_estrupo_praticada_por',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                cena_estrupo_praticada_contra: {
                    displayName: ' cena_estrupo_praticada_contra',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_cena_estupro: {
                    displayName: 'tempo_cena_estupro ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                cena_estrupo_paixao: {
                    displayName: ' cena_estrupo_paixao',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                cena_estrupo_paixao_praticada_por: {
                    displayName: ' cena_estrupo_paixao_praticada_por',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                cena_estrupo_paixao_praticada_contra: {
                    displayName: 'cena_estrupo_paixao_praticada_contra ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_cena_estupro_paixao: {
                    displayName: 'tempo_cena_estupro_paixao ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                cena_estrupo_drogas: {
                    displayName: ' cena_estrupo_drogas',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                cena_estrupo_drogas_praticada_por: {
                    displayName: 'cena_estrupo_drogas_praticada_por ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                cena_estrupo_drogas_praticada_contra: {
                    displayName: 'cena_estrupo_drogas_praticada_contra ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_cena_estrupo_drogas: {
                    displayName: ' tempo_cena_estrupo_drogas',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                discriminacao_homossesual_masculino: {
                    displayName: 'discriminacao_homossesual_masculino ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                discriminacao_homossesual_masculino_praticada_por: {
                    displayName: 'discriminacao_homossesual_masculino_praticada_por ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_discriminacao_homossesual_masculino: {
                    displayName: ' tempo_discriminacao_homossesual_masculino',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                violencia_fisica_contra_homossexual_masculino: {
                    displayName: ' violencia_fisica_contra_homossexual_masculino',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                violencia_fisica_contra_homossexual_masculino_praticada_por: {
                    displayName: 'violencia_fisica_contra_homossexual_masculino_praticada_por ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_violencia_fisica_contra_homossexual_masculino: {
                    displayName: 'tempo_violencia_fisica_contra_homossexual_masculino ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                violencia_psicologica_homossexual_masculino: {
                    displayName: ' violencia_psicologica_homossexual_masculino',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                violencia_psicologica_homossexual_masculino_praticada_por: {
                    displayName: ' violencia_psicologica_homossexual_masculino_praticada_por',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_violencia_psicologica_homossexual_masculino: {
                    displayName: 'tempo_violencia_psicologica_homossexual_masculino ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                discriminacao_homossexual_feminino: {
                    displayName: ' discriminacao_homossexual_feminino',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                discriminacao_homossexual_feminino_praticada_por: {
                    displayName: 'discriminacao_homossexual_feminino_praticada_por ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_discriminacao_homossexual_feminino: {
                    displayName: 'tempo_discriminacao_homossexual_feminino ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                violencia_fisica_contra_homossexual_feminino: {
                    displayName: ' violencia_fisica_contra_homossexual_feminino',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                violencia_fisica_contra_homossexual_feminino_praticada_por: {
                    displayName: ' violencia_fisica_contra_homossexual_feminino_praticada_por',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_violencia_fisica_contra_homossexual_feminino: {
                    displayName: ' tempo_violencia_fisica_contra_homossexual_feminino',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                violencia_psicologica_homossexual_feminino: {
                    displayName: ' violencia_psicologica_homossexual_feminino',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                violencia_psicologica_homossexual_feminino_praticada_por: {
                    displayName: ' violencia_psicologica_homossexual_feminino_praticada_por',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_violencia_psicologica_homossexual_feminino: {
                    displayName: 'tempo_violencia_psicologica_homossexual_feminino ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                discriminacao_bissexual: {
                    displayName: ' discriminacao_bissexual',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                discriminacao_bissexual_praticada_por: {
                    displayName: 'discriminacao_bissexual_praticada_por',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_discriminacao_bissexual: {
                    displayName: 'tempo_discriminacao_bissexual ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                violencia_fisica_contra_bissexual: {
                    displayName: ' violencia_fisica_contra_bissexual',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                violencia_fisica_contra_bissexual_praticada_por: {
                    displayName: ' violencia_fisica_contra_bissexual_praticada_por',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_violencia_fisica_contra_bissexual: {
                    displayName: ' tempo_violencia_fisica_contra_bissexual',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                violencia_psicologica_bissexual: {
                    displayName: ' violencia_psicologica_bissexual',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                violencia_psicologica_bissexual_praticada_por: {
                    displayName: 'violencia_psicologica_bissexual_praticada_por ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_violencia_psicologica_bissexual: {
                    displayName: ' tempo_violencia_psicologica_bissexual',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                discriminacao_transexual: {
                    displayName: 'discriminacao_transexual ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                discriminacao_transexual_praticada_por: {
                    displayName: 'discriminacao_transexual_praticada_por ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_discriminacao_transexual: {
                    displayName: ' tempo_discriminacao_transexual',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                violencia_fisica_contra_transexual: {
                    displayName: 'violencia_fisica_contra_transexual ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                violencia_fisica_contra_transexual_praticada_por: {
                    displayName: ' violencia_fisica_contra_transexual_praticada_por',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_violencia_fisica_contra_transexual: {
                    displayName: ' tempo_violencia_fisica_contra_transexual',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                violencia_psicologica_transexual: {
                    displayName: ' violencia_psicologica_transexual',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                violencia_psicologica_transexual_praticada_por: {
                    displayName: ' violencia_psicologica_transexual_praticada_por',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_violencia_psicologica_transexual: {
                    displayName: 'tempo_violencia_psicologica_transexual ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                discriminacao_transgenero: {
                    displayName: 'discriminacao_transgenero ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                discriminacao_transgenero_praticada_por: {
                    displayName: ' discriminacao_transgenero_praticada_por',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_discriminacao_transgenero: {
                    displayName: 'tempo_discriminacao_transgenero ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                violencia_fisica_contra_transgenero: {
                    displayName: ' violencia_fisica_contra_transgenero',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                violencia_fisica_contra_transgenero_praticada_por: {
                    displayName: 'violencia_fisica_contra_transgenero_praticada_por ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_violencia_fisica_contra_transgenero: {
                    displayName: ' tempo_violencia_fisica_contra_transgenero',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                violencia_psicologica_transgenero: {
                    displayName: 'violencia_psicologica_transgenero ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                violencia_psicologica_transgenero_praticada_por: {
                    displayName: 'violencia_psicologica_transgenero_praticada_por ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_violencia_psicologica_transgenero: {
                    displayName: ' tempo_violencia_psicologica_transgenero',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                discriminacao_racial: {
                    displayName: ' discriminacao_racial',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_discriminacao_racial: {
                    displayName: 'tempo_discriminacao_racial ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                racismo_religioso: {
                    displayName: 'racismo_religioso ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                racismo_religioso_contra: {
                    displayName: 'racismo_religioso_contra ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                tempo_racismo_religioso: {
                    displayName: ' tempo_racismo_religioso',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                obs: {
                    displayName: 'obs ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                email: {
                    displayName: 'Analista',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },
                data_created: {
                    displayName: 'Data analise ',
                    headerStyle: {
                        fgColor: {
                            rgb: 'FFFF0000'
                        }
                    },
                    width: 120
                },

                /*facebook_id: {
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
                }*/
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
            res.attachment('relatorio.xlsx'); // This is sails.js specific (in general you need to set headers)
            return res.send(report);

        })
    }

}