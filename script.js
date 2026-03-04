// フェードイン（スクロールで順次表示）
document.addEventListener("DOMContentLoaded", function() {
  const observer = new window.IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting)
        entry.target.classList.add("is-visible");
    });
  }, { threshold: 0.09 });

  document.querySelectorAll('.fade-in-text').forEach(el => observer.observe(el));
});

// PV風タイトル 1文字ずつアニメ＋グリッチ
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.pv-title').forEach($title => {
    // テキスト→1文字ずつspan化
    const chars = $title.dataset.text.split('');
    $title.innerHTML = chars.map((c, i) => {
      const glitch = Math.random() < 0.18 ? ' glitch' : '';
      return `<span class="char${glitch}" style="animation-delay:${i*0.05}s">${c}</span>`;
    }).join('');
  });

  // 入力枠ホバー＆フォーカス時の光エフェクト
  document.querySelectorAll('.fancy-input-wrap').forEach(wrap => {
    const input = wrap.querySelector('input');
    input.addEventListener('focus', () => wrap.classList.add('focused'));
    input.addEventListener('blur', () => wrap.classList.remove('focused'));
  });
});
