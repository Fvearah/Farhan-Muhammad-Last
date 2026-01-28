document.addEventListener('DOMContentLoaded', () => {
    // Menu Toggle
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Modal Login / Sign Up
    const loginBtn = document.getElementById("loginBtn");
    const modal = document.getElementById("loginModal");
    const closeBtn = document.querySelector(".close-btn");
    const loginTab = document.getElementById("loginTab");
    const signUpTab = document.getElementById("signUpTab");
    const loginForm = document.getElementById("loginForm");
    const signUpForm = document.getElementById("signUpForm");

    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            modal.style.display = "block";
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = "none";
        });
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    if (loginTab && signUpTab) {
        loginTab.addEventListener('click', () => {
            loginTab.classList.add('active');
            signUpTab.classList.remove('active');
            loginForm.classList.add('active');
            signUpForm.classList.remove('active');
        });

        signUpTab.addEventListener('click', () => {
            signUpTab.classList.add('active');
            loginTab.classList.remove('active');
            signUpForm.classList.add('active');
            loginForm.classList.remove('active');
        });
    }

    // Tombol untuk menampilkan Profil & Struktur Organisasi
    document.getElementById('showProfilBtn').addEventListener('click', function() {
        const strukturOrganisasi = document.getElementById('strukturOrganisasi');
        if (strukturOrganisasi.style.display === 'none' || strukturOrganisasi.style.display === '') {
            strukturOrganisasi.style.display = 'block';
        } else {
            strukturOrganisasi.style.display = 'none';
        }
    });

    // Fungsi untuk menampilkan program pelatihan sesuai dengan jumlah entri
    function filterPrograms() {
        const searchQuery = document.getElementById('searchProgram').value.toLowerCase();
        const entryCount = parseInt(document.getElementById('entryCount').value);
        const programs = document.querySelectorAll('.program');
        
        let filteredPrograms = Array.from(programs).filter(program => {
            const title = program.querySelector('h3').textContent.toLowerCase();
            return title.includes(searchQuery);
        });

        // Menampilkan jumlah entri sesuai dengan pengaturan
        filteredPrograms.slice(0, entryCount).forEach(program => {
            program.style.display = 'block';
        });

        // Menyembunyikan program yang tidak terpilih
        filteredPrograms.slice(entryCount).forEach(program => {
            program.style.display = 'none';
        });
    }

    // Menambahkan event listener untuk pencarian dan pengaturan jumlah entri
    document.getElementById('searchProgram').addEventListener('input', filterPrograms);
    document.getElementById('entryCount').addEventListener('change', filterPrograms);

    // Menampilkan semua program pertama kali
    filterPrograms();

    // Menampilkan Visi & Misi
    const visiMisiLink = document.querySelector('a[href="#visi-misi"]');
    const visiMisiSection = document.getElementById('visi-misi');

    visiMisiLink.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah perilaku default tautan

        // Sembunyikan semua tab-content
        const tabContents = document.querySelectorAll('.tab-content');rooooooooooorrr
        tabContents.forEach(function(content) {
            content.style.display = 'none';
        });

        // Tampilkan bagian Visi & Misi
        visiMisiSection.style.display = 'block';
    });

    // Menampilkan Sejarah
    const sejarahLink = document.querySelector('a[href="#sejarah"]');
    const sejarahSection = document.getElementById('sejarah');

    sejarahLink.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah perilaku default tautan

        // Sembunyikan semua tab-content
        const tabContents = document.querySelectorAll('.tab-content');
        tabContents.forEach(function(content) {
            content.style.display = 'none';
        });

        // Tampilkan bagian Sejarah
        sejarahSection.style.display = 'block';
    });

    // Menampilkan Beranda
    const berandaLink = document.querySelector('a[href="#beranda"]');
    const berandaSection = document.getElementById('beranda');

    berandaLink.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah perilaku default tautan

        // Sembunyikan semua tab-content
        const tabContents = document.querySelectorAll('.tab-content');
        tabContents.forEach(function(content) {
            content.style.display = 'none';
        });

        // Tampilkan bagian Beranda
        berandaSection.style.display = 'block';
    });

    // Tampilkan section beranda secara default saat halaman dimuat
    berandaSection.style.display = 'block';
});
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

navMenu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navMenu.classList.remove('active');
  }
});