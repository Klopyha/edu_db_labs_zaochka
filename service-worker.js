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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9ae4bbef2d87c1e80eacd1148565d08f"
  },
  {
    "url": "assets/css/0.styles.ce71412b.css",
    "revision": "a6db003a6f7614471d9036086e2bc89f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ad781c78.js",
    "revision": "899ef58f3f92b85d021edba26afd2097"
  },
  {
    "url": "assets/js/11.32ba2003.js",
    "revision": "b012f550c9920cce59792eeb20924fd7"
  },
  {
    "url": "assets/js/12.f4d805b2.js",
    "revision": "45a0f424731485e8513dbf3f52453817"
  },
  {
    "url": "assets/js/13.b369ab95.js",
    "revision": "ff30346a2ae0704d1a7791e2ab06f152"
  },
  {
    "url": "assets/js/14.4fd45c58.js",
    "revision": "2826a1bfcbbdf9810af87b4f633a8390"
  },
  {
    "url": "assets/js/15.5d61a4b3.js",
    "revision": "cd09db05dba6b39b033077ee93bb3b04"
  },
  {
    "url": "assets/js/16.6a73ab67.js",
    "revision": "039a459ce7877806245e67226e4a6dcc"
  },
  {
    "url": "assets/js/17.5b53db67.js",
    "revision": "88eb46c3062d10bf8da23f3e3c815e96"
  },
  {
    "url": "assets/js/18.f1775122.js",
    "revision": "efce58aaf72028620a6c956a1e228fb5"
  },
  {
    "url": "assets/js/19.9b0960b9.js",
    "revision": "9068a846ac005894a4e90ca904cd17ef"
  },
  {
    "url": "assets/js/2.e2e01990.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.1afee4fb.js",
    "revision": "ee58c3f0703a9755049fab72b8925149"
  },
  {
    "url": "assets/js/21.0b18e678.js",
    "revision": "64153c8afb1e3a580725bc5bfe62ba7d"
  },
  {
    "url": "assets/js/22.fcb6d1fa.js",
    "revision": "8fd378f73ca4b2f176c0dd9a99d26de9"
  },
  {
    "url": "assets/js/23.437cc24f.js",
    "revision": "c0737244c08a6027329a7485bdfa97f6"
  },
  {
    "url": "assets/js/24.9364b685.js",
    "revision": "af5db62e23211f378001e561508a9cc3"
  },
  {
    "url": "assets/js/26.2b7d224e.js",
    "revision": "d09140fd6d4af5d21412c1e04e0338bb"
  },
  {
    "url": "assets/js/3.4ed45971.js",
    "revision": "b16159aab039353619946e13967d38e4"
  },
  {
    "url": "assets/js/4.5d00dd71.js",
    "revision": "354b2b53903cf28623245afa41ac130d"
  },
  {
    "url": "assets/js/5.4b8fb81c.js",
    "revision": "b865b25b78848b369ebb4f7a7684bf5b"
  },
  {
    "url": "assets/js/6.37f402c4.js",
    "revision": "43bdcf1e529c99fca1e216d96833b9ee"
  },
  {
    "url": "assets/js/7.a2994458.js",
    "revision": "817c1a9fc1e6f84583934d814a9ab3f5"
  },
  {
    "url": "assets/js/8.e8761b22.js",
    "revision": "df02b8b825d5757e125dbe170d1555c1"
  },
  {
    "url": "assets/js/9.c0a843c2.js",
    "revision": "6fdef7e064583d735d435c9c7be58314"
  },
  {
    "url": "assets/js/app.3f6d7f42.js",
    "revision": "a74854f00b4c3a2e4ee4618b4e0ee5f7"
  },
  {
    "url": "conclusion/index.html",
    "revision": "77afee163130966950c7818edacf874c"
  },
  {
    "url": "design/index.html",
    "revision": "791576fd5aa76dbd1fd0f6f22424e5c9"
  },
  {
    "url": "index.html",
    "revision": "51ef7bf1ed4d2ac0a4a2080440828e61"
  },
  {
    "url": "intro/index.html",
    "revision": "8c5d0d64d20b776594e3fcbebb842ccf"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "25f9acb3861a01c405869a52d20a2754"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "fd4fce3cb46ecad09161db961c8882ee"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "3cf3ec7a4476fb4ea8d10345d255b79d"
  },
  {
    "url": "software/index.html",
    "revision": "5cf6e667566026a25bfea45c3f819fd1"
  },
  {
    "url": "test/index.html",
    "revision": "ad0d88c053c1592ac1d4524847b42089"
  },
  {
    "url": "use cases/index.html",
    "revision": "5d141b948dc66347325a03a71248e726"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
