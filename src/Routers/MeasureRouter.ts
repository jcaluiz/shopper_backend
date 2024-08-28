import { NextFunction, Request, Response, Router } from "express";
import MeasureController from "../Controllers/MeasureController";

const router = Router();

router.post("/upload", (req: Request, res: Response, next: NextFunction) =>
  new MeasureController(req, res, next).upload()
);

router.patch("/confirm", (req: Request, res: Response, next: NextFunction) =>
  new MeasureController(req, res, next).patch()
);

router.get(
  "/:customer_code/list",
  (req: Request, res: Response, next: NextFunction) =>
    new MeasureController(req, res, next).customerList()
);

export default router;
