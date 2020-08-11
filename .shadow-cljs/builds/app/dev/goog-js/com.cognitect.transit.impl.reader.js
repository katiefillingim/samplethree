["^ ","~:resource-id",["~:shadow.build.classpath/resource","com/cognitect/transit/impl/reader.js"],"~:js","goog.provide(\"com.cognitect.transit.impl.reader\");\ngoog.require(\"com.cognitect.transit.impl.decoder\");\ngoog.require(\"com.cognitect.transit.caching\");\ngoog.scope(function() {\n  var reader = com.cognitect.transit.impl.reader, decoder = com.cognitect.transit.impl.decoder, caching = com.cognitect.transit.caching;\n  reader.JSONUnmarshaller = function Transit$JSONUnmarshaller(opts) {\n    this.decoder = new decoder.Decoder(opts);\n  };\n  reader.JSONUnmarshaller.prototype.unmarshal = function(str, cache) {\n    return this.decoder.decode(JSON.parse(str), cache);\n  };\n  reader.Reader = function Transit$Reader(unmarshaller, options) {\n    this.unmarshaller = unmarshaller;\n    this.options = options || {};\n    this.cache = this.options[\"cache\"] ? this.options[\"cache\"] : new caching.ReadCache;\n  };\n  reader.Reader.prototype.read = function(str) {\n    var ret = this.unmarshaller.unmarshal(str, this.cache);\n    this.cache.clear();\n    return ret;\n  };\n  reader.Reader.prototype[\"read\"] = reader.Reader.prototype.read;\n});\n","~:source","// Copyright 2014 Cognitect. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\ngoog.provide(\"com.cognitect.transit.impl.reader\");\ngoog.require(\"com.cognitect.transit.impl.decoder\");\ngoog.require(\"com.cognitect.transit.caching\");\n\ngoog.scope(function () {\n\n    var reader  = com.cognitect.transit.impl.reader,\n        decoder = com.cognitect.transit.impl.decoder,\n        caching = com.cognitect.transit.caching;\n\n    /**\n     * A JSON unmarshaller\n     * @constructor\n     */\n    reader.JSONUnmarshaller = function Transit$JSONUnmarshaller(opts) {\n        this.decoder = new decoder.Decoder(opts);\n    };\n\n    /**\n     * @param {string} str a JSON string\n     * @param {caching.ReadCache} cache a read cache\n     * @returns {*}\n     */\n    reader.JSONUnmarshaller.prototype.unmarshal = function (str, cache) {\n        return this.decoder.decode(JSON.parse(str), cache);\n    };\n\n    /**\n     * A transit reader\n     * @constructor\n     * @param {reader.JSONUnmarshaller} unmarshaller\n     * @param {Object=} options\n     */\n    reader.Reader = function Transit$Reader(unmarshaller, options) {\n        this.unmarshaller = unmarshaller;\n        this.options = options || {};\n        this.cache = this.options[\"cache\"] ? this.options[\"cache\"] : new caching.ReadCache();\n    };\n\n    /**\n     * @param {string} str a string to be read\n     * @returns {*}\n     */\n    reader.Reader.prototype.read = function (str) {\n        var ret = this.unmarshaller.unmarshal(str, this.cache)\n        this.cache.clear();\n        return ret;\n    };\n    reader.Reader.prototype[\"read\"] = reader.Reader.prototype.read;\n\n});\n","~:compiled-at",1597165830978,"~:source-map-json","{\n\"version\":3,\n\"file\":\"com.cognitect.transit.impl.reader.js\",\n\"lineCount\":24,\n\"mappings\":\"AAcAA,IAAAC,QAAA,CAAa,mCAAb,CAAA;AACAD,IAAAE,QAAA,CAAa,oCAAb,CAAA;AACAF,IAAAE,QAAA,CAAa,+BAAb,CAAA;AAEAF,IAAAG,MAAA,CAAW,QAAS,EAAG;AAEnB,MAAIC,SAAUC,GAAAC,UAAAC,QAAAC,KAAAJ,OAAd,EACIK,UAAUJ,GAAAC,UAAAC,QAAAC,KAAAC,QADd,EAEIC,UAAUL,GAAAC,UAAAC,QAAAG,QAFd;AAQAN,QAAAO,iBAAA,GAA0BC,QAASC,yBAAwB,CAACC,IAAD,CAAO;AAC9D,QAAAL,QAAA,GAAe,IAAIA,OAAAM,QAAJ,CAAoBD,IAApB,CAAf;AAD8D,GAAlE;AASAV,QAAAO,iBAAAK,UAAAC,UAAA,GAA8CC,QAAS,CAACC,GAAD,EAAMC,KAAN,CAAa;AAChE,WAAO,IAAAX,QAAAY,OAAA,CAAoBC,IAAAC,MAAA,CAAWJ,GAAX,CAApB,EAAqCC,KAArC,CAAP;AADgE,GAApE;AAUAhB,QAAAoB,OAAA,GAAgBC,QAASC,eAAc,CAACC,YAAD,EAAeC,OAAf,CAAwB;AAC3D,QAAAD,aAAA,GAAoBA,YAApB;AACA,QAAAC,QAAA,GAAeA,OAAf,IAA0B,EAA1B;AACA,QAAAR,MAAA,GAAa,IAAAQ,QAAA,CAAa,OAAb,CAAA,GAAwB,IAAAA,QAAA,CAAa,OAAb,CAAxB,GAAgD,IAAIlB,OAAAmB,UAAjE;AAH2D,GAA/D;AAUAzB,QAAAoB,OAAAR,UAAAc,KAAA,GAA+BC,QAAS,CAACZ,GAAD,CAAM;AAC1C,QAAIa,MAAM,IAAAL,aAAAV,UAAA,CAA4BE,GAA5B,EAAiC,IAAAC,MAAjC,CAAV;AACA,QAAAA,MAAAa,MAAA,EAAA;AACA,WAAOD,GAAP;AAH0C,GAA9C;AAKA5B,QAAAoB,OAAAR,UAAA,CAAwB,MAAxB,CAAA,GAAkCZ,MAAAoB,OAAAR,UAAAc,KAAlC;AA5CmB,CAAvB,CAAA;;\",\n\"sources\":[\"com/cognitect/transit/impl/reader.js\"],\n\"sourcesContent\":[\"// Copyright 2014 Cognitect. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\ngoog.provide(\\\"com.cognitect.transit.impl.reader\\\");\\ngoog.require(\\\"com.cognitect.transit.impl.decoder\\\");\\ngoog.require(\\\"com.cognitect.transit.caching\\\");\\n\\ngoog.scope(function () {\\n\\n    var reader  = com.cognitect.transit.impl.reader,\\n        decoder = com.cognitect.transit.impl.decoder,\\n        caching = com.cognitect.transit.caching;\\n\\n    /**\\n     * A JSON unmarshaller\\n     * @constructor\\n     */\\n    reader.JSONUnmarshaller = function Transit$JSONUnmarshaller(opts) {\\n        this.decoder = new decoder.Decoder(opts);\\n    };\\n\\n    /**\\n     * @param {string} str a JSON string\\n     * @param {caching.ReadCache} cache a read cache\\n     * @returns {*}\\n     */\\n    reader.JSONUnmarshaller.prototype.unmarshal = function (str, cache) {\\n        return this.decoder.decode(JSON.parse(str), cache);\\n    };\\n\\n    /**\\n     * A transit reader\\n     * @constructor\\n     * @param {reader.JSONUnmarshaller} unmarshaller\\n     * @param {Object=} options\\n     */\\n    reader.Reader = function Transit$Reader(unmarshaller, options) {\\n        this.unmarshaller = unmarshaller;\\n        this.options = options || {};\\n        this.cache = this.options[\\\"cache\\\"] ? this.options[\\\"cache\\\"] : new caching.ReadCache();\\n    };\\n\\n    /**\\n     * @param {string} str a string to be read\\n     * @returns {*}\\n     */\\n    reader.Reader.prototype.read = function (str) {\\n        var ret = this.unmarshaller.unmarshal(str, this.cache)\\n        this.cache.clear();\\n        return ret;\\n    };\\n    reader.Reader.prototype[\\\"read\\\"] = reader.Reader.prototype.read;\\n\\n});\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"scope\",\"reader\",\"com\",\"cognitect\",\"transit\",\"impl\",\"decoder\",\"caching\",\"JSONUnmarshaller\",\"reader.JSONUnmarshaller\",\"Transit$JSONUnmarshaller\",\"opts\",\"Decoder\",\"prototype\",\"unmarshal\",\"reader.JSONUnmarshaller.prototype.unmarshal\",\"str\",\"cache\",\"decode\",\"JSON\",\"parse\",\"Reader\",\"reader.Reader\",\"Transit$Reader\",\"unmarshaller\",\"options\",\"ReadCache\",\"read\",\"reader.Reader.prototype.read\",\"ret\",\"clear\"]\n}\n"]