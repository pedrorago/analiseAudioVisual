
CREATE TABLE programacao (
	id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	nome TEXT,
    dia_emissao datetime,
    emissora TEXT,
    hora_inicio datetime,
    hora_fim datetime,
    link_video TEXT,
    nome_video TEXT,
    usuario_id int(10),
    status varchar(255)
);


CREATE TABLE categoria (
	id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	nome text,
    cod int(10),
    definicao text
);

CREATE TABLE subcategoria (
	id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	nome text,
    categoria_id int(10),
    cod int(10),
    definicao text
);

CREATE TABLE analise (
	id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	programacao_id int(10),
    subcategoria_id int(10),
	categoria_id int(10),
    data_criacao datetime,
    usuario_id int(10)
);



