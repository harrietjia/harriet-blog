$(function(){
	
	//导航栏
	$('#mytab a').click(function(e){
		e.preventDefault();
		$(this).tab('show');
	});
	
	//轮播滚动
	 $( '#my-slider' ).sliderPro({
	 	width: 700,
        height: 450,
        orientation: 'horizontal',
        loop: false,
        arrows: true,
        buttons: false,
        thumbnailsPosition: 'right',
        thumbnailPointer: true,
        thumbnailWidth: 250,
        thumbnailHeight:150,
        breakpoints: {
            800: {
                thumbnailsPosition: 'right',
                thumbnailWidth: 200,
                thumbnailHeight: 100
            },
            500: {
                thumbnailsPosition: 'bottom',
                thumbnailWidth: 100,
                thumbnailHeight: 50,
            }
        }
	 });
	 
	 //回到顶部
	 $.scrollUp({
	 	scrollName: 'scrollUp', // Element ID
                topDistance: '300', // Distance from top before showing element (px)
                topSpeed: 300, // Speed back to top (ms)
                animation: 'fade', // Fade, slide, none
                animationInSpeed: 200, // Animation in speed (ms)
                animationOutSpeed: 200, // Animation out speed (ms)
                scrollText: '', // Text for element
                activeOverlay: false, 
	 });
	 
	 //滚动监听
	$('body').scrollspy({target: '.navbar-example'});
	$('.scrollnav').onePageNav();

});
