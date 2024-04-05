const loginBtn = document.querySelector('.login-btn');
const loginScreen = document.querySelector('.login');

loginBtn.addEventListener('click', () => {
	loginScreen.classList.toggle('login__show');
});