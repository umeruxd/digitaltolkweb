export const swipeHorizontal = (element) => {
	return new Promise((res, rej) => {
		if (
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
				navigator.userAgent
			)
		) {
			let touchstartX = 0;
			let touchendX = 0;
			let swiped = null;

			function handleGesture() {
				if (touchendX < touchstartX) swiped = 'left';
				if (touchendX > touchstartX) swiped = 'right';
				res(swiped);
			}

			element.addEventListener('touchstart', (e) => {
				touchstartX = e.changedTouches[0].screenX;
			});

			element.addEventListener('touchend', (e) => {
				touchendX = e.changedTouches[0].screenX;
				handleGesture();
			});

			return swiped;
		}
	});
};
