document.getElementById('year').textContent = new Date().getFullYear();

// Бургер меню
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
});
document.querySelectorAll('.menu-close').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('open');
        mobileMenu.classList.remove('open');
    });
});

// FAQ акордеон
function toggleFaq(el) {
    const item = el.parentElement;
    item.classList.toggle('open');
}

// Форма
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // TODO: підключити Telegram бот
    // const BOT_TOKEN = 'ВАШ_ТОКЕН';
    // const CHAT_ID = 'ВАШ_CHAT_ID';
    this.style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
});
