/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-f01b6e3312c838f08072.js"
  },
  {
    "url": "app-d13ff3eb4e749fc55d33.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-8b39cf320710777c95f1.js"
  },
  {
    "url": "index.html",
    "revision": "a65e582b4ff7e200d3cdad3835d064f5"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "95b67c46e6ab996f42bb913786a183b2"
  },
  {
    "url": "component---src-pages-index-js.14df719b0f728d9f8b9d.css"
  },
  {
    "url": "component---src-pages-index-js-9ed05e498d643fb1bf14.js"
  },
  {
    "url": "0-ce2f422d93a44abc372e.js"
  },
  {
    "url": "static/d/946/path---index-6a9-bjcUBuKA2NJuh7dxKcY0a3MvM.json",
    "revision": "75f2b80bb48e5c249ca32ad8fe0e775d"
  },
  {
    "url": "component---src-pages-404-js.14df719b0f728d9f8b9d.css"
  },
  {
    "url": "component---src-pages-404-js-b3262d9f66e87da707ea.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "9c15da1704f7c20392d28d7cf532daed"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});