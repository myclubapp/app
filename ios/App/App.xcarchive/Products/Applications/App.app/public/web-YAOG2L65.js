import {
  WebPlugin
} from "./chunk-YB7CDXXA.js";
import {
  __async
} from "./chunk-LQ2EECYJ.js";

// node_modules/@capacitor/share/dist/esm/web.js
var ShareWeb = class extends WebPlugin {
  canShare() {
    return __async(this, null, function* () {
      if (typeof navigator === "undefined" || !navigator.share) {
        return {
          value: false
        };
      } else {
        return {
          value: true
        };
      }
    });
  }
  share(options) {
    return __async(this, null, function* () {
      if (typeof navigator === "undefined" || !navigator.share) {
        throw this.unavailable("Share API not available in this browser");
      }
      yield navigator.share({
        title: options.title,
        text: options.text,
        url: options.url
      });
      return {};
    });
  }
};
export {
  ShareWeb
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY2FwYWNpdG9yL3NoYXJlL2Rpc3QvZXNtL3dlYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXZWJQbHVnaW4gfSBmcm9tICdAY2FwYWNpdG9yL2NvcmUnO1xuZXhwb3J0IGNsYXNzIFNoYXJlV2ViIGV4dGVuZHMgV2ViUGx1Z2luIHtcbiAgYXN5bmMgY2FuU2hhcmUoKSB7XG4gICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgPT09ICd1bmRlZmluZWQnIHx8ICFuYXZpZ2F0b3Iuc2hhcmUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGFzeW5jIHNoYXJlKG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIG5hdmlnYXRvciA9PT0gJ3VuZGVmaW5lZCcgfHwgIW5hdmlnYXRvci5zaGFyZSkge1xuICAgICAgdGhyb3cgdGhpcy51bmF2YWlsYWJsZSgnU2hhcmUgQVBJIG5vdCBhdmFpbGFibGUgaW4gdGhpcyBicm93c2VyJyk7XG4gICAgfVxuICAgIGF3YWl0IG5hdmlnYXRvci5zaGFyZSh7XG4gICAgICB0aXRsZTogb3B0aW9ucy50aXRsZSxcbiAgICAgIHRleHQ6IG9wdGlvbnMudGV4dCxcbiAgICAgIHVybDogb3B0aW9ucy51cmxcbiAgICB9KTtcbiAgICByZXR1cm4ge307XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDTyxJQUFNLFdBQU4sY0FBdUIsVUFBVTtBQUFBLEVBQ2hDLFdBQVc7QUFBQTtBQUNmLFVBQUksT0FBTyxjQUFjLGVBQWUsQ0FBQyxVQUFVLE9BQU87QUFDeEQsZUFBTztBQUFBLFVBQ0wsT0FBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGLE9BQU87QUFDTCxlQUFPO0FBQUEsVUFDTCxPQUFPO0FBQUEsUUFDVDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUE7QUFBQSxFQUNNLE1BQU0sU0FBUztBQUFBO0FBQ25CLFVBQUksT0FBTyxjQUFjLGVBQWUsQ0FBQyxVQUFVLE9BQU87QUFDeEQsY0FBTSxLQUFLLFlBQVkseUNBQXlDO0FBQUEsTUFDbEU7QUFDQSxZQUFNLFVBQVUsTUFBTTtBQUFBLFFBQ3BCLE9BQU8sUUFBUTtBQUFBLFFBQ2YsTUFBTSxRQUFRO0FBQUEsUUFDZCxLQUFLLFFBQVE7QUFBQSxNQUNmLENBQUM7QUFDRCxhQUFPLENBQUM7QUFBQSxJQUNWO0FBQUE7QUFDRjsiLCJuYW1lcyI6W10sInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
