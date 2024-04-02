const motionHomeSliderBodyVariant = {
	hidden: {
		y: -1000,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 0.5,
			duration: 2
		}
	},
};

const motionHomeSliderPictureVariant = {
	hidden: {
		x: -1000,
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
		}
	},
};

const motionContactsVariant = {
	hidden: {
		x: -1000,
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
		}
	},
};

const motionBuyVariant = {
	hidden: {
		x: -1000,
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
		}
	},
};

const motionBetonVariant = {
	hidden: {
		x: -1000,
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
		}
	},
};



// const motionHomeSliderSideBulletVariant = {
// 	visible: (i) => ({
// 		opacity: 1,
// 		transition: {
// 			delay: i * 0.3
// 		},
// 	}),
// 	hidden: {
// 		opacity: 0,
// 	},
// };



export { motionHomeSliderBodyVariant, motionHomeSliderPictureVariant, motionContactsVariant, motionBuyVariant, motionBetonVariant };