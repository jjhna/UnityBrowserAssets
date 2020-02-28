var canvas = document.getElementById('canvas');
		var ctx = canvas.getContext('2d');

		canvas.width = document.body.offsetWidth;
		canvas.height = document.body.offsetHeight;
		ctx.fillStyle = "rgba(127, 127, 127, 1)";
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		function renderMouse(ev) {
			ctx.fillStyle = "rgba(127, 127, 127, .02)";
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			var r = 0;
			var g = 0;
			var b = 0;
			if (ev.buttons & 1) r = 255;
			if (ev.buttons & 2) g = 255;
			if (ev.buttons & 4) b = 255;
			ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 1)`;

			ctx.beginPath();
			ctx.arc(
				ev.x, ev.y,
				70,
				0, 2 * Math.PI
			);
			ctx.fill();

			ctx.fillStyle = "rgba(127, 127, 127, 1)";
			ctx.beginPath();
			ctx.arc(
				ev.x, ev.y,
				20,
				0, 2 * Math.PI
			);
			ctx.fill();
		};

		document.body.addEventListener("mousemove", renderMouse);
		document.body.addEventListener("mousedown", renderMouse);
		document.body.addEventListener("mouseup", renderMouse);
		document.body.addEventListener("contextmenu", ev => {
			ev.preventDefault();
		});