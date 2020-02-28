"use strict"; var $ = s => document.querySelector(s);

	var neededCoins = 0;
	var currentCoins = 0;

	function toggleDoor(state) { console.log("Would toggle door here.", state); }

	$('.doorFace').addEventListener("click", () => {
		if (currentCoins >= neededCoins) toggleDoor("open");
	});
	updateDoorState();

	function updateDoorState() {
		$('#neededCoins').textContent = neededCoins;

		if (currentCoins < neededCoins) {
			$('body').classList.add('locked');
			$('#lockState').innerHTML = "&#x1f512;";

		} else {
			$('body').classList.remove('locked');
			$('#lockState').innerHTML = "&#x2713;";
		}
	}

	function setRequiredCoins(_neededCoins) {
		neededCoins = _neededCoins;
		updateDoorState();
	}

	function setCoinCoint(_currentCoins) {
		currentCoins = _currentCoins;
		updateDoorState();
	}