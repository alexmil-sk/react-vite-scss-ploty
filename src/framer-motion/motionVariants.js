const motionHomeSliderBodyVariant = {
	hidden: {
		y: -1000,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
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
const motionUnderConstructionVariant = {
	hidden: {
		y: -1000,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1,
		}
	},
	exit: {
		
	}
};


const motionBurgerMenuVariant = {
	hidden: { x: -1000, opacity: 0 },
	visible: { x: 0, opacity: 1, transition: { duration: .5, ease: [0.22, 1, 0.36, 1] } },
	exit: { x: -1000, opacity: 0, transition: { delay: .4, duration: 1, ease: [0.76, 0, 0.24, 1] } }
}

const motionBurgerItemVariant = {
	whileTap: { scale: 0.95, transition: { duration: 0.1 } },
	whileHover: { scale: 1.1, transition: { duration: 0.4 } },
	hidden: {
		opacity: 0
	},
	visible: {
		opacity: 1,
	},
};

const swiperFooterVariant = {
	hidden: {y: 300, opacity: 0},
	visible: {y: 0, opacity: 1, transition: {duration: 1, delay: 1}},
}



export {
	motionHomeSliderBodyVariant,
	motionHomeSliderPictureVariant,
	motionContactsVariant,
	motionBuyVariant,
	motionBetonVariant,
	motionUnderConstructionVariant,
	motionBurgerMenuVariant,
	motionBurgerItemVariant,
	swiperFooterVariant
};