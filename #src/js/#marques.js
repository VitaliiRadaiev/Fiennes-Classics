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


	let tabs = document.querySelectorAll('.info-block__tabs-content');
	if(tabs.length>0) {

		tabs.forEach(contetn => {
			addColumns(contetn.querySelector('.info-block__tabs-text-wrap'));
		})


		function addColumns(block) {
			let arr = [...block.children];
			let num = Math.ceil(arr.length / 3);
			block.classList.add('block-columns-3');

			for(let i = 0; i < 3; i++) {
				let column = document.createElement('div');
				column.className = 'column';

				let innerArr = arr.slice(0, num + 1);

				if(arr.length > num) {
					arr = arr.slice(num);
				}

				if(innerArr.length) {
					innerArr.forEach(item => {
						column.append(item);
					})
				}

				block.append(column);
			}

		}
	}
}
