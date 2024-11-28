"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePatient = exports.updatePatient = exports.postPatient = exports.getPatients = exports.getPatient = void 0;
const getPatient = (req, res) => {
    try {
    }
    catch (error) {
        res.status(500).send("An error occurred");
    }
};
exports.getPatient = getPatient;
const getPatients = (req, res) => {
    try {
    }
    catch (error) {
        res.status(500).send("An error occurred");
    }
};
exports.getPatients = getPatients;
const updatePatient = (req, res) => {
    try {
    }
    catch (error) {
        res.status(500).send("An error occurred");
    }
};
exports.updatePatient = updatePatient;
const postPatient = ({ body }, res) => {
    try {
        res.send(body);
    }
    catch (error) {
        res.status(500).send("An error occurred");
    }
};
exports.postPatient = postPatient;
const deletePatient = (req, res) => {
    try {
    }
    catch (error) {
        res.status(500).send("An error occurred");
    }
};
exports.deletePatient = deletePatient;
