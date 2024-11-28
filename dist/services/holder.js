"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteholder = exports.updateholder = exports.getholder = exports.getholders = exports.insertholder = void 0;
const holder_1 = __importDefault(require("../models/holder"));
const insertholder = (holder) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Datos recibidos en insertHolder:", holder);
    try {
        const responseInsert = yield holder_1.default.create(holder);
        console.log("Documento insertado en MongoDB:", responseInsert);
        return responseInsert;
    }
    catch (error) {
        console.error("Error al insertar en MongoDB:", error);
    }
});
exports.insertholder = insertholder;
const getholders = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseHolder = yield holder_1.default.find({});
        console.log("Holder encontrado en MongoDB:", responseHolder);
        return responseHolder;
    }
    catch (error) {
    }
});
exports.getholders = getholders;
const getholder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Buscando holder con ID: ${id}`);
    try {
        const responseHolder = yield holder_1.default.findOne({ _id: id });
        console.log("Holder encontrado en MongoDB:", responseHolder);
        return responseHolder;
    }
    catch (error) {
        console.error(`Error al buscar el holder con ID ${id} en MongoDB:`, error);
    }
});
exports.getholder = getholder;
const updateholder = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Actualizando holder con ID: ${id}`, data);
    try {
        const responseHolder = yield holder_1.default.findOneAndUpdate({ _id: id }, data, {
            new: true,
        });
        console.log("holder actualizado en MongoDB:", responseHolder);
        return responseHolder;
    }
    catch (error) {
        console.error(`Error al actualizar el holder con ID ${id} en MongoDB:`, error);
    }
});
exports.updateholder = updateholder;
const deleteholder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Eliminando holder con ID: ${id}`);
    try {
        const responseHolder = yield holder_1.default.deleteOne({ _id: id });
        console.log(`holder con ID ${id} eliminado de MongoDB:`, responseHolder);
        return responseHolder;
    }
    catch (error) {
        console.error(`Error al eliminar el holder con ID ${id} en MongoDB:`, error);
    }
});
exports.deleteholder = deleteholder;
