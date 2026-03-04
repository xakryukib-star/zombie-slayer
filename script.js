// スクロール時にエレメントをアニメーション表示
document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.char-item').forEach(el => observer.observe(el));
});
