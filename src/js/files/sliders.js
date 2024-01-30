/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss"
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.swiper')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.swiper', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Pagination, Scrollbar],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			//autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			/*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// Події
			on: {

			}
		});
	}

	// Main benefits slider
	if (document.querySelector('.mainBenefits__slider')) { 
		new Swiper ('.mainBenefits__slider', {
			modules: [Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1.2,
			spaceBetween: 12,
			//autoHeight: true,
			speed: 800,
			// loop: true,
			grabCursor: true,

			pagination: {
				el: '.mainBenefits__pagination',
				clickable: true,
			},
			breakpoints: {
				767.98: {
					slidesPerView: 2.2,
					spaceBetween: 21,
				},
				1279.98: {
					slidesPerView: 2.2,
					spaceBetween: 31,
				},
				1439.98: {
					slidesPerView: 2.2,
					spaceBetween: 42,
				},
				1919.98: {
					slidesPerView: 2.2,
					spaceBetween: 58,
				},
			},
		});
	}

	// Main recent slider
	if (document.querySelector('.mainRecent__slider')) { 
		new Swiper ('.mainRecent__slider', {
			modules: [Scrollbar],
			observer: true,
			observeParents: true,
			slidesPerView: 2.2,
			spaceBetween: 26,
			autoHeight: true,
			speed: 800,

			scrollbar: {
				el: '.mainRecent__scrollbar',
				draggable: true,
			},
			breakpoints: {
				767.98: {
					slidesPerView: 4.2,
					spaceBetween: 36,
				},
				1279.98: {
					slidesPerView: 4.22,
					spaceBetween: 56,
				},
				1439.98: {
					slidesPerView: 4.2,
					spaceBetween: 63,
				},
				1919.98: {
					slidesPerView: 5.2,
					spaceBetween: 63,
				},
			},
		});
	}

		// Main recent slider
		if (document.querySelector('.profileLinks__slider')) { 
			new Swiper ('.profileLinks__slider', {
				modules: [Scrollbar],
				observer: true,
				observeParents: true,
				slidesPerView: 'auto',
				spaceBetween: 30,
				speed: 800,
				// scrollbar: {
				// 	el: '.profileLinks__scrollbar',
				// 	draggable: true,
				// }
			});
		}
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});