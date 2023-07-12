import $ from 'jquery';

// Определение операционной системы на мобильных
import {mobileCheck} from "./functions/mobile-check";

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Реализация бургер-меню
import { burger } from './functions/burger';
import './functions/form-line';
import './functions/search';
import './functions/contact-toggle';

// Подключение свайпера
import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

const swiper = new Swiper('.js-slider', {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	lazy: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
		pauseOnMouseEnter: true,
	},
	breakpoints: {
		480: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
});

import { Fancybox } from "@fancyapps/ui";
Fancybox.bind("[data-fancybox]", );

// Подключение анимаций по скроллу
import AOS from 'aos';
AOS.init();
import Inputmask from "inputmask";
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask('.js-phone-mask');