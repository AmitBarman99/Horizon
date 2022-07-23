
// ************************* Developed by Amit Barman **************************

// preloader
$(document).ready(function() {
preloaderFadeOutTime = 3000;
function hidePreloader() {
var preloader = $('.preloader');
preloader.fadeOut(preloaderFadeOutTime);
}
hidePreloader();
});





let $slides, interval, $selectors, $btns, currentIndex, nextIndex;

let cycle = index => {
	let $currentSlide, $nextSlide, $currentSelector, $nextSelector;

	nextIndex = index !== undefined ? index : nextIndex;

	$currentSlide = $($slides.get(currentIndex));
	$currentSelector = $($selectors.get(currentIndex));

	$nextSlide = $($slides.get(nextIndex));
	$nextSelector = $($selectors.get(nextIndex));

	$currentSlide.removeClass("active").css("z-index", "0");

	$nextSlide.addClass("active").css("z-index", "1");

	$currentSelector.removeClass("current");
	$nextSelector.addClass("current");

	currentIndex = index !== undefined
		? nextIndex
		: currentIndex < $slides.length - 1 
			? currentIndex + 1 
			: 0;
	
	nextIndex = currentIndex + 1 < $slides.length ? currentIndex + 1 : 0;
};

$(() => {
	currentIndex = 0;
	nextIndex = 1;

	$slides = $(".slide");
	$selectors = $(".selector");
	$btns = $(".btn");

	$slides.first().addClass("active");
	$selectors.first().addClass("current");

	interval = window.setInterval(cycle, 6000);

	$selectors.on("click", e => {
		let target = $selectors.index(e.target);
		if (target !== currentIndex) {
			window.clearInterval(interval);
			cycle(target);
			interval = window.setInterval(cycle, 6000);
		}
	});

	$btns.on("click", e => {
		window.clearInterval(interval);
		if ($(e.target).hasClass("prev")) {
			let target = currentIndex > 0 ? currentIndex - 1 : $slides.length - 1;
			cycle(target);
		} else if ($(e.target).hasClass("next")) {
			cycle();
		}
		interval = window.setInterval(cycle, 6000);
	});
});


// home and navigation bar section js 
function disable(){
	$('#fir-home').css('display','none');
	$('#sec-home').css('display','none');
	$('#trd-home').css('display','none');
	$('#fth-home').css('display','none');
	$('#fifth-home').css('display','none');
	$('#six-home').css('display','none');

}

$('#pri').on('click',function(){
	disable();
	$('#fir-home').css('display','flex');
})
$('#sec').on('click',function(){
	disable();
	$('#sec-home').css('display','flex');
})
$('#tri').on('click',function(){
	disable();
	$('#trd-home').css('display','flex');
})
$('#quad').on('click',function(){
	disable();
	$('#fth-home').css('display','flex');
})
$('#qint').on('click',function(){
	disable();
	$('#fifth-home').css('display','flex');
})
$('#hex').on('click',function(){
	disable();
	$('#six-home').css('display','flex');
})


$('#nav-icon').on('click',function(){
	if($('#nav-ul').css('visibility')==='hidden'){
		$('#nav-ul').css({
			visibility:'visible',
			height:'486px',
			overflow:'hidden'
			
		},"slow");
	}
	else{
		$('#nav-ul').css({
			visibility:'hidden',
			height:'0px'
		},"slow");
	}
})
// This file is Under-development