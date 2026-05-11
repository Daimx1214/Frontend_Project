const canvas = document.getElementById('pongCanvas');
const ctx = canvas.getContext('2d');

const WIDTH = canvas.width;
const HEIGHT = canvas.height;

const PADDLE_WIDTH = 12;
const PADDLE_HEIGHT = 90;
const BALL_RADIUS = 10;

const PADDLE_MARGIN = 16;
const PLAYER_COLOR = '#3afc7e';
const AI_COLOR = '#fa5';
const BALL_COLOR = '#fb0b0bff';

let leftPaddle = {
    x: PADDLE_MARGIN,
    y: HEIGHT / 2 - PADDLE_HEIGHT / 2,
    width: PADDLE_WIDTH,
    height: PADDLE_HEIGHT,
    speed: 0
};

let rightPaddle = {
    x: WIDTH - PADDLE_MARGIN - PADDLE_WIDTH,
    y: HEIGHT / 2 - PADDLE_HEIGHT / 2,
    width: PADDLE_WIDTH,
    height: PADDLE_HEIGHT,
    speed: 4
};

let ball = {
    x: WIDTH / 2,
    y: HEIGHT / 2,
    vx: Math.random() > 0.5 ? 5 : -5,
    vy: (Math.random() - 0.5) * 6,
    radius: BALL_RADIUS
};

let scores = { left: 0, right: 0 };

function resetBall(direction = 1) {
    ball.x = WIDTH / 2;
    ball.y = HEIGHT / 2;
    ball.vx = direction * (4 + Math.random() * 2);
    ball.vy = (Math.random() - 0.5) * 6;
}

function drawRect(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

function drawCircle(x, y, r, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
}

function drawNet() {
    ctx.strokeStyle = "#444";
    ctx.setLineDash([10, 16]);
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(WIDTH / 2, 0);
    ctx.lineTo(WIDTH / 2, HEIGHT);
    ctx.stroke();
    ctx.setLineDash([]);
}

function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    drawNet();

    // Draw paddles
    drawRect(leftPaddle.x, leftPaddle.y, leftPaddle.width, leftPaddle.height, PLAYER_COLOR);
    drawRect(rightPaddle.x, rightPaddle.y, rightPaddle.width, rightPaddle.height, AI_COLOR);

    // Draw ball
    drawCircle(ball.x, ball.y, ball.radius, BALL_COLOR);
}

function clamp(val, min, max) {
    return Math.max(min, Math.min(max, val));
}

// Mouse movement for player paddle
canvas.addEventListener('mousemove', function (e) {
    const rect = canvas.getBoundingClientRect();
    let mouseY = e.clientY - rect.top;
    leftPaddle.y = clamp(mouseY - leftPaddle.height / 2, 0, HEIGHT - leftPaddle.height);
});

function aiMove() {
    // Simple AI: move paddle center towards ball.y, with some max speed
    let target = ball.y - rightPaddle.height / 2;
    let diff = target - rightPaddle.y;
    rightPaddle.y += clamp(diff, -rightPaddle.speed, rightPaddle.speed);
    rightPaddle.y = clamp(rightPaddle.y, 0, HEIGHT - rightPaddle.height);
}

function checkCollision(paddle) {
    let px = paddle.x;
    let py = paddle.y;
    let pw = paddle.width;
    let ph = paddle.height;

    // Closest point on paddle to ball center
    let closestX = clamp(ball.x, px, px + pw);
    let closestY = clamp(ball.y, py, py + ph);

    // Distance to closest point
    let dx = ball.x - closestX;
    let dy = ball.y - closestY;

    return (dx * dx + dy * dy) < (ball.radius * ball.radius);
}

function updateBall() {
    ball.x += ball.vx;
    ball.y += ball.vy;

    // Top/bottom collision
    if (ball.y - ball.radius < 0) {
        ball.y = ball.radius;
        ball.vy *= -1;
    }
    if (ball.y + ball.radius > HEIGHT) {
        ball.y = HEIGHT - ball.radius;
        ball.vy *= -1;
    }

    // Paddle collisions
    if (ball.vx < 0 && checkCollision(leftPaddle)) {
        ball.x = leftPaddle.x + leftPaddle.width + ball.radius;
        ball.vx *= -1;
        // Add some spin based on where the ball hit the paddle
        let hitPos = (ball.y - (leftPaddle.y + leftPaddle.height / 2)) / (leftPaddle.height / 2);
        ball.vy += hitPos * 4;
    } else if (ball.vx > 0 && checkCollision(rightPaddle)) {
        ball.x = rightPaddle.x - ball.radius;
        ball.vx *= -1;
        let hitPos = (ball.y - (rightPaddle.y + rightPaddle.height / 2)) / (rightPaddle.height / 2);
        ball.vy += hitPos * 4;
    }

    // Left/right boundaries (score)
    if (ball.x < 0) {
        scores.right += 1;
        updateScore();
        resetBall(1);
    } else if (ball.x > WIDTH) {
        scores.left += 1;
        updateScore();
        resetBall(-1);
    }
}

function updateScore() {
    document.getElementById('leftScore').textContent = scores.left;
    document.getElementById('rightScore').textContent = scores.right;
}

function gameLoop() {
    aiMove();
    updateBall();
    draw();
    requestAnimationFrame(gameLoop);
}

// Start game
updateScore();
draw();
requestAnimationFrame(gameLoop);