import {
  WebPlugin
} from "./chunk-YB7CDXXA.js";
import {
  __async
} from "./chunk-LQ2EECYJ.js";

// node_modules/myclub-widget-plugin/dist/esm/web.js
var MyClubAppWidgetWeb = class extends WebPlugin {
  echo(options) {
    return __async(this, null, function* () {
      console.log("ECHO", options);
      return options;
    });
  }
  setItem(options) {
    return __async(this, null, function* () {
      console.log("SET ITEM", options);
      try {
        localStorage.setItem(`${options.group}-${options.key}`, options.value);
        return {
          results: true
        };
      } catch (e) {
        console.error("Error setting item in localStorage", e);
        return {
          results: false
        };
      }
    });
  }
  reloadAllTimelines() {
    return __async(this, null, function* () {
      console.log("RELOAD ALL TIMELINES");
      return {
        results: true
      };
    });
  }
  reloadTimelines(options) {
    return __async(this, null, function* () {
      console.log("RELOAD TIMELINES of kind", options.ofKind);
      return {
        results: true
      };
    });
  }
};
export {
  MyClubAppWidgetWeb
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9teWNsdWItd2lkZ2V0LXBsdWdpbi9kaXN0L2VzbS93ZWIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV2ViUGx1Z2luIH0gZnJvbSAnQGNhcGFjaXRvci9jb3JlJztcbmV4cG9ydCBjbGFzcyBNeUNsdWJBcHBXaWRnZXRXZWIgZXh0ZW5kcyBXZWJQbHVnaW4ge1xuICBhc3luYyBlY2hvKG9wdGlvbnMpIHtcbiAgICBjb25zb2xlLmxvZygnRUNITycsIG9wdGlvbnMpO1xuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG4gIGFzeW5jIHNldEl0ZW0ob3B0aW9ucykge1xuICAgIGNvbnNvbGUubG9nKCdTRVQgSVRFTScsIG9wdGlvbnMpO1xuICAgIC8vIFNpbmNlIHRoZSB3ZWIgZG9lc24ndCBoYXZlIGEgZGlyZWN0IGVxdWl2YWxlbnQgb2YgaU9TJ3MgVXNlckRlZmF1bHRzIHdpdGggQXBwIEdyb3VwcyxcbiAgICAvLyB5b3UgY291bGQgdXNlIGxvY2FsU3RvcmFnZSBvciBzZXNzaW9uU3RvcmFnZSBmb3IgdGhlIHdlYi5cbiAgICAvLyBIZXJlJ3MgYW4gZXhhbXBsZSB1c2luZyBsb2NhbFN0b3JhZ2U6XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke29wdGlvbnMuZ3JvdXB9LSR7b3B0aW9ucy5rZXl9YCwgb3B0aW9ucy52YWx1ZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByZXN1bHRzOiB0cnVlXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNldHRpbmcgaXRlbSBpbiBsb2NhbFN0b3JhZ2UnLCBlKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlc3VsdHM6IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBhc3luYyByZWxvYWRBbGxUaW1lbGluZXMoKSB7XG4gICAgY29uc29sZS5sb2coJ1JFTE9BRCBBTEwgVElNRUxJTkVTJyk7XG4gICAgLy8gT24gdGhlIHdlYiwgdGhlcmUncyBubyBkaXJlY3QgZXF1aXZhbGVudCB0byBXaWRnZXRDZW50ZXIncyByZWxvYWRBbGxUaW1lbGluZXMsXG4gICAgLy8gc28geW91IGNhbiBqdXN0IHJldHVybiBhIGR1bW15IHJlc3BvbnNlLlxuICAgIHJldHVybiB7XG4gICAgICByZXN1bHRzOiB0cnVlXG4gICAgfTtcbiAgfVxuICBhc3luYyByZWxvYWRUaW1lbGluZXMob3B0aW9ucykge1xuICAgIGNvbnNvbGUubG9nKCdSRUxPQUQgVElNRUxJTkVTIG9mIGtpbmQnLCBvcHRpb25zLm9mS2luZCk7XG4gICAgLy8gT24gdGhlIHdlYiwgdGhlcmUncyBubyBkaXJlY3QgZXF1aXZhbGVudCB0byBXaWRnZXRDZW50ZXIncyByZWxvYWRUaW1lbGluZXMsXG4gICAgLy8gc28gdGhpcyBpcyBhIG5vLW9wIHRoYXQganVzdCByZXR1cm5zIGEgZHVtbXkgc3VjY2VzcyByZXNwb25zZS5cbiAgICByZXR1cm4ge1xuICAgICAgcmVzdWx0czogdHJ1ZVxuICAgIH07XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDTyxJQUFNLHFCQUFOLGNBQWlDLFVBQVU7QUFBQSxFQUMxQyxLQUFLLFNBQVM7QUFBQTtBQUNsQixjQUFRLElBQUksUUFBUSxPQUFPO0FBQzNCLGFBQU87QUFBQSxJQUNUO0FBQUE7QUFBQSxFQUNNLFFBQVEsU0FBUztBQUFBO0FBQ3JCLGNBQVEsSUFBSSxZQUFZLE9BQU87QUFJL0IsVUFBSTtBQUNGLHFCQUFhLFFBQVEsR0FBRyxRQUFRLEtBQUssSUFBSSxRQUFRLEdBQUcsSUFBSSxRQUFRLEtBQUs7QUFDckUsZUFBTztBQUFBLFVBQ0wsU0FBUztBQUFBLFFBQ1g7QUFBQSxNQUNGLFNBQVMsR0FBRztBQUNWLGdCQUFRLE1BQU0sc0NBQXNDLENBQUM7QUFDckQsZUFBTztBQUFBLFVBQ0wsU0FBUztBQUFBLFFBQ1g7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBO0FBQUEsRUFDTSxxQkFBcUI7QUFBQTtBQUN6QixjQUFRLElBQUksc0JBQXNCO0FBR2xDLGFBQU87QUFBQSxRQUNMLFNBQVM7QUFBQSxNQUNYO0FBQUEsSUFDRjtBQUFBO0FBQUEsRUFDTSxnQkFBZ0IsU0FBUztBQUFBO0FBQzdCLGNBQVEsSUFBSSw0QkFBNEIsUUFBUSxNQUFNO0FBR3RELGFBQU87QUFBQSxRQUNMLFNBQVM7QUFBQSxNQUNYO0FBQUEsSUFDRjtBQUFBO0FBQ0Y7IiwibmFtZXMiOltdLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
