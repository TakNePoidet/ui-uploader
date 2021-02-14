var UploaderUi = (function (exports) {
    'use strict';

    /*! *****************************************************************************
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
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    var isMergeableObject = function isMergeableObject(value) {
    	return isNonNullObject(value)
    		&& !isSpecial(value)
    };

    function isNonNullObject(value) {
    	return !!value && typeof value === 'object'
    }

    function isSpecial(value) {
    	var stringValue = Object.prototype.toString.call(value);

    	return stringValue === '[object RegExp]'
    		|| stringValue === '[object Date]'
    		|| isReactElement(value)
    }

    // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
    var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

    function isReactElement(value) {
    	return value.$$typeof === REACT_ELEMENT_TYPE
    }

    function emptyTarget(val) {
    	return Array.isArray(val) ? [] : {}
    }

    function cloneUnlessOtherwiseSpecified(value, options) {
    	return (options.clone !== false && options.isMergeableObject(value))
    		? deepmerge(emptyTarget(value), value, options)
    		: value
    }

    function defaultArrayMerge(target, source, options) {
    	return target.concat(source).map(function(element) {
    		return cloneUnlessOtherwiseSpecified(element, options)
    	})
    }

    function getMergeFunction(key, options) {
    	if (!options.customMerge) {
    		return deepmerge
    	}
    	var customMerge = options.customMerge(key);
    	return typeof customMerge === 'function' ? customMerge : deepmerge
    }

    function getEnumerableOwnPropertySymbols(target) {
    	return Object.getOwnPropertySymbols
    		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
    			return target.propertyIsEnumerable(symbol)
    		})
    		: []
    }

    function getKeys(target) {
    	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
    }

    function propertyIsOnObject(object, property) {
    	try {
    		return property in object
    	} catch(_) {
    		return false
    	}
    }

    // Protects from prototype poisoning and unexpected merging up the prototype chain.
    function propertyIsUnsafe(target, key) {
    	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
    		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
    			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
    }

    function mergeObject(target, source, options) {
    	var destination = {};
    	if (options.isMergeableObject(target)) {
    		getKeys(target).forEach(function(key) {
    			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    		});
    	}
    	getKeys(source).forEach(function(key) {
    		if (propertyIsUnsafe(target, key)) {
    			return
    		}

    		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
    			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
    		} else {
    			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    		}
    	});
    	return destination
    }

    function deepmerge(target, source, options) {
    	options = options || {};
    	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
    	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
    	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
    	// implementations can use it. The caller may not replace it.
    	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

    	var sourceIsArray = Array.isArray(source);
    	var targetIsArray = Array.isArray(target);
    	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

    	if (!sourceAndTargetTypesMatch) {
    		return cloneUnlessOtherwiseSpecified(source, options)
    	} else if (sourceIsArray) {
    		return options.arrayMerge(target, source, options)
    	} else {
    		return mergeObject(target, source, options)
    	}
    }

    deepmerge.all = function deepmergeAll(array, options) {
    	if (!Array.isArray(array)) {
    		throw new Error('first argument should be an array')
    	}

    	return array.reduce(function(prev, next) {
    		return deepmerge(prev, next, options)
    	}, {})
    };

    var deepmerge_1 = deepmerge;

    var cjs = deepmerge_1;

    var Dom = /** @class */ (function () {
        function Dom() {
        }
        Dom.append = function ($element) {
            var children = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                children[_i - 1] = arguments[_i];
            }
            for (var _a = 0, children_1 = children; _a < children_1.length; _a++) {
                var child = children_1[_a];
                if (child instanceof Node) {
                    $element.appendChild(child);
                }
                else {
                    $element.textContent = child ? child.toString() : '';
                }
            }
            return $element;
        };
        Dom.make = function (tagName, options) {
            var _a;
            var children = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                children[_i - 2] = arguments[_i];
            }
            var $element = document.createElement(tagName);
            if (options) {
                var _b = options.className, className = _b === void 0 ? [] : _b, _c = options.dataset, dataset = _c === void 0 ? {} : _c, attr = __rest(options, ["className", "dataset"]);
                if (Array.isArray(className)) {
                    (_a = $element.classList).add.apply(_a, className);
                }
                else if (className) {
                    $element.classList.add(className);
                }
                var attributes = attr;
                for (var attrName in attributes) {
                    if (Object.prototype.hasOwnProperty.call(attributes, attrName)) {
                        $element[attrName] = attributes[attrName];
                    }
                }
                Dom.setDateset($element, dataset);
            }
            Dom.append.apply(Dom, __spreadArrays([$element], children));
            return $element;
        };
        Dom.setDateset = function ($element, dataset) {
            for (var key in dataset) {
                if (Object.prototype.hasOwnProperty.call(dataset, key)) {
                    $element.dataset[key] = dataset[key];
                }
            }
        };
        return Dom;
    }());

    var make = Dom.make;
    var append = Dom.append;
    function checkAccept(type, accepts) {
        for (var _i = 0, _a = Array.isArray(accepts) ? accepts : [accepts]; _i < _a.length; _i++) {
            var accept = _a[_i];
            if (accept === '*' || type.match(accept)) {
                return true;
            }
        }
        return false;
    }
    function generateId(prefix) {
        if (prefix === void 0) { prefix = ''; }
        return "" + prefix + Math.floor(Math.random() * 1e8).toString(16);
    }
    function filesizeformat(bytes, binary, precision) {
        if (binary === void 0) { binary = false; }
        if (precision === void 0) { precision = 2; }
        var base = binary ? 1000 : 1024;
        var prefixes = [binary ? 'KiB' : 'kB', binary ? 'MiB' : 'MB', binary ? 'GiB' : 'GB', binary ? 'TiB' : 'TB', binary ? 'PiB' : 'PB', binary ? 'EiB' : 'EB', binary ? 'ZiB' : 'ZB', binary ? 'YiB' : 'YB'];
        if (!Number.isFinite(bytes)) {
            return [Infinity, 'B'];
        }
        if (bytes === 1) {
            return [1, 'B'];
        }
        if (bytes < base) {
            return [bytes, 'B'];
        }
        var index = Math.floor(Math.log(bytes) / Math.log(base));
        var size = parseFloat((bytes / Math.pow(base, Math.floor(index))).toFixed(precision));
        return [size, prefixes[index - 1]];
    }
    function extract(keys, obj) {
        var newObj = {};
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            newObj[key] = obj[key];
        }
        return newObj;
    }
    function errorTemplate(template, data) {
        var message = template;
        for (var _i = 0, _a = Object.keys(data); _i < _a.length; _i++) {
            var attribute = _a[_i];
            message = message.replace(new RegExp(":" + attribute, 'g'), data[attribute]);
        }
        return message;
    }
    function cleaerClassName(nodes, classLists) {
        var _a;
        for (var key in nodes) {
            if (Object.prototype.hasOwnProperty.call(nodes, key)) {
                var node = nodes[key];
                var classList = classLists[key] ? classLists[key] : '';
                classList = Array.isArray(classList) ? classList : [classList];
                (_a = node.classList).remove.apply(_a, classList);
            }
        }
    }
    function destroyHtml(nodes, classLists) {
        cleaerClassName(nodes, classLists);
        var container = nodes.container;
        for (var key in nodes) {
            if (Object.prototype.hasOwnProperty.call(nodes, key)) {
                var node = nodes[key];
                if (container !== node) {
                    node.remove();
                }
            }
        }
    }
    function reactive(obj, notify) {
        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                // const element = obj[key];
                notify(obj, key, obj[key]);
            }
        }
        return new Proxy(obj, {
            get: function (target, phrase) {
                // eslint-disable-next-line no-restricted-syntax
                if (phrase in target) {
                    return target[phrase];
                }
                return undefined;
            },
            set: function (target, prop, val) {
                var modif = false;
                if (val !== target[prop]) {
                    modif = true;
                }
                target[prop] = val;
                if (modif) {
                    notify(obj, prop, val);
                }
                return true;
            }
        });
    }
    function bind(target, propertyKey, descriptor) {
        if (!descriptor || (typeof descriptor.value !== 'function')) {
            throw new TypeError("Only methods can be decorated with @bind. <" + propertyKey + "> is not a method!");
        }
        return {
            configurable: true,
            get: function () {
                // @ts-ignore
                var bound = descriptor.value.bind(this);
                Object.defineProperty(this, propertyKey, {
                    value: bound,
                    configurable: true,
                    writable: true
                });
                return bound;
            }
        };
    }

    function isDirectory(entry) {
        return entry.isDirectory;
    }
    function isFile(entry) {
        return entry.isFile;
    }
    function readDirectoryReader(reader) {
        return new Promise(function (resolve) {
            reader.readEntries(function (entries) {
                resolve(entries);
            });
        });
    }
    function readEntryFile(entry) {
        return new Promise(function (resolve) {
            if (isFile(entry)) {
                entry.file(function (file) {
                    resolve(file);
                });
            }
        });
    }
    function getFilesAsync(dataTransfer) {
        var e_1, _a, e_2, _b;
        return __awaiter(this, void 0, void 0, function () {
            function readEntry(entry) {
                return new Promise(function (resolve) {
                    if (isFile(entry)) {
                        fileEntrys.push(entry);
                        resolve();
                    }
                });
            }
            function scanFiles(item) {
                var e_3, _a;
                return __awaiter(this, void 0, void 0, function () {
                    var directoryReader, entries, entries_1, entries_1_1, entry, e_3_1;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (!isDirectory(item)) return [3 /*break*/, 15];
                                directoryReader = item.createReader();
                                return [4 /*yield*/, readDirectoryReader(directoryReader)];
                            case 1:
                                entries = _b.sent();
                                _b.label = 2;
                            case 2:
                                _b.trys.push([2, 8, 9, 14]);
                                entries_1 = __asyncValues(entries);
                                _b.label = 3;
                            case 3: return [4 /*yield*/, entries_1.next()];
                            case 4:
                                if (!(entries_1_1 = _b.sent(), !entries_1_1.done)) return [3 /*break*/, 7];
                                entry = entries_1_1.value;
                                return [4 /*yield*/, scanFiles(entry)];
                            case 5:
                                _b.sent();
                                _b.label = 6;
                            case 6: return [3 /*break*/, 3];
                            case 7: return [3 /*break*/, 14];
                            case 8:
                                e_3_1 = _b.sent();
                                e_3 = { error: e_3_1 };
                                return [3 /*break*/, 14];
                            case 9:
                                _b.trys.push([9, , 12, 13]);
                                if (!(entries_1_1 && !entries_1_1.done && (_a = entries_1.return))) return [3 /*break*/, 11];
                                return [4 /*yield*/, _a.call(entries_1)];
                            case 10:
                                _b.sent();
                                _b.label = 11;
                            case 11: return [3 /*break*/, 13];
                            case 12:
                                if (e_3) throw e_3.error;
                                return [7 /*endfinally*/];
                            case 13: return [7 /*endfinally*/];
                            case 14: return [3 /*break*/, 17];
                            case 15:
                                if (!isFile(item)) return [3 /*break*/, 17];
                                return [4 /*yield*/, readEntry(item)];
                            case 16:
                                _b.sent();
                                _b.label = 17;
                            case 17: return [2 /*return*/];
                        }
                    });
                });
            }
            var fileEntrys, files, _c, _d, item, entry, file, e_1_1, fileEntrys_1, fileEntrys_1_1, entry, file, e_2_1;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        fileEntrys = [];
                        files = [];
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 8, 9, 14]);
                        _c = __asyncValues(Array.from(dataTransfer.items));
                        _e.label = 2;
                    case 2: return [4 /*yield*/, _c.next()];
                    case 3:
                        if (!(_d = _e.sent(), !_d.done)) return [3 /*break*/, 7];
                        item = _d.value;
                        if (!(item.kind === 'file')) return [3 /*break*/, 6];
                        if (!(typeof item.webkitGetAsEntry === 'function')) return [3 /*break*/, 5];
                        entry = item.webkitGetAsEntry();
                        return [4 /*yield*/, scanFiles(entry)];
                    case 4:
                        _e.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        file = item.getAsFile();
                        if (file) {
                            files.push(file);
                        }
                        _e.label = 6;
                    case 6: return [3 /*break*/, 2];
                    case 7: return [3 /*break*/, 14];
                    case 8:
                        e_1_1 = _e.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 14];
                    case 9:
                        _e.trys.push([9, , 12, 13]);
                        if (!(_d && !_d.done && (_a = _c.return))) return [3 /*break*/, 11];
                        return [4 /*yield*/, _a.call(_c)];
                    case 10:
                        _e.sent();
                        _e.label = 11;
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 13: return [7 /*endfinally*/];
                    case 14:
                        _e.trys.push([14, 20, 21, 26]);
                        fileEntrys_1 = __asyncValues(fileEntrys);
                        _e.label = 15;
                    case 15: return [4 /*yield*/, fileEntrys_1.next()];
                    case 16:
                        if (!(fileEntrys_1_1 = _e.sent(), !fileEntrys_1_1.done)) return [3 /*break*/, 19];
                        entry = fileEntrys_1_1.value;
                        return [4 /*yield*/, readEntryFile(entry)];
                    case 17:
                        file = _e.sent();
                        files.push(file);
                        _e.label = 18;
                    case 18: return [3 /*break*/, 15];
                    case 19: return [3 /*break*/, 26];
                    case 20:
                        e_2_1 = _e.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 26];
                    case 21:
                        _e.trys.push([21, , 24, 25]);
                        if (!(fileEntrys_1_1 && !fileEntrys_1_1.done && (_b = fileEntrys_1.return))) return [3 /*break*/, 23];
                        return [4 /*yield*/, _b.call(fileEntrys_1)];
                    case 22:
                        _e.sent();
                        _e.label = 23;
                    case 23: return [3 /*break*/, 25];
                    case 24:
                        if (e_2) throw e_2.error;
                        return [7 /*endfinally*/];
                    case 25: return [7 /*endfinally*/];
                    case 26: return [2 /*return*/, files];
                }
            });
        });
    }

    var StatusUploadApi;
    (function (StatusUploadApi) {
        StatusUploadApi["SUCCESS"] = "success";
        StatusUploadApi["ERROR"] = "error";
        StatusUploadApi["CANCEL"] = "cancel";
    })(StatusUploadApi || (StatusUploadApi = {}));
    var STATUS_UPLOADER;
    (function (STATUS_UPLOADER) {
        STATUS_UPLOADER["NOT_READY"] = "notReady";
        STATUS_UPLOADER["WAITING"] = "waiting";
        STATUS_UPLOADER["SELECTED"] = "selected";
        STATUS_UPLOADER["UPLOADING"] = "uploading";
        STATUS_UPLOADER["UPLOADED"] = "uploaded";
        STATUS_UPLOADER["DISABLED"] = "disabled";
    })(STATUS_UPLOADER || (STATUS_UPLOADER = {}));
    var FILE_STATUS;
    (function (FILE_STATUS) {
        FILE_STATUS["ADDED"] = "added";
        FILE_STATUS["PREVIEWS"] = "previews";
        FILE_STATUS["QUEUED"] = "queued";
        FILE_STATUS["UPLOADING"] = "uploading";
        FILE_STATUS["SUCCESS"] = "success";
        FILE_STATUS["ERROR"] = "error";
        FILE_STATUS["ERROR_UPLOAD"] = "errorUpload";
        FILE_STATUS["CANCELED"] = "canceled";
        // DELETED = 'deleted',
    })(FILE_STATUS || (FILE_STATUS = {}));
    var EventUploaderType;
    (function (EventUploaderType) {
        EventUploaderType["INIT"] = "init";
        EventUploaderType["SELECTED"] = "selected";
        EventUploaderType["UNLOADING"] = "unloading";
        EventUploaderType["LOADED"] = "loaded";
        EventUploaderType["ERROR"] = "error";
        EventUploaderType["UPLOADED"] = "uploaded";
        EventUploaderType["CANCEL"] = "cancel";
        EventUploaderType["REPLAY"] = "replay";
        EventUploaderType["BEFORE_DESTROYED"] = "beforeDestroyed";
        EventUploaderType["CLEAR"] = "clear";
        EventUploaderType["DESTROYED"] = "destroyed";
    })(EventUploaderType || (EventUploaderType = {}));

    // export interface FileManagerPrivateApi extends FileManagerApi {
    // 	_onSeleced(files: FileList): void;
    // }
    var FileManagerBase = /** @class */ (function () {
        function FileManagerBase(uploaderApi) {
            this.uploaderApi = uploaderApi;
            this._disabled = false;
        }
        Object.defineProperty(FileManagerBase.prototype, "disabled", {
            get: function () {
                return this._disabled;
            },
            set: function (value) {
                this._disabled = value;
            },
            enumerable: false,
            configurable: true
        });
        FileManagerBase.prototype.destroy = function () {
            throw new Error('Method not implemented.');
        };
        Object.defineProperty(FileManagerBase.prototype, "accept", {
            set: function (value) {
                throw new Error('Not prop accept');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FileManagerBase.prototype, "count", {
            set: function (value) {
                throw new Error('Not prop count');
            },
            enumerable: false,
            configurable: true
        });
        FileManagerBase.prototype.input = function () {
            throw new Error('Method not implemented.');
        };
        FileManagerBase.prototype.onSeleced = function (files) {
            this.uploaderApi.createEvent(EventUploaderType.SELECTED, { files: Array.from(files) });
        };
        return FileManagerBase;
    }());
    // export class FileManagerBase {
    // 	// protected _disabled: boolean = false;
    // 	constructor(protected _uploaderApi: UploaderPrivateApi) { }
    // 	public get disabled(): boolean {
    // 		return this._disabled;
    // 	}
    // 	public set disabled(value: boolean) {
    // 		this._disabled = value;
    // 	}
    // 	public destroy() {
    // 		throw new Error('Not prop destroy');
    // 	}
    // 	set accept(value: string | string[]) {
    // 		throw new Error('Not prop accept');
    // 	}
    // 	set count(value: number) {
    // 		throw new Error('Not prop count');
    // 	}
    // 	input() {
    // 		throw new Error('Not init method input');
    // 	};
    // }

    var defaultOptionDropzone = {
        accept: '*',
        count: 1,
        string: {
            buttonUplaod: 'Загрузить файл',
            dropzoneDrag: 'Перетащите файл сюда или загрузите вручную',
            dropzoneDrop: 'Отпустите кнопку мыши, чтобы прикрепить файл/лы'
        }
    };
    var Dropzone = /** @class */ (function (_super) {
        __extends(Dropzone, _super);
        function Dropzone($el, uploaderApi, option) {
            if (option === void 0) { option = {}; }
            var _this = _super.call(this, uploaderApi) || this;
            _this.listeners = [];
            _this.option = cjs(defaultOptionDropzone, option);
            _this.nodes = {
                container: $el,
                wrapper: make('div', { className: [_this.css.wrapper] }),
                dragZone: make('div', { className: [_this.css.dragZone] }),
                control: make('div', { className: [_this.css.control] }),
                button: make('button', { className: [_this.css.button], type: 'button' }, _this.option.string.buttonUplaod),
                input: make('input', {
                    className: [_this.css.input],
                    type: 'file',
                    accept: Array.isArray(_this.option.accept) ? _this.option.accept.join(', ') : _this.option.accept,
                    multiple: _this.option.count > 1
                })
            };
            _this.render();
            _this.listener();
            _this.state = reactive({
                textDropZone: _this.option.string.dropzoneDrag
            }, function (obj, prop, val) {
                switch (prop) {
                    case 'textDropZone':
                        _this.nodes.dragZone.dataset.text = val;
                        break;
                }
            });
            return _this;
        }
        Object.defineProperty(Dropzone.prototype, "css", {
            get: function () {
                return {
                    container: 'dropzone',
                    wrapper: 'dropzone__wrapper',
                    dragZone: 'dropzone__dragzone',
                    control: 'dropzone__control',
                    button: 'dropzone__button',
                    input: 'dropzone__input',
                    hide: 'dropzone--hide',
                    activeDragzone: 'dropzone--active-dragzone',
                    dropDragzone: 'dropzone--drop-dragzone'
                };
            },
            enumerable: false,
            configurable: true
        });
        Dropzone.prototype.listener = function () {
            var _this = this;
            this.addEvent(this.nodes.input, 'input', function (e) {
                var target = e.target;
                if (target && target.files) {
                    _this.onSeleced(Array.from(target.files));
                }
            });
            ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(function (eventName) {
                _this.addEvent(_this.nodes.wrapper, eventName, _this.preventDefaults);
            });
            ['dragover', 'dragenter'].forEach(function (eventName) {
                _this.addEvent(document.body, eventName, _this.bodyDragOverHandler);
                _this.addEvent(_this.nodes.dragZone, eventName, _this.dragOverHandler);
            });
            ['dragleave', 'dragend'].forEach(function (eventName) {
                _this.addEvent(document.body, eventName, _this.bodyDragLeaveHandler);
                _this.addEvent(_this.nodes.dragZone, eventName, _this.dragLeaveHandler);
            });
            ['drop'].forEach(function (eventName) {
                _this.addEvent(_this.nodes.dragZone, eventName, _this.dropHandler);
            });
            ['paste'].forEach(function (eventName) {
                _this.addEvent(document.body, eventName, _this.pasteHandler);
            });
        };
        Dropzone.prototype.onSeleced = function (files) {
            if (this.disabled !== true) {
                _super.prototype.onSeleced.call(this, files);
            }
        };
        Dropzone.prototype.render = function () {
            var _a = this.nodes, container = _a.container, wrapper = _a.wrapper, dragZone = _a.dragZone, input = _a.input, button = _a.button, control = _a.control;
            container.classList.add(this.css.container);
            append(control, input, button);
            append(wrapper, dragZone, control);
            append(container, wrapper);
            // this.status = true;
        };
        Dropzone.prototype.destroy = function () {
            for (var _i = 0, _a = this.listeners; _i < _a.length; _i++) {
                var id = _a[_i];
                this.uploaderApi.listeners.offById(id);
            }
            destroyHtml(this.nodes, this.css);
        };
        Dropzone.prototype.addEvent = function ($el, type, handler) {
            this.listeners.push(this.uploaderApi.listeners.on($el, type, handler));
        };
        Dropzone.prototype.removeEvent = function ($el, type, handler) {
            var event = this.uploaderApi.listeners.findOne($el, type, handler);
            if (!event) {
                return;
            }
            var index = this.listeners.findIndex(function (eventId) { return eventId === event.id; });
            this.uploaderApi.listeners.offById(event.id);
            this.listeners = this.listeners.slice(index, 1);
        };
        Object.defineProperty(Dropzone.prototype, "disabled", {
            set: function (value) {
                this.nodes.container.classList.toggle(this.css.hide, value);
                this._disabled = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Dropzone.prototype, "accept", {
            set: function (value) {
                this.option.accept = value;
                var input = this.nodes.input;
                input.accept = Array.isArray(this.option.accept) ? this.option.accept.join(', ') : this.option.accept;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Dropzone.prototype, "count", {
            set: function (value) {
                this.option.count = value;
                var input = this.nodes.input;
                input.multiple = this.option.count > 1;
            },
            enumerable: false,
            configurable: true
        });
        Dropzone.prototype.input = function () {
            if (this.disabled !== true) {
                this.nodes.input.click();
            }
        };
        Dropzone.prototype.preventDefaults = function (e) {
            e.preventDefault();
            // e.stopPropagation();
        };
        Dropzone.prototype.bodyDragOverHandler = function (e) {
            this.toogleDropzone(true);
        };
        Dropzone.prototype.bodyDragLeaveHandler = function (e) {
            var relatedTarget = e.relatedTarget;
            if (!document.body.contains(relatedTarget)) {
                this.toogleDropzone(false);
            }
        };
        Dropzone.prototype.dragOverHandler = function () {
            this.toogleDropDropzone();
        };
        Dropzone.prototype.dragLeaveHandler = function (e) {
            var relatedTarget = e.relatedTarget;
            if (!this.nodes.dragZone.contains(relatedTarget)) {
                this.toogleDropDropzone(false);
            }
        };
        Dropzone.prototype.dropHandler = function (event) {
            return __awaiter(this, void 0, void 0, function () {
                var files, _i, _a, file;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.toogleDropzone(false);
                            this.toogleDropDropzone(false);
                            files = [];
                            _i = 0;
                            return [4 /*yield*/, getFilesAsync(event.dataTransfer)];
                        case 1:
                            _a = _b.sent();
                            _b.label = 2;
                        case 2:
                            if (!(_i < _a.length)) return [3 /*break*/, 4];
                            file = _a[_i];
                            files.push(file);
                            _b.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 2];
                        case 4:
                            this.onSeleced(files);
                            return [2 /*return*/];
                    }
                });
            });
        };
        Dropzone.prototype.pasteHandler = function (event) {
            return __awaiter(this, void 0, void 0, function () {
                var files, _i, _a, file;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            event.preventDefault();
                            files = [];
                            _i = 0;
                            return [4 /*yield*/, getFilesAsync(event.clipboardData)];
                        case 1:
                            _a = _b.sent();
                            _b.label = 2;
                        case 2:
                            if (!(_i < _a.length)) return [3 /*break*/, 4];
                            file = _a[_i];
                            files.push(file);
                            _b.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 2];
                        case 4:
                            this.onSeleced(files);
                            return [2 /*return*/];
                    }
                });
            });
        };
        Dropzone.prototype.toogleDropzone = function (show) {
            if (show === void 0) { show = true; }
            this.state.textDropZone = this.option.string.dropzoneDrop;
            this.nodes.container.classList.toggle(this.css.activeDragzone, show);
        };
        Dropzone.prototype.toogleDropDropzone = function (active) {
            if (active === void 0) { active = true; }
            this.state.textDropZone = active ? this.option.string.dropzoneDrop : this.option.string.dropzoneDrag;
            this.nodes.container.classList.toggle(this.css.dropDragzone, active);
        };
        __decorate([
            bind
        ], Dropzone.prototype, "bodyDragOverHandler", null);
        __decorate([
            bind
        ], Dropzone.prototype, "bodyDragLeaveHandler", null);
        __decorate([
            bind
        ], Dropzone.prototype, "dragOverHandler", null);
        __decorate([
            bind
        ], Dropzone.prototype, "dragLeaveHandler", null);
        __decorate([
            bind
        ], Dropzone.prototype, "dropHandler", null);
        __decorate([
            bind
        ], Dropzone.prototype, "pasteHandler", null);
        __decorate([
            bind
        ], Dropzone.prototype, "toogleDropzone", null);
        __decorate([
            bind
        ], Dropzone.prototype, "toogleDropDropzone", null);
        return Dropzone;
    }(FileManagerBase));

    var CancelIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 357 357">  <defs/>  <path fill="currentColor"  d="M357 35.7L321.3 0 178.5 142.8 35.7 0 0 35.7l142.8 142.8L0 321.3 35.7 357l142.8-142.8L321.3 357l35.7-35.7-142.8-142.8z"/></svg>';

    var ReplayIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 497.25 497.25">  <defs/>  <path fill="currentColor" d="M248.625 89.25V0l-127.5 127.5 127.5 127.5V140.25c84.15 0 153 68.85 153 153s-68.85 153-153 153-153-68.85-153-153h-51c0 112.2 91.8 204 204 204s204-91.8 204-204-91.8-204-204-204z"/></svg>';

    var PreviewItem = /** @class */ (function () {
        function PreviewItem(_file, id, uploaderApi) {
            this._file = _file;
            this.id = id;
            this.uploaderApi = uploaderApi;
            this._error = null;
            this._progress = 0;
            this.listeners = [];
            this._isReplay = false;
            this._status = FILE_STATUS.ADDED;
            this.nodes = {
                container: make('div', { className: this.css.container }),
                information: make('div', { className: this.css.information }),
                progressContainer: make('div', { className: this.css.progressContainer }),
                progressLine: make('div', { className: this.css.progressLine }),
                actions: make('div', { className: this.css.actions }),
                actionCancel: make('button', { className: this.css.actionCancel }),
                actionReplay: make('button', { className: this.css.actionReplay }),
                error: make('div', { className: this.css.error })
            };
        }
        Object.defineProperty(PreviewItem.prototype, "css", {
            get: function () {
                return {
                    container: 'preview-item',
                    // progress: 'preview-item__progress',
                    information: 'preview-item__information',
                    title: 'preview-item__title',
                    size: 'preview-item__size',
                    type: 'preview-item__type',
                    actions: 'preview-item__actions',
                    actionCancel: ['preview-item-action', 'preview-item-action-cancel'],
                    actionReplay: ['preview-item-action', 'preview-item-action-replay'],
                    show: 'preview-item--show',
                    error: 'preview-item__error',
                    progressContainer: ['preview-item__progress', 'preview-item-progress'],
                    progressLine: 'preview-item-progress__line',
                    progressProcessing: 'preview-item-progress--processing',
                    isReplay: ['preview-item--replay']
                };
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PreviewItem.prototype, "file", {
            get: function () {
                return this._file;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PreviewItem.prototype, "error", {
            set: function (value) {
                this._error = value;
                if (value.length > 0) {
                    this.status = FILE_STATUS.ERROR;
                }
                this.nodes.error.innerText = this._error;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PreviewItem.prototype, "isReplay", {
            get: function () {
                return this._isReplay;
            },
            set: function (value) {
                this._isReplay = value;
                var className = Array.isArray(this.css.isReplay) ? this.css.isReplay[0] : this.css.isReplay;
                this.nodes.container.classList.toggle(className, value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PreviewItem.prototype, "status", {
            get: function () {
                return this._status;
            },
            set: function (value) {
                this._status = value;
                for (var key in FILE_STATUS) {
                    if (Object.prototype.hasOwnProperty.call(FILE_STATUS, key)) {
                        // @ts-ignore
                        var status_1 = FILE_STATUS[key];
                        this.nodes.container.classList.toggle(this.css.container + "--" + status_1.replace(/[A-Z]/g, function (m) { return "-" + m.toLowerCase(); }), this.status === status_1);
                    }
                }
                this.nodes.progressContainer.classList.remove(this.css.progressProcessing);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PreviewItem.prototype, "progress", {
            set: function (value) {
                var progressLine = this.nodes.progressLine;
                progressLine.style.width = value + "%";
                this._progress = value;
                if (value === 100) {
                    this.nodes.progressContainer.classList.add(this.css.progressProcessing);
                }
            },
            enumerable: false,
            configurable: true
        });
        PreviewItem.prototype.destroy = function () {
            for (var _i = 0, _a = this.listeners; _i < _a.length; _i++) {
                var id = _a[_i];
                this.uploaderApi.listeners.offById(id);
            }
            destroyHtml(this.nodes, this.css);
            this.nodes.container.remove();
        };
        PreviewItem.prototype.addEvent = function ($el, type, handler) {
            this.listeners.push(this.uploaderApi.listeners.on($el, type, handler));
        };
        PreviewItem.prototype.removeEvent = function ($el, type, handler) {
            var event = this.uploaderApi.listeners.findOne($el, type, handler);
            if (!event) {
                return;
            }
            var index = this.listeners.findIndex(function (eventId) { return eventId === event.id; });
            this.uploaderApi.listeners.offById(event.id);
            this.listeners = this.listeners.slice(index, 1);
        };
        PreviewItem.prototype.render = function () {
            var _this = this;
            var container = this.nodes.container;
            var _a = this.nodes, information = _a.information, error = _a.error;
            var _b = this.file, name = _b.name, size = _b.size;
            var type = /[^.]+$/.exec(this.file.type);
            this.nodes.type = make('div', { className: this.css.type }, make('span', null, type ? type.toString() : 'unknown'));
            this.nodes.title = make('div', { className: this.css.title }, name);
            this.nodes.size = make('div', { className: this.css.size }, filesizeformat(size).join(' '));
            // this.nodes.a = make('div', { className: this.css.size }, filesizeformat(size).join(' '));
            var _c = this.nodes, actions = _c.actions, actionCancel = _c.actionCancel, actionReplay = _c.actionReplay;
            actionCancel.innerHTML = CancelIcon;
            actionReplay.innerHTML = ReplayIcon;
            append(actions, actionCancel, actionReplay);
            append(information, this.nodes.type, this.nodes.title, this.nodes.size, actions);
            this.addEvent(actionCancel, 'click', function (event) {
                event.preventDefault();
                if ([FILE_STATUS.ADDED, FILE_STATUS.QUEUED, FILE_STATUS.UPLOADING].includes(_this.status)) {
                    _this.uploaderApi.createEvent(EventUploaderType.CANCEL, { preview: _this });
                    _this.status = FILE_STATUS.CANCELED;
                    _this.isReplay = true;
                }
            });
            this.addEvent(actionReplay, 'click', function (event) {
                event.preventDefault();
                if (_this.isReplay) {
                    _this.status = FILE_STATUS.QUEUED;
                    _this.progress = 0;
                    _this.uploaderApi.createEvent(EventUploaderType.REPLAY, { preview: _this });
                    _this.error = '';
                    _this.isReplay = false;
                }
            });
            append(container, information);
            append(container, error);
            var _d = this.nodes, progressContainer = _d.progressContainer, progressLine = _d.progressLine;
            append(progressContainer, progressLine);
            append(container, progressContainer);
            this.progress = 0;
            return container;
        };
        PreviewItem.prototype.show = function () {
            this.nodes.container.classList.add(this.css.show);
        };
        return PreviewItem;
    }());

    var Previews = /** @class */ (function () {
        function Previews($container, uploaderApi) {
            this.$container = $container;
            this.uploaderApi = uploaderApi;
            this.items = new Map();
        }
        Previews.prototype.newPreview = function (file) {
            var preview = new PreviewItem(file, generateId('file'), this.uploaderApi);
            this.items.set(preview.id, preview);
            return preview;
        };
        Previews.prototype.render = function (preview) {
            append(this.$container, preview.render());
            setTimeout(function () { return preview.show(); }, 0);
            if (FILE_STATUS.ADDED === preview.status) {
                preview.status = FILE_STATUS.QUEUED;
            }
        };
        Previews.prototype.destroy = function () {
            this.clear();
        };
        Previews.prototype.removePreviewItem = function (id) {
            var preview = this.items.get(id);
            if (preview) {
                preview.destroy();
                this.items.delete(id);
            }
        };
        Previews.prototype.clear = function () {
            var e_1, _a;
            return __awaiter(this, void 0, void 0, function () {
                var _b, _c, preview, e_1_1;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _d.trys.push([0, 5, 6, 11]);
                            _b = __asyncValues(this.items.values());
                            _d.label = 1;
                        case 1: return [4 /*yield*/, _b.next()];
                        case 2:
                            if (!(_c = _d.sent(), !_c.done)) return [3 /*break*/, 4];
                            preview = _c.value;
                            preview.destroy();
                            _d.label = 3;
                        case 3: return [3 /*break*/, 1];
                        case 4: return [3 /*break*/, 11];
                        case 5:
                            e_1_1 = _d.sent();
                            e_1 = { error: e_1_1 };
                            return [3 /*break*/, 11];
                        case 6:
                            _d.trys.push([6, , 9, 10]);
                            if (!(_c && !_c.done && (_a = _b.return))) return [3 /*break*/, 8];
                            return [4 /*yield*/, _a.call(_b)];
                        case 7:
                            _d.sent();
                            _d.label = 8;
                        case 8: return [3 /*break*/, 10];
                        case 9:
                            if (e_1) throw e_1.error;
                            return [7 /*endfinally*/];
                        case 10: return [7 /*endfinally*/];
                        case 11:
                            this.items.clear();
                            return [2 /*return*/];
                    }
                });
            });
        };
        return Previews;
    }());

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    var DefaultUploadConstructors = /** @class */ (function () {
        function DefaultUploadConstructors(file, previewApi) {
            this.file = file;
            this.previewApi = previewApi;
            this.interval = null;
        }
        DefaultUploadConstructors.prototype.send = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var percent = 0;
                // @ts-ignore
                _this.interval = setInterval(function () {
                    percent++;
                    _this.previewApi.updatePercent(percent);
                    if (percent === 100) {
                        var reader = new FileReader();
                        clearInterval(_this.interval);
                        reader.onload = function (e) {
                            setTimeout(function () {
                                if (getRndInteger(1, 100) < 50) {
                                    resolve(e.target.result);
                                }
                                else {
                                    reject(new Error('Ошибка загрузки'));
                                }
                            }, 1000);
                        };
                        reader.readAsDataURL(_this.file);
                    }
                }, 0);
            });
        };
        DefaultUploadConstructors.prototype.destroy = function () {
            if (this.interval) {
                clearInterval(this.interval);
            }
        };
        return DefaultUploadConstructors;
    }());

    var Listeners = /** @class */ (function () {
        function Listeners() {
            this.listeners = [];
        }
        Listeners.prototype.on = function (element, eventType, handler) {
            var id = generateId('event');
            var assignedEventData = {
                id: id,
                element: element,
                eventType: eventType,
                handler: handler
            };
            var alreadyExist = this.findOne(element, eventType, handler);
            if (alreadyExist) {
                return alreadyExist.id;
            }
            this.listeners.push(assignedEventData);
            element.addEventListener(eventType, handler);
            return id;
        };
        Listeners.prototype.off = function (element, eventType, handler) {
            var _this = this;
            var existingListeners = this.findAll(element, eventType, handler);
            existingListeners.forEach(function (listener, i) {
                var index = _this.listeners.indexOf(existingListeners[i]);
                if (index > 0) {
                    _this.listeners.splice(index, 1);
                    listener.element.removeEventListener(listener.eventType, listener.handler);
                }
            });
        };
        Listeners.prototype.offById = function (id) {
            var listener = this.findById(id);
            if (!listener) {
                return;
            }
            listener.element.removeEventListener(listener.eventType, listener.handler);
        };
        Listeners.prototype.findOne = function (element, eventType, handler) {
            var foundListeners = this.findAll(element, eventType, handler);
            return foundListeners.length > 0 ? foundListeners[0] : null;
        };
        Listeners.prototype.findAll = function (element, eventType, handler) {
            var found;
            var foundByEventTargets = element ? this.findByEventTarget(element) : [];
            if (element && eventType && handler) {
                found = foundByEventTargets.filter(function (event) { return event.eventType === eventType && event.handler === handler; });
            }
            else if (element && eventType) {
                found = foundByEventTargets.filter(function (event) { return event.eventType === eventType; });
            }
            else {
                found = foundByEventTargets;
            }
            return found;
        };
        Listeners.prototype.findByEventTarget = function (element) {
            return this.listeners.filter(function (listener) {
                if (listener.element === element) {
                    return listener;
                }
                return false;
            });
        };
        Listeners.prototype.findById = function (id) {
            return this.listeners.find(function (listener) { return listener.id === id; });
        };
        Listeners.prototype.removeAll = function () {
            this.listeners.forEach(function (current) {
                current.element.removeEventListener(current.eventType, current.handler);
            });
            this.listeners = [];
        };
        Listeners.prototype.destroy = function () {
            this.removeAll();
        };
        return Listeners;
    }());

    var Emitter = /** @class */ (function () {
        function Emitter($el, id) {
            if (id === void 0) { id = generateId('uploader'); }
            this.$el = $el;
            this.id = id;
            this.listeners = new Listeners();
            this.callbacks = [];
            this.listeners.on(this.$el, id, this.dispatch.bind(this));
        }
        Emitter.prototype.on = function (event, handler) {
            this.callbacks.push({ event: event, handler: handler });
            return this;
        };
        Emitter.prototype.off = function (event, handler) {
            var index = this.callbacks.findIndex(function (item) { return item.event === event && item.handler === handler; });
            this.callbacks.slice(index, 1);
            return this;
        };
        Emitter.prototype.dispatch = function (event) {
            var _a = event.detail, type = _a.type, values = _a.values;
            this.callbacks.forEach(function (item) {
                if (item.event === type) {
                    item.handler(values);
                }
            });
        };
        Emitter.prototype.createEvent = function (type, values) {
            // console.log(type, values);
            var event = new CustomEvent("" + this.id, { detail: { type: type, values: values } });
            this.$el.dispatchEvent(event);
        };
        __decorate([
            bind
        ], Emitter.prototype, "createEvent", null);
        return Emitter;
    }());

    var defaultOption = cjs(defaultOptionDropzone, {
        fileSize: 1048576 * 15,
        errors: {
            accept: 'Должно быть файлом одного из следующих типов: :values.',
            fileSize: 'Размер файла не может быть больше :max.'
        },
        upload: DefaultUploadConstructors
    });
    var Uploader = /** @class */ (function (_super) {
        __extends(Uploader, _super);
        function Uploader($el, option) {
            if (option === void 0) { option = {}; }
            var _this = _super.call(this, $el) || this;
            _this.nodes = {};
            _this._files = new Map();
            _this._disabled = false;
            _this._status = STATUS_UPLOADER.NOT_READY;
            _this._multiple = false;
            _this.option = cjs(defaultOption, option);
            _this.nodes.container = $el;
            var api = _this.api;
            var wrapper = make('div', { className: _this.css.wrapper });
            var preview = make('div', { className: _this.css.preview });
            var fileManager = make('div', { className: _this.css.fileManager });
            _this._multiple = _this.option.count > 1;
            _this.previews = new Previews(preview, api);
            _this.fileManager = new Dropzone(fileManager, api, extract(['accept', 'string', 'count'], _this.option));
            _this.nodes.wrapper = wrapper;
            _this.nodes.preview = preview;
            _this.nodes.fileManager = fileManager;
            _this.on(EventUploaderType.SELECTED, function (_a) {
                var files = _a.files;
                _this.seleced(files);
            });
            setTimeout(function () { return _this.createEvent(EventUploaderType.INIT); }, 0);
            _this.render();
            _this._status = STATUS_UPLOADER.WAITING;
            _this.on(EventUploaderType.REPLAY, function () {
                if (_this.status === STATUS_UPLOADER.WAITING) {
                    _this.uploaders();
                }
            });
            return _this;
        }
        Object.defineProperty(Uploader.prototype, "css", {
            get: function () {
                return {
                    container: 'uploader',
                    wrapper: 'uploader__wrapper',
                    fileManager: 'uploader__file-manager',
                    preview: 'uploader__preview',
                    disabled: 'uploader--disabled'
                };
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Uploader.prototype, "api", {
            get: function () {
                var self = this;
                return {
                    on: function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        self.on.apply(self, args);
                    },
                    off: function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        self.off.apply(self, args);
                    },
                    listeners: this.listeners,
                    createEvent: this.createEvent,
                };
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Uploader.prototype, "files", {
            get: function () {
                return this._files;
            },
            enumerable: false,
            configurable: true
        });
        Uploader.prototype.addFile = function (id, value) {
            if (this.option.count === 1) {
                this.files.clear();
            }
            this.files.set(id, value);
        };
        Uploader.prototype.render = function () {
            var _a = this.nodes, container = _a.container, wrapper = _a.wrapper, preview = _a.preview, fileManager = _a.fileManager;
            container.classList.add(this.css.container);
            append(wrapper, preview, fileManager);
            append(container, wrapper);
        };
        Uploader.prototype.seleced = function (files) {
            return __awaiter(this, void 0, void 0, function () {
                var file, preview;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(this.status === STATUS_UPLOADER.WAITING)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.previews.clear()];
                        case 1:
                            _a.sent();
                            this.files.clear();
                            if (this._multiple) {
                                files = files.slice(0, this.option.count);
                            }
                            else {
                                files = files.slice(0, 1);
                            }
                            this._status = STATUS_UPLOADER.SELECTED;
                            _a.label = 2;
                        case 2:
                            if (files.length < 1) {
                                this.uploaders();
                                return [2 /*return*/];
                            }
                            this.fileManager.disabled = true;
                            file = files.shift();
                            preview = this.previews.newPreview(file);
                            if (!checkAccept(preview.file.type, this.option.accept)) {
                                preview.error = errorTemplate(this.option.errors.accept, {
                                    values: Array.isArray(this.option.accept) ? this.option.accept.join(',') : this.option.accept
                                });
                            }
                            if (preview.file.size > this.option.fileSize) {
                                preview.error = errorTemplate(this.option.errors.fileSize, {
                                    max: filesizeformat(this.option.fileSize).join('')
                                });
                            }
                            if (preview.status === FILE_STATUS.ERROR) {
                                this.createEvent(EventUploaderType.ERROR, { error: new Error(preview.error), preview: preview });
                            }
                            this.previews.render(preview);
                            return [4 /*yield*/, this.seleced(files)];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        Uploader.prototype.uploaders = function () {
            return __awaiter(this, void 0, void 0, function () {
                var preview, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            preview = Array.from(this.previews.items.values()).find(function (_a) {
                                var status = _a.status;
                                return status === FILE_STATUS.QUEUED;
                            });
                            if (!preview) return [3 /*break*/, 3];
                            preview.status = FILE_STATUS.UPLOADING;
                            return [4 /*yield*/, this.uplaodItem(preview)];
                        case 1:
                            response = _a.sent();
                            if (response.status === StatusUploadApi.ERROR) {
                                preview.error = response.error.message;
                                preview.isReplay = true;
                                this.createEvent(EventUploaderType.ERROR, { error: new Error(response.error.message), preview: preview });
                            }
                            if (response.status === StatusUploadApi.SUCCESS) {
                                this.addFile(preview.id, response.result);
                                preview.status = FILE_STATUS.SUCCESS;
                                this.createEvent(EventUploaderType.LOADED, {
                                    file: response.result
                                });
                            }
                            return [4 /*yield*/, this.uploaders()];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            this.createEvent(EventUploaderType.UPLOADED, { value: this.value });
                            this._status = STATUS_UPLOADER.WAITING;
                            this.enabledFileManaged();
                            _a.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        Uploader.prototype.uplaodItem = function (preview) {
            var _this = this;
            return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                var UploadConstructor, uplaodApi, cancel, response, result, error_1;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            UploadConstructor = this.option.upload;
                            uplaodApi = new UploadConstructor(preview.file, {
                                updatePercent: function (percent) {
                                    preview.progress = percent;
                                    _this.createEvent(EventUploaderType.UNLOADING, {
                                        preview: preview
                                    });
                                }
                            });
                            cancel = function () {
                                uplaodApi.destroy();
                                resolve({ status: StatusUploadApi.CANCEL });
                            };
                            this.on(EventUploaderType.BEFORE_DESTROYED, cancel);
                            this.on(EventUploaderType.CANCEL, cancel);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, uplaodApi.send()];
                        case 2:
                            result = _a.sent();
                            response = { status: StatusUploadApi.SUCCESS, result: result };
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _a.sent();
                            response = { status: StatusUploadApi.ERROR, error: error_1 };
                            return [3 /*break*/, 4];
                        case 4:
                            this.off(EventUploaderType.BEFORE_DESTROYED, uplaodApi.destroy);
                            resolve(response);
                            return [2 /*return*/];
                    }
                });
            }); });
        };
        Uploader.prototype.enabledFileManaged = function () {
            this.fileManager.disabled = false;
        };
        Uploader.prototype.destroy = function () {
            this.createEvent(EventUploaderType.BEFORE_DESTROYED);
            this.fileManager.destroy();
            this.previews.destroy();
            this.listeners.destroy();
            destroyHtml(this.nodes, this.css);
        };
        Uploader.prototype.setDisabled = function (value) {
            this.disabled = value;
            this.nodes.container.classList.toggle(this.css.disabled, value);
        };
        Object.defineProperty(Uploader.prototype, "disabled", {
            get: function () {
                return this._disabled;
            },
            set: function (value) {
                this.setDisabled(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Uploader.prototype, "accept", {
            set: function (value) {
                if (this.status !== STATUS_UPLOADER.WAITING) {
                    throw new Error();
                }
                this.option.accept = value;
                this.fileManager.accept = this.option.accept;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Uploader.prototype, "count", {
            get: function () {
                return this.option.count;
            },
            set: function (value) {
                if (this.status !== STATUS_UPLOADER.WAITING) {
                    throw new Error();
                }
                this.option.count = value;
                this._multiple = this.option.count > 1;
                this.fileManager.count = this.option.count;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Uploader.prototype, "upload", {
            set: function (value) {
                if (this.status !== STATUS_UPLOADER.WAITING) {
                    throw new Error();
                }
                this.option.upload = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Uploader.prototype, "fileSize", {
            set: function (value) {
                if (this.status !== STATUS_UPLOADER.WAITING) {
                    throw new Error();
                }
                this.option.fileSize = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Uploader.prototype, "status", {
            get: function () {
                return this._status;
            },
            enumerable: false,
            configurable: true
        });
        Uploader.prototype.input = function () {
            this.fileManager.input();
        };
        Object.defineProperty(Uploader.prototype, "value", {
            get: function () {
                var files = Array.from(this.files.entries()).map((function (_a) {
                    var file = _a[1];
                    return file;
                }));
                return this._multiple ? files : files.pop();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Uploader.prototype, "multiple", {
            get: function () {
                return this._multiple;
            },
            set: function (value) {
                this.count = value ? 2 : 1;
            },
            enumerable: false,
            configurable: true
        });
        Uploader.prototype.clear = function () {
            this.previews.clear();
            this.createEvent(EventUploaderType.CLEAR);
        };
        return Uploader;
    }(Emitter));

    exports.DefaultUploadConstructors = DefaultUploadConstructors;
    exports.default = Uploader;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}));
//# sourceMappingURL=index.es5.js.map
