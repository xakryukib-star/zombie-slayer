document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById('trialModal');
    const trialBtn = document.getElementById('trialBtn');
    const closeBtn = document.getElementById('closeBtn');
    const closeBtnFooter = document.getElementById('closeBtnFooter');

    // 試し読みボタンをクリック
    trialBtn.addEventListener('click', function() {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    });

    // モーダルを閉じる（×ボタン）
    closeBtn.addEventListener('click', function() {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });

    // モーダルを閉じる（閉じるボタン）
    closeBtnFooter.addEventListener('click', function() {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });

    // モーダル外をクリックしても閉じる
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });

    // タッチデバイスでのホバー対応
    const asciiBox = document.querySelector('.ascii-box');
    const asciiInput = document.querySelector('.ascii-input');

    if (asciiInput) {
        asciiInput.addEventListener('focus', function() {
            asciiBox.style.filter = 'drop-shadow(0 0 12px #fff) drop-shadow(0 0 24px #ff22c0) drop-shadow(0 0 36px #03fbd5)';
        });

        asciiInput.addEventListener('blur', function() {
            asciiBox.style.filter = 'none';
        });
    }

    // スクロールアニメーション
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.char-item').forEach(el => observer.observe(el));
});
