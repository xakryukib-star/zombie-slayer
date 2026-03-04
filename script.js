document.addEventListener("DOMContentLoaded", () => {
    // 1. ページ読み込み時の「上から順にフェードイン」
    const headerElements = document.querySelectorAll('header .fade-in-text');
    let delay = 1000; // 動画を見せるために1秒待機

    headerElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('is-visible');
        }, delay + (index * 500)); // 0.5秒間隔で表示
    });

    // 2. スクロールに合わせて表示されるアニメーション
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    // main内の全フェードイン要素を監視
    document.querySelectorAll('main .fade-in-text').forEach(el => {
        observer.observe(el);
    });

    // --- 本編ページ（manga.html）用の処理 ---
    const episodeSelector = document.getElementById('episodeSelect');
    if (episodeSelector) {
        const episodes = document.querySelectorAll('.episode');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        let currentEpisode = 1;

        function showEpisode(num) {
            episodes.forEach(ep => ep.style.display = 'none');
            const target = document.getElementById(`episode${num}`);
            if (target) target.style.display = 'block';
            currentEpisode = num;
            if (prevBtn) prevBtn.disabled = (num === 1);
            if (nextBtn) nextBtn.disabled = (num === episodes.length);
        }

        episodeSelector.addEventListener('change', (e) => {
            const num = parseInt(e.target.value.replace('#episode', ''));
            showEpisode(num);
        });

        if (prevBtn) prevBtn.addEventListener('click', () => {
            if (currentEpisode > 1) {
                currentEpisode--;
                showEpisode(currentEpisode);
                episodeSelector.value = `#episode${currentEpisode}`;
            }
        });

        if (nextBtn) nextBtn.addEventListener('click', () => {
            if (currentEpisode < episodes.length) {
                currentEpisode++;
                showEpisode(currentEpisode);
                episodeSelector.value = `#episode${currentEpisode}`;
            }
        });

        showEpisode(1);
    }
});
