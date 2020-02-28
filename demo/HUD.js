"use strict";
		var $ = document.querySelector.bind(document);

		function setCoinCount(count) {
			$("#coins span").textContent = count;

			//(re-)trigger CSS animation
			var el = $("#coins");
			el.classList.remove("collectCoin");
			el.parentNode.replaceChild(el.cloneNode(true), el);
			$("#coins").classList.add("collectCoin");
		}

		function setPaused(isPaused) {
			$('#pauseMenu').style.display = isPaused ? "block" : "none";
		}

		function say(html, dwellTime) {
			var el = document.createElement("div");
			el.className = "message entering";
			el.innerHTML = html;

			$('#messages').appendChild(el);

			setTimeout(() => el.classList.remove("entering"), 20);
			setTimeout(() => {
				el.classList.add("fading");
			}, dwellTime * 1000);

			setTimeout(() => {
				el.remove();
			}, (dwellTime + 5) * 1000);
		}