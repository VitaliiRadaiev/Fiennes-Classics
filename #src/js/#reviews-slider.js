// ==  slider ==========================================================================
{
	let slider = document.querySelectorAll('.reviews-slider');
	if(slider.length>0) {
		slider.forEach(item => {
			var mySwiper = new Swiper(item.querySelector('.swiper-container'), {
			slidesPerView:1,
			autoHeight: true,
			loop: true,
			speed: 600,
			spaceBetween: 15,
			pagination: {
			    el: item.querySelector('.swiper-pagination'),
			    clickable: true,
			  },
			})
		})
	}
}
// == and  slider ==========================================================================
