"use strict";
	Array.from(document.querySelectorAll("div.make div")).forEach(function(el) {
		el.style.background = el.textContent;
		el.addEventListener("click", function() {
			//add new tab
			var url = `NewWindowChild.html?color=${el.textContent}&text=I%20am%20${el.textContent}`;
			var childWindow = window.open(url);

			//add button to close it
			var killEl = document.createElement("div");
			killEl.textContent = `Close ${el.textContent} child`;
			killEl.addEventListener("click", function() {
				childWindow.close();
				killEl.parentNode.removeChild(killEl);
			});

			document.querySelector("div.nuke").appendChild(killEl);
		});
	});