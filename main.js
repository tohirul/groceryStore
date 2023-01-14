const elements = document.querySelectorAll("section");
const overlay = document.querySelector(".overlay");
const navbar = document.querySelector(".navbar");
const searchForm = document.querySelector(".search-form");
const shoppingCart = document.querySelector(".shopping-cart");
const form = document.querySelector(".user-form");

const menuBtn = document.getElementById("menu-btn");
const searchBtn = document.getElementById("search-btn");
const cartBtn = document.getElementById("cart-btn");
const userBtn = document.getElementById("user-btn");

elements.forEach(
	(el) =>
		(el.onclick = () => {
			shoppingCart.classList.remove("active");
			form.classList.remove("active");
			searchForm.classList.remove("active");
			navbar.classList.remove("active");
		})
);
window.onscroll = () => {
	shoppingCart.classList.remove("active");
	form.classList.remove("active");
	searchForm.classList.remove("active");
	navbar.classList.remove("active");
};
overlay.addEventListener("click", () => {
	shoppingCart.classList.remove("active");
	form.classList.remove("active");
	searchForm.classList.remove("active");
	navbar.classList.remove("active");
	overlay.classList.remove("active");
});
menuBtn.onclick = () => {
	shoppingCart.classList.remove("active");
	form.classList.remove("active");
	searchForm.classList.remove("active");
	navbar.classList.toggle("active");
	overlay.classList.toggle("active");
};
searchBtn.onclick = () => {
	navbar.classList.remove("active");
	shoppingCart.classList.remove("active");
	form.classList.remove("active");
	searchForm.classList.toggle("active");
	overlay.classList.remove("active");
};
cartBtn.onclick = () => {
	navbar.classList.remove("active");
	searchForm.classList.remove("active");
	form.classList.remove("active");
	shoppingCart.classList.toggle("active");
	overlay.classList.remove("active");
};
userBtn.onclick = () => {
	navbar.classList.remove("active");
	searchForm.classList.remove("active");
	shoppingCart.classList.remove("active");
	form.classList.toggle("active");
	overlay.classList.remove("active");
};
// @ts-ignore
const swiper = new Swiper(".product-slider", {
	loop: true,
	spaceBetween: 10,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	centeredSlides: true,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	},
});
