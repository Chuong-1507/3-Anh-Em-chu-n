function showDetail(value) {
    alert("Bạn đã chọn coupon " + value);
}

const targetDate = new Date("December 31, 2026 23:59:59").getTime();

const updateTimer = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    
    document.getElementById("days").innerText = days; 
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

    
    if (distance < 0) {
        clearInterval(updateTimer);
        document.getElementById("countdown-timer").innerHTML = "<b style='color:red'>CHƯƠNG TRÌNH ĐÃ KẾT THÚC</b>";
    }
}, 1000);

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('wheel');
    // Kiểm tra xem trang hiện tại có vòng quay không
    if (!canvas) return; 

    const ctx = canvas.getContext('2d');
    const btn = document.getElementById('spin-btn');

    const prizes = ["50k", "100k", "200k", "Mất lượt", "10k", "50k", "Thêm lượt", "100k"];
    const colors = ["#ff9f43", "#ee5253", "#10ac84", "#576574", "#2e86de", "#ff9f43", "#f368e0", "#ee5253"];

    let startAngle = 0;
    const arc = Math.PI / (prizes.length / 2);

    // Hàm vẽ vòng quay
    function drawWheel() {
        prizes.forEach((prize, i) => {
            const angle = startAngle + i * arc;
            ctx.fillStyle = colors[i];
            ctx.beginPath();
            ctx.moveTo(175, 175); 
            ctx.arc(175, 175, 175, angle, angle + arc, false);
            ctx.lineTo(175, 175);
            ctx.fill();

            // Vẽ chữ
            ctx.save();
            ctx.fillStyle = "white";
            ctx.font = "bold 16px Arial";
            ctx.translate(175 + Math.cos(angle + arc / 2) * 110, 175 + Math.sin(angle + arc / 2) * 110);
            ctx.rotate(angle + arc / 2 + Math.PI / 2);
            ctx.fillText(prize, -ctx.measureText(prize).width / 2, 0);
            ctx.restore();
        });
    }

    drawWheel();

    // Logic xoay vòng quay
    btn.addEventListener('click', () => {
        const extraDegree = Math.floor(Math.random() * 360) + 3600; // Quay ít nhất 10 vòng
        const totalDuration = 4000; // 4 giây

        canvas.style.transition = `transform ${totalDuration}ms cubic-bezier(0.1, 0, 0, 1)`;
        canvas.style.transform = `rotate(${extraDegree}deg)`;

        btn.disabled = true;

        setTimeout(() => {
            btn.disabled = false;
            alert("Chúc mừng! Bạn đã quay trúng phần quà từ 3 Anh Em!");
            // Reset lại góc để có thể quay tiếp mượt mà
            canvas.style.transition = "none";
            canvas.style.transform = `rotate(${extraDegree % 360}deg)`;
        }, totalDuration);
    });
});