$(function(){
	//кликаем по кнопке, запускаме функцию
	$('.btn').click(function(){
		//по клику анимируем сворачивание и разворачивание меню, путем добавления аттрибута и изменения свойства display
		$('nav ul').slideToggle(500);
	});
	//при сворачивании меню оно получает атрибут display:none и меню не видно если ширина экрана браузера больше ширины медиа запроса
	//запускаем функцию обработчик события изменения ширины окна браузера
	$(window).resize(function() {	
	//если ширина окна больше ук размера	
		if (  $(window).width() > 750 ) {
		//удаляем атрибут стиля	у блока, который был присвоен методом		slideToggle()
			$('nav ul').removeAttr('style');
		}
	});//end resize
});