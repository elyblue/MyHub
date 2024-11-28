"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHolder = void 0;
const error_handle_1 = require("../utils/error.handle");
const getHolder = (req, res) => {
    try {
        res.send({
            data: "PERMITIDO SOLO CON SESSION JWT",
            user: req.user,
        });
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, "ERROR_GET_HOLDER");
    }
};
exports.getHolder = getHolder;
