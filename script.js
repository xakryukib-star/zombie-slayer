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

// 既存のコード...

// 本編ページのエピソード管理
document.addEventListener("DOMContentLoaded", function() {
    const episodeSelector = document.getElementById('episodeSelect');
    const episodes = document.querySelectorAll('.episode');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentEpisode = 1;

    // エピソードセレクターでの切り替え
    if (episodeSelector) {
        episodeSelector.addEventListener('change', function() {
            const episodeNum = parseInt(this.value.replace('#episode', ''));
            showEpisode(episodeNum);
        });
    }

    // 前へボタン
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            if (currentEpisode > 1) {
                currentEpisode--;
                showEpisode(currentEpisode);
                episodeSelector.value = `#episode${currentEpisode}`;
            }
        });
    }

    // 次へボタン
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            if (currentEpisode < episodes.length) {
                currentEpisode++;
                showEpisode(currentEpisode);
                episodeSelector.value = `#episode${currentEpisode}`;
            }
        });
    }

    // エピソード表示関数
    function showEpisode(num) {
        episodes.forEach(ep => ep.style.display = 'none');
        document.getElementById(`episode${num}`).style.display = 'block';
        
        currentEpisode = num;
        
        // ボタンの有効/無効切り替え
        if (prevBtn) prevBtn.disabled = (num === 1);
        if (nextBtn) nextBtn.disabled = (num === episodes.length);
        
        // ページトップへスクロール
        document.querySelector('.manga-content').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // 初期表示
    showEpisode(1);
});
