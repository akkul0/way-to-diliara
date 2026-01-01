const CACHE_NAME = 'diliara-game-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap',
  // Oyun görselleri (Imgur linkleri)
  'https://i.imgur.com/kbKi5Q3.png',
  'https://i.imgur.com/vFNHkZ4.png',
  'https://i.imgur.com/xysu3D3.png',
  'https://i.imgur.com/AtjW19E.png',
  'https://i.imgur.com/debi3sf.png',
  'https://i.imgur.com/ISiHksj.png',
  'https://i.imgur.com/diWxiuE.jpeg',
  'https://i.imgur.com/nNj5BlY.jpeg',
  'https://i.imgur.com/fY9rtJK.jpeg',
  'https://i.imgur.com/8jrIOOf.png',
  'https://i.imgur.com/v88be8h.png',
  'https://i.imgur.com/Fq47Yth.png',
  'https://i.imgur.com/JCkBv60.png',
  'https://i.imgur.com/LI0NoFN.png',
  'https://i.imgur.com/vW8L2uI.png',
  'https://i.imgur.com/9NXv97l.png',
  'https://i.imgur.com/cOqc5cO.png',
  'https://i.imgur.com/vtNrMTn.png',
  'https://i.imgur.com/LXXJ4Vd.png',
  'https://i.imgur.com/FrWwCkK.png'
  // Ses dosyaları dış kaynaklı olduğu için cache'lemiyoruz,
  // tarayıcı kendi cache mekanizmasını kullanacaktır.
];

// Yükleme (Install) Olayı: Dosyaları önbelleğe al
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Dosyalar önbelleğe alınıyor...');
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
});

// Getirme (Fetch) Olayı: İnternet yoksa önbellekten sun
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Önbellekte varsa onu döndür, yoksa internetten çek
        return response || fetch(event.request);
      })
  );
});