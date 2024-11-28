"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const publicorders_1 = require("../controllers/publicorders");
const session_1 = require("../middleware/session");
/**
 * Esta ruta solo puede acceder las personas que tienen session activa!
 * que tenga un JWT valido!
 */
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", session_1.checkJwt, publicorders_1.getHolder);
