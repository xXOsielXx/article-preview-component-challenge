const shareBtn = document.querySelectorAll(".share-btn");

shareBtn.forEach(e => {
	e.addEventListener("click", () => {
		const userInfo = e.parentElement;
		const shareContainer = userInfo.querySelector(".share-container");
		const svg = e.querySelector("svg path");
		if (!shareContainer.classList.contains("share-container-show")) {
			shareContainer.classList.add("share-container-show", "share-container-top");
			e.style.backgroundColor = "var(--desaturated-dark-blue)";
			svg.style.fill = "#fff";
		}
		else {
			shareContainer.classList.remove("share-container-show", "share-container-top");
			e.style.backgroundColor = "var(--grayish-blue)";
			svg.style.fill = "#6E8098";
		}
	})
})