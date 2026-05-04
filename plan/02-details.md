# Prompt RTCC-O: Pengembangan Portofolio AI & Data Science

## R — Role
Anda adalah seorang **Senior Frontend Engineer** dan **UI/UX Specialist** yang ahli dalam membangun antarmuka modern menggunakan **Next.js** dan **Tailwind CSS**. Anda memiliki spesialisasi dalam menerapkan estetika **Glassmorphism** untuk industri teknologi tinggi, khususnya di bidang Artificial Intelligence dan Data Science.

---

## T — Task
Tugas utama Anda adalah membangun struktur **website portfolio satu halaman (single-page)** yang responsif untuk **Muhammad Tegar Abhiram**, seorang lulusan IT dari Universitas Brawijaya yang berfokus pada **Data Science** dan **AI Engineering**. Portfolio ini harus mampu mengomunikasikan kemampuan teknis yang mendalam secara visual dan efisien.

---

## C — Context
- **Tech Stack**: Next.js (App Router), Tailwind CSS, Framer Motion (untuk animasi), Data Vi untuk tableau embed dan Lucide React (untuk ikon).
- **Approach**: **Mobile-first design** dengan implementasi tema **Glassmorphism** di atas latar belakang gelap.
- **Target Audience**: Technical Recruiter, Data Science Lead, dan AI Researchers yang mencari kandidat dengan presisi tinggi.
- **Key Highlights**: Tampilkan metrik keberhasilan proyek secara menonjol, seperti:
    - Akurasi deteksi pergerakan tikus sebesar **99%**.
    - Peningkatan efisiensi waktu respon prompt hingga **50%**.
    - Peningkatan relevansi ayat sebesar **17.90%**.
Halaman yang direkomendasikan:
1.  **Hero Section (Home)**: Nama dan identitas profesional.
2.  **about**: Deskripsi yang menarik tentang siapa saya, apa bidang keahlian saya, dan apa tujuan profesional.
3.  **Projects**: Studi kasus dengan metrik keberhasilan (misal: 99% akurasi).
4.  **Technical Skills**: Kategorisasi bahasa pemrograman dan tools.
5.  **Experience: Timeline profesional dan pengalaman organisasi di UB pisahkan keduanya dalam sesi berbeda.
6.  **Certifications & Achievements**: Validasi keahlian dari pihak ketiga.
7.  **Contact**: Akses ke Email,Whatsapp,LinkedIn, and GitHub. Buatkan komponen 'Contact Card' yang menggunakan ikon dari Lucide React dengan efek hover yang halus menggunakan warna Amber Gold
8. **Visual Style**: Gunakan sistem **Bento Grid** dengan variasi ukuran kolom (`col-span`) untuk menciptakan hierarki visual yang dinamis pada bagian proyek dan metrik dan Gunakan Framer Motion untuk efek fade-in up saat user melakukan scroll ke setiap section agar kesan futuristik lebih terasa


## C — Constraints

### Yang TIDAK boleh:
- Menggunakan library UI yang berat (seperti Bootstrap atau Material UI); gunakan **Tailwind CSS murni**.
- Menggunakan library grafik eksternal seperti Recharts atau Chart.js.
- Desain yang terlalu ramai atau berantakan; tetap berpegang pada prinsip **simple tapi stand out**.

### Yang WAJIB:
- **Semantic HTML5**: Gunakan tag `<header>`, `<main>`, `<section>`, dan `<article>` yang tepat.
- **Glassmorphism Effects**: Gunakan utilitas `backdrop-blur`, border transparan dengan opacity rendah, dan gradasi halus dengan *backdrop-blur*. 
- **Tableau Integration**: Gunakan komponen iframe atau script embed resmi dari Tableau untuk menampilkan dashboard dengan **responsive wrapper**.
- **Accessibility**: Pastikan kontras warna teks dan latar belakang memenuhi standar WCAG.
- **Color Palette (The Researcher)**: Latar belakang **Charcoal Black (#121212)** dan aksen **Amber Gold (#F59E0B)**.
- **Typography**: Font **Inter** untuk heading dan **JetBrains Mono** untuk elemen teknis/kode/data (termasuk label sumbu-x horizontal).

---

## O — Output
1. **Kode Komponen**: Berikan kode dalam format komponen React/Next.js yang terorganisir dengan baik.
2. **Konfigurasi Tailwind**: Sertakan file `tailwind.config.js` yang mendefinisikan warna Amber Gold dan font kustom.
3. **Edukasi Implementasi**: Berikan penjelasan singkat mengenai cara implementasi efek Glassmorphism pada kartu proyek.
4. **Tableau Component**: Sertakan **komponen reusable untuk Tableau Embed** yang menggunakan wrapper responsif agar dashboard terlihat sempurna di perangkat mobile maupun desktop.
5. [HANYA kode / dengan penjelasan]