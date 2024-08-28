import { Request, Response, NextFunction } from "express";
import MeasureService from "../Services/MeasureService";

export default class MeasureController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MeasureService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MeasureService();
  }

  public upload = async (): Promise<void> => {
    try {
      const requestBody = this.req.body;
      const { code, message } = await this.service.upload(requestBody);
      this.res.status(code).send({ message: message });
    } catch (error) {
      this.next(error);
    }
  };

  public patch = async (): Promise<void> => {
    try {
      const requestBody = this.req.body;
      const { code, message } = await this.service.patch(requestBody);
      this.res.status(code).send({ message: message });
    } catch (error) {
      this.next(error);
    }
  };

  public customerList = async (): Promise<void> => {
    try {
      const requestBody = this.req.body;
      const { code, message } = await this.service.customerList(requestBody);
      this.res.status(code).send({ message: message });
    } catch (error) {
      this.next(error);
    }
  };
}
