'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "252d3a313662ea681aa188e8f05d44bf",
"assets/AssetManifest.bin.json": "6d431c4fa13bdb6fb6fc0418850e08d9",
"assets/AssetManifest.json": "ad37e704a8f64402b73ebebfe3eb9e19",
"assets/assets/images/artIsEmpty.png": "43c932295885aba15c5402f951d2fa19",
"assets/assets/images/background01.jpg": "1bff4b160452b93b58ab5d88e4be5f4a",
"assets/assets/images/Bling.png": "c819098547d7f85289b33a47a70ea229",
"assets/assets/images/BlingIcon.png": "c97ba4539c5bd5afd443deb8653c8370",
"assets/assets/images/blingWhite.png": "15781df1186a44d2930b89e4edfd05c7",
"assets/assets/images/bling_character.png": "3a3290015ae920dfac3bd387cd3de4d8",
"assets/assets/images/bling_icon_light.png": "7e608a1c2781c79d48d2459729de5f9b",
"assets/assets/images/bto_horizon.png": "4e18cf4b9222432aeb5321af92866ea2",
"assets/assets/images/changeMyBling.png": "aee97a4f38252106332c08ec2cbfe06c",
"assets/assets/images/exhibition.png": "2e5b260dd8d9c88384f9642f4fab9221",
"assets/assets/images/pen1.png": "84049497581313cc1a54ff0b4393e120",
"assets/assets/images/pen2.png": "82acf39e9d63b8fccdb38781c7b89176",
"assets/assets/images/pen3.png": "77b79e8b135130346fab92bd89cfd2f9",
"assets/assets/images/pen4.png": "483f2baa3e3b2ce48bd50aec0db8d2fd",
"assets/assets/images/pen5.png": "856fcdd42c35eae02a05121203f9e519",
"assets/assets/images/Rectangle%2520311.png": "8956f31ffd28e9e8680f5947833e8ab1",
"assets/assets/images/splashBackgroundVer2.png": "5891118e37db12c8cb3feea4f92c3e16",
"assets/assets/images/stroke1.png": "c1f063541a6bb33792eb74f1434987c1",
"assets/assets/images/stroke2.png": "68c445cce0fb767258a3dc95925abb99",
"assets/assets/images/stroke3.png": "2c18e46a67f80338e5dcc5f51b1702ba",
"assets/assets/images/stroke4.png": "b0797bd24c127c28134e58a533f00fd3",
"assets/assets/images/stroke5.png": "87e3ff96efa721b2bc647d0220c86492",
"assets/assets/images/tabHomeSample.png": "bdbf03342f823833f9dd2cdb35350119",
"assets/assets/images/temp.png": "bd42e8c5e8575bf6e73f3a188431aad0",
"assets/assets/images/temp2.png": "21ec88fe5f3927304030e04809d29ee9",
"assets/assets/images/unsplash_yu68fUQDvOI.png": "738e14594fc386388fcb2075db5ba5e4",
"assets/assets/images/worksV2.png": "b1a4a23756e94f3eb361ea6373bcf052",
"assets/assets/images/__tempImg.jpg": "4aa93a85b2bd11967e3eeb1a090fa7a1",
"assets/FontManifest.json": "03230d7e573b42c033c182e0f07ede0a",
"assets/fonts/Bling.ttf": "83ea7ed6fd190f47bfc822e40d58a025",
"assets/fonts/MaterialIcons-Regular.otf": "36d5c9d47f6b0b0dc488e183f86780f0",
"assets/NOTICES": "6624dbc232878bb6a860ceb5755c2021",
"assets/packages/amplify_authenticator/assets/social-buttons/google.png": "a1e1d65465c69a65f8d01226ff5237ec",
"assets/packages/amplify_authenticator/assets/social-buttons/SocialIcons.ttf": "1566e823935d5fe33901f5a074480a20",
"assets/packages/amplify_auth_cognito_dart/lib/src/workers/workers.min.js": "77727e3a27ad3662c8fe30922a27626e",
"assets/packages/amplify_auth_cognito_dart/lib/src/workers/workers.min.js.map": "1d2af1f0a021761b289f4bf0fed87242",
"assets/packages/amplify_secure_storage_dart/lib/src/worker/workers.min.js": "fa742e283e40fa499a72f9a314f9f53a",
"assets/packages/amplify_secure_storage_dart/lib/src/worker/workers.min.js.map": "b77186f134bc5be76a9c7b6512461a00",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "a727e4ebb71f4892a3a65c5cbf1772d9",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "0314997b4b4d1af6f53f0ea8a7ecc7a2",
"icons/Icon-512.png": "d37937f0a2e22789d53f89160483da41",
"icons/Icon-maskable-192.png": "4a2c12c83072dcb4369a425488739659",
"icons/Icon-maskable-512.png": "a6c2933132d8373b85132e15d9aec9b8",
"index.html": "cfc89454b1c395636269680c4d784b73",
"/": "cfc89454b1c395636269680c4d784b73",
"main.dart.js": "efa140a79112026777e449cc00940e3d",
"manifest.json": "38fc7b717516780f8bae8f1a57bb29db",
"version.json": "94a0c71fcd45c0aeca6c2957e81ca27e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
