const canvas = document.getElementById("pong");
const ctx = canvas.getContext("2d");

// Variables pour la raquette et la balle
let paddleWidth = 10, paddleHeight = 100, ballRadius = 10;
let player = { x: 0, y: canvas.height / 2 - paddleHeight / 2, width: paddleWidth, height: paddleHeight, color: "#E6E4CE", dy: 0 };
let ai = { x: canvas.width - paddleWidth, y: canvas.height / 2 - paddleHeight / 2, width: paddleWidth, height: paddleHeight, color: "#5863F8", dy: 0 };
let ball = { x: canvas.width / 2, y: canvas.height / 2, dx: 5, dy: 5, radius: ballRadius, color: "#FFFFFF" };

// Fonction pour dessiner les éléments du jeu
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Efface l'écran

    // Dessiner la balle
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.closePath();

    // Dessiner les raquettes
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
    ctx.fillStyle = ai.color;
    ctx.fillRect(ai.x, ai.y, ai.width, ai.height);

    // Gérer la balle (mouvement et collisions)
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Collision avec les murs (haut et bas)
    if (ball.y + ball.dy < ball.radius || ball.y + ball.dy > canvas.height - ball.radius) {
        ball.dy = -ball.dy;
    }

    // Collision avec les raquettes
    if (ball.x + ball.dx < player.x + player.width && ball.y > player.y && ball.y < player.y + player.height) {
        ball.dx = -ball.dx;
    }
    if (ball.x + ball.dx > ai.x - ai.width && ball.y > ai.y && ball.y < ai.y + ai.height) {
        ball.dx = -ball.dx;
    }

    // Si la balle sort du canvas, on la réinitialise
    if (ball.x < 0 || ball.x > canvas.width) {
        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;
        ball.dx = -ball.dx;
    }
}

// Fonction de contrôle de la raquette du joueur
function movePaddle() {
    if (player.dy > 0 && player.y < canvas.height - player.height) {
        player.y += player.dy;
    } else if (player.dy < 0 && player.y > 0) {
        player.y += player.dy;
    }
}

// Fonction pour déplacer la raquette de l'IA (basée sur la balle)
function moveAI() {
    if (ball.dy < 0 && ai.y > 0) {
        ai.y -= 3;
    } else if (ball.dy > 0 && ai.y < canvas.height - ai.height) {
        ai.y += 3;
    }
}

// gestion des événements de clavier
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") player.dy = -5;
    if (event.key === "ArrowDown") player.dy = 5;
});
document.addEventListener("keyup", function (event) {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") player.dy = 0;
});

// Boucle de jeu (update et redraw)
function gameLoop() {
    draw();
    movePaddle();
    moveAI();
    requestAnimationFrame(gameLoop);
}

// Lancer la boucle du jeu
gameLoop();
