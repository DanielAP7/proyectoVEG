CREATE DATABASE IF NOT EXISTS videojuego;

USE videojuego;

CREATE TABLE personajes (
    id_personaje    INTEGER         NOT NULL    AUTO_INCREMENT,
    nombre          VARCHAR(128)    NOT NULL,
    descripcion     TEXT,
    imagen          VARCHAR(255),
    PRIMARY KEY (id_personaje)
);

CREATE TABLE decisiones (
    id_decision     INTEGER         NOT NULL    AUTO_INCREMENT,
    texto           TEXT            NOT NULL,
    consecuencias   TEXT,
    PRIMARY KEY (id_decision)
);

CREATE TABLE escenas (
    id_escena       INTEGER         NOT NULL    AUTO_INCREMENT,
    titulo          VARCHAR(255)    NOT NULL,
    contenido       TEXT,
    fk_id_decision  INTEGER         NOT NULL,
    PRIMARY KEY (id_escena),
    FOREIGN KEY (fk_id_decision) REFERENCES decisiones(id_decision)
);

CREATE TABLE progreso_jugador (
    id_progreso     INTEGER         NOT NULL    AUTO_INCREMENT,
    fk_id_usuario   INTEGER         NOT NULL,
    fk_id_escena    INTEGER         NOT NULL,
    PRIMARY KEY (id_progreso),
    FOREIGN KEY (fk_id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (fk_id_escena) REFERENCES escenas(id_escena)
);
