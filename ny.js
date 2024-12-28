const fireworksCanvas = document.getElementById('fireworks');
const ctx = fireworksCanvas.getContext('2d');

function resizeCanvas() {
    fireworksCanvas.width = window.innerWidth;
    fireworksCanvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function drawFireworks() {
    ctx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
    for (let i = 0; i < 100; i++) {
        const x = Math.random() * fireworksCanvas.width;
        const y = Math.random() * fireworksCanvas.height;
        const size = Math.random() * 3;
        const color = `hsl(${Math.random() * 360}, 100%, 50%)`;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
    }
}

setInterval(drawFireworks, 300);

function startApp() {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('name-page').style.display = 'block';
}

function submitName() {
    const name = document.getElementById('name-input').value.trim();
    let message;

    if (name === 'Lestary Novayanti Gultom') {
        message = 'This message is from Blue.\nHappy New Year for you Yellow. Wish you the besy this year.\n Still Hoping To Make Green.';
    } else if (name === 'Felix Tinus Husada Siahaan') {
        message = 'Halo Ganteng yang buat website ini. Padahal gampangan ngechat orang lewat WA lu ngapa pake website.';
    } else if (name === 'Masta Mawalanda Siahaan') {
        message = 'Selamat Tahun Baru Kakakku yang paling cantik, Makasih ya tahun ini udah jadi orang yang paling aku butuhin.\n Maaf kalo aku sering buat salah samamu ya.'
    } else if (name === 'Reck Kameroun Hutagalung'){
        message = 'Selamat Tahun baru cok. Mungkin kita ga sedekat dulu lagi, aku minta maaf lah kalo ada salah ke kau. \nSisanya semoga aku bisa susul kau ya diatas. \nSemoga aja kita jadi orang sukses';
    } else {
        message = 'Happy New Year for you.\nWish you the best this year.';
    }

    document.getElementById('message').innerText = message;
    document.getElementById('name-page').style.display = 'none';
    document.getElementById('message-page').style.display = 'block';
}


function handleKeyPress(event) {
    if (event.key === 'Enter') {
        submitName();
    }
}