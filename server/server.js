/**
 * MAIN SERVER FILE
 */
const express = require("express");
const path = require("path");
const { createProxyMiddleware } = require("http-proxy-middleware");
const expressStaticGzip = require("express-static-gzip");

/**
 * STATIC PATH FOR SERVING BUILD
 */

const publicPath = path.join(__dirname, "..", "public");

/**
 * INITIALIZE EXPRESS APP
 */
const app = express();

/**
 * SET PORT
 */
const port = process.env.PORT || 3003;

/**
 * SET PROXY TO DEV SERVER
 */
app.use(
  "/api",
  createProxyMiddleware({
    target: "http://localhost:4001",
    changeOrigin: true,
  }),
);

/**
 * SET STATIC FILE FOLDERS
 */
app.use(
  expressStaticGzip(publicPath, {
    enableBrotli: true,
    orderPreference: ["br", "gz"],
    setHeaders(res) {
      res.setHeader("Cache-Control", "public, max-age=31536000");
    },
  }),
);

/**
 * FALLBACK ROUTES REDIRECT TO REACT ROUTER
 */
app.get("*", (req, res) => res.sendFile(path.join(publicPath, "index.html")));

/**
 * START THE SERVER
 */
app.listen(port, () => console.log(`server listening on port ${port}`));
