document.addEventListener("DOMContentLoaded", function() {
	const sections = document.querySelectorAll('.section');
	const line = document.querySelector('.line');

	// Az első szakasz azonnali megjelenítése
	if (sections.length > 0) {
		 sections[0].classList.add('show-me'); // Az első kártya megjelenik
	}

	const options = {
		 threshold: 0.1
	};

	const observer = new IntersectionObserver((entries, observer) => {
		 entries.forEach(entry => {
			  if (entry.isIntersecting) {
					entry.target.classList.add('show-me');
					observer.unobserve(entry.target); // Eltávolítjuk a megfigyelést
			  }
		 });
	}, options);

	// Az első szakaszt kihagyjuk, csak a többieket figyeljük
	sections.forEach((section, index) => {
		 if (index > 0) { // Az első szakasz már megjelent, nem figyeljük
			  observer.observe(section);
		 }
	});
});
