"use strict";
(function () {
	const burger = document.querySelector('.burger');
	burger.addEventListener('click', () => {
		const header = document.querySelector('.header')
		header.classList.toggle('active');
		if ( !header.classList.contains('.active')) {
			document.querySelector('body').classList.toggle('lock');
		}
	});
	document.addEventListener("DOMContentLoaded", function () {
		const cityElement = document.querySelectorAll(".visitor-city");
		// Виконуємо запит до API ipapi.co за допомогою Fetch
		fetch("https://ipapi.co/json/")
			.then(function (response) {
				if ( !response.ok) {
					throw new Error("Помилка під час запиту до API ipinfo.io");
				}
				return response.json();
			})
			.then(function (data) {
				// Вилучаємо інформацію про місто
				
				const city = data.city;
				// Вставляємо місто в HTML
				cityElement.forEach(item => {
					item.textContent = city;
				});
			})
			.catch(function (error) {
				console.error(error);
				cityElement.forEach(item => {
					item.textContent = "EROR";
				});
			});
	});
	const swiper = new Swiper(".mySwiper1", {
		slidesPerView: 1,
		centeredSlidesBounds: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			640: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 3,
			},
		},
	});
	const swiper2 = new Swiper(".mySwiper2", {
		slidesPerView: 2,
		centeredSlidesBounds: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			640: {
				slidesPerView: 3,
			},
			840: {
				slidesPerView: 4,
			},
			1050: {
				slidesPerView: 5,
			},
			1235: {
				slidesPerView: 6,
			},
		},
	});
	
	const list = document.querySelector('.service-packages-list');
	list.addEventListener('click', e => {
		if ( !e.target.classList.contains('text-wrap')) return
		const item = e.target.closest('.service-packages-list-item').classList.toggle('active');
		console.log(item);
	});
	
	// function priceAreaM2 (currentArea, currentPrice) {
	// 	return (currentPrice / currentArea);
	// }
	//
	// function discountAreaM2 (priceAreaM2Default, currentArea) {
	// 	return ((priceAreaM2Default / currentArea) - 1) * 100;
	// }
	//
	// function priceM2 (startM2, currentM2, priceDefault, step) {
	// 	return priceDefault + (step * (currentM2 - startM2));
	// }
	//
	// console.log(priceM2(25, 35, 1000, 30), 'zalupa')
	// const priceOfOneArea = priceAreaM2(33, 1240);
	// const discountOfOneArea = discountAreaM2(priceOfOneArea, 40);
	// console.log(priceOfOneArea, discountOfOneArea);
	//
	// function cleaningDefault (priceAreaM2, variousServicesSum, dryCleaning, numberCleaners = 0, salaryAdditionalCleaner = 800) {
	// 	return (priceAreaM2 + variousServicesSum + dryCleaning + (salaryAdditionalCleaner * numberCleaners));
	// }
	//
	// function priceAreaM2OBJ (currentArea, currentPrice, shag) {
	// 	const obj = {};
	// 	for (let i = currentArea; i < 45; i++) {
	// 		obj[i] = ((currentPrice += shag) / i);
	// 	}
	// 	return obj;
	// }
	//
	// function discountAreaM2OBJ (priceAreaM2) {
	// 	const obj = {};
	// 	for (const priceAreaM2Element in priceAreaM2) {
	// 		obj[priceAreaM2Element] = ((Number(priceAreaM2[priceAreaM2Element]) / Math.round(Number(priceAreaM2[25]))) - 1) * 100;
	//
	// 	}
	// 	return obj;
	// }
	
	// const priceOfOneAreaObj = priceAreaM2OBJ(25, 970, 30);
	// const discountOfOneAreaObj = discountAreaM2OBJ(priceOfOneArea);
	// console.log(priceOfOneAreaObj, discountOfOneAreaObj,'1111111111111111111111111111');
})();