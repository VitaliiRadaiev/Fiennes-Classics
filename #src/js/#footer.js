{
	let footerMenu = document.querySelectorAll('.footer__nav-title');
	if(footerMenu.length) {

        footerMenu.forEach(item => {
            let link = item.querySelector('a');

            link.addEventListener('click', function(e) {
				if(document.documentElement.clientWidth < 575) {
                    console.log(this.parentElement.nextElementSibling);
         
					if(this.parentElement.nextElementSibling) { 
                        if(this.getAttribute('href').length < 5) {
                            e.preventDefault();
							this.parentElement.classList.toggle('_active');
							_slideToggle(this.parentElement.nextElementSibling); 
                        } else {
                            if(!this.parentElement.classList.contains('_active')) {

                                e.preventDefault();
                                this.parentElement.classList.toggle('_active');
                                _slideToggle(this.parentElement.nextElementSibling); 
                            }
                        }

						
					}

                    footerMenu.forEach(i => {
                         let link = i.querySelector('a');
                        if( link == this) {
							return;
                        }
                        if(link.parentElement.nextElementSibling) {
							link.parentElement.classList.remove('_active');
							_slideUp(link.parentElement.nextElementSibling); 
						}
                    })

				}
			})
        })

	}
}
