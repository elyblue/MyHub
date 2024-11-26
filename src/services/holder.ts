import { holder } from "../interfaces/holder.interface";
import HolderModel from "../models/holder";


const insertHolder = async (holder: any) => {
  console.log("Datos recibidos en insertHolder:", holder); 
  try {
    const responseInsert = await HolderModel.create(holder);
    console.log("Documento insertado en MongoDB:", responseInsert); 
    return responseInsert;
  } catch (error) {
    console.error("Error al insertar en MongoDB:", error); 
  }
};

export default insertHolder;


const getHolders = async () => {
  const responseHolder = await HolderModel.find({});
  return responseHolder;
};

const getHolder = async (id: string) => {
  const responseHolder = await HolderModel.findOne({ _id: id });
  return responseHolder;
};

const updateHolder = async (id: string, data: holder) => {
  const responseHolder = await HolderModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseHolder;
};

const deleteHolder = async (id: string) => {
  const responseHolder = await HolderModel.deleteOne({ _id: id });
  return responseHolder
};

export { insertHolder, getHolders, getHolder, updateHolder, deleteHolder };