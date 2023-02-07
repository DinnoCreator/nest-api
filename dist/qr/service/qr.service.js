"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QrService = void 0;
const common_1 = require("@nestjs/common");
const qrcode = require("qrcode");
let QrService = class QrService {
    async qrGetter() {
        const feeds = ["feed1", "feed2", "feed3", "feed4"];
        const number = Math.floor(Math.random() * feeds.length);
        const code = await qrcode.toDataURL(`http://localhost:3000/${feeds[number]}`);
        return { qrcode: code };
    }
};
QrService = __decorate([
    (0, common_1.Injectable)()
], QrService);
exports.QrService = QrService;
//# sourceMappingURL=qr.service.js.map