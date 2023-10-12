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
	// document.addEventListener("DOMContentLoaded", function () {
	// 	(() => {
	// 		const cityElement = document.querySelectorAll(".visitor-city");
	// 		const KEY_GEO = 'GEO_KEY';
	//
	// 		const handleLocationSuccess = (position) => {
	// 			const latitude = position.coords.latitude;
	// 			const longitude = position.coords.longitude;
	// 			fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=d7fafb7e5aaa4f8db82d5df7a2299b7c&language=uk`)
	// 				.then(response => response.json())
	// 				.then(data => {
	// 					const city = data.results[0].components.city;
	// 					const jsonData = JSON.stringify(data);
	// 					localStorage.setItem(KEY_GEO, jsonData);
	// 					cityElement.forEach(item => {
	// 						item.textContent = city;
	// 					});
	// 				})
	// 				.catch(error => console.error(error));
	// 		};
	//
	// 		const handleLocationError = () => {
	// 			cityElement.forEach(item => {
	// 				item.textContent = "EROR";
	// 			});
	// 		};
	//
	// 		try {
	// 			const storedData = localStorage.getItem(KEY_GEO);
	// 			if (storedData) {
	// 				const data = JSON.parse(storedData);
	// 				const city = data.results[0].components.city;
	// 				cityElement.forEach(item => {
	// 					item.textContent = city;
	// 				});
	// 			} else {
	// 				if ("geolocation" in navigator) {
	// 					navigator.geolocation.getCurrentPosition(handleLocationSuccess, handleLocationError);
	// 				} else {
	// 					handleLocationError();
	// 				}
	// 			}
	// 		} catch (error) {
	// 			console.error(`Помилка при отриманні даних з сервера: ${error}`);
	// 		}
	// 	})();
	// });
	
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
})();