import { Module } from "@nestjs/common";
import { QrController } from "./controller/qr.controller";
import { QrService } from "./service/qr.service";

@Module({
    controllers: [QrController],
    providers: [QrService],
})

export class QrModule{}