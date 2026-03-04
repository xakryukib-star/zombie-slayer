document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.fade-in-text');
    
    // 最初の要素が表示されるまでの待ち時間（1.5秒）
    const startDelay = 1500; 

    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('is-visible');
        }, startDelay + (index * 600)); // 各要素が0.6秒間隔で上から順番に表示
    });
});