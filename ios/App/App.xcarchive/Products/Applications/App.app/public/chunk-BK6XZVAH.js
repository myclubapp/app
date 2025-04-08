import {
  registerPlugin
} from "./chunk-YB7CDXXA.js";
import {
  __async
} from "./chunk-LQ2EECYJ.js";

// node_modules/@capacitor/google-maps/dist/esm/implementation.js
var CapacitorGoogleMaps = registerPlugin("CapacitorGoogleMaps", {
  web: () => import("./web-W6FZ4XML.js").then((m) => new m.CapacitorGoogleMapsWeb())
});
CapacitorGoogleMaps.addListener("isMapInFocus", (data) => {
  var _a;
  const x = data.x;
  const y = data.y;
  const elem = document.elementFromPoint(x, y);
  const internalId = (_a = elem === null || elem === void 0 ? void 0 : elem.dataset) === null || _a === void 0 ? void 0 : _a.internalId;
  const mapInFocus = internalId === data.mapId;
  CapacitorGoogleMaps.dispatchMapEvent({
    id: data.mapId,
    focus: mapInFocus
  });
});

// node_modules/@capacitor/google-maps/dist/esm/definitions.js
var LatLngBounds = class {
  constructor(bounds) {
    this.southwest = bounds.southwest;
    this.center = bounds.center;
    this.northeast = bounds.northeast;
  }
  contains(point) {
    return __async(this, null, function* () {
      const result = yield CapacitorGoogleMaps.mapBoundsContains({
        bounds: this,
        point
      });
      return result["contains"];
    });
  }
  extend(point) {
    return __async(this, null, function* () {
      const result = yield CapacitorGoogleMaps.mapBoundsExtend({
        bounds: this,
        point
      });
      this.southwest = result["bounds"]["southwest"];
      this.center = result["bounds"]["center"];
      this.northeast = result["bounds"]["northeast"];
      return this;
    });
  }
};
var MapType;
(function(MapType2) {
  MapType2["Normal"] = "Normal";
  MapType2["Hybrid"] = "Hybrid";
  MapType2["Satellite"] = "Satellite";
  MapType2["Terrain"] = "Terrain";
  MapType2["None"] = "None";
})(MapType || (MapType = {}));

export {
  CapacitorGoogleMaps,
  LatLngBounds,
  MapType
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY2FwYWNpdG9yL2dvb2dsZS1tYXBzL2Rpc3QvZXNtL2ltcGxlbWVudGF0aW9uLmpzIiwibm9kZV9tb2R1bGVzL0BjYXBhY2l0b3IvZ29vZ2xlLW1hcHMvZGlzdC9lc20vZGVmaW5pdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVnaXN0ZXJQbHVnaW4gfSBmcm9tICdAY2FwYWNpdG9yL2NvcmUnO1xuY29uc3QgQ2FwYWNpdG9yR29vZ2xlTWFwcyA9IHJlZ2lzdGVyUGx1Z2luKCdDYXBhY2l0b3JHb29nbGVNYXBzJywge1xuICB3ZWI6ICgpID0+IGltcG9ydCgnLi93ZWInKS50aGVuKG0gPT4gbmV3IG0uQ2FwYWNpdG9yR29vZ2xlTWFwc1dlYigpKVxufSk7XG5DYXBhY2l0b3JHb29nbGVNYXBzLmFkZExpc3RlbmVyKCdpc01hcEluRm9jdXMnLCBkYXRhID0+IHtcbiAgdmFyIF9hO1xuICBjb25zdCB4ID0gZGF0YS54O1xuICBjb25zdCB5ID0gZGF0YS55O1xuICBjb25zdCBlbGVtID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh4LCB5KTtcbiAgY29uc3QgaW50ZXJuYWxJZCA9IChfYSA9IGVsZW0gPT09IG51bGwgfHwgZWxlbSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWxlbS5kYXRhc2V0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaW50ZXJuYWxJZDtcbiAgY29uc3QgbWFwSW5Gb2N1cyA9IGludGVybmFsSWQgPT09IGRhdGEubWFwSWQ7XG4gIENhcGFjaXRvckdvb2dsZU1hcHMuZGlzcGF0Y2hNYXBFdmVudCh7XG4gICAgaWQ6IGRhdGEubWFwSWQsXG4gICAgZm9jdXM6IG1hcEluRm9jdXNcbiAgfSk7XG59KTtcbmV4cG9ydCB7IENhcGFjaXRvckdvb2dsZU1hcHMgfTtcbiIsImltcG9ydCB7IENhcGFjaXRvckdvb2dsZU1hcHMgfSBmcm9tICcuL2ltcGxlbWVudGF0aW9uJztcbmV4cG9ydCBjbGFzcyBMYXRMbmdCb3VuZHMge1xuICBjb25zdHJ1Y3Rvcihib3VuZHMpIHtcbiAgICB0aGlzLnNvdXRod2VzdCA9IGJvdW5kcy5zb3V0aHdlc3Q7XG4gICAgdGhpcy5jZW50ZXIgPSBib3VuZHMuY2VudGVyO1xuICAgIHRoaXMubm9ydGhlYXN0ID0gYm91bmRzLm5vcnRoZWFzdDtcbiAgfVxuICBhc3luYyBjb250YWlucyhwb2ludCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IENhcGFjaXRvckdvb2dsZU1hcHMubWFwQm91bmRzQ29udGFpbnMoe1xuICAgICAgYm91bmRzOiB0aGlzLFxuICAgICAgcG9pbnRcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0Wydjb250YWlucyddO1xuICB9XG4gIGFzeW5jIGV4dGVuZChwb2ludCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IENhcGFjaXRvckdvb2dsZU1hcHMubWFwQm91bmRzRXh0ZW5kKHtcbiAgICAgIGJvdW5kczogdGhpcyxcbiAgICAgIHBvaW50XG4gICAgfSk7XG4gICAgdGhpcy5zb3V0aHdlc3QgPSByZXN1bHRbJ2JvdW5kcyddWydzb3V0aHdlc3QnXTtcbiAgICB0aGlzLmNlbnRlciA9IHJlc3VsdFsnYm91bmRzJ11bJ2NlbnRlciddO1xuICAgIHRoaXMubm9ydGhlYXN0ID0gcmVzdWx0Wydib3VuZHMnXVsnbm9ydGhlYXN0J107XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbmV4cG9ydCB2YXIgTWFwVHlwZTtcbihmdW5jdGlvbiAoTWFwVHlwZSkge1xuICAvKipcbiAgICogQmFzaWMgbWFwLlxuICAgKi9cbiAgTWFwVHlwZVtcIk5vcm1hbFwiXSA9IFwiTm9ybWFsXCI7XG4gIC8qKlxuICAgKiBTYXRlbGxpdGUgaW1hZ2VyeSB3aXRoIHJvYWRzIGFuZCBsYWJlbHMuXG4gICAqL1xuICBNYXBUeXBlW1wiSHlicmlkXCJdID0gXCJIeWJyaWRcIjtcbiAgLyoqXG4gICAqIFNhdGVsbGl0ZSBpbWFnZXJ5IHdpdGggbm8gbGFiZWxzLlxuICAgKi9cbiAgTWFwVHlwZVtcIlNhdGVsbGl0ZVwiXSA9IFwiU2F0ZWxsaXRlXCI7XG4gIC8qKlxuICAgKiBUb3BvZ3JhcGhpYyBkYXRhLlxuICAgKi9cbiAgTWFwVHlwZVtcIlRlcnJhaW5cIl0gPSBcIlRlcnJhaW5cIjtcbiAgLyoqXG4gICAqIE5vIGJhc2UgbWFwIHRpbGVzLlxuICAgKi9cbiAgTWFwVHlwZVtcIk5vbmVcIl0gPSBcIk5vbmVcIjtcbn0pKE1hcFR5cGUgfHwgKE1hcFR5cGUgPSB7fSkpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBLElBQU0sc0JBQXNCLGVBQWUsdUJBQXVCO0FBQUEsRUFDaEUsS0FBSyxNQUFNLE9BQU8sbUJBQU8sRUFBRSxLQUFLLE9BQUssSUFBSSxFQUFFLHVCQUF1QixDQUFDO0FBQ3JFLENBQUM7QUFDRCxvQkFBb0IsWUFBWSxnQkFBZ0IsVUFBUTtBQUN0RCxNQUFJO0FBQ0osUUFBTSxJQUFJLEtBQUs7QUFDZixRQUFNLElBQUksS0FBSztBQUNmLFFBQU0sT0FBTyxTQUFTLGlCQUFpQixHQUFHLENBQUM7QUFDM0MsUUFBTSxjQUFjLEtBQUssU0FBUyxRQUFRLFNBQVMsU0FBUyxTQUFTLEtBQUssYUFBYSxRQUFRLE9BQU8sU0FBUyxTQUFTLEdBQUc7QUFDM0gsUUFBTSxhQUFhLGVBQWUsS0FBSztBQUN2QyxzQkFBb0IsaUJBQWlCO0FBQUEsSUFDbkMsSUFBSSxLQUFLO0FBQUEsSUFDVCxPQUFPO0FBQUEsRUFDVCxDQUFDO0FBQ0gsQ0FBQzs7O0FDZE0sSUFBTSxlQUFOLE1BQW1CO0FBQUEsRUFDeEIsWUFBWSxRQUFRO0FBQ2xCLFNBQUssWUFBWSxPQUFPO0FBQ3hCLFNBQUssU0FBUyxPQUFPO0FBQ3JCLFNBQUssWUFBWSxPQUFPO0FBQUEsRUFDMUI7QUFBQSxFQUNNLFNBQVMsT0FBTztBQUFBO0FBQ3BCLFlBQU0sU0FBUyxNQUFNLG9CQUFvQixrQkFBa0I7QUFBQSxRQUN6RCxRQUFRO0FBQUEsUUFDUjtBQUFBLE1BQ0YsQ0FBQztBQUNELGFBQU8sT0FBTyxVQUFVO0FBQUEsSUFDMUI7QUFBQTtBQUFBLEVBQ00sT0FBTyxPQUFPO0FBQUE7QUFDbEIsWUFBTSxTQUFTLE1BQU0sb0JBQW9CLGdCQUFnQjtBQUFBLFFBQ3ZELFFBQVE7QUFBQSxRQUNSO0FBQUEsTUFDRixDQUFDO0FBQ0QsV0FBSyxZQUFZLE9BQU8sUUFBUSxFQUFFLFdBQVc7QUFDN0MsV0FBSyxTQUFTLE9BQU8sUUFBUSxFQUFFLFFBQVE7QUFDdkMsV0FBSyxZQUFZLE9BQU8sUUFBUSxFQUFFLFdBQVc7QUFDN0MsYUFBTztBQUFBLElBQ1Q7QUFBQTtBQUNGO0FBQ08sSUFBSTtBQUFBLENBQ1YsU0FBVUEsVUFBUztBQUlsQixFQUFBQSxTQUFRLFFBQVEsSUFBSTtBQUlwQixFQUFBQSxTQUFRLFFBQVEsSUFBSTtBQUlwQixFQUFBQSxTQUFRLFdBQVcsSUFBSTtBQUl2QixFQUFBQSxTQUFRLFNBQVMsSUFBSTtBQUlyQixFQUFBQSxTQUFRLE1BQU0sSUFBSTtBQUNwQixHQUFHLFlBQVksVUFBVSxDQUFDLEVBQUU7IiwibmFtZXMiOlsiTWFwVHlwZSJdLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMCwxXX0=
