import { Injectable } from "@nestjs/common";
import * as qrcode from "qrcode";

@Injectable()

export class QrService{
    async qrGetter (){
      const feeds = ["feed1", "feed2", "feed3", "feed4"];
      const number = Math.floor(Math.random() * feeds.length);
    const code = await qrcode.toDataURL(`https://movie-viewer.onrender.com/${feeds[number]}`);
     return {qrcode: code};
  }
}