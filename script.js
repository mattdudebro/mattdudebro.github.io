const colors = ["#FFD700", "#FF69B4", "#00CED1", "#FB68EE", "#FF4500"];

document.addEventListener("mousemove", (e) => {
	const sparkle = document.createElement("img");
	sparkle.src = "images/star.png";
	sparkle.className = "sparkle-img";

	// Apply color tint using drop-shadow
	const color = colors[Math.floor(Math.random() * colors.length)];
	sparkle.style.filter = `drop-shadow(0 0 4px ${color})`;

	sparkle.style.position = "absolute";
	sparkle.style.left = `${e.clientX}px`;
	sparkle.style.top = `${e.clientY}px`;
	sparkle.style.transform = "translate(-50%, -50%)";
	sparkle.style.pointerEvents = "none";
	sparkle.style.zIndex = "9999";
	sparkle.style.width = "16px";
	sparkle.style.height = "16px";
	sparkle.style.animation = "sparkleFade 1s ease-out forwards";

	document.body.appendChild(sparkle);

	setTimeout(() => {
		sparkle.remove();
	}, 600);
});
