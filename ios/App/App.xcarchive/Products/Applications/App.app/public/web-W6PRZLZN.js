import {
  WebPlugin
} from "./chunk-YB7CDXXA.js";
import {
  __async
} from "./chunk-LQ2EECYJ.js";

// node_modules/@capacitor/geolocation/dist/esm/web.js
var GeolocationWeb = class extends WebPlugin {
  getCurrentPosition(options) {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((pos) => {
          resolve(pos);
        }, (err) => {
          reject(err);
        }, Object.assign({
          enableHighAccuracy: false,
          timeout: 1e4,
          maximumAge: 0
        }, options));
      });
    });
  }
  watchPosition(options, callback) {
    return __async(this, null, function* () {
      const id = navigator.geolocation.watchPosition((pos) => {
        callback(pos);
      }, (err) => {
        callback(null, err);
      }, Object.assign({
        enableHighAccuracy: false,
        timeout: 1e4,
        maximumAge: 0,
        minimumUpdateInterval: 5e3
      }, options));
      return `${id}`;
    });
  }
  clearWatch(options) {
    return __async(this, null, function* () {
      navigator.geolocation.clearWatch(parseInt(options.id, 10));
    });
  }
  checkPermissions() {
    return __async(this, null, function* () {
      if (typeof navigator === "undefined" || !navigator.permissions) {
        throw this.unavailable("Permissions API not available in this browser");
      }
      const permission = yield navigator.permissions.query({
        name: "geolocation"
      });
      return {
        location: permission.state,
        coarseLocation: permission.state
      };
    });
  }
  requestPermissions() {
    return __async(this, null, function* () {
      throw this.unimplemented("Not implemented on web.");
    });
  }
};
var Geolocation = new GeolocationWeb();
export {
  Geolocation,
  GeolocationWeb
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY2FwYWNpdG9yL2dlb2xvY2F0aW9uL2Rpc3QvZXNtL3dlYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXZWJQbHVnaW4gfSBmcm9tICdAY2FwYWNpdG9yL2NvcmUnO1xuZXhwb3J0IGNsYXNzIEdlb2xvY2F0aW9uV2ViIGV4dGVuZHMgV2ViUGx1Z2luIHtcbiAgYXN5bmMgZ2V0Q3VycmVudFBvc2l0aW9uKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihwb3MgPT4ge1xuICAgICAgICByZXNvbHZlKHBvcyk7XG4gICAgICB9LCBlcnIgPT4ge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH0sIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBlbmFibGVIaWdoQWNjdXJhY3k6IGZhbHNlLFxuICAgICAgICB0aW1lb3V0OiAxMDAwMCxcbiAgICAgICAgbWF4aW11bUFnZTogMFxuICAgICAgfSwgb3B0aW9ucykpO1xuICAgIH0pO1xuICB9XG4gIGFzeW5jIHdhdGNoUG9zaXRpb24ob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICBjb25zdCBpZCA9IG5hdmlnYXRvci5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKHBvcyA9PiB7XG4gICAgICBjYWxsYmFjayhwb3MpO1xuICAgIH0sIGVyciA9PiB7XG4gICAgICBjYWxsYmFjayhudWxsLCBlcnIpO1xuICAgIH0sIE9iamVjdC5hc3NpZ24oe1xuICAgICAgZW5hYmxlSGlnaEFjY3VyYWN5OiBmYWxzZSxcbiAgICAgIHRpbWVvdXQ6IDEwMDAwLFxuICAgICAgbWF4aW11bUFnZTogMCxcbiAgICAgIG1pbmltdW1VcGRhdGVJbnRlcnZhbDogNTAwMFxuICAgIH0sIG9wdGlvbnMpKTtcbiAgICByZXR1cm4gYCR7aWR9YDtcbiAgfVxuICBhc3luYyBjbGVhcldhdGNoKG9wdGlvbnMpIHtcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uY2xlYXJXYXRjaChwYXJzZUludChvcHRpb25zLmlkLCAxMCkpO1xuICB9XG4gIGFzeW5jIGNoZWNrUGVybWlzc2lvbnMoKSB7XG4gICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgPT09ICd1bmRlZmluZWQnIHx8ICFuYXZpZ2F0b3IucGVybWlzc2lvbnMpIHtcbiAgICAgIHRocm93IHRoaXMudW5hdmFpbGFibGUoJ1Blcm1pc3Npb25zIEFQSSBub3QgYXZhaWxhYmxlIGluIHRoaXMgYnJvd3NlcicpO1xuICAgIH1cbiAgICBjb25zdCBwZXJtaXNzaW9uID0gYXdhaXQgbmF2aWdhdG9yLnBlcm1pc3Npb25zLnF1ZXJ5KHtcbiAgICAgIG5hbWU6ICdnZW9sb2NhdGlvbidcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgbG9jYXRpb246IHBlcm1pc3Npb24uc3RhdGUsXG4gICAgICBjb2Fyc2VMb2NhdGlvbjogcGVybWlzc2lvbi5zdGF0ZVxuICAgIH07XG4gIH1cbiAgYXN5bmMgcmVxdWVzdFBlcm1pc3Npb25zKCkge1xuICAgIHRocm93IHRoaXMudW5pbXBsZW1lbnRlZCgnTm90IGltcGxlbWVudGVkIG9uIHdlYi4nKTtcbiAgfVxufVxuY29uc3QgR2VvbG9jYXRpb24gPSBuZXcgR2VvbG9jYXRpb25XZWIoKTtcbmV4cG9ydCB7IEdlb2xvY2F0aW9uIH07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ08sSUFBTSxpQkFBTixjQUE2QixVQUFVO0FBQUEsRUFDdEMsbUJBQW1CLFNBQVM7QUFBQTtBQUNoQyxhQUFPLElBQUksUUFBUSxDQUFDLFNBQVMsV0FBVztBQUN0QyxrQkFBVSxZQUFZLG1CQUFtQixTQUFPO0FBQzlDLGtCQUFRLEdBQUc7QUFBQSxRQUNiLEdBQUcsU0FBTztBQUNSLGlCQUFPLEdBQUc7QUFBQSxRQUNaLEdBQUcsT0FBTyxPQUFPO0FBQUEsVUFDZixvQkFBb0I7QUFBQSxVQUNwQixTQUFTO0FBQUEsVUFDVCxZQUFZO0FBQUEsUUFDZCxHQUFHLE9BQU8sQ0FBQztBQUFBLE1BQ2IsQ0FBQztBQUFBLElBQ0g7QUFBQTtBQUFBLEVBQ00sY0FBYyxTQUFTLFVBQVU7QUFBQTtBQUNyQyxZQUFNLEtBQUssVUFBVSxZQUFZLGNBQWMsU0FBTztBQUNwRCxpQkFBUyxHQUFHO0FBQUEsTUFDZCxHQUFHLFNBQU87QUFDUixpQkFBUyxNQUFNLEdBQUc7QUFBQSxNQUNwQixHQUFHLE9BQU8sT0FBTztBQUFBLFFBQ2Ysb0JBQW9CO0FBQUEsUUFDcEIsU0FBUztBQUFBLFFBQ1QsWUFBWTtBQUFBLFFBQ1osdUJBQXVCO0FBQUEsTUFDekIsR0FBRyxPQUFPLENBQUM7QUFDWCxhQUFPLEdBQUcsRUFBRTtBQUFBLElBQ2Q7QUFBQTtBQUFBLEVBQ00sV0FBVyxTQUFTO0FBQUE7QUFDeEIsZ0JBQVUsWUFBWSxXQUFXLFNBQVMsUUFBUSxJQUFJLEVBQUUsQ0FBQztBQUFBLElBQzNEO0FBQUE7QUFBQSxFQUNNLG1CQUFtQjtBQUFBO0FBQ3ZCLFVBQUksT0FBTyxjQUFjLGVBQWUsQ0FBQyxVQUFVLGFBQWE7QUFDOUQsY0FBTSxLQUFLLFlBQVksK0NBQStDO0FBQUEsTUFDeEU7QUFDQSxZQUFNLGFBQWEsTUFBTSxVQUFVLFlBQVksTUFBTTtBQUFBLFFBQ25ELE1BQU07QUFBQSxNQUNSLENBQUM7QUFDRCxhQUFPO0FBQUEsUUFDTCxVQUFVLFdBQVc7QUFBQSxRQUNyQixnQkFBZ0IsV0FBVztBQUFBLE1BQzdCO0FBQUEsSUFDRjtBQUFBO0FBQUEsRUFDTSxxQkFBcUI7QUFBQTtBQUN6QixZQUFNLEtBQUssY0FBYyx5QkFBeUI7QUFBQSxJQUNwRDtBQUFBO0FBQ0Y7QUFDQSxJQUFNLGNBQWMsSUFBSSxlQUFlOyIsIm5hbWVzIjpbXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
