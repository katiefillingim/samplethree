["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/storage/mechanism/iterablemechanism.js"],"~:js","goog.provide(\"goog.storage.mechanism.IterableMechanism\");\ngoog.require(\"goog.array\");\ngoog.require(\"goog.asserts\");\ngoog.require(\"goog.iter\");\ngoog.require(\"goog.storage.mechanism.Mechanism\");\ngoog.storage.mechanism.IterableMechanism = function() {\n  goog.storage.mechanism.IterableMechanism.base(this, \"constructor\");\n};\ngoog.inherits(goog.storage.mechanism.IterableMechanism, goog.storage.mechanism.Mechanism);\ngoog.storage.mechanism.IterableMechanism.prototype.getCount = function() {\n  var count = 0;\n  goog.iter.forEach(this.__iterator__(true), function(key) {\n    goog.asserts.assertString(key);\n    count++;\n  });\n  return count;\n};\ngoog.storage.mechanism.IterableMechanism.prototype.__iterator__ = goog.abstractMethod;\ngoog.storage.mechanism.IterableMechanism.prototype.clear = function() {\n  var keys = goog.iter.toArray(this.__iterator__(true));\n  var selfObj = this;\n  goog.array.forEach(keys, function(key) {\n    selfObj.remove(key);\n  });\n};\n","~:source","// Copyright 2011 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Interface for storing, retieving and scanning data using some\n * persistence mechanism.\n *\n */\n\ngoog.provide('goog.storage.mechanism.IterableMechanism');\n\ngoog.require('goog.array');\ngoog.require('goog.asserts');\ngoog.require('goog.iter');\ngoog.require('goog.storage.mechanism.Mechanism');\n\n\n\n/**\n * Interface for all iterable storage mechanisms.\n *\n * @constructor\n * @struct\n * @extends {goog.storage.mechanism.Mechanism}\n */\ngoog.storage.mechanism.IterableMechanism = function() {\n  goog.storage.mechanism.IterableMechanism.base(this, 'constructor');\n};\ngoog.inherits(\n    goog.storage.mechanism.IterableMechanism, goog.storage.mechanism.Mechanism);\n\n\n/**\n * Get the number of stored key-value pairs.\n *\n * Could be overridden in a subclass, as the default implementation is not very\n * efficient - it iterates over all keys.\n *\n * @return {number} Number of stored elements.\n */\ngoog.storage.mechanism.IterableMechanism.prototype.getCount = function() {\n  var count = 0;\n  goog.iter.forEach(this.__iterator__(true), function(key) {\n    goog.asserts.assertString(key);\n    count++;\n  });\n  return count;\n};\n\n\n/**\n * Returns an iterator that iterates over the elements in the storage. Will\n * throw goog.iter.StopIteration after the last element.\n *\n * @param {boolean=} opt_keys True to iterate over the keys. False to iterate\n *     over the values.  The default value is false.\n * @return {!goog.iter.Iterator} The iterator.\n */\ngoog.storage.mechanism.IterableMechanism.prototype.__iterator__ =\n    goog.abstractMethod;\n\n\n/**\n * Remove all key-value pairs.\n *\n * Could be overridden in a subclass, as the default implementation is not very\n * efficient - it iterates over all keys.\n */\ngoog.storage.mechanism.IterableMechanism.prototype.clear = function() {\n  // This converts the keys to an array first because otherwise\n  // removing while iterating results in unstable ordering of keys and\n  // can skip keys or terminate early.\n  var keys = goog.iter.toArray(this.__iterator__(true));\n  var selfObj = this;\n  goog.array.forEach(keys, function(key) { selfObj.remove(key); });\n};\n","~:compiled-at",1597165830901,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.storage.mechanism.iterablemechanism.js\",\n\"lineCount\":26,\n\"mappings\":\"AAoBAA,IAAAC,QAAA,CAAa,0CAAb,CAAA;AAEAD,IAAAE,QAAA,CAAa,YAAb,CAAA;AACAF,IAAAE,QAAA,CAAa,cAAb,CAAA;AACAF,IAAAE,QAAA,CAAa,WAAb,CAAA;AACAF,IAAAE,QAAA,CAAa,kCAAb,CAAA;AAWAF,IAAAG,QAAAC,UAAAC,kBAAA,GAA2CC,QAAQ,EAAG;AACpDN,MAAAG,QAAAC,UAAAC,kBAAAE,KAAA,CAA8C,IAA9C,EAAoD,aAApD,CAAA;AADoD,CAAtD;AAGAP,IAAAQ,SAAA,CACIR,IAAAG,QAAAC,UAAAC,kBADJ,EAC8CL,IAAAG,QAAAC,UAAAK,UAD9C,CAAA;AAYAT,IAAAG,QAAAC,UAAAC,kBAAAK,UAAAC,SAAA,GAA8DC,QAAQ,EAAG;AACvE,MAAIC,QAAQ,CAAZ;AACAb,MAAAc,KAAAC,QAAA,CAAkB,IAAAC,aAAA,CAAkB,IAAlB,CAAlB,EAA2C,QAAQ,CAACC,GAAD,CAAM;AACvDjB,QAAAkB,QAAAC,aAAA,CAA0BF,GAA1B,CAAA;AACAJ,SAAA,EAAA;AAFuD,GAAzD,CAAA;AAIA,SAAOA,KAAP;AANuE,CAAzE;AAkBAb,IAAAG,QAAAC,UAAAC,kBAAAK,UAAAM,aAAA,GACIhB,IAAAoB,eADJ;AAUApB,IAAAG,QAAAC,UAAAC,kBAAAK,UAAAW,MAAA,GAA2DC,QAAQ,EAAG;AAIpE,MAAIC,OAAOvB,IAAAc,KAAAU,QAAA,CAAkB,IAAAR,aAAA,CAAkB,IAAlB,CAAlB,CAAX;AACA,MAAIS,UAAU,IAAd;AACAzB,MAAA0B,MAAAX,QAAA,CAAmBQ,IAAnB,EAAyB,QAAQ,CAACN,GAAD,CAAM;AAAEQ,WAAAE,OAAA,CAAeV,GAAf,CAAA;AAAF,GAAvC,CAAA;AANoE,CAAtE;;\",\n\"sources\":[\"goog/storage/mechanism/iterablemechanism.js\"],\n\"sourcesContent\":[\"// Copyright 2011 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Interface for storing, retieving and scanning data using some\\n * persistence mechanism.\\n *\\n */\\n\\ngoog.provide('goog.storage.mechanism.IterableMechanism');\\n\\ngoog.require('goog.array');\\ngoog.require('goog.asserts');\\ngoog.require('goog.iter');\\ngoog.require('goog.storage.mechanism.Mechanism');\\n\\n\\n\\n/**\\n * Interface for all iterable storage mechanisms.\\n *\\n * @constructor\\n * @struct\\n * @extends {goog.storage.mechanism.Mechanism}\\n */\\ngoog.storage.mechanism.IterableMechanism = function() {\\n  goog.storage.mechanism.IterableMechanism.base(this, 'constructor');\\n};\\ngoog.inherits(\\n    goog.storage.mechanism.IterableMechanism, goog.storage.mechanism.Mechanism);\\n\\n\\n/**\\n * Get the number of stored key-value pairs.\\n *\\n * Could be overridden in a subclass, as the default implementation is not very\\n * efficient - it iterates over all keys.\\n *\\n * @return {number} Number of stored elements.\\n */\\ngoog.storage.mechanism.IterableMechanism.prototype.getCount = function() {\\n  var count = 0;\\n  goog.iter.forEach(this.__iterator__(true), function(key) {\\n    goog.asserts.assertString(key);\\n    count++;\\n  });\\n  return count;\\n};\\n\\n\\n/**\\n * Returns an iterator that iterates over the elements in the storage. Will\\n * throw goog.iter.StopIteration after the last element.\\n *\\n * @param {boolean=} opt_keys True to iterate over the keys. False to iterate\\n *     over the values.  The default value is false.\\n * @return {!goog.iter.Iterator} The iterator.\\n */\\ngoog.storage.mechanism.IterableMechanism.prototype.__iterator__ =\\n    goog.abstractMethod;\\n\\n\\n/**\\n * Remove all key-value pairs.\\n *\\n * Could be overridden in a subclass, as the default implementation is not very\\n * efficient - it iterates over all keys.\\n */\\ngoog.storage.mechanism.IterableMechanism.prototype.clear = function() {\\n  // This converts the keys to an array first because otherwise\\n  // removing while iterating results in unstable ordering of keys and\\n  // can skip keys or terminate early.\\n  var keys = goog.iter.toArray(this.__iterator__(true));\\n  var selfObj = this;\\n  goog.array.forEach(keys, function(key) { selfObj.remove(key); });\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"storage\",\"mechanism\",\"IterableMechanism\",\"goog.storage.mechanism.IterableMechanism\",\"base\",\"inherits\",\"Mechanism\",\"prototype\",\"getCount\",\"goog.storage.mechanism.IterableMechanism.prototype.getCount\",\"count\",\"iter\",\"forEach\",\"__iterator__\",\"key\",\"asserts\",\"assertString\",\"abstractMethod\",\"clear\",\"goog.storage.mechanism.IterableMechanism.prototype.clear\",\"keys\",\"toArray\",\"selfObj\",\"array\",\"remove\"]\n}\n"]