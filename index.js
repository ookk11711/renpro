const AnyProxy = require("anyproxy");

const options = {
  port: process.env.PORT || 8000,
  rule: null,
  webInterface: false,
  throttle: 10000,
  forceProxyHttps: true,
  silent: false,
};

const proxyServer = new AnyProxy.ProxyServer(options);

proxyServer.on("ready", () => {
  console.log("Proxy server is running...");
});

proxyServer.on("error", (e) => {
  console.error("Proxy server error:", e);
});

proxyServer.start();
