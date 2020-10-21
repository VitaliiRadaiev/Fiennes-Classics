{
	let menuTable = document.querySelector('.info-block__nav');
	if(menuTable) {
		document.querySelectorAll('.info-block__triggers').forEach((item) => {
			item.addEventListener('click', function(e) {
				e.preventDefault();
				const id = e.target.getAttribute('href').replace('#','');

				document.querySelectorAll('.info-block__triggers').forEach((child) => {
					child.classList.remove('active');
				});

				document.querySelectorAll('.info-block__tabs-content').forEach((child) => {
					child.classList.remove('active');
				});

				item.classList.add('active');
				document.getElementById(id).classList.add('active');
			});
		});
	}
}
