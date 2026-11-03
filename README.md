# Video İndir

Bu sürüm internet üzerinden yayınlanabilecek bir Node.js prototipidir. Platform video indirme entegrasyonu içermez. İzinli doğrudan MP4 dosyaları tarayıcıda açılabilir; kaydetme tarayıcıya ve sunucunun izinlerine bağlıdır.

## Yerelde çalıştırma
1. Node.js 20+ kurun.
2. Proje klasöründe `npm install` çalıştırın.
3. `npm start` çalıştırın.
4. `http://localhost:3000` adresini açın.

## İnternette yayınlama
GitHub'a bu klasördeki dosyaları yükleyin. Render gibi Node.js barındırma hizmetinde yeni Web Service oluşturun; build command `npm install`, start command `npm start` olarak ayarlayın. Hizmetin verdiği HTTPS adresini tabletinizde Chrome ile açın. Hesap oluşturma ve dağıtım işlemleri kullanıcı tarafından yapılır.

Güvenlik: Bu demo kullanıcı URL'sinden sunucu tarafında dosya çekmez; dolayısıyla herhangi bir TikTok/YouTube/Instagram videosunu indirdiğini iddia etmez.
