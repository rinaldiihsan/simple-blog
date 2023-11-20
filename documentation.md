# Simple Blog API Documentation

Dokumentasi ini memuat semua informasi yang Anda butuhkan untuk berinteraksi dengan API Simple Blog. Anda akan menemukan daftar lengkap dari endpoint yang tersedia beserta detail permintaan dan respons yang diharapkan. Gunakan dokumentasi ini sebagai panduan untuk mengintegrasikan dan menguji API Simple Blog.

Selamat menggunakan API Simple Blog!

---

## USER

Section ini berisi permintaan terkait pengelolaan user, termasuk registrasi user dan juga login user

#### Login

```
localhost:3000/user/login
```

- Deskripsi: Permintaan ini digunakan untuk login kedalam simple-blog api, yang akan menghasilkan JWT ( Json Web Token ).
- Metode: POST
- Contoh Request:

```
{
    "username": "ihsan",
    "password": "ihsan123"
}
```

- Contoh Response:

```
{
    "data": {
        "message": "Login success!",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJpaHNhbiIsImVtYWlsIjoiaWhzYW5AZ21haWwuY29tIiwiaWF0IjoxNzAwNTAxMjE1LCJleHAiOjE3MDA1MDQ4MTV9.WoyZDTS0QUsQoEU0adHvE-FDybPuIn7698vgTvbP9Ak"
    }
}
```

#### Register

```
localhost:3000/user/register
```

- Deskripsi: Permintaan ini digunakan untuk registrasi pengguna yang berguna saat login kedalam simple-blog api. Password akan otomatis ter hash agar meningkatkan keamanan data pengguna.
- Metode: POST
- Contoh Request:

```
{
    "username": "ihsan",
    "email":"ihsan@gmail.com",
    "password": "ihsan123"
}
```

- Contoh Response:

```
{
    "data": {
        "message": "Register success!"
    }
}
```

---

## BLOG-POST

Section ini berisi permintaan terkait manajemen blog post, termasuk pembuatan, pembaruan, penghapusan, dan pengambilan data blog post.

#### Create-BlogPost

```
localhost:3000/blog-post/create
```

- Deskripsi: Permintaan ini digunakan untuk membuat blog-post baru.
- Metode: POST
- Contoh Request:

```
{
    "title" : "Belajar Menulis",
    "body": "Belajar lah Menulis",
    "userId": 1
}
```

- Contoh Response:

```
{
    "data": {
        "message": "Create blog post success!"
    }
}
```

#### GetAll-BlogPost

```
localhost:3000/blog-post/
```

- Deskripsi: Permintaan ini digunakan untuk mengambil daftar semua blog post yang ada.
- Metode: GET
- Contoh Response:

```
{
    "data": {
        "userId": 1,
        "username": "ihsan",
        "email": "ihsan@gmail.com",
        "blogPosts": [
            {
                "id": 1,
                "title": "Belajar Menggambar",
                "body": "Belajar lah Menggambar",
                "createdAt": "2023-11-20T16:35:07.000Z",
                "updatedAt": "2023-11-20T16:35:22.000Z"
            },
        ]
    }
}
```

#### GetById-BlogPost

```
localhost:3000/blog-post/:id
```

- Deskripsi: Permintaan ini digunakan untuk mengambil daftar semua blog-post berdasarkan id.
- Metode: GET
- Contoh Response:

```
{
    "data": {
        "userId": 1,
        "username": "ihsan",
        "email": "ihsan@gmail.com",
        "blogPosts": [
            {
                "id": 1,
                "title": "Belajar Menggambar",
                "body": "Belajar lah Menggambar",
                "createdAt": "2023-11-20T16:35:07.000Z",
                "updatedAt": "2023-11-20T16:35:22.000Z"
            },
        ]
    }
}
```

#### Update-BlogPost

```
localhost:3000/blog-post/update/:id
```

- Deskripsi: Permintaan ini digunakan untuk memperbarui blog-post yang sudah ada, berdasarkan id.
- Metode: PUT
- Contoh Request:

```
{
    "title" : "Belajar Menulis",
    "body": "Belajar lah menulis",
    "userId": 1
}
```

Contoh Respon Sukses:

```
{
    "message": "Update blog post success!"
}
```

#### Delete-BlogPost

```
localhost:3000/blog-post/delete/:id
```

- Deskripsi: Permintaan ini digunakan untuk menghapus blog-post yang sudah ada, berdasarkan id.
- Metode: DELETE
- Contoh Response:

```
{
    "message": "Delete blog post success!"
}
```

---

## COMMENT

Section ini berisi permintaan terkait manajemen komentar, termasuk pembuatan, pembaruan, penghapusan, dan pengambilan data komentar.

#### Create-Comment

```
localhost:3000/comment/create
```

- Deskripsi: Permintaan ini digunakan untuk membuat komentar baru di dalam blog-post.
- Metode: POST
- Contoh Request:

```
{
    "postId" : 1,
    "userId" : 1,
    "comment" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis quam a augue dignissim convallis. Donec id lacinia nibh. Aenean hendrerit sapien eu eros venenatis, ut viverra lectus consequat."
}
```

- Contoh Response:

```
{
    "data": {
        "message": "Create comment success!"
    }
}
```

#### GetAll-Comment By PostId

```
localhost:3000/comment/blog-post/:postId/comments
```

- Deskripsi: Permintaan ini digunakan untuk mengambil daftar semua komentar yang ada.
- Metode: GET
- Contoh Response:

```
{
    "data": {
        "postId": 1,
        "title": "Belajar Menggambar",
        "userId": 1,
        "username": "ihsan",
        "comments": [
            {
                "id": 1,
                "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis quam a augue dignissim convallis.",
                "createdAt": "2023-11-20T16:35:28.000Z",
                "updatedAt": "2023-11-20T16:35:49.000Z"
            }
        ]
    }
}
```

#### Update-Comment

```
localhost:3000/comment/update/:id
```

- Deskripsi: Permintaan ini digunakan untuk memperbarui - komentar yang sudah ada.
- Metode: PUT
- Contoh Request

```
{
    "comment" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis quam a augue dignissim convallis."
}
```

- Contoh Respon Sukses:

```
{
    "message": "Update comment success!"
}
```

#### Delete-Comment

```
localhost:3000/comment/delete/:id
```

- Deskripsi: Permintaan ini digunakan untuk menghapus komentar yang sudah ada.
- Metode: DELETE
- Contoh Respon Sukses:

```
{
    "message": "Delete comment success!"
}
```
