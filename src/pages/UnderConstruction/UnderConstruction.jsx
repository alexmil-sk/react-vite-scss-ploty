import { motion } from "framer-motion";
import { motionUnderConstructionVariant } from "../../framer-motion/motionVariants";
import styles from "./UnderConstruction.module.scss";
import under_construction from "../../assets/images/under_construction/page_under_construction.jpg";

function UnderConstruction() {
	return (
		<div>
			<motion.div
				className={styles.construction}
				initial={"hidden"}
				animate={"visible"}
				variants={motionUnderConstructionVariant}
			>
				<div className={styles.construction__row}>
					<div className={styles.construction__row_elements}>
						<div className={styles.row}>
							<img src={under_construction} alt="under_construction" />
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}

export { UnderConstruction };
