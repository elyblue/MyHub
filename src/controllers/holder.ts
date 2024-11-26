import { Request, Response } from "express";
import { insertHolder } from "../services/holder";
import { handleHttp } from "../utils/error.handle";

const getHolder= (req: Request, res: Response) => {
    try {
      } catch (error) {
        res.status(500).send("An error occurred"); 
      }  
};

const getHolders = (req: Request, res: Response) => {
    try {
      } catch (error) {
        res.status(500).send("An error occurred"); 
      }
};

const updateHolder = (req: Request, res: Response) => {
    try {
      } catch (error) {
        res.status(500).send("An error occurred"); 
      }
};

const postHolder = async ({ body }: Request, res: Response) => {
  try {
    console.log("Cuerpo recibido en el controlador:", body); 
    const responseHolder = await insertHolder(body);
    res.send(responseHolder);
  } catch (e: any) {
    console.error("Error capturado:", e); 
    const errorMessage = e instanceof Error ? e.message : "Error desconocido";
    handleHttp(res, "An error occurred", errorMessage);
  }
};

const deleteHolder = (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(500).send("An error occurred"); 
  }
};

export { getHolder, getHolders, postHolder, updateHolder, deleteHolder };


