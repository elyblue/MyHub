import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interfaces/req-ext";
import { handleHttp } from "../utils/error.handle";

const getHolder = (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: "Solo personal autorizado",
      user: req.user,
    });
  } catch (e) {
    handleHttp(res, "ERROR_GET_HOLDER");
  }
};

export { getHolder };