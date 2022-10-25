let show = true;

		const menuSection = document.querySelector(".menu-section")
		const hamburguer = document.querySelector(".material-icons")
		const xis = document.querySelector(".material-icons")

		hamburguer.addEventListener("click", () => {
			menuSection.classList.toggle("on", show)
			if(show){
				xis.textContent = "close"
			}

			else{
				xis.textContent = "menu";
			}

			show = !show;
		})