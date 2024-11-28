"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const HolderSchema = new mongoose_1.Schema({
    pacienteId: {
        type: Number,
    },
    documento: {
        type: Number,
    },
    nombre: {
        type: String,
    },
    apellido: {
        type: String,
    },
    sexo: {
        type: String,
        enum: ["F", "M", "X"],
    },
    fechaNacimiento: {
        type: String,
    },
    celular: {
        type: Number,
    },
    email: {
        type: String,
    },
    pais: {
        type: String,
    },
    provincia: {
        type: String,
    },
    localidad: {
        type: String,
    },
    domicilio: {
        type: String,
    },
    cobertura: {
        type: String,
    },
    afiliado: {
        type: String,
    },
}, {
    timestamps: true,
    versionKey: false,
});
const HolderModel = (0, mongoose_1.model)("holder", HolderSchema);
exports.default = HolderModel;
