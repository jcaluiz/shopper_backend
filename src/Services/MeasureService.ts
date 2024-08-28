import statusCodes from "../shared/statusCodes";
import Measure from "../Database/Models/Measure";
import IUploadData from "../Interfaces/IUploadData";
import HttpException from "../utils/HttpException";

export default class MeasureService {
  public async upload(uploadData: IUploadData) {
    return { code: statusCodes.ok, message: uploadData };
  }

  public async patch(uploadData: IUploadData) {
    return { code: statusCodes.ok, message: uploadData };
  }

  public async customerList(uploadData: IUploadData) {
    return { code: statusCodes.ok, message: uploadData };
  }
}
