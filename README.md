### Simple Blog API

Simple Blog API adalah sebuah aplikasi berbasis Node.js yang memungkinkan Anda untuk membuat, mengelola, dan berinteraksi dengan blog post dan komentar. API ini dibangun dengan menggunakan Express.js sebagai kerangka kerja web dan MySQL sebagai database.

### How To Use ?

- Clone repository ini
- Jalankan perintah

```bash
npm install
```

- Buat database baru dengan nama `simple-blog`

- Setelah itu copy file `.env.example` pada terminal dengan cara :

```bash
cp .env.example .env
```

- Kemudian isikan configurasi pada file `.env` silahkan disesuaikan sendiri dengan konfigurasi yang ada di komputer masing-masing

- Contohnya :

```
APP_NAME=simple-blog
APP_PORT=3000
APP_URL=http://localhost
NODE_ENV=development

# database
DB_HOST=127.0.0.1
DB_DRIVER=mysql
DB_NAME=simple-blog
DB_USER=root
DB_PASS=
DB_PORT=3306
PRIVATE_KEY=

```

**_Note :_** _`PRIVATE_KEY` adalah key untuk JWT yang bisa di generate sendiri menggunakan website https://www.random.org/strings/_

- Jalankan API ini dengan perintah :

```
npm run dev
```

### How To Generate Controller Automatic ?

- Untuk membuat controller secara otomatis silahkan jalankan skrip berikut di terminal :

  ```
  npm run generate-controller <nama_controller>
  ```

- Jika berhasil maka akan terbuat file controller baru

### Documentation API

- Untuk melihat dokumentasi API ini silahkan cek file `documentation.md` yang ada di repository ini.

### Author

Rinaldi Ihsan Setiawan
