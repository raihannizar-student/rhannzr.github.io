document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');

  const box = 20;
  let snake = [{ x: 10 * box, y: 10 * box }];
  let food = { x: Math.floor(Math.random() * 20) * box, y: Math.floor(Math.random() * 20) * box };
  let score = 0;
  let d = 'RIGHT';

  document.addEventListener('keydown', direction);

  function direction(event) {
    switch (event.key) {
      case 'ArrowLeft':
      case 'a':
        if (d !== 'RIGHT') d = 'LEFT';
        break;
      case 'ArrowUp':
      case 'w':
        if (d !== 'DOWN') d = 'UP';
        break;
      case 'ArrowRight':
      case 'd':
        if (d !== 'LEFT') d = 'RIGHT';
        break;
      case 'ArrowDown':
      case 's':
        if (d !== 'UP') d = 'DOWN';
        break;
    }
  }
  

  function collision(head, array) {
    return array.some(segment => head.x === segment.x && head.y === segment.y);
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
  
    if (d === 'LEFT') snakeX -= box;
    if (d === 'UP') snakeY -= box;
    if (d === 'RIGHT') snakeX += box;
    if (d === 'DOWN') snakeY += box;
  
    // Cek jika ular melewati batas kotak, jika ya, geser ke sisi yang berlawanan
    if (snakeX < 0) snakeX = canvas.width - box;
    if (snakeX >= canvas.width) snakeX = 0;
    if (snakeY < 0) snakeY = canvas.height - box;
    if (snakeY >= canvas.height) snakeY = 0;
  
    const newHead = { x: snakeX, y: snakeY };
  
    // Check collision with itself
    if (collision(newHead, snake)) {
      clearInterval(game);
      alert('Game Over! Your score: ' + score);
      window.location.reload();
    }
  
    snake.unshift(newHead);
  
    // Check collision with food
    if (snakeX === food.x && snakeY === food.y) {
      score++;
      food = { x: Math.floor(Math.random() * 20) * box, y: Math.floor(Math.random() * 20) * box };
    } else {
      snake.pop();
    }
  
    // Draw the snake
    snake.forEach(segment => {
      ctx.fillStyle = '#006837';
      ctx.fillRect(segment.x, segment.y, box, box);
      ctx.strokeStyle = '#fff';
      ctx.strokeRect(segment.x, segment.y, box, box);
    });
  
    // Draw the food
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(food.x, food.y, box, box);
  
    // Draw score
    ctx.fillStyle = '#000';
    ctx.font = '20px Arial';
    ctx.fillText('Score: ' + score, 10, 30);
  }
  

  const game = setInterval(draw, 100);
});
