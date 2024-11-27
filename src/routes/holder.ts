import { Request, Response, Router } from "express";
import { deleteHolder, getallHolders, postHolder, updateHolder } from "../controllers/holder";
import { logMiddleware } from "../middleware/log";


const router = Router();
//http://localhost:3002/holder --GET--//


router.get("/", logMiddleware, getallHolders);

router.post("/", postHolder);

router.put("/:id", updateHolder);

router.delete("/:id", deleteHolder);

export { router };