// 1文字ずつタイトルアニメーション＋一部ランダムグリッチ
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.pv-title').forEach($title => {
    // テキストを1文字ずつspan(隠し+delay)に置換
    const chars = $title.dataset.text.split('');
    $title.innerHTML = chars.map((c, i) => {
      const glitch = Math.random() < 0.21 ? ' glitch' : '';
      return `<span class="char${glitch}" style="animation-delay:${i*0.05}s">${c}</span>`;
    }).join('');
  });

  // 入力枠フォーカス時のエフェクト
  document.querySelectorAll('.fancy-input-wrap').forEach(wrap => {
    const input = wrap.querySelector('input');
    input.addEventListener('focus', () => wrap.classList.add('focused'));
    input.addEventListener('blur', () => wrap.classList.remove('focused'));
  });
});