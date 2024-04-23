// JavaScript for enabling horizontal scrolling on portfolio
// JavaScript for enabling horizontal scrolling on portfolio
const portfolio = document.getElementById('portfolio');
const items = document.querySelectorAll('.item');
let currentItemIndex = 0;

function scrollToNextItem() {
    currentItemIndex++;
    if (currentItemIndex >= items.length) {
        currentItemIndex = 0;
    }
    const nextItem = items[currentItemIndex];
    portfolio.scrollTo({
        left: nextItem.offsetLeft - portfolio.offsetLeft,
        behavior: 'smooth'
    });
}

// Event listener untuk menjalankan kode setelah dokumen HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function () {
    // Set interval untuk berpindah setiap 3 detik
    setInterval(scrollToNextItem, 3000);
});


// JavaScript for toggling navigation menu
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open'); // Toggle class 'open' pada elemen nav
});

// Event listener untuk menjalankan kode setelah dokumen HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function () {
    // Kode JavaScript di sini
    function checkScreenWidth() {
        const asideElement = document.querySelector('aside');
        if (window.innerWidth <= 768) {
            asideElement.style.display = 'none';
        } else {
            asideElement.style.display = 'block';
        }
    }

    // Panggil fungsi saat dokumen dimuat dan saat layar diubah ukurannya
    checkScreenWidth(); // Panggil sekali saat dokumen dimuat
    window.addEventListener('resize', checkScreenWidth);
});

// JavaScript for smooth scrolling when mouse enters and leaves portfolio
portfolio.addEventListener('mouseenter', () => {
    portfolio.scrollTo({ left: 0, behavior: 'smooth' });
});

portfolio.addEventListener('mouseleave', () => {
    portfolio.scrollTo({ left: 0, behavior: 'smooth' });
});

