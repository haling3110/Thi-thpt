// 1. Chế độ Tối / Sáng (Dark Mode)
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '☀️ Chế độ sáng';
    } else {
        themeToggleBtn.textContent = '🌙 Chế độ tối';
    }
});

// 2. Đồng hồ Pomodoro (20 phút)
let timeLeft = 20 * 60;
let timerId = null;

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (timerId !== null) return;
    document.getElementById('pomo-status').textContent = "🔥 Đang trong thời gian tập trung!";
    timerId = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
        } else {
            clearInterval(timerId);
            timerId = null;
            document.getElementById('pomo-status').textContent = "🎉 Hết 20 phút! Hãy nghỉ ngơi 5 phút thôi!";
            alert("Đã hết 20 phút học tập! Nghỉ ngơi chút nhé bạn!");
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerId);
    timerId = null;
    document.getElementById('pomo-status').textContent = "⏸️ Đã tạm dừng.";
}

function resetTimer() {
    pauseTimer();
    timeLeft = 20 * 60;
    updateTimerDisplay();
    document.getElementById('pomo-status').textContent = "Sẵn sàng để bứt phá kiến thức!";
}