(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/lib/config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getConfig",
    ()=>getConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function getConfig() {
    const cfg = {
        supabaseUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SUPABASE_URL || "",
        supabaseAnonKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
        stellarNetwork: ("TURBOPACK compile-time value", "testnet") || "testnet",
        horizonUrl: ("TURBOPACK compile-time value", "https://horizon-testnet.stellar.org") || "https://horizon-testnet.stellar.org",
        sorobanRpcUrl: ("TURBOPACK compile-time value", "https://soroban-testnet.stellar.org") || "https://soroban-testnet.stellar.org",
        walletConnectProjectId: ("TURBOPACK compile-time value", ""),
        appName: ("TURBOPACK compile-time value", "Mi App Tiburona") || "Stellar App",
        appUrl: ("TURBOPACK compile-time value", "http://localhost:3000") || "http://localhost:3000"
    };
    return cfg;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/lib/supabase/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSupabaseBrowserClient",
    ()=>getSupabaseBrowserClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-client] (ecmascript)");
// Avoid strict generic typing conflicts; keep client loosely typed
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/config.ts [app-client] (ecmascript)");
"use client";
;
;
let browserClient = null;
function getSupabaseBrowserClient() {
    if (browserClient) return browserClient;
    const { supabaseUrl, supabaseAnonKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])();
    browserClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBrowserClient"])(supabaseUrl, supabaseAnonKey);
    return browserClient;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/contexts/SupabaseContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SupabaseProvider",
    ()=>SupabaseProvider,
    "useSupabaseContext",
    ()=>useSupabaseContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const SupabaseContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function SupabaseProvider({ children }) {
    _s();
    // 🔧 TEMPORAL: desactivar Supabase hasta tener claves reales
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SupabaseProvider.useMemo[client]": ()=>{
            try {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabaseBrowserClient"])();
            } catch (error) {
                console.warn("⚠️ Supabase desactivado temporalmente (sin claves en .env)");
                return {
                    auth: {
                        getSession: ({
                            "SupabaseProvider.useMemo[client]": async ()=>({
                                    data: {
                                        session: null
                                    }
                                })
                        })["SupabaseProvider.useMemo[client]"],
                        onAuthStateChange: ({
                            "SupabaseProvider.useMemo[client]": ()=>({
                                    data: {
                                        subscription: {
                                            unsubscribe () {}
                                        }
                                    }
                                })
                        })["SupabaseProvider.useMemo[client]"],
                        signInWithPassword: ({
                            "SupabaseProvider.useMemo[client]": async ()=>({})
                        })["SupabaseProvider.useMemo[client]"],
                        signInWithOtp: ({
                            "SupabaseProvider.useMemo[client]": async ()=>({})
                        })["SupabaseProvider.useMemo[client]"],
                        signInWithOAuth: ({
                            "SupabaseProvider.useMemo[client]": async ()=>({})
                        })["SupabaseProvider.useMemo[client]"],
                        signUp: ({
                            "SupabaseProvider.useMemo[client]": async ()=>({})
                        })["SupabaseProvider.useMemo[client]"],
                        signOut: ({
                            "SupabaseProvider.useMemo[client]": async ()=>({})
                        })["SupabaseProvider.useMemo[client]"],
                        resetPasswordForEmail: ({
                            "SupabaseProvider.useMemo[client]": async ()=>({})
                        })["SupabaseProvider.useMemo[client]"],
                        updateUser: ({
                            "SupabaseProvider.useMemo[client]": async ()=>({})
                        })["SupabaseProvider.useMemo[client]"],
                        getUser: ({
                            "SupabaseProvider.useMemo[client]": async ()=>({
                                    data: {
                                        user: null
                                    }
                                })
                        })["SupabaseProvider.useMemo[client]"]
                    },
                    storage: {
                        from: ({
                            "SupabaseProvider.useMemo[client]": ()=>({
                                    upload: ({
                                        "SupabaseProvider.useMemo[client]": async ()=>({})
                                    })["SupabaseProvider.useMemo[client]"],
                                    download: ({
                                        "SupabaseProvider.useMemo[client]": async ()=>({})
                                    })["SupabaseProvider.useMemo[client]"],
                                    remove: ({
                                        "SupabaseProvider.useMemo[client]": async ()=>({})
                                    })["SupabaseProvider.useMemo[client]"],
                                    getPublicUrl: ({
                                        "SupabaseProvider.useMemo[client]": ()=>({
                                                data: {
                                                    publicUrl: ""
                                                }
                                            })
                                    })["SupabaseProvider.useMemo[client]"]
                                })
                        })["SupabaseProvider.useMemo[client]"]
                    },
                    from: ({
                        "SupabaseProvider.useMemo[client]": ()=>({
                                select: ({
                                    "SupabaseProvider.useMemo[client]": async ()=>({
                                            data: null
                                        })
                                })["SupabaseProvider.useMemo[client]"],
                                upsert: ({
                                    "SupabaseProvider.useMemo[client]": async ()=>({
                                            data: null
                                        })
                                })["SupabaseProvider.useMemo[client]"],
                                eq: ({
                                    "SupabaseProvider.useMemo[client]": ()=>({
                                            single: ({
                                                "SupabaseProvider.useMemo[client]": async ()=>({
                                                        data: null
                                                    })
                                            })["SupabaseProvider.useMemo[client]"]
                                        })
                                })["SupabaseProvider.useMemo[client]"]
                            })
                    })["SupabaseProvider.useMemo[client]"],
                    channel: ({
                        "SupabaseProvider.useMemo[client]": ()=>({
                                on: ({
                                    "SupabaseProvider.useMemo[client]": ()=>({
                                            subscribe: ({
                                                "SupabaseProvider.useMemo[client]": ()=>({})
                                            })["SupabaseProvider.useMemo[client]"]
                                        })
                                })["SupabaseProvider.useMemo[client]"]
                            })
                    })["SupabaseProvider.useMemo[client]"],
                    removeChannel: ({
                        "SupabaseProvider.useMemo[client]": ()=>{}
                    })["SupabaseProvider.useMemo[client]"]
                };
            }
        }
    }["SupabaseProvider.useMemo[client]"], []);
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAuthReady, setIsAuthReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SupabaseProvider.useEffect": ()=>{
            let mounted = true;
            ({
                "SupabaseProvider.useEffect": async ()=>{
                    const { data } = await client.auth.getSession();
                    if (!mounted) return;
                    setSession(data.session ?? null);
                    setUser(data.session?.user ?? null);
                    setIsAuthReady(true);
                }
            })["SupabaseProvider.useEffect"]();
            const { data: sub } = client.auth.onAuthStateChange({
                "SupabaseProvider.useEffect": (_event, currentSession)=>{
                    setSession(currentSession);
                    setUser(currentSession?.user ?? null);
                }
            }["SupabaseProvider.useEffect"]);
            return ({
                "SupabaseProvider.useEffect": ()=>{
                    mounted = false;
                    sub?.subscription.unsubscribe();
                }
            })["SupabaseProvider.useEffect"];
        }
    }["SupabaseProvider.useEffect"], [
        client
    ]);
    const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SupabaseProvider.useMemo[auth]": ()=>({
                signInWithPassword: ({
                    "SupabaseProvider.useMemo[auth]": (credentials)=>client.auth.signInWithPassword(credentials)
                })["SupabaseProvider.useMemo[auth]"],
                signInWithOtp: ({
                    "SupabaseProvider.useMemo[auth]": (credentials)=>client.auth.signInWithOtp(credentials)
                })["SupabaseProvider.useMemo[auth]"],
                signInWithOAuth: ({
                    "SupabaseProvider.useMemo[auth]": (provider, options)=>client.auth.signInWithOAuth({
                            provider,
                            options
                        })
                })["SupabaseProvider.useMemo[auth]"],
                signUp: ({
                    "SupabaseProvider.useMemo[auth]": (credentials)=>client.auth.signUp(credentials)
                })["SupabaseProvider.useMemo[auth]"],
                signOut: ({
                    "SupabaseProvider.useMemo[auth]": ()=>client.auth.signOut()
                })["SupabaseProvider.useMemo[auth]"],
                resetPasswordForEmail: ({
                    "SupabaseProvider.useMemo[auth]": (email, options)=>client.auth.resetPasswordForEmail(email, options)
                })["SupabaseProvider.useMemo[auth]"],
                updateUser: ({
                    "SupabaseProvider.useMemo[auth]": (attributes)=>client.auth.updateUser(attributes)
                })["SupabaseProvider.useMemo[auth]"],
                getSession: ({
                    "SupabaseProvider.useMemo[auth]": async ()=>(await client.auth.getSession()).data.session ?? null
                })["SupabaseProvider.useMemo[auth]"],
                getUser: ({
                    "SupabaseProvider.useMemo[auth]": async ()=>(await client.auth.getUser()).data.user ?? null
                })["SupabaseProvider.useMemo[auth]"]
            })
    }["SupabaseProvider.useMemo[auth]"], [
        client
    ]);
    const storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SupabaseProvider.useMemo[storage]": ()=>({
                uploadPublic: ({
                    "SupabaseProvider.useMemo[storage]": (bucket, path, file, options)=>client.storage.from(bucket).upload(path, file, options)
                })["SupabaseProvider.useMemo[storage]"],
                getPublicUrl: ({
                    "SupabaseProvider.useMemo[storage]": (bucket, path)=>client.storage.from(bucket).getPublicUrl(path).data.publicUrl
                })["SupabaseProvider.useMemo[storage]"],
                download: ({
                    "SupabaseProvider.useMemo[storage]": (bucket, path)=>client.storage.from(bucket).download(path)
                })["SupabaseProvider.useMemo[storage]"],
                remove: ({
                    "SupabaseProvider.useMemo[storage]": (bucket, paths)=>client.storage.from(bucket).remove(paths)
                })["SupabaseProvider.useMemo[storage]"]
            })
    }["SupabaseProvider.useMemo[storage]"], [
        client
    ]);
    const realtime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SupabaseProvider.useMemo[realtime]": ()=>({
                subscribeToTable: ({
                    "SupabaseProvider.useMemo[realtime]": ({ schema = "public", table, event = "*", filter, callback })=>{
                        const channelName = `table:${schema}.${table}:${Math.random().toString(36).slice(2)}`;
                        const ch = client.channel(channelName);
                        const channel = ch.on("postgres_changes", {
                            event,
                            schema,
                            table,
                            filter
                        }, {
                            "SupabaseProvider.useMemo[realtime].channel": (payload)=>callback(payload)
                        }["SupabaseProvider.useMemo[realtime].channel"]).subscribe();
                        return ({
                            "SupabaseProvider.useMemo[realtime]": ()=>{
                                client.removeChannel(channel);
                            }
                        })["SupabaseProvider.useMemo[realtime]"];
                    }
                })["SupabaseProvider.useMemo[realtime]"]
            })
    }["SupabaseProvider.useMemo[realtime]"], [
        client
    ]);
    const profile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SupabaseProvider.useMemo[profile]": ()=>({
                async getProfile (userId) {
                    const { data, error } = await client.from("profiles").select("*").eq("id", userId).single();
                    if (error) throw error;
                    return data;
                },
                async upsertProfile (userId, updates) {
                    const payload = {
                        id: userId,
                        updated_at: new Date().toISOString(),
                        ...updates
                    };
                    const { data, error } = await client.from("profiles").upsert(payload).select().single();
                    if (error) throw error;
                    return data;
                }
            })
    }["SupabaseProvider.useMemo[profile]"], [
        client
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SupabaseProvider.useMemo[value]": ()=>({
                client,
                session,
                user,
                isAuthReady,
                auth,
                storage,
                realtime,
                profile
            })
    }["SupabaseProvider.useMemo[value]"], [
        client,
        session,
        user,
        isAuthReady,
        auth,
        storage,
        realtime,
        profile
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SupabaseContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/contexts/SupabaseContext.tsx",
        lineNumber: 241,
        columnNumber: 10
    }, this);
}
_s(SupabaseProvider, "Qra3uu6DBCbNUQFlf4hPTtLCEd4=");
_c = SupabaseProvider;
function useSupabaseContext() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SupabaseContext);
    if (!ctx) throw new Error("useSupabaseContext must be used within SupabaseProvider");
    return ctx;
}
_s1(useSupabaseContext, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "SupabaseProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/contexts/SorobanContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SorobanProvider",
    ()=>SorobanProvider,
    "useSorobanContext",
    ()=>useSorobanContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/config.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const SorobanContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
async function jsonRpc(endpoint, body) {
    const res = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
    if (!res.ok) throw new Error(`RPC ${body.method} failed: ${res.status}`);
    const data = await res.json();
    if (data.error) throw new Error(data.error.message);
    return data.result;
}
function SorobanProvider({ children }) {
    _s();
    const { sorobanRpcUrl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])();
    const idRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [isHealthy, setIsHealthy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const call = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SorobanProvider.useCallback[call]": async (method, params)=>{
            idRef.current += 1;
            return jsonRpc(sorobanRpcUrl, {
                jsonrpc: "2.0",
                id: idRef.current,
                method,
                params
            });
        }
    }["SorobanProvider.useCallback[call]"], [
        sorobanRpcUrl
    ]);
    const checkHealth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SorobanProvider.useCallback[checkHealth]": async ()=>{
            try {
                // Common method on Soroban RPC nodes
                await call("getHealth");
                setIsHealthy(true);
                return true;
            } catch  {
                setIsHealthy(false);
                return false;
            }
        }
    }["SorobanProvider.useCallback[checkHealth]"], [
        call
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SorobanProvider.useMemo[value]": ()=>({
                rpcUrl: sorobanRpcUrl,
                call,
                isHealthy,
                checkHealth
            })
    }["SorobanProvider.useMemo[value]"], [
        sorobanRpcUrl,
        call,
        isHealthy,
        checkHealth
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SorobanContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/contexts/SorobanContext.tsx",
        lineNumber: 60,
        columnNumber: 10
    }, this);
}
_s(SorobanProvider, "iHqZDxXGtAQa80+Ef9eHgxDFWx0=");
_c = SorobanProvider;
function useSorobanContext() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SorobanContext);
    if (!ctx) throw new Error("useSorobanContext must be used within SorobanProvider");
    return ctx;
}
_s1(useSorobanContext, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "SorobanProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/contexts/WalletsKitContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Página principal del dashboard con las 3 pantallas
__turbopack_context__.s([
    "WalletsKitAutoConnector",
    ()=>WalletsKitAutoConnector,
    "WalletsKitProvider",
    ()=>WalletsKitProvider,
    "useWalletsKitContext",
    ()=>useWalletsKitContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$creit$2e$tech$2f$stellar$2d$wallets$2d$kit$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@creit.tech/stellar-wallets-kit/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$creit$2e$tech$2f$stellar$2d$wallets$2d$kit$2f$stellar$2d$wallets$2d$kit$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@creit.tech/stellar-wallets-kit/stellar-wallets-kit.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$creit$2e$tech$2f$stellar$2d$wallets$2d$kit$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@creit.tech/stellar-wallets-kit/types.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$creit$2e$tech$2f$stellar$2d$wallets$2d$kit$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@creit.tech/stellar-wallets-kit/utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$creit$2e$tech$2f$stellar$2d$wallets$2d$kit$2f$modules$2f$xbull$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@creit.tech/stellar-wallets-kit/modules/xbull.module.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/config.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const WalletsKitContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function mapNetwork(env) {
    if (!env) return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$creit$2e$tech$2f$stellar$2d$wallets$2d$kit$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletNetwork"].TESTNET;
    const v = env.toLowerCase();
    if (v === "public" || v === "mainnet") return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$creit$2e$tech$2f$stellar$2d$wallets$2d$kit$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletNetwork"].PUBLIC;
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$creit$2e$tech$2f$stellar$2d$wallets$2d$kit$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletNetwork"].TESTNET;
}
function WalletsKitProvider({ children }) {
    _s();
    const cfg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])();
    const network = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WalletsKitProvider.useMemo[network]": ()=>mapNetwork(cfg.stellarNetwork)
    }["WalletsKitProvider.useMemo[network]"], [
        cfg.stellarNetwork
    ]);
    const kitRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [address, setAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedWalletId, setSelectedWalletId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // 1. Definición del estado de carga: ¡Inicialmente TRUE!
    const [isLoadingKit, setIsLoadingKit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Lazily initialize the kit once
    const kit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WalletsKitProvider.useMemo[kit]": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            if (!kitRef.current) {
                kitRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$creit$2e$tech$2f$stellar$2d$wallets$2d$kit$2f$stellar$2d$wallets$2d$kit$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StellarWalletsKit"]({
                    network,
                    selectedWalletId: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$creit$2e$tech$2f$stellar$2d$wallets$2d$kit$2f$modules$2f$xbull$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XBULL_ID"],
                    modules: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$creit$2e$tech$2f$stellar$2d$wallets$2d$kit$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allowAllModules"])()
                });
            }
            return kitRef.current;
        }
    }["WalletsKitProvider.useMemo[kit]"], [
        network
    ]);
    const setWallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WalletsKitProvider.useCallback[setWallet]": async (walletId)=>{
            if (!kit) return;
            await kit.setWallet(walletId);
            setSelectedWalletId(walletId);
            try {
                if ("TURBOPACK compile-time truthy", 1) {
                    localStorage.setItem("stellar.wallet.selected", walletId);
                }
            } catch (_e) {
            // ignore storage errors
            }
        }
    }["WalletsKitProvider.useCallback[setWallet]"], [
        kit
    ]);
    const refreshAddress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WalletsKitProvider.useCallback[refreshAddress]": async ()=>{
            if (!kit) return null;
            try {
                const { address: addr } = await kit.getAddress();
                setAddress(addr);
                try {
                    if ("TURBOPACK compile-time truthy", 1) {
                        localStorage.setItem("stellar.wallet.address", addr);
                    }
                } catch (_e) {
                // ignore storage errors
                }
                return addr;
            } catch (_e) {
                setAddress(null);
                try {
                    if ("TURBOPACK compile-time truthy", 1) {
                        localStorage.removeItem("stellar.wallet.address");
                    }
                } catch (_e) {
                // ignore storage errors
                }
                return null;
            }
        }
    }["WalletsKitProvider.useCallback[refreshAddress]"], [
        kit
    ]);
    const openModalAndConnect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WalletsKitProvider.useCallback[openModalAndConnect]": async ()=>{
            if (!kit) return;
            await kit.openModal({
                onWalletSelected: {
                    "WalletsKitProvider.useCallback[openModalAndConnect]": async (option)=>{
                        await setWallet(option.id);
                        await refreshAddress();
                    }
                }["WalletsKitProvider.useCallback[openModalAndConnect]"]
            });
        }
    }["WalletsKitProvider.useCallback[openModalAndConnect]"], [
        kit,
        refreshAddress,
        setWallet
    ]);
    const signTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WalletsKitProvider.useCallback[signTransaction]": async (xdr, opts)=>{
            if (!kit) throw new Error("Wallet kit not initialized");
            const addr = opts?.address ?? address ?? await refreshAddress();
            if (!addr) throw new Error("No wallet connected");
            const networkPassphrase = opts?.networkPassphrase ?? network;
            const { signedTxXdr } = await kit.signTransaction(xdr, {
                address: addr,
                networkPassphrase
            });
            return signedTxXdr;
        }
    }["WalletsKitProvider.useCallback[signTransaction]"], [
        kit,
        address,
        network,
        refreshAddress
    ]);
    // Auto-connect on mount if a previous wallet selection exists
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WalletsKitProvider.useEffect": ()=>{
            if (!kit) {
                setIsLoadingKit(false); // Si no hay kit (SSR), terminar de cargar
                return;
            }
            try {
                const lastWallet = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem("stellar.wallet.selected") : "TURBOPACK unreachable";
                if (lastWallet) {
                    ({
                        "WalletsKitProvider.useEffect": async ()=>{
                            await setWallet(lastWallet);
                            const storedAddr = localStorage.getItem("stellar.wallet.address");
                            if (storedAddr) setAddress(storedAddr);
                            await refreshAddress();
                            setIsLoadingKit(false); // 2. Terminar de cargar después de la reconexión exitosa
                        }
                    })["WalletsKitProvider.useEffect"]();
                } else {
                    setIsLoadingKit(false); // 3. Terminar de cargar si no hay wallet previa
                }
            } catch (_e) {
                // ignore storage errors
                setIsLoadingKit(false); // 4. Terminar de cargar en caso de error de storage
            }
        }
    }["WalletsKitProvider.useEffect"], [
        kit,
        setWallet,
        refreshAddress
    ]);
    const disconnect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WalletsKitProvider.useCallback[disconnect]": ()=>{
            setAddress(null);
            setSelectedWalletId(null);
            try {
                if ("TURBOPACK compile-time truthy", 1) {
                    localStorage.removeItem("stellar.wallet.selected");
                    localStorage.removeItem("stellar.wallet.address");
                }
            } catch (_e) {
            // ignore storage errors
            }
        // Nota: Removí setIsLoadingKit(false) de aquí porque el disconnect no es una fase de carga inicial,
        // sino un cambio de estado en tiempo real.
        }
    }["WalletsKitProvider.useCallback[disconnect]"], []);
    const value = {
        kit,
        address,
        selectedWalletId,
        network,
        openModalAndConnect,
        setWallet,
        refreshAddress,
        signTransaction,
        disconnect,
        isLoadingKit
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WalletsKitContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/contexts/WalletsKitContext.tsx",
        lineNumber: 181,
        columnNumber: 12
    }, this);
}
_s(WalletsKitProvider, "ZLi/i7ZfG5qTRZikmP2YCXpiwwA=");
_c = WalletsKitProvider;
function useWalletsKitContext() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(WalletsKitContext);
    if (!ctx) throw new Error("useWalletsKitContext must be used within WalletsKitProvider");
    return ctx;
}
_s1(useWalletsKitContext, "/dMy7t63NXD4eYACoT93CePwGrg=");
function WalletsKitAutoConnector() {
    return null;
}
_c1 = WalletsKitAutoConnector;
var _c, _c1;
__turbopack_context__.k.register(_c, "WalletsKitProvider");
__turbopack_context__.k.register(_c1, "WalletsKitAutoConnector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/Providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$contexts$2f$SupabaseContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/contexts/SupabaseContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$contexts$2f$SorobanContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/contexts/SorobanContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$contexts$2f$WalletsKitContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/contexts/WalletsKitContext.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$contexts$2f$SupabaseContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SupabaseProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$contexts$2f$SorobanContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SorobanProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$contexts$2f$WalletsKitContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletsKitProvider"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/apps/web/components/Providers.tsx",
                lineNumber: 10,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/components/Providers.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/Providers.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-black text-white hover:bg-black/90",
            outline: "border border-gray-200 hover:bg-gray-100",
            ghost: "hover:bg-gray-100"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 px-3",
            lg: "h-10 px-6"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])(buttonVariants({
            variant,
            size
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/button.tsx",
        lineNumber: 35,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/hooks/useWalletsKit.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWalletsKit",
    ()=>useWalletsKit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$contexts$2f$WalletsKitContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/contexts/WalletsKitContext.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useWalletsKit() {
    _s();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$contexts$2f$WalletsKitContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWalletsKitContext"])();
    const isConnected = !!ctx.address;
    const shortAddress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useWalletsKit.useMemo[shortAddress]": ()=>{
            if (!ctx.address) return "";
            const addr = ctx.address;
            if (addr.length <= 10) return addr;
            return `${addr.slice(0, 6)}…${addr.slice(-4)}`;
        }
    }["useWalletsKit.useMemo[shortAddress]"], [
        ctx.address
    ]);
    return {
        ...ctx,
        isConnected,
        shortAddress
    };
}
_s(useWalletsKit, "+z4orNZKQVZ4EgdfphyYMxDiGzc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$contexts$2f$WalletsKitContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWalletsKitContext"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/ui/copy-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CopyButton",
    ()=>CopyButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CopyButton({ value, className }) {
    _s();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    async function onCopy() {
        try {
            await navigator.clipboard.writeText(value);
            setCopied(true);
            setTimeout(()=>setCopied(false), 1200);
        } catch (_e) {
        // ignore
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        type: "button",
        onClick: onCopy,
        variant: "ghost",
        className: className,
        "aria-label": "Copy to clipboard",
        children: copied ? "Copied" : "Copy"
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/copy-button.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(CopyButton, "NE86rL3vg4NVcTTWDavsT0hUBJs=");
_c = CopyButton;
var _c;
__turbopack_context__.k.register(_c, "CopyButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/hooks/useStellarAccount.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStellarAccount",
    ()=>useStellarAccount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/config.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useStellarAccount(address) {
    _s();
    const { horizonUrl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchAccount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useStellarAccount.useCallback[fetchAccount]": async ()=>{
            if (!address) {
                setData(null);
                setError(null);
                return;
            }
            try {
                setIsLoading(true);
                setError(null);
                const res = await fetch(`${horizonUrl}/accounts/${address}`);
                if (!res.ok) throw new Error(`Horizon error: ${res.status}`);
                const json = await res.json();
                setData(json);
            } catch (e) {
                const message = e instanceof Error ? e.message : "Failed to fetch account";
                setError(message);
                setData(null);
            } finally{
                setIsLoading(false);
            }
        }
    }["useStellarAccount.useCallback[fetchAccount]"], [
        address,
        horizonUrl
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useStellarAccount.useEffect": ()=>{
            fetchAccount();
        }
    }["useStellarAccount.useEffect"], [
        fetchAccount
    ]);
    const lumensBalance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useStellarAccount.useMemo[lumensBalance]": ()=>{
            if (!data) return "0";
            const native = data.balances.find({
                "useStellarAccount.useMemo[lumensBalance].native": (b)=>b.asset_type === "native"
            }["useStellarAccount.useMemo[lumensBalance].native"]);
            return native?.balance ?? "0";
        }
    }["useStellarAccount.useMemo[lumensBalance]"], [
        data
    ]);
    return {
        account: data,
        isLoading,
        error,
        refresh: fetchAccount,
        lumensBalance
    };
}
_s(useStellarAccount, "YpZT8AOxEHacRecBP6htPDC8U0s=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/WalletMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WalletMenu",
    ()=>WalletMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$copy$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/copy-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$hooks$2f$useWalletsKit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/hooks/useWalletsKit.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$creit$2e$tech$2f$stellar$2d$wallets$2d$kit$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@creit.tech/stellar-wallets-kit/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$creit$2e$tech$2f$stellar$2d$wallets$2d$kit$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@creit.tech/stellar-wallets-kit/types.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$hooks$2f$useStellarAccount$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/hooks/useStellarAccount.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function truncateAddress(addr) {
    if (!addr) return "";
    if (addr.length <= 12) return addr;
    return `${addr.slice(0, 6)}…${addr.slice(-4)}`;
}
function WalletMenu() {
    _s();
    const { address, network, disconnect } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$hooks$2f$useWalletsKit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWalletsKit"])();
    const { lumensBalance, isLoading, refresh } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$hooks$2f$useStellarAccount$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStellarAccount"])(address);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const popoverRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WalletMenu.useEffect": ()=>{
            function onDocClick(e) {
                if (!open) return;
                if (popoverRef.current && !popoverRef.current.contains(e.target)) {
                    setOpen(false);
                }
            }
            document.addEventListener("mousedown", onDocClick);
            return ({
                "WalletMenu.useEffect": ()=>document.removeEventListener("mousedown", onDocClick)
            })["WalletMenu.useEffect"];
        }
    }["WalletMenu.useEffect"], [
        open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WalletMenu.useEffect": ()=>{
            // refresh balance when menu opens
            if (open) refresh();
        }
    }["WalletMenu.useEffect"], [
        open,
        refresh
    ]);
    if (!address) return null;
    const explorerNetwork = network === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$creit$2e$tech$2f$stellar$2d$wallets$2d$kit$2f$types$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletNetwork"].PUBLIC ? "public" : "testnet";
    const explorerUrl = `https://stellar.expert/explorer/${explorerNetwork}/account/${address}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        ref: popoverRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                onClick: ()=>setOpen((v)=>!v),
                children: truncateAddress(address)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/WalletMenu.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 z-50 mt-2 w-80 rounded-md border bg-white p-3 shadow-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "truncate text-sm font-medium",
                                        children: address
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/WalletMenu.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-500",
                                        children: [
                                            "Network: ",
                                            network
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/components/WalletMenu.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/components/WalletMenu.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$copy$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CopyButton"], {
                                value: address
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/WalletMenu.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/WalletMenu.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 rounded-md border p-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-gray-500",
                                children: "Balance (XLM)"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/WalletMenu.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-lg font-semibold",
                                children: isLoading ? "…" : lumensBalance
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/WalletMenu.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/WalletMenu.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: explorerUrl,
                                target: "_blank",
                                rel: "noreferrer",
                                className: "text-sm text-blue-600 hover:underline",
                                children: "View on Explorer"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/WalletMenu.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        onClick: refresh,
                                        children: "Refresh"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/WalletMenu.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        onClick: ()=>{
                                            setOpen(false);
                                            disconnect();
                                        },
                                        children: "Disconnect"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/WalletMenu.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/components/WalletMenu.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/WalletMenu.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/WalletMenu.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/WalletMenu.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(WalletMenu, "pLer5HNgz0L2zZT/13EsD/79Di8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$hooks$2f$useWalletsKit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWalletsKit"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$hooks$2f$useStellarAccount$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStellarAccount"]
    ];
});
_c = WalletMenu;
var _c;
__turbopack_context__.k.register(_c, "WalletMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$hooks$2f$useWalletsKit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/hooks/useWalletsKit.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$WalletMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/WalletMenu.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Navbar() {
    _s();
    const { appName, stellarNetwork } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfig"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { isConnected, openModalAndConnect } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$hooks$2f$useWalletsKit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWalletsKit"])();
    const explorerNetwork = stellarNetwork === "public" ? "public" : "testnet";
    const explorerHref = `https://stellar.expert/explorer/${explorerNetwork}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-40 border-b border-black/5 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex max-w-6xl items-center justify-between px-5 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "aria-label": "Toggle navigation",
                                className: "sm:hidden rounded-md border px-2 py-1 text-gray-600 hover:bg-gray-100",
                                type: "button",
                                onClick: ()=>setOpen((v)=>!v),
                                children: "☰"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/Navbar.tsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-2 text-base font-semibold",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-gradient-to-r from-indigo-600 to-fuchsia-500 bg-clip-text text-transparent",
                                        children: appName || "Stellar App"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/Navbar.tsx",
                                        lineNumber: 28,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-gray-900/5 px-2 py-0.5 text-[10px] font-medium text-gray-600",
                                        children: "Starter"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/Navbar.tsx",
                                        lineNumber: 31,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/components/Navbar.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/Navbar.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden items-center gap-1 sm:flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/",
                                className: "rounded px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100",
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/Navbar.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/contracts-inspector",
                                className: "rounded px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100",
                                children: "Contracts"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/Navbar.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: explorerHref,
                                target: "_blank",
                                rel: "noreferrer",
                                className: "rounded px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100",
                                children: "Explorer"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/Navbar.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            !isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: openModalAndConnect,
                                className: "ml-2 bg-gradient-to-r from-indigo-600 to-fuchsia-500 text-white shadow-sm hover:from-indigo-500 hover:to-fuchsia-500",
                                children: "Connect Wallet"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/Navbar.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$WalletMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletMenu"], {}, void 0, false, {
                                    fileName: "[project]/apps/web/components/Navbar.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/Navbar.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/Navbar.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/Navbar.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sm:hidden border-t border-black/5 bg-white/70 backdrop-blur",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "mx-auto flex max-w-6xl flex-col gap-2 px-5 py-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/",
                            className: "rounded px-3 py-1.5 text-left text-sm text-gray-700 hover:bg-gray-100",
                            onClick: ()=>setOpen(false),
                            children: "Home"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/Navbar.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: explorerHref,
                            target: "_blank",
                            rel: "noreferrer",
                            className: "rounded px-3 py-1.5 text-left text-sm text-gray-700 hover:bg-gray-100",
                            onClick: ()=>setOpen(false),
                            children: "Explorer"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/Navbar.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this),
                        !isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: openModalAndConnect,
                            className: "mt-2 bg-gradient-to-r from-indigo-600 to-fuchsia-500 text-white shadow-sm hover:from-indigo-500 hover:to-fuchsia-500",
                            children: "Connect Wallet"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/Navbar.tsx",
                            lineNumber: 55,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$WalletMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletMenu"], {}, void 0, false, {
                                fileName: "[project]/apps/web/components/Navbar.tsx",
                                lineNumber: 60,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/Navbar.tsx",
                            lineNumber: 59,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/components/Navbar.tsx",
                    lineNumber: 51,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/Navbar.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/Navbar.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(Navbar, "g3bed1bE2AYMRBAdV3Z758kJEaM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$hooks$2f$useWalletsKit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWalletsKit"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_7fda728e._.js.map