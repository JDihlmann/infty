/* eslint-disable */
var $MODULE_NAME = (() => {
	var _scriptDir =
		typeof document !== "undefined" && document.currentScript
			? document.currentScript.src
			: undefined

	return function ($MODULE_NAME) {
		$MODULE_NAME = $MODULE_NAME || {}

		var Module = typeof $MODULE_NAME !== "undefined" ? $MODULE_NAME : {}
		var objAssign = Object.assign
		var readyPromiseResolve, readyPromiseReject
		Module["ready"] = new Promise(function (resolve, reject) {
			readyPromiseResolve = resolve
			readyPromiseReject = reject
		})
		if (!Object.getOwnPropertyDescriptor(Module["ready"], "_test_function")) {
			Object.defineProperty(Module["ready"], "_test_function", {
				configurable: true,
				get: function () {
					abort(
						"You are getting _test_function on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"
					)
				},
			})
			Object.defineProperty(Module["ready"], "_test_function", {
				configurable: true,
				set: function () {
					abort(
						"You are setting _test_function on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"
					)
				},
			})
		}
		if (!Object.getOwnPropertyDescriptor(Module["ready"], "___getTypeName")) {
			Object.defineProperty(Module["ready"], "___getTypeName", {
				configurable: true,
				get: function () {
					abort(
						"You are getting ___getTypeName on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"
					)
				},
			})
			Object.defineProperty(Module["ready"], "___getTypeName", {
				configurable: true,
				set: function () {
					abort(
						"You are setting ___getTypeName on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"
					)
				},
			})
		}
		if (
			!Object.getOwnPropertyDescriptor(
				Module["ready"],
				"___embind_register_native_and_builtin_types"
			)
		) {
			Object.defineProperty(Module["ready"], "___embind_register_native_and_builtin_types", {
				configurable: true,
				get: function () {
					abort(
						"You are getting ___embind_register_native_and_builtin_types on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"
					)
				},
			})
			Object.defineProperty(Module["ready"], "___embind_register_native_and_builtin_types", {
				configurable: true,
				set: function () {
					abort(
						"You are setting ___embind_register_native_and_builtin_types on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"
					)
				},
			})
		}
		if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fflush")) {
			Object.defineProperty(Module["ready"], "_fflush", {
				configurable: true,
				get: function () {
					abort(
						"You are getting _fflush on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"
					)
				},
			})
			Object.defineProperty(Module["ready"], "_fflush", {
				configurable: true,
				set: function () {
					abort(
						"You are setting _fflush on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"
					)
				},
			})
		}
		if (!Object.getOwnPropertyDescriptor(Module["ready"], "onRuntimeInitialized")) {
			Object.defineProperty(Module["ready"], "onRuntimeInitialized", {
				configurable: true,
				get: function () {
					abort(
						"You are getting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"
					)
				},
			})
			Object.defineProperty(Module["ready"], "onRuntimeInitialized", {
				configurable: true,
				set: function () {
					abort(
						"You are setting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"
					)
				},
			})
		}
		var moduleOverrides = objAssign({}, Module)
		var arguments_ = []
		var thisProgram = "./this.program"
		var quit_ = (status, toThrow) => {
			throw toThrow
		}
		var ENVIRONMENT_IS_WEB = true
		var ENVIRONMENT_IS_WORKER = false
		var ENVIRONMENT_IS_NODE = false
		var ENVIRONMENT_IS_SHELL = false
		if (Module["ENVIRONMENT"]) {
			throw new Error(
				"Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)"
			)
		}
		var scriptDirectory = ""
		function locateFile(path) {
			if (Module["locateFile"]) {
				return Module["locateFile"](path, scriptDirectory)
			}
			return scriptDirectory + path
		}
		var read_, readAsync, readBinary, setWindowTitle
		function logExceptionOnExit(e) {
			if (e instanceof ExitStatus) return
			let toLog = e
			if (e && typeof e === "object" && e.stack) {
				toLog = [e, e.stack]
			}
			err("exiting due to exception: " + toLog)
		}
		if (ENVIRONMENT_IS_SHELL) {
			if (
				(typeof process === "object" && typeof require === "function") ||
				typeof window === "object" ||
				typeof importScripts === "function"
			)
				throw new Error(
					"not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)"
				)
			if (typeof read != "undefined") {
				read_ = function shell_read(f) {
					return read(f)
				}
			}
			readBinary = function readBinary(f) {
				let data
				if (typeof readbuffer === "function") {
					return new Uint8Array(readbuffer(f))
				}
				data = read(f, "binary")
				assert(typeof data === "object")
				return data
			}
			readAsync = function readAsync(f, onload, onerror) {
				setTimeout(() => onload(readBinary(f)), 0)
			}
			if (typeof scriptArgs != "undefined") {
				arguments_ = scriptArgs
			} else if (typeof arguments != "undefined") {
				arguments_ = arguments
			}
			if (typeof quit === "function") {
				quit_ = (status, toThrow) => {
					logExceptionOnExit(toThrow)
					quit(status)
				}
			}
			if (typeof print !== "undefined") {
				if (typeof console === "undefined") console = {}
				console.log = print
				console.warn = console.error = typeof printErr !== "undefined" ? printErr : print
			}
		} else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
			if (ENVIRONMENT_IS_WORKER) {
				scriptDirectory = self.location.href
			} else if (typeof document !== "undefined" && document.currentScript) {
				scriptDirectory = document.currentScript.src
			}
			if (_scriptDir) {
				scriptDirectory = _scriptDir
			}
			if (scriptDirectory.indexOf("blob:") !== 0) {
				scriptDirectory = scriptDirectory.substr(
					0,
					scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1
				)
			} else {
				scriptDirectory = ""
			}
			if (!(typeof window === "object" || typeof importScripts === "function"))
				throw new Error(
					"not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)"
				)
			{
				read_ = function (url) {
					var xhr = new XMLHttpRequest()
					xhr.open("GET", url, false)
					xhr.send(null)
					return xhr.responseText
				}
				if (ENVIRONMENT_IS_WORKER) {
					readBinary = function (url) {
						var xhr = new XMLHttpRequest()
						xhr.open("GET", url, false)
						xhr.responseType = "arraybuffer"
						xhr.send(null)
						return new Uint8Array(xhr.response)
					}
				}
				readAsync = function (url, onload, onerror) {
					var xhr = new XMLHttpRequest()
					xhr.open("GET", url, true)
					xhr.responseType = "arraybuffer"
					xhr.onload = function () {
						if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) {
							onload(xhr.response)
							return
						}
						onerror()
					}
					xhr.onerror = onerror
					xhr.send(null)
				}
			}
			setWindowTitle = (title) => (document.title = title)
		} else {
			throw new Error("environment detection error")
		}
		var out = Module["print"] || console.log.bind(console)
		var err = Module["printErr"] || console.warn.bind(console)
		objAssign(Module, moduleOverrides)
		moduleOverrides = null
		if (Module["arguments"]) arguments_ = Module["arguments"]
		if (!Object.getOwnPropertyDescriptor(Module, "arguments")) {
			Object.defineProperty(Module, "arguments", {
				configurable: true,
				get: function () {
					abort(
						"Module.arguments has been replaced with plain arguments_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)"
					)
				},
			})
		}
		if (Module["thisProgram"]) thisProgram = Module["thisProgram"]
		if (!Object.getOwnPropertyDescriptor(Module, "thisProgram")) {
			Object.defineProperty(Module, "thisProgram", {
				configurable: true,
				get: function () {
					abort(
						"Module.thisProgram has been replaced with plain thisProgram (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)"
					)
				},
			})
		}
		if (Module["quit"]) quit_ = Module["quit"]
		if (!Object.getOwnPropertyDescriptor(Module, "quit")) {
			Object.defineProperty(Module, "quit", {
				configurable: true,
				get: function () {
					abort(
						"Module.quit has been replaced with plain quit_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)"
					)
				},
			})
		}
		assert(
			typeof Module["memoryInitializerPrefixURL"] === "undefined",
			"Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"
		)
		assert(
			typeof Module["pthreadMainPrefixURL"] === "undefined",
			"Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"
		)
		assert(
			typeof Module["cdInitializerPrefixURL"] === "undefined",
			"Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"
		)
		assert(
			typeof Module["filePackagePrefixURL"] === "undefined",
			"Module.filePackagePrefixURL option was removed, use Module.locateFile instead"
		)
		assert(
			typeof Module["read"] === "undefined",
			"Module.read option was removed (modify read_ in JS)"
		)
		assert(
			typeof Module["readAsync"] === "undefined",
			"Module.readAsync option was removed (modify readAsync in JS)"
		)
		assert(
			typeof Module["readBinary"] === "undefined",
			"Module.readBinary option was removed (modify readBinary in JS)"
		)
		assert(
			typeof Module["setWindowTitle"] === "undefined",
			"Module.setWindowTitle option was removed (modify setWindowTitle in JS)"
		)
		assert(
			typeof Module["TOTAL_MEMORY"] === "undefined",
			"Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"
		)
		if (!Object.getOwnPropertyDescriptor(Module, "read")) {
			Object.defineProperty(Module, "read", {
				configurable: true,
				get: function () {
					abort(
						"Module.read has been replaced with plain read_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)"
					)
				},
			})
		}
		if (!Object.getOwnPropertyDescriptor(Module, "readAsync")) {
			Object.defineProperty(Module, "readAsync", {
				configurable: true,
				get: function () {
					abort(
						"Module.readAsync has been replaced with plain readAsync (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)"
					)
				},
			})
		}
		if (!Object.getOwnPropertyDescriptor(Module, "readBinary")) {
			Object.defineProperty(Module, "readBinary", {
				configurable: true,
				get: function () {
					abort(
						"Module.readBinary has been replaced with plain readBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)"
					)
				},
			})
		}
		if (!Object.getOwnPropertyDescriptor(Module, "setWindowTitle")) {
			Object.defineProperty(Module, "setWindowTitle", {
				configurable: true,
				get: function () {
					abort(
						"Module.setWindowTitle has been replaced with plain setWindowTitle (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)"
					)
				},
			})
		}
		assert(
			!ENVIRONMENT_IS_WORKER,
			"worker environment detected but not enabled at build time.  Add 'worker' to `-s ENVIRONMENT` to enable."
		)
		assert(
			!ENVIRONMENT_IS_NODE,
			"node environment detected but not enabled at build time.  Add 'node' to `-s ENVIRONMENT` to enable."
		)
		assert(
			!ENVIRONMENT_IS_SHELL,
			"shell environment detected but not enabled at build time.  Add 'shell' to `-s ENVIRONMENT` to enable."
		)
		var POINTER_SIZE = 4
		function warnOnce(text) {
			if (!warnOnce.shown) warnOnce.shown = {}
			if (!warnOnce.shown[text]) {
				warnOnce.shown[text] = 1
				err(text)
			}
		}
		function convertJsFunctionToWasm(func, sig) {
			if (typeof WebAssembly.Function === "function") {
				var typeNames = { i: "i32", j: "i64", f: "f32", d: "f64" }
				var type = { parameters: [], results: sig[0] == "v" ? [] : [typeNames[sig[0]]] }
				for (var i = 1; i < sig.length; ++i) {
					type.parameters.push(typeNames[sig[i]])
				}
				return new WebAssembly.Function(type, func)
			}
			var typeSection = [1, 0, 1, 96]
			var sigRet = sig.slice(0, 1)
			var sigParam = sig.slice(1)
			var typeCodes = { i: 127, j: 126, f: 125, d: 124 }
			typeSection.push(sigParam.length)
			for (var i = 0; i < sigParam.length; ++i) {
				typeSection.push(typeCodes[sigParam[i]])
			}
			if (sigRet == "v") {
				typeSection.push(0)
			} else {
				typeSection = typeSection.concat([1, typeCodes[sigRet]])
			}
			typeSection[1] = typeSection.length - 2
			var bytes = new Uint8Array(
				[0, 97, 115, 109, 1, 0, 0, 0].concat(
					typeSection,
					[2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0]
				)
			)
			var module = new WebAssembly.Module(bytes)
			var instance = new WebAssembly.Instance(module, { e: { f: func } })
			var wrappedFunc = instance.exports["f"]
			return wrappedFunc
		}
		var freeTableIndexes = []
		var functionsInTableMap
		function getEmptyTableSlot() {
			if (freeTableIndexes.length) {
				return freeTableIndexes.pop()
			}
			try {
				wasmTable.grow(1)
			} catch (err) {
				if (!(err instanceof RangeError)) {
					throw err
				}
				throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH."
			}
			return wasmTable.length - 1
		}
		function updateTableMap(offset, count) {
			for (var i = offset; i < offset + count; i++) {
				var item = getWasmTableEntry(i)
				if (item) {
					functionsInTableMap.set(item, i)
				}
			}
		}
		var tempRet0 = 0
		var setTempRet0 = function (value) {
			tempRet0 = value
		}
		var getTempRet0 = function () {
			return tempRet0
		}
		var wasmBinary
		if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"]
		if (!Object.getOwnPropertyDescriptor(Module, "wasmBinary")) {
			Object.defineProperty(Module, "wasmBinary", {
				configurable: true,
				get: function () {
					abort(
						"Module.wasmBinary has been replaced with plain wasmBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)"
					)
				},
			})
		}
		var noExitRuntime = Module["noExitRuntime"] || true
		if (!Object.getOwnPropertyDescriptor(Module, "noExitRuntime")) {
			Object.defineProperty(Module, "noExitRuntime", {
				configurable: true,
				get: function () {
					abort(
						"Module.noExitRuntime has been replaced with plain noExitRuntime (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)"
					)
				},
			})
		}
		if (typeof WebAssembly !== "object") {
			abort("no native wasm support detected")
		}
		var wasmMemory
		var ABORT = false
		var EXITSTATUS
		function assert(condition, text) {
			if (!condition) {
				abort("Assertion failed" + (text ? ": " + text : ""))
			}
		}
		function getCFunc(ident) {
			var func = Module["_" + ident]
			assert(func, "Cannot call unknown function " + ident + ", make sure it is exported")
			return func
		}
		function ccall(ident, returnType, argTypes, args, opts) {
			var toC = {
				string: function (str) {
					var ret = 0
					if (str !== null && str !== undefined && str !== 0) {
						var len = (str.length << 2) + 1
						ret = stackAlloc(len)
						stringToUTF8(str, ret, len)
					}
					return ret
				},
				array: function (arr) {
					var ret = stackAlloc(arr.length)
					writeArrayToMemory(arr, ret)
					return ret
				},
			}
			function convertReturnValue(ret) {
				if (returnType === "string") return UTF8ToString(ret)
				if (returnType === "boolean") return Boolean(ret)
				return ret
			}
			var func = getCFunc(ident)
			var cArgs = []
			var stack = 0
			assert(returnType !== "array", 'Return type should not be "array".')
			if (args) {
				for (var i = 0; i < args.length; i++) {
					var converter = toC[argTypes[i]]
					if (converter) {
						if (stack === 0) stack = stackSave()
						cArgs[i] = converter(args[i])
					} else {
						cArgs[i] = args[i]
					}
				}
			}
			var ret = func.apply(null, cArgs)
			function onDone(ret) {
				if (stack !== 0) stackRestore(stack)
				return convertReturnValue(ret)
			}
			ret = onDone(ret)
			return ret
		}
		function cwrap(ident, returnType, argTypes, opts) {
			return function () {
				return ccall(ident, returnType, argTypes, arguments, opts)
			}
		}
		var ALLOC_STACK = 1
		var UTF8Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined
		function UTF8ArrayToString(heap, idx, maxBytesToRead) {
			var endIdx = idx + maxBytesToRead
			var endPtr = idx
			while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr
			if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
				return UTF8Decoder.decode(heap.subarray(idx, endPtr))
			} else {
				var str = ""
				while (idx < endPtr) {
					var u0 = heap[idx++]
					if (!(u0 & 128)) {
						str += String.fromCharCode(u0)
						continue
					}
					var u1 = heap[idx++] & 63
					if ((u0 & 224) == 192) {
						str += String.fromCharCode(((u0 & 31) << 6) | u1)
						continue
					}
					var u2 = heap[idx++] & 63
					if ((u0 & 240) == 224) {
						u0 = ((u0 & 15) << 12) | (u1 << 6) | u2
					} else {
						if ((u0 & 248) != 240)
							warnOnce(
								"Invalid UTF-8 leading byte 0x" +
									u0.toString(16) +
									" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"
							)
						u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heap[idx++] & 63)
					}
					if (u0 < 65536) {
						str += String.fromCharCode(u0)
					} else {
						var ch = u0 - 65536
						str += String.fromCharCode(55296 | (ch >> 10), 56320 | (ch & 1023))
					}
				}
			}
			return str
		}
		function UTF8ToString(ptr, maxBytesToRead) {
			return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : ""
		}
		function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
			if (!(maxBytesToWrite > 0)) return 0
			var startIdx = outIdx
			var endIdx = outIdx + maxBytesToWrite - 1
			for (var i = 0; i < str.length; ++i) {
				var u = str.charCodeAt(i)
				if (u >= 55296 && u <= 57343) {
					var u1 = str.charCodeAt(++i)
					u = (65536 + ((u & 1023) << 10)) | (u1 & 1023)
				}
				if (u <= 127) {
					if (outIdx >= endIdx) break
					heap[outIdx++] = u
				} else if (u <= 2047) {
					if (outIdx + 1 >= endIdx) break
					heap[outIdx++] = 192 | (u >> 6)
					heap[outIdx++] = 128 | (u & 63)
				} else if (u <= 65535) {
					if (outIdx + 2 >= endIdx) break
					heap[outIdx++] = 224 | (u >> 12)
					heap[outIdx++] = 128 | ((u >> 6) & 63)
					heap[outIdx++] = 128 | (u & 63)
				} else {
					if (outIdx + 3 >= endIdx) break
					if (u > 1114111)
						warnOnce(
							"Invalid Unicode code point 0x" +
								u.toString(16) +
								" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."
						)
					heap[outIdx++] = 240 | (u >> 18)
					heap[outIdx++] = 128 | ((u >> 12) & 63)
					heap[outIdx++] = 128 | ((u >> 6) & 63)
					heap[outIdx++] = 128 | (u & 63)
				}
			}
			heap[outIdx] = 0
			return outIdx - startIdx
		}
		function stringToUTF8(str, outPtr, maxBytesToWrite) {
			assert(
				typeof maxBytesToWrite == "number",
				"stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"
			)
			return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite)
		}
		function lengthBytesUTF8(str) {
			var len = 0
			for (var i = 0; i < str.length; ++i) {
				var u = str.charCodeAt(i)
				if (u >= 55296 && u <= 57343)
					u = (65536 + ((u & 1023) << 10)) | (str.charCodeAt(++i) & 1023)
				if (u <= 127) ++len
				else if (u <= 2047) len += 2
				else if (u <= 65535) len += 3
				else len += 4
			}
			return len
		}
		var UTF16Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-16le") : undefined
		function UTF16ToString(ptr, maxBytesToRead) {
			assert(ptr % 2 == 0, "Pointer passed to UTF16ToString must be aligned to two bytes!")
			var endPtr = ptr
			var idx = endPtr >> 1
			var maxIdx = idx + maxBytesToRead / 2
			while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx
			endPtr = idx << 1
			if (endPtr - ptr > 32 && UTF16Decoder) {
				return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr))
			} else {
				var str = ""
				for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
					var codeUnit = HEAP16[(ptr + i * 2) >> 1]
					if (codeUnit == 0) break
					str += String.fromCharCode(codeUnit)
				}
				return str
			}
		}
		function stringToUTF16(str, outPtr, maxBytesToWrite) {
			assert(outPtr % 2 == 0, "Pointer passed to stringToUTF16 must be aligned to two bytes!")
			assert(
				typeof maxBytesToWrite == "number",
				"stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"
			)
			if (maxBytesToWrite === undefined) {
				maxBytesToWrite = 2147483647
			}
			if (maxBytesToWrite < 2) return 0
			maxBytesToWrite -= 2
			var startPtr = outPtr
			var numCharsToWrite = maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length
			for (var i = 0; i < numCharsToWrite; ++i) {
				var codeUnit = str.charCodeAt(i)
				HEAP16[outPtr >> 1] = codeUnit
				outPtr += 2
			}
			HEAP16[outPtr >> 1] = 0
			return outPtr - startPtr
		}
		function lengthBytesUTF16(str) {
			return str.length * 2
		}
		function UTF32ToString(ptr, maxBytesToRead) {
			assert(ptr % 4 == 0, "Pointer passed to UTF32ToString must be aligned to four bytes!")
			var i = 0
			var str = ""
			while (!(i >= maxBytesToRead / 4)) {
				var utf32 = HEAP32[(ptr + i * 4) >> 2]
				if (utf32 == 0) break
				++i
				if (utf32 >= 65536) {
					var ch = utf32 - 65536
					str += String.fromCharCode(55296 | (ch >> 10), 56320 | (ch & 1023))
				} else {
					str += String.fromCharCode(utf32)
				}
			}
			return str
		}
		function stringToUTF32(str, outPtr, maxBytesToWrite) {
			assert(outPtr % 4 == 0, "Pointer passed to stringToUTF32 must be aligned to four bytes!")
			assert(
				typeof maxBytesToWrite == "number",
				"stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"
			)
			if (maxBytesToWrite === undefined) {
				maxBytesToWrite = 2147483647
			}
			if (maxBytesToWrite < 4) return 0
			var startPtr = outPtr
			var endPtr = startPtr + maxBytesToWrite - 4
			for (var i = 0; i < str.length; ++i) {
				var codeUnit = str.charCodeAt(i)
				if (codeUnit >= 55296 && codeUnit <= 57343) {
					var trailSurrogate = str.charCodeAt(++i)
					codeUnit = (65536 + ((codeUnit & 1023) << 10)) | (trailSurrogate & 1023)
				}
				HEAP32[outPtr >> 2] = codeUnit
				outPtr += 4
				if (outPtr + 4 > endPtr) break
			}
			HEAP32[outPtr >> 2] = 0
			return outPtr - startPtr
		}
		function lengthBytesUTF32(str) {
			var len = 0
			for (var i = 0; i < str.length; ++i) {
				var codeUnit = str.charCodeAt(i)
				if (codeUnit >= 55296 && codeUnit <= 57343) ++i
				len += 4
			}
			return len
		}
		function writeArrayToMemory(array, buffer) {
			assert(
				array.length >= 0,
				"writeArrayToMemory array must have a length (should be an array or typed array)"
			)
			HEAP8.set(array, buffer)
		}
		function writeAsciiToMemory(str, buffer, dontAddNull) {
			for (var i = 0; i < str.length; ++i) {
				assert(str.charCodeAt(i) === (str.charCodeAt(i) & 255))
				HEAP8[buffer++ >> 0] = str.charCodeAt(i)
			}
			if (!dontAddNull) HEAP8[buffer >> 0] = 0
		}
		function alignUp(x, multiple) {
			if (x % multiple > 0) {
				x += multiple - (x % multiple)
			}
			return x
		}
		var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64
		function updateGlobalBufferAndViews(buf) {
			buffer = buf
			Module["HEAP8"] = HEAP8 = new Int8Array(buf)
			Module["HEAP16"] = HEAP16 = new Int16Array(buf)
			Module["HEAP32"] = HEAP32 = new Int32Array(buf)
			Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf)
			Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf)
			Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf)
			Module["HEAPF32"] = HEAPF32 = new Float32Array(buf)
			Module["HEAPF64"] = HEAPF64 = new Float64Array(buf)
		}
		var TOTAL_STACK = 5242880
		if (Module["TOTAL_STACK"])
			assert(
				TOTAL_STACK === Module["TOTAL_STACK"],
				"the stack size can no longer be determined at runtime"
			)
		var INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 16777216
		if (!Object.getOwnPropertyDescriptor(Module, "INITIAL_MEMORY")) {
			Object.defineProperty(Module, "INITIAL_MEMORY", {
				configurable: true,
				get: function () {
					abort(
						"Module.INITIAL_MEMORY has been replaced with plain INITIAL_MEMORY (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)"
					)
				},
			})
		}
		assert(
			INITIAL_MEMORY >= TOTAL_STACK,
			"INITIAL_MEMORY should be larger than TOTAL_STACK, was " +
				INITIAL_MEMORY +
				"! (TOTAL_STACK=" +
				TOTAL_STACK +
				")"
		)
		assert(
			typeof Int32Array !== "undefined" &&
				typeof Float64Array !== "undefined" &&
				Int32Array.prototype.subarray !== undefined &&
				Int32Array.prototype.set !== undefined,
			"JS engine does not provide full typed array support"
		)
		assert(
			!Module["wasmMemory"],
			"Use of `wasmMemory` detected.  Use -s IMPORTED_MEMORY to define wasmMemory externally"
		)
		assert(
			INITIAL_MEMORY == 16777216,
			"Detected runtime INITIAL_MEMORY setting.  Use -s IMPORTED_MEMORY to define wasmMemory dynamically"
		)
		var wasmTable
		function writeStackCookie() {
			var max = _emscripten_stack_get_end()
			assert((max & 3) == 0)
			HEAP32[(max + 4) >> 2] = 34821223
			HEAP32[(max + 8) >> 2] = 2310721022
			HEAP32[0] = 1668509029
		}
		function checkStackCookie() {
			if (ABORT) return
			var max = _emscripten_stack_get_end()
			var cookie1 = HEAPU32[(max + 4) >> 2]
			var cookie2 = HEAPU32[(max + 8) >> 2]
			if (cookie1 != 34821223 || cookie2 != 2310721022) {
				abort(
					"Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x" +
						cookie2.toString(16) +
						" 0x" +
						cookie1.toString(16)
				)
			}
			if (HEAP32[0] !== 1668509029)
				abort("Runtime error: The application has corrupted its heap memory area (address zero)!")
		}
		;(function () {
			var h16 = new Int16Array(1)
			var h8 = new Int8Array(h16.buffer)
			h16[0] = 25459
			if (h8[0] !== 115 || h8[1] !== 99)
				throw "Runtime error: expected the system to be little-endian! (Run with -s SUPPORT_BIG_ENDIAN=1 to bypass)"
		})()
		var __ATPRERUN__ = []
		var __ATINIT__ = []
		var __ATPOSTRUN__ = []
		var runtimeInitialized = false
		var runtimeExited = false
		var runtimeKeepaliveCounter = 0
		function keepRuntimeAlive() {
			return noExitRuntime || runtimeKeepaliveCounter > 0
		}
		function preRun() {
			if (Module["preRun"]) {
				if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]]
				while (Module["preRun"].length) {
					addOnPreRun(Module["preRun"].shift())
				}
			}
			callRuntimeCallbacks(__ATPRERUN__)
		}
		function initRuntime() {
			checkStackCookie()
			assert(!runtimeInitialized)
			runtimeInitialized = true
			callRuntimeCallbacks(__ATINIT__)
		}
		function exitRuntime() {
			checkStackCookie()
			runtimeExited = true
		}
		function postRun() {
			checkStackCookie()
			if (Module["postRun"]) {
				if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]]
				while (Module["postRun"].length) {
					addOnPostRun(Module["postRun"].shift())
				}
			}
			callRuntimeCallbacks(__ATPOSTRUN__)
		}
		function addOnPreRun(cb) {
			__ATPRERUN__.unshift(cb)
		}
		function addOnInit(cb) {
			__ATINIT__.unshift(cb)
		}
		function addOnPostRun(cb) {
			__ATPOSTRUN__.unshift(cb)
		}
		assert(
			Math.imul,
			"This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"
		)
		assert(
			Math.fround,
			"This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"
		)
		assert(
			Math.clz32,
			"This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"
		)
		assert(
			Math.trunc,
			"This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"
		)
		var runDependencies = 0
		var runDependencyWatcher = null
		var dependenciesFulfilled = null
		var runDependencyTracking = {}
		function addRunDependency(id) {
			runDependencies++
			if (Module["monitorRunDependencies"]) {
				Module["monitorRunDependencies"](runDependencies)
			}
			if (id) {
				assert(!runDependencyTracking[id])
				runDependencyTracking[id] = 1
				if (runDependencyWatcher === null && typeof setInterval !== "undefined") {
					runDependencyWatcher = setInterval(function () {
						if (ABORT) {
							clearInterval(runDependencyWatcher)
							runDependencyWatcher = null
							return
						}
						var shown = false
						for (var dep in runDependencyTracking) {
							if (!shown) {
								shown = true
								err("still waiting on run dependencies:")
							}
							err("dependency: " + dep)
						}
						if (shown) {
							err("(end of list)")
						}
					}, 1e4)
				}
			} else {
				err("warning: run dependency added without ID")
			}
		}
		function removeRunDependency(id) {
			runDependencies--
			if (Module["monitorRunDependencies"]) {
				Module["monitorRunDependencies"](runDependencies)
			}
			if (id) {
				assert(runDependencyTracking[id])
				delete runDependencyTracking[id]
			} else {
				err("warning: run dependency removed without ID")
			}
			if (runDependencies == 0) {
				if (runDependencyWatcher !== null) {
					clearInterval(runDependencyWatcher)
					runDependencyWatcher = null
				}
				if (dependenciesFulfilled) {
					var callback = dependenciesFulfilled
					dependenciesFulfilled = null
					callback()
				}
			}
		}
		Module["preloadedImages"] = {}
		Module["preloadedAudios"] = {}
		function abort(what) {
			{
				if (Module["onAbort"]) {
					Module["onAbort"](what)
				}
			}
			what = "Aborted(" + what + ")"
			err(what)
			ABORT = true
			EXITSTATUS = 1
			var e = new WebAssembly.RuntimeError(what)
			readyPromiseReject(e)
			throw e
		}
		var FS = {
			error: function () {
				abort(
					"Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with  -s FORCE_FILESYSTEM=1"
				)
			},
			init: function () {
				FS.error()
			},
			createDataFile: function () {
				FS.error()
			},
			createPreloadedFile: function () {
				FS.error()
			},
			createLazyFile: function () {
				FS.error()
			},
			open: function () {
				FS.error()
			},
			mkdev: function () {
				FS.error()
			},
			registerDevice: function () {
				FS.error()
			},
			analyzePath: function () {
				FS.error()
			},
			loadFilesFromDB: function () {
				FS.error()
			},
			ErrnoError: function ErrnoError() {
				FS.error()
			},
		}
		Module["FS_createDataFile"] = FS.createDataFile
		Module["FS_createPreloadedFile"] = FS.createPreloadedFile
		var dataURIPrefix = "data:application/octet-stream;base64,"
		function isDataURI(filename) {
			return filename.startsWith(dataURIPrefix)
		}
		function isFileURI(filename) {
			return filename.startsWith("file://")
		}
		function createExportWrapper(name, fixedasm) {
			return function () {
				var displayName = name
				var asm = fixedasm
				if (!fixedasm) {
					asm = Module["asm"]
				}
				assert(
					runtimeInitialized,
					"native function `" + displayName + "` called before runtime initialization"
				)
				assert(
					!runtimeExited,
					"native function `" +
						displayName +
						"` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)"
				)
				if (!asm[name]) {
					assert(asm[name], "exported native function `" + displayName + "` not found")
				}
				return asm[name].apply(null, arguments)
			}
		}
		var wasmBinaryFile
		wasmBinaryFile = "wfc.wasm"
		if (!isDataURI(wasmBinaryFile)) {
			wasmBinaryFile = locateFile(wasmBinaryFile)
			wasmBinaryFile = "http://localhost:3000/wfc.wasm"
		}
		function getBinary(file) {
			try {
				if (file == wasmBinaryFile && wasmBinary) {
					return new Uint8Array(wasmBinary)
				}
				if (readBinary) {
					return readBinary(file)
				} else {
					throw "both async and sync fetching of the wasm failed"
				}
			} catch (err) {
				abort(err)
			}
		}
		function getBinaryPromise() {
			if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
				if (typeof fetch === "function") {
					return fetch(wasmBinaryFile, { credentials: "same-origin" })
						.then(function (response) {
							if (!response["ok"]) {
								throw "failed to load wasm binary file at '" + wasmBinaryFile + "'"
							}
							return response["arrayBuffer"]()
						})
						.catch(function () {
							return getBinary(wasmBinaryFile)
						})
				}
			}
			return Promise.resolve().then(function () {
				return getBinary(wasmBinaryFile)
			})
		}
		function createWasm() {
			var info = { env: asmLibraryArg, wasi_snapshot_preview1: asmLibraryArg }
			function receiveInstance(instance, module) {
				var exports = instance.exports
				Module["asm"] = exports
				wasmMemory = Module["asm"]["memory"]
				assert(wasmMemory, "memory not found in wasm exports")
				updateGlobalBufferAndViews(wasmMemory.buffer)
				wasmTable = Module["asm"]["__indirect_function_table"]
				assert(wasmTable, "table not found in wasm exports")
				addOnInit(Module["asm"]["__wasm_call_ctors"])
				removeRunDependency("wasm-instantiate")
			}
			addRunDependency("wasm-instantiate")
			var trueModule = Module
			function receiveInstantiationResult(result) {
				assert(
					Module === trueModule,
					"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"
				)
				trueModule = null
				receiveInstance(result["instance"])
			}
			function instantiateArrayBuffer(receiver) {
				return getBinaryPromise()
					.then(function (binary) {
						return WebAssembly.instantiate(binary, info)
					})
					.then(function (instance) {
						return instance
					})
					.then(receiver, function (reason) {
						err("failed to asynchronously prepare wasm: " + reason)
						if (isFileURI(wasmBinaryFile)) {
							err(
								"warning: Loading from a file URI (" +
									wasmBinaryFile +
									") is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing"
							)
						}
						abort(reason)
					})
			}
			function instantiateAsync() {
				if (
					!wasmBinary &&
					typeof WebAssembly.instantiateStreaming === "function" &&
					!isDataURI(wasmBinaryFile) &&
					typeof fetch === "function"
				) {
					return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function (response) {
						var result = WebAssembly.instantiateStreaming(response, info)
						return result.then(receiveInstantiationResult, function (reason) {
							err("wasm streaming compile failed: " + reason)
							err("falling back to ArrayBuffer instantiation")
							return instantiateArrayBuffer(receiveInstantiationResult)
						})
					})
				} else {
					return instantiateArrayBuffer(receiveInstantiationResult)
				}
			}
			if (Module["instantiateWasm"]) {
				try {
					var exports = Module["instantiateWasm"](info, receiveInstance)
					return exports
				} catch (e) {
					err("Module.instantiateWasm callback failed with error: " + e)
					return false
				}
			}
			instantiateAsync().catch(readyPromiseReject)
			return {}
		}
		var tempDouble
		var tempI64
		function callRuntimeCallbacks(callbacks) {
			while (callbacks.length > 0) {
				var callback = callbacks.shift()
				if (typeof callback == "function") {
					callback(Module)
					continue
				}
				var func = callback.func
				if (typeof func === "number") {
					if (callback.arg === undefined) {
						getWasmTableEntry(func)()
					} else {
						getWasmTableEntry(func)(callback.arg)
					}
				} else {
					func(callback.arg === undefined ? null : callback.arg)
				}
			}
		}
		function demangle(func) {
			warnOnce("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling")
			return func
		}
		function demangleAll(text) {
			var regex = /\b_Z[\w\d_]+/g
			return text.replace(regex, function (x) {
				var y = demangle(x)
				return x === y ? x : y + " [" + x + "]"
			})
		}
		var wasmTableMirror = []
		function getWasmTableEntry(funcPtr) {
			var func = wasmTableMirror[funcPtr]
			if (!func) {
				if (funcPtr >= wasmTableMirror.length) wasmTableMirror.length = funcPtr + 1
				wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr)
			}
			assert(
				wasmTable.get(funcPtr) == func,
				"JavaScript-side Wasm function table mirror is out of date!"
			)
			return func
		}
		function jsStackTrace() {
			var error = new Error()
			if (!error.stack) {
				try {
					throw new Error()
				} catch (e) {
					error = e
				}
				if (!error.stack) {
					return "(no stack trace available)"
				}
			}
			return error.stack.toString()
		}
		function setWasmTableEntry(idx, func) {
			wasmTable.set(idx, func)
			wasmTableMirror[idx] = func
		}
		function ___cxa_allocate_exception(size) {
			return _malloc(size + 16) + 16
		}
		function ExceptionInfo(excPtr) {
			this.excPtr = excPtr
			this.ptr = excPtr - 16
			this.set_type = function (type) {
				HEAP32[(this.ptr + 4) >> 2] = type
			}
			this.get_type = function () {
				return HEAP32[(this.ptr + 4) >> 2]
			}
			this.set_destructor = function (destructor) {
				HEAP32[(this.ptr + 8) >> 2] = destructor
			}
			this.get_destructor = function () {
				return HEAP32[(this.ptr + 8) >> 2]
			}
			this.set_refcount = function (refcount) {
				HEAP32[this.ptr >> 2] = refcount
			}
			this.set_caught = function (caught) {
				caught = caught ? 1 : 0
				HEAP8[(this.ptr + 12) >> 0] = caught
			}
			this.get_caught = function () {
				return HEAP8[(this.ptr + 12) >> 0] != 0
			}
			this.set_rethrown = function (rethrown) {
				rethrown = rethrown ? 1 : 0
				HEAP8[(this.ptr + 13) >> 0] = rethrown
			}
			this.get_rethrown = function () {
				return HEAP8[(this.ptr + 13) >> 0] != 0
			}
			this.init = function (type, destructor) {
				this.set_type(type)
				this.set_destructor(destructor)
				this.set_refcount(0)
				this.set_caught(false)
				this.set_rethrown(false)
			}
			this.add_ref = function () {
				var value = HEAP32[this.ptr >> 2]
				HEAP32[this.ptr >> 2] = value + 1
			}
			this.release_ref = function () {
				var prev = HEAP32[this.ptr >> 2]
				HEAP32[this.ptr >> 2] = prev - 1
				assert(prev > 0)
				return prev === 1
			}
		}
		function CatchInfo(ptr) {
			this.free = function () {
				_free(this.ptr)
				this.ptr = 0
			}
			this.set_base_ptr = function (basePtr) {
				HEAP32[this.ptr >> 2] = basePtr
			}
			this.get_base_ptr = function () {
				return HEAP32[this.ptr >> 2]
			}
			this.set_adjusted_ptr = function (adjustedPtr) {
				HEAP32[(this.ptr + 4) >> 2] = adjustedPtr
			}
			this.get_adjusted_ptr_addr = function () {
				return this.ptr + 4
			}
			this.get_adjusted_ptr = function () {
				return HEAP32[(this.ptr + 4) >> 2]
			}
			this.get_exception_ptr = function () {
				var isPointer = ___cxa_is_pointer_type(this.get_exception_info().get_type())
				if (isPointer) {
					return HEAP32[this.get_base_ptr() >> 2]
				}
				var adjusted = this.get_adjusted_ptr()
				if (adjusted !== 0) return adjusted
				return this.get_base_ptr()
			}
			this.get_exception_info = function () {
				return new ExceptionInfo(this.get_base_ptr())
			}
			if (ptr === undefined) {
				this.ptr = _malloc(8)
				this.set_adjusted_ptr(0)
			} else {
				this.ptr = ptr
			}
		}
		var exceptionCaught = []
		function exception_addRef(info) {
			info.add_ref()
		}
		var uncaughtExceptionCount = 0
		function ___cxa_begin_catch(ptr) {
			var catchInfo = new CatchInfo(ptr)
			var info = catchInfo.get_exception_info()
			if (!info.get_caught()) {
				info.set_caught(true)
				uncaughtExceptionCount--
			}
			info.set_rethrown(false)
			exceptionCaught.push(catchInfo)
			exception_addRef(info)
			return catchInfo.get_exception_ptr()
		}
		var exceptionLast = 0
		function ___cxa_free_exception(ptr) {
			try {
				return _free(new ExceptionInfo(ptr).ptr)
			} catch (e) {
				err("exception during cxa_free_exception: " + e)
			}
		}
		function exception_decRef(info) {
			if (info.release_ref() && !info.get_rethrown()) {
				var destructor = info.get_destructor()
				if (destructor) {
					getWasmTableEntry(destructor)(info.excPtr)
				}
				___cxa_free_exception(info.excPtr)
			}
		}
		function ___cxa_end_catch() {
			_setThrew(0)
			assert(exceptionCaught.length > 0)
			var catchInfo = exceptionCaught.pop()
			exception_decRef(catchInfo.get_exception_info())
			catchInfo.free()
			exceptionLast = 0
		}
		function ___resumeException(catchInfoPtr) {
			var catchInfo = new CatchInfo(catchInfoPtr)
			var ptr = catchInfo.get_base_ptr()
			if (!exceptionLast) {
				exceptionLast = ptr
			}
			catchInfo.free()
			throw ptr
		}
		function ___cxa_find_matching_catch_2() {
			var thrown = exceptionLast
			if (!thrown) {
				setTempRet0(0)
				return 0 | 0
			}
			var info = new ExceptionInfo(thrown)
			var thrownType = info.get_type()
			var catchInfo = new CatchInfo()
			catchInfo.set_base_ptr(thrown)
			catchInfo.set_adjusted_ptr(thrown)
			if (!thrownType) {
				setTempRet0(0)
				return catchInfo.ptr | 0
			}
			var typeArray = Array.prototype.slice.call(arguments)
			for (var i = 0; i < typeArray.length; i++) {
				var caughtType = typeArray[i]
				if (caughtType === 0 || caughtType === thrownType) {
					break
				}
				if (___cxa_can_catch(caughtType, thrownType, catchInfo.get_adjusted_ptr_addr())) {
					setTempRet0(caughtType)
					return catchInfo.ptr | 0
				}
			}
			setTempRet0(thrownType)
			return catchInfo.ptr | 0
		}
		function ___cxa_find_matching_catch_3() {
			var thrown = exceptionLast
			if (!thrown) {
				setTempRet0(0)
				return 0 | 0
			}
			var info = new ExceptionInfo(thrown)
			var thrownType = info.get_type()
			var catchInfo = new CatchInfo()
			catchInfo.set_base_ptr(thrown)
			catchInfo.set_adjusted_ptr(thrown)
			if (!thrownType) {
				setTempRet0(0)
				return catchInfo.ptr | 0
			}
			var typeArray = Array.prototype.slice.call(arguments)
			for (var i = 0; i < typeArray.length; i++) {
				var caughtType = typeArray[i]
				if (caughtType === 0 || caughtType === thrownType) {
					break
				}
				if (___cxa_can_catch(caughtType, thrownType, catchInfo.get_adjusted_ptr_addr())) {
					setTempRet0(caughtType)
					return catchInfo.ptr | 0
				}
			}
			setTempRet0(thrownType)
			return catchInfo.ptr | 0
		}
		function ___cxa_throw(ptr, type, destructor) {
			var info = new ExceptionInfo(ptr)
			info.init(type, destructor)
			exceptionLast = ptr
			uncaughtExceptionCount++
			throw ptr
		}
		function __embind_register_bigint(primitiveType, name, size, minRange, maxRange) {}
		function getShiftFromSize(size) {
			switch (size) {
				case 1:
					return 0
				case 2:
					return 1
				case 4:
					return 2
				case 8:
					return 3
				default:
					throw new TypeError("Unknown type size: " + size)
			}
		}
		function embind_init_charCodes() {
			var codes = new Array(256)
			for (var i = 0; i < 256; ++i) {
				codes[i] = String.fromCharCode(i)
			}
			embind_charCodes = codes
		}
		var embind_charCodes = undefined
		function readLatin1String(ptr) {
			var ret = ""
			var c = ptr
			while (HEAPU8[c]) {
				ret += embind_charCodes[HEAPU8[c++]]
			}
			return ret
		}
		var awaitingDependencies = {}
		var registeredTypes = {}
		var typeDependencies = {}
		var char_0 = 48
		var char_9 = 57
		function makeLegalFunctionName(name) {
			if (undefined === name) {
				return "_unknown"
			}
			name = name.replace(/[^a-zA-Z0-9_]/g, "$")
			var f = name.charCodeAt(0)
			if (f >= char_0 && f <= char_9) {
				return "_" + name
			} else {
				return name
			}
		}
		function createNamedFunction(name, body) {
			name = makeLegalFunctionName(name)
			return new Function(
				"body",
				"return function " +
					name +
					"() {\n" +
					'    "use strict";' +
					"    return body.apply(this, arguments);\n" +
					"};\n"
			)(body)
		}
		function extendError(baseErrorType, errorName) {
			var errorClass = createNamedFunction(errorName, function (message) {
				this.name = errorName
				this.message = message
				var stack = new Error(message).stack
				if (stack !== undefined) {
					this.stack = this.toString() + "\n" + stack.replace(/^Error(:[^\n]*)?\n/, "")
				}
			})
			errorClass.prototype = Object.create(baseErrorType.prototype)
			errorClass.prototype.constructor = errorClass
			errorClass.prototype.toString = function () {
				if (this.message === undefined) {
					return this.name
				} else {
					return this.name + ": " + this.message
				}
			}
			return errorClass
		}
		var BindingError = undefined
		function throwBindingError(message) {
			throw new BindingError(message)
		}
		var InternalError = undefined
		function throwInternalError(message) {
			throw new InternalError(message)
		}
		function whenDependentTypesAreResolved(myTypes, dependentTypes, getTypeConverters) {
			myTypes.forEach(function (type) {
				typeDependencies[type] = dependentTypes
			})
			function onComplete(typeConverters) {
				var myTypeConverters = getTypeConverters(typeConverters)
				if (myTypeConverters.length !== myTypes.length) {
					throwInternalError("Mismatched type converter count")
				}
				for (var i = 0; i < myTypes.length; ++i) {
					registerType(myTypes[i], myTypeConverters[i])
				}
			}
			var typeConverters = new Array(dependentTypes.length)
			var unregisteredTypes = []
			var registered = 0
			dependentTypes.forEach(function (dt, i) {
				if (registeredTypes.hasOwnProperty(dt)) {
					typeConverters[i] = registeredTypes[dt]
				} else {
					unregisteredTypes.push(dt)
					if (!awaitingDependencies.hasOwnProperty(dt)) {
						awaitingDependencies[dt] = []
					}
					awaitingDependencies[dt].push(function () {
						typeConverters[i] = registeredTypes[dt]
						++registered
						if (registered === unregisteredTypes.length) {
							onComplete(typeConverters)
						}
					})
				}
			})
			if (0 === unregisteredTypes.length) {
				onComplete(typeConverters)
			}
		}
		function registerType(rawType, registeredInstance, options) {
			options = options || {}
			if (!("argPackAdvance" in registeredInstance)) {
				throw new TypeError("registerType registeredInstance requires argPackAdvance")
			}
			var name = registeredInstance.name
			if (!rawType) {
				throwBindingError('type "' + name + '" must have a positive integer typeid pointer')
			}
			if (registeredTypes.hasOwnProperty(rawType)) {
				if (options.ignoreDuplicateRegistrations) {
					return
				} else {
					throwBindingError("Cannot register type '" + name + "' twice")
				}
			}
			registeredTypes[rawType] = registeredInstance
			delete typeDependencies[rawType]
			if (awaitingDependencies.hasOwnProperty(rawType)) {
				var callbacks = awaitingDependencies[rawType]
				delete awaitingDependencies[rawType]
				callbacks.forEach(function (cb) {
					cb()
				})
			}
		}
		function __embind_register_bool(rawType, name, size, trueValue, falseValue) {
			var shift = getShiftFromSize(size)
			name = readLatin1String(name)
			registerType(rawType, {
				name: name,
				fromWireType: function (wt) {
					return !!wt
				},
				toWireType: function (destructors, o) {
					return o ? trueValue : falseValue
				},
				argPackAdvance: 8,
				readValueFromPointer: function (pointer) {
					var heap
					if (size === 1) {
						heap = HEAP8
					} else if (size === 2) {
						heap = HEAP16
					} else if (size === 4) {
						heap = HEAP32
					} else {
						throw new TypeError("Unknown boolean type size: " + name)
					}
					return this["fromWireType"](heap[pointer >> shift])
				},
				destructorFunction: null,
			})
		}
		function ClassHandle_isAliasOf(other) {
			if (!(this instanceof ClassHandle)) {
				return false
			}
			if (!(other instanceof ClassHandle)) {
				return false
			}
			var leftClass = this.$$.ptrType.registeredClass
			var left = this.$$.ptr
			var rightClass = other.$$.ptrType.registeredClass
			var right = other.$$.ptr
			while (leftClass.baseClass) {
				left = leftClass.upcast(left)
				leftClass = leftClass.baseClass
			}
			while (rightClass.baseClass) {
				right = rightClass.upcast(right)
				rightClass = rightClass.baseClass
			}
			return leftClass === rightClass && left === right
		}
		function shallowCopyInternalPointer(o) {
			return {
				count: o.count,
				deleteScheduled: o.deleteScheduled,
				preservePointerOnDelete: o.preservePointerOnDelete,
				ptr: o.ptr,
				ptrType: o.ptrType,
				smartPtr: o.smartPtr,
				smartPtrType: o.smartPtrType,
			}
		}
		function throwInstanceAlreadyDeleted(obj) {
			function getInstanceTypeName(handle) {
				return handle.$$.ptrType.registeredClass.name
			}
			throwBindingError(getInstanceTypeName(obj) + " instance already deleted")
		}
		var finalizationGroup = false
		function detachFinalizer(handle) {}
		function runDestructor($$) {
			if ($$.smartPtr) {
				$$.smartPtrType.rawDestructor($$.smartPtr)
			} else {
				$$.ptrType.registeredClass.rawDestructor($$.ptr)
			}
		}
		function releaseClassHandle($$) {
			$$.count.value -= 1
			var toDelete = 0 === $$.count.value
			if (toDelete) {
				runDestructor($$)
			}
		}
		function attachFinalizer(handle) {
			if ("undefined" === typeof FinalizationGroup) {
				attachFinalizer = function (handle) {
					return handle
				}
				return handle
			}
			finalizationGroup = new FinalizationGroup(function (iter) {
				for (var result = iter.next(); !result.done; result = iter.next()) {
					var $$ = result.value
					if (!$$.ptr) {
						console.warn("object already deleted: " + $$.ptr)
					} else {
						releaseClassHandle($$)
					}
				}
			})
			attachFinalizer = function (handle) {
				finalizationGroup.register(handle, handle.$$, handle.$$)
				return handle
			}
			detachFinalizer = function (handle) {
				finalizationGroup.unregister(handle.$$)
			}
			return attachFinalizer(handle)
		}
		function ClassHandle_clone() {
			if (!this.$$.ptr) {
				throwInstanceAlreadyDeleted(this)
			}
			if (this.$$.preservePointerOnDelete) {
				this.$$.count.value += 1
				return this
			} else {
				var clone = attachFinalizer(
					Object.create(Object.getPrototypeOf(this), {
						$$: { value: shallowCopyInternalPointer(this.$$) },
					})
				)
				clone.$$.count.value += 1
				clone.$$.deleteScheduled = false
				return clone
			}
		}
		function ClassHandle_delete() {
			if (!this.$$.ptr) {
				throwInstanceAlreadyDeleted(this)
			}
			if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
				throwBindingError("Object already scheduled for deletion")
			}
			detachFinalizer(this)
			releaseClassHandle(this.$$)
			if (!this.$$.preservePointerOnDelete) {
				this.$$.smartPtr = undefined
				this.$$.ptr = undefined
			}
		}
		function ClassHandle_isDeleted() {
			return !this.$$.ptr
		}
		var delayFunction = undefined
		var deletionQueue = []
		function flushPendingDeletes() {
			while (deletionQueue.length) {
				var obj = deletionQueue.pop()
				obj.$$.deleteScheduled = false
				obj["delete"]()
			}
		}
		function ClassHandle_deleteLater() {
			if (!this.$$.ptr) {
				throwInstanceAlreadyDeleted(this)
			}
			if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
				throwBindingError("Object already scheduled for deletion")
			}
			deletionQueue.push(this)
			if (deletionQueue.length === 1 && delayFunction) {
				delayFunction(flushPendingDeletes)
			}
			this.$$.deleteScheduled = true
			return this
		}
		function init_ClassHandle() {
			ClassHandle.prototype["isAliasOf"] = ClassHandle_isAliasOf
			ClassHandle.prototype["clone"] = ClassHandle_clone
			ClassHandle.prototype["delete"] = ClassHandle_delete
			ClassHandle.prototype["isDeleted"] = ClassHandle_isDeleted
			ClassHandle.prototype["deleteLater"] = ClassHandle_deleteLater
		}
		function ClassHandle() {}
		var registeredPointers = {}
		function ensureOverloadTable(proto, methodName, humanName) {
			if (undefined === proto[methodName].overloadTable) {
				var prevFunc = proto[methodName]
				proto[methodName] = function () {
					if (!proto[methodName].overloadTable.hasOwnProperty(arguments.length)) {
						throwBindingError(
							"Function '" +
								humanName +
								"' called with an invalid number of arguments (" +
								arguments.length +
								") - expects one of (" +
								proto[methodName].overloadTable +
								")!"
						)
					}
					return proto[methodName].overloadTable[arguments.length].apply(this, arguments)
				}
				proto[methodName].overloadTable = []
				proto[methodName].overloadTable[prevFunc.argCount] = prevFunc
			}
		}
		function exposePublicSymbol(name, value, numArguments) {
			if (Module.hasOwnProperty(name)) {
				if (
					undefined === numArguments ||
					(undefined !== Module[name].overloadTable &&
						undefined !== Module[name].overloadTable[numArguments])
				) {
					throwBindingError("Cannot register public name '" + name + "' twice")
				}
				ensureOverloadTable(Module, name, name)
				if (Module.hasOwnProperty(numArguments)) {
					throwBindingError(
						"Cannot register multiple overloads of a function with the same number of arguments (" +
							numArguments +
							")!"
					)
				}
				Module[name].overloadTable[numArguments] = value
			} else {
				Module[name] = value
				if (undefined !== numArguments) {
					Module[name].numArguments = numArguments
				}
			}
		}
		function RegisteredClass(
			name,
			constructor,
			instancePrototype,
			rawDestructor,
			baseClass,
			getActualType,
			upcast,
			downcast
		) {
			this.name = name
			this.constructor = constructor
			this.instancePrototype = instancePrototype
			this.rawDestructor = rawDestructor
			this.baseClass = baseClass
			this.getActualType = getActualType
			this.upcast = upcast
			this.downcast = downcast
			this.pureVirtualFunctions = []
		}
		function upcastPointer(ptr, ptrClass, desiredClass) {
			while (ptrClass !== desiredClass) {
				if (!ptrClass.upcast) {
					throwBindingError(
						"Expected null or instance of " +
							desiredClass.name +
							", got an instance of " +
							ptrClass.name
					)
				}
				ptr = ptrClass.upcast(ptr)
				ptrClass = ptrClass.baseClass
			}
			return ptr
		}
		function constNoSmartPtrRawPointerToWireType(destructors, handle) {
			if (handle === null) {
				if (this.isReference) {
					throwBindingError("null is not a valid " + this.name)
				}
				return 0
			}
			if (!handle.$$) {
				throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name)
			}
			if (!handle.$$.ptr) {
				throwBindingError("Cannot pass deleted object as a pointer of type " + this.name)
			}
			var handleClass = handle.$$.ptrType.registeredClass
			var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass)
			return ptr
		}
		function genericPointerToWireType(destructors, handle) {
			var ptr
			if (handle === null) {
				if (this.isReference) {
					throwBindingError("null is not a valid " + this.name)
				}
				if (this.isSmartPointer) {
					ptr = this.rawConstructor()
					if (destructors !== null) {
						destructors.push(this.rawDestructor, ptr)
					}
					return ptr
				} else {
					return 0
				}
			}
			if (!handle.$$) {
				throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name)
			}
			if (!handle.$$.ptr) {
				throwBindingError("Cannot pass deleted object as a pointer of type " + this.name)
			}
			if (!this.isConst && handle.$$.ptrType.isConst) {
				throwBindingError(
					"Cannot convert argument of type " +
						(handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) +
						" to parameter type " +
						this.name
				)
			}
			var handleClass = handle.$$.ptrType.registeredClass
			ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass)
			if (this.isSmartPointer) {
				if (undefined === handle.$$.smartPtr) {
					throwBindingError("Passing raw pointer to smart pointer is illegal")
				}
				switch (this.sharingPolicy) {
					case 0:
						if (handle.$$.smartPtrType === this) {
							ptr = handle.$$.smartPtr
						} else {
							throwBindingError(
								"Cannot convert argument of type " +
									(handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) +
									" to parameter type " +
									this.name
							)
						}
						break
					case 1:
						ptr = handle.$$.smartPtr
						break
					case 2:
						if (handle.$$.smartPtrType === this) {
							ptr = handle.$$.smartPtr
						} else {
							var clonedHandle = handle["clone"]()
							ptr = this.rawShare(
								ptr,
								Emval.toHandle(function () {
									clonedHandle["delete"]()
								})
							)
							if (destructors !== null) {
								destructors.push(this.rawDestructor, ptr)
							}
						}
						break
					default:
						throwBindingError("Unsupporting sharing policy")
				}
			}
			return ptr
		}
		function nonConstNoSmartPtrRawPointerToWireType(destructors, handle) {
			if (handle === null) {
				if (this.isReference) {
					throwBindingError("null is not a valid " + this.name)
				}
				return 0
			}
			if (!handle.$$) {
				throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name)
			}
			if (!handle.$$.ptr) {
				throwBindingError("Cannot pass deleted object as a pointer of type " + this.name)
			}
			if (handle.$$.ptrType.isConst) {
				throwBindingError(
					"Cannot convert argument of type " +
						handle.$$.ptrType.name +
						" to parameter type " +
						this.name
				)
			}
			var handleClass = handle.$$.ptrType.registeredClass
			var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass)
			return ptr
		}
		function simpleReadValueFromPointer(pointer) {
			return this["fromWireType"](HEAPU32[pointer >> 2])
		}
		function RegisteredPointer_getPointee(ptr) {
			if (this.rawGetPointee) {
				ptr = this.rawGetPointee(ptr)
			}
			return ptr
		}
		function RegisteredPointer_destructor(ptr) {
			if (this.rawDestructor) {
				this.rawDestructor(ptr)
			}
		}
		function RegisteredPointer_deleteObject(handle) {
			if (handle !== null) {
				handle["delete"]()
			}
		}
		function downcastPointer(ptr, ptrClass, desiredClass) {
			if (ptrClass === desiredClass) {
				return ptr
			}
			if (undefined === desiredClass.baseClass) {
				return null
			}
			var rv = downcastPointer(ptr, ptrClass, desiredClass.baseClass)
			if (rv === null) {
				return null
			}
			return desiredClass.downcast(rv)
		}
		function getInheritedInstanceCount() {
			return Object.keys(registeredInstances).length
		}
		function getLiveInheritedInstances() {
			var rv = []
			for (var k in registeredInstances) {
				if (registeredInstances.hasOwnProperty(k)) {
					rv.push(registeredInstances[k])
				}
			}
			return rv
		}
		function setDelayFunction(fn) {
			delayFunction = fn
			if (deletionQueue.length && delayFunction) {
				delayFunction(flushPendingDeletes)
			}
		}
		function init_embind() {
			Module["getInheritedInstanceCount"] = getInheritedInstanceCount
			Module["getLiveInheritedInstances"] = getLiveInheritedInstances
			Module["flushPendingDeletes"] = flushPendingDeletes
			Module["setDelayFunction"] = setDelayFunction
		}
		var registeredInstances = {}
		function getBasestPointer(class_, ptr) {
			if (ptr === undefined) {
				throwBindingError("ptr should not be undefined")
			}
			while (class_.baseClass) {
				ptr = class_.upcast(ptr)
				class_ = class_.baseClass
			}
			return ptr
		}
		function getInheritedInstance(class_, ptr) {
			ptr = getBasestPointer(class_, ptr)
			return registeredInstances[ptr]
		}
		function makeClassHandle(prototype, record) {
			if (!record.ptrType || !record.ptr) {
				throwInternalError("makeClassHandle requires ptr and ptrType")
			}
			var hasSmartPtrType = !!record.smartPtrType
			var hasSmartPtr = !!record.smartPtr
			if (hasSmartPtrType !== hasSmartPtr) {
				throwInternalError("Both smartPtrType and smartPtr must be specified")
			}
			record.count = { value: 1 }
			return attachFinalizer(Object.create(prototype, { $$: { value: record } }))
		}
		function RegisteredPointer_fromWireType(ptr) {
			var rawPointer = this.getPointee(ptr)
			if (!rawPointer) {
				this.destructor(ptr)
				return null
			}
			var registeredInstance = getInheritedInstance(this.registeredClass, rawPointer)
			if (undefined !== registeredInstance) {
				if (0 === registeredInstance.$$.count.value) {
					registeredInstance.$$.ptr = rawPointer
					registeredInstance.$$.smartPtr = ptr
					return registeredInstance["clone"]()
				} else {
					var rv = registeredInstance["clone"]()
					this.destructor(ptr)
					return rv
				}
			}
			function makeDefaultHandle() {
				if (this.isSmartPointer) {
					return makeClassHandle(this.registeredClass.instancePrototype, {
						ptrType: this.pointeeType,
						ptr: rawPointer,
						smartPtrType: this,
						smartPtr: ptr,
					})
				} else {
					return makeClassHandle(this.registeredClass.instancePrototype, {
						ptrType: this,
						ptr: ptr,
					})
				}
			}
			var actualType = this.registeredClass.getActualType(rawPointer)
			var registeredPointerRecord = registeredPointers[actualType]
			if (!registeredPointerRecord) {
				return makeDefaultHandle.call(this)
			}
			var toType
			if (this.isConst) {
				toType = registeredPointerRecord.constPointerType
			} else {
				toType = registeredPointerRecord.pointerType
			}
			var dp = downcastPointer(rawPointer, this.registeredClass, toType.registeredClass)
			if (dp === null) {
				return makeDefaultHandle.call(this)
			}
			if (this.isSmartPointer) {
				return makeClassHandle(toType.registeredClass.instancePrototype, {
					ptrType: toType,
					ptr: dp,
					smartPtrType: this,
					smartPtr: ptr,
				})
			} else {
				return makeClassHandle(toType.registeredClass.instancePrototype, {
					ptrType: toType,
					ptr: dp,
				})
			}
		}
		function init_RegisteredPointer() {
			RegisteredPointer.prototype.getPointee = RegisteredPointer_getPointee
			RegisteredPointer.prototype.destructor = RegisteredPointer_destructor
			RegisteredPointer.prototype["argPackAdvance"] = 8
			RegisteredPointer.prototype["readValueFromPointer"] = simpleReadValueFromPointer
			RegisteredPointer.prototype["deleteObject"] = RegisteredPointer_deleteObject
			RegisteredPointer.prototype["fromWireType"] = RegisteredPointer_fromWireType
		}
		function RegisteredPointer(
			name,
			registeredClass,
			isReference,
			isConst,
			isSmartPointer,
			pointeeType,
			sharingPolicy,
			rawGetPointee,
			rawConstructor,
			rawShare,
			rawDestructor
		) {
			this.name = name
			this.registeredClass = registeredClass
			this.isReference = isReference
			this.isConst = isConst
			this.isSmartPointer = isSmartPointer
			this.pointeeType = pointeeType
			this.sharingPolicy = sharingPolicy
			this.rawGetPointee = rawGetPointee
			this.rawConstructor = rawConstructor
			this.rawShare = rawShare
			this.rawDestructor = rawDestructor
			if (!isSmartPointer && registeredClass.baseClass === undefined) {
				if (isConst) {
					this["toWireType"] = constNoSmartPtrRawPointerToWireType
					this.destructorFunction = null
				} else {
					this["toWireType"] = nonConstNoSmartPtrRawPointerToWireType
					this.destructorFunction = null
				}
			} else {
				this["toWireType"] = genericPointerToWireType
			}
		}
		function replacePublicSymbol(name, value, numArguments) {
			if (!Module.hasOwnProperty(name)) {
				throwInternalError("Replacing nonexistant public symbol")
			}
			if (undefined !== Module[name].overloadTable && undefined !== numArguments) {
				Module[name].overloadTable[numArguments] = value
			} else {
				Module[name] = value
				Module[name].argCount = numArguments
			}
		}
		function dynCallLegacy(sig, ptr, args) {
			assert(
				"dynCall_" + sig in Module,
				"bad function pointer type - no table for sig '" + sig + "'"
			)
			if (args && args.length) {
				assert(args.length === sig.substring(1).replace(/j/g, "--").length)
			} else {
				assert(sig.length == 1)
			}
			var f = Module["dynCall_" + sig]
			return args && args.length ? f.apply(null, [ptr].concat(args)) : f.call(null, ptr)
		}
		function dynCall(sig, ptr, args) {
			if (sig.includes("j")) {
				return dynCallLegacy(sig, ptr, args)
			}
			assert(getWasmTableEntry(ptr), "missing table entry in dynCall: " + ptr)
			return getWasmTableEntry(ptr).apply(null, args)
		}
		function getDynCaller(sig, ptr) {
			assert(sig.includes("j"), "getDynCaller should only be called with i64 sigs")
			var argCache = []
			return function () {
				argCache.length = arguments.length
				for (var i = 0; i < arguments.length; i++) {
					argCache[i] = arguments[i]
				}
				return dynCall(sig, ptr, argCache)
			}
		}
		function embind__requireFunction(signature, rawFunction) {
			signature = readLatin1String(signature)
			function makeDynCaller() {
				if (signature.includes("j")) {
					return getDynCaller(signature, rawFunction)
				}
				return getWasmTableEntry(rawFunction)
			}
			var fp = makeDynCaller()
			if (typeof fp !== "function") {
				throwBindingError(
					"unknown function pointer with signature " + signature + ": " + rawFunction
				)
			}
			return fp
		}
		var UnboundTypeError = undefined
		function getTypeName(type) {
			var ptr = ___getTypeName(type)
			var rv = readLatin1String(ptr)
			_free(ptr)
			return rv
		}
		function throwUnboundTypeError(message, types) {
			var unboundTypes = []
			var seen = {}
			function visit(type) {
				if (seen[type]) {
					return
				}
				if (registeredTypes[type]) {
					return
				}
				if (typeDependencies[type]) {
					typeDependencies[type].forEach(visit)
					return
				}
				unboundTypes.push(type)
				seen[type] = true
			}
			types.forEach(visit)
			throw new UnboundTypeError(message + ": " + unboundTypes.map(getTypeName).join([", "]))
		}
		function __embind_register_class(
			rawType,
			rawPointerType,
			rawConstPointerType,
			baseClassRawType,
			getActualTypeSignature,
			getActualType,
			upcastSignature,
			upcast,
			downcastSignature,
			downcast,
			name,
			destructorSignature,
			rawDestructor
		) {
			name = readLatin1String(name)
			getActualType = embind__requireFunction(getActualTypeSignature, getActualType)
			if (upcast) {
				upcast = embind__requireFunction(upcastSignature, upcast)
			}
			if (downcast) {
				downcast = embind__requireFunction(downcastSignature, downcast)
			}
			rawDestructor = embind__requireFunction(destructorSignature, rawDestructor)
			var legalFunctionName = makeLegalFunctionName(name)
			exposePublicSymbol(legalFunctionName, function () {
				throwUnboundTypeError("Cannot construct " + name + " due to unbound types", [
					baseClassRawType,
				])
			})
			whenDependentTypesAreResolved(
				[rawType, rawPointerType, rawConstPointerType],
				baseClassRawType ? [baseClassRawType] : [],
				function (base) {
					base = base[0]
					var baseClass
					var basePrototype
					if (baseClassRawType) {
						baseClass = base.registeredClass
						basePrototype = baseClass.instancePrototype
					} else {
						basePrototype = ClassHandle.prototype
					}
					var constructor = createNamedFunction(legalFunctionName, function () {
						if (Object.getPrototypeOf(this) !== instancePrototype) {
							throw new BindingError("Use 'new' to construct " + name)
						}
						if (undefined === registeredClass.constructor_body) {
							throw new BindingError(name + " has no accessible constructor")
						}
						var body = registeredClass.constructor_body[arguments.length]
						if (undefined === body) {
							throw new BindingError(
								"Tried to invoke ctor of " +
									name +
									" with invalid number of parameters (" +
									arguments.length +
									") - expected (" +
									Object.keys(registeredClass.constructor_body).toString() +
									") parameters instead!"
							)
						}
						return body.apply(this, arguments)
					})
					var instancePrototype = Object.create(basePrototype, {
						constructor: { value: constructor },
					})
					constructor.prototype = instancePrototype
					var registeredClass = new RegisteredClass(
						name,
						constructor,
						instancePrototype,
						rawDestructor,
						baseClass,
						getActualType,
						upcast,
						downcast
					)
					var referenceConverter = new RegisteredPointer(name, registeredClass, true, false, false)
					var pointerConverter = new RegisteredPointer(
						name + "*",
						registeredClass,
						false,
						false,
						false
					)
					var constPointerConverter = new RegisteredPointer(
						name + " const*",
						registeredClass,
						false,
						true,
						false
					)
					registeredPointers[rawType] = {
						pointerType: pointerConverter,
						constPointerType: constPointerConverter,
					}
					replacePublicSymbol(legalFunctionName, constructor)
					return [referenceConverter, pointerConverter, constPointerConverter]
				}
			)
		}
		function heap32VectorToArray(count, firstElement) {
			var array = []
			for (var i = 0; i < count; i++) {
				array.push(HEAP32[(firstElement >> 2) + i])
			}
			return array
		}
		function runDestructors(destructors) {
			while (destructors.length) {
				var ptr = destructors.pop()
				var del = destructors.pop()
				del(ptr)
			}
		}
		function __embind_register_class_constructor(
			rawClassType,
			argCount,
			rawArgTypesAddr,
			invokerSignature,
			invoker,
			rawConstructor
		) {
			assert(argCount > 0)
			var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr)
			invoker = embind__requireFunction(invokerSignature, invoker)
			whenDependentTypesAreResolved([], [rawClassType], function (classType) {
				classType = classType[0]
				var humanName = "constructor " + classType.name
				if (undefined === classType.registeredClass.constructor_body) {
					classType.registeredClass.constructor_body = []
				}
				if (undefined !== classType.registeredClass.constructor_body[argCount - 1]) {
					throw new BindingError(
						"Cannot register multiple constructors with identical number of parameters (" +
							(argCount - 1) +
							") for class '" +
							classType.name +
							"'! Overload resolution is currently only performed using the parameter count, not actual type info!"
					)
				}
				classType.registeredClass.constructor_body[argCount - 1] = function unboundTypeHandler() {
					throwUnboundTypeError(
						"Cannot construct " + classType.name + " due to unbound types",
						rawArgTypes
					)
				}
				whenDependentTypesAreResolved([], rawArgTypes, function (argTypes) {
					argTypes.splice(1, 0, null)
					classType.registeredClass.constructor_body[argCount - 1] = craftInvokerFunction(
						humanName,
						argTypes,
						null,
						invoker,
						rawConstructor
					)
					return []
				})
				return []
			})
		}
		function new_(constructor, argumentList) {
			if (!(constructor instanceof Function)) {
				throw new TypeError(
					"new_ called with constructor type " + typeof constructor + " which is not a function"
				)
			}
			var dummy = createNamedFunction(constructor.name || "unknownFunctionName", function () {})
			dummy.prototype = constructor.prototype
			var obj = new dummy()
			var r = constructor.apply(obj, argumentList)
			return r instanceof Object ? r : obj
		}
		function craftInvokerFunction(humanName, argTypes, classType, cppInvokerFunc, cppTargetFunc) {
			var argCount = argTypes.length
			if (argCount < 2) {
				throwBindingError(
					"argTypes array size mismatch! Must at least get return value and 'this' types!"
				)
			}
			var isClassMethodFunc = argTypes[1] !== null && classType !== null
			var needsDestructorStack = false
			for (var i = 1; i < argTypes.length; ++i) {
				if (argTypes[i] !== null && argTypes[i].destructorFunction === undefined) {
					needsDestructorStack = true
					break
				}
			}
			var returns = argTypes[0].name !== "void"
			var argsList = ""
			var argsListWired = ""
			for (var i = 0; i < argCount - 2; ++i) {
				argsList += (i !== 0 ? ", " : "") + "arg" + i
				argsListWired += (i !== 0 ? ", " : "") + "arg" + i + "Wired"
			}
			var invokerFnBody =
				"return function " +
				makeLegalFunctionName(humanName) +
				"(" +
				argsList +
				") {\n" +
				"if (arguments.length !== " +
				(argCount - 2) +
				") {\n" +
				"throwBindingError('function " +
				humanName +
				" called with ' + arguments.length + ' arguments, expected " +
				(argCount - 2) +
				" args!');\n" +
				"}\n"
			if (needsDestructorStack) {
				invokerFnBody += "var destructors = [];\n"
			}
			var dtorStack = needsDestructorStack ? "destructors" : "null"
			var args1 = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"]
			var args2 = [
				throwBindingError,
				cppInvokerFunc,
				cppTargetFunc,
				runDestructors,
				argTypes[0],
				argTypes[1],
			]
			if (isClassMethodFunc) {
				invokerFnBody += "var thisWired = classParam.toWireType(" + dtorStack + ", this);\n"
			}
			for (var i = 0; i < argCount - 2; ++i) {
				invokerFnBody +=
					"var arg" +
					i +
					"Wired = argType" +
					i +
					".toWireType(" +
					dtorStack +
					", arg" +
					i +
					"); // " +
					argTypes[i + 2].name +
					"\n"
				args1.push("argType" + i)
				args2.push(argTypes[i + 2])
			}
			if (isClassMethodFunc) {
				argsListWired = "thisWired" + (argsListWired.length > 0 ? ", " : "") + argsListWired
			}
			invokerFnBody +=
				(returns ? "var rv = " : "") +
				"invoker(fn" +
				(argsListWired.length > 0 ? ", " : "") +
				argsListWired +
				");\n"
			if (needsDestructorStack) {
				invokerFnBody += "runDestructors(destructors);\n"
			} else {
				for (var i = isClassMethodFunc ? 1 : 2; i < argTypes.length; ++i) {
					var paramName = i === 1 ? "thisWired" : "arg" + (i - 2) + "Wired"
					if (argTypes[i].destructorFunction !== null) {
						invokerFnBody += paramName + "_dtor(" + paramName + "); // " + argTypes[i].name + "\n"
						args1.push(paramName + "_dtor")
						args2.push(argTypes[i].destructorFunction)
					}
				}
			}
			if (returns) {
				invokerFnBody += "var ret = retType.fromWireType(rv);\n" + "return ret;\n"
			} else {
			}
			invokerFnBody += "}\n"
			args1.push(invokerFnBody)
			var invokerFunction = new_(Function, args1).apply(null, args2)
			return invokerFunction
		}
		function __embind_register_class_function(
			rawClassType,
			methodName,
			argCount,
			rawArgTypesAddr,
			invokerSignature,
			rawInvoker,
			context,
			isPureVirtual
		) {
			var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr)
			methodName = readLatin1String(methodName)
			rawInvoker = embind__requireFunction(invokerSignature, rawInvoker)
			whenDependentTypesAreResolved([], [rawClassType], function (classType) {
				classType = classType[0]
				var humanName = classType.name + "." + methodName
				if (methodName.startsWith("@@")) {
					methodName = Symbol[methodName.substring(2)]
				}
				if (isPureVirtual) {
					classType.registeredClass.pureVirtualFunctions.push(methodName)
				}
				function unboundTypesHandler() {
					throwUnboundTypeError("Cannot call " + humanName + " due to unbound types", rawArgTypes)
				}
				var proto = classType.registeredClass.instancePrototype
				var method = proto[methodName]
				if (
					undefined === method ||
					(undefined === method.overloadTable &&
						method.className !== classType.name &&
						method.argCount === argCount - 2)
				) {
					unboundTypesHandler.argCount = argCount - 2
					unboundTypesHandler.className = classType.name
					proto[methodName] = unboundTypesHandler
				} else {
					ensureOverloadTable(proto, methodName, humanName)
					proto[methodName].overloadTable[argCount - 2] = unboundTypesHandler
				}
				whenDependentTypesAreResolved([], rawArgTypes, function (argTypes) {
					var memberFunction = craftInvokerFunction(
						humanName,
						argTypes,
						classType,
						rawInvoker,
						context
					)
					if (undefined === proto[methodName].overloadTable) {
						memberFunction.argCount = argCount - 2
						proto[methodName] = memberFunction
					} else {
						proto[methodName].overloadTable[argCount - 2] = memberFunction
					}
					return []
				})
				return []
			})
		}
		var emval_free_list = []
		var emval_handle_array = [
			{},
			{ value: undefined },
			{ value: null },
			{ value: true },
			{ value: false },
		]
		function __emval_decref(handle) {
			if (handle > 4 && 0 === --emval_handle_array[handle].refcount) {
				emval_handle_array[handle] = undefined
				emval_free_list.push(handle)
			}
		}
		function count_emval_handles() {
			var count = 0
			for (var i = 5; i < emval_handle_array.length; ++i) {
				if (emval_handle_array[i] !== undefined) {
					++count
				}
			}
			return count
		}
		function get_first_emval() {
			for (var i = 5; i < emval_handle_array.length; ++i) {
				if (emval_handle_array[i] !== undefined) {
					return emval_handle_array[i]
				}
			}
			return null
		}
		function init_emval() {
			Module["count_emval_handles"] = count_emval_handles
			Module["get_first_emval"] = get_first_emval
		}
		var Emval = {
			toValue: function (handle) {
				if (!handle) {
					throwBindingError("Cannot use deleted val. handle = " + handle)
				}
				return emval_handle_array[handle].value
			},
			toHandle: function (value) {
				switch (value) {
					case undefined: {
						return 1
					}
					case null: {
						return 2
					}
					case true: {
						return 3
					}
					case false: {
						return 4
					}
					default: {
						var handle = emval_free_list.length ? emval_free_list.pop() : emval_handle_array.length
						emval_handle_array[handle] = { refcount: 1, value: value }
						return handle
					}
				}
			},
		}
		function __embind_register_emval(rawType, name) {
			name = readLatin1String(name)
			registerType(rawType, {
				name: name,
				fromWireType: function (handle) {
					var rv = Emval.toValue(handle)
					__emval_decref(handle)
					return rv
				},
				toWireType: function (destructors, value) {
					return Emval.toHandle(value)
				},
				argPackAdvance: 8,
				readValueFromPointer: simpleReadValueFromPointer,
				destructorFunction: null,
			})
		}
		function _embind_repr(v) {
			if (v === null) {
				return "null"
			}
			var t = typeof v
			if (t === "object" || t === "array" || t === "function") {
				return v.toString()
			} else {
				return "" + v
			}
		}
		function floatReadValueFromPointer(name, shift) {
			switch (shift) {
				case 2:
					return function (pointer) {
						return this["fromWireType"](HEAPF32[pointer >> 2])
					}
				case 3:
					return function (pointer) {
						return this["fromWireType"](HEAPF64[pointer >> 3])
					}
				default:
					throw new TypeError("Unknown float type: " + name)
			}
		}
		function __embind_register_float(rawType, name, size) {
			var shift = getShiftFromSize(size)
			name = readLatin1String(name)
			registerType(rawType, {
				name: name,
				fromWireType: function (value) {
					return value
				},
				toWireType: function (destructors, value) {
					if (typeof value !== "number" && typeof value !== "boolean") {
						throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name)
					}
					return value
				},
				argPackAdvance: 8,
				readValueFromPointer: floatReadValueFromPointer(name, shift),
				destructorFunction: null,
			})
		}
		function integerReadValueFromPointer(name, shift, signed) {
			switch (shift) {
				case 0:
					return signed
						? function readS8FromPointer(pointer) {
								return HEAP8[pointer]
						  }
						: function readU8FromPointer(pointer) {
								return HEAPU8[pointer]
						  }
				case 1:
					return signed
						? function readS16FromPointer(pointer) {
								return HEAP16[pointer >> 1]
						  }
						: function readU16FromPointer(pointer) {
								return HEAPU16[pointer >> 1]
						  }
				case 2:
					return signed
						? function readS32FromPointer(pointer) {
								return HEAP32[pointer >> 2]
						  }
						: function readU32FromPointer(pointer) {
								return HEAPU32[pointer >> 2]
						  }
				default:
					throw new TypeError("Unknown integer type: " + name)
			}
		}
		function __embind_register_integer(primitiveType, name, size, minRange, maxRange) {
			name = readLatin1String(name)
			if (maxRange === -1) {
				maxRange = 4294967295
			}
			var shift = getShiftFromSize(size)
			var fromWireType = function (value) {
				return value
			}
			if (minRange === 0) {
				var bitshift = 32 - 8 * size
				fromWireType = function (value) {
					return (value << bitshift) >>> bitshift
				}
			}
			var isUnsignedType = name.includes("unsigned")
			var checkAssertions = function (value, toTypeName) {
				if (typeof value !== "number" && typeof value !== "boolean") {
					throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + toTypeName)
				}
				if (value < minRange || value > maxRange) {
					throw new TypeError(
						'Passing a number "' +
							_embind_repr(value) +
							'" from JS side to C/C++ side to an argument of type "' +
							name +
							'", which is outside the valid range [' +
							minRange +
							", " +
							maxRange +
							"]!"
					)
				}
			}
			var toWireType
			if (isUnsignedType) {
				toWireType = function (destructors, value) {
					checkAssertions(value, this.name)
					return value >>> 0
				}
			} else {
				toWireType = function (destructors, value) {
					checkAssertions(value, this.name)
					return value
				}
			}
			registerType(primitiveType, {
				name: name,
				fromWireType: fromWireType,
				toWireType: toWireType,
				argPackAdvance: 8,
				readValueFromPointer: integerReadValueFromPointer(name, shift, minRange !== 0),
				destructorFunction: null,
			})
		}
		function __embind_register_memory_view(rawType, dataTypeIndex, name) {
			var typeMapping = [
				Int8Array,
				Uint8Array,
				Int16Array,
				Uint16Array,
				Int32Array,
				Uint32Array,
				Float32Array,
				Float64Array,
			]
			var TA = typeMapping[dataTypeIndex]
			function decodeMemoryView(handle) {
				handle = handle >> 2
				var heap = HEAPU32
				var size = heap[handle]
				var data = heap[handle + 1]
				return new TA(buffer, data, size)
			}
			name = readLatin1String(name)
			registerType(
				rawType,
				{
					name: name,
					fromWireType: decodeMemoryView,
					argPackAdvance: 8,
					readValueFromPointer: decodeMemoryView,
				},
				{ ignoreDuplicateRegistrations: true }
			)
		}
		function __embind_register_std_string(rawType, name) {
			name = readLatin1String(name)
			var stdStringIsUTF8 = name === "std::string"
			registerType(rawType, {
				name: name,
				fromWireType: function (value) {
					var length = HEAPU32[value >> 2]
					var str
					if (stdStringIsUTF8) {
						var decodeStartPtr = value + 4
						for (var i = 0; i <= length; ++i) {
							var currentBytePtr = value + 4 + i
							if (i == length || HEAPU8[currentBytePtr] == 0) {
								var maxRead = currentBytePtr - decodeStartPtr
								var stringSegment = UTF8ToString(decodeStartPtr, maxRead)
								if (str === undefined) {
									str = stringSegment
								} else {
									str += String.fromCharCode(0)
									str += stringSegment
								}
								decodeStartPtr = currentBytePtr + 1
							}
						}
					} else {
						var a = new Array(length)
						for (var i = 0; i < length; ++i) {
							a[i] = String.fromCharCode(HEAPU8[value + 4 + i])
						}
						str = a.join("")
					}
					_free(value)
					return str
				},
				toWireType: function (destructors, value) {
					if (value instanceof ArrayBuffer) {
						value = new Uint8Array(value)
					}
					var getLength
					var valueIsOfTypeString = typeof value === "string"
					if (
						!(
							valueIsOfTypeString ||
							value instanceof Uint8Array ||
							value instanceof Uint8ClampedArray ||
							value instanceof Int8Array
						)
					) {
						throwBindingError("Cannot pass non-string to std::string")
					}
					if (stdStringIsUTF8 && valueIsOfTypeString) {
						getLength = function () {
							return lengthBytesUTF8(value)
						}
					} else {
						getLength = function () {
							return value.length
						}
					}
					var length = getLength()
					var ptr = _malloc(4 + length + 1)
					HEAPU32[ptr >> 2] = length
					if (stdStringIsUTF8 && valueIsOfTypeString) {
						stringToUTF8(value, ptr + 4, length + 1)
					} else {
						if (valueIsOfTypeString) {
							for (var i = 0; i < length; ++i) {
								var charCode = value.charCodeAt(i)
								if (charCode > 255) {
									_free(ptr)
									throwBindingError("String has UTF-16 code units that do not fit in 8 bits")
								}
								HEAPU8[ptr + 4 + i] = charCode
							}
						} else {
							for (var i = 0; i < length; ++i) {
								HEAPU8[ptr + 4 + i] = value[i]
							}
						}
					}
					if (destructors !== null) {
						destructors.push(_free, ptr)
					}
					return ptr
				},
				argPackAdvance: 8,
				readValueFromPointer: simpleReadValueFromPointer,
				destructorFunction: function (ptr) {
					_free(ptr)
				},
			})
		}
		function __embind_register_std_wstring(rawType, charSize, name) {
			name = readLatin1String(name)
			var decodeString, encodeString, getHeap, lengthBytesUTF, shift
			if (charSize === 2) {
				decodeString = UTF16ToString
				encodeString = stringToUTF16
				lengthBytesUTF = lengthBytesUTF16
				getHeap = function () {
					return HEAPU16
				}
				shift = 1
			} else if (charSize === 4) {
				decodeString = UTF32ToString
				encodeString = stringToUTF32
				lengthBytesUTF = lengthBytesUTF32
				getHeap = function () {
					return HEAPU32
				}
				shift = 2
			}
			registerType(rawType, {
				name: name,
				fromWireType: function (value) {
					var length = HEAPU32[value >> 2]
					var HEAP = getHeap()
					var str
					var decodeStartPtr = value + 4
					for (var i = 0; i <= length; ++i) {
						var currentBytePtr = value + 4 + i * charSize
						if (i == length || HEAP[currentBytePtr >> shift] == 0) {
							var maxReadBytes = currentBytePtr - decodeStartPtr
							var stringSegment = decodeString(decodeStartPtr, maxReadBytes)
							if (str === undefined) {
								str = stringSegment
							} else {
								str += String.fromCharCode(0)
								str += stringSegment
							}
							decodeStartPtr = currentBytePtr + charSize
						}
					}
					_free(value)
					return str
				},
				toWireType: function (destructors, value) {
					if (!(typeof value === "string")) {
						throwBindingError("Cannot pass non-string to C++ string type " + name)
					}
					var length = lengthBytesUTF(value)
					var ptr = _malloc(4 + length + charSize)
					HEAPU32[ptr >> 2] = length >> shift
					encodeString(value, ptr + 4, length + charSize)
					if (destructors !== null) {
						destructors.push(_free, ptr)
					}
					return ptr
				},
				argPackAdvance: 8,
				readValueFromPointer: simpleReadValueFromPointer,
				destructorFunction: function (ptr) {
					_free(ptr)
				},
			})
		}
		function __embind_register_void(rawType, name) {
			name = readLatin1String(name)
			registerType(rawType, {
				isVoid: true,
				name: name,
				argPackAdvance: 0,
				fromWireType: function () {
					return undefined
				},
				toWireType: function (destructors, o) {
					return undefined
				},
			})
		}
		function _abort() {
			abort("native code called abort()")
		}
		function _emscripten_memcpy_big(dest, src, num) {
			HEAPU8.copyWithin(dest, src, src + num)
		}
		function emscripten_realloc_buffer(size) {
			try {
				wasmMemory.grow((size - buffer.byteLength + 65535) >>> 16)
				updateGlobalBufferAndViews(wasmMemory.buffer)
				return 1
			} catch (e) {
				err(
					"emscripten_realloc_buffer: Attempted to grow heap from " +
						buffer.byteLength +
						" bytes to " +
						size +
						" bytes, but got error: " +
						e
				)
			}
		}
		function _emscripten_resize_heap(requestedSize) {
			var oldSize = HEAPU8.length
			requestedSize = requestedSize >>> 0
			assert(requestedSize > oldSize)
			var maxHeapSize = 2147483648
			if (requestedSize > maxHeapSize) {
				err(
					"Cannot enlarge memory, asked to go up to " +
						requestedSize +
						" bytes, but the limit is " +
						maxHeapSize +
						" bytes!"
				)
				return false
			}
			for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
				var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown)
				overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296)
				var newSize = Math.min(
					maxHeapSize,
					alignUp(Math.max(requestedSize, overGrownHeapSize), 65536)
				)
				var replacement = emscripten_realloc_buffer(newSize)
				if (replacement) {
					return true
				}
			}
			err(
				"Failed to grow the heap from " +
					oldSize +
					" bytes to " +
					newSize +
					" bytes, not enough memory!"
			)
			return false
		}
		var SYSCALLS = {
			mappings: {},
			buffers: [null, [], []],
			printChar: function (stream, curr) {
				var buffer = SYSCALLS.buffers[stream]
				assert(buffer)
				if (curr === 0 || curr === 10) {
					;(stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0))
					buffer.length = 0
				} else {
					buffer.push(curr)
				}
			},
			varargs: undefined,
			get: function () {
				assert(SYSCALLS.varargs != undefined)
				SYSCALLS.varargs += 4
				var ret = HEAP32[(SYSCALLS.varargs - 4) >> 2]
				return ret
			},
			getStr: function (ptr) {
				var ret = UTF8ToString(ptr)
				return ret
			},
			get64: function (low, high) {
				if (low >= 0) assert(high === 0)
				else assert(high === -1)
				return low
			},
		}
		function _fd_close(fd) {
			abort("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM")
			return 0
		}
		function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
			abort("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM")
		}
		function flush_NO_FILESYSTEM() {
			if (typeof _fflush !== "undefined") _fflush(0)
			var buffers = SYSCALLS.buffers
			if (buffers[1].length) SYSCALLS.printChar(1, 10)
			if (buffers[2].length) SYSCALLS.printChar(2, 10)
		}
		function _fd_write(fd, iov, iovcnt, pnum) {
			var num = 0
			for (var i = 0; i < iovcnt; i++) {
				var ptr = HEAP32[iov >> 2]
				var len = HEAP32[(iov + 4) >> 2]
				iov += 8
				for (var j = 0; j < len; j++) {
					SYSCALLS.printChar(fd, HEAPU8[ptr + j])
				}
				num += len
			}
			HEAP32[pnum >> 2] = num
			return 0
		}
		function _getTempRet0() {
			return getTempRet0()
		}
		function getRandomDevice() {
			if (typeof crypto === "object" && typeof crypto["getRandomValues"] === "function") {
				var randomBuffer = new Uint8Array(1)
				return function () {
					crypto.getRandomValues(randomBuffer)
					return randomBuffer[0]
				}
			} else
				return function () {
					abort(
						"no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: function(array) { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };"
					)
				}
		}
		function _getentropy(buffer, size) {
			if (!_getentropy.randomDevice) {
				_getentropy.randomDevice = getRandomDevice()
			}
			for (var i = 0; i < size; i++) {
				HEAP8[(buffer + i) >> 0] = _getentropy.randomDevice()
			}
			return 0
		}
		function _llvm_eh_typeid_for(type) {
			return type
		}
		function _setTempRet0(val) {
			setTempRet0(val)
		}
		embind_init_charCodes()
		BindingError = Module["BindingError"] = extendError(Error, "BindingError")
		InternalError = Module["InternalError"] = extendError(Error, "InternalError")
		init_ClassHandle()
		init_RegisteredPointer()
		init_embind()
		UnboundTypeError = Module["UnboundTypeError"] = extendError(Error, "UnboundTypeError")
		init_emval()
		var ASSERTIONS = true
		var asmLibraryArg = {
			__cxa_allocate_exception: ___cxa_allocate_exception,
			__cxa_begin_catch: ___cxa_begin_catch,
			__cxa_end_catch: ___cxa_end_catch,
			__cxa_find_matching_catch_2: ___cxa_find_matching_catch_2,
			__cxa_find_matching_catch_3: ___cxa_find_matching_catch_3,
			__cxa_free_exception: ___cxa_free_exception,
			__cxa_throw: ___cxa_throw,
			__resumeException: ___resumeException,
			_embind_register_bigint: __embind_register_bigint,
			_embind_register_bool: __embind_register_bool,
			_embind_register_class: __embind_register_class,
			_embind_register_class_constructor: __embind_register_class_constructor,
			_embind_register_class_function: __embind_register_class_function,
			_embind_register_emval: __embind_register_emval,
			_embind_register_float: __embind_register_float,
			_embind_register_integer: __embind_register_integer,
			_embind_register_memory_view: __embind_register_memory_view,
			_embind_register_std_string: __embind_register_std_string,
			_embind_register_std_wstring: __embind_register_std_wstring,
			_embind_register_void: __embind_register_void,
			abort: _abort,
			emscripten_memcpy_big: _emscripten_memcpy_big,
			emscripten_resize_heap: _emscripten_resize_heap,
			fd_close: _fd_close,
			fd_seek: _fd_seek,
			fd_write: _fd_write,
			getTempRet0: _getTempRet0,
			getentropy: _getentropy,
			invoke_i: invoke_i,
			invoke_ii: invoke_ii,
			invoke_iii: invoke_iii,
			invoke_iiii: invoke_iiii,
			invoke_iiiii: invoke_iiiii,
			invoke_v: invoke_v,
			invoke_vi: invoke_vi,
			invoke_vii: invoke_vii,
			invoke_viii: invoke_viii,
			invoke_viiii: invoke_viiii,
			llvm_eh_typeid_for: _llvm_eh_typeid_for,
			setTempRet0: _setTempRet0,
		}
		var asm = createWasm()
		var ___wasm_call_ctors = (Module["___wasm_call_ctors"] =
			createExportWrapper("__wasm_call_ctors"))
		var _test_function = (Module["_test_function"] = createExportWrapper("test_function"))
		var _malloc = (Module["_malloc"] = createExportWrapper("malloc"))
		var ___getTypeName = (Module["___getTypeName"] = createExportWrapper("__getTypeName"))
		var ___embind_register_native_and_builtin_types = (Module[
			"___embind_register_native_and_builtin_types"
		] = createExportWrapper("__embind_register_native_and_builtin_types"))
		var ___errno_location = (Module["___errno_location"] = createExportWrapper("__errno_location"))
		var _fflush = (Module["_fflush"] = createExportWrapper("fflush"))
		var _setThrew = (Module["_setThrew"] = createExportWrapper("setThrew"))
		var _emscripten_stack_init = (Module["_emscripten_stack_init"] = function () {
			return (_emscripten_stack_init = Module["_emscripten_stack_init"] =
				Module["asm"]["emscripten_stack_init"]).apply(null, arguments)
		})
		var _emscripten_stack_get_free = (Module["_emscripten_stack_get_free"] = function () {
			return (_emscripten_stack_get_free = Module["_emscripten_stack_get_free"] =
				Module["asm"]["emscripten_stack_get_free"]).apply(null, arguments)
		})
		var _emscripten_stack_get_end = (Module["_emscripten_stack_get_end"] = function () {
			return (_emscripten_stack_get_end = Module["_emscripten_stack_get_end"] =
				Module["asm"]["emscripten_stack_get_end"]).apply(null, arguments)
		})
		var stackSave = (Module["stackSave"] = createExportWrapper("stackSave"))
		var stackRestore = (Module["stackRestore"] = createExportWrapper("stackRestore"))
		var stackAlloc = (Module["stackAlloc"] = createExportWrapper("stackAlloc"))
		var _free = (Module["_free"] = createExportWrapper("free"))
		var ___cxa_can_catch = (Module["___cxa_can_catch"] = createExportWrapper("__cxa_can_catch"))
		var ___cxa_is_pointer_type = (Module["___cxa_is_pointer_type"] =
			createExportWrapper("__cxa_is_pointer_type"))
		var dynCall_jiji = (Module["dynCall_jiji"] = createExportWrapper("dynCall_jiji"))
		function invoke_vii(index, a1, a2) {
			var sp = stackSave()
			try {
				getWasmTableEntry(index)(a1, a2)
			} catch (e) {
				stackRestore(sp)
				if (e !== e + 0 && e !== "longjmp") throw e
				_setThrew(1, 0)
			}
		}
		function invoke_ii(index, a1) {
			var sp = stackSave()
			try {
				return getWasmTableEntry(index)(a1)
			} catch (e) {
				stackRestore(sp)
				if (e !== e + 0 && e !== "longjmp") throw e
				_setThrew(1, 0)
			}
		}
		function invoke_iii(index, a1, a2) {
			var sp = stackSave()
			try {
				return getWasmTableEntry(index)(a1, a2)
			} catch (e) {
				stackRestore(sp)
				if (e !== e + 0 && e !== "longjmp") throw e
				_setThrew(1, 0)
			}
		}
		function invoke_viii(index, a1, a2, a3) {
			var sp = stackSave()
			try {
				getWasmTableEntry(index)(a1, a2, a3)
			} catch (e) {
				stackRestore(sp)
				if (e !== e + 0 && e !== "longjmp") throw e
				_setThrew(1, 0)
			}
		}
		function invoke_v(index) {
			var sp = stackSave()
			try {
				getWasmTableEntry(index)()
			} catch (e) {
				stackRestore(sp)
				if (e !== e + 0 && e !== "longjmp") throw e
				_setThrew(1, 0)
			}
		}
		function invoke_vi(index, a1) {
			var sp = stackSave()
			try {
				getWasmTableEntry(index)(a1)
			} catch (e) {
				stackRestore(sp)
				if (e !== e + 0 && e !== "longjmp") throw e
				_setThrew(1, 0)
			}
		}
		function invoke_iiiii(index, a1, a2, a3, a4) {
			var sp = stackSave()
			try {
				return getWasmTableEntry(index)(a1, a2, a3, a4)
			} catch (e) {
				stackRestore(sp)
				if (e !== e + 0 && e !== "longjmp") throw e
				_setThrew(1, 0)
			}
		}
		function invoke_iiii(index, a1, a2, a3) {
			var sp = stackSave()
			try {
				return getWasmTableEntry(index)(a1, a2, a3)
			} catch (e) {
				stackRestore(sp)
				if (e !== e + 0 && e !== "longjmp") throw e
				_setThrew(1, 0)
			}
		}
		function invoke_i(index) {
			var sp = stackSave()
			try {
				return getWasmTableEntry(index)()
			} catch (e) {
				stackRestore(sp)
				if (e !== e + 0 && e !== "longjmp") throw e
				_setThrew(1, 0)
			}
		}
		function invoke_viiii(index, a1, a2, a3, a4) {
			var sp = stackSave()
			try {
				getWasmTableEntry(index)(a1, a2, a3, a4)
			} catch (e) {
				stackRestore(sp)
				if (e !== e + 0 && e !== "longjmp") throw e
				_setThrew(1, 0)
			}
		}
		if (!Object.getOwnPropertyDescriptor(Module, "intArrayFromString"))
			Module["intArrayFromString"] = function () {
				abort(
					"'intArrayFromString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "intArrayToString"))
			Module["intArrayToString"] = function () {
				abort(
					"'intArrayToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		Module["ccall"] = ccall
		Module["cwrap"] = cwrap
		if (!Object.getOwnPropertyDescriptor(Module, "setValue"))
			Module["setValue"] = function () {
				abort("'setValue' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "getValue"))
			Module["getValue"] = function () {
				abort("'getValue' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "allocate"))
			Module["allocate"] = function () {
				abort("'allocate' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "UTF8ArrayToString"))
			Module["UTF8ArrayToString"] = function () {
				abort(
					"'UTF8ArrayToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "UTF8ToString"))
			Module["UTF8ToString"] = function () {
				abort("'UTF8ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8Array"))
			Module["stringToUTF8Array"] = function () {
				abort(
					"'stringToUTF8Array' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8"))
			Module["stringToUTF8"] = function () {
				abort("'stringToUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF8"))
			Module["lengthBytesUTF8"] = function () {
				abort(
					"'lengthBytesUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "stackTrace"))
			Module["stackTrace"] = function () {
				abort("'stackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "addOnPreRun"))
			Module["addOnPreRun"] = function () {
				abort("'addOnPreRun' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "addOnInit"))
			Module["addOnInit"] = function () {
				abort("'addOnInit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "addOnPreMain"))
			Module["addOnPreMain"] = function () {
				abort("'addOnPreMain' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "addOnExit"))
			Module["addOnExit"] = function () {
				abort("'addOnExit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "addOnPostRun"))
			Module["addOnPostRun"] = function () {
				abort("'addOnPostRun' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "writeStringToMemory"))
			Module["writeStringToMemory"] = function () {
				abort(
					"'writeStringToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "writeArrayToMemory"))
			Module["writeArrayToMemory"] = function () {
				abort(
					"'writeArrayToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "writeAsciiToMemory"))
			Module["writeAsciiToMemory"] = function () {
				abort(
					"'writeAsciiToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "addRunDependency"))
			Module["addRunDependency"] = function () {
				abort(
					"'addRunDependency' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "removeRunDependency"))
			Module["removeRunDependency"] = function () {
				abort(
					"'removeRunDependency' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "FS_createFolder"))
			Module["FS_createFolder"] = function () {
				abort(
					"'FS_createFolder' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "FS_createPath"))
			Module["FS_createPath"] = function () {
				abort(
					"'FS_createPath' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "FS_createDataFile"))
			Module["FS_createDataFile"] = function () {
				abort(
					"'FS_createDataFile' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "FS_createPreloadedFile"))
			Module["FS_createPreloadedFile"] = function () {
				abort(
					"'FS_createPreloadedFile' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "FS_createLazyFile"))
			Module["FS_createLazyFile"] = function () {
				abort(
					"'FS_createLazyFile' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "FS_createLink"))
			Module["FS_createLink"] = function () {
				abort("'FS_createLink' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "FS_createDevice"))
			Module["FS_createDevice"] = function () {
				abort(
					"'FS_createDevice' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "FS_unlink"))
			Module["FS_unlink"] = function () {
				abort(
					"'FS_unlink' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "getLEB"))
			Module["getLEB"] = function () {
				abort("'getLEB' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "getFunctionTables"))
			Module["getFunctionTables"] = function () {
				abort(
					"'getFunctionTables' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "alignFunctionTables"))
			Module["alignFunctionTables"] = function () {
				abort(
					"'alignFunctionTables' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "registerFunctions"))
			Module["registerFunctions"] = function () {
				abort(
					"'registerFunctions' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "addFunction"))
			Module["addFunction"] = function () {
				abort("'addFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "removeFunction"))
			Module["removeFunction"] = function () {
				abort("'removeFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper"))
			Module["getFuncWrapper"] = function () {
				abort("'getFuncWrapper' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "prettyPrint"))
			Module["prettyPrint"] = function () {
				abort("'prettyPrint' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "dynCall"))
			Module["dynCall"] = function () {
				abort("'dynCall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "getCompilerSetting"))
			Module["getCompilerSetting"] = function () {
				abort(
					"'getCompilerSetting' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "print"))
			Module["print"] = function () {
				abort("'print' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "printErr"))
			Module["printErr"] = function () {
				abort("'printErr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "getTempRet0"))
			Module["getTempRet0"] = function () {
				abort("'getTempRet0' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "setTempRet0"))
			Module["setTempRet0"] = function () {
				abort("'setTempRet0' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "callMain"))
			Module["callMain"] = function () {
				abort("'callMain' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "abort"))
			Module["abort"] = function () {
				abort("'abort' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "keepRuntimeAlive"))
			Module["keepRuntimeAlive"] = function () {
				abort(
					"'keepRuntimeAlive' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "zeroMemory"))
			Module["zeroMemory"] = function () {
				abort("'zeroMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "stringToNewUTF8"))
			Module["stringToNewUTF8"] = function () {
				abort(
					"'stringToNewUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "setFileTime"))
			Module["setFileTime"] = function () {
				abort("'setFileTime' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "emscripten_realloc_buffer"))
			Module["emscripten_realloc_buffer"] = function () {
				abort(
					"'emscripten_realloc_buffer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "ENV"))
			Module["ENV"] = function () {
				abort("'ENV' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "withStackSave"))
			Module["withStackSave"] = function () {
				abort("'withStackSave' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_CODES"))
			Module["ERRNO_CODES"] = function () {
				abort("'ERRNO_CODES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_MESSAGES"))
			Module["ERRNO_MESSAGES"] = function () {
				abort("'ERRNO_MESSAGES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "setErrNo"))
			Module["setErrNo"] = function () {
				abort("'setErrNo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "inetPton4"))
			Module["inetPton4"] = function () {
				abort("'inetPton4' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "inetNtop4"))
			Module["inetNtop4"] = function () {
				abort("'inetNtop4' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "inetPton6"))
			Module["inetPton6"] = function () {
				abort("'inetPton6' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "inetNtop6"))
			Module["inetNtop6"] = function () {
				abort("'inetNtop6' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "readSockaddr"))
			Module["readSockaddr"] = function () {
				abort("'readSockaddr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "writeSockaddr"))
			Module["writeSockaddr"] = function () {
				abort("'writeSockaddr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "DNS"))
			Module["DNS"] = function () {
				abort("'DNS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "getHostByName"))
			Module["getHostByName"] = function () {
				abort("'getHostByName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "GAI_ERRNO_MESSAGES"))
			Module["GAI_ERRNO_MESSAGES"] = function () {
				abort(
					"'GAI_ERRNO_MESSAGES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "Protocols"))
			Module["Protocols"] = function () {
				abort("'Protocols' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "Sockets"))
			Module["Sockets"] = function () {
				abort("'Sockets' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "getRandomDevice"))
			Module["getRandomDevice"] = function () {
				abort(
					"'getRandomDevice' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "traverseStack"))
			Module["traverseStack"] = function () {
				abort("'traverseStack' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "convertFrameToPC"))
			Module["convertFrameToPC"] = function () {
				abort(
					"'convertFrameToPC' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "UNWIND_CACHE"))
			Module["UNWIND_CACHE"] = function () {
				abort("'UNWIND_CACHE' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "saveInUnwindCache"))
			Module["saveInUnwindCache"] = function () {
				abort(
					"'saveInUnwindCache' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "convertPCtoSourceLocation"))
			Module["convertPCtoSourceLocation"] = function () {
				abort(
					"'convertPCtoSourceLocation' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgsArray"))
			Module["readAsmConstArgsArray"] = function () {
				abort(
					"'readAsmConstArgsArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgs"))
			Module["readAsmConstArgs"] = function () {
				abort(
					"'readAsmConstArgs' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "mainThreadEM_ASM"))
			Module["mainThreadEM_ASM"] = function () {
				abort(
					"'mainThreadEM_ASM' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "jstoi_q"))
			Module["jstoi_q"] = function () {
				abort("'jstoi_q' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "jstoi_s"))
			Module["jstoi_s"] = function () {
				abort("'jstoi_s' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "getExecutableName"))
			Module["getExecutableName"] = function () {
				abort(
					"'getExecutableName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "listenOnce"))
			Module["listenOnce"] = function () {
				abort("'listenOnce' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "autoResumeAudioContext"))
			Module["autoResumeAudioContext"] = function () {
				abort(
					"'autoResumeAudioContext' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "dynCallLegacy"))
			Module["dynCallLegacy"] = function () {
				abort("'dynCallLegacy' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "getDynCaller"))
			Module["getDynCaller"] = function () {
				abort("'getDynCaller' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "dynCall"))
			Module["dynCall"] = function () {
				abort("'dynCall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "callRuntimeCallbacks"))
			Module["callRuntimeCallbacks"] = function () {
				abort(
					"'callRuntimeCallbacks' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "wasmTableMirror"))
			Module["wasmTableMirror"] = function () {
				abort(
					"'wasmTableMirror' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "setWasmTableEntry"))
			Module["setWasmTableEntry"] = function () {
				abort(
					"'setWasmTableEntry' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "getWasmTableEntry"))
			Module["getWasmTableEntry"] = function () {
				abort(
					"'getWasmTableEntry' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "handleException"))
			Module["handleException"] = function () {
				abort(
					"'handleException' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "runtimeKeepalivePush"))
			Module["runtimeKeepalivePush"] = function () {
				abort(
					"'runtimeKeepalivePush' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "runtimeKeepalivePop"))
			Module["runtimeKeepalivePop"] = function () {
				abort(
					"'runtimeKeepalivePop' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "callUserCallback"))
			Module["callUserCallback"] = function () {
				abort(
					"'callUserCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "maybeExit"))
			Module["maybeExit"] = function () {
				abort("'maybeExit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "safeSetTimeout"))
			Module["safeSetTimeout"] = function () {
				abort("'safeSetTimeout' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "asmjsMangle"))
			Module["asmjsMangle"] = function () {
				abort("'asmjsMangle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "asyncLoad"))
			Module["asyncLoad"] = function () {
				abort("'asyncLoad' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "alignMemory"))
			Module["alignMemory"] = function () {
				abort("'alignMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "mmapAlloc"))
			Module["mmapAlloc"] = function () {
				abort("'mmapAlloc' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "reallyNegative"))
			Module["reallyNegative"] = function () {
				abort("'reallyNegative' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "unSign"))
			Module["unSign"] = function () {
				abort("'unSign' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "reSign"))
			Module["reSign"] = function () {
				abort("'reSign' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "formatString"))
			Module["formatString"] = function () {
				abort("'formatString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "PATH"))
			Module["PATH"] = function () {
				abort("'PATH' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "PATH_FS"))
			Module["PATH_FS"] = function () {
				abort("'PATH_FS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "SYSCALLS"))
			Module["SYSCALLS"] = function () {
				abort("'SYSCALLS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "syscallMmap2"))
			Module["syscallMmap2"] = function () {
				abort("'syscallMmap2' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "syscallMunmap"))
			Module["syscallMunmap"] = function () {
				abort("'syscallMunmap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "getSocketFromFD"))
			Module["getSocketFromFD"] = function () {
				abort(
					"'getSocketFromFD' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "getSocketAddress"))
			Module["getSocketAddress"] = function () {
				abort(
					"'getSocketAddress' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "JSEvents"))
			Module["JSEvents"] = function () {
				abort("'JSEvents' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "registerKeyEventCallback"))
			Module["registerKeyEventCallback"] = function () {
				abort(
					"'registerKeyEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "specialHTMLTargets"))
			Module["specialHTMLTargets"] = function () {
				abort(
					"'specialHTMLTargets' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "maybeCStringToJsString"))
			Module["maybeCStringToJsString"] = function () {
				abort(
					"'maybeCStringToJsString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "findEventTarget"))
			Module["findEventTarget"] = function () {
				abort(
					"'findEventTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "findCanvasEventTarget"))
			Module["findCanvasEventTarget"] = function () {
				abort(
					"'findCanvasEventTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "getBoundingClientRect"))
			Module["getBoundingClientRect"] = function () {
				abort(
					"'getBoundingClientRect' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "fillMouseEventData"))
			Module["fillMouseEventData"] = function () {
				abort(
					"'fillMouseEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "registerMouseEventCallback"))
			Module["registerMouseEventCallback"] = function () {
				abort(
					"'registerMouseEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "registerWheelEventCallback"))
			Module["registerWheelEventCallback"] = function () {
				abort(
					"'registerWheelEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "registerUiEventCallback"))
			Module["registerUiEventCallback"] = function () {
				abort(
					"'registerUiEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "registerFocusEventCallback"))
			Module["registerFocusEventCallback"] = function () {
				abort(
					"'registerFocusEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "fillDeviceOrientationEventData"))
			Module["fillDeviceOrientationEventData"] = function () {
				abort(
					"'fillDeviceOrientationEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "registerDeviceOrientationEventCallback"))
			Module["registerDeviceOrientationEventCallback"] = function () {
				abort(
					"'registerDeviceOrientationEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "fillDeviceMotionEventData"))
			Module["fillDeviceMotionEventData"] = function () {
				abort(
					"'fillDeviceMotionEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "registerDeviceMotionEventCallback"))
			Module["registerDeviceMotionEventCallback"] = function () {
				abort(
					"'registerDeviceMotionEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "screenOrientation"))
			Module["screenOrientation"] = function () {
				abort(
					"'screenOrientation' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "fillOrientationChangeEventData"))
			Module["fillOrientationChangeEventData"] = function () {
				abort(
					"'fillOrientationChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "registerOrientationChangeEventCallback"))
			Module["registerOrientationChangeEventCallback"] = function () {
				abort(
					"'registerOrientationChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "fillFullscreenChangeEventData"))
			Module["fillFullscreenChangeEventData"] = function () {
				abort(
					"'fillFullscreenChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "registerFullscreenChangeEventCallback"))
			Module["registerFullscreenChangeEventCallback"] = function () {
				abort(
					"'registerFullscreenChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "registerRestoreOldStyle"))
			Module["registerRestoreOldStyle"] = function () {
				abort(
					"'registerRestoreOldStyle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "hideEverythingExceptGivenElement"))
			Module["hideEverythingExceptGivenElement"] = function () {
				abort(
					"'hideEverythingExceptGivenElement' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "restoreHiddenElements"))
			Module["restoreHiddenElements"] = function () {
				abort(
					"'restoreHiddenElements' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "setLetterbox"))
			Module["setLetterbox"] = function () {
				abort("'setLetterbox' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "currentFullscreenStrategy"))
			Module["currentFullscreenStrategy"] = function () {
				abort(
					"'currentFullscreenStrategy' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "restoreOldWindowedStyle"))
			Module["restoreOldWindowedStyle"] = function () {
				abort(
					"'restoreOldWindowedStyle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "softFullscreenResizeWebGLRenderTarget"))
			Module["softFullscreenResizeWebGLRenderTarget"] = function () {
				abort(
					"'softFullscreenResizeWebGLRenderTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "doRequestFullscreen"))
			Module["doRequestFullscreen"] = function () {
				abort(
					"'doRequestFullscreen' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "fillPointerlockChangeEventData"))
			Module["fillPointerlockChangeEventData"] = function () {
				abort(
					"'fillPointerlockChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "registerPointerlockChangeEventCallback"))
			Module["registerPointerlockChangeEventCallback"] = function () {
				abort(
					"'registerPointerlockChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "registerPointerlockErrorEventCallback"))
			Module["registerPointerlockErrorEventCallback"] = function () {
				abort(
					"'registerPointerlockErrorEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "requestPointerLock"))
			Module["requestPointerLock"] = function () {
				abort(
					"'requestPointerLock' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "fillVisibilityChangeEventData"))
			Module["fillVisibilityChangeEventData"] = function () {
				abort(
					"'fillVisibilityChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "registerVisibilityChangeEventCallback"))
			Module["registerVisibilityChangeEventCallback"] = function () {
				abort(
					"'registerVisibilityChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "registerTouchEventCallback"))
			Module["registerTouchEventCallback"] = function () {
				abort(
					"'registerTouchEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "fillGamepadEventData"))
			Module["fillGamepadEventData"] = function () {
				abort(
					"'fillGamepadEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "registerGamepadEventCallback"))
			Module["registerGamepadEventCallback"] = function () {
				abort(
					"'registerGamepadEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "registerBeforeUnloadEventCallback"))
			Module["registerBeforeUnloadEventCallback"] = function () {
				abort(
					"'registerBeforeUnloadEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "fillBatteryEventData"))
			Module["fillBatteryEventData"] = function () {
				abort(
					"'fillBatteryEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "battery"))
			Module["battery"] = function () {
				abort("'battery' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "registerBatteryEventCallback"))
			Module["registerBatteryEventCallback"] = function () {
				abort(
					"'registerBatteryEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "setCanvasElementSize"))
			Module["setCanvasElementSize"] = function () {
				abort(
					"'setCanvasElementSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "getCanvasElementSize"))
			Module["getCanvasElementSize"] = function () {
				abort(
					"'getCanvasElementSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "demangle"))
			Module["demangle"] = function () {
				abort("'demangle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "demangleAll"))
			Module["demangleAll"] = function () {
				abort("'demangleAll' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "jsStackTrace"))
			Module["jsStackTrace"] = function () {
				abort("'jsStackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "stackTrace"))
			Module["stackTrace"] = function () {
				abort("'stackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "getEnvStrings"))
			Module["getEnvStrings"] = function () {
				abort("'getEnvStrings' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "checkWasiClock"))
			Module["checkWasiClock"] = function () {
				abort("'checkWasiClock' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "flush_NO_FILESYSTEM"))
			Module["flush_NO_FILESYSTEM"] = function () {
				abort(
					"'flush_NO_FILESYSTEM' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64"))
			Module["writeI53ToI64"] = function () {
				abort("'writeI53ToI64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Clamped"))
			Module["writeI53ToI64Clamped"] = function () {
				abort(
					"'writeI53ToI64Clamped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Signaling"))
			Module["writeI53ToI64Signaling"] = function () {
				abort(
					"'writeI53ToI64Signaling' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Clamped"))
			Module["writeI53ToU64Clamped"] = function () {
				abort(
					"'writeI53ToU64Clamped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Signaling"))
			Module["writeI53ToU64Signaling"] = function () {
				abort(
					"'writeI53ToU64Signaling' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "readI53FromI64"))
			Module["readI53FromI64"] = function () {
				abort("'readI53FromI64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "readI53FromU64"))
			Module["readI53FromU64"] = function () {
				abort("'readI53FromU64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "convertI32PairToI53"))
			Module["convertI32PairToI53"] = function () {
				abort(
					"'convertI32PairToI53' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "convertU32PairToI53"))
			Module["convertU32PairToI53"] = function () {
				abort(
					"'convertU32PairToI53' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "setImmediateWrapped"))
			Module["setImmediateWrapped"] = function () {
				abort(
					"'setImmediateWrapped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "clearImmediateWrapped"))
			Module["clearImmediateWrapped"] = function () {
				abort(
					"'clearImmediateWrapped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "polyfillSetImmediate"))
			Module["polyfillSetImmediate"] = function () {
				abort(
					"'polyfillSetImmediate' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "uncaughtExceptionCount"))
			Module["uncaughtExceptionCount"] = function () {
				abort(
					"'uncaughtExceptionCount' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "exceptionLast"))
			Module["exceptionLast"] = function () {
				abort("'exceptionLast' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "exceptionCaught"))
			Module["exceptionCaught"] = function () {
				abort(
					"'exceptionCaught' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "ExceptionInfo"))
			Module["ExceptionInfo"] = function () {
				abort("'ExceptionInfo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "CatchInfo"))
			Module["CatchInfo"] = function () {
				abort("'CatchInfo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "exception_addRef"))
			Module["exception_addRef"] = function () {
				abort(
					"'exception_addRef' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "exception_decRef"))
			Module["exception_decRef"] = function () {
				abort(
					"'exception_decRef' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "Browser"))
			Module["Browser"] = function () {
				abort("'Browser' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "funcWrappers"))
			Module["funcWrappers"] = function () {
				abort("'funcWrappers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper"))
			Module["getFuncWrapper"] = function () {
				abort("'getFuncWrapper' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "setMainLoop"))
			Module["setMainLoop"] = function () {
				abort("'setMainLoop' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "wget"))
			Module["wget"] = function () {
				abort("'wget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "FS"))
			Module["FS"] = function () {
				abort("'FS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "MEMFS"))
			Module["MEMFS"] = function () {
				abort("'MEMFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "TTY"))
			Module["TTY"] = function () {
				abort("'TTY' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "PIPEFS"))
			Module["PIPEFS"] = function () {
				abort("'PIPEFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "SOCKFS"))
			Module["SOCKFS"] = function () {
				abort("'SOCKFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "_setNetworkCallback"))
			Module["_setNetworkCallback"] = function () {
				abort(
					"'_setNetworkCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "tempFixedLengthArray"))
			Module["tempFixedLengthArray"] = function () {
				abort(
					"'tempFixedLengthArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "miniTempWebGLFloatBuffers"))
			Module["miniTempWebGLFloatBuffers"] = function () {
				abort(
					"'miniTempWebGLFloatBuffers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "heapObjectForWebGLType"))
			Module["heapObjectForWebGLType"] = function () {
				abort(
					"'heapObjectForWebGLType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "heapAccessShiftForWebGLHeap"))
			Module["heapAccessShiftForWebGLHeap"] = function () {
				abort(
					"'heapAccessShiftForWebGLHeap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "GL"))
			Module["GL"] = function () {
				abort("'GL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGet"))
			Module["emscriptenWebGLGet"] = function () {
				abort(
					"'emscriptenWebGLGet' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "computeUnpackAlignedImageSize"))
			Module["computeUnpackAlignedImageSize"] = function () {
				abort(
					"'computeUnpackAlignedImageSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetTexPixelData"))
			Module["emscriptenWebGLGetTexPixelData"] = function () {
				abort(
					"'emscriptenWebGLGetTexPixelData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetUniform"))
			Module["emscriptenWebGLGetUniform"] = function () {
				abort(
					"'emscriptenWebGLGetUniform' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "webglGetUniformLocation"))
			Module["webglGetUniformLocation"] = function () {
				abort(
					"'webglGetUniformLocation' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "webglPrepareUniformLocationsBeforeFirstUse"))
			Module["webglPrepareUniformLocationsBeforeFirstUse"] = function () {
				abort(
					"'webglPrepareUniformLocationsBeforeFirstUse' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "webglGetLeftBracePos"))
			Module["webglGetLeftBracePos"] = function () {
				abort(
					"'webglGetLeftBracePos' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetVertexAttrib"))
			Module["emscriptenWebGLGetVertexAttrib"] = function () {
				abort(
					"'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "writeGLArray"))
			Module["writeGLArray"] = function () {
				abort("'writeGLArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "AL"))
			Module["AL"] = function () {
				abort("'AL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "SDL_unicode"))
			Module["SDL_unicode"] = function () {
				abort("'SDL_unicode' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "SDL_ttfContext"))
			Module["SDL_ttfContext"] = function () {
				abort("'SDL_ttfContext' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "SDL_audio"))
			Module["SDL_audio"] = function () {
				abort("'SDL_audio' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "SDL"))
			Module["SDL"] = function () {
				abort("'SDL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "SDL_gfx"))
			Module["SDL_gfx"] = function () {
				abort("'SDL_gfx' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "GLUT"))
			Module["GLUT"] = function () {
				abort("'GLUT' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "EGL"))
			Module["EGL"] = function () {
				abort("'EGL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "GLFW_Window"))
			Module["GLFW_Window"] = function () {
				abort("'GLFW_Window' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "GLFW"))
			Module["GLFW"] = function () {
				abort("'GLFW' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "GLEW"))
			Module["GLEW"] = function () {
				abort("'GLEW' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "IDBStore"))
			Module["IDBStore"] = function () {
				abort("'IDBStore' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "runAndAbortIfError"))
			Module["runAndAbortIfError"] = function () {
				abort(
					"'runAndAbortIfError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "emval_handle_array"))
			Module["emval_handle_array"] = function () {
				abort(
					"'emval_handle_array' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "emval_free_list"))
			Module["emval_free_list"] = function () {
				abort(
					"'emval_free_list' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "emval_symbols"))
			Module["emval_symbols"] = function () {
				abort("'emval_symbols' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "init_emval"))
			Module["init_emval"] = function () {
				abort("'init_emval' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "count_emval_handles"))
			Module["count_emval_handles"] = function () {
				abort(
					"'count_emval_handles' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "get_first_emval"))
			Module["get_first_emval"] = function () {
				abort(
					"'get_first_emval' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "getStringOrSymbol"))
			Module["getStringOrSymbol"] = function () {
				abort(
					"'getStringOrSymbol' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "Emval"))
			Module["Emval"] = function () {
				abort("'Emval' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "emval_newers"))
			Module["emval_newers"] = function () {
				abort("'emval_newers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "craftEmvalAllocator"))
			Module["craftEmvalAllocator"] = function () {
				abort(
					"'craftEmvalAllocator' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "emval_get_global"))
			Module["emval_get_global"] = function () {
				abort(
					"'emval_get_global' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "emval_methodCallers"))
			Module["emval_methodCallers"] = function () {
				abort(
					"'emval_methodCallers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "emval_registeredMethods"))
			Module["emval_registeredMethods"] = function () {
				abort(
					"'emval_registeredMethods' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "InternalError"))
			Module["InternalError"] = function () {
				abort("'InternalError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "BindingError"))
			Module["BindingError"] = function () {
				abort("'BindingError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "UnboundTypeError"))
			Module["UnboundTypeError"] = function () {
				abort(
					"'UnboundTypeError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "PureVirtualError"))
			Module["PureVirtualError"] = function () {
				abort(
					"'PureVirtualError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "init_embind"))
			Module["init_embind"] = function () {
				abort("'init_embind' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "throwInternalError"))
			Module["throwInternalError"] = function () {
				abort(
					"'throwInternalError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "throwBindingError"))
			Module["throwBindingError"] = function () {
				abort(
					"'throwBindingError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "throwUnboundTypeError"))
			Module["throwUnboundTypeError"] = function () {
				abort(
					"'throwUnboundTypeError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "ensureOverloadTable"))
			Module["ensureOverloadTable"] = function () {
				abort(
					"'ensureOverloadTable' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "exposePublicSymbol"))
			Module["exposePublicSymbol"] = function () {
				abort(
					"'exposePublicSymbol' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "replacePublicSymbol"))
			Module["replacePublicSymbol"] = function () {
				abort(
					"'replacePublicSymbol' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "extendError"))
			Module["extendError"] = function () {
				abort("'extendError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "createNamedFunction"))
			Module["createNamedFunction"] = function () {
				abort(
					"'createNamedFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "registeredInstances"))
			Module["registeredInstances"] = function () {
				abort(
					"'registeredInstances' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "getBasestPointer"))
			Module["getBasestPointer"] = function () {
				abort(
					"'getBasestPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "registerInheritedInstance"))
			Module["registerInheritedInstance"] = function () {
				abort(
					"'registerInheritedInstance' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "unregisterInheritedInstance"))
			Module["unregisterInheritedInstance"] = function () {
				abort(
					"'unregisterInheritedInstance' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "getInheritedInstance"))
			Module["getInheritedInstance"] = function () {
				abort(
					"'getInheritedInstance' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "getInheritedInstanceCount"))
			Module["getInheritedInstanceCount"] = function () {
				abort(
					"'getInheritedInstanceCount' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "getLiveInheritedInstances"))
			Module["getLiveInheritedInstances"] = function () {
				abort(
					"'getLiveInheritedInstances' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "registeredTypes"))
			Module["registeredTypes"] = function () {
				abort(
					"'registeredTypes' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "awaitingDependencies"))
			Module["awaitingDependencies"] = function () {
				abort(
					"'awaitingDependencies' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "typeDependencies"))
			Module["typeDependencies"] = function () {
				abort(
					"'typeDependencies' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "registeredPointers"))
			Module["registeredPointers"] = function () {
				abort(
					"'registeredPointers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "registerType"))
			Module["registerType"] = function () {
				abort("'registerType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "whenDependentTypesAreResolved"))
			Module["whenDependentTypesAreResolved"] = function () {
				abort(
					"'whenDependentTypesAreResolved' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "embind_charCodes"))
			Module["embind_charCodes"] = function () {
				abort(
					"'embind_charCodes' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "embind_init_charCodes"))
			Module["embind_init_charCodes"] = function () {
				abort(
					"'embind_init_charCodes' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "readLatin1String"))
			Module["readLatin1String"] = function () {
				abort(
					"'readLatin1String' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "getTypeName"))
			Module["getTypeName"] = function () {
				abort("'getTypeName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "heap32VectorToArray"))
			Module["heap32VectorToArray"] = function () {
				abort(
					"'heap32VectorToArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "requireRegisteredType"))
			Module["requireRegisteredType"] = function () {
				abort(
					"'requireRegisteredType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "getShiftFromSize"))
			Module["getShiftFromSize"] = function () {
				abort(
					"'getShiftFromSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "integerReadValueFromPointer"))
			Module["integerReadValueFromPointer"] = function () {
				abort(
					"'integerReadValueFromPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "enumReadValueFromPointer"))
			Module["enumReadValueFromPointer"] = function () {
				abort(
					"'enumReadValueFromPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "floatReadValueFromPointer"))
			Module["floatReadValueFromPointer"] = function () {
				abort(
					"'floatReadValueFromPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "simpleReadValueFromPointer"))
			Module["simpleReadValueFromPointer"] = function () {
				abort(
					"'simpleReadValueFromPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "runDestructors"))
			Module["runDestructors"] = function () {
				abort("'runDestructors' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "new_"))
			Module["new_"] = function () {
				abort("'new_' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "craftInvokerFunction"))
			Module["craftInvokerFunction"] = function () {
				abort(
					"'craftInvokerFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "embind__requireFunction"))
			Module["embind__requireFunction"] = function () {
				abort(
					"'embind__requireFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "tupleRegistrations"))
			Module["tupleRegistrations"] = function () {
				abort(
					"'tupleRegistrations' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "structRegistrations"))
			Module["structRegistrations"] = function () {
				abort(
					"'structRegistrations' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "genericPointerToWireType"))
			Module["genericPointerToWireType"] = function () {
				abort(
					"'genericPointerToWireType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "constNoSmartPtrRawPointerToWireType"))
			Module["constNoSmartPtrRawPointerToWireType"] = function () {
				abort(
					"'constNoSmartPtrRawPointerToWireType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "nonConstNoSmartPtrRawPointerToWireType"))
			Module["nonConstNoSmartPtrRawPointerToWireType"] = function () {
				abort(
					"'nonConstNoSmartPtrRawPointerToWireType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "init_RegisteredPointer"))
			Module["init_RegisteredPointer"] = function () {
				abort(
					"'init_RegisteredPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer"))
			Module["RegisteredPointer"] = function () {
				abort(
					"'RegisteredPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_getPointee"))
			Module["RegisteredPointer_getPointee"] = function () {
				abort(
					"'RegisteredPointer_getPointee' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_destructor"))
			Module["RegisteredPointer_destructor"] = function () {
				abort(
					"'RegisteredPointer_destructor' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_deleteObject"))
			Module["RegisteredPointer_deleteObject"] = function () {
				abort(
					"'RegisteredPointer_deleteObject' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_fromWireType"))
			Module["RegisteredPointer_fromWireType"] = function () {
				abort(
					"'RegisteredPointer_fromWireType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "runDestructor"))
			Module["runDestructor"] = function () {
				abort("'runDestructor' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "releaseClassHandle"))
			Module["releaseClassHandle"] = function () {
				abort(
					"'releaseClassHandle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "finalizationGroup"))
			Module["finalizationGroup"] = function () {
				abort(
					"'finalizationGroup' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "detachFinalizer_deps"))
			Module["detachFinalizer_deps"] = function () {
				abort(
					"'detachFinalizer_deps' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "detachFinalizer"))
			Module["detachFinalizer"] = function () {
				abort(
					"'detachFinalizer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "attachFinalizer"))
			Module["attachFinalizer"] = function () {
				abort(
					"'attachFinalizer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "makeClassHandle"))
			Module["makeClassHandle"] = function () {
				abort(
					"'makeClassHandle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "init_ClassHandle"))
			Module["init_ClassHandle"] = function () {
				abort(
					"'init_ClassHandle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle"))
			Module["ClassHandle"] = function () {
				abort("'ClassHandle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_isAliasOf"))
			Module["ClassHandle_isAliasOf"] = function () {
				abort(
					"'ClassHandle_isAliasOf' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "throwInstanceAlreadyDeleted"))
			Module["throwInstanceAlreadyDeleted"] = function () {
				abort(
					"'throwInstanceAlreadyDeleted' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_clone"))
			Module["ClassHandle_clone"] = function () {
				abort(
					"'ClassHandle_clone' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_delete"))
			Module["ClassHandle_delete"] = function () {
				abort(
					"'ClassHandle_delete' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "deletionQueue"))
			Module["deletionQueue"] = function () {
				abort("'deletionQueue' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_isDeleted"))
			Module["ClassHandle_isDeleted"] = function () {
				abort(
					"'ClassHandle_isDeleted' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_deleteLater"))
			Module["ClassHandle_deleteLater"] = function () {
				abort(
					"'ClassHandle_deleteLater' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "flushPendingDeletes"))
			Module["flushPendingDeletes"] = function () {
				abort(
					"'flushPendingDeletes' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "delayFunction"))
			Module["delayFunction"] = function () {
				abort("'delayFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "setDelayFunction"))
			Module["setDelayFunction"] = function () {
				abort(
					"'setDelayFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "RegisteredClass"))
			Module["RegisteredClass"] = function () {
				abort(
					"'RegisteredClass' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "shallowCopyInternalPointer"))
			Module["shallowCopyInternalPointer"] = function () {
				abort(
					"'shallowCopyInternalPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "downcastPointer"))
			Module["downcastPointer"] = function () {
				abort(
					"'downcastPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "upcastPointer"))
			Module["upcastPointer"] = function () {
				abort("'upcastPointer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "validateThis"))
			Module["validateThis"] = function () {
				abort("'validateThis' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "char_0"))
			Module["char_0"] = function () {
				abort("'char_0' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "char_9"))
			Module["char_9"] = function () {
				abort("'char_9' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "makeLegalFunctionName"))
			Module["makeLegalFunctionName"] = function () {
				abort(
					"'makeLegalFunctionName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "warnOnce"))
			Module["warnOnce"] = function () {
				abort("'warnOnce' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "stackSave"))
			Module["stackSave"] = function () {
				abort("'stackSave' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "stackRestore"))
			Module["stackRestore"] = function () {
				abort("'stackRestore' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "stackAlloc"))
			Module["stackAlloc"] = function () {
				abort("'stackAlloc' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "AsciiToString"))
			Module["AsciiToString"] = function () {
				abort("'AsciiToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "stringToAscii"))
			Module["stringToAscii"] = function () {
				abort("'stringToAscii' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "UTF16ToString"))
			Module["UTF16ToString"] = function () {
				abort("'UTF16ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF16"))
			Module["stringToUTF16"] = function () {
				abort("'stringToUTF16' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF16"))
			Module["lengthBytesUTF16"] = function () {
				abort(
					"'lengthBytesUTF16' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "UTF32ToString"))
			Module["UTF32ToString"] = function () {
				abort("'UTF32ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF32"))
			Module["stringToUTF32"] = function () {
				abort("'stringToUTF32' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF32"))
			Module["lengthBytesUTF32"] = function () {
				abort(
					"'lengthBytesUTF32' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8"))
			Module["allocateUTF8"] = function () {
				abort("'allocateUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
			}
		if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8OnStack"))
			Module["allocateUTF8OnStack"] = function () {
				abort(
					"'allocateUTF8OnStack' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)"
				)
			}
		Module["writeStackCookie"] = writeStackCookie
		Module["checkStackCookie"] = checkStackCookie
		if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_NORMAL"))
			Object.defineProperty(Module, "ALLOC_NORMAL", {
				configurable: true,
				get: function () {
					abort("'ALLOC_NORMAL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
				},
			})
		if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_STACK"))
			Object.defineProperty(Module, "ALLOC_STACK", {
				configurable: true,
				get: function () {
					abort("'ALLOC_STACK' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)")
				},
			})
		var calledRun
		function ExitStatus(status) {
			this.name = "ExitStatus"
			this.message = "Program terminated with exit(" + status + ")"
			this.status = status
		}
		dependenciesFulfilled = function runCaller() {
			if (!calledRun) run()
			if (!calledRun) dependenciesFulfilled = runCaller
		}
		function stackCheckInit() {
			_emscripten_stack_init()
			writeStackCookie()
		}
		function run(args) {
			args = args || arguments_
			if (runDependencies > 0) {
				return
			}
			stackCheckInit()
			preRun()
			if (runDependencies > 0) {
				return
			}
			function doRun() {
				if (calledRun) return
				calledRun = true
				Module["calledRun"] = true
				if (ABORT) return
				initRuntime()
				readyPromiseResolve(Module)
				if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]()
				assert(
					!Module["_main"],
					'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'
				)
				postRun()
			}
			if (Module["setStatus"]) {
				Module["setStatus"]("Running...")
				setTimeout(function () {
					setTimeout(function () {
						Module["setStatus"]("")
					}, 1)
					doRun()
				}, 1)
			} else {
				doRun()
			}
			checkStackCookie()
		}
		Module["run"] = run
		function checkUnflushedContent() {
			var oldOut = out
			var oldErr = err
			var has = false
			out = err = function (x) {
				has = true
			}
			try {
				var flush = flush_NO_FILESYSTEM
				if (flush) flush()
			} catch (e) {}
			out = oldOut
			err = oldErr
			if (has) {
				warnOnce(
					"stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc."
				)
				warnOnce(
					"(this may also be due to not including full filesystem support - try building with -s FORCE_FILESYSTEM=1)"
				)
			}
		}
		function procExit(code) {
			EXITSTATUS = code
			if (!keepRuntimeAlive()) {
				if (Module["onExit"]) Module["onExit"](code)
				ABORT = true
			}
			quit_(code, new ExitStatus(code))
		}
		if (Module["preInit"]) {
			if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]]
			while (Module["preInit"].length > 0) {
				Module["preInit"].pop()()
			}
		}
		run()

		return $MODULE_NAME.ready
	}
})()
export default $MODULE_NAME
