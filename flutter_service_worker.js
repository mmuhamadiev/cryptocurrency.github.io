'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "1bf393a57bfeb69390c4f5eeba5efa9a",
"index.html": "4f1aab21ec45e28508ac0c18e6d8a871",
"/": "4f1aab21ec45e28508ac0c18e6d8a871",
"main.dart.js": "a7962e8582a56e368c38ac7f8b4fd286",
"favicon.png": "6aedd83624f33445cb5cfeaca54ab7ac",
"manifest.json": "04b5d5feec371245c45ecabad3eab385",
".git/config": "d7ec968f2a49140b40405f39dcdb57d7",
".git/objects/6f/fc8ae8bcff4bd9fa2fbdeb63afebc15d199b60": "6cfed2b586e717fc2e74dcbf89fddecd",
".git/objects/3c/ea48919e38f7e750ddb9f99a568d62f1f59ff6": "dda5c4cd78272c16baa015cf2e4b3ed3",
".git/objects/94/a25f7f4cb416c083d265558da75d457237d671": "f4ba8c706b5e4a214d83e95a0099370a",
".git/objects/0e/6c79c1351fcb1d475c391f44f547129d907921": "06d2a888cf7fa28ecdbd567451c1050e",
".git/objects/d7/f69fb54ca9784fbd634023cb92de44d11edaf3": "f791e0ec23f95fe83e0ea8731acb90aa",
".git/objects/b4/26882f78de2291b927ce836b69aba54b79925c": "f4b2304bee06bf309bd57ebd42b55281",
".git/objects/a5/b5ba32b2b614380c0f606ded8f0c4edc67a06b": "c8509419bedf87c61b1202d34952aad2",
".git/objects/d1/2b855173db697e7fbac9dc53b415ae72df6082": "fa1495be06af01cbfe53fca09aabd770",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/60f3cb47282b88f6b20519469b44ea1e6d844c": "608726ae2e20838b235272821717adbc",
".git/objects/f2/9a368ccd2f4c9f606b9655f80d88dd474c07ce": "3c23cfa6a45a5ae8895aa83600e0a260",
".git/objects/f2/a3ee1ab83cbfcd9093f8aad5c84d5580c1b699": "76e0e97f47c5ca60fb852c8ac3b37537",
".git/objects/f2/2ce94e7ef66083495d762b99d06d7128b15750": "a8cd87736acdc48d3ba8e0e3a5471f1d",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/21/f00e9a22687ac5f570e50fe70c97172e97dc4c": "72dc33f927c28a4eac9467727ed852ab",
".git/objects/6b/e093e332c8675a920522b6db76d982b68a2c0a": "f45620bd5284118cab20343c201be6cb",
".git/objects/07/09a54859d8470f51dbc4ec7d07ca407c3c3afe": "e5e57e56a79e6fd1fbc11c4b7e43a894",
".git/objects/98/c31ddd18e71d9869cee32d58f73e6cfb519266": "ede7565ea851e6f9aa25f35a92f769c3",
".git/objects/3f/5785ca885202ddffee8220e75a23703f31b4d7": "fe55a7ddb1874df7f79f9f1864ccf194",
".git/objects/30/f88c067b476933bb41c003f58d61b460013139": "f9cc5262b8b2b8ceda152ae8d42eba74",
".git/objects/63/9900d13c6182e452e33a3bd638e70a0146c785": "488924a8ec51457535ebf377a60e23c8",
".git/objects/b6/0b28a62f8c296f237eec6705bd2f2d113f2303": "368146d52d9202d67bfa4e091057e393",
".git/objects/db/50eb8846be21f7d4e520cf685f4b586b612569": "935beb35abd9a4aef85cb962be7eb64d",
".git/objects/de/7f0f4fee1c77bfe266258b59e10dd31e3d0e55": "173061e4a4de9c1ee381319a15c0a135",
".git/objects/b9/a2c7f897973261eb3538d668de7a1b80ccb641": "0bf9f2c93b4b16f1e650c89bb4dce41a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/fa/9b7df25a3502fddb7c4ce3dad80d58f464f715": "99fa8a813c7ac69ba98fdbd1da02004f",
".git/objects/e7/a96b770df76dc647bad78c8851ce76e9d325a2": "73b7440ba38db8ce045da4ea2fda73ce",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/77/5b628b552d3bc8e50c80341b9289d7d7bccb7a": "dc573fc22f6b3b7578a4295432709d7b",
".git/objects/84/c1610147922e9398712099302c432bf60af135": "ec00b948691cae5af2cac61786ec2dfd",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/2e/96a1a7c353585bf633b61facbe65f132955c22": "7555bac22aa534667a8a8e46c5913116",
".git/objects/78/9f276133fdf57e2864606a00b984f75f063eda": "4ff535646897254accfa6b4988cca1db",
".git/objects/8b/fa39e2879d8504ffb67344ffafe9d025990f6f": "a511c3bec53bea51e378490a158d4ebd",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9df3cd337b2d9077046e6734425f37f8",
".git/logs/refs/heads/main": "9df3cd337b2d9077046e6734425f37f8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "41a005a8cad3e0c1ffe78018a4c6ea50",
".git/index": "56aedc434302dab6f51362935a5b9194",
".git/COMMIT_EDITMSG": "7770240f62019b36e618576957ff1e98",
"assets/AssetManifest.json": "96a998bdd31d0af522648ff604eb1d12",
"assets/NOTICES": "f00d0d8ba361ff67236620adf98cc075",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/lib/UI/pages/currency_page.dart": "45b9ea9bc14e2c3a995fab198c402697",
"assets/lib/UI/pages/not_found_page.dart": "383d7ecc5ae4e8488b6ef1d804350711",
"assets/lib/UI/pages/main_menu.dart": "f1b47db7b89edcd1413c9debbd7eb517",
"assets/lib/UI/pages/exchange_rate_page.dart": "3d97cad43cfd7e963c87426b26eaa555",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/logo/crypto-logo.png": "c11d0d8d3212baa34435c6cf3a2570fd",
"assets/assets/logo/crypto-logo_splash.png": "2f98af836101d5005b28b86c50b57bd9",
".idea/vcs.xml": "166acef3d301bd241d0d6da15bc5ad3c",
".idea/workspace.xml": "826b7a5b164318f0e2c5fe9239109c42",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
".idea/misc.xml": "e6b023077aa4876dbe12734108325458"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
