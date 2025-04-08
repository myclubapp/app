import {
  LatLngBounds,
  MapType
} from "./chunk-BK6XZVAH.js";
import {
  WebPlugin
} from "./chunk-YB7CDXXA.js";
import {
  __async,
  __commonJS,
  __toESM
} from "./chunk-LQ2EECYJ.js";

// node_modules/fast-deep-equal/index.js
var require_fast_deep_equal = __commonJS({
  "node_modules/fast-deep-equal/index.js"(exports, module) {
    "use strict";
    module.exports = function equal2(a, b) {
      if (a === b) return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length) return false;
          for (i = length; i-- !== 0; ) if (!equal2(a[i], b[i])) return false;
          return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for (i = length; i-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for (i = length; i-- !== 0; ) {
          var key = keys[i];
          if (!equal2(a[key], b[key])) return false;
        }
        return true;
      }
      return a !== a && b !== b;
    };
  }
});

// node_modules/@googlemaps/markerclusterer/dist/index.esm.js
var import_fast_deep_equal = __toESM(require_fast_deep_equal());

// node_modules/kdbush/index.js
var ARRAY_TYPES = [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];
var VERSION = 1;
var HEADER_SIZE = 8;
var KDBush = class _KDBush {
  /**
   * Creates an index from raw `ArrayBuffer` data.
   * @param {ArrayBuffer} data
   */
  static from(data) {
    if (!(data instanceof ArrayBuffer)) {
      throw new Error("Data must be an instance of ArrayBuffer.");
    }
    const [magic, versionAndType] = new Uint8Array(data, 0, 2);
    if (magic !== 219) {
      throw new Error("Data does not appear to be in a KDBush format.");
    }
    const version = versionAndType >> 4;
    if (version !== VERSION) {
      throw new Error(`Got v${version} data when expected v${VERSION}.`);
    }
    const ArrayType = ARRAY_TYPES[versionAndType & 15];
    if (!ArrayType) {
      throw new Error("Unrecognized array type.");
    }
    const [nodeSize] = new Uint16Array(data, 2, 1);
    const [numItems] = new Uint32Array(data, 4, 1);
    return new _KDBush(numItems, nodeSize, ArrayType, data);
  }
  /**
   * Creates an index that will hold a given number of items.
   * @param {number} numItems
   * @param {number} [nodeSize=64] Size of the KD-tree node (64 by default).
   * @param {TypedArrayConstructor} [ArrayType=Float64Array] The array type used for coordinates storage (`Float64Array` by default).
   * @param {ArrayBuffer} [data] (For internal use only)
   */
  constructor(numItems, nodeSize = 64, ArrayType = Float64Array, data) {
    if (isNaN(numItems) || numItems < 0) throw new Error(`Unpexpected numItems value: ${numItems}.`);
    this.numItems = +numItems;
    this.nodeSize = Math.min(Math.max(+nodeSize, 2), 65535);
    this.ArrayType = ArrayType;
    this.IndexArrayType = numItems < 65536 ? Uint16Array : Uint32Array;
    const arrayTypeIndex = ARRAY_TYPES.indexOf(this.ArrayType);
    const coordsByteSize = numItems * 2 * this.ArrayType.BYTES_PER_ELEMENT;
    const idsByteSize = numItems * this.IndexArrayType.BYTES_PER_ELEMENT;
    const padCoords = (8 - idsByteSize % 8) % 8;
    if (arrayTypeIndex < 0) {
      throw new Error(`Unexpected typed array class: ${ArrayType}.`);
    }
    if (data && data instanceof ArrayBuffer) {
      this.data = data;
      this.ids = new this.IndexArrayType(this.data, HEADER_SIZE, numItems);
      this.coords = new this.ArrayType(this.data, HEADER_SIZE + idsByteSize + padCoords, numItems * 2);
      this._pos = numItems * 2;
      this._finished = true;
    } else {
      this.data = new ArrayBuffer(HEADER_SIZE + coordsByteSize + idsByteSize + padCoords);
      this.ids = new this.IndexArrayType(this.data, HEADER_SIZE, numItems);
      this.coords = new this.ArrayType(this.data, HEADER_SIZE + idsByteSize + padCoords, numItems * 2);
      this._pos = 0;
      this._finished = false;
      new Uint8Array(this.data, 0, 2).set([219, (VERSION << 4) + arrayTypeIndex]);
      new Uint16Array(this.data, 2, 1)[0] = nodeSize;
      new Uint32Array(this.data, 4, 1)[0] = numItems;
    }
  }
  /**
   * Add a point to the index.
   * @param {number} x
   * @param {number} y
   * @returns {number} An incremental index associated with the added item (starting from `0`).
   */
  add(x, y) {
    const index = this._pos >> 1;
    this.ids[index] = index;
    this.coords[this._pos++] = x;
    this.coords[this._pos++] = y;
    return index;
  }
  /**
   * Perform indexing of the added points.
   */
  finish() {
    const numAdded = this._pos >> 1;
    if (numAdded !== this.numItems) {
      throw new Error(`Added ${numAdded} items when expected ${this.numItems}.`);
    }
    sort(this.ids, this.coords, this.nodeSize, 0, this.numItems - 1, 0);
    this._finished = true;
    return this;
  }
  /**
   * Search the index for items within a given bounding box.
   * @param {number} minX
   * @param {number} minY
   * @param {number} maxX
   * @param {number} maxY
   * @returns {number[]} An array of indices correponding to the found items.
   */
  range(minX, minY, maxX, maxY) {
    if (!this._finished) throw new Error("Data not yet indexed - call index.finish().");
    const {
      ids,
      coords,
      nodeSize
    } = this;
    const stack = [0, ids.length - 1, 0];
    const result = [];
    while (stack.length) {
      const axis = stack.pop() || 0;
      const right = stack.pop() || 0;
      const left = stack.pop() || 0;
      if (right - left <= nodeSize) {
        for (let i = left; i <= right; i++) {
          const x2 = coords[2 * i];
          const y2 = coords[2 * i + 1];
          if (x2 >= minX && x2 <= maxX && y2 >= minY && y2 <= maxY) result.push(ids[i]);
        }
        continue;
      }
      const m = left + right >> 1;
      const x = coords[2 * m];
      const y = coords[2 * m + 1];
      if (x >= minX && x <= maxX && y >= minY && y <= maxY) result.push(ids[m]);
      if (axis === 0 ? minX <= x : minY <= y) {
        stack.push(left);
        stack.push(m - 1);
        stack.push(1 - axis);
      }
      if (axis === 0 ? maxX >= x : maxY >= y) {
        stack.push(m + 1);
        stack.push(right);
        stack.push(1 - axis);
      }
    }
    return result;
  }
  /**
   * Search the index for items within a given radius.
   * @param {number} qx
   * @param {number} qy
   * @param {number} r Query radius.
   * @returns {number[]} An array of indices correponding to the found items.
   */
  within(qx, qy, r) {
    if (!this._finished) throw new Error("Data not yet indexed - call index.finish().");
    const {
      ids,
      coords,
      nodeSize
    } = this;
    const stack = [0, ids.length - 1, 0];
    const result = [];
    const r2 = r * r;
    while (stack.length) {
      const axis = stack.pop() || 0;
      const right = stack.pop() || 0;
      const left = stack.pop() || 0;
      if (right - left <= nodeSize) {
        for (let i = left; i <= right; i++) {
          if (sqDist(coords[2 * i], coords[2 * i + 1], qx, qy) <= r2) result.push(ids[i]);
        }
        continue;
      }
      const m = left + right >> 1;
      const x = coords[2 * m];
      const y = coords[2 * m + 1];
      if (sqDist(x, y, qx, qy) <= r2) result.push(ids[m]);
      if (axis === 0 ? qx - r <= x : qy - r <= y) {
        stack.push(left);
        stack.push(m - 1);
        stack.push(1 - axis);
      }
      if (axis === 0 ? qx + r >= x : qy + r >= y) {
        stack.push(m + 1);
        stack.push(right);
        stack.push(1 - axis);
      }
    }
    return result;
  }
};
function sort(ids, coords, nodeSize, left, right, axis) {
  if (right - left <= nodeSize) return;
  const m = left + right >> 1;
  select(ids, coords, m, left, right, axis);
  sort(ids, coords, nodeSize, left, m - 1, 1 - axis);
  sort(ids, coords, nodeSize, m + 1, right, 1 - axis);
}
function select(ids, coords, k, left, right, axis) {
  while (right > left) {
    if (right - left > 600) {
      const n = right - left + 1;
      const m = k - left + 1;
      const z = Math.log(n);
      const s = 0.5 * Math.exp(2 * z / 3);
      const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
      const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
      const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
      select(ids, coords, k, newLeft, newRight, axis);
    }
    const t = coords[2 * k + axis];
    let i = left;
    let j = right;
    swapItem(ids, coords, left, k);
    if (coords[2 * right + axis] > t) swapItem(ids, coords, left, right);
    while (i < j) {
      swapItem(ids, coords, i, j);
      i++;
      j--;
      while (coords[2 * i + axis] < t) i++;
      while (coords[2 * j + axis] > t) j--;
    }
    if (coords[2 * left + axis] === t) swapItem(ids, coords, left, j);
    else {
      j++;
      swapItem(ids, coords, j, right);
    }
    if (j <= k) left = j + 1;
    if (k <= j) right = j - 1;
  }
}
function swapItem(ids, coords, i, j) {
  swap(ids, i, j);
  swap(coords, 2 * i, 2 * j);
  swap(coords, 2 * i + 1, 2 * j + 1);
}
function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
function sqDist(ax, ay, bx, by) {
  const dx = ax - bx;
  const dy = ay - by;
  return dx * dx + dy * dy;
}

// node_modules/supercluster/index.js
var defaultOptions = {
  minZoom: 0,
  // min zoom to generate clusters on
  maxZoom: 16,
  // max zoom level to cluster the points on
  minPoints: 2,
  // minimum points to form a cluster
  radius: 40,
  // cluster radius in pixels
  extent: 512,
  // tile extent (radius is calculated relative to it)
  nodeSize: 64,
  // size of the KD-tree leaf node, affects performance
  log: false,
  // whether to log timing info
  // whether to generate numeric ids for input features (in vector tiles)
  generateId: false,
  // a reduce function for calculating custom cluster properties
  reduce: null,
  // (accumulated, props) => { accumulated.sum += props.sum; }
  // properties to use for individual points when running the reducer
  map: (props) => props
  // props => ({sum: props.my_value})
};
var fround = Math.fround || /* @__PURE__ */ ((tmp) => (x) => {
  tmp[0] = +x;
  return tmp[0];
})(new Float32Array(1));
var OFFSET_ZOOM = 2;
var OFFSET_ID = 3;
var OFFSET_PARENT = 4;
var OFFSET_NUM = 5;
var OFFSET_PROP = 6;
var Supercluster = class {
  constructor(options) {
    this.options = Object.assign(Object.create(defaultOptions), options);
    this.trees = new Array(this.options.maxZoom + 1);
    this.stride = this.options.reduce ? 7 : 6;
    this.clusterProps = [];
  }
  load(points) {
    const {
      log,
      minZoom,
      maxZoom
    } = this.options;
    if (log) console.time("total time");
    const timerId = `prepare ${points.length} points`;
    if (log) console.time(timerId);
    this.points = points;
    const data = [];
    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      if (!p.geometry) continue;
      const [lng, lat] = p.geometry.coordinates;
      const x = fround(lngX(lng));
      const y = fround(latY(lat));
      data.push(
        x,
        y,
        // projected point coordinates
        Infinity,
        // the last zoom the point was processed at
        i,
        // index of the source feature in the original input array
        -1,
        // parent cluster id
        1
        // number of points in a cluster
      );
      if (this.options.reduce) data.push(0);
    }
    let tree = this.trees[maxZoom + 1] = this._createTree(data);
    if (log) console.timeEnd(timerId);
    for (let z = maxZoom; z >= minZoom; z--) {
      const now = +Date.now();
      tree = this.trees[z] = this._createTree(this._cluster(tree, z));
      if (log) console.log("z%d: %d clusters in %dms", z, tree.numItems, +Date.now() - now);
    }
    if (log) console.timeEnd("total time");
    return this;
  }
  getClusters(bbox, zoom) {
    let minLng = ((bbox[0] + 180) % 360 + 360) % 360 - 180;
    const minLat = Math.max(-90, Math.min(90, bbox[1]));
    let maxLng = bbox[2] === 180 ? 180 : ((bbox[2] + 180) % 360 + 360) % 360 - 180;
    const maxLat = Math.max(-90, Math.min(90, bbox[3]));
    if (bbox[2] - bbox[0] >= 360) {
      minLng = -180;
      maxLng = 180;
    } else if (minLng > maxLng) {
      const easternHem = this.getClusters([minLng, minLat, 180, maxLat], zoom);
      const westernHem = this.getClusters([-180, minLat, maxLng, maxLat], zoom);
      return easternHem.concat(westernHem);
    }
    const tree = this.trees[this._limitZoom(zoom)];
    const ids = tree.range(lngX(minLng), latY(maxLat), lngX(maxLng), latY(minLat));
    const data = tree.data;
    const clusters = [];
    for (const id of ids) {
      const k = this.stride * id;
      clusters.push(data[k + OFFSET_NUM] > 1 ? getClusterJSON(data, k, this.clusterProps) : this.points[data[k + OFFSET_ID]]);
    }
    return clusters;
  }
  getChildren(clusterId) {
    const originId = this._getOriginId(clusterId);
    const originZoom = this._getOriginZoom(clusterId);
    const errorMsg = "No cluster with the specified id.";
    const tree = this.trees[originZoom];
    if (!tree) throw new Error(errorMsg);
    const data = tree.data;
    if (originId * this.stride >= data.length) throw new Error(errorMsg);
    const r = this.options.radius / (this.options.extent * Math.pow(2, originZoom - 1));
    const x = data[originId * this.stride];
    const y = data[originId * this.stride + 1];
    const ids = tree.within(x, y, r);
    const children = [];
    for (const id of ids) {
      const k = id * this.stride;
      if (data[k + OFFSET_PARENT] === clusterId) {
        children.push(data[k + OFFSET_NUM] > 1 ? getClusterJSON(data, k, this.clusterProps) : this.points[data[k + OFFSET_ID]]);
      }
    }
    if (children.length === 0) throw new Error(errorMsg);
    return children;
  }
  getLeaves(clusterId, limit, offset) {
    limit = limit || 10;
    offset = offset || 0;
    const leaves = [];
    this._appendLeaves(leaves, clusterId, limit, offset, 0);
    return leaves;
  }
  getTile(z, x, y) {
    const tree = this.trees[this._limitZoom(z)];
    const z2 = Math.pow(2, z);
    const {
      extent,
      radius
    } = this.options;
    const p = radius / extent;
    const top = (y - p) / z2;
    const bottom = (y + 1 + p) / z2;
    const tile = {
      features: []
    };
    this._addTileFeatures(tree.range((x - p) / z2, top, (x + 1 + p) / z2, bottom), tree.data, x, y, z2, tile);
    if (x === 0) {
      this._addTileFeatures(tree.range(1 - p / z2, top, 1, bottom), tree.data, z2, y, z2, tile);
    }
    if (x === z2 - 1) {
      this._addTileFeatures(tree.range(0, top, p / z2, bottom), tree.data, -1, y, z2, tile);
    }
    return tile.features.length ? tile : null;
  }
  getClusterExpansionZoom(clusterId) {
    let expansionZoom = this._getOriginZoom(clusterId) - 1;
    while (expansionZoom <= this.options.maxZoom) {
      const children = this.getChildren(clusterId);
      expansionZoom++;
      if (children.length !== 1) break;
      clusterId = children[0].properties.cluster_id;
    }
    return expansionZoom;
  }
  _appendLeaves(result, clusterId, limit, offset, skipped) {
    const children = this.getChildren(clusterId);
    for (const child of children) {
      const props = child.properties;
      if (props && props.cluster) {
        if (skipped + props.point_count <= offset) {
          skipped += props.point_count;
        } else {
          skipped = this._appendLeaves(result, props.cluster_id, limit, offset, skipped);
        }
      } else if (skipped < offset) {
        skipped++;
      } else {
        result.push(child);
      }
      if (result.length === limit) break;
    }
    return skipped;
  }
  _createTree(data) {
    const tree = new KDBush(data.length / this.stride | 0, this.options.nodeSize, Float32Array);
    for (let i = 0; i < data.length; i += this.stride) tree.add(data[i], data[i + 1]);
    tree.finish();
    tree.data = data;
    return tree;
  }
  _addTileFeatures(ids, data, x, y, z2, tile) {
    for (const i of ids) {
      const k = i * this.stride;
      const isCluster = data[k + OFFSET_NUM] > 1;
      let tags, px, py;
      if (isCluster) {
        tags = getClusterProperties(data, k, this.clusterProps);
        px = data[k];
        py = data[k + 1];
      } else {
        const p = this.points[data[k + OFFSET_ID]];
        tags = p.properties;
        const [lng, lat] = p.geometry.coordinates;
        px = lngX(lng);
        py = latY(lat);
      }
      const f = {
        type: 1,
        geometry: [[Math.round(this.options.extent * (px * z2 - x)), Math.round(this.options.extent * (py * z2 - y))]],
        tags
      };
      let id;
      if (isCluster || this.options.generateId) {
        id = data[k + OFFSET_ID];
      } else {
        id = this.points[data[k + OFFSET_ID]].id;
      }
      if (id !== void 0) f.id = id;
      tile.features.push(f);
    }
  }
  _limitZoom(z) {
    return Math.max(this.options.minZoom, Math.min(Math.floor(+z), this.options.maxZoom + 1));
  }
  _cluster(tree, zoom) {
    const {
      radius,
      extent,
      reduce,
      minPoints
    } = this.options;
    const r = radius / (extent * Math.pow(2, zoom));
    const data = tree.data;
    const nextData = [];
    const stride = this.stride;
    for (let i = 0; i < data.length; i += stride) {
      if (data[i + OFFSET_ZOOM] <= zoom) continue;
      data[i + OFFSET_ZOOM] = zoom;
      const x = data[i];
      const y = data[i + 1];
      const neighborIds = tree.within(data[i], data[i + 1], r);
      const numPointsOrigin = data[i + OFFSET_NUM];
      let numPoints = numPointsOrigin;
      for (const neighborId of neighborIds) {
        const k = neighborId * stride;
        if (data[k + OFFSET_ZOOM] > zoom) numPoints += data[k + OFFSET_NUM];
      }
      if (numPoints > numPointsOrigin && numPoints >= minPoints) {
        let wx = x * numPointsOrigin;
        let wy = y * numPointsOrigin;
        let clusterProperties;
        let clusterPropIndex = -1;
        const id = ((i / stride | 0) << 5) + (zoom + 1) + this.points.length;
        for (const neighborId of neighborIds) {
          const k = neighborId * stride;
          if (data[k + OFFSET_ZOOM] <= zoom) continue;
          data[k + OFFSET_ZOOM] = zoom;
          const numPoints2 = data[k + OFFSET_NUM];
          wx += data[k] * numPoints2;
          wy += data[k + 1] * numPoints2;
          data[k + OFFSET_PARENT] = id;
          if (reduce) {
            if (!clusterProperties) {
              clusterProperties = this._map(data, i, true);
              clusterPropIndex = this.clusterProps.length;
              this.clusterProps.push(clusterProperties);
            }
            reduce(clusterProperties, this._map(data, k));
          }
        }
        data[i + OFFSET_PARENT] = id;
        nextData.push(wx / numPoints, wy / numPoints, Infinity, id, -1, numPoints);
        if (reduce) nextData.push(clusterPropIndex);
      } else {
        for (let j = 0; j < stride; j++) nextData.push(data[i + j]);
        if (numPoints > 1) {
          for (const neighborId of neighborIds) {
            const k = neighborId * stride;
            if (data[k + OFFSET_ZOOM] <= zoom) continue;
            data[k + OFFSET_ZOOM] = zoom;
            for (let j = 0; j < stride; j++) nextData.push(data[k + j]);
          }
        }
      }
    }
    return nextData;
  }
  // get index of the point from which the cluster originated
  _getOriginId(clusterId) {
    return clusterId - this.points.length >> 5;
  }
  // get zoom of the point from which the cluster originated
  _getOriginZoom(clusterId) {
    return (clusterId - this.points.length) % 32;
  }
  _map(data, i, clone) {
    if (data[i + OFFSET_NUM] > 1) {
      const props = this.clusterProps[data[i + OFFSET_PROP]];
      return clone ? Object.assign({}, props) : props;
    }
    const original = this.points[data[i + OFFSET_ID]].properties;
    const result = this.options.map(original);
    return clone && result === original ? Object.assign({}, result) : result;
  }
};
function getClusterJSON(data, i, clusterProps) {
  return {
    type: "Feature",
    id: data[i + OFFSET_ID],
    properties: getClusterProperties(data, i, clusterProps),
    geometry: {
      type: "Point",
      coordinates: [xLng(data[i]), yLat(data[i + 1])]
    }
  };
}
function getClusterProperties(data, i, clusterProps) {
  const count = data[i + OFFSET_NUM];
  const abbrev = count >= 1e4 ? `${Math.round(count / 1e3)}k` : count >= 1e3 ? `${Math.round(count / 100) / 10}k` : count;
  const propIndex = data[i + OFFSET_PROP];
  const properties = propIndex === -1 ? {} : Object.assign({}, clusterProps[propIndex]);
  return Object.assign(properties, {
    cluster: true,
    cluster_id: data[i + OFFSET_ID],
    point_count: count,
    point_count_abbreviated: abbrev
  });
}
function lngX(lng) {
  return lng / 360 + 0.5;
}
function latY(lat) {
  const sin = Math.sin(lat * Math.PI / 180);
  const y = 0.5 - 0.25 * Math.log((1 + sin) / (1 - sin)) / Math.PI;
  return y < 0 ? 0 : y > 1 ? 1 : y;
}
function xLng(x) {
  return (x - 0.5) * 360;
}
function yLat(y) {
  const y2 = (180 - y * 360) * Math.PI / 180;
  return 360 * Math.atan(Math.exp(y2)) / Math.PI - 90;
}

// node_modules/@googlemaps/markerclusterer/dist/index.esm.js
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
var MarkerUtils = class {
  static isAdvancedMarkerAvailable(map) {
    return google.maps.marker && map.getMapCapabilities().isAdvancedMarkersAvailable === true;
  }
  static isAdvancedMarker(marker) {
    return google.maps.marker && marker instanceof google.maps.marker.AdvancedMarkerElement;
  }
  static setMap(marker, map) {
    if (this.isAdvancedMarker(marker)) {
      marker.map = map;
    } else {
      marker.setMap(map);
    }
  }
  static getPosition(marker) {
    if (this.isAdvancedMarker(marker)) {
      if (marker.position) {
        if (marker.position instanceof google.maps.LatLng) {
          return marker.position;
        }
        if (marker.position.lat && marker.position.lng) {
          return new google.maps.LatLng(marker.position.lat, marker.position.lng);
        }
      }
      return new google.maps.LatLng(null);
    }
    return marker.getPosition();
  }
  static getVisible(marker) {
    if (this.isAdvancedMarker(marker)) {
      return true;
    }
    return marker.getVisible();
  }
};
var Cluster = class {
  constructor({
    markers,
    position
  }) {
    this.markers = markers;
    if (position) {
      if (position instanceof google.maps.LatLng) {
        this._position = position;
      } else {
        this._position = new google.maps.LatLng(position);
      }
    }
  }
  get bounds() {
    if (this.markers.length === 0 && !this._position) {
      return;
    }
    const bounds = new google.maps.LatLngBounds(this._position, this._position);
    for (const marker of this.markers) {
      bounds.extend(MarkerUtils.getPosition(marker));
    }
    return bounds;
  }
  get position() {
    return this._position || this.bounds.getCenter();
  }
  /**
   * Get the count of **visible** markers.
   */
  get count() {
    return this.markers.filter((m) => MarkerUtils.getVisible(m)).length;
  }
  /**
   * Add a marker to the cluster.
   */
  push(marker) {
    this.markers.push(marker);
  }
  /**
   * Cleanup references and remove marker from map.
   */
  delete() {
    if (this.marker) {
      MarkerUtils.setMap(this.marker, null);
      this.marker = void 0;
    }
    this.markers.length = 0;
  }
};
var AbstractAlgorithm = class {
  constructor({
    maxZoom = 16
  }) {
    this.maxZoom = maxZoom;
  }
  /**
   * Helper function to bypass clustering based upon some map state such as
   * zoom, number of markers, etc.
   *
   * ```typescript
   *  cluster({markers, map}: AlgorithmInput): Cluster[] {
   *    if (shouldBypassClustering(map)) {
   *      return this.noop({markers})
   *    }
   * }
   * ```
   */
  noop({
    markers
  }) {
    return noop(markers);
  }
};
var noop = (markers) => {
  const clusters = markers.map((marker) => new Cluster({
    position: MarkerUtils.getPosition(marker),
    markers: [marker]
  }));
  return clusters;
};
var SuperClusterAlgorithm = class extends AbstractAlgorithm {
  constructor(_a) {
    var {
      maxZoom,
      radius = 60
    } = _a, options = __rest(_a, ["maxZoom", "radius"]);
    super({
      maxZoom
    });
    this.state = {
      zoom: -1
    };
    this.superCluster = new Supercluster(Object.assign({
      maxZoom: this.maxZoom,
      radius
    }, options));
  }
  calculate(input) {
    let changed = false;
    const state = {
      zoom: input.map.getZoom()
    };
    if (!(0, import_fast_deep_equal.default)(input.markers, this.markers)) {
      changed = true;
      this.markers = [...input.markers];
      const points = this.markers.map((marker) => {
        const position = MarkerUtils.getPosition(marker);
        const coordinates = [position.lng(), position.lat()];
        return {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates
          },
          properties: {
            marker
          }
        };
      });
      this.superCluster.load(points);
    }
    if (!changed) {
      if (this.state.zoom <= this.maxZoom || state.zoom <= this.maxZoom) {
        changed = !(0, import_fast_deep_equal.default)(this.state, state);
      }
    }
    this.state = state;
    if (changed) {
      this.clusters = this.cluster(input);
    }
    return {
      clusters: this.clusters,
      changed
    };
  }
  cluster({
    map
  }) {
    return this.superCluster.getClusters([-180, -90, 180, 90], Math.round(map.getZoom())).map((feature) => this.transformCluster(feature));
  }
  transformCluster({
    geometry: {
      coordinates: [lng, lat]
    },
    properties
  }) {
    if (properties.cluster) {
      return new Cluster({
        markers: this.superCluster.getLeaves(properties.cluster_id, Infinity).map((leaf) => leaf.properties.marker),
        position: {
          lat,
          lng
        }
      });
    }
    const marker = properties.marker;
    return new Cluster({
      markers: [marker],
      position: MarkerUtils.getPosition(marker)
    });
  }
};
var ClusterStats = class {
  constructor(markers, clusters) {
    this.markers = {
      sum: markers.length
    };
    const clusterMarkerCounts = clusters.map((a) => a.count);
    const clusterMarkerSum = clusterMarkerCounts.reduce((a, b) => a + b, 0);
    this.clusters = {
      count: clusters.length,
      markers: {
        mean: clusterMarkerSum / clusters.length,
        sum: clusterMarkerSum,
        min: Math.min(...clusterMarkerCounts),
        max: Math.max(...clusterMarkerCounts)
      }
    };
  }
};
var DefaultRenderer = class {
  /**
   * The default render function for the library used by {@link MarkerClusterer}.
   *
   * Currently set to use the following:
   *
   * ```typescript
   * // change color if this cluster has more markers than the mean cluster
   * const color =
   *   count > Math.max(10, stats.clusters.markers.mean)
   *     ? "#ff0000"
   *     : "#0000ff";
   *
   * // create svg url with fill color
   * const svg = window.btoa(`
   * <svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
   *   <circle cx="120" cy="120" opacity=".6" r="70" />
   *   <circle cx="120" cy="120" opacity=".3" r="90" />
   *   <circle cx="120" cy="120" opacity=".2" r="110" />
   *   <circle cx="120" cy="120" opacity=".1" r="130" />
   * </svg>`);
   *
   * // create marker using svg icon
   * return new google.maps.Marker({
   *   position,
   *   icon: {
   *     url: `data:image/svg+xml;base64,${svg}`,
   *     scaledSize: new google.maps.Size(45, 45),
   *   },
   *   label: {
   *     text: String(count),
   *     color: "rgba(255,255,255,0.9)",
   *     fontSize: "12px",
   *   },
   *   // adjust zIndex to be above other markers
   *   zIndex: 1000 + count,
   * });
   * ```
   */
  render({
    count,
    position
  }, stats, map) {
    const color = count > Math.max(10, stats.clusters.markers.mean) ? "#ff0000" : "#0000ff";
    const svg = `<svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="50" height="50">
<circle cx="120" cy="120" opacity=".6" r="70" />
<circle cx="120" cy="120" opacity=".3" r="90" />
<circle cx="120" cy="120" opacity=".2" r="110" />
<text x="50%" y="50%" style="fill:#fff" text-anchor="middle" font-size="50" dominant-baseline="middle" font-family="roboto,arial,sans-serif">${count}</text>
</svg>`;
    const title = `Cluster of ${count} markers`, zIndex = Number(google.maps.Marker.MAX_ZINDEX) + count;
    if (MarkerUtils.isAdvancedMarkerAvailable(map)) {
      const parser = new DOMParser();
      const svgEl = parser.parseFromString(svg, "image/svg+xml").documentElement;
      svgEl.setAttribute("transform", "translate(0 25)");
      const clusterOptions2 = {
        map,
        position,
        zIndex,
        title,
        content: svgEl
      };
      return new google.maps.marker.AdvancedMarkerElement(clusterOptions2);
    }
    const clusterOptions = {
      position,
      zIndex,
      title,
      icon: {
        url: `data:image/svg+xml;base64,${btoa(svg)}`,
        anchor: new google.maps.Point(25, 25)
      }
    };
    return new google.maps.Marker(clusterOptions);
  }
};
function extend(type1, type2) {
  for (let property in type2.prototype) {
    type1.prototype[property] = type2.prototype[property];
  }
}
var OverlayViewSafe = class _OverlayViewSafe {
  constructor() {
    extend(_OverlayViewSafe, google.maps.OverlayView);
  }
};
var MarkerClustererEvents;
(function(MarkerClustererEvents2) {
  MarkerClustererEvents2["CLUSTERING_BEGIN"] = "clusteringbegin";
  MarkerClustererEvents2["CLUSTERING_END"] = "clusteringend";
  MarkerClustererEvents2["CLUSTER_CLICK"] = "click";
})(MarkerClustererEvents || (MarkerClustererEvents = {}));
var defaultOnClusterClickHandler = (_, cluster, map) => {
  map.fitBounds(cluster.bounds);
};
var MarkerClusterer = class extends OverlayViewSafe {
  constructor({
    map,
    markers = [],
    algorithmOptions = {},
    algorithm = new SuperClusterAlgorithm(algorithmOptions),
    renderer = new DefaultRenderer(),
    onClusterClick = defaultOnClusterClickHandler
  }) {
    super();
    this.markers = [...markers];
    this.clusters = [];
    this.algorithm = algorithm;
    this.renderer = renderer;
    this.onClusterClick = onClusterClick;
    if (map) {
      this.setMap(map);
    }
  }
  addMarker(marker, noDraw) {
    if (this.markers.includes(marker)) {
      return;
    }
    this.markers.push(marker);
    if (!noDraw) {
      this.render();
    }
  }
  addMarkers(markers, noDraw) {
    markers.forEach((marker) => {
      this.addMarker(marker, true);
    });
    if (!noDraw) {
      this.render();
    }
  }
  removeMarker(marker, noDraw) {
    const index = this.markers.indexOf(marker);
    if (index === -1) {
      return false;
    }
    MarkerUtils.setMap(marker, null);
    this.markers.splice(index, 1);
    if (!noDraw) {
      this.render();
    }
    return true;
  }
  removeMarkers(markers, noDraw) {
    let removed = false;
    markers.forEach((marker) => {
      removed = this.removeMarker(marker, true) || removed;
    });
    if (removed && !noDraw) {
      this.render();
    }
    return removed;
  }
  clearMarkers(noDraw) {
    this.markers.length = 0;
    if (!noDraw) {
      this.render();
    }
  }
  /**
   * Recalculates and draws all the marker clusters.
   */
  render() {
    const map = this.getMap();
    if (map instanceof google.maps.Map && map.getProjection()) {
      google.maps.event.trigger(this, MarkerClustererEvents.CLUSTERING_BEGIN, this);
      const {
        clusters,
        changed
      } = this.algorithm.calculate({
        markers: this.markers,
        map,
        mapCanvasProjection: this.getProjection()
      });
      if (changed || changed == void 0) {
        const singleMarker = /* @__PURE__ */ new Set();
        for (const cluster of clusters) {
          if (cluster.markers.length == 1) {
            singleMarker.add(cluster.markers[0]);
          }
        }
        const groupMarkers = [];
        for (const cluster of this.clusters) {
          if (cluster.marker == null) {
            continue;
          }
          if (cluster.markers.length == 1) {
            if (!singleMarker.has(cluster.marker)) {
              MarkerUtils.setMap(cluster.marker, null);
            }
          } else {
            groupMarkers.push(cluster.marker);
          }
        }
        this.clusters = clusters;
        this.renderClusters();
        requestAnimationFrame(() => groupMarkers.forEach((marker) => MarkerUtils.setMap(marker, null)));
      }
      google.maps.event.trigger(this, MarkerClustererEvents.CLUSTERING_END, this);
    }
  }
  onAdd() {
    this.idleListener = this.getMap().addListener("idle", this.render.bind(this));
    this.render();
  }
  onRemove() {
    google.maps.event.removeListener(this.idleListener);
    this.reset();
  }
  reset() {
    this.markers.forEach((marker) => MarkerUtils.setMap(marker, null));
    this.clusters.forEach((cluster) => cluster.delete());
    this.clusters = [];
  }
  renderClusters() {
    const stats = new ClusterStats(this.markers, this.clusters);
    const map = this.getMap();
    this.clusters.forEach((cluster) => {
      if (cluster.markers.length === 1) {
        cluster.marker = cluster.markers[0];
      } else {
        cluster.marker = this.renderer.render(cluster, stats, map);
        cluster.markers.forEach((marker) => MarkerUtils.setMap(marker, null));
        if (this.onClusterClick) {
          cluster.marker.addListener(
            "click",
            /* istanbul ignore next */
            (event) => {
              google.maps.event.trigger(this, MarkerClustererEvents.CLUSTER_CLICK, cluster);
              this.onClusterClick(event, cluster, map);
            }
          );
        }
      }
      MarkerUtils.setMap(cluster.marker, map);
    });
  }
};

// node_modules/@capacitor/google-maps/dist/esm/web.js
var CapacitorGoogleMapsWeb = class extends WebPlugin {
  constructor() {
    super(...arguments);
    this.gMapsRef = void 0;
    this.AdvancedMarkerElement = void 0;
    this.PinElement = void 0;
    this.maps = {};
    this.currMarkerId = 0;
    this.currPolygonId = 0;
    this.currCircleId = 0;
    this.currPolylineId = 0;
    this.currMapId = 0;
    this.onClusterClickHandler = (_, cluster, map) => {
      var _a;
      const mapId = this.getIdFromMap(map);
      const items = [];
      if (cluster.markers != void 0 && this.AdvancedMarkerElement) {
        for (const marker of cluster.markers) {
          if (marker instanceof this.AdvancedMarkerElement) {
            const markerId = this.getIdFromMarker(mapId, marker);
            const position = marker.position;
            items.push({
              markerId,
              latitude: position.lat,
              longitude: position.lng,
              title: (_a = marker.title) !== null && _a !== void 0 ? _a : "",
              snippet: ""
            });
          }
        }
      }
      this.notifyListeners("onClusterClick", {
        mapId,
        latitude: cluster.position.lat,
        longitude: cluster.position.lng,
        size: cluster.count,
        items
      });
    };
  }
  getIdFromMap(map) {
    for (const id in this.maps) {
      if (this.maps[id].map == map) {
        return id;
      }
    }
    return "";
  }
  getIdFromMarker(mapId, marker) {
    for (const id in this.maps[mapId].markers) {
      if (this.maps[mapId].markers[id] == marker) {
        return id;
      }
    }
    return "";
  }
  importGoogleLib(apiKey, region, language) {
    return __async(this, null, function* () {
      if (this.gMapsRef === void 0) {
        const lib = yield import("./dist-RTOOFNCG.js");
        const loader = new lib.Loader({
          apiKey: apiKey !== null && apiKey !== void 0 ? apiKey : "",
          version: "weekly",
          libraries: ["places"],
          language,
          region
        });
        const google2 = yield loader.load();
        this.gMapsRef = google2.maps;
        const {
          AdvancedMarkerElement,
          PinElement
        } = yield google2.maps.importLibrary("marker");
        this.AdvancedMarkerElement = AdvancedMarkerElement;
        this.PinElement = PinElement;
        console.log("Loaded google maps API");
      }
    });
  }
  enableTouch(_args) {
    return __async(this, null, function* () {
      this.maps[_args.id].map.setOptions({
        gestureHandling: "auto"
      });
    });
  }
  disableTouch(_args) {
    return __async(this, null, function* () {
      this.maps[_args.id].map.setOptions({
        gestureHandling: "none"
      });
    });
  }
  setCamera(_args) {
    return __async(this, null, function* () {
      this.maps[_args.id].map.moveCamera({
        center: _args.config.coordinate,
        heading: _args.config.bearing,
        tilt: _args.config.angle,
        zoom: _args.config.zoom
      });
    });
  }
  getMapType(_args) {
    return __async(this, null, function* () {
      let type = this.maps[_args.id].map.getMapTypeId();
      if (type !== void 0) {
        if (type === "roadmap") {
          type = MapType.Normal;
        }
        return {
          type: `${type.charAt(0).toUpperCase()}${type.slice(1)}`
        };
      }
      throw new Error("Map type is undefined");
    });
  }
  setMapType(_args) {
    return __async(this, null, function* () {
      let mapType = _args.mapType.toLowerCase();
      if (_args.mapType === MapType.Normal) {
        mapType = "roadmap";
      }
      this.maps[_args.id].map.setMapTypeId(mapType);
    });
  }
  enableIndoorMaps() {
    return __async(this, null, function* () {
      throw new Error("Method not supported on web.");
    });
  }
  enableTrafficLayer(_args) {
    return __async(this, null, function* () {
      var _a;
      const trafficLayer = (_a = this.maps[_args.id].trafficLayer) !== null && _a !== void 0 ? _a : new google.maps.TrafficLayer();
      if (_args.enabled) {
        trafficLayer.setMap(this.maps[_args.id].map);
        this.maps[_args.id].trafficLayer = trafficLayer;
      } else if (this.maps[_args.id].trafficLayer) {
        trafficLayer.setMap(null);
        this.maps[_args.id].trafficLayer = void 0;
      }
    });
  }
  enableAccessibilityElements() {
    return __async(this, null, function* () {
      throw new Error("Method not supported on web.");
    });
  }
  dispatchMapEvent() {
    throw new Error("Method not supported on web.");
  }
  enableCurrentLocation(_args) {
    return __async(this, null, function* () {
      if (_args.enabled) {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            this.maps[_args.id].map.setCenter(pos);
            this.notifyListeners("onMyLocationButtonClick", {});
            this.notifyListeners("onMyLocationClick", {});
          }, () => {
            throw new Error("Geolocation not supported on web browser.");
          });
        } else {
          throw new Error("Geolocation not supported on web browser.");
        }
      }
    });
  }
  setPadding(_args) {
    return __async(this, null, function* () {
      const bounds = this.maps[_args.id].map.getBounds();
      if (bounds !== void 0) {
        this.maps[_args.id].map.fitBounds(bounds, _args.padding);
      }
    });
  }
  getMapBounds(_args) {
    return __async(this, null, function* () {
      const bounds = this.maps[_args.id].map.getBounds();
      if (!bounds) {
        throw new Error("Google Map Bounds could not be found.");
      }
      return new LatLngBounds({
        southwest: {
          lat: bounds.getSouthWest().lat(),
          lng: bounds.getSouthWest().lng()
        },
        center: {
          lat: bounds.getCenter().lat(),
          lng: bounds.getCenter().lng()
        },
        northeast: {
          lat: bounds.getNorthEast().lat(),
          lng: bounds.getNorthEast().lng()
        }
      });
    });
  }
  fitBounds(_args) {
    return __async(this, null, function* () {
      const map = this.maps[_args.id].map;
      const bounds = this.getLatLngBounds(_args.bounds);
      map.fitBounds(bounds, _args.padding);
    });
  }
  addMarkers(_args) {
    return __async(this, null, function* () {
      const markerIds = [];
      const map = this.maps[_args.id];
      for (const markerArgs of _args.markers) {
        const advancedMarker = this.buildMarkerOpts(markerArgs, map.map);
        const id = "" + this.currMarkerId;
        map.markers[id] = advancedMarker;
        yield this.setMarkerListeners(_args.id, id, advancedMarker);
        markerIds.push(id);
        this.currMarkerId++;
      }
      return {
        ids: markerIds
      };
    });
  }
  addMarker(_args) {
    return __async(this, null, function* () {
      const advancedMarker = this.buildMarkerOpts(_args.marker, this.maps[_args.id].map);
      const id = "" + this.currMarkerId;
      this.maps[_args.id].markers[id] = advancedMarker;
      yield this.setMarkerListeners(_args.id, id, advancedMarker);
      this.currMarkerId++;
      return {
        id
      };
    });
  }
  removeMarkers(_args) {
    return __async(this, null, function* () {
      const map = this.maps[_args.id];
      for (const id of _args.markerIds) {
        if (map.markers[id]) {
          map.markers[id].map = null;
          delete map.markers[id];
        }
      }
    });
  }
  removeMarker(_args) {
    return __async(this, null, function* () {
      if (this.maps[_args.id].markers[_args.markerId]) {
        this.maps[_args.id].markers[_args.markerId].map = null;
        delete this.maps[_args.id].markers[_args.markerId];
      }
    });
  }
  addPolygons(args) {
    return __async(this, null, function* () {
      const polygonIds = [];
      const map = this.maps[args.id];
      for (const polygonArgs of args.polygons) {
        const polygon = new google.maps.Polygon(polygonArgs);
        polygon.setMap(map.map);
        const id = "" + this.currPolygonId;
        this.maps[args.id].polygons[id] = polygon;
        this.setPolygonListeners(args.id, id, polygon);
        polygonIds.push(id);
        this.currPolygonId++;
      }
      return {
        ids: polygonIds
      };
    });
  }
  removePolygons(args) {
    return __async(this, null, function* () {
      const map = this.maps[args.id];
      for (const id of args.polygonIds) {
        map.polygons[id].setMap(null);
        delete map.polygons[id];
      }
    });
  }
  addCircles(args) {
    return __async(this, null, function* () {
      const circleIds = [];
      const map = this.maps[args.id];
      for (const circleArgs of args.circles) {
        const circle = new google.maps.Circle(circleArgs);
        circle.setMap(map.map);
        const id = "" + this.currCircleId;
        this.maps[args.id].circles[id] = circle;
        this.setCircleListeners(args.id, id, circle);
        circleIds.push(id);
        this.currCircleId++;
      }
      return {
        ids: circleIds
      };
    });
  }
  removeCircles(args) {
    return __async(this, null, function* () {
      const map = this.maps[args.id];
      for (const id of args.circleIds) {
        map.circles[id].setMap(null);
        delete map.circles[id];
      }
    });
  }
  addPolylines(args) {
    return __async(this, null, function* () {
      const lineIds = [];
      const map = this.maps[args.id];
      for (const polylineArgs of args.polylines) {
        const polyline = new google.maps.Polyline(polylineArgs);
        polyline.set("tag", polylineArgs.tag);
        polyline.setMap(map.map);
        const id = "" + this.currPolylineId;
        this.maps[args.id].polylines[id] = polyline;
        this.setPolylineListeners(args.id, id, polyline);
        lineIds.push(id);
        this.currPolylineId++;
      }
      return {
        ids: lineIds
      };
    });
  }
  removePolylines(args) {
    return __async(this, null, function* () {
      const map = this.maps[args.id];
      for (const id of args.polylineIds) {
        map.polylines[id].setMap(null);
        delete map.polylines[id];
      }
    });
  }
  enableClustering(_args) {
    return __async(this, null, function* () {
      var _a;
      const markers = [];
      for (const id in this.maps[_args.id].markers) {
        markers.push(this.maps[_args.id].markers[id]);
      }
      this.maps[_args.id].markerClusterer = new MarkerClusterer({
        map: this.maps[_args.id].map,
        markers,
        algorithm: new SuperClusterAlgorithm({
          minPoints: (_a = _args.minClusterSize) !== null && _a !== void 0 ? _a : 4
        }),
        onClusterClick: this.onClusterClickHandler
      });
    });
  }
  disableClustering(_args) {
    return __async(this, null, function* () {
      const mapInstance = this.maps[_args.id];
      if (mapInstance.markerClusterer) {
        const markers = Object.values(mapInstance.markers);
        mapInstance.markerClusterer.setMap(null);
        mapInstance.markerClusterer = void 0;
        for (const marker of markers) {
          marker.map = mapInstance.map;
        }
      }
    });
  }
  onScroll() {
    return __async(this, null, function* () {
      throw new Error("Method not supported on web.");
    });
  }
  onResize() {
    return __async(this, null, function* () {
      throw new Error("Method not supported on web.");
    });
  }
  onDisplay() {
    return __async(this, null, function* () {
      throw new Error("Method not supported on web.");
    });
  }
  create(_args) {
    return __async(this, null, function* () {
      console.log(`Create map: ${_args.id}`);
      yield this.importGoogleLib(_args.apiKey, _args.region, _args.language);
      const config = Object.assign({}, _args.config);
      if (!config.mapId) {
        config.mapId = `capacitor_map_${this.currMapId++}`;
      }
      this.maps[_args.id] = {
        map: new window.google.maps.Map(_args.element, config),
        element: _args.element,
        markers: {},
        polygons: {},
        circles: {},
        polylines: {}
      };
      this.setMapListeners(_args.id);
    });
  }
  destroy(_args) {
    return __async(this, null, function* () {
      console.log(`Destroy map: ${_args.id}`);
      const mapItem = this.maps[_args.id];
      mapItem.element.innerHTML = "";
      mapItem.map.unbindAll();
      delete this.maps[_args.id];
    });
  }
  mapBoundsContains(_args) {
    return __async(this, null, function* () {
      const bounds = this.getLatLngBounds(_args.bounds);
      const point = new google.maps.LatLng(_args.point.lat, _args.point.lng);
      return {
        contains: bounds.contains(point)
      };
    });
  }
  mapBoundsExtend(_args) {
    return __async(this, null, function* () {
      const bounds = this.getLatLngBounds(_args.bounds);
      const point = new google.maps.LatLng(_args.point.lat, _args.point.lng);
      bounds.extend(point);
      const result = new LatLngBounds({
        southwest: {
          lat: bounds.getSouthWest().lat(),
          lng: bounds.getSouthWest().lng()
        },
        center: {
          lat: bounds.getCenter().lat(),
          lng: bounds.getCenter().lng()
        },
        northeast: {
          lat: bounds.getNorthEast().lat(),
          lng: bounds.getNorthEast().lng()
        }
      });
      return {
        bounds: result
      };
    });
  }
  getLatLngBounds(_args) {
    return new google.maps.LatLngBounds(new google.maps.LatLng(_args.southwest.lat, _args.southwest.lng), new google.maps.LatLng(_args.northeast.lat, _args.northeast.lng));
  }
  setCircleListeners(mapId, circleId, circle) {
    return __async(this, null, function* () {
      circle.addListener("click", () => {
        this.notifyListeners("onCircleClick", {
          mapId,
          circleId,
          tag: circle.get("tag")
        });
      });
    });
  }
  setPolygonListeners(mapId, polygonId, polygon) {
    return __async(this, null, function* () {
      polygon.addListener("click", () => {
        this.notifyListeners("onPolygonClick", {
          mapId,
          polygonId,
          tag: polygon.get("tag")
        });
      });
    });
  }
  setPolylineListeners(mapId, polylineId, polyline) {
    return __async(this, null, function* () {
      polyline.addListener("click", () => {
        this.notifyListeners("onPolylineClick", {
          mapId,
          polylineId,
          tag: polyline.get("tag")
        });
      });
    });
  }
  setMarkerListeners(mapId, markerId, marker) {
    return __async(this, null, function* () {
      marker.addListener("click", () => {
        var _a;
        const position = marker.position;
        this.notifyListeners("onMarkerClick", {
          mapId,
          markerId,
          latitude: position.lat,
          longitude: position.lng,
          title: (_a = marker.title) !== null && _a !== void 0 ? _a : "",
          snippet: ""
        });
      });
      if (marker.gmpDraggable) {
        marker.addListener("dragstart", () => {
          var _a;
          const position = marker.position;
          this.notifyListeners("onMarkerDragStart", {
            mapId,
            markerId,
            latitude: position.lat,
            longitude: position.lng,
            title: (_a = marker.title) !== null && _a !== void 0 ? _a : "",
            snippet: ""
          });
        });
        marker.addListener("drag", () => {
          var _a;
          const position = marker.position;
          this.notifyListeners("onMarkerDrag", {
            mapId,
            markerId,
            latitude: position.lat,
            longitude: position.lng,
            title: (_a = marker.title) !== null && _a !== void 0 ? _a : "",
            snippet: ""
          });
        });
        marker.addListener("dragend", () => {
          var _a;
          const position = marker.position;
          this.notifyListeners("onMarkerDragEnd", {
            mapId,
            markerId,
            latitude: position.lat,
            longitude: position.lng,
            title: (_a = marker.title) !== null && _a !== void 0 ? _a : "",
            snippet: ""
          });
        });
      }
    });
  }
  setMapListeners(mapId) {
    return __async(this, null, function* () {
      const map = this.maps[mapId].map;
      map.addListener("idle", () => __async(this, null, function* () {
        var _a, _b;
        const bounds = yield this.getMapBounds({
          id: mapId
        });
        this.notifyListeners("onCameraIdle", {
          mapId,
          bearing: map.getHeading(),
          bounds,
          latitude: (_a = map.getCenter()) === null || _a === void 0 ? void 0 : _a.lat(),
          longitude: (_b = map.getCenter()) === null || _b === void 0 ? void 0 : _b.lng(),
          tilt: map.getTilt(),
          zoom: map.getZoom()
        });
      }));
      map.addListener("center_changed", () => {
        this.notifyListeners("onCameraMoveStarted", {
          mapId,
          isGesture: true
        });
      });
      map.addListener("bounds_changed", () => __async(this, null, function* () {
        var _a, _b;
        const bounds = yield this.getMapBounds({
          id: mapId
        });
        this.notifyListeners("onBoundsChanged", {
          mapId,
          bearing: map.getHeading(),
          bounds,
          latitude: (_a = map.getCenter()) === null || _a === void 0 ? void 0 : _a.lat(),
          longitude: (_b = map.getCenter()) === null || _b === void 0 ? void 0 : _b.lng(),
          tilt: map.getTilt(),
          zoom: map.getZoom()
        });
      }));
      map.addListener("click", (e) => {
        var _a, _b;
        this.notifyListeners("onMapClick", {
          mapId,
          latitude: (_a = e.latLng) === null || _a === void 0 ? void 0 : _a.lat(),
          longitude: (_b = e.latLng) === null || _b === void 0 ? void 0 : _b.lng()
        });
      });
      this.notifyListeners("onMapReady", {
        mapId
      });
    });
  }
  buildMarkerOpts(marker, map) {
    var _a;
    if (!this.AdvancedMarkerElement || !this.PinElement) {
      throw new Error("Marker library not loaded");
    }
    let content = void 0;
    if (marker.iconUrl) {
      const img = document.createElement("img");
      img.src = marker.iconUrl;
      if (marker.iconSize) {
        img.style.width = `${marker.iconSize.width}px`;
        img.style.height = `${marker.iconSize.height}px`;
      }
      content = img;
    } else {
      const pinOptions = {
        scale: (_a = marker.opacity) !== null && _a !== void 0 ? _a : 1,
        glyph: marker.title,
        background: marker.tintColor ? `rgb(${marker.tintColor.r}, ${marker.tintColor.g}, ${marker.tintColor.b})` : void 0
      };
      const pin = new this.PinElement(pinOptions);
      content = pin.element;
    }
    const advancedMarker = new this.AdvancedMarkerElement({
      position: marker.coordinate,
      map,
      content,
      title: marker.title,
      gmpDraggable: marker.draggable
    });
    return advancedMarker;
  }
};
export {
  CapacitorGoogleMapsWeb
};
/*! Bundled license information:

@googlemaps/markerclusterer/dist/index.esm.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9mYXN0LWRlZXAtZXF1YWwvaW5kZXguanMiLCJub2RlX21vZHVsZXMvQGdvb2dsZW1hcHMvbWFya2VyY2x1c3RlcmVyL2Rpc3QvaW5kZXguZXNtLmpzIiwibm9kZV9tb2R1bGVzL2tkYnVzaC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9zdXBlcmNsdXN0ZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvQGNhcGFjaXRvci9nb29nbGUtbWFwcy9kaXN0L2VzbS93ZWIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vLyBkbyBub3QgZWRpdCAuanMgZmlsZXMgZGlyZWN0bHkgLSBlZGl0IHNyYy9pbmRleC5qc3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXF1YWwoYSwgYikge1xuICBpZiAoYSA9PT0gYikgcmV0dXJuIHRydWU7XG4gIGlmIChhICYmIGIgJiYgdHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT0gJ29iamVjdCcpIHtcbiAgICBpZiAoYS5jb25zdHJ1Y3RvciAhPT0gYi5jb25zdHJ1Y3RvcikgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBsZW5ndGgsIGksIGtleXM7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICAgIGxlbmd0aCA9IGEubGVuZ3RoO1xuICAgICAgaWYgKGxlbmd0aCAhPSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KSBpZiAoIWVxdWFsKGFbaV0sIGJbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGEuY29uc3RydWN0b3IgPT09IFJlZ0V4cCkgcmV0dXJuIGEuc291cmNlID09PSBiLnNvdXJjZSAmJiBhLmZsYWdzID09PSBiLmZsYWdzO1xuICAgIGlmIChhLnZhbHVlT2YgIT09IE9iamVjdC5wcm90b3R5cGUudmFsdWVPZikgcmV0dXJuIGEudmFsdWVPZigpID09PSBiLnZhbHVlT2YoKTtcbiAgICBpZiAoYS50b1N0cmluZyAhPT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZykgcmV0dXJuIGEudG9TdHJpbmcoKSA9PT0gYi50b1N0cmluZygpO1xuICAgIGtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICBpZiAobGVuZ3RoICE9PSBPYmplY3Qua2V5cyhiKS5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIGtleXNbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgIGlmICghZXF1YWwoYVtrZXldLCBiW2tleV0pKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gdHJ1ZSBpZiBib3RoIE5hTiwgZmFsc2Ugb3RoZXJ3aXNlXG4gIHJldHVybiBhICE9PSBhICYmIGIgIT09IGI7XG59OyIsImltcG9ydCBlcXVhbCBmcm9tICdmYXN0LWRlZXAtZXF1YWwnO1xuaW1wb3J0IFN1cGVyQ2x1c3RlciBmcm9tICdzdXBlcmNsdXN0ZXInO1xuXG4vKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG5mdW5jdGlvbiBfX3Jlc3QocywgZSkge1xuICB2YXIgdCA9IHt9O1xuICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59XG5cbi8qKlxuICogQ29weXJpZ2h0IDIwMjMgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogdXRpbCBjbGFzcyB0aGF0IGNyZWF0ZXMgYSBjb21tb24gc2V0IG9mIGNvbnZlbmllbmNlIGZ1bmN0aW9ucyB0byB3cmFwXG4gKiBzaGFyZWQgYmVoYXZpb3Igb2YgQWR2YW5jZWQgTWFya2VycyBhbmQgTWFya2Vycy5cbiAqL1xuY2xhc3MgTWFya2VyVXRpbHMge1xuICBzdGF0aWMgaXNBZHZhbmNlZE1hcmtlckF2YWlsYWJsZShtYXApIHtcbiAgICByZXR1cm4gZ29vZ2xlLm1hcHMubWFya2VyICYmIG1hcC5nZXRNYXBDYXBhYmlsaXRpZXMoKS5pc0FkdmFuY2VkTWFya2Vyc0F2YWlsYWJsZSA9PT0gdHJ1ZTtcbiAgfVxuICBzdGF0aWMgaXNBZHZhbmNlZE1hcmtlcihtYXJrZXIpIHtcbiAgICByZXR1cm4gZ29vZ2xlLm1hcHMubWFya2VyICYmIG1hcmtlciBpbnN0YW5jZW9mIGdvb2dsZS5tYXBzLm1hcmtlci5BZHZhbmNlZE1hcmtlckVsZW1lbnQ7XG4gIH1cbiAgc3RhdGljIHNldE1hcChtYXJrZXIsIG1hcCkge1xuICAgIGlmICh0aGlzLmlzQWR2YW5jZWRNYXJrZXIobWFya2VyKSkge1xuICAgICAgbWFya2VyLm1hcCA9IG1hcDtcbiAgICB9IGVsc2Uge1xuICAgICAgbWFya2VyLnNldE1hcChtYXApO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgZ2V0UG9zaXRpb24obWFya2VyKSB7XG4gICAgLy8gU3VwZXJDbHVzdGVyQWxnb3JpdGhtLmNhbGN1bGF0ZSBleHBlY3RzIGEgTGF0TG5nIGluc3RhbmNlIHNvIHdlIGZha2UgaXQgZm9yIEFkdiBNYXJrZXJzXG4gICAgaWYgKHRoaXMuaXNBZHZhbmNlZE1hcmtlcihtYXJrZXIpKSB7XG4gICAgICBpZiAobWFya2VyLnBvc2l0aW9uKSB7XG4gICAgICAgIGlmIChtYXJrZXIucG9zaXRpb24gaW5zdGFuY2VvZiBnb29nbGUubWFwcy5MYXRMbmcpIHtcbiAgICAgICAgICByZXR1cm4gbWFya2VyLnBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNpbmNlIHdlIGNhbid0IGNhc3QgdG8gTGF0TG5nTGl0ZXJhbCBmb3IgcmVhc29ucyA9KFxuICAgICAgICBpZiAobWFya2VyLnBvc2l0aW9uLmxhdCAmJiBtYXJrZXIucG9zaXRpb24ubG5nKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBnb29nbGUubWFwcy5MYXRMbmcobWFya2VyLnBvc2l0aW9uLmxhdCwgbWFya2VyLnBvc2l0aW9uLmxuZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKG51bGwpO1xuICAgIH1cbiAgICByZXR1cm4gbWFya2VyLmdldFBvc2l0aW9uKCk7XG4gIH1cbiAgc3RhdGljIGdldFZpc2libGUobWFya2VyKSB7XG4gICAgaWYgKHRoaXMuaXNBZHZhbmNlZE1hcmtlcihtYXJrZXIpKSB7XG4gICAgICAvKipcbiAgICAgICAqIEFsd2F5cyByZXR1cm4gdHJ1ZSBmb3IgQWR2YW5jZWQgTWFya2VycyBiZWNhdXNlIHRoZSBjbHVzdGVyZXJcbiAgICAgICAqIHVzZXMgZ2V0VmlzaWJsZSBhcyBhIHdheSB0byBjb3VudCBsZWdhY3kgbWFya2VycyBub3QgYXMgYW4gYWN0dWFsXG4gICAgICAgKiBpbmRpY2F0b3Igb2YgdmlzaWJpbGl0eSBmb3Igc29tZSByZWFzb24uIEV2ZW4gd2hlbiBtYXJrZXJzIGFyZSBoaWRkZW5cbiAgICAgICAqIE1hcmtlci5nZXRWaXNpYmxlIHJldHVybnMgYHRydWVgIGFuZCB0aGlzIGlzIHVzZWQgdG8gc2V0IHRoZSBtYXJrZXIgY291bnRcbiAgICAgICAqIG9uIHRoZSBjbHVzdGVyLiBTZWUgdGhlIGJlaGF2aW9yIG9mIENsdXN0ZXIuY291bnRcbiAgICAgICAqL1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBtYXJrZXIuZ2V0VmlzaWJsZSgpO1xuICB9XG59XG5cbi8qKlxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmNsYXNzIENsdXN0ZXIge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgbWFya2VycyxcbiAgICBwb3NpdGlvblxuICB9KSB7XG4gICAgdGhpcy5tYXJrZXJzID0gbWFya2VycztcbiAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgIGlmIChwb3NpdGlvbiBpbnN0YW5jZW9mIGdvb2dsZS5tYXBzLkxhdExuZykge1xuICAgICAgICB0aGlzLl9wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcG9zaXRpb24gPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKHBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2V0IGJvdW5kcygpIHtcbiAgICBpZiAodGhpcy5tYXJrZXJzLmxlbmd0aCA9PT0gMCAmJiAhdGhpcy5fcG9zaXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYm91bmRzID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcyh0aGlzLl9wb3NpdGlvbiwgdGhpcy5fcG9zaXRpb24pO1xuICAgIGZvciAoY29uc3QgbWFya2VyIG9mIHRoaXMubWFya2Vycykge1xuICAgICAgYm91bmRzLmV4dGVuZChNYXJrZXJVdGlscy5nZXRQb3NpdGlvbihtYXJrZXIpKTtcbiAgICB9XG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuICBnZXQgcG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uIHx8IHRoaXMuYm91bmRzLmdldENlbnRlcigpO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgdGhlIGNvdW50IG9mICoqdmlzaWJsZSoqIG1hcmtlcnMuXG4gICAqL1xuICBnZXQgY291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFya2Vycy5maWx0ZXIobSA9PiBNYXJrZXJVdGlscy5nZXRWaXNpYmxlKG0pKS5sZW5ndGg7XG4gIH1cbiAgLyoqXG4gICAqIEFkZCBhIG1hcmtlciB0byB0aGUgY2x1c3Rlci5cbiAgICovXG4gIHB1c2gobWFya2VyKSB7XG4gICAgdGhpcy5tYXJrZXJzLnB1c2gobWFya2VyKTtcbiAgfVxuICAvKipcbiAgICogQ2xlYW51cCByZWZlcmVuY2VzIGFuZCByZW1vdmUgbWFya2VyIGZyb20gbWFwLlxuICAgKi9cbiAgZGVsZXRlKCkge1xuICAgIGlmICh0aGlzLm1hcmtlcikge1xuICAgICAgTWFya2VyVXRpbHMuc2V0TWFwKHRoaXMubWFya2VyLCBudWxsKTtcbiAgICAgIHRoaXMubWFya2VyID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICB0aGlzLm1hcmtlcnMubGVuZ3RoID0gMDtcbiAgfVxufVxuXG4vKipcbiAqIENvcHlyaWdodCAyMDIxIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAqIFJldHVybnMgdGhlIG1hcmtlcnMgdmlzaWJsZSBpbiBhIHBhZGRlZCBtYXAgdmlld3BvcnRcbiAqXG4gKiBAcGFyYW0gbWFwXG4gKiBAcGFyYW0gbWFwQ2FudmFzUHJvamVjdGlvblxuICogQHBhcmFtIG1hcmtlcnMgVGhlIGxpc3Qgb2YgbWFya2VyIHRvIGZpbHRlclxuICogQHBhcmFtIHZpZXdwb3J0UGFkZGluZ1BpeGVscyBUaGUgcGFkZGluZyBpbiBwaXhlbFxuICogQHJldHVybnMgVGhlIGxpc3Qgb2YgbWFya2VycyBpbiB0aGUgcGFkZGVkIHZpZXdwb3J0XG4gKi9cbmNvbnN0IGZpbHRlck1hcmtlcnNUb1BhZGRlZFZpZXdwb3J0ID0gKG1hcCwgbWFwQ2FudmFzUHJvamVjdGlvbiwgbWFya2Vycywgdmlld3BvcnRQYWRkaW5nUGl4ZWxzKSA9PiB7XG4gIGNvbnN0IGV4dGVuZGVkTWFwQm91bmRzID0gZXh0ZW5kQm91bmRzVG9QYWRkZWRWaWV3cG9ydChtYXAuZ2V0Qm91bmRzKCksIG1hcENhbnZhc1Byb2plY3Rpb24sIHZpZXdwb3J0UGFkZGluZ1BpeGVscyk7XG4gIHJldHVybiBtYXJrZXJzLmZpbHRlcihtYXJrZXIgPT4gZXh0ZW5kZWRNYXBCb3VuZHMuY29udGFpbnMoTWFya2VyVXRpbHMuZ2V0UG9zaXRpb24obWFya2VyKSkpO1xufTtcbi8qKlxuICogRXh0ZW5kcyBhIGJvdW5kcyBieSBhIG51bWJlciBvZiBwaXhlbHMgaW4gZWFjaCBkaXJlY3Rpb25cbiAqL1xuY29uc3QgZXh0ZW5kQm91bmRzVG9QYWRkZWRWaWV3cG9ydCA9IChib3VuZHMsIHByb2plY3Rpb24sIG51bVBpeGVscykgPT4ge1xuICBjb25zdCB7XG4gICAgbm9ydGhFYXN0LFxuICAgIHNvdXRoV2VzdFxuICB9ID0gbGF0TG5nQm91bmRzVG9QaXhlbEJvdW5kcyhib3VuZHMsIHByb2plY3Rpb24pO1xuICBjb25zdCBleHRlbmRlZFBpeGVsQm91bmRzID0gZXh0ZW5kUGl4ZWxCb3VuZHMoe1xuICAgIG5vcnRoRWFzdCxcbiAgICBzb3V0aFdlc3RcbiAgfSwgbnVtUGl4ZWxzKTtcbiAgcmV0dXJuIHBpeGVsQm91bmRzVG9MYXRMbmdCb3VuZHMoZXh0ZW5kZWRQaXhlbEJvdW5kcywgcHJvamVjdGlvbik7XG59O1xuLyoqXG4gKiBHZXRzIHRoZSBleHRlbmRlZCBib3VuZHMgYXMgYSBiYm94IFt3ZXN0TG5nLCBzb3V0aExhdCwgZWFzdExuZywgbm9ydGhMYXRdXG4gKi9cbmNvbnN0IGdldFBhZGRlZFZpZXdwb3J0ID0gKGJvdW5kcywgcHJvamVjdGlvbiwgcGl4ZWxzKSA9PiB7XG4gIGNvbnN0IGV4dGVuZGVkID0gZXh0ZW5kQm91bmRzVG9QYWRkZWRWaWV3cG9ydChib3VuZHMsIHByb2plY3Rpb24sIHBpeGVscyk7XG4gIGNvbnN0IG5lID0gZXh0ZW5kZWQuZ2V0Tm9ydGhFYXN0KCk7XG4gIGNvbnN0IHN3ID0gZXh0ZW5kZWQuZ2V0U291dGhXZXN0KCk7XG4gIHJldHVybiBbc3cubG5nKCksIHN3LmxhdCgpLCBuZS5sbmcoKSwgbmUubGF0KCldO1xufTtcbi8qKlxuICogUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAyIHBvc2l0aW9ucy5cbiAqXG4gKiBAaGlkZGVuXG4gKi9cbmNvbnN0IGRpc3RhbmNlQmV0d2VlblBvaW50cyA9IChwMSwgcDIpID0+IHtcbiAgY29uc3QgUiA9IDYzNzE7IC8vIFJhZGl1cyBvZiB0aGUgRWFydGggaW4ga21cbiAgY29uc3QgZExhdCA9IChwMi5sYXQgLSBwMS5sYXQpICogTWF0aC5QSSAvIDE4MDtcbiAgY29uc3QgZExvbiA9IChwMi5sbmcgLSBwMS5sbmcpICogTWF0aC5QSSAvIDE4MDtcbiAgY29uc3Qgc2luRExhdCA9IE1hdGguc2luKGRMYXQgLyAyKTtcbiAgY29uc3Qgc2luRExvbiA9IE1hdGguc2luKGRMb24gLyAyKTtcbiAgY29uc3QgYSA9IHNpbkRMYXQgKiBzaW5ETGF0ICsgTWF0aC5jb3MocDEubGF0ICogTWF0aC5QSSAvIDE4MCkgKiBNYXRoLmNvcyhwMi5sYXQgKiBNYXRoLlBJIC8gMTgwKSAqIHNpbkRMb24gKiBzaW5ETG9uO1xuICBjb25zdCBjID0gMiAqIE1hdGguYXRhbjIoTWF0aC5zcXJ0KGEpLCBNYXRoLnNxcnQoMSAtIGEpKTtcbiAgcmV0dXJuIFIgKiBjO1xufTtcbi8qKlxuICogQ29udmVydHMgYSBMYXRMbmcgYm91bmQgdG8gcGl4ZWxzLlxuICpcbiAqIEBoaWRkZW5cbiAqL1xuY29uc3QgbGF0TG5nQm91bmRzVG9QaXhlbEJvdW5kcyA9IChib3VuZHMsIHByb2plY3Rpb24pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBub3J0aEVhc3Q6IHByb2plY3Rpb24uZnJvbUxhdExuZ1RvRGl2UGl4ZWwoYm91bmRzLmdldE5vcnRoRWFzdCgpKSxcbiAgICBzb3V0aFdlc3Q6IHByb2plY3Rpb24uZnJvbUxhdExuZ1RvRGl2UGl4ZWwoYm91bmRzLmdldFNvdXRoV2VzdCgpKVxuICB9O1xufTtcbi8qKlxuICogRXh0ZW5kcyBhIHBpeGVsIGJvdW5kcyBieSBudW1QaXhlbHMgaW4gYWxsIGRpcmVjdGlvbnMuXG4gKlxuICogQGhpZGRlblxuICovXG5jb25zdCBleHRlbmRQaXhlbEJvdW5kcyA9ICh7XG4gIG5vcnRoRWFzdCxcbiAgc291dGhXZXN0XG59LCBudW1QaXhlbHMpID0+IHtcbiAgbm9ydGhFYXN0LnggKz0gbnVtUGl4ZWxzO1xuICBub3J0aEVhc3QueSAtPSBudW1QaXhlbHM7XG4gIHNvdXRoV2VzdC54IC09IG51bVBpeGVscztcbiAgc291dGhXZXN0LnkgKz0gbnVtUGl4ZWxzO1xuICByZXR1cm4ge1xuICAgIG5vcnRoRWFzdCxcbiAgICBzb3V0aFdlc3RcbiAgfTtcbn07XG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuY29uc3QgcGl4ZWxCb3VuZHNUb0xhdExuZ0JvdW5kcyA9ICh7XG4gIG5vcnRoRWFzdCxcbiAgc291dGhXZXN0XG59LCBwcm9qZWN0aW9uKSA9PiB7XG4gIGNvbnN0IHN3ID0gcHJvamVjdGlvbi5mcm9tRGl2UGl4ZWxUb0xhdExuZyhzb3V0aFdlc3QpO1xuICBjb25zdCBuZSA9IHByb2plY3Rpb24uZnJvbURpdlBpeGVsVG9MYXRMbmcobm9ydGhFYXN0KTtcbiAgcmV0dXJuIG5ldyBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMoc3csIG5lKTtcbn07XG5cbi8qKlxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogQGhpZGRlblxuICovXG5jbGFzcyBBYnN0cmFjdEFsZ29yaXRobSB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICBtYXhab29tID0gMTZcbiAgfSkge1xuICAgIHRoaXMubWF4Wm9vbSA9IG1heFpvb207XG4gIH1cbiAgLyoqXG4gICAqIEhlbHBlciBmdW5jdGlvbiB0byBieXBhc3MgY2x1c3RlcmluZyBiYXNlZCB1cG9uIHNvbWUgbWFwIHN0YXRlIHN1Y2ggYXNcbiAgICogem9vbSwgbnVtYmVyIG9mIG1hcmtlcnMsIGV0Yy5cbiAgICpcbiAgICogYGBgdHlwZXNjcmlwdFxuICAgKiAgY2x1c3Rlcih7bWFya2VycywgbWFwfTogQWxnb3JpdGhtSW5wdXQpOiBDbHVzdGVyW10ge1xuICAgKiAgICBpZiAoc2hvdWxkQnlwYXNzQ2x1c3RlcmluZyhtYXApKSB7XG4gICAqICAgICAgcmV0dXJuIHRoaXMubm9vcCh7bWFya2Vyc30pXG4gICAqICAgIH1cbiAgICogfVxuICAgKiBgYGBcbiAgICovXG4gIG5vb3Aoe1xuICAgIG1hcmtlcnNcbiAgfSkge1xuICAgIHJldHVybiBub29wKG1hcmtlcnMpO1xuICB9XG59XG4vKipcbiAqIEFic3RyYWN0IHZpZXdwb3J0IGFsZ29yaXRobSBwcm92ZXMgYSBjbGFzcyB0byBmaWx0ZXIgbWFya2VycyBieSBhIHBhZGRlZFxuICogdmlld3BvcnQuIFRoaXMgaXMgYSBjb21tb24gb3B0aW1pemF0aW9uLlxuICpcbiAqIEBoaWRkZW5cbiAqL1xuY2xhc3MgQWJzdHJhY3RWaWV3cG9ydEFsZ29yaXRobSBleHRlbmRzIEFic3RyYWN0QWxnb3JpdGhtIHtcbiAgY29uc3RydWN0b3IoX2EpIHtcbiAgICB2YXIge1xuICAgICAgICB2aWV3cG9ydFBhZGRpbmcgPSA2MFxuICAgICAgfSA9IF9hLFxuICAgICAgb3B0aW9ucyA9IF9fcmVzdChfYSwgW1widmlld3BvcnRQYWRkaW5nXCJdKTtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgICB0aGlzLnZpZXdwb3J0UGFkZGluZyA9IDYwO1xuICAgIHRoaXMudmlld3BvcnRQYWRkaW5nID0gdmlld3BvcnRQYWRkaW5nO1xuICB9XG4gIGNhbGN1bGF0ZSh7XG4gICAgbWFya2VycyxcbiAgICBtYXAsXG4gICAgbWFwQ2FudmFzUHJvamVjdGlvblxuICB9KSB7XG4gICAgaWYgKG1hcC5nZXRab29tKCkgPj0gdGhpcy5tYXhab29tKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjbHVzdGVyczogdGhpcy5ub29wKHtcbiAgICAgICAgICBtYXJrZXJzXG4gICAgICAgIH0pLFxuICAgICAgICBjaGFuZ2VkOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsdXN0ZXJzOiB0aGlzLmNsdXN0ZXIoe1xuICAgICAgICBtYXJrZXJzOiBmaWx0ZXJNYXJrZXJzVG9QYWRkZWRWaWV3cG9ydChtYXAsIG1hcENhbnZhc1Byb2plY3Rpb24sIG1hcmtlcnMsIHRoaXMudmlld3BvcnRQYWRkaW5nKSxcbiAgICAgICAgbWFwLFxuICAgICAgICBtYXBDYW52YXNQcm9qZWN0aW9uXG4gICAgICB9KVxuICAgIH07XG4gIH1cbn1cbi8qKlxuICogQGhpZGRlblxuICovXG5jb25zdCBub29wID0gbWFya2VycyA9PiB7XG4gIGNvbnN0IGNsdXN0ZXJzID0gbWFya2Vycy5tYXAobWFya2VyID0+IG5ldyBDbHVzdGVyKHtcbiAgICBwb3NpdGlvbjogTWFya2VyVXRpbHMuZ2V0UG9zaXRpb24obWFya2VyKSxcbiAgICBtYXJrZXJzOiBbbWFya2VyXVxuICB9KSk7XG4gIHJldHVybiBjbHVzdGVycztcbn07XG5cbi8qKlxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogVGhlIGRlZmF1bHQgR3JpZCBhbGdvcml0aG0gaGlzdG9yaWNhbGx5IHVzZWQgaW4gR29vZ2xlIE1hcHMgbWFya2VyXG4gKiBjbHVzdGVyaW5nLlxuICpcbiAqIFRoZSBHcmlkIGFsZ29yaXRobSBkb2VzIG5vdCBpbXBsZW1lbnQgY2FjaGluZyBhbmQgbWFya2VycyBtYXkgZmxhc2ggYXMgdGhlXG4gKiB2aWV3cG9ydCBjaGFuZ2VzLiBJbnN0ZWFkIHVzZSB7QGxpbmsgU3VwZXJDbHVzdGVyQWxnb3JpdGhtfS5cbiAqL1xuY2xhc3MgR3JpZEFsZ29yaXRobSBleHRlbmRzIEFic3RyYWN0Vmlld3BvcnRBbGdvcml0aG0ge1xuICBjb25zdHJ1Y3RvcihfYSkge1xuICAgIHZhciB7XG4gICAgICAgIG1heERpc3RhbmNlID0gNDAwMDAsXG4gICAgICAgIGdyaWRTaXplID0gNDBcbiAgICAgIH0gPSBfYSxcbiAgICAgIG9wdGlvbnMgPSBfX3Jlc3QoX2EsIFtcIm1heERpc3RhbmNlXCIsIFwiZ3JpZFNpemVcIl0pO1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIHRoaXMuY2x1c3RlcnMgPSBbXTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgem9vbTogLTFcbiAgICB9O1xuICAgIHRoaXMubWF4RGlzdGFuY2UgPSBtYXhEaXN0YW5jZTtcbiAgICB0aGlzLmdyaWRTaXplID0gZ3JpZFNpemU7XG4gIH1cbiAgY2FsY3VsYXRlKHtcbiAgICBtYXJrZXJzLFxuICAgIG1hcCxcbiAgICBtYXBDYW52YXNQcm9qZWN0aW9uXG4gIH0pIHtcbiAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgIHpvb206IG1hcC5nZXRab29tKClcbiAgICB9O1xuICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuc3RhdGUuem9vbSA+PSB0aGlzLm1heFpvb20gJiYgc3RhdGUuem9vbSA+PSB0aGlzLm1heFpvb20pIDtlbHNlIHtcbiAgICAgIGNoYW5nZWQgPSAhZXF1YWwodGhpcy5zdGF0ZSwgc3RhdGUpO1xuICAgIH1cbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgaWYgKG1hcC5nZXRab29tKCkgPj0gdGhpcy5tYXhab29tKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjbHVzdGVyczogdGhpcy5ub29wKHtcbiAgICAgICAgICBtYXJrZXJzXG4gICAgICAgIH0pLFxuICAgICAgICBjaGFuZ2VkXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgY2x1c3RlcnM6IHRoaXMuY2x1c3Rlcih7XG4gICAgICAgIG1hcmtlcnM6IGZpbHRlck1hcmtlcnNUb1BhZGRlZFZpZXdwb3J0KG1hcCwgbWFwQ2FudmFzUHJvamVjdGlvbiwgbWFya2VycywgdGhpcy52aWV3cG9ydFBhZGRpbmcpLFxuICAgICAgICBtYXAsXG4gICAgICAgIG1hcENhbnZhc1Byb2plY3Rpb25cbiAgICAgIH0pXG4gICAgfTtcbiAgfVxuICBjbHVzdGVyKHtcbiAgICBtYXJrZXJzLFxuICAgIG1hcCxcbiAgICBtYXBDYW52YXNQcm9qZWN0aW9uXG4gIH0pIHtcbiAgICB0aGlzLmNsdXN0ZXJzID0gW107XG4gICAgbWFya2Vycy5mb3JFYWNoKG1hcmtlciA9PiB7XG4gICAgICB0aGlzLmFkZFRvQ2xvc2VzdENsdXN0ZXIobWFya2VyLCBtYXAsIG1hcENhbnZhc1Byb2plY3Rpb24pO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmNsdXN0ZXJzO1xuICB9XG4gIGFkZFRvQ2xvc2VzdENsdXN0ZXIobWFya2VyLCBtYXAsIHByb2plY3Rpb24pIHtcbiAgICBsZXQgbWF4RGlzdGFuY2UgPSB0aGlzLm1heERpc3RhbmNlOyAvLyBTb21lIGxhcmdlIG51bWJlclxuICAgIGxldCBjbHVzdGVyID0gbnVsbDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2x1c3RlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNhbmRpZGF0ZSA9IHRoaXMuY2x1c3RlcnNbaV07XG4gICAgICBjb25zdCBkaXN0YW5jZSA9IGRpc3RhbmNlQmV0d2VlblBvaW50cyhjYW5kaWRhdGUuYm91bmRzLmdldENlbnRlcigpLnRvSlNPTigpLCBNYXJrZXJVdGlscy5nZXRQb3NpdGlvbihtYXJrZXIpLnRvSlNPTigpKTtcbiAgICAgIGlmIChkaXN0YW5jZSA8IG1heERpc3RhbmNlKSB7XG4gICAgICAgIG1heERpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgICAgIGNsdXN0ZXIgPSBjYW5kaWRhdGU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjbHVzdGVyICYmIGV4dGVuZEJvdW5kc1RvUGFkZGVkVmlld3BvcnQoY2x1c3Rlci5ib3VuZHMsIHByb2plY3Rpb24sIHRoaXMuZ3JpZFNpemUpLmNvbnRhaW5zKE1hcmtlclV0aWxzLmdldFBvc2l0aW9uKG1hcmtlcikpKSB7XG4gICAgICBjbHVzdGVyLnB1c2gobWFya2VyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY2x1c3RlciA9IG5ldyBDbHVzdGVyKHtcbiAgICAgICAgbWFya2VyczogW21hcmtlcl1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5jbHVzdGVycy5wdXNoKGNsdXN0ZXIpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENvcHlyaWdodCAyMDIxIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAqIE5vb3AgYWxnb3JpdGhtIGRvZXMgbm90IGdlbmVyYXRlIGFueSBjbHVzdGVycyBvciBmaWx0ZXIgbWFya2VycyBieSB0aGUgYW4gZXh0ZW5kZWQgdmlld3BvcnQuXG4gKi9cbmNsYXNzIE5vb3BBbGdvcml0aG0gZXh0ZW5kcyBBYnN0cmFjdEFsZ29yaXRobSB7XG4gIGNvbnN0cnVjdG9yKF9hKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBfX3Jlc3QoX2EsIFtdKTtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgfVxuICBjYWxjdWxhdGUoe1xuICAgIG1hcmtlcnMsXG4gICAgbWFwLFxuICAgIG1hcENhbnZhc1Byb2plY3Rpb25cbiAgfSkge1xuICAgIHJldHVybiB7XG4gICAgICBjbHVzdGVyczogdGhpcy5jbHVzdGVyKHtcbiAgICAgICAgbWFya2VycyxcbiAgICAgICAgbWFwLFxuICAgICAgICBtYXBDYW52YXNQcm9qZWN0aW9uXG4gICAgICB9KSxcbiAgICAgIGNoYW5nZWQ6IGZhbHNlXG4gICAgfTtcbiAgfVxuICBjbHVzdGVyKGlucHV0KSB7XG4gICAgcmV0dXJuIHRoaXMubm9vcChpbnB1dCk7XG4gIH1cbn1cblxuLyoqXG4gKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gKiBBIHZlcnkgZmFzdCBKYXZhU2NyaXB0IGFsZ29yaXRobSBmb3IgZ2Vvc3BhdGlhbCBwb2ludCBjbHVzdGVyaW5nIHVzaW5nIEtEIHRyZWVzLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2Uvc3VwZXJjbHVzdGVyIGZvciBtb3JlIGluZm9ybWF0aW9uIG9uIG9wdGlvbnMuXG4gKi9cbmNsYXNzIFN1cGVyQ2x1c3RlckFsZ29yaXRobSBleHRlbmRzIEFic3RyYWN0QWxnb3JpdGhtIHtcbiAgY29uc3RydWN0b3IoX2EpIHtcbiAgICB2YXIge1xuICAgICAgICBtYXhab29tLFxuICAgICAgICByYWRpdXMgPSA2MFxuICAgICAgfSA9IF9hLFxuICAgICAgb3B0aW9ucyA9IF9fcmVzdChfYSwgW1wibWF4Wm9vbVwiLCBcInJhZGl1c1wiXSk7XG4gICAgc3VwZXIoe1xuICAgICAgbWF4Wm9vbVxuICAgIH0pO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB6b29tOiAtMVxuICAgIH07XG4gICAgdGhpcy5zdXBlckNsdXN0ZXIgPSBuZXcgU3VwZXJDbHVzdGVyKE9iamVjdC5hc3NpZ24oe1xuICAgICAgbWF4Wm9vbTogdGhpcy5tYXhab29tLFxuICAgICAgcmFkaXVzXG4gICAgfSwgb3B0aW9ucykpO1xuICB9XG4gIGNhbGN1bGF0ZShpbnB1dCkge1xuICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG4gICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICB6b29tOiBpbnB1dC5tYXAuZ2V0Wm9vbSgpXG4gICAgfTtcbiAgICBpZiAoIWVxdWFsKGlucHV0Lm1hcmtlcnMsIHRoaXMubWFya2VycykpIHtcbiAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgLy8gVE9ETyB1c2UgcHJveHkgdG8gYXZvaWQgY29weT9cbiAgICAgIHRoaXMubWFya2VycyA9IFsuLi5pbnB1dC5tYXJrZXJzXTtcbiAgICAgIGNvbnN0IHBvaW50cyA9IHRoaXMubWFya2Vycy5tYXAobWFya2VyID0+IHtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBNYXJrZXJVdGlscy5nZXRQb3NpdGlvbihtYXJrZXIpO1xuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IFtwb3NpdGlvbi5sbmcoKSwgcG9zaXRpb24ubGF0KCldO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxuICAgICAgICAgIGdlb21ldHJ5OiB7XG4gICAgICAgICAgICB0eXBlOiBcIlBvaW50XCIsXG4gICAgICAgICAgICBjb29yZGluYXRlc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgbWFya2VyXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICB0aGlzLnN1cGVyQ2x1c3Rlci5sb2FkKHBvaW50cyk7XG4gICAgfVxuICAgIGlmICghY2hhbmdlZCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuem9vbSA8PSB0aGlzLm1heFpvb20gfHwgc3RhdGUuem9vbSA8PSB0aGlzLm1heFpvb20pIHtcbiAgICAgICAgY2hhbmdlZCA9ICFlcXVhbCh0aGlzLnN0YXRlLCBzdGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgdGhpcy5jbHVzdGVycyA9IHRoaXMuY2x1c3RlcihpbnB1dCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBjbHVzdGVyczogdGhpcy5jbHVzdGVycyxcbiAgICAgIGNoYW5nZWRcbiAgICB9O1xuICB9XG4gIGNsdXN0ZXIoe1xuICAgIG1hcFxuICB9KSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwZXJDbHVzdGVyLmdldENsdXN0ZXJzKFstMTgwLCAtOTAsIDE4MCwgOTBdLCBNYXRoLnJvdW5kKG1hcC5nZXRab29tKCkpKS5tYXAoZmVhdHVyZSA9PiB0aGlzLnRyYW5zZm9ybUNsdXN0ZXIoZmVhdHVyZSkpO1xuICB9XG4gIHRyYW5zZm9ybUNsdXN0ZXIoe1xuICAgIGdlb21ldHJ5OiB7XG4gICAgICBjb29yZGluYXRlczogW2xuZywgbGF0XVxuICAgIH0sXG4gICAgcHJvcGVydGllc1xuICB9KSB7XG4gICAgaWYgKHByb3BlcnRpZXMuY2x1c3Rlcikge1xuICAgICAgcmV0dXJuIG5ldyBDbHVzdGVyKHtcbiAgICAgICAgbWFya2VyczogdGhpcy5zdXBlckNsdXN0ZXIuZ2V0TGVhdmVzKHByb3BlcnRpZXMuY2x1c3Rlcl9pZCwgSW5maW5pdHkpLm1hcChsZWFmID0+IGxlYWYucHJvcGVydGllcy5tYXJrZXIpLFxuICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgIGxhdCxcbiAgICAgICAgICBsbmdcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IG1hcmtlciA9IHByb3BlcnRpZXMubWFya2VyO1xuICAgIHJldHVybiBuZXcgQ2x1c3Rlcih7XG4gICAgICBtYXJrZXJzOiBbbWFya2VyXSxcbiAgICAgIHBvc2l0aW9uOiBNYXJrZXJVdGlscy5nZXRQb3NpdGlvbihtYXJrZXIpXG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gKiBBIHZlcnkgZmFzdCBKYXZhU2NyaXB0IGFsZ29yaXRobSBmb3IgZ2Vvc3BhdGlhbCBwb2ludCBjbHVzdGVyaW5nIHVzaW5nIEtEIHRyZWVzLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2Uvc3VwZXJjbHVzdGVyIGZvciBtb3JlIGluZm9ybWF0aW9uIG9uIG9wdGlvbnMuXG4gKi9cbmNsYXNzIFN1cGVyQ2x1c3RlclZpZXdwb3J0QWxnb3JpdGhtIGV4dGVuZHMgQWJzdHJhY3RWaWV3cG9ydEFsZ29yaXRobSB7XG4gIGNvbnN0cnVjdG9yKF9hKSB7XG4gICAgdmFyIHtcbiAgICAgICAgbWF4Wm9vbSxcbiAgICAgICAgcmFkaXVzID0gNjAsXG4gICAgICAgIHZpZXdwb3J0UGFkZGluZyA9IDYwXG4gICAgICB9ID0gX2EsXG4gICAgICBvcHRpb25zID0gX19yZXN0KF9hLCBbXCJtYXhab29tXCIsIFwicmFkaXVzXCIsIFwidmlld3BvcnRQYWRkaW5nXCJdKTtcbiAgICBzdXBlcih7XG4gICAgICBtYXhab29tLFxuICAgICAgdmlld3BvcnRQYWRkaW5nXG4gICAgfSk7XG4gICAgdGhpcy5zdXBlckNsdXN0ZXIgPSBuZXcgU3VwZXJDbHVzdGVyKE9iamVjdC5hc3NpZ24oe1xuICAgICAgbWF4Wm9vbTogdGhpcy5tYXhab29tLFxuICAgICAgcmFkaXVzXG4gICAgfSwgb3B0aW9ucykpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB6b29tOiAtMSxcbiAgICAgIHZpZXc6IFswLCAwLCAwLCAwXVxuICAgIH07XG4gIH1cbiAgY2FsY3VsYXRlKGlucHV0KSB7XG4gICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICB6b29tOiBNYXRoLnJvdW5kKGlucHV0Lm1hcC5nZXRab29tKCkpLFxuICAgICAgdmlldzogZ2V0UGFkZGVkVmlld3BvcnQoaW5wdXQubWFwLmdldEJvdW5kcygpLCBpbnB1dC5tYXBDYW52YXNQcm9qZWN0aW9uLCB0aGlzLnZpZXdwb3J0UGFkZGluZylcbiAgICB9O1xuICAgIGxldCBjaGFuZ2VkID0gIWVxdWFsKHRoaXMuc3RhdGUsIHN0YXRlKTtcbiAgICBpZiAoIWVxdWFsKGlucHV0Lm1hcmtlcnMsIHRoaXMubWFya2VycykpIHtcbiAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgLy8gVE9ETyB1c2UgcHJveHkgdG8gYXZvaWQgY29weT9cbiAgICAgIHRoaXMubWFya2VycyA9IFsuLi5pbnB1dC5tYXJrZXJzXTtcbiAgICAgIGNvbnN0IHBvaW50cyA9IHRoaXMubWFya2Vycy5tYXAobWFya2VyID0+IHtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBNYXJrZXJVdGlscy5nZXRQb3NpdGlvbihtYXJrZXIpO1xuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IFtwb3NpdGlvbi5sbmcoKSwgcG9zaXRpb24ubGF0KCldO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxuICAgICAgICAgIGdlb21ldHJ5OiB7XG4gICAgICAgICAgICB0eXBlOiBcIlBvaW50XCIsXG4gICAgICAgICAgICBjb29yZGluYXRlc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgbWFya2VyXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICB0aGlzLnN1cGVyQ2x1c3Rlci5sb2FkKHBvaW50cyk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICB0aGlzLmNsdXN0ZXJzID0gdGhpcy5jbHVzdGVyKGlucHV0KTtcbiAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsdXN0ZXJzOiB0aGlzLmNsdXN0ZXJzLFxuICAgICAgY2hhbmdlZFxuICAgIH07XG4gIH1cbiAgY2x1c3Rlcih7XG4gICAgbWFwLFxuICAgIG1hcENhbnZhc1Byb2plY3Rpb25cbiAgfSkge1xuICAgIC8qIHJlY2FsY3VsYXRlIG5ldyBzdGF0ZSBiZWNhdXNlIHdlIGNhbid0IHVzZSB0aGUgY2FjaGVkIHZlcnNpb24uICovXG4gICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICB6b29tOiBNYXRoLnJvdW5kKG1hcC5nZXRab29tKCkpLFxuICAgICAgdmlldzogZ2V0UGFkZGVkVmlld3BvcnQobWFwLmdldEJvdW5kcygpLCBtYXBDYW52YXNQcm9qZWN0aW9uLCB0aGlzLnZpZXdwb3J0UGFkZGluZylcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLnN1cGVyQ2x1c3Rlci5nZXRDbHVzdGVycyhzdGF0ZS52aWV3LCBzdGF0ZS56b29tKS5tYXAoZmVhdHVyZSA9PiB0aGlzLnRyYW5zZm9ybUNsdXN0ZXIoZmVhdHVyZSkpO1xuICB9XG4gIHRyYW5zZm9ybUNsdXN0ZXIoe1xuICAgIGdlb21ldHJ5OiB7XG4gICAgICBjb29yZGluYXRlczogW2xuZywgbGF0XVxuICAgIH0sXG4gICAgcHJvcGVydGllc1xuICB9KSB7XG4gICAgaWYgKHByb3BlcnRpZXMuY2x1c3Rlcikge1xuICAgICAgcmV0dXJuIG5ldyBDbHVzdGVyKHtcbiAgICAgICAgbWFya2VyczogdGhpcy5zdXBlckNsdXN0ZXIuZ2V0TGVhdmVzKHByb3BlcnRpZXMuY2x1c3Rlcl9pZCwgSW5maW5pdHkpLm1hcChsZWFmID0+IGxlYWYucHJvcGVydGllcy5tYXJrZXIpLFxuICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgIGxhdCxcbiAgICAgICAgICBsbmdcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IG1hcmtlciA9IHByb3BlcnRpZXMubWFya2VyO1xuICAgIHJldHVybiBuZXcgQ2x1c3Rlcih7XG4gICAgICBtYXJrZXJzOiBbbWFya2VyXSxcbiAgICAgIHBvc2l0aW9uOiBNYXJrZXJVdGlscy5nZXRQb3NpdGlvbihtYXJrZXIpXG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gKiBQcm92aWRlcyBzdGF0aXN0aWNzIG9uIGFsbCBjbHVzdGVycyBpbiB0aGUgY3VycmVudCByZW5kZXIgY3ljbGUgZm9yIHVzZSBpbiB7QGxpbmsgUmVuZGVyZXIucmVuZGVyfS5cbiAqL1xuY2xhc3MgQ2x1c3RlclN0YXRzIHtcbiAgY29uc3RydWN0b3IobWFya2VycywgY2x1c3RlcnMpIHtcbiAgICB0aGlzLm1hcmtlcnMgPSB7XG4gICAgICBzdW06IG1hcmtlcnMubGVuZ3RoXG4gICAgfTtcbiAgICBjb25zdCBjbHVzdGVyTWFya2VyQ291bnRzID0gY2x1c3RlcnMubWFwKGEgPT4gYS5jb3VudCk7XG4gICAgY29uc3QgY2x1c3Rlck1hcmtlclN1bSA9IGNsdXN0ZXJNYXJrZXJDb3VudHMucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XG4gICAgdGhpcy5jbHVzdGVycyA9IHtcbiAgICAgIGNvdW50OiBjbHVzdGVycy5sZW5ndGgsXG4gICAgICBtYXJrZXJzOiB7XG4gICAgICAgIG1lYW46IGNsdXN0ZXJNYXJrZXJTdW0gLyBjbHVzdGVycy5sZW5ndGgsXG4gICAgICAgIHN1bTogY2x1c3Rlck1hcmtlclN1bSxcbiAgICAgICAgbWluOiBNYXRoLm1pbiguLi5jbHVzdGVyTWFya2VyQ291bnRzKSxcbiAgICAgICAgbWF4OiBNYXRoLm1heCguLi5jbHVzdGVyTWFya2VyQ291bnRzKVxuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbmNsYXNzIERlZmF1bHRSZW5kZXJlciB7XG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCByZW5kZXIgZnVuY3Rpb24gZm9yIHRoZSBsaWJyYXJ5IHVzZWQgYnkge0BsaW5rIE1hcmtlckNsdXN0ZXJlcn0uXG4gICAqXG4gICAqIEN1cnJlbnRseSBzZXQgdG8gdXNlIHRoZSBmb2xsb3dpbmc6XG4gICAqXG4gICAqIGBgYHR5cGVzY3JpcHRcbiAgICogLy8gY2hhbmdlIGNvbG9yIGlmIHRoaXMgY2x1c3RlciBoYXMgbW9yZSBtYXJrZXJzIHRoYW4gdGhlIG1lYW4gY2x1c3RlclxuICAgKiBjb25zdCBjb2xvciA9XG4gICAqICAgY291bnQgPiBNYXRoLm1heCgxMCwgc3RhdHMuY2x1c3RlcnMubWFya2Vycy5tZWFuKVxuICAgKiAgICAgPyBcIiNmZjAwMDBcIlxuICAgKiAgICAgOiBcIiMwMDAwZmZcIjtcbiAgICpcbiAgICogLy8gY3JlYXRlIHN2ZyB1cmwgd2l0aCBmaWxsIGNvbG9yXG4gICAqIGNvbnN0IHN2ZyA9IHdpbmRvdy5idG9hKGBcbiAgICogPHN2ZyBmaWxsPVwiJHtjb2xvcn1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNDAgMjQwXCI+XG4gICAqICAgPGNpcmNsZSBjeD1cIjEyMFwiIGN5PVwiMTIwXCIgb3BhY2l0eT1cIi42XCIgcj1cIjcwXCIgLz5cbiAgICogICA8Y2lyY2xlIGN4PVwiMTIwXCIgY3k9XCIxMjBcIiBvcGFjaXR5PVwiLjNcIiByPVwiOTBcIiAvPlxuICAgKiAgIDxjaXJjbGUgY3g9XCIxMjBcIiBjeT1cIjEyMFwiIG9wYWNpdHk9XCIuMlwiIHI9XCIxMTBcIiAvPlxuICAgKiAgIDxjaXJjbGUgY3g9XCIxMjBcIiBjeT1cIjEyMFwiIG9wYWNpdHk9XCIuMVwiIHI9XCIxMzBcIiAvPlxuICAgKiA8L3N2Zz5gKTtcbiAgICpcbiAgICogLy8gY3JlYXRlIG1hcmtlciB1c2luZyBzdmcgaWNvblxuICAgKiByZXR1cm4gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAqICAgcG9zaXRpb24sXG4gICAqICAgaWNvbjoge1xuICAgKiAgICAgdXJsOiBgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwke3N2Z31gLFxuICAgKiAgICAgc2NhbGVkU2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoNDUsIDQ1KSxcbiAgICogICB9LFxuICAgKiAgIGxhYmVsOiB7XG4gICAqICAgICB0ZXh0OiBTdHJpbmcoY291bnQpLFxuICAgKiAgICAgY29sb3I6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjkpXCIsXG4gICAqICAgICBmb250U2l6ZTogXCIxMnB4XCIsXG4gICAqICAgfSxcbiAgICogICAvLyBhZGp1c3QgekluZGV4IHRvIGJlIGFib3ZlIG90aGVyIG1hcmtlcnNcbiAgICogICB6SW5kZXg6IDEwMDAgKyBjb3VudCxcbiAgICogfSk7XG4gICAqIGBgYFxuICAgKi9cbiAgcmVuZGVyKHtcbiAgICBjb3VudCxcbiAgICBwb3NpdGlvblxuICB9LCBzdGF0cywgbWFwKSB7XG4gICAgLy8gY2hhbmdlIGNvbG9yIGlmIHRoaXMgY2x1c3RlciBoYXMgbW9yZSBtYXJrZXJzIHRoYW4gdGhlIG1lYW4gY2x1c3RlclxuICAgIGNvbnN0IGNvbG9yID0gY291bnQgPiBNYXRoLm1heCgxMCwgc3RhdHMuY2x1c3RlcnMubWFya2Vycy5tZWFuKSA/IFwiI2ZmMDAwMFwiIDogXCIjMDAwMGZmXCI7XG4gICAgLy8gY3JlYXRlIHN2ZyBsaXRlcmFsIHdpdGggZmlsbCBjb2xvclxuICAgIGNvbnN0IHN2ZyA9IGA8c3ZnIGZpbGw9XCIke2NvbG9yfVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0MCAyNDBcIiB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNTBcIj5cbjxjaXJjbGUgY3g9XCIxMjBcIiBjeT1cIjEyMFwiIG9wYWNpdHk9XCIuNlwiIHI9XCI3MFwiIC8+XG48Y2lyY2xlIGN4PVwiMTIwXCIgY3k9XCIxMjBcIiBvcGFjaXR5PVwiLjNcIiByPVwiOTBcIiAvPlxuPGNpcmNsZSBjeD1cIjEyMFwiIGN5PVwiMTIwXCIgb3BhY2l0eT1cIi4yXCIgcj1cIjExMFwiIC8+XG48dGV4dCB4PVwiNTAlXCIgeT1cIjUwJVwiIHN0eWxlPVwiZmlsbDojZmZmXCIgdGV4dC1hbmNob3I9XCJtaWRkbGVcIiBmb250LXNpemU9XCI1MFwiIGRvbWluYW50LWJhc2VsaW5lPVwibWlkZGxlXCIgZm9udC1mYW1pbHk9XCJyb2JvdG8sYXJpYWwsc2Fucy1zZXJpZlwiPiR7Y291bnR9PC90ZXh0PlxuPC9zdmc+YDtcbiAgICBjb25zdCB0aXRsZSA9IGBDbHVzdGVyIG9mICR7Y291bnR9IG1hcmtlcnNgLFxuICAgICAgLy8gYWRqdXN0IHpJbmRleCB0byBiZSBhYm92ZSBvdGhlciBtYXJrZXJzXG4gICAgICB6SW5kZXggPSBOdW1iZXIoZ29vZ2xlLm1hcHMuTWFya2VyLk1BWF9aSU5ERVgpICsgY291bnQ7XG4gICAgaWYgKE1hcmtlclV0aWxzLmlzQWR2YW5jZWRNYXJrZXJBdmFpbGFibGUobWFwKSkge1xuICAgICAgLy8gY3JlYXRlIGNsdXN0ZXIgU1ZHIGVsZW1lbnRcbiAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgIGNvbnN0IHN2Z0VsID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhzdmcsIFwiaW1hZ2Uvc3ZnK3htbFwiKS5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICBzdmdFbC5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCAyNSlcIik7XG4gICAgICBjb25zdCBjbHVzdGVyT3B0aW9ucyA9IHtcbiAgICAgICAgbWFwLFxuICAgICAgICBwb3NpdGlvbixcbiAgICAgICAgekluZGV4LFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgY29udGVudDogc3ZnRWxcbiAgICAgIH07XG4gICAgICByZXR1cm4gbmV3IGdvb2dsZS5tYXBzLm1hcmtlci5BZHZhbmNlZE1hcmtlckVsZW1lbnQoY2x1c3Rlck9wdGlvbnMpO1xuICAgIH1cbiAgICBjb25zdCBjbHVzdGVyT3B0aW9ucyA9IHtcbiAgICAgIHBvc2l0aW9uLFxuICAgICAgekluZGV4LFxuICAgICAgdGl0bGUsXG4gICAgICBpY29uOiB7XG4gICAgICAgIHVybDogYGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHtidG9hKHN2Zyl9YCxcbiAgICAgICAgYW5jaG9yOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMjUsIDI1KVxuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIG5ldyBnb29nbGUubWFwcy5NYXJrZXIoY2x1c3Rlck9wdGlvbnMpO1xuICB9XG59XG5cbi8qKlxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAqIEV4dGVuZHMgYW4gb2JqZWN0J3MgcHJvdG90eXBlIGJ5IGFub3RoZXIncy5cbiAqXG4gKiBAcGFyYW0gdHlwZTEgVGhlIFR5cGUgdG8gYmUgZXh0ZW5kZWQuXG4gKiBAcGFyYW0gdHlwZTIgVGhlIFR5cGUgdG8gZXh0ZW5kIHdpdGguXG4gKiBAaWdub3JlXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5mdW5jdGlvbiBleHRlbmQodHlwZTEsIHR5cGUyKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItY29uc3RcbiAgZm9yIChsZXQgcHJvcGVydHkgaW4gdHlwZTIucHJvdG90eXBlKSB7XG4gICAgdHlwZTEucHJvdG90eXBlW3Byb3BlcnR5XSA9IHR5cGUyLnByb3RvdHlwZVtwcm9wZXJ0eV07XG4gIH1cbn1cbi8qKlxuICogQGlnbm9yZVxuICovXG5jbGFzcyBPdmVybGF5Vmlld1NhZmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBNYXJrZXJDbHVzdGVyZXIgaW1wbGVtZW50cyBnb29nbGUubWFwcy5PdmVybGF5VmlldyBpbnRlcmZhY2UuIFdlIHVzZSB0aGVcbiAgICAvLyBleHRlbmQgZnVuY3Rpb24gdG8gZXh0ZW5kIE1hcmtlckNsdXN0ZXJlciB3aXRoIGdvb2dsZS5tYXBzLk92ZXJsYXlWaWV3XG4gICAgLy8gYmVjYXVzZSBpdCBtaWdodCBub3QgYWx3YXlzIGJlIGF2YWlsYWJsZSB3aGVuIHRoZSBjb2RlIGlzIGRlZmluZWQgc28gd2VcbiAgICAvLyBsb29rIGZvciBpdCBhdCB0aGUgbGFzdCBwb3NzaWJsZSBtb21lbnQuIElmIGl0IGRvZXNuJ3QgZXhpc3Qgbm93IHRoZW5cbiAgICAvLyB0aGVyZSBpcyBubyBwb2ludCBnb2luZyBhaGVhZCA6KVxuICAgIGV4dGVuZChPdmVybGF5Vmlld1NhZmUsIGdvb2dsZS5tYXBzLk92ZXJsYXlWaWV3KTtcbiAgfVxufVxuXG4vKipcbiAqIENvcHlyaWdodCAyMDIxIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG52YXIgTWFya2VyQ2x1c3RlcmVyRXZlbnRzO1xuKGZ1bmN0aW9uIChNYXJrZXJDbHVzdGVyZXJFdmVudHMpIHtcbiAgTWFya2VyQ2x1c3RlcmVyRXZlbnRzW1wiQ0xVU1RFUklOR19CRUdJTlwiXSA9IFwiY2x1c3RlcmluZ2JlZ2luXCI7XG4gIE1hcmtlckNsdXN0ZXJlckV2ZW50c1tcIkNMVVNURVJJTkdfRU5EXCJdID0gXCJjbHVzdGVyaW5nZW5kXCI7XG4gIE1hcmtlckNsdXN0ZXJlckV2ZW50c1tcIkNMVVNURVJfQ0xJQ0tcIl0gPSBcImNsaWNrXCI7XG59KShNYXJrZXJDbHVzdGVyZXJFdmVudHMgfHwgKE1hcmtlckNsdXN0ZXJlckV2ZW50cyA9IHt9KSk7XG5jb25zdCBkZWZhdWx0T25DbHVzdGVyQ2xpY2tIYW5kbGVyID0gKF8sIGNsdXN0ZXIsIG1hcCkgPT4ge1xuICBtYXAuZml0Qm91bmRzKGNsdXN0ZXIuYm91bmRzKTtcbn07XG4vKipcbiAqIE1hcmtlckNsdXN0ZXJlciBjcmVhdGVzIGFuZCBtYW5hZ2VzIHBlci16b29tLWxldmVsIGNsdXN0ZXJzIGZvciBsYXJnZSBhbW91bnRzXG4gKiBvZiBtYXJrZXJzLiBTZWUge0BsaW5rIE1hcmtlckNsdXN0ZXJlck9wdGlvbnN9IGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICovXG5jbGFzcyBNYXJrZXJDbHVzdGVyZXIgZXh0ZW5kcyBPdmVybGF5Vmlld1NhZmUge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgbWFwLFxuICAgIG1hcmtlcnMgPSBbXSxcbiAgICBhbGdvcml0aG1PcHRpb25zID0ge30sXG4gICAgYWxnb3JpdGhtID0gbmV3IFN1cGVyQ2x1c3RlckFsZ29yaXRobShhbGdvcml0aG1PcHRpb25zKSxcbiAgICByZW5kZXJlciA9IG5ldyBEZWZhdWx0UmVuZGVyZXIoKSxcbiAgICBvbkNsdXN0ZXJDbGljayA9IGRlZmF1bHRPbkNsdXN0ZXJDbGlja0hhbmRsZXJcbiAgfSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5tYXJrZXJzID0gWy4uLm1hcmtlcnNdO1xuICAgIHRoaXMuY2x1c3RlcnMgPSBbXTtcbiAgICB0aGlzLmFsZ29yaXRobSA9IGFsZ29yaXRobTtcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgdGhpcy5vbkNsdXN0ZXJDbGljayA9IG9uQ2x1c3RlckNsaWNrO1xuICAgIGlmIChtYXApIHtcbiAgICAgIHRoaXMuc2V0TWFwKG1hcCk7XG4gICAgfVxuICB9XG4gIGFkZE1hcmtlcihtYXJrZXIsIG5vRHJhdykge1xuICAgIGlmICh0aGlzLm1hcmtlcnMuaW5jbHVkZXMobWFya2VyKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xuICAgIGlmICghbm9EcmF3KSB7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuICBhZGRNYXJrZXJzKG1hcmtlcnMsIG5vRHJhdykge1xuICAgIG1hcmtlcnMuZm9yRWFjaChtYXJrZXIgPT4ge1xuICAgICAgdGhpcy5hZGRNYXJrZXIobWFya2VyLCB0cnVlKTtcbiAgICB9KTtcbiAgICBpZiAoIW5vRHJhdykge1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cbiAgcmVtb3ZlTWFya2VyKG1hcmtlciwgbm9EcmF3KSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLm1hcmtlcnMuaW5kZXhPZihtYXJrZXIpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIC8vIE1hcmtlciBpcyBub3QgaW4gb3VyIGxpc3Qgb2YgbWFya2Vycywgc28gZG8gbm90aGluZzpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgTWFya2VyVXRpbHMuc2V0TWFwKG1hcmtlciwgbnVsbCk7XG4gICAgdGhpcy5tYXJrZXJzLnNwbGljZShpbmRleCwgMSk7IC8vIFJlbW92ZSB0aGUgbWFya2VyIGZyb20gdGhlIGxpc3Qgb2YgbWFuYWdlZCBtYXJrZXJzXG4gICAgaWYgKCFub0RyYXcpIHtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJlbW92ZU1hcmtlcnMobWFya2Vycywgbm9EcmF3KSB7XG4gICAgbGV0IHJlbW92ZWQgPSBmYWxzZTtcbiAgICBtYXJrZXJzLmZvckVhY2gobWFya2VyID0+IHtcbiAgICAgIHJlbW92ZWQgPSB0aGlzLnJlbW92ZU1hcmtlcihtYXJrZXIsIHRydWUpIHx8IHJlbW92ZWQ7XG4gICAgfSk7XG4gICAgaWYgKHJlbW92ZWQgJiYgIW5vRHJhdykge1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlbW92ZWQ7XG4gIH1cbiAgY2xlYXJNYXJrZXJzKG5vRHJhdykge1xuICAgIHRoaXMubWFya2Vycy5sZW5ndGggPSAwO1xuICAgIGlmICghbm9EcmF3KSB7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogUmVjYWxjdWxhdGVzIGFuZCBkcmF3cyBhbGwgdGhlIG1hcmtlciBjbHVzdGVycy5cbiAgICovXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBtYXAgPSB0aGlzLmdldE1hcCgpO1xuICAgIGlmIChtYXAgaW5zdGFuY2VvZiBnb29nbGUubWFwcy5NYXAgJiYgbWFwLmdldFByb2plY3Rpb24oKSkge1xuICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQudHJpZ2dlcih0aGlzLCBNYXJrZXJDbHVzdGVyZXJFdmVudHMuQ0xVU1RFUklOR19CRUdJTiwgdGhpcyk7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGNsdXN0ZXJzLFxuICAgICAgICBjaGFuZ2VkXG4gICAgICB9ID0gdGhpcy5hbGdvcml0aG0uY2FsY3VsYXRlKHtcbiAgICAgICAgbWFya2VyczogdGhpcy5tYXJrZXJzLFxuICAgICAgICBtYXAsXG4gICAgICAgIG1hcENhbnZhc1Byb2plY3Rpb246IHRoaXMuZ2V0UHJvamVjdGlvbigpXG4gICAgICB9KTtcbiAgICAgIC8vIEFsbG93IGFsZ29yaXRobXMgdG8gcmV0dXJuIGZsYWcgb24gd2hldGhlciB0aGUgY2x1c3RlcnMvbWFya2VycyBoYXZlIGNoYW5nZWQuXG4gICAgICBpZiAoY2hhbmdlZCB8fCBjaGFuZ2VkID09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBBY2N1bXVsYXRlIHRoZSBtYXJrZXJzIG9mIHRoZSBjbHVzdGVycyBjb21wb3NlZCBvZiBhIHNpbmdsZSBtYXJrZXIuXG4gICAgICAgIC8vIFRob3NlIGNsdXN0ZXJzIGRpcmVjdGx5IHVzZSB0aGUgbWFya2VyLlxuICAgICAgICAvLyBDbHVzdGVycyB3aXRoIG1vcmUgdGhhbiBvbmUgbWFya2VycyB1c2UgYSBncm91cCBtYXJrZXIgZ2VuZXJhdGVkIGJ5IGEgcmVuZGVyZXIuXG4gICAgICAgIGNvbnN0IHNpbmdsZU1hcmtlciA9IG5ldyBTZXQoKTtcbiAgICAgICAgZm9yIChjb25zdCBjbHVzdGVyIG9mIGNsdXN0ZXJzKSB7XG4gICAgICAgICAgaWYgKGNsdXN0ZXIubWFya2Vycy5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgc2luZ2xlTWFya2VyLmFkZChjbHVzdGVyLm1hcmtlcnNbMF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBncm91cE1hcmtlcnMgPSBbXTtcbiAgICAgICAgLy8gSXRlcmF0ZSB0aGUgY2x1c3RlcnMgdGhhdCBhcmUgY3VycmVudGx5IHJlbmRlcmVkLlxuICAgICAgICBmb3IgKGNvbnN0IGNsdXN0ZXIgb2YgdGhpcy5jbHVzdGVycykge1xuICAgICAgICAgIGlmIChjbHVzdGVyLm1hcmtlciA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGNsdXN0ZXIubWFya2Vycy5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgaWYgKCFzaW5nbGVNYXJrZXIuaGFzKGNsdXN0ZXIubWFya2VyKSkge1xuICAgICAgICAgICAgICAvLyBUaGUgbWFya2VyOlxuICAgICAgICAgICAgICAvLyAtIHdhcyBwcmV2aW91c2x5IHJlbmRlcmVkIGJlY2F1c2UgaXQgaXMgZnJvbSBhIGNsdXN0ZXIgd2l0aCAxIG1hcmtlcixcbiAgICAgICAgICAgICAgLy8gLSBzaG91bGQgbm8gbW9yZSBiZSByZW5kZXJlZCBhcyBpdCBpcyBub3QgaW4gc2luZ2xlTWFya2VyLlxuICAgICAgICAgICAgICBNYXJrZXJVdGlscy5zZXRNYXAoY2x1c3Rlci5tYXJrZXIsIG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBEZWxheSB0aGUgcmVtb3ZhbCBvZiBvbGQgZ3JvdXAgbWFya2VycyB0byBhdm9pZCBmbGlja2VyaW5nLlxuICAgICAgICAgICAgZ3JvdXBNYXJrZXJzLnB1c2goY2x1c3Rlci5tYXJrZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsdXN0ZXJzID0gY2x1c3RlcnM7XG4gICAgICAgIHRoaXMucmVuZGVyQ2x1c3RlcnMoKTtcbiAgICAgICAgLy8gRGVsYXllZCByZW1vdmFsIG9mIHRoZSBtYXJrZXJzIG9mIHRoZSBmb3JtZXIgZ3JvdXBzLlxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gZ3JvdXBNYXJrZXJzLmZvckVhY2gobWFya2VyID0+IE1hcmtlclV0aWxzLnNldE1hcChtYXJrZXIsIG51bGwpKSk7XG4gICAgICB9XG4gICAgICBnb29nbGUubWFwcy5ldmVudC50cmlnZ2VyKHRoaXMsIE1hcmtlckNsdXN0ZXJlckV2ZW50cy5DTFVTVEVSSU5HX0VORCwgdGhpcyk7XG4gICAgfVxuICB9XG4gIG9uQWRkKCkge1xuICAgIHRoaXMuaWRsZUxpc3RlbmVyID0gdGhpcy5nZXRNYXAoKS5hZGRMaXN0ZW5lcihcImlkbGVcIiwgdGhpcy5yZW5kZXIuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuICBvblJlbW92ZSgpIHtcbiAgICBnb29nbGUubWFwcy5ldmVudC5yZW1vdmVMaXN0ZW5lcih0aGlzLmlkbGVMaXN0ZW5lcik7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG4gIHJlc2V0KCkge1xuICAgIHRoaXMubWFya2Vycy5mb3JFYWNoKG1hcmtlciA9PiBNYXJrZXJVdGlscy5zZXRNYXAobWFya2VyLCBudWxsKSk7XG4gICAgdGhpcy5jbHVzdGVycy5mb3JFYWNoKGNsdXN0ZXIgPT4gY2x1c3Rlci5kZWxldGUoKSk7XG4gICAgdGhpcy5jbHVzdGVycyA9IFtdO1xuICB9XG4gIHJlbmRlckNsdXN0ZXJzKCkge1xuICAgIC8vIEdlbmVyYXRlIHN0YXRzIHRvIHBhc3MgdG8gcmVuZGVyZXJzLlxuICAgIGNvbnN0IHN0YXRzID0gbmV3IENsdXN0ZXJTdGF0cyh0aGlzLm1hcmtlcnMsIHRoaXMuY2x1c3RlcnMpO1xuICAgIGNvbnN0IG1hcCA9IHRoaXMuZ2V0TWFwKCk7XG4gICAgdGhpcy5jbHVzdGVycy5mb3JFYWNoKGNsdXN0ZXIgPT4ge1xuICAgICAgaWYgKGNsdXN0ZXIubWFya2Vycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgY2x1c3Rlci5tYXJrZXIgPSBjbHVzdGVyLm1hcmtlcnNbMF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBHZW5lcmF0ZSB0aGUgbWFya2VyIHRvIHJlcHJlc2VudCB0aGUgZ3JvdXAuXG4gICAgICAgIGNsdXN0ZXIubWFya2VyID0gdGhpcy5yZW5kZXJlci5yZW5kZXIoY2x1c3Rlciwgc3RhdHMsIG1hcCk7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSBhbGwgaW5kaXZpZHVhbCBtYXJrZXJzIGFyZSByZW1vdmVkIGZyb20gdGhlIG1hcC5cbiAgICAgICAgY2x1c3Rlci5tYXJrZXJzLmZvckVhY2gobWFya2VyID0+IE1hcmtlclV0aWxzLnNldE1hcChtYXJrZXIsIG51bGwpKTtcbiAgICAgICAgaWYgKHRoaXMub25DbHVzdGVyQ2xpY2spIHtcbiAgICAgICAgICBjbHVzdGVyLm1hcmtlci5hZGRMaXN0ZW5lcihcImNsaWNrXCIsIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQudHJpZ2dlcih0aGlzLCBNYXJrZXJDbHVzdGVyZXJFdmVudHMuQ0xVU1RFUl9DTElDSywgY2x1c3Rlcik7XG4gICAgICAgICAgICB0aGlzLm9uQ2x1c3RlckNsaWNrKGV2ZW50LCBjbHVzdGVyLCBtYXApO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBNYXJrZXJVdGlscy5zZXRNYXAoY2x1c3Rlci5tYXJrZXIsIG1hcCk7XG4gICAgfSk7XG4gIH1cbn1cbmV4cG9ydCB7IEFic3RyYWN0QWxnb3JpdGhtLCBBYnN0cmFjdFZpZXdwb3J0QWxnb3JpdGhtLCBDbHVzdGVyLCBDbHVzdGVyU3RhdHMsIERlZmF1bHRSZW5kZXJlciwgR3JpZEFsZ29yaXRobSwgTWFya2VyQ2x1c3RlcmVyLCBNYXJrZXJDbHVzdGVyZXJFdmVudHMsIE1hcmtlclV0aWxzLCBOb29wQWxnb3JpdGhtLCBTdXBlckNsdXN0ZXJBbGdvcml0aG0sIFN1cGVyQ2x1c3RlclZpZXdwb3J0QWxnb3JpdGhtLCBkZWZhdWx0T25DbHVzdGVyQ2xpY2tIYW5kbGVyLCBkaXN0YW5jZUJldHdlZW5Qb2ludHMsIGV4dGVuZEJvdW5kc1RvUGFkZGVkVmlld3BvcnQsIGV4dGVuZFBpeGVsQm91bmRzLCBmaWx0ZXJNYXJrZXJzVG9QYWRkZWRWaWV3cG9ydCwgZ2V0UGFkZGVkVmlld3BvcnQsIG5vb3AsIHBpeGVsQm91bmRzVG9MYXRMbmdCb3VuZHMgfTtcbiIsImNvbnN0IEFSUkFZX1RZUEVTID0gW0ludDhBcnJheSwgVWludDhBcnJheSwgVWludDhDbGFtcGVkQXJyYXksIEludDE2QXJyYXksIFVpbnQxNkFycmF5LCBJbnQzMkFycmF5LCBVaW50MzJBcnJheSwgRmxvYXQzMkFycmF5LCBGbG9hdDY0QXJyYXldO1xuXG4vKiogQHR5cGVkZWYge0ludDhBcnJheUNvbnN0cnVjdG9yIHwgVWludDhBcnJheUNvbnN0cnVjdG9yIHwgVWludDhDbGFtcGVkQXJyYXlDb25zdHJ1Y3RvciB8IEludDE2QXJyYXlDb25zdHJ1Y3RvciB8IFVpbnQxNkFycmF5Q29uc3RydWN0b3IgfCBJbnQzMkFycmF5Q29uc3RydWN0b3IgfCBVaW50MzJBcnJheUNvbnN0cnVjdG9yIHwgRmxvYXQzMkFycmF5Q29uc3RydWN0b3IgfCBGbG9hdDY0QXJyYXlDb25zdHJ1Y3Rvcn0gVHlwZWRBcnJheUNvbnN0cnVjdG9yICovXG5cbmNvbnN0IFZFUlNJT04gPSAxOyAvLyBzZXJpYWxpemVkIGZvcm1hdCB2ZXJzaW9uXG5jb25zdCBIRUFERVJfU0laRSA9IDg7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLREJ1c2gge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbmRleCBmcm9tIHJhdyBgQXJyYXlCdWZmZXJgIGRhdGEuXG4gICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGRhdGFcbiAgICovXG4gIHN0YXRpYyBmcm9tKGRhdGEpIHtcbiAgICBpZiAoIShkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RhdGEgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBBcnJheUJ1ZmZlci4nKTtcbiAgICB9XG4gICAgY29uc3QgW21hZ2ljLCB2ZXJzaW9uQW5kVHlwZV0gPSBuZXcgVWludDhBcnJheShkYXRhLCAwLCAyKTtcbiAgICBpZiAobWFnaWMgIT09IDB4ZGIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRGF0YSBkb2VzIG5vdCBhcHBlYXIgdG8gYmUgaW4gYSBLREJ1c2ggZm9ybWF0LicpO1xuICAgIH1cbiAgICBjb25zdCB2ZXJzaW9uID0gdmVyc2lvbkFuZFR5cGUgPj4gNDtcbiAgICBpZiAodmVyc2lvbiAhPT0gVkVSU0lPTikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBHb3QgdiR7dmVyc2lvbn0gZGF0YSB3aGVuIGV4cGVjdGVkIHYke1ZFUlNJT059LmApO1xuICAgIH1cbiAgICBjb25zdCBBcnJheVR5cGUgPSBBUlJBWV9UWVBFU1t2ZXJzaW9uQW5kVHlwZSAmIDB4MGZdO1xuICAgIGlmICghQXJyYXlUeXBlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VucmVjb2duaXplZCBhcnJheSB0eXBlLicpO1xuICAgIH1cbiAgICBjb25zdCBbbm9kZVNpemVdID0gbmV3IFVpbnQxNkFycmF5KGRhdGEsIDIsIDEpO1xuICAgIGNvbnN0IFtudW1JdGVtc10gPSBuZXcgVWludDMyQXJyYXkoZGF0YSwgNCwgMSk7XG4gICAgcmV0dXJuIG5ldyBLREJ1c2gobnVtSXRlbXMsIG5vZGVTaXplLCBBcnJheVR5cGUsIGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5kZXggdGhhdCB3aWxsIGhvbGQgYSBnaXZlbiBudW1iZXIgb2YgaXRlbXMuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBudW1JdGVtc1xuICAgKiBAcGFyYW0ge251bWJlcn0gW25vZGVTaXplPTY0XSBTaXplIG9mIHRoZSBLRC10cmVlIG5vZGUgKDY0IGJ5IGRlZmF1bHQpLlxuICAgKiBAcGFyYW0ge1R5cGVkQXJyYXlDb25zdHJ1Y3Rvcn0gW0FycmF5VHlwZT1GbG9hdDY0QXJyYXldIFRoZSBhcnJheSB0eXBlIHVzZWQgZm9yIGNvb3JkaW5hdGVzIHN0b3JhZ2UgKGBGbG9hdDY0QXJyYXlgIGJ5IGRlZmF1bHQpLlxuICAgKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBbZGF0YV0gKEZvciBpbnRlcm5hbCB1c2Ugb25seSlcbiAgICovXG4gIGNvbnN0cnVjdG9yKG51bUl0ZW1zLCBub2RlU2l6ZSA9IDY0LCBBcnJheVR5cGUgPSBGbG9hdDY0QXJyYXksIGRhdGEpIHtcbiAgICBpZiAoaXNOYU4obnVtSXRlbXMpIHx8IG51bUl0ZW1zIDwgMCkgdGhyb3cgbmV3IEVycm9yKGBVbnBleHBlY3RlZCBudW1JdGVtcyB2YWx1ZTogJHtudW1JdGVtc30uYCk7XG4gICAgdGhpcy5udW1JdGVtcyA9ICtudW1JdGVtcztcbiAgICB0aGlzLm5vZGVTaXplID0gTWF0aC5taW4oTWF0aC5tYXgoK25vZGVTaXplLCAyKSwgNjU1MzUpO1xuICAgIHRoaXMuQXJyYXlUeXBlID0gQXJyYXlUeXBlO1xuICAgIHRoaXMuSW5kZXhBcnJheVR5cGUgPSBudW1JdGVtcyA8IDY1NTM2ID8gVWludDE2QXJyYXkgOiBVaW50MzJBcnJheTtcbiAgICBjb25zdCBhcnJheVR5cGVJbmRleCA9IEFSUkFZX1RZUEVTLmluZGV4T2YodGhpcy5BcnJheVR5cGUpO1xuICAgIGNvbnN0IGNvb3Jkc0J5dGVTaXplID0gbnVtSXRlbXMgKiAyICogdGhpcy5BcnJheVR5cGUuQllURVNfUEVSX0VMRU1FTlQ7XG4gICAgY29uc3QgaWRzQnl0ZVNpemUgPSBudW1JdGVtcyAqIHRoaXMuSW5kZXhBcnJheVR5cGUuQllURVNfUEVSX0VMRU1FTlQ7XG4gICAgY29uc3QgcGFkQ29vcmRzID0gKDggLSBpZHNCeXRlU2l6ZSAlIDgpICUgODtcbiAgICBpZiAoYXJyYXlUeXBlSW5kZXggPCAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgdHlwZWQgYXJyYXkgY2xhc3M6ICR7QXJyYXlUeXBlfS5gKTtcbiAgICB9XG4gICAgaWYgKGRhdGEgJiYgZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgICAvLyByZWNvbnN0cnVjdCBhbiBpbmRleCBmcm9tIGEgYnVmZmVyXG4gICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgdGhpcy5pZHMgPSBuZXcgdGhpcy5JbmRleEFycmF5VHlwZSh0aGlzLmRhdGEsIEhFQURFUl9TSVpFLCBudW1JdGVtcyk7XG4gICAgICB0aGlzLmNvb3JkcyA9IG5ldyB0aGlzLkFycmF5VHlwZSh0aGlzLmRhdGEsIEhFQURFUl9TSVpFICsgaWRzQnl0ZVNpemUgKyBwYWRDb29yZHMsIG51bUl0ZW1zICogMik7XG4gICAgICB0aGlzLl9wb3MgPSBudW1JdGVtcyAqIDI7XG4gICAgICB0aGlzLl9maW5pc2hlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluaXRpYWxpemUgYSBuZXcgaW5kZXhcbiAgICAgIHRoaXMuZGF0YSA9IG5ldyBBcnJheUJ1ZmZlcihIRUFERVJfU0laRSArIGNvb3Jkc0J5dGVTaXplICsgaWRzQnl0ZVNpemUgKyBwYWRDb29yZHMpO1xuICAgICAgdGhpcy5pZHMgPSBuZXcgdGhpcy5JbmRleEFycmF5VHlwZSh0aGlzLmRhdGEsIEhFQURFUl9TSVpFLCBudW1JdGVtcyk7XG4gICAgICB0aGlzLmNvb3JkcyA9IG5ldyB0aGlzLkFycmF5VHlwZSh0aGlzLmRhdGEsIEhFQURFUl9TSVpFICsgaWRzQnl0ZVNpemUgKyBwYWRDb29yZHMsIG51bUl0ZW1zICogMik7XG4gICAgICB0aGlzLl9wb3MgPSAwO1xuICAgICAgdGhpcy5fZmluaXNoZWQgPSBmYWxzZTtcblxuICAgICAgLy8gc2V0IGhlYWRlclxuICAgICAgbmV3IFVpbnQ4QXJyYXkodGhpcy5kYXRhLCAwLCAyKS5zZXQoWzB4ZGIsIChWRVJTSU9OIDw8IDQpICsgYXJyYXlUeXBlSW5kZXhdKTtcbiAgICAgIG5ldyBVaW50MTZBcnJheSh0aGlzLmRhdGEsIDIsIDEpWzBdID0gbm9kZVNpemU7XG4gICAgICBuZXcgVWludDMyQXJyYXkodGhpcy5kYXRhLCA0LCAxKVswXSA9IG51bUl0ZW1zO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBwb2ludCB0byB0aGUgaW5kZXguXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IEFuIGluY3JlbWVudGFsIGluZGV4IGFzc29jaWF0ZWQgd2l0aCB0aGUgYWRkZWQgaXRlbSAoc3RhcnRpbmcgZnJvbSBgMGApLlxuICAgKi9cbiAgYWRkKHgsIHkpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuX3BvcyA+PiAxO1xuICAgIHRoaXMuaWRzW2luZGV4XSA9IGluZGV4O1xuICAgIHRoaXMuY29vcmRzW3RoaXMuX3BvcysrXSA9IHg7XG4gICAgdGhpcy5jb29yZHNbdGhpcy5fcG9zKytdID0geTtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybSBpbmRleGluZyBvZiB0aGUgYWRkZWQgcG9pbnRzLlxuICAgKi9cbiAgZmluaXNoKCkge1xuICAgIGNvbnN0IG51bUFkZGVkID0gdGhpcy5fcG9zID4+IDE7XG4gICAgaWYgKG51bUFkZGVkICE9PSB0aGlzLm51bUl0ZW1zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEFkZGVkICR7bnVtQWRkZWR9IGl0ZW1zIHdoZW4gZXhwZWN0ZWQgJHt0aGlzLm51bUl0ZW1zfS5gKTtcbiAgICB9XG4gICAgLy8ga2Qtc29ydCBib3RoIGFycmF5cyBmb3IgZWZmaWNpZW50IHNlYXJjaFxuICAgIHNvcnQodGhpcy5pZHMsIHRoaXMuY29vcmRzLCB0aGlzLm5vZGVTaXplLCAwLCB0aGlzLm51bUl0ZW1zIC0gMSwgMCk7XG4gICAgdGhpcy5fZmluaXNoZWQgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCB0aGUgaW5kZXggZm9yIGl0ZW1zIHdpdGhpbiBhIGdpdmVuIGJvdW5kaW5nIGJveC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IG1pblhcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1pbllcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1heFhcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1heFlcbiAgICogQHJldHVybnMge251bWJlcltdfSBBbiBhcnJheSBvZiBpbmRpY2VzIGNvcnJlcG9uZGluZyB0byB0aGUgZm91bmQgaXRlbXMuXG4gICAqL1xuICByYW5nZShtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZKSB7XG4gICAgaWYgKCF0aGlzLl9maW5pc2hlZCkgdGhyb3cgbmV3IEVycm9yKCdEYXRhIG5vdCB5ZXQgaW5kZXhlZCAtIGNhbGwgaW5kZXguZmluaXNoKCkuJyk7XG4gICAgY29uc3Qge1xuICAgICAgaWRzLFxuICAgICAgY29vcmRzLFxuICAgICAgbm9kZVNpemVcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBzdGFjayA9IFswLCBpZHMubGVuZ3RoIC0gMSwgMF07XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgICAvLyByZWN1cnNpdmVseSBzZWFyY2ggZm9yIGl0ZW1zIGluIHJhbmdlIGluIHRoZSBrZC1zb3J0ZWQgYXJyYXlzXG4gICAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xuICAgICAgY29uc3QgYXhpcyA9IHN0YWNrLnBvcCgpIHx8IDA7XG4gICAgICBjb25zdCByaWdodCA9IHN0YWNrLnBvcCgpIHx8IDA7XG4gICAgICBjb25zdCBsZWZ0ID0gc3RhY2sucG9wKCkgfHwgMDtcblxuICAgICAgLy8gaWYgd2UgcmVhY2hlZCBcInRyZWUgbm9kZVwiLCBzZWFyY2ggbGluZWFybHlcbiAgICAgIGlmIChyaWdodCAtIGxlZnQgPD0gbm9kZVNpemUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGxlZnQ7IGkgPD0gcmlnaHQ7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHggPSBjb29yZHNbMiAqIGldO1xuICAgICAgICAgIGNvbnN0IHkgPSBjb29yZHNbMiAqIGkgKyAxXTtcbiAgICAgICAgICBpZiAoeCA+PSBtaW5YICYmIHggPD0gbWF4WCAmJiB5ID49IG1pblkgJiYgeSA8PSBtYXhZKSByZXN1bHQucHVzaChpZHNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBvdGhlcndpc2UgZmluZCB0aGUgbWlkZGxlIGluZGV4XG4gICAgICBjb25zdCBtID0gbGVmdCArIHJpZ2h0ID4+IDE7XG5cbiAgICAgIC8vIGluY2x1ZGUgdGhlIG1pZGRsZSBpdGVtIGlmIGl0J3MgaW4gcmFuZ2VcbiAgICAgIGNvbnN0IHggPSBjb29yZHNbMiAqIG1dO1xuICAgICAgY29uc3QgeSA9IGNvb3Jkc1syICogbSArIDFdO1xuICAgICAgaWYgKHggPj0gbWluWCAmJiB4IDw9IG1heFggJiYgeSA+PSBtaW5ZICYmIHkgPD0gbWF4WSkgcmVzdWx0LnB1c2goaWRzW21dKTtcblxuICAgICAgLy8gcXVldWUgc2VhcmNoIGluIGhhbHZlcyB0aGF0IGludGVyc2VjdCB0aGUgcXVlcnlcbiAgICAgIGlmIChheGlzID09PSAwID8gbWluWCA8PSB4IDogbWluWSA8PSB5KSB7XG4gICAgICAgIHN0YWNrLnB1c2gobGVmdCk7XG4gICAgICAgIHN0YWNrLnB1c2gobSAtIDEpO1xuICAgICAgICBzdGFjay5wdXNoKDEgLSBheGlzKTtcbiAgICAgIH1cbiAgICAgIGlmIChheGlzID09PSAwID8gbWF4WCA+PSB4IDogbWF4WSA+PSB5KSB7XG4gICAgICAgIHN0YWNrLnB1c2gobSArIDEpO1xuICAgICAgICBzdGFjay5wdXNoKHJpZ2h0KTtcbiAgICAgICAgc3RhY2sucHVzaCgxIC0gYXhpcyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogU2VhcmNoIHRoZSBpbmRleCBmb3IgaXRlbXMgd2l0aGluIGEgZ2l2ZW4gcmFkaXVzLlxuICAgKiBAcGFyYW0ge251bWJlcn0gcXhcbiAgICogQHBhcmFtIHtudW1iZXJ9IHF5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSByIFF1ZXJ5IHJhZGl1cy5cbiAgICogQHJldHVybnMge251bWJlcltdfSBBbiBhcnJheSBvZiBpbmRpY2VzIGNvcnJlcG9uZGluZyB0byB0aGUgZm91bmQgaXRlbXMuXG4gICAqL1xuICB3aXRoaW4ocXgsIHF5LCByKSB7XG4gICAgaWYgKCF0aGlzLl9maW5pc2hlZCkgdGhyb3cgbmV3IEVycm9yKCdEYXRhIG5vdCB5ZXQgaW5kZXhlZCAtIGNhbGwgaW5kZXguZmluaXNoKCkuJyk7XG4gICAgY29uc3Qge1xuICAgICAgaWRzLFxuICAgICAgY29vcmRzLFxuICAgICAgbm9kZVNpemVcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBzdGFjayA9IFswLCBpZHMubGVuZ3RoIC0gMSwgMF07XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgY29uc3QgcjIgPSByICogcjtcblxuICAgIC8vIHJlY3Vyc2l2ZWx5IHNlYXJjaCBmb3IgaXRlbXMgd2l0aGluIHJhZGl1cyBpbiB0aGUga2Qtc29ydGVkIGFycmF5c1xuICAgIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGF4aXMgPSBzdGFjay5wb3AoKSB8fCAwO1xuICAgICAgY29uc3QgcmlnaHQgPSBzdGFjay5wb3AoKSB8fCAwO1xuICAgICAgY29uc3QgbGVmdCA9IHN0YWNrLnBvcCgpIHx8IDA7XG5cbiAgICAgIC8vIGlmIHdlIHJlYWNoZWQgXCJ0cmVlIG5vZGVcIiwgc2VhcmNoIGxpbmVhcmx5XG4gICAgICBpZiAocmlnaHQgLSBsZWZ0IDw9IG5vZGVTaXplKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBsZWZ0OyBpIDw9IHJpZ2h0OyBpKyspIHtcbiAgICAgICAgICBpZiAoc3FEaXN0KGNvb3Jkc1syICogaV0sIGNvb3Jkc1syICogaSArIDFdLCBxeCwgcXkpIDw9IHIyKSByZXN1bHQucHVzaChpZHNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBvdGhlcndpc2UgZmluZCB0aGUgbWlkZGxlIGluZGV4XG4gICAgICBjb25zdCBtID0gbGVmdCArIHJpZ2h0ID4+IDE7XG5cbiAgICAgIC8vIGluY2x1ZGUgdGhlIG1pZGRsZSBpdGVtIGlmIGl0J3MgaW4gcmFuZ2VcbiAgICAgIGNvbnN0IHggPSBjb29yZHNbMiAqIG1dO1xuICAgICAgY29uc3QgeSA9IGNvb3Jkc1syICogbSArIDFdO1xuICAgICAgaWYgKHNxRGlzdCh4LCB5LCBxeCwgcXkpIDw9IHIyKSByZXN1bHQucHVzaChpZHNbbV0pO1xuXG4gICAgICAvLyBxdWV1ZSBzZWFyY2ggaW4gaGFsdmVzIHRoYXQgaW50ZXJzZWN0IHRoZSBxdWVyeVxuICAgICAgaWYgKGF4aXMgPT09IDAgPyBxeCAtIHIgPD0geCA6IHF5IC0gciA8PSB5KSB7XG4gICAgICAgIHN0YWNrLnB1c2gobGVmdCk7XG4gICAgICAgIHN0YWNrLnB1c2gobSAtIDEpO1xuICAgICAgICBzdGFjay5wdXNoKDEgLSBheGlzKTtcbiAgICAgIH1cbiAgICAgIGlmIChheGlzID09PSAwID8gcXggKyByID49IHggOiBxeSArIHIgPj0geSkge1xuICAgICAgICBzdGFjay5wdXNoKG0gKyAxKTtcbiAgICAgICAgc3RhY2sucHVzaChyaWdodCk7XG4gICAgICAgIHN0YWNrLnB1c2goMSAtIGF4aXMpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtVaW50MTZBcnJheSB8IFVpbnQzMkFycmF5fSBpZHNcbiAqIEBwYXJhbSB7SW5zdGFuY2VUeXBlPFR5cGVkQXJyYXlDb25zdHJ1Y3Rvcj59IGNvb3Jkc1xuICogQHBhcmFtIHtudW1iZXJ9IG5vZGVTaXplXG4gKiBAcGFyYW0ge251bWJlcn0gbGVmdFxuICogQHBhcmFtIHtudW1iZXJ9IHJpZ2h0XG4gKiBAcGFyYW0ge251bWJlcn0gYXhpc1xuICovXG5mdW5jdGlvbiBzb3J0KGlkcywgY29vcmRzLCBub2RlU2l6ZSwgbGVmdCwgcmlnaHQsIGF4aXMpIHtcbiAgaWYgKHJpZ2h0IC0gbGVmdCA8PSBub2RlU2l6ZSkgcmV0dXJuO1xuICBjb25zdCBtID0gbGVmdCArIHJpZ2h0ID4+IDE7IC8vIG1pZGRsZSBpbmRleFxuXG4gIC8vIHNvcnQgaWRzIGFuZCBjb29yZHMgYXJvdW5kIHRoZSBtaWRkbGUgaW5kZXggc28gdGhhdCB0aGUgaGFsdmVzIGxpZVxuICAvLyBlaXRoZXIgbGVmdC9yaWdodCBvciB0b3AvYm90dG9tIGNvcnJlc3BvbmRpbmdseSAodGFraW5nIHR1cm5zKVxuICBzZWxlY3QoaWRzLCBjb29yZHMsIG0sIGxlZnQsIHJpZ2h0LCBheGlzKTtcblxuICAvLyByZWN1cnNpdmVseSBrZC1zb3J0IGZpcnN0IGhhbGYgYW5kIHNlY29uZCBoYWxmIG9uIHRoZSBvcHBvc2l0ZSBheGlzXG4gIHNvcnQoaWRzLCBjb29yZHMsIG5vZGVTaXplLCBsZWZ0LCBtIC0gMSwgMSAtIGF4aXMpO1xuICBzb3J0KGlkcywgY29vcmRzLCBub2RlU2l6ZSwgbSArIDEsIHJpZ2h0LCAxIC0gYXhpcyk7XG59XG5cbi8qKlxuICogQ3VzdG9tIEZsb3lkLVJpdmVzdCBzZWxlY3Rpb24gYWxnb3JpdGhtOiBzb3J0IGlkcyBhbmQgY29vcmRzIHNvIHRoYXRcbiAqIFtsZWZ0Li5rLTFdIGl0ZW1zIGFyZSBzbWFsbGVyIHRoYW4gay10aCBpdGVtIChvbiBlaXRoZXIgeCBvciB5IGF4aXMpXG4gKiBAcGFyYW0ge1VpbnQxNkFycmF5IHwgVWludDMyQXJyYXl9IGlkc1xuICogQHBhcmFtIHtJbnN0YW5jZVR5cGU8VHlwZWRBcnJheUNvbnN0cnVjdG9yPn0gY29vcmRzXG4gKiBAcGFyYW0ge251bWJlcn0ga1xuICogQHBhcmFtIHtudW1iZXJ9IGxlZnRcbiAqIEBwYXJhbSB7bnVtYmVyfSByaWdodFxuICogQHBhcmFtIHtudW1iZXJ9IGF4aXNcbiAqL1xuZnVuY3Rpb24gc2VsZWN0KGlkcywgY29vcmRzLCBrLCBsZWZ0LCByaWdodCwgYXhpcykge1xuICB3aGlsZSAocmlnaHQgPiBsZWZ0KSB7XG4gICAgaWYgKHJpZ2h0IC0gbGVmdCA+IDYwMCkge1xuICAgICAgY29uc3QgbiA9IHJpZ2h0IC0gbGVmdCArIDE7XG4gICAgICBjb25zdCBtID0gayAtIGxlZnQgKyAxO1xuICAgICAgY29uc3QgeiA9IE1hdGgubG9nKG4pO1xuICAgICAgY29uc3QgcyA9IDAuNSAqIE1hdGguZXhwKDIgKiB6IC8gMyk7XG4gICAgICBjb25zdCBzZCA9IDAuNSAqIE1hdGguc3FydCh6ICogcyAqIChuIC0gcykgLyBuKSAqIChtIC0gbiAvIDIgPCAwID8gLTEgOiAxKTtcbiAgICAgIGNvbnN0IG5ld0xlZnQgPSBNYXRoLm1heChsZWZ0LCBNYXRoLmZsb29yKGsgLSBtICogcyAvIG4gKyBzZCkpO1xuICAgICAgY29uc3QgbmV3UmlnaHQgPSBNYXRoLm1pbihyaWdodCwgTWF0aC5mbG9vcihrICsgKG4gLSBtKSAqIHMgLyBuICsgc2QpKTtcbiAgICAgIHNlbGVjdChpZHMsIGNvb3JkcywgaywgbmV3TGVmdCwgbmV3UmlnaHQsIGF4aXMpO1xuICAgIH1cbiAgICBjb25zdCB0ID0gY29vcmRzWzIgKiBrICsgYXhpc107XG4gICAgbGV0IGkgPSBsZWZ0O1xuICAgIGxldCBqID0gcmlnaHQ7XG4gICAgc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGxlZnQsIGspO1xuICAgIGlmIChjb29yZHNbMiAqIHJpZ2h0ICsgYXhpc10gPiB0KSBzd2FwSXRlbShpZHMsIGNvb3JkcywgbGVmdCwgcmlnaHQpO1xuICAgIHdoaWxlIChpIDwgaikge1xuICAgICAgc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGksIGopO1xuICAgICAgaSsrO1xuICAgICAgai0tO1xuICAgICAgd2hpbGUgKGNvb3Jkc1syICogaSArIGF4aXNdIDwgdCkgaSsrO1xuICAgICAgd2hpbGUgKGNvb3Jkc1syICogaiArIGF4aXNdID4gdCkgai0tO1xuICAgIH1cbiAgICBpZiAoY29vcmRzWzIgKiBsZWZ0ICsgYXhpc10gPT09IHQpIHN3YXBJdGVtKGlkcywgY29vcmRzLCBsZWZ0LCBqKTtlbHNlIHtcbiAgICAgIGorKztcbiAgICAgIHN3YXBJdGVtKGlkcywgY29vcmRzLCBqLCByaWdodCk7XG4gICAgfVxuICAgIGlmIChqIDw9IGspIGxlZnQgPSBqICsgMTtcbiAgICBpZiAoayA8PSBqKSByaWdodCA9IGogLSAxO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtVaW50MTZBcnJheSB8IFVpbnQzMkFycmF5fSBpZHNcbiAqIEBwYXJhbSB7SW5zdGFuY2VUeXBlPFR5cGVkQXJyYXlDb25zdHJ1Y3Rvcj59IGNvb3Jkc1xuICogQHBhcmFtIHtudW1iZXJ9IGlcbiAqIEBwYXJhbSB7bnVtYmVyfSBqXG4gKi9cbmZ1bmN0aW9uIHN3YXBJdGVtKGlkcywgY29vcmRzLCBpLCBqKSB7XG4gIHN3YXAoaWRzLCBpLCBqKTtcbiAgc3dhcChjb29yZHMsIDIgKiBpLCAyICogaik7XG4gIHN3YXAoY29vcmRzLCAyICogaSArIDEsIDIgKiBqICsgMSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtJbnN0YW5jZVR5cGU8VHlwZWRBcnJheUNvbnN0cnVjdG9yPn0gYXJyXG4gKiBAcGFyYW0ge251bWJlcn0gaVxuICogQHBhcmFtIHtudW1iZXJ9IGpcbiAqL1xuZnVuY3Rpb24gc3dhcChhcnIsIGksIGopIHtcbiAgY29uc3QgdG1wID0gYXJyW2ldO1xuICBhcnJbaV0gPSBhcnJbal07XG4gIGFycltqXSA9IHRtcDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gYXhcbiAqIEBwYXJhbSB7bnVtYmVyfSBheVxuICogQHBhcmFtIHtudW1iZXJ9IGJ4XG4gKiBAcGFyYW0ge251bWJlcn0gYnlcbiAqL1xuZnVuY3Rpb24gc3FEaXN0KGF4LCBheSwgYngsIGJ5KSB7XG4gIGNvbnN0IGR4ID0gYXggLSBieDtcbiAgY29uc3QgZHkgPSBheSAtIGJ5O1xuICByZXR1cm4gZHggKiBkeCArIGR5ICogZHk7XG59IiwiaW1wb3J0IEtEQnVzaCBmcm9tICdrZGJ1c2gnO1xuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIG1pblpvb206IDAsXG4gIC8vIG1pbiB6b29tIHRvIGdlbmVyYXRlIGNsdXN0ZXJzIG9uXG4gIG1heFpvb206IDE2LFxuICAvLyBtYXggem9vbSBsZXZlbCB0byBjbHVzdGVyIHRoZSBwb2ludHMgb25cbiAgbWluUG9pbnRzOiAyLFxuICAvLyBtaW5pbXVtIHBvaW50cyB0byBmb3JtIGEgY2x1c3RlclxuICByYWRpdXM6IDQwLFxuICAvLyBjbHVzdGVyIHJhZGl1cyBpbiBwaXhlbHNcbiAgZXh0ZW50OiA1MTIsXG4gIC8vIHRpbGUgZXh0ZW50IChyYWRpdXMgaXMgY2FsY3VsYXRlZCByZWxhdGl2ZSB0byBpdClcbiAgbm9kZVNpemU6IDY0LFxuICAvLyBzaXplIG9mIHRoZSBLRC10cmVlIGxlYWYgbm9kZSwgYWZmZWN0cyBwZXJmb3JtYW5jZVxuICBsb2c6IGZhbHNlLFxuICAvLyB3aGV0aGVyIHRvIGxvZyB0aW1pbmcgaW5mb1xuXG4gIC8vIHdoZXRoZXIgdG8gZ2VuZXJhdGUgbnVtZXJpYyBpZHMgZm9yIGlucHV0IGZlYXR1cmVzIChpbiB2ZWN0b3IgdGlsZXMpXG4gIGdlbmVyYXRlSWQ6IGZhbHNlLFxuICAvLyBhIHJlZHVjZSBmdW5jdGlvbiBmb3IgY2FsY3VsYXRpbmcgY3VzdG9tIGNsdXN0ZXIgcHJvcGVydGllc1xuICByZWR1Y2U6IG51bGwsXG4gIC8vIChhY2N1bXVsYXRlZCwgcHJvcHMpID0+IHsgYWNjdW11bGF0ZWQuc3VtICs9IHByb3BzLnN1bTsgfVxuXG4gIC8vIHByb3BlcnRpZXMgdG8gdXNlIGZvciBpbmRpdmlkdWFsIHBvaW50cyB3aGVuIHJ1bm5pbmcgdGhlIHJlZHVjZXJcbiAgbWFwOiBwcm9wcyA9PiBwcm9wcyAvLyBwcm9wcyA9PiAoe3N1bTogcHJvcHMubXlfdmFsdWV9KVxufTtcbmNvbnN0IGZyb3VuZCA9IE1hdGguZnJvdW5kIHx8ICh0bXAgPT4geCA9PiB7XG4gIHRtcFswXSA9ICt4O1xuICByZXR1cm4gdG1wWzBdO1xufSkobmV3IEZsb2F0MzJBcnJheSgxKSk7XG5jb25zdCBPRkZTRVRfWk9PTSA9IDI7XG5jb25zdCBPRkZTRVRfSUQgPSAzO1xuY29uc3QgT0ZGU0VUX1BBUkVOVCA9IDQ7XG5jb25zdCBPRkZTRVRfTlVNID0gNTtcbmNvbnN0IE9GRlNFVF9QUk9QID0gNjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1cGVyY2x1c3RlciB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUoZGVmYXVsdE9wdGlvbnMpLCBvcHRpb25zKTtcbiAgICB0aGlzLnRyZWVzID0gbmV3IEFycmF5KHRoaXMub3B0aW9ucy5tYXhab29tICsgMSk7XG4gICAgdGhpcy5zdHJpZGUgPSB0aGlzLm9wdGlvbnMucmVkdWNlID8gNyA6IDY7XG4gICAgdGhpcy5jbHVzdGVyUHJvcHMgPSBbXTtcbiAgfVxuICBsb2FkKHBvaW50cykge1xuICAgIGNvbnN0IHtcbiAgICAgIGxvZyxcbiAgICAgIG1pblpvb20sXG4gICAgICBtYXhab29tXG4gICAgfSA9IHRoaXMub3B0aW9ucztcbiAgICBpZiAobG9nKSBjb25zb2xlLnRpbWUoJ3RvdGFsIHRpbWUnKTtcbiAgICBjb25zdCB0aW1lcklkID0gYHByZXBhcmUgJHtwb2ludHMubGVuZ3RofSBwb2ludHNgO1xuICAgIGlmIChsb2cpIGNvbnNvbGUudGltZSh0aW1lcklkKTtcbiAgICB0aGlzLnBvaW50cyA9IHBvaW50cztcblxuICAgIC8vIGdlbmVyYXRlIGEgY2x1c3RlciBvYmplY3QgZm9yIGVhY2ggcG9pbnQgYW5kIGluZGV4IGlucHV0IHBvaW50cyBpbnRvIGEgS0QtdHJlZVxuICAgIGNvbnN0IGRhdGEgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcCA9IHBvaW50c1tpXTtcbiAgICAgIGlmICghcC5nZW9tZXRyeSkgY29udGludWU7XG4gICAgICBjb25zdCBbbG5nLCBsYXRdID0gcC5nZW9tZXRyeS5jb29yZGluYXRlcztcbiAgICAgIGNvbnN0IHggPSBmcm91bmQobG5nWChsbmcpKTtcbiAgICAgIGNvbnN0IHkgPSBmcm91bmQobGF0WShsYXQpKTtcbiAgICAgIC8vIHN0b3JlIGludGVybmFsIHBvaW50L2NsdXN0ZXIgZGF0YSBpbiBmbGF0IG51bWVyaWMgYXJyYXlzIGZvciBwZXJmb3JtYW5jZVxuICAgICAgZGF0YS5wdXNoKHgsIHksXG4gICAgICAvLyBwcm9qZWN0ZWQgcG9pbnQgY29vcmRpbmF0ZXNcbiAgICAgIEluZmluaXR5LFxuICAgICAgLy8gdGhlIGxhc3Qgem9vbSB0aGUgcG9pbnQgd2FzIHByb2Nlc3NlZCBhdFxuICAgICAgaSxcbiAgICAgIC8vIGluZGV4IG9mIHRoZSBzb3VyY2UgZmVhdHVyZSBpbiB0aGUgb3JpZ2luYWwgaW5wdXQgYXJyYXlcbiAgICAgIC0xLFxuICAgICAgLy8gcGFyZW50IGNsdXN0ZXIgaWRcbiAgICAgIDEgLy8gbnVtYmVyIG9mIHBvaW50cyBpbiBhIGNsdXN0ZXJcbiAgICAgICk7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlZHVjZSkgZGF0YS5wdXNoKDApOyAvLyBub29wXG4gICAgfVxuICAgIGxldCB0cmVlID0gdGhpcy50cmVlc1ttYXhab29tICsgMV0gPSB0aGlzLl9jcmVhdGVUcmVlKGRhdGEpO1xuICAgIGlmIChsb2cpIGNvbnNvbGUudGltZUVuZCh0aW1lcklkKTtcblxuICAgIC8vIGNsdXN0ZXIgcG9pbnRzIG9uIG1heCB6b29tLCB0aGVuIGNsdXN0ZXIgdGhlIHJlc3VsdHMgb24gcHJldmlvdXMgem9vbSwgZXRjLjtcbiAgICAvLyByZXN1bHRzIGluIGEgY2x1c3RlciBoaWVyYXJjaHkgYWNyb3NzIHpvb20gbGV2ZWxzXG4gICAgZm9yIChsZXQgeiA9IG1heFpvb207IHogPj0gbWluWm9vbTsgei0tKSB7XG4gICAgICBjb25zdCBub3cgPSArRGF0ZS5ub3coKTtcblxuICAgICAgLy8gY3JlYXRlIGEgbmV3IHNldCBvZiBjbHVzdGVycyBmb3IgdGhlIHpvb20gYW5kIGluZGV4IHRoZW0gd2l0aCBhIEtELXRyZWVcbiAgICAgIHRyZWUgPSB0aGlzLnRyZWVzW3pdID0gdGhpcy5fY3JlYXRlVHJlZSh0aGlzLl9jbHVzdGVyKHRyZWUsIHopKTtcbiAgICAgIGlmIChsb2cpIGNvbnNvbGUubG9nKCd6JWQ6ICVkIGNsdXN0ZXJzIGluICVkbXMnLCB6LCB0cmVlLm51bUl0ZW1zLCArRGF0ZS5ub3coKSAtIG5vdyk7XG4gICAgfVxuICAgIGlmIChsb2cpIGNvbnNvbGUudGltZUVuZCgndG90YWwgdGltZScpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGdldENsdXN0ZXJzKGJib3gsIHpvb20pIHtcbiAgICBsZXQgbWluTG5nID0gKChiYm94WzBdICsgMTgwKSAlIDM2MCArIDM2MCkgJSAzNjAgLSAxODA7XG4gICAgY29uc3QgbWluTGF0ID0gTWF0aC5tYXgoLTkwLCBNYXRoLm1pbig5MCwgYmJveFsxXSkpO1xuICAgIGxldCBtYXhMbmcgPSBiYm94WzJdID09PSAxODAgPyAxODAgOiAoKGJib3hbMl0gKyAxODApICUgMzYwICsgMzYwKSAlIDM2MCAtIDE4MDtcbiAgICBjb25zdCBtYXhMYXQgPSBNYXRoLm1heCgtOTAsIE1hdGgubWluKDkwLCBiYm94WzNdKSk7XG4gICAgaWYgKGJib3hbMl0gLSBiYm94WzBdID49IDM2MCkge1xuICAgICAgbWluTG5nID0gLTE4MDtcbiAgICAgIG1heExuZyA9IDE4MDtcbiAgICB9IGVsc2UgaWYgKG1pbkxuZyA+IG1heExuZykge1xuICAgICAgY29uc3QgZWFzdGVybkhlbSA9IHRoaXMuZ2V0Q2x1c3RlcnMoW21pbkxuZywgbWluTGF0LCAxODAsIG1heExhdF0sIHpvb20pO1xuICAgICAgY29uc3Qgd2VzdGVybkhlbSA9IHRoaXMuZ2V0Q2x1c3RlcnMoWy0xODAsIG1pbkxhdCwgbWF4TG5nLCBtYXhMYXRdLCB6b29tKTtcbiAgICAgIHJldHVybiBlYXN0ZXJuSGVtLmNvbmNhdCh3ZXN0ZXJuSGVtKTtcbiAgICB9XG4gICAgY29uc3QgdHJlZSA9IHRoaXMudHJlZXNbdGhpcy5fbGltaXRab29tKHpvb20pXTtcbiAgICBjb25zdCBpZHMgPSB0cmVlLnJhbmdlKGxuZ1gobWluTG5nKSwgbGF0WShtYXhMYXQpLCBsbmdYKG1heExuZyksIGxhdFkobWluTGF0KSk7XG4gICAgY29uc3QgZGF0YSA9IHRyZWUuZGF0YTtcbiAgICBjb25zdCBjbHVzdGVycyA9IFtdO1xuICAgIGZvciAoY29uc3QgaWQgb2YgaWRzKSB7XG4gICAgICBjb25zdCBrID0gdGhpcy5zdHJpZGUgKiBpZDtcbiAgICAgIGNsdXN0ZXJzLnB1c2goZGF0YVtrICsgT0ZGU0VUX05VTV0gPiAxID8gZ2V0Q2x1c3RlckpTT04oZGF0YSwgaywgdGhpcy5jbHVzdGVyUHJvcHMpIDogdGhpcy5wb2ludHNbZGF0YVtrICsgT0ZGU0VUX0lEXV0pO1xuICAgIH1cbiAgICByZXR1cm4gY2x1c3RlcnM7XG4gIH1cbiAgZ2V0Q2hpbGRyZW4oY2x1c3RlcklkKSB7XG4gICAgY29uc3Qgb3JpZ2luSWQgPSB0aGlzLl9nZXRPcmlnaW5JZChjbHVzdGVySWQpO1xuICAgIGNvbnN0IG9yaWdpblpvb20gPSB0aGlzLl9nZXRPcmlnaW5ab29tKGNsdXN0ZXJJZCk7XG4gICAgY29uc3QgZXJyb3JNc2cgPSAnTm8gY2x1c3RlciB3aXRoIHRoZSBzcGVjaWZpZWQgaWQuJztcbiAgICBjb25zdCB0cmVlID0gdGhpcy50cmVlc1tvcmlnaW5ab29tXTtcbiAgICBpZiAoIXRyZWUpIHRocm93IG5ldyBFcnJvcihlcnJvck1zZyk7XG4gICAgY29uc3QgZGF0YSA9IHRyZWUuZGF0YTtcbiAgICBpZiAob3JpZ2luSWQgKiB0aGlzLnN0cmlkZSA+PSBkYXRhLmxlbmd0aCkgdGhyb3cgbmV3IEVycm9yKGVycm9yTXNnKTtcbiAgICBjb25zdCByID0gdGhpcy5vcHRpb25zLnJhZGl1cyAvICh0aGlzLm9wdGlvbnMuZXh0ZW50ICogTWF0aC5wb3coMiwgb3JpZ2luWm9vbSAtIDEpKTtcbiAgICBjb25zdCB4ID0gZGF0YVtvcmlnaW5JZCAqIHRoaXMuc3RyaWRlXTtcbiAgICBjb25zdCB5ID0gZGF0YVtvcmlnaW5JZCAqIHRoaXMuc3RyaWRlICsgMV07XG4gICAgY29uc3QgaWRzID0gdHJlZS53aXRoaW4oeCwgeSwgcik7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGlkIG9mIGlkcykge1xuICAgICAgY29uc3QgayA9IGlkICogdGhpcy5zdHJpZGU7XG4gICAgICBpZiAoZGF0YVtrICsgT0ZGU0VUX1BBUkVOVF0gPT09IGNsdXN0ZXJJZCkge1xuICAgICAgICBjaGlsZHJlbi5wdXNoKGRhdGFbayArIE9GRlNFVF9OVU1dID4gMSA/IGdldENsdXN0ZXJKU09OKGRhdGEsIGssIHRoaXMuY2x1c3RlclByb3BzKSA6IHRoaXMucG9pbnRzW2RhdGFbayArIE9GRlNFVF9JRF1dKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKGVycm9yTXNnKTtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbiAgZ2V0TGVhdmVzKGNsdXN0ZXJJZCwgbGltaXQsIG9mZnNldCkge1xuICAgIGxpbWl0ID0gbGltaXQgfHwgMTA7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG4gICAgY29uc3QgbGVhdmVzID0gW107XG4gICAgdGhpcy5fYXBwZW5kTGVhdmVzKGxlYXZlcywgY2x1c3RlcklkLCBsaW1pdCwgb2Zmc2V0LCAwKTtcbiAgICByZXR1cm4gbGVhdmVzO1xuICB9XG4gIGdldFRpbGUoeiwgeCwgeSkge1xuICAgIGNvbnN0IHRyZWUgPSB0aGlzLnRyZWVzW3RoaXMuX2xpbWl0Wm9vbSh6KV07XG4gICAgY29uc3QgejIgPSBNYXRoLnBvdygyLCB6KTtcbiAgICBjb25zdCB7XG4gICAgICBleHRlbnQsXG4gICAgICByYWRpdXNcbiAgICB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGNvbnN0IHAgPSByYWRpdXMgLyBleHRlbnQ7XG4gICAgY29uc3QgdG9wID0gKHkgLSBwKSAvIHoyO1xuICAgIGNvbnN0IGJvdHRvbSA9ICh5ICsgMSArIHApIC8gejI7XG4gICAgY29uc3QgdGlsZSA9IHtcbiAgICAgIGZlYXR1cmVzOiBbXVxuICAgIH07XG4gICAgdGhpcy5fYWRkVGlsZUZlYXR1cmVzKHRyZWUucmFuZ2UoKHggLSBwKSAvIHoyLCB0b3AsICh4ICsgMSArIHApIC8gejIsIGJvdHRvbSksIHRyZWUuZGF0YSwgeCwgeSwgejIsIHRpbGUpO1xuICAgIGlmICh4ID09PSAwKSB7XG4gICAgICB0aGlzLl9hZGRUaWxlRmVhdHVyZXModHJlZS5yYW5nZSgxIC0gcCAvIHoyLCB0b3AsIDEsIGJvdHRvbSksIHRyZWUuZGF0YSwgejIsIHksIHoyLCB0aWxlKTtcbiAgICB9XG4gICAgaWYgKHggPT09IHoyIC0gMSkge1xuICAgICAgdGhpcy5fYWRkVGlsZUZlYXR1cmVzKHRyZWUucmFuZ2UoMCwgdG9wLCBwIC8gejIsIGJvdHRvbSksIHRyZWUuZGF0YSwgLTEsIHksIHoyLCB0aWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRpbGUuZmVhdHVyZXMubGVuZ3RoID8gdGlsZSA6IG51bGw7XG4gIH1cbiAgZ2V0Q2x1c3RlckV4cGFuc2lvblpvb20oY2x1c3RlcklkKSB7XG4gICAgbGV0IGV4cGFuc2lvblpvb20gPSB0aGlzLl9nZXRPcmlnaW5ab29tKGNsdXN0ZXJJZCkgLSAxO1xuICAgIHdoaWxlIChleHBhbnNpb25ab29tIDw9IHRoaXMub3B0aW9ucy5tYXhab29tKSB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oY2x1c3RlcklkKTtcbiAgICAgIGV4cGFuc2lvblpvb20rKztcbiAgICAgIGlmIChjaGlsZHJlbi5sZW5ndGggIT09IDEpIGJyZWFrO1xuICAgICAgY2x1c3RlcklkID0gY2hpbGRyZW5bMF0ucHJvcGVydGllcy5jbHVzdGVyX2lkO1xuICAgIH1cbiAgICByZXR1cm4gZXhwYW5zaW9uWm9vbTtcbiAgfVxuICBfYXBwZW5kTGVhdmVzKHJlc3VsdCwgY2x1c3RlcklkLCBsaW1pdCwgb2Zmc2V0LCBza2lwcGVkKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKGNsdXN0ZXJJZCk7XG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgY29uc3QgcHJvcHMgPSBjaGlsZC5wcm9wZXJ0aWVzO1xuICAgICAgaWYgKHByb3BzICYmIHByb3BzLmNsdXN0ZXIpIHtcbiAgICAgICAgaWYgKHNraXBwZWQgKyBwcm9wcy5wb2ludF9jb3VudCA8PSBvZmZzZXQpIHtcbiAgICAgICAgICAvLyBza2lwIHRoZSB3aG9sZSBjbHVzdGVyXG4gICAgICAgICAgc2tpcHBlZCArPSBwcm9wcy5wb2ludF9jb3VudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBlbnRlciB0aGUgY2x1c3RlclxuICAgICAgICAgIHNraXBwZWQgPSB0aGlzLl9hcHBlbmRMZWF2ZXMocmVzdWx0LCBwcm9wcy5jbHVzdGVyX2lkLCBsaW1pdCwgb2Zmc2V0LCBza2lwcGVkKTtcbiAgICAgICAgICAvLyBleGl0IHRoZSBjbHVzdGVyXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2tpcHBlZCA8IG9mZnNldCkge1xuICAgICAgICAvLyBza2lwIGEgc2luZ2xlIHBvaW50XG4gICAgICAgIHNraXBwZWQrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGFkZCBhIHNpbmdsZSBwb2ludFxuICAgICAgICByZXN1bHQucHVzaChjaGlsZCk7XG4gICAgICB9XG4gICAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gbGltaXQpIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gc2tpcHBlZDtcbiAgfVxuICBfY3JlYXRlVHJlZShkYXRhKSB7XG4gICAgY29uc3QgdHJlZSA9IG5ldyBLREJ1c2goZGF0YS5sZW5ndGggLyB0aGlzLnN0cmlkZSB8IDAsIHRoaXMub3B0aW9ucy5ub2RlU2l6ZSwgRmxvYXQzMkFycmF5KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpICs9IHRoaXMuc3RyaWRlKSB0cmVlLmFkZChkYXRhW2ldLCBkYXRhW2kgKyAxXSk7XG4gICAgdHJlZS5maW5pc2goKTtcbiAgICB0cmVlLmRhdGEgPSBkYXRhO1xuICAgIHJldHVybiB0cmVlO1xuICB9XG4gIF9hZGRUaWxlRmVhdHVyZXMoaWRzLCBkYXRhLCB4LCB5LCB6MiwgdGlsZSkge1xuICAgIGZvciAoY29uc3QgaSBvZiBpZHMpIHtcbiAgICAgIGNvbnN0IGsgPSBpICogdGhpcy5zdHJpZGU7XG4gICAgICBjb25zdCBpc0NsdXN0ZXIgPSBkYXRhW2sgKyBPRkZTRVRfTlVNXSA+IDE7XG4gICAgICBsZXQgdGFncywgcHgsIHB5O1xuICAgICAgaWYgKGlzQ2x1c3Rlcikge1xuICAgICAgICB0YWdzID0gZ2V0Q2x1c3RlclByb3BlcnRpZXMoZGF0YSwgaywgdGhpcy5jbHVzdGVyUHJvcHMpO1xuICAgICAgICBweCA9IGRhdGFba107XG4gICAgICAgIHB5ID0gZGF0YVtrICsgMV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwID0gdGhpcy5wb2ludHNbZGF0YVtrICsgT0ZGU0VUX0lEXV07XG4gICAgICAgIHRhZ3MgPSBwLnByb3BlcnRpZXM7XG4gICAgICAgIGNvbnN0IFtsbmcsIGxhdF0gPSBwLmdlb21ldHJ5LmNvb3JkaW5hdGVzO1xuICAgICAgICBweCA9IGxuZ1gobG5nKTtcbiAgICAgICAgcHkgPSBsYXRZKGxhdCk7XG4gICAgICB9XG4gICAgICBjb25zdCBmID0ge1xuICAgICAgICB0eXBlOiAxLFxuICAgICAgICBnZW9tZXRyeTogW1tNYXRoLnJvdW5kKHRoaXMub3B0aW9ucy5leHRlbnQgKiAocHggKiB6MiAtIHgpKSwgTWF0aC5yb3VuZCh0aGlzLm9wdGlvbnMuZXh0ZW50ICogKHB5ICogejIgLSB5KSldXSxcbiAgICAgICAgdGFnc1xuICAgICAgfTtcblxuICAgICAgLy8gYXNzaWduIGlkXG4gICAgICBsZXQgaWQ7XG4gICAgICBpZiAoaXNDbHVzdGVyIHx8IHRoaXMub3B0aW9ucy5nZW5lcmF0ZUlkKSB7XG4gICAgICAgIC8vIG9wdGlvbmFsbHkgZ2VuZXJhdGUgaWQgZm9yIHBvaW50c1xuICAgICAgICBpZCA9IGRhdGFbayArIE9GRlNFVF9JRF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBrZWVwIGlkIGlmIGFscmVhZHkgYXNzaWduZWRcbiAgICAgICAgaWQgPSB0aGlzLnBvaW50c1tkYXRhW2sgKyBPRkZTRVRfSURdXS5pZDtcbiAgICAgIH1cbiAgICAgIGlmIChpZCAhPT0gdW5kZWZpbmVkKSBmLmlkID0gaWQ7XG4gICAgICB0aWxlLmZlYXR1cmVzLnB1c2goZik7XG4gICAgfVxuICB9XG4gIF9saW1pdFpvb20oeikge1xuICAgIHJldHVybiBNYXRoLm1heCh0aGlzLm9wdGlvbnMubWluWm9vbSwgTWF0aC5taW4oTWF0aC5mbG9vcigreiksIHRoaXMub3B0aW9ucy5tYXhab29tICsgMSkpO1xuICB9XG4gIF9jbHVzdGVyKHRyZWUsIHpvb20pIHtcbiAgICBjb25zdCB7XG4gICAgICByYWRpdXMsXG4gICAgICBleHRlbnQsXG4gICAgICByZWR1Y2UsXG4gICAgICBtaW5Qb2ludHNcbiAgICB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGNvbnN0IHIgPSByYWRpdXMgLyAoZXh0ZW50ICogTWF0aC5wb3coMiwgem9vbSkpO1xuICAgIGNvbnN0IGRhdGEgPSB0cmVlLmRhdGE7XG4gICAgY29uc3QgbmV4dERhdGEgPSBbXTtcbiAgICBjb25zdCBzdHJpZGUgPSB0aGlzLnN0cmlkZTtcblxuICAgIC8vIGxvb3AgdGhyb3VnaCBlYWNoIHBvaW50XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSBzdHJpZGUpIHtcbiAgICAgIC8vIGlmIHdlJ3ZlIGFscmVhZHkgdmlzaXRlZCB0aGUgcG9pbnQgYXQgdGhpcyB6b29tIGxldmVsLCBza2lwIGl0XG4gICAgICBpZiAoZGF0YVtpICsgT0ZGU0VUX1pPT01dIDw9IHpvb20pIGNvbnRpbnVlO1xuICAgICAgZGF0YVtpICsgT0ZGU0VUX1pPT01dID0gem9vbTtcblxuICAgICAgLy8gZmluZCBhbGwgbmVhcmJ5IHBvaW50c1xuICAgICAgY29uc3QgeCA9IGRhdGFbaV07XG4gICAgICBjb25zdCB5ID0gZGF0YVtpICsgMV07XG4gICAgICBjb25zdCBuZWlnaGJvcklkcyA9IHRyZWUud2l0aGluKGRhdGFbaV0sIGRhdGFbaSArIDFdLCByKTtcbiAgICAgIGNvbnN0IG51bVBvaW50c09yaWdpbiA9IGRhdGFbaSArIE9GRlNFVF9OVU1dO1xuICAgICAgbGV0IG51bVBvaW50cyA9IG51bVBvaW50c09yaWdpbjtcblxuICAgICAgLy8gY291bnQgdGhlIG51bWJlciBvZiBwb2ludHMgaW4gYSBwb3RlbnRpYWwgY2x1c3RlclxuICAgICAgZm9yIChjb25zdCBuZWlnaGJvcklkIG9mIG5laWdoYm9ySWRzKSB7XG4gICAgICAgIGNvbnN0IGsgPSBuZWlnaGJvcklkICogc3RyaWRlO1xuICAgICAgICAvLyBmaWx0ZXIgb3V0IG5laWdoYm9ycyB0aGF0IGFyZSBhbHJlYWR5IHByb2Nlc3NlZFxuICAgICAgICBpZiAoZGF0YVtrICsgT0ZGU0VUX1pPT01dID4gem9vbSkgbnVtUG9pbnRzICs9IGRhdGFbayArIE9GRlNFVF9OVU1dO1xuICAgICAgfVxuXG4gICAgICAvLyBpZiB0aGVyZSB3ZXJlIG5laWdoYm9ycyB0byBtZXJnZSwgYW5kIHRoZXJlIGFyZSBlbm91Z2ggcG9pbnRzIHRvIGZvcm0gYSBjbHVzdGVyXG4gICAgICBpZiAobnVtUG9pbnRzID4gbnVtUG9pbnRzT3JpZ2luICYmIG51bVBvaW50cyA+PSBtaW5Qb2ludHMpIHtcbiAgICAgICAgbGV0IHd4ID0geCAqIG51bVBvaW50c09yaWdpbjtcbiAgICAgICAgbGV0IHd5ID0geSAqIG51bVBvaW50c09yaWdpbjtcbiAgICAgICAgbGV0IGNsdXN0ZXJQcm9wZXJ0aWVzO1xuICAgICAgICBsZXQgY2x1c3RlclByb3BJbmRleCA9IC0xO1xuXG4gICAgICAgIC8vIGVuY29kZSBib3RoIHpvb20gYW5kIHBvaW50IGluZGV4IG9uIHdoaWNoIHRoZSBjbHVzdGVyIG9yaWdpbmF0ZWQgLS0gb2Zmc2V0IGJ5IHRvdGFsIGxlbmd0aCBvZiBmZWF0dXJlc1xuICAgICAgICBjb25zdCBpZCA9ICgoaSAvIHN0cmlkZSB8IDApIDw8IDUpICsgKHpvb20gKyAxKSArIHRoaXMucG9pbnRzLmxlbmd0aDtcbiAgICAgICAgZm9yIChjb25zdCBuZWlnaGJvcklkIG9mIG5laWdoYm9ySWRzKSB7XG4gICAgICAgICAgY29uc3QgayA9IG5laWdoYm9ySWQgKiBzdHJpZGU7XG4gICAgICAgICAgaWYgKGRhdGFbayArIE9GRlNFVF9aT09NXSA8PSB6b29tKSBjb250aW51ZTtcbiAgICAgICAgICBkYXRhW2sgKyBPRkZTRVRfWk9PTV0gPSB6b29tOyAvLyBzYXZlIHRoZSB6b29tIChzbyBpdCBkb2Vzbid0IGdldCBwcm9jZXNzZWQgdHdpY2UpXG5cbiAgICAgICAgICBjb25zdCBudW1Qb2ludHMyID0gZGF0YVtrICsgT0ZGU0VUX05VTV07XG4gICAgICAgICAgd3ggKz0gZGF0YVtrXSAqIG51bVBvaW50czI7IC8vIGFjY3VtdWxhdGUgY29vcmRpbmF0ZXMgZm9yIGNhbGN1bGF0aW5nIHdlaWdodGVkIGNlbnRlclxuICAgICAgICAgIHd5ICs9IGRhdGFbayArIDFdICogbnVtUG9pbnRzMjtcbiAgICAgICAgICBkYXRhW2sgKyBPRkZTRVRfUEFSRU5UXSA9IGlkO1xuICAgICAgICAgIGlmIChyZWR1Y2UpIHtcbiAgICAgICAgICAgIGlmICghY2x1c3RlclByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgY2x1c3RlclByb3BlcnRpZXMgPSB0aGlzLl9tYXAoZGF0YSwgaSwgdHJ1ZSk7XG4gICAgICAgICAgICAgIGNsdXN0ZXJQcm9wSW5kZXggPSB0aGlzLmNsdXN0ZXJQcm9wcy5sZW5ndGg7XG4gICAgICAgICAgICAgIHRoaXMuY2x1c3RlclByb3BzLnB1c2goY2x1c3RlclByb3BlcnRpZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVkdWNlKGNsdXN0ZXJQcm9wZXJ0aWVzLCB0aGlzLl9tYXAoZGF0YSwgaykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkYXRhW2kgKyBPRkZTRVRfUEFSRU5UXSA9IGlkO1xuICAgICAgICBuZXh0RGF0YS5wdXNoKHd4IC8gbnVtUG9pbnRzLCB3eSAvIG51bVBvaW50cywgSW5maW5pdHksIGlkLCAtMSwgbnVtUG9pbnRzKTtcbiAgICAgICAgaWYgKHJlZHVjZSkgbmV4dERhdGEucHVzaChjbHVzdGVyUHJvcEluZGV4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGxlZnQgcG9pbnRzIGFzIHVuY2x1c3RlcmVkXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc3RyaWRlOyBqKyspIG5leHREYXRhLnB1c2goZGF0YVtpICsgal0pO1xuICAgICAgICBpZiAobnVtUG9pbnRzID4gMSkge1xuICAgICAgICAgIGZvciAoY29uc3QgbmVpZ2hib3JJZCBvZiBuZWlnaGJvcklkcykge1xuICAgICAgICAgICAgY29uc3QgayA9IG5laWdoYm9ySWQgKiBzdHJpZGU7XG4gICAgICAgICAgICBpZiAoZGF0YVtrICsgT0ZGU0VUX1pPT01dIDw9IHpvb20pIGNvbnRpbnVlO1xuICAgICAgICAgICAgZGF0YVtrICsgT0ZGU0VUX1pPT01dID0gem9vbTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc3RyaWRlOyBqKyspIG5leHREYXRhLnB1c2goZGF0YVtrICsgal0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV4dERhdGE7XG4gIH1cblxuICAvLyBnZXQgaW5kZXggb2YgdGhlIHBvaW50IGZyb20gd2hpY2ggdGhlIGNsdXN0ZXIgb3JpZ2luYXRlZFxuICBfZ2V0T3JpZ2luSWQoY2x1c3RlcklkKSB7XG4gICAgcmV0dXJuIGNsdXN0ZXJJZCAtIHRoaXMucG9pbnRzLmxlbmd0aCA+PiA1O1xuICB9XG5cbiAgLy8gZ2V0IHpvb20gb2YgdGhlIHBvaW50IGZyb20gd2hpY2ggdGhlIGNsdXN0ZXIgb3JpZ2luYXRlZFxuICBfZ2V0T3JpZ2luWm9vbShjbHVzdGVySWQpIHtcbiAgICByZXR1cm4gKGNsdXN0ZXJJZCAtIHRoaXMucG9pbnRzLmxlbmd0aCkgJSAzMjtcbiAgfVxuICBfbWFwKGRhdGEsIGksIGNsb25lKSB7XG4gICAgaWYgKGRhdGFbaSArIE9GRlNFVF9OVU1dID4gMSkge1xuICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLmNsdXN0ZXJQcm9wc1tkYXRhW2kgKyBPRkZTRVRfUFJPUF1dO1xuICAgICAgcmV0dXJuIGNsb25lID8gT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpIDogcHJvcHM7XG4gICAgfVxuICAgIGNvbnN0IG9yaWdpbmFsID0gdGhpcy5wb2ludHNbZGF0YVtpICsgT0ZGU0VUX0lEXV0ucHJvcGVydGllcztcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLm9wdGlvbnMubWFwKG9yaWdpbmFsKTtcbiAgICByZXR1cm4gY2xvbmUgJiYgcmVzdWx0ID09PSBvcmlnaW5hbCA/IE9iamVjdC5hc3NpZ24oe30sIHJlc3VsdCkgOiByZXN1bHQ7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldENsdXN0ZXJKU09OKGRhdGEsIGksIGNsdXN0ZXJQcm9wcykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdGZWF0dXJlJyxcbiAgICBpZDogZGF0YVtpICsgT0ZGU0VUX0lEXSxcbiAgICBwcm9wZXJ0aWVzOiBnZXRDbHVzdGVyUHJvcGVydGllcyhkYXRhLCBpLCBjbHVzdGVyUHJvcHMpLFxuICAgIGdlb21ldHJ5OiB7XG4gICAgICB0eXBlOiAnUG9pbnQnLFxuICAgICAgY29vcmRpbmF0ZXM6IFt4TG5nKGRhdGFbaV0pLCB5TGF0KGRhdGFbaSArIDFdKV1cbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBnZXRDbHVzdGVyUHJvcGVydGllcyhkYXRhLCBpLCBjbHVzdGVyUHJvcHMpIHtcbiAgY29uc3QgY291bnQgPSBkYXRhW2kgKyBPRkZTRVRfTlVNXTtcbiAgY29uc3QgYWJicmV2ID0gY291bnQgPj0gMTAwMDAgPyBgJHtNYXRoLnJvdW5kKGNvdW50IC8gMTAwMCl9a2AgOiBjb3VudCA+PSAxMDAwID8gYCR7TWF0aC5yb3VuZChjb3VudCAvIDEwMCkgLyAxMH1rYCA6IGNvdW50O1xuICBjb25zdCBwcm9wSW5kZXggPSBkYXRhW2kgKyBPRkZTRVRfUFJPUF07XG4gIGNvbnN0IHByb3BlcnRpZXMgPSBwcm9wSW5kZXggPT09IC0xID8ge30gOiBPYmplY3QuYXNzaWduKHt9LCBjbHVzdGVyUHJvcHNbcHJvcEluZGV4XSk7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHtcbiAgICBjbHVzdGVyOiB0cnVlLFxuICAgIGNsdXN0ZXJfaWQ6IGRhdGFbaSArIE9GRlNFVF9JRF0sXG4gICAgcG9pbnRfY291bnQ6IGNvdW50LFxuICAgIHBvaW50X2NvdW50X2FiYnJldmlhdGVkOiBhYmJyZXZcbiAgfSk7XG59XG5cbi8vIGxvbmdpdHVkZS9sYXRpdHVkZSB0byBzcGhlcmljYWwgbWVyY2F0b3IgaW4gWzAuLjFdIHJhbmdlXG5mdW5jdGlvbiBsbmdYKGxuZykge1xuICByZXR1cm4gbG5nIC8gMzYwICsgMC41O1xufVxuZnVuY3Rpb24gbGF0WShsYXQpIHtcbiAgY29uc3Qgc2luID0gTWF0aC5zaW4obGF0ICogTWF0aC5QSSAvIDE4MCk7XG4gIGNvbnN0IHkgPSAwLjUgLSAwLjI1ICogTWF0aC5sb2coKDEgKyBzaW4pIC8gKDEgLSBzaW4pKSAvIE1hdGguUEk7XG4gIHJldHVybiB5IDwgMCA/IDAgOiB5ID4gMSA/IDEgOiB5O1xufVxuXG4vLyBzcGhlcmljYWwgbWVyY2F0b3IgdG8gbG9uZ2l0dWRlL2xhdGl0dWRlXG5mdW5jdGlvbiB4TG5nKHgpIHtcbiAgcmV0dXJuICh4IC0gMC41KSAqIDM2MDtcbn1cbmZ1bmN0aW9uIHlMYXQoeSkge1xuICBjb25zdCB5MiA9ICgxODAgLSB5ICogMzYwKSAqIE1hdGguUEkgLyAxODA7XG4gIHJldHVybiAzNjAgKiBNYXRoLmF0YW4oTWF0aC5leHAoeTIpKSAvIE1hdGguUEkgLSA5MDtcbn0iLCJpbXBvcnQgeyBXZWJQbHVnaW4gfSBmcm9tICdAY2FwYWNpdG9yL2NvcmUnO1xuaW1wb3J0IHsgTWFya2VyQ2x1c3RlcmVyLCBTdXBlckNsdXN0ZXJBbGdvcml0aG0gfSBmcm9tICdAZ29vZ2xlbWFwcy9tYXJrZXJjbHVzdGVyZXInO1xuaW1wb3J0IHsgTWFwVHlwZSwgTGF0TG5nQm91bmRzIH0gZnJvbSAnLi9kZWZpbml0aW9ucyc7XG5leHBvcnQgY2xhc3MgQ2FwYWNpdG9yR29vZ2xlTWFwc1dlYiBleHRlbmRzIFdlYlBsdWdpbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgdGhpcy5nTWFwc1JlZiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLkFkdmFuY2VkTWFya2VyRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLlBpbkVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tYXBzID0ge307XG4gICAgdGhpcy5jdXJyTWFya2VySWQgPSAwO1xuICAgIHRoaXMuY3VyclBvbHlnb25JZCA9IDA7XG4gICAgdGhpcy5jdXJyQ2lyY2xlSWQgPSAwO1xuICAgIHRoaXMuY3VyclBvbHlsaW5lSWQgPSAwO1xuICAgIHRoaXMuY3Vyck1hcElkID0gMDtcbiAgICB0aGlzLm9uQ2x1c3RlckNsaWNrSGFuZGxlciA9IChfLCBjbHVzdGVyLCBtYXApID0+IHtcbiAgICAgIHZhciBfYTtcbiAgICAgIGNvbnN0IG1hcElkID0gdGhpcy5nZXRJZEZyb21NYXAobWFwKTtcbiAgICAgIGNvbnN0IGl0ZW1zID0gW107XG4gICAgICBpZiAoY2x1c3Rlci5tYXJrZXJzICE9IHVuZGVmaW5lZCAmJiB0aGlzLkFkdmFuY2VkTWFya2VyRWxlbWVudCkge1xuICAgICAgICBmb3IgKGNvbnN0IG1hcmtlciBvZiBjbHVzdGVyLm1hcmtlcnMpIHtcbiAgICAgICAgICBpZiAobWFya2VyIGluc3RhbmNlb2YgdGhpcy5BZHZhbmNlZE1hcmtlckVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hcmtlcklkID0gdGhpcy5nZXRJZEZyb21NYXJrZXIobWFwSWQsIG1hcmtlcik7XG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IG1hcmtlci5wb3NpdGlvbjtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goe1xuICAgICAgICAgICAgICBtYXJrZXJJZDogbWFya2VySWQsXG4gICAgICAgICAgICAgIGxhdGl0dWRlOiBwb3NpdGlvbi5sYXQsXG4gICAgICAgICAgICAgIGxvbmdpdHVkZTogcG9zaXRpb24ubG5nLFxuICAgICAgICAgICAgICB0aXRsZTogKF9hID0gbWFya2VyLnRpdGxlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJyxcbiAgICAgICAgICAgICAgc25pcHBldDogJydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnMoJ29uQ2x1c3RlckNsaWNrJywge1xuICAgICAgICBtYXBJZDogbWFwSWQsXG4gICAgICAgIGxhdGl0dWRlOiBjbHVzdGVyLnBvc2l0aW9uLmxhdCxcbiAgICAgICAgbG9uZ2l0dWRlOiBjbHVzdGVyLnBvc2l0aW9uLmxuZyxcbiAgICAgICAgc2l6ZTogY2x1c3Rlci5jb3VudCxcbiAgICAgICAgaXRlbXM6IGl0ZW1zXG4gICAgICB9KTtcbiAgICB9O1xuICB9XG4gIGdldElkRnJvbU1hcChtYXApIHtcbiAgICBmb3IgKGNvbnN0IGlkIGluIHRoaXMubWFwcykge1xuICAgICAgaWYgKHRoaXMubWFwc1tpZF0ubWFwID09IG1hcCkge1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxuICBnZXRJZEZyb21NYXJrZXIobWFwSWQsIG1hcmtlcikge1xuICAgIGZvciAoY29uc3QgaWQgaW4gdGhpcy5tYXBzW21hcElkXS5tYXJrZXJzKSB7XG4gICAgICBpZiAodGhpcy5tYXBzW21hcElkXS5tYXJrZXJzW2lkXSA9PSBtYXJrZXIpIHtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgYXN5bmMgaW1wb3J0R29vZ2xlTGliKGFwaUtleSwgcmVnaW9uLCBsYW5ndWFnZSkge1xuICAgIGlmICh0aGlzLmdNYXBzUmVmID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGxpYiA9IGF3YWl0IGltcG9ydCgnQGdvb2dsZW1hcHMvanMtYXBpLWxvYWRlcicpO1xuICAgICAgY29uc3QgbG9hZGVyID0gbmV3IGxpYi5Mb2FkZXIoe1xuICAgICAgICBhcGlLZXk6IGFwaUtleSAhPT0gbnVsbCAmJiBhcGlLZXkgIT09IHZvaWQgMCA/IGFwaUtleSA6ICcnLFxuICAgICAgICB2ZXJzaW9uOiAnd2Vla2x5JyxcbiAgICAgICAgbGlicmFyaWVzOiBbJ3BsYWNlcyddLFxuICAgICAgICBsYW5ndWFnZSxcbiAgICAgICAgcmVnaW9uXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGdvb2dsZSA9IGF3YWl0IGxvYWRlci5sb2FkKCk7XG4gICAgICB0aGlzLmdNYXBzUmVmID0gZ29vZ2xlLm1hcHM7XG4gICAgICAvLyBJbXBvcnQgbWFya2VyIGxpYnJhcnkgb25jZVxuICAgICAgY29uc3Qge1xuICAgICAgICBBZHZhbmNlZE1hcmtlckVsZW1lbnQsXG4gICAgICAgIFBpbkVsZW1lbnRcbiAgICAgIH0gPSBhd2FpdCBnb29nbGUubWFwcy5pbXBvcnRMaWJyYXJ5KCdtYXJrZXInKTtcbiAgICAgIHRoaXMuQWR2YW5jZWRNYXJrZXJFbGVtZW50ID0gQWR2YW5jZWRNYXJrZXJFbGVtZW50O1xuICAgICAgdGhpcy5QaW5FbGVtZW50ID0gUGluRWxlbWVudDtcbiAgICAgIGNvbnNvbGUubG9nKCdMb2FkZWQgZ29vZ2xlIG1hcHMgQVBJJyk7XG4gICAgfVxuICB9XG4gIGFzeW5jIGVuYWJsZVRvdWNoKF9hcmdzKSB7XG4gICAgdGhpcy5tYXBzW19hcmdzLmlkXS5tYXAuc2V0T3B0aW9ucyh7XG4gICAgICBnZXN0dXJlSGFuZGxpbmc6ICdhdXRvJ1xuICAgIH0pO1xuICB9XG4gIGFzeW5jIGRpc2FibGVUb3VjaChfYXJncykge1xuICAgIHRoaXMubWFwc1tfYXJncy5pZF0ubWFwLnNldE9wdGlvbnMoe1xuICAgICAgZ2VzdHVyZUhhbmRsaW5nOiAnbm9uZSdcbiAgICB9KTtcbiAgfVxuICBhc3luYyBzZXRDYW1lcmEoX2FyZ3MpIHtcbiAgICAvLyBBbmltYXRpb24gbm90IHN1cHBvcnRlZCB5ZXQuLi5cbiAgICB0aGlzLm1hcHNbX2FyZ3MuaWRdLm1hcC5tb3ZlQ2FtZXJhKHtcbiAgICAgIGNlbnRlcjogX2FyZ3MuY29uZmlnLmNvb3JkaW5hdGUsXG4gICAgICBoZWFkaW5nOiBfYXJncy5jb25maWcuYmVhcmluZyxcbiAgICAgIHRpbHQ6IF9hcmdzLmNvbmZpZy5hbmdsZSxcbiAgICAgIHpvb206IF9hcmdzLmNvbmZpZy56b29tXG4gICAgfSk7XG4gIH1cbiAgYXN5bmMgZ2V0TWFwVHlwZShfYXJncykge1xuICAgIGxldCB0eXBlID0gdGhpcy5tYXBzW19hcmdzLmlkXS5tYXAuZ2V0TWFwVHlwZUlkKCk7XG4gICAgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGUgPT09ICdyb2FkbWFwJykge1xuICAgICAgICB0eXBlID0gTWFwVHlwZS5Ob3JtYWw7XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBgJHt0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7dHlwZS5zbGljZSgxKX1gXG4gICAgICB9O1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01hcCB0eXBlIGlzIHVuZGVmaW5lZCcpO1xuICB9XG4gIGFzeW5jIHNldE1hcFR5cGUoX2FyZ3MpIHtcbiAgICBsZXQgbWFwVHlwZSA9IF9hcmdzLm1hcFR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoX2FyZ3MubWFwVHlwZSA9PT0gTWFwVHlwZS5Ob3JtYWwpIHtcbiAgICAgIG1hcFR5cGUgPSAncm9hZG1hcCc7XG4gICAgfVxuICAgIHRoaXMubWFwc1tfYXJncy5pZF0ubWFwLnNldE1hcFR5cGVJZChtYXBUeXBlKTtcbiAgfVxuICBhc3luYyBlbmFibGVJbmRvb3JNYXBzKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBzdXBwb3J0ZWQgb24gd2ViLicpO1xuICB9XG4gIGFzeW5jIGVuYWJsZVRyYWZmaWNMYXllcihfYXJncykge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCB0cmFmZmljTGF5ZXIgPSAoX2EgPSB0aGlzLm1hcHNbX2FyZ3MuaWRdLnRyYWZmaWNMYXllcikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbmV3IGdvb2dsZS5tYXBzLlRyYWZmaWNMYXllcigpO1xuICAgIGlmIChfYXJncy5lbmFibGVkKSB7XG4gICAgICB0cmFmZmljTGF5ZXIuc2V0TWFwKHRoaXMubWFwc1tfYXJncy5pZF0ubWFwKTtcbiAgICAgIHRoaXMubWFwc1tfYXJncy5pZF0udHJhZmZpY0xheWVyID0gdHJhZmZpY0xheWVyO1xuICAgIH0gZWxzZSBpZiAodGhpcy5tYXBzW19hcmdzLmlkXS50cmFmZmljTGF5ZXIpIHtcbiAgICAgIHRyYWZmaWNMYXllci5zZXRNYXAobnVsbCk7XG4gICAgICB0aGlzLm1hcHNbX2FyZ3MuaWRdLnRyYWZmaWNMYXllciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbiAgYXN5bmMgZW5hYmxlQWNjZXNzaWJpbGl0eUVsZW1lbnRzKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBzdXBwb3J0ZWQgb24gd2ViLicpO1xuICB9XG4gIGRpc3BhdGNoTWFwRXZlbnQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IHN1cHBvcnRlZCBvbiB3ZWIuJyk7XG4gIH1cbiAgYXN5bmMgZW5hYmxlQ3VycmVudExvY2F0aW9uKF9hcmdzKSB7XG4gICAgaWYgKF9hcmdzLmVuYWJsZWQpIHtcbiAgICAgIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihwb3NpdGlvbiA9PiB7XG4gICAgICAgICAgY29uc3QgcG9zID0ge1xuICAgICAgICAgICAgbGF0OiBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsXG4gICAgICAgICAgICBsbmc6IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGVcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMubWFwc1tfYXJncy5pZF0ubWFwLnNldENlbnRlcihwb3MpO1xuICAgICAgICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzKCdvbk15TG9jYXRpb25CdXR0b25DbGljaycsIHt9KTtcbiAgICAgICAgICB0aGlzLm5vdGlmeUxpc3RlbmVycygnb25NeUxvY2F0aW9uQ2xpY2snLCB7fSk7XG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dlb2xvY2F0aW9uIG5vdCBzdXBwb3J0ZWQgb24gd2ViIGJyb3dzZXIuJyk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdHZW9sb2NhdGlvbiBub3Qgc3VwcG9ydGVkIG9uIHdlYiBicm93c2VyLicpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhc3luYyBzZXRQYWRkaW5nKF9hcmdzKSB7XG4gICAgY29uc3QgYm91bmRzID0gdGhpcy5tYXBzW19hcmdzLmlkXS5tYXAuZ2V0Qm91bmRzKCk7XG4gICAgaWYgKGJvdW5kcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm1hcHNbX2FyZ3MuaWRdLm1hcC5maXRCb3VuZHMoYm91bmRzLCBfYXJncy5wYWRkaW5nKTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgZ2V0TWFwQm91bmRzKF9hcmdzKSB7XG4gICAgY29uc3QgYm91bmRzID0gdGhpcy5tYXBzW19hcmdzLmlkXS5tYXAuZ2V0Qm91bmRzKCk7XG4gICAgaWYgKCFib3VuZHMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignR29vZ2xlIE1hcCBCb3VuZHMgY291bGQgbm90IGJlIGZvdW5kLicpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IExhdExuZ0JvdW5kcyh7XG4gICAgICBzb3V0aHdlc3Q6IHtcbiAgICAgICAgbGF0OiBib3VuZHMuZ2V0U291dGhXZXN0KCkubGF0KCksXG4gICAgICAgIGxuZzogYm91bmRzLmdldFNvdXRoV2VzdCgpLmxuZygpXG4gICAgICB9LFxuICAgICAgY2VudGVyOiB7XG4gICAgICAgIGxhdDogYm91bmRzLmdldENlbnRlcigpLmxhdCgpLFxuICAgICAgICBsbmc6IGJvdW5kcy5nZXRDZW50ZXIoKS5sbmcoKVxuICAgICAgfSxcbiAgICAgIG5vcnRoZWFzdDoge1xuICAgICAgICBsYXQ6IGJvdW5kcy5nZXROb3J0aEVhc3QoKS5sYXQoKSxcbiAgICAgICAgbG5nOiBib3VuZHMuZ2V0Tm9ydGhFYXN0KCkubG5nKClcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBhc3luYyBmaXRCb3VuZHMoX2FyZ3MpIHtcbiAgICBjb25zdCBtYXAgPSB0aGlzLm1hcHNbX2FyZ3MuaWRdLm1hcDtcbiAgICBjb25zdCBib3VuZHMgPSB0aGlzLmdldExhdExuZ0JvdW5kcyhfYXJncy5ib3VuZHMpO1xuICAgIG1hcC5maXRCb3VuZHMoYm91bmRzLCBfYXJncy5wYWRkaW5nKTtcbiAgfVxuICBhc3luYyBhZGRNYXJrZXJzKF9hcmdzKSB7XG4gICAgY29uc3QgbWFya2VySWRzID0gW107XG4gICAgY29uc3QgbWFwID0gdGhpcy5tYXBzW19hcmdzLmlkXTtcbiAgICBmb3IgKGNvbnN0IG1hcmtlckFyZ3Mgb2YgX2FyZ3MubWFya2Vycykge1xuICAgICAgY29uc3QgYWR2YW5jZWRNYXJrZXIgPSB0aGlzLmJ1aWxkTWFya2VyT3B0cyhtYXJrZXJBcmdzLCBtYXAubWFwKTtcbiAgICAgIGNvbnN0IGlkID0gJycgKyB0aGlzLmN1cnJNYXJrZXJJZDtcbiAgICAgIG1hcC5tYXJrZXJzW2lkXSA9IGFkdmFuY2VkTWFya2VyO1xuICAgICAgYXdhaXQgdGhpcy5zZXRNYXJrZXJMaXN0ZW5lcnMoX2FyZ3MuaWQsIGlkLCBhZHZhbmNlZE1hcmtlcik7XG4gICAgICBtYXJrZXJJZHMucHVzaChpZCk7XG4gICAgICB0aGlzLmN1cnJNYXJrZXJJZCsrO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgaWRzOiBtYXJrZXJJZHNcbiAgICB9O1xuICB9XG4gIGFzeW5jIGFkZE1hcmtlcihfYXJncykge1xuICAgIGNvbnN0IGFkdmFuY2VkTWFya2VyID0gdGhpcy5idWlsZE1hcmtlck9wdHMoX2FyZ3MubWFya2VyLCB0aGlzLm1hcHNbX2FyZ3MuaWRdLm1hcCk7XG4gICAgY29uc3QgaWQgPSAnJyArIHRoaXMuY3Vyck1hcmtlcklkO1xuICAgIHRoaXMubWFwc1tfYXJncy5pZF0ubWFya2Vyc1tpZF0gPSBhZHZhbmNlZE1hcmtlcjtcbiAgICBhd2FpdCB0aGlzLnNldE1hcmtlckxpc3RlbmVycyhfYXJncy5pZCwgaWQsIGFkdmFuY2VkTWFya2VyKTtcbiAgICB0aGlzLmN1cnJNYXJrZXJJZCsrO1xuICAgIHJldHVybiB7XG4gICAgICBpZDogaWRcbiAgICB9O1xuICB9XG4gIGFzeW5jIHJlbW92ZU1hcmtlcnMoX2FyZ3MpIHtcbiAgICBjb25zdCBtYXAgPSB0aGlzLm1hcHNbX2FyZ3MuaWRdO1xuICAgIGZvciAoY29uc3QgaWQgb2YgX2FyZ3MubWFya2VySWRzKSB7XG4gICAgICBpZiAobWFwLm1hcmtlcnNbaWRdKSB7XG4gICAgICAgIG1hcC5tYXJrZXJzW2lkXS5tYXAgPSBudWxsO1xuICAgICAgICBkZWxldGUgbWFwLm1hcmtlcnNbaWRdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhc3luYyByZW1vdmVNYXJrZXIoX2FyZ3MpIHtcbiAgICBpZiAodGhpcy5tYXBzW19hcmdzLmlkXS5tYXJrZXJzW19hcmdzLm1hcmtlcklkXSkge1xuICAgICAgdGhpcy5tYXBzW19hcmdzLmlkXS5tYXJrZXJzW19hcmdzLm1hcmtlcklkXS5tYXAgPSBudWxsO1xuICAgICAgZGVsZXRlIHRoaXMubWFwc1tfYXJncy5pZF0ubWFya2Vyc1tfYXJncy5tYXJrZXJJZF07XG4gICAgfVxuICB9XG4gIGFzeW5jIGFkZFBvbHlnb25zKGFyZ3MpIHtcbiAgICBjb25zdCBwb2x5Z29uSWRzID0gW107XG4gICAgY29uc3QgbWFwID0gdGhpcy5tYXBzW2FyZ3MuaWRdO1xuICAgIGZvciAoY29uc3QgcG9seWdvbkFyZ3Mgb2YgYXJncy5wb2x5Z29ucykge1xuICAgICAgY29uc3QgcG9seWdvbiA9IG5ldyBnb29nbGUubWFwcy5Qb2x5Z29uKHBvbHlnb25BcmdzKTtcbiAgICAgIHBvbHlnb24uc2V0TWFwKG1hcC5tYXApO1xuICAgICAgY29uc3QgaWQgPSAnJyArIHRoaXMuY3VyclBvbHlnb25JZDtcbiAgICAgIHRoaXMubWFwc1thcmdzLmlkXS5wb2x5Z29uc1tpZF0gPSBwb2x5Z29uO1xuICAgICAgdGhpcy5zZXRQb2x5Z29uTGlzdGVuZXJzKGFyZ3MuaWQsIGlkLCBwb2x5Z29uKTtcbiAgICAgIHBvbHlnb25JZHMucHVzaChpZCk7XG4gICAgICB0aGlzLmN1cnJQb2x5Z29uSWQrKztcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkczogcG9seWdvbklkc1xuICAgIH07XG4gIH1cbiAgYXN5bmMgcmVtb3ZlUG9seWdvbnMoYXJncykge1xuICAgIGNvbnN0IG1hcCA9IHRoaXMubWFwc1thcmdzLmlkXTtcbiAgICBmb3IgKGNvbnN0IGlkIG9mIGFyZ3MucG9seWdvbklkcykge1xuICAgICAgbWFwLnBvbHlnb25zW2lkXS5zZXRNYXAobnVsbCk7XG4gICAgICBkZWxldGUgbWFwLnBvbHlnb25zW2lkXTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgYWRkQ2lyY2xlcyhhcmdzKSB7XG4gICAgY29uc3QgY2lyY2xlSWRzID0gW107XG4gICAgY29uc3QgbWFwID0gdGhpcy5tYXBzW2FyZ3MuaWRdO1xuICAgIGZvciAoY29uc3QgY2lyY2xlQXJncyBvZiBhcmdzLmNpcmNsZXMpIHtcbiAgICAgIGNvbnN0IGNpcmNsZSA9IG5ldyBnb29nbGUubWFwcy5DaXJjbGUoY2lyY2xlQXJncyk7XG4gICAgICBjaXJjbGUuc2V0TWFwKG1hcC5tYXApO1xuICAgICAgY29uc3QgaWQgPSAnJyArIHRoaXMuY3VyckNpcmNsZUlkO1xuICAgICAgdGhpcy5tYXBzW2FyZ3MuaWRdLmNpcmNsZXNbaWRdID0gY2lyY2xlO1xuICAgICAgdGhpcy5zZXRDaXJjbGVMaXN0ZW5lcnMoYXJncy5pZCwgaWQsIGNpcmNsZSk7XG4gICAgICBjaXJjbGVJZHMucHVzaChpZCk7XG4gICAgICB0aGlzLmN1cnJDaXJjbGVJZCsrO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgaWRzOiBjaXJjbGVJZHNcbiAgICB9O1xuICB9XG4gIGFzeW5jIHJlbW92ZUNpcmNsZXMoYXJncykge1xuICAgIGNvbnN0IG1hcCA9IHRoaXMubWFwc1thcmdzLmlkXTtcbiAgICBmb3IgKGNvbnN0IGlkIG9mIGFyZ3MuY2lyY2xlSWRzKSB7XG4gICAgICBtYXAuY2lyY2xlc1tpZF0uc2V0TWFwKG51bGwpO1xuICAgICAgZGVsZXRlIG1hcC5jaXJjbGVzW2lkXTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgYWRkUG9seWxpbmVzKGFyZ3MpIHtcbiAgICBjb25zdCBsaW5lSWRzID0gW107XG4gICAgY29uc3QgbWFwID0gdGhpcy5tYXBzW2FyZ3MuaWRdO1xuICAgIGZvciAoY29uc3QgcG9seWxpbmVBcmdzIG9mIGFyZ3MucG9seWxpbmVzKSB7XG4gICAgICBjb25zdCBwb2x5bGluZSA9IG5ldyBnb29nbGUubWFwcy5Qb2x5bGluZShwb2x5bGluZUFyZ3MpO1xuICAgICAgcG9seWxpbmUuc2V0KCd0YWcnLCBwb2x5bGluZUFyZ3MudGFnKTtcbiAgICAgIHBvbHlsaW5lLnNldE1hcChtYXAubWFwKTtcbiAgICAgIGNvbnN0IGlkID0gJycgKyB0aGlzLmN1cnJQb2x5bGluZUlkO1xuICAgICAgdGhpcy5tYXBzW2FyZ3MuaWRdLnBvbHlsaW5lc1tpZF0gPSBwb2x5bGluZTtcbiAgICAgIHRoaXMuc2V0UG9seWxpbmVMaXN0ZW5lcnMoYXJncy5pZCwgaWQsIHBvbHlsaW5lKTtcbiAgICAgIGxpbmVJZHMucHVzaChpZCk7XG4gICAgICB0aGlzLmN1cnJQb2x5bGluZUlkKys7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBpZHM6IGxpbmVJZHNcbiAgICB9O1xuICB9XG4gIGFzeW5jIHJlbW92ZVBvbHlsaW5lcyhhcmdzKSB7XG4gICAgY29uc3QgbWFwID0gdGhpcy5tYXBzW2FyZ3MuaWRdO1xuICAgIGZvciAoY29uc3QgaWQgb2YgYXJncy5wb2x5bGluZUlkcykge1xuICAgICAgbWFwLnBvbHlsaW5lc1tpZF0uc2V0TWFwKG51bGwpO1xuICAgICAgZGVsZXRlIG1hcC5wb2x5bGluZXNbaWRdO1xuICAgIH1cbiAgfVxuICBhc3luYyBlbmFibGVDbHVzdGVyaW5nKF9hcmdzKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IG1hcmtlcnMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGlkIGluIHRoaXMubWFwc1tfYXJncy5pZF0ubWFya2Vycykge1xuICAgICAgbWFya2Vycy5wdXNoKHRoaXMubWFwc1tfYXJncy5pZF0ubWFya2Vyc1tpZF0pO1xuICAgIH1cbiAgICB0aGlzLm1hcHNbX2FyZ3MuaWRdLm1hcmtlckNsdXN0ZXJlciA9IG5ldyBNYXJrZXJDbHVzdGVyZXIoe1xuICAgICAgbWFwOiB0aGlzLm1hcHNbX2FyZ3MuaWRdLm1hcCxcbiAgICAgIG1hcmtlcnM6IG1hcmtlcnMsXG4gICAgICBhbGdvcml0aG06IG5ldyBTdXBlckNsdXN0ZXJBbGdvcml0aG0oe1xuICAgICAgICBtaW5Qb2ludHM6IChfYSA9IF9hcmdzLm1pbkNsdXN0ZXJTaXplKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiA0XG4gICAgICB9KSxcbiAgICAgIG9uQ2x1c3RlckNsaWNrOiB0aGlzLm9uQ2x1c3RlckNsaWNrSGFuZGxlclxuICAgIH0pO1xuICB9XG4gIGFzeW5jIGRpc2FibGVDbHVzdGVyaW5nKF9hcmdzKSB7XG4gICAgY29uc3QgbWFwSW5zdGFuY2UgPSB0aGlzLm1hcHNbX2FyZ3MuaWRdO1xuICAgIGlmIChtYXBJbnN0YW5jZS5tYXJrZXJDbHVzdGVyZXIpIHtcbiAgICAgIGNvbnN0IG1hcmtlcnMgPSBPYmplY3QudmFsdWVzKG1hcEluc3RhbmNlLm1hcmtlcnMpO1xuICAgICAgbWFwSW5zdGFuY2UubWFya2VyQ2x1c3RlcmVyLnNldE1hcChudWxsKTtcbiAgICAgIG1hcEluc3RhbmNlLm1hcmtlckNsdXN0ZXJlciA9IHVuZGVmaW5lZDtcbiAgICAgIGZvciAoY29uc3QgbWFya2VyIG9mIG1hcmtlcnMpIHtcbiAgICAgICAgbWFya2VyLm1hcCA9IG1hcEluc3RhbmNlLm1hcDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYXN5bmMgb25TY3JvbGwoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IHN1cHBvcnRlZCBvbiB3ZWIuJyk7XG4gIH1cbiAgYXN5bmMgb25SZXNpemUoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IHN1cHBvcnRlZCBvbiB3ZWIuJyk7XG4gIH1cbiAgYXN5bmMgb25EaXNwbGF5KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBzdXBwb3J0ZWQgb24gd2ViLicpO1xuICB9XG4gIGFzeW5jIGNyZWF0ZShfYXJncykge1xuICAgIGNvbnNvbGUubG9nKGBDcmVhdGUgbWFwOiAke19hcmdzLmlkfWApO1xuICAgIGF3YWl0IHRoaXMuaW1wb3J0R29vZ2xlTGliKF9hcmdzLmFwaUtleSwgX2FyZ3MucmVnaW9uLCBfYXJncy5sYW5ndWFnZSk7XG4gICAgLy8gRW5zdXJlIHdlIGhhdmUgYSBNYXAgSUQgZm9yIEFkdmFuY2VkIE1hcmtlcnNcbiAgICBjb25zdCBjb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBfYXJncy5jb25maWcpO1xuICAgIGlmICghY29uZmlnLm1hcElkKSB7XG4gICAgICBjb25maWcubWFwSWQgPSBgY2FwYWNpdG9yX21hcF8ke3RoaXMuY3Vyck1hcElkKyt9YDtcbiAgICB9XG4gICAgdGhpcy5tYXBzW19hcmdzLmlkXSA9IHtcbiAgICAgIG1hcDogbmV3IHdpbmRvdy5nb29nbGUubWFwcy5NYXAoX2FyZ3MuZWxlbWVudCwgY29uZmlnKSxcbiAgICAgIGVsZW1lbnQ6IF9hcmdzLmVsZW1lbnQsXG4gICAgICBtYXJrZXJzOiB7fSxcbiAgICAgIHBvbHlnb25zOiB7fSxcbiAgICAgIGNpcmNsZXM6IHt9LFxuICAgICAgcG9seWxpbmVzOiB7fVxuICAgIH07XG4gICAgdGhpcy5zZXRNYXBMaXN0ZW5lcnMoX2FyZ3MuaWQpO1xuICB9XG4gIGFzeW5jIGRlc3Ryb3koX2FyZ3MpIHtcbiAgICBjb25zb2xlLmxvZyhgRGVzdHJveSBtYXA6ICR7X2FyZ3MuaWR9YCk7XG4gICAgY29uc3QgbWFwSXRlbSA9IHRoaXMubWFwc1tfYXJncy5pZF07XG4gICAgbWFwSXRlbS5lbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgIG1hcEl0ZW0ubWFwLnVuYmluZEFsbCgpO1xuICAgIGRlbGV0ZSB0aGlzLm1hcHNbX2FyZ3MuaWRdO1xuICB9XG4gIGFzeW5jIG1hcEJvdW5kc0NvbnRhaW5zKF9hcmdzKSB7XG4gICAgY29uc3QgYm91bmRzID0gdGhpcy5nZXRMYXRMbmdCb3VuZHMoX2FyZ3MuYm91bmRzKTtcbiAgICBjb25zdCBwb2ludCA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoX2FyZ3MucG9pbnQubGF0LCBfYXJncy5wb2ludC5sbmcpO1xuICAgIHJldHVybiB7XG4gICAgICBjb250YWluczogYm91bmRzLmNvbnRhaW5zKHBvaW50KVxuICAgIH07XG4gIH1cbiAgYXN5bmMgbWFwQm91bmRzRXh0ZW5kKF9hcmdzKSB7XG4gICAgY29uc3QgYm91bmRzID0gdGhpcy5nZXRMYXRMbmdCb3VuZHMoX2FyZ3MuYm91bmRzKTtcbiAgICBjb25zdCBwb2ludCA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoX2FyZ3MucG9pbnQubGF0LCBfYXJncy5wb2ludC5sbmcpO1xuICAgIGJvdW5kcy5leHRlbmQocG9pbnQpO1xuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBMYXRMbmdCb3VuZHMoe1xuICAgICAgc291dGh3ZXN0OiB7XG4gICAgICAgIGxhdDogYm91bmRzLmdldFNvdXRoV2VzdCgpLmxhdCgpLFxuICAgICAgICBsbmc6IGJvdW5kcy5nZXRTb3V0aFdlc3QoKS5sbmcoKVxuICAgICAgfSxcbiAgICAgIGNlbnRlcjoge1xuICAgICAgICBsYXQ6IGJvdW5kcy5nZXRDZW50ZXIoKS5sYXQoKSxcbiAgICAgICAgbG5nOiBib3VuZHMuZ2V0Q2VudGVyKCkubG5nKClcbiAgICAgIH0sXG4gICAgICBub3J0aGVhc3Q6IHtcbiAgICAgICAgbGF0OiBib3VuZHMuZ2V0Tm9ydGhFYXN0KCkubGF0KCksXG4gICAgICAgIGxuZzogYm91bmRzLmdldE5vcnRoRWFzdCgpLmxuZygpXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJvdW5kczogcmVzdWx0XG4gICAgfTtcbiAgfVxuICBnZXRMYXRMbmdCb3VuZHMoX2FyZ3MpIHtcbiAgICByZXR1cm4gbmV3IGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcyhuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKF9hcmdzLnNvdXRod2VzdC5sYXQsIF9hcmdzLnNvdXRod2VzdC5sbmcpLCBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKF9hcmdzLm5vcnRoZWFzdC5sYXQsIF9hcmdzLm5vcnRoZWFzdC5sbmcpKTtcbiAgfVxuICBhc3luYyBzZXRDaXJjbGVMaXN0ZW5lcnMobWFwSWQsIGNpcmNsZUlkLCBjaXJjbGUpIHtcbiAgICBjaXJjbGUuYWRkTGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnMoJ29uQ2lyY2xlQ2xpY2snLCB7XG4gICAgICAgIG1hcElkOiBtYXBJZCxcbiAgICAgICAgY2lyY2xlSWQ6IGNpcmNsZUlkLFxuICAgICAgICB0YWc6IGNpcmNsZS5nZXQoJ3RhZycpXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBhc3luYyBzZXRQb2x5Z29uTGlzdGVuZXJzKG1hcElkLCBwb2x5Z29uSWQsIHBvbHlnb24pIHtcbiAgICBwb2x5Z29uLmFkZExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzKCdvblBvbHlnb25DbGljaycsIHtcbiAgICAgICAgbWFwSWQ6IG1hcElkLFxuICAgICAgICBwb2x5Z29uSWQ6IHBvbHlnb25JZCxcbiAgICAgICAgdGFnOiBwb2x5Z29uLmdldCgndGFnJylcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGFzeW5jIHNldFBvbHlsaW5lTGlzdGVuZXJzKG1hcElkLCBwb2x5bGluZUlkLCBwb2x5bGluZSkge1xuICAgIHBvbHlsaW5lLmFkZExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzKCdvblBvbHlsaW5lQ2xpY2snLCB7XG4gICAgICAgIG1hcElkOiBtYXBJZCxcbiAgICAgICAgcG9seWxpbmVJZDogcG9seWxpbmVJZCxcbiAgICAgICAgdGFnOiBwb2x5bGluZS5nZXQoJ3RhZycpXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBhc3luYyBzZXRNYXJrZXJMaXN0ZW5lcnMobWFwSWQsIG1hcmtlcklkLCBtYXJrZXIpIHtcbiAgICBtYXJrZXIuYWRkTGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdmFyIF9hO1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBtYXJrZXIucG9zaXRpb247XG4gICAgICB0aGlzLm5vdGlmeUxpc3RlbmVycygnb25NYXJrZXJDbGljaycsIHtcbiAgICAgICAgbWFwSWQ6IG1hcElkLFxuICAgICAgICBtYXJrZXJJZDogbWFya2VySWQsXG4gICAgICAgIGxhdGl0dWRlOiBwb3NpdGlvbi5sYXQsXG4gICAgICAgIGxvbmdpdHVkZTogcG9zaXRpb24ubG5nLFxuICAgICAgICB0aXRsZTogKF9hID0gbWFya2VyLnRpdGxlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJyxcbiAgICAgICAgc25pcHBldDogJydcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChtYXJrZXIuZ21wRHJhZ2dhYmxlKSB7XG4gICAgICBtYXJrZXIuYWRkTGlzdGVuZXIoJ2RyYWdzdGFydCcsICgpID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IG1hcmtlci5wb3NpdGlvbjtcbiAgICAgICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnMoJ29uTWFya2VyRHJhZ1N0YXJ0Jywge1xuICAgICAgICAgIG1hcElkOiBtYXBJZCxcbiAgICAgICAgICBtYXJrZXJJZDogbWFya2VySWQsXG4gICAgICAgICAgbGF0aXR1ZGU6IHBvc2l0aW9uLmxhdCxcbiAgICAgICAgICBsb25naXR1ZGU6IHBvc2l0aW9uLmxuZyxcbiAgICAgICAgICB0aXRsZTogKF9hID0gbWFya2VyLnRpdGxlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJyxcbiAgICAgICAgICBzbmlwcGV0OiAnJ1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgbWFya2VyLmFkZExpc3RlbmVyKCdkcmFnJywgKCkgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gbWFya2VyLnBvc2l0aW9uO1xuICAgICAgICB0aGlzLm5vdGlmeUxpc3RlbmVycygnb25NYXJrZXJEcmFnJywge1xuICAgICAgICAgIG1hcElkOiBtYXBJZCxcbiAgICAgICAgICBtYXJrZXJJZDogbWFya2VySWQsXG4gICAgICAgICAgbGF0aXR1ZGU6IHBvc2l0aW9uLmxhdCxcbiAgICAgICAgICBsb25naXR1ZGU6IHBvc2l0aW9uLmxuZyxcbiAgICAgICAgICB0aXRsZTogKF9hID0gbWFya2VyLnRpdGxlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJyxcbiAgICAgICAgICBzbmlwcGV0OiAnJ1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgbWFya2VyLmFkZExpc3RlbmVyKCdkcmFnZW5kJywgKCkgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gbWFya2VyLnBvc2l0aW9uO1xuICAgICAgICB0aGlzLm5vdGlmeUxpc3RlbmVycygnb25NYXJrZXJEcmFnRW5kJywge1xuICAgICAgICAgIG1hcElkOiBtYXBJZCxcbiAgICAgICAgICBtYXJrZXJJZDogbWFya2VySWQsXG4gICAgICAgICAgbGF0aXR1ZGU6IHBvc2l0aW9uLmxhdCxcbiAgICAgICAgICBsb25naXR1ZGU6IHBvc2l0aW9uLmxuZyxcbiAgICAgICAgICB0aXRsZTogKF9hID0gbWFya2VyLnRpdGxlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJyxcbiAgICAgICAgICBzbmlwcGV0OiAnJ1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBhc3luYyBzZXRNYXBMaXN0ZW5lcnMobWFwSWQpIHtcbiAgICBjb25zdCBtYXAgPSB0aGlzLm1hcHNbbWFwSWRdLm1hcDtcbiAgICBtYXAuYWRkTGlzdGVuZXIoJ2lkbGUnLCBhc3luYyAoKSA9PiB7XG4gICAgICB2YXIgX2EsIF9iO1xuICAgICAgY29uc3QgYm91bmRzID0gYXdhaXQgdGhpcy5nZXRNYXBCb3VuZHMoe1xuICAgICAgICBpZDogbWFwSWRcbiAgICAgIH0pO1xuICAgICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnMoJ29uQ2FtZXJhSWRsZScsIHtcbiAgICAgICAgbWFwSWQ6IG1hcElkLFxuICAgICAgICBiZWFyaW5nOiBtYXAuZ2V0SGVhZGluZygpLFxuICAgICAgICBib3VuZHM6IGJvdW5kcyxcbiAgICAgICAgbGF0aXR1ZGU6IChfYSA9IG1hcC5nZXRDZW50ZXIoKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmxhdCgpLFxuICAgICAgICBsb25naXR1ZGU6IChfYiA9IG1hcC5nZXRDZW50ZXIoKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmxuZygpLFxuICAgICAgICB0aWx0OiBtYXAuZ2V0VGlsdCgpLFxuICAgICAgICB6b29tOiBtYXAuZ2V0Wm9vbSgpXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBtYXAuYWRkTGlzdGVuZXIoJ2NlbnRlcl9jaGFuZ2VkJywgKCkgPT4ge1xuICAgICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnMoJ29uQ2FtZXJhTW92ZVN0YXJ0ZWQnLCB7XG4gICAgICAgIG1hcElkOiBtYXBJZCxcbiAgICAgICAgaXNHZXN0dXJlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBtYXAuYWRkTGlzdGVuZXIoJ2JvdW5kc19jaGFuZ2VkJywgYXN5bmMgKCkgPT4ge1xuICAgICAgdmFyIF9hLCBfYjtcbiAgICAgIGNvbnN0IGJvdW5kcyA9IGF3YWl0IHRoaXMuZ2V0TWFwQm91bmRzKHtcbiAgICAgICAgaWQ6IG1hcElkXG4gICAgICB9KTtcbiAgICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzKCdvbkJvdW5kc0NoYW5nZWQnLCB7XG4gICAgICAgIG1hcElkOiBtYXBJZCxcbiAgICAgICAgYmVhcmluZzogbWFwLmdldEhlYWRpbmcoKSxcbiAgICAgICAgYm91bmRzOiBib3VuZHMsXG4gICAgICAgIGxhdGl0dWRlOiAoX2EgPSBtYXAuZ2V0Q2VudGVyKCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5sYXQoKSxcbiAgICAgICAgbG9uZ2l0dWRlOiAoX2IgPSBtYXAuZ2V0Q2VudGVyKCkpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5sbmcoKSxcbiAgICAgICAgdGlsdDogbWFwLmdldFRpbHQoKSxcbiAgICAgICAgem9vbTogbWFwLmdldFpvb20oKVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgbWFwLmFkZExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgdmFyIF9hLCBfYjtcbiAgICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzKCdvbk1hcENsaWNrJywge1xuICAgICAgICBtYXBJZDogbWFwSWQsXG4gICAgICAgIGxhdGl0dWRlOiAoX2EgPSBlLmxhdExuZykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmxhdCgpLFxuICAgICAgICBsb25naXR1ZGU6IChfYiA9IGUubGF0TG5nKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IubG5nKClcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzKCdvbk1hcFJlYWR5Jywge1xuICAgICAgbWFwSWQ6IG1hcElkXG4gICAgfSk7XG4gIH1cbiAgYnVpbGRNYXJrZXJPcHRzKG1hcmtlciwgbWFwKSB7XG4gICAgdmFyIF9hO1xuICAgIGlmICghdGhpcy5BZHZhbmNlZE1hcmtlckVsZW1lbnQgfHwgIXRoaXMuUGluRWxlbWVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXJrZXIgbGlicmFyeSBub3QgbG9hZGVkJyk7XG4gICAgfVxuICAgIGxldCBjb250ZW50ID0gdW5kZWZpbmVkO1xuICAgIGlmIChtYXJrZXIuaWNvblVybCkge1xuICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBpbWcuc3JjID0gbWFya2VyLmljb25Vcmw7XG4gICAgICBpZiAobWFya2VyLmljb25TaXplKSB7XG4gICAgICAgIGltZy5zdHlsZS53aWR0aCA9IGAke21hcmtlci5pY29uU2l6ZS53aWR0aH1weGA7XG4gICAgICAgIGltZy5zdHlsZS5oZWlnaHQgPSBgJHttYXJrZXIuaWNvblNpemUuaGVpZ2h0fXB4YDtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgPSBpbWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHBpbk9wdGlvbnMgPSB7XG4gICAgICAgIHNjYWxlOiAoX2EgPSBtYXJrZXIub3BhY2l0eSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogMSxcbiAgICAgICAgZ2x5cGg6IG1hcmtlci50aXRsZSxcbiAgICAgICAgYmFja2dyb3VuZDogbWFya2VyLnRpbnRDb2xvciA/IGByZ2IoJHttYXJrZXIudGludENvbG9yLnJ9LCAke21hcmtlci50aW50Q29sb3IuZ30sICR7bWFya2VyLnRpbnRDb2xvci5ifSlgIDogdW5kZWZpbmVkXG4gICAgICB9O1xuICAgICAgY29uc3QgcGluID0gbmV3IHRoaXMuUGluRWxlbWVudChwaW5PcHRpb25zKTtcbiAgICAgIGNvbnRlbnQgPSBwaW4uZWxlbWVudDtcbiAgICB9XG4gICAgY29uc3QgYWR2YW5jZWRNYXJrZXIgPSBuZXcgdGhpcy5BZHZhbmNlZE1hcmtlckVsZW1lbnQoe1xuICAgICAgcG9zaXRpb246IG1hcmtlci5jb29yZGluYXRlLFxuICAgICAgbWFwOiBtYXAsXG4gICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgdGl0bGU6IG1hcmtlci50aXRsZSxcbiAgICAgIGdtcERyYWdnYWJsZTogbWFya2VyLmRyYWdnYWJsZVxuICAgIH0pO1xuICAgIHJldHVybiBhZHZhbmNlZE1hcmtlcjtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUdBLFdBQU8sVUFBVSxTQUFTQSxPQUFNLEdBQUcsR0FBRztBQUNwQyxVQUFJLE1BQU0sRUFBRyxRQUFPO0FBQ3BCLFVBQUksS0FBSyxLQUFLLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVO0FBQzFELFlBQUksRUFBRSxnQkFBZ0IsRUFBRSxZQUFhLFFBQU87QUFDNUMsWUFBSSxRQUFRLEdBQUc7QUFDZixZQUFJLE1BQU0sUUFBUSxDQUFDLEdBQUc7QUFDcEIsbUJBQVMsRUFBRTtBQUNYLGNBQUksVUFBVSxFQUFFLE9BQVEsUUFBTztBQUMvQixlQUFLLElBQUksUUFBUSxRQUFRLElBQUksS0FBSSxDQUFDQSxPQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUcsUUFBTztBQUM1RCxpQkFBTztBQUFBLFFBQ1Q7QUFDQSxZQUFJLEVBQUUsZ0JBQWdCLE9BQVEsUUFBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFO0FBQzVFLFlBQUksRUFBRSxZQUFZLE9BQU8sVUFBVSxRQUFTLFFBQU8sRUFBRSxRQUFRLE1BQU0sRUFBRSxRQUFRO0FBQzdFLFlBQUksRUFBRSxhQUFhLE9BQU8sVUFBVSxTQUFVLFFBQU8sRUFBRSxTQUFTLE1BQU0sRUFBRSxTQUFTO0FBQ2pGLGVBQU8sT0FBTyxLQUFLLENBQUM7QUFDcEIsaUJBQVMsS0FBSztBQUNkLFlBQUksV0FBVyxPQUFPLEtBQUssQ0FBQyxFQUFFLE9BQVEsUUFBTztBQUM3QyxhQUFLLElBQUksUUFBUSxRQUFRLElBQUksS0FBSSxDQUFDLE9BQU8sVUFBVSxlQUFlLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFHLFFBQU87QUFDM0Ys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LEtBQUssRUFBRSxZQUFZLFFBQVEsT0FBTyxTQUFTLFNBQVMsR0FBRyxJQUFJO0FBQUEsVUFDdEUsWUFBWSxLQUFLLEVBQUUsWUFBWSxRQUFRLE9BQU8sU0FBUyxTQUFTLEdBQUcsSUFBSTtBQUFBLFFBQ3pFLENBQUM7QUFBQSxNQUNILENBQUM7QUFDRCxXQUFLLGdCQUFnQixjQUFjO0FBQUEsUUFDakM7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQUE7QUFBQSxFQUNBLGdCQUFnQixRQUFRLEtBQUs7QUFDM0IsUUFBSTtBQUNKLFFBQUksQ0FBQyxLQUFLLHlCQUF5QixDQUFDLEtBQUssWUFBWTtBQUNuRCxZQUFNLElBQUksTUFBTSwyQkFBMkI7QUFBQSxJQUM3QztBQUNBLFFBQUksVUFBVTtBQUNkLFFBQUksT0FBTyxTQUFTO0FBQ2xCLFlBQU0sTUFBTSxTQUFTLGNBQWMsS0FBSztBQUN4QyxVQUFJLE1BQU0sT0FBTztBQUNqQixVQUFJLE9BQU8sVUFBVTtBQUNuQixZQUFJLE1BQU0sUUFBUSxHQUFHLE9BQU8sU0FBUyxLQUFLO0FBQzFDLFlBQUksTUFBTSxTQUFTLEdBQUcsT0FBTyxTQUFTLE1BQU07QUFBQSxNQUM5QztBQUNBLGdCQUFVO0FBQUEsSUFDWixPQUFPO0FBQ0wsWUFBTSxhQUFhO0FBQUEsUUFDakIsUUFBUSxLQUFLLE9BQU8sYUFBYSxRQUFRLE9BQU8sU0FBUyxLQUFLO0FBQUEsUUFDOUQsT0FBTyxPQUFPO0FBQUEsUUFDZCxZQUFZLE9BQU8sWUFBWSxPQUFPLE9BQU8sVUFBVSxDQUFDLEtBQUssT0FBTyxVQUFVLENBQUMsS0FBSyxPQUFPLFVBQVUsQ0FBQyxNQUFNO0FBQUEsTUFDOUc7QUFDQSxZQUFNLE1BQU0sSUFBSSxLQUFLLFdBQVcsVUFBVTtBQUMxQyxnQkFBVSxJQUFJO0FBQUEsSUFDaEI7QUFDQSxVQUFNLGlCQUFpQixJQUFJLEtBQUssc0JBQXNCO0FBQUEsTUFDcEQsVUFBVSxPQUFPO0FBQUEsTUFDakI7QUFBQSxNQUNBO0FBQUEsTUFDQSxPQUFPLE9BQU87QUFBQSxNQUNkLGNBQWMsT0FBTztBQUFBLElBQ3ZCLENBQUM7QUFDRCxXQUFPO0FBQUEsRUFDVDtBQUNGOyIsIm5hbWVzIjpbImVxdWFsIiwieCIsInkiLCJlcXVhbCIsImNsdXN0ZXJPcHRpb25zIiwiTWFya2VyQ2x1c3RlcmVyRXZlbnRzIiwiZ29vZ2xlIl0sInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswLDEsMiwzLDRdfQ==
