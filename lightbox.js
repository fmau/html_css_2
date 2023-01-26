
let bildContainer = document.querySelector("#bild-container");
let lightbox = document.querySelector("#lightbox");

bildContainer.addEventListener("click", function(evt) {
	let bildWrapper = evt.target.closest(".bild-wrapper");
	if (bildWrapper) {
		let bild = bildWrapper.querySelector("img");
		if (bild) {
			lightbox.innerHTML = `<div class="schliessen">X</div> ${bild.outerHTML}`;
			lightbox.classList.add("zeigen");
		}
	}
});

lightbox.addEventListener("click", function(evt) {
	if (!evt.target.hasAttribute("src")) {
		lightbox.classList.remove("zeigen");
	}
});


