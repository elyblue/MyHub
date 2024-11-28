import { Router } from "express";
import { getHolder } from "../controllers/publicholder";
import { checkJwt } from "../middleware/session";


const router = Router();

router.get("/", checkJwt, getHolder);

export { router };