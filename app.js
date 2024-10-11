let damage = 0;
let enemyHealth = 100;

const damageDisplay = document.getElementById('damage');
const healthBar = document.getElementById('health-bar');
const attackButton = document.getElementById('attack-button');
const gameStatus = document.getElementById('game-status');

// Функция для атаки
attackButton.addEventListener('click', () => {
    damage += Math.floor(Math.random() * 10) + 1;  // Добавляем случайный урон
    enemyHealth -= Math.floor(Math.random() * 5) + 1;  // Снижаем здоровье врага

    if (enemyHealth <= 0) {
        gameStatus.textContent = "Вы победили!";
        enemyHealth = 0;
        attackButton.disabled = true;
    }

    updateDisplay();
});

// Обновляем отображение на экране
function updateDisplay() {
    damageDisplay.textContent = `Урон: ${damage}`;
    healthBar.style.width = `${enemyHealth * 3}px`; // Ширина бара здоровья
}