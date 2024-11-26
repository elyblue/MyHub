import { Request, Response, Router } from "express";
import { deleteHolder, getHolders, getHolder, postHolder, updateHolder } from "../controllers/holder";


const router = Router();
//http://localhost:3002/holder --GET--//

router.get("/id", getHolder);

router.get("/:", getHolders);

router.post("/", postHolder);

router.put("/:id", updateHolder);

router.delete("/:id", deleteHolder);

export { router };