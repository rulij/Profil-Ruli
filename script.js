// Smooth Scrolling untuk Navigasi
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Lightbox untuk Album
function openLightbox(img) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  lightbox.style.display = 'flex';
  lightboxImg.src = img.src;
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

// Form Kontak dengan Validasi
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const messageEl = document.getElementById('formMessage');

  if (name && email && message) {
    messageEl.textContent = 'Pesan berhasil dikirim! Terima kasih.';
    messageEl.style.color = 'green';
    this.reset();
  } else {
    messageEl.textContent = 'Harap isi semua field.';
    messageEl.style.color = 'red';
  }
});

// Efek Hover untuk Logo Media Sosial (Opsional, untuk interaktivitas tambahan)
document.querySelectorAll('.social-media a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.transform = 'scale(1.1)';
  });
  link.addEventListener('mouseleave', () => {
    link.style.transform = 'scale(1)';
  });
});