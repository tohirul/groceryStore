const home = document.getElementById("home");
const navbar = document.querySelector(".navbar");
const searchForm = document.querySelector(".search-form");
const shoppingCart = document.querySelector(".shopping-cart");
const form = document.querySelector(".user-form");

const menuBtn = document.getElementById("menu-btn");
const searchBtn = document.getElementById("search-btn");
const cartBtn = document.getElementById("cart-btn");
const userBtn = document.getElementById("user-btn");

home.onclick = () => {
	shoppingCart.classList.remove("active");
	form.classList.remove("active");
	searchForm.classList.remove("active");
	navbar.classList.remove("active");
};
window.onscroll = () => {
	shoppingCart.classList.remove("active");
	form.classList.remove("active");
	searchForm.classList.remove("active");
	navbar.classList.remove("active");
};

menuBtn.onclick = () => {
	shoppingCart.classList.remove("active");
	form.classList.remove("active");
	searchForm.classList.remove("active");
	navbar.classList.toggle("active");
};
searchBtn.onclick = () => {
	navbar.classList.remove("active");
	shoppingCart.classList.remove("active");
	form.classList.remove("active");
	searchForm.classList.toggle("active");
};
cartBtn.onclick = () => {
	navbar.classList.remove("active");
	searchForm.classList.remove("active");
	form.classList.remove("active");
	shoppingCart.classList.toggle("active");
};
userBtn.onclick = () => {
	navbar.classList.remove("active");
	searchForm.classList.remove("active");
	shoppingCart.classList.remove("active");
	form.classList.toggle("active");
};
