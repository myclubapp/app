import {
  WebPlugin
} from "./chunk-YB7CDXXA.js";
import {
  __async
} from "./chunk-LQ2EECYJ.js";

// node_modules/@capacitor/dialog/dist/esm/web.js
var DialogWeb = class extends WebPlugin {
  alert(options) {
    return __async(this, null, function* () {
      window.alert(options.message);
    });
  }
  prompt(options) {
    return __async(this, null, function* () {
      const val = window.prompt(options.message, options.inputText || "");
      return {
        value: val !== null ? val : "",
        cancelled: val === null
      };
    });
  }
  confirm(options) {
    return __async(this, null, function* () {
      const val = window.confirm(options.message);
      return {
        value: val
      };
    });
  }
};
export {
  DialogWeb
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY2FwYWNpdG9yL2RpYWxvZy9kaXN0L2VzbS93ZWIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV2ViUGx1Z2luIH0gZnJvbSAnQGNhcGFjaXRvci9jb3JlJztcbmV4cG9ydCBjbGFzcyBEaWFsb2dXZWIgZXh0ZW5kcyBXZWJQbHVnaW4ge1xuICBhc3luYyBhbGVydChvcHRpb25zKSB7XG4gICAgd2luZG93LmFsZXJ0KG9wdGlvbnMubWVzc2FnZSk7XG4gIH1cbiAgYXN5bmMgcHJvbXB0KG9wdGlvbnMpIHtcbiAgICBjb25zdCB2YWwgPSB3aW5kb3cucHJvbXB0KG9wdGlvbnMubWVzc2FnZSwgb3B0aW9ucy5pbnB1dFRleHQgfHwgJycpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsICE9PSBudWxsID8gdmFsIDogJycsXG4gICAgICBjYW5jZWxsZWQ6IHZhbCA9PT0gbnVsbFxuICAgIH07XG4gIH1cbiAgYXN5bmMgY29uZmlybShvcHRpb25zKSB7XG4gICAgY29uc3QgdmFsID0gd2luZG93LmNvbmZpcm0ob3B0aW9ucy5tZXNzYWdlKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbFxuICAgIH07XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDTyxJQUFNLFlBQU4sY0FBd0IsVUFBVTtBQUFBLEVBQ2pDLE1BQU0sU0FBUztBQUFBO0FBQ25CLGFBQU8sTUFBTSxRQUFRLE9BQU87QUFBQSxJQUM5QjtBQUFBO0FBQUEsRUFDTSxPQUFPLFNBQVM7QUFBQTtBQUNwQixZQUFNLE1BQU0sT0FBTyxPQUFPLFFBQVEsU0FBUyxRQUFRLGFBQWEsRUFBRTtBQUNsRSxhQUFPO0FBQUEsUUFDTCxPQUFPLFFBQVEsT0FBTyxNQUFNO0FBQUEsUUFDNUIsV0FBVyxRQUFRO0FBQUEsTUFDckI7QUFBQSxJQUNGO0FBQUE7QUFBQSxFQUNNLFFBQVEsU0FBUztBQUFBO0FBQ3JCLFlBQU0sTUFBTSxPQUFPLFFBQVEsUUFBUSxPQUFPO0FBQzFDLGFBQU87QUFBQSxRQUNMLE9BQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUFBO0FBQ0Y7IiwibmFtZXMiOltdLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
