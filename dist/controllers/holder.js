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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteHolder = exports.updateHolder = exports.postholder = exports.getHolders = exports.getHolder = void 0;
const holder_1 = require("../services/holder");
const error_handle_1 = require("../utils/error.handle");
const getHolder = (_a, res_1) => __awaiter(void 0, [_a, res_1], void 0, function* ({ params }, res) {
    try {
        const { id } = params;
        const response = yield (0, holder_1.getholder)(id);
        const data = response ? response : "NOT_FOUND";
        res.send(data);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, "ERROR_GET_HOLDER");
    }
});
exports.getHolder = getHolder;
const getHolders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, holder_1.getholders)();
        res.send(response);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, "ERROR_GET_HOLDERS");
    }
});
exports.getHolders = getHolders;
const updateHolder = (_a, res_1) => __awaiter(void 0, [_a, res_1], void 0, function* ({ params, body }, res) {
    try {
        const { id } = params;
        const response = yield (0, holder_1.updateholder)(id, body);
        res.send(response);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, "ERROR_UPDATE_HOLDER");
    }
});
exports.updateHolder = updateHolder;
const postholder = (_a, res_1) => __awaiter(void 0, [_a, res_1], void 0, function* ({ body }, res) {
    try {
        const responseItem = yield (0, holder_1.insertholder)(body);
        res.send(responseItem);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, "ERROR_POST_HOLDER", e);
    }
});
exports.postholder = postholder;
const deleteHolder = (_a, res_1) => __awaiter(void 0, [_a, res_1], void 0, function* ({ params }, res) {
    try {
        const { id } = params;
        const response = yield (0, holder_1.deleteholder)(id);
        res.send(response);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, "ERROR_DELETE_HOLDER");
    }
});
exports.deleteHolder = deleteHolder;
