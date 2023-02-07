import { Controller, Get, HttpCode } from "@nestjs/common";
import { QrService } from "../service/qr.service";

@Controller('qrcode')

export class QrController{
  constructor(private qrService: QrService){}

  @HttpCode(200)
  @Get()
  qrget(){
    return this.qrService.qrGetter();
  }
}