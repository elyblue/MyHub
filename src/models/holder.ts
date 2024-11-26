import { Schema, model } from "mongoose";
import { holder } from "../interfaces/holder.interface";

const HolderSchema = new Schema<holder>(
  {
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
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const HolderModel = model("holder", HolderSchema);
export default HolderModel;
