import { Injectable } from '@angular/core';
import jsQR from 'jsqr';
import * as UPNG from 'upng-js';

@Injectable({
  providedIn: 'root',
})
export class QrcodeService {
  constructor () {}

  decode (base64: string) {
    const data = UPNG.decode(
      Uint8Array.from(atob(base64), (c) => c.charCodeAt(0))
    );
    const out = {
      data: new Uint8ClampedArray(UPNG.toRGBA8(data)[0]),
      height: data.height,
      width: data.width
    }

    const code = jsQR(out.data, out.width, out.height);

    if (code && code.data) {
      // console.log("Found QR code", code);
      return code.data;
    } else {
      return null;
    }
  }

  base64toUnitArray (base64: string): Uint8ClampedArray {
    return Uint8ClampedArray.from(atob(base64), (c) => c.charCodeAt(0));
  }
}
