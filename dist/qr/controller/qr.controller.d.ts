import { QrService } from "../service/qr.service";
export declare class QrController {
    private qrService;
    constructor(qrService: QrService);
    qrget(): Promise<{
        qrcode: string;
    }>;
}
