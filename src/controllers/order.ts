import { Request, Response } from "express";

const getPatient = (req: Request, res: Response) => {
    try {
      } catch (error) {
        res.status(500).send("An error occurred"); 
      }  
};

const getPatients = (req: Request, res: Response) => {
    try {
      } catch (error) {
        res.status(500).send("An error occurred"); 
      }
};

const updatePatient = (req: Request, res: Response) => {
    try {
      } catch (error) {
        res.status(500).send("An error occurred"); 
      }
};

const postPatient = ({ body }: Request, res: Response) => {
  try {
    res.send(body);
  } catch (error) {
    res.status(500).send("An error occurred"); 
  }
};

const deletePatient = (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(500).send("An error occurred"); 
  }
};

export { getPatient, getPatients, postPatient, updatePatient, deletePatient };


