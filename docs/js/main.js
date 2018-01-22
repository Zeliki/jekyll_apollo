$(document).ready(function(){

	// Скрипт для показа и скрытия выпадающего меню на смартфонах
	// Создаем переменые для кнопки и для меню
	var pull = $('#navigation-toggle');
	var menu = $('#mobile-nav');

	// Описываем событие при нажатии на кнопку
	$(pull).on("click", function(e){

	    // Отменяем стандартное поведение ссылки в браузере
	    e.preventDefault();

	    // Открываем/Скрываем меню
	    menu.slideToggle();

	    // Добавляем модификатор --active
	    $(this).toggleClass('navigation__toggle-button--active');
	    
	});

	// При изменении размера окна, в большую сторону, если меню было скрыто, показываем его
	// И у кнопки убираем модификатор --active
	$(window).resize(function(){
	    var w = $(window).width();
	    if(w > 992) {
	        menu.removeAttr('style');
	        pull.removeClass('navigation__toggle-button--active');
	    } else {

	    }
	});

	// Скрываем меню при клике на него на смартфоне и планшете
	// По клику на ссылку в меню запускаем ф-ю fnstart();
	$('#mobile-nav').on("click", function(){
		fnstart();
	});

	// В ф-ии fnstart(); проверяем - если меню открыто (проверяем по наличию класса --active у кнопки pull)
	// тогда убираем класс модификатор --active у кнопки pull
	// и сворачиваем/скрываем меню 
	function fnstart(){	
		if ( $("#navigation-toggle").hasClass("navigation__toggle-button--active")  ) {
   			pull.toggleClass('navigation__toggle-button--active');
			menu.slideToggle();
		}
	};

	// Скрипт плавного перехода к нужному блоку
	$('#mobile-nav').on("click","a", function(e){
		// Отменяем стандартное поведение ссылки в браузере
	    e.preventDefault();

	    // Забираем идентификатор блока с атрибута href
		var id = $(this).attr('href'),

		// Узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;

		// Анимируем переход на расстояние - top за 1000 мс
		$('body,html').animate({scrollTop: top}, 1000);
		});

	// Вызов слайдера owl-carousel
	$("#top-slider").owlCarousel({
		singleItem: true,
		navigation: true,
		theme: "top-slider-theme",
		navigationText : ["",""],
		slideSpeed: 600
	});	
});

	// Скрываем меню по клику в области экрана
	$(document).click(function(event){	   
		if ($(event.target).closest("#navigation-toggle").length) 
			return;
		$("#mobile-nav").slideUp("slow");
		event.stopPropagation();	 
});