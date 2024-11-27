import { holder } from "../interfaces/holder.interface";
import HolderModel from "../models/holder";
import { handleHttp } from "../utils/error.handle";


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

const getallHolders = async () => {
  try {
    const responseHolder = await HolderModel.find({});
    console.log("Holder encontrado en MongoDB:", responseHolder);
    return responseHolder;
  } catch (error) {
  }
};

const getHolder = async (id: string) => {
  console.log(`Buscando holder con ID: ${id}`);
  try {
    const responseHolder = await HolderModel.findOne({ _id: id });
    console.log("Holder encontrado en MongoDB:", responseHolder);
    return responseHolder;
  } catch (error) {
    console.error(`Error al buscar el holder con ID ${id} en MongoDB:`, error);
  }
};


const updateHolder = async (id: string, data: holder) => {
  console.log(`Actualizando holder con ID: ${id}`, data);
  try {
    const responseHolder = await HolderModel.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });
    console.log("holder actualizado en MongoDB:", responseHolder);
    return responseHolder;
  } catch (error) {
    console.error(`Error al actualizar el holder con ID ${id} en MongoDB:`, error);
  }
};

const deleteHolder = async (id: string) => {
  console.log(`Eliminando holder con ID: ${id}`);
  try {
    const responseHolder = await HolderModel.deleteOne({ _id: id });
    console.log(`holder con ID ${id} eliminado de MongoDB:`, responseHolder);
    return responseHolder;
  } catch (error) {
    console.error(`Error al eliminar el holder con ID ${id} en MongoDB:`, error);
  }
};

export { insertHolder, getallHolders, getHolder, updateHolder, deleteHolder };