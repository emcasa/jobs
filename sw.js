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
    "url": "webpack-runtime-a3998fa036f92d7e3531.js"
  },
  {
    "url": "app-a8cc6667b0eb8240d98c.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-c9c937b9491619a6493b.js"
  },
  {
    "url": "index.html",
    "revision": "c3ffa262887f189134ae6e3138698aaa"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "177d1fb9e001371000d4ce1b396de4be"
  },
  {
    "url": "component---src-pages-index-js.2efee176e2e344f7e3e8.css"
  },
  {
    "url": "component---src-pages-index-js-ba59ee4388a97495c3b5.js"
  },
  {
    "url": "0-f4161d1a7c229245cc4f.js"
  },
  {
    "url": "static/d/113/path---index-6a9-LloHmI7WtfuyVqwmCO4pqJQafg.json",
    "revision": "e9c8ee2e0178eb38fa48d7c5113ae7b0"
  },
  {
    "url": "component---src-pages-404-js.2efee176e2e344f7e3e8.css"
  },
  {
    "url": "component---src-pages-404-js-0097c6176490ddf6cf30.js"
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