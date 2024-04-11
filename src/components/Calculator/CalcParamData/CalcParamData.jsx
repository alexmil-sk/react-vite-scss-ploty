import styles from "./CalcParamData.module.scss";

function CalcParamData({ param }) {

	const { id, title, value, inputMode, limitFrom, limit50, limitTo} = param;

	return (
		<label className={styles.param}>
			<div className={styles.param__details}>
				<div className={styles.param__title}>{title}</div>
				<input type="text" className={styles.param__value} defaultValue={value} inputMode={inputMode} id={id} />
			</div>
			<div className={styles.param__range_slider} id="slider-cost"></div>

			<div className={`${styles.param__limits} ${styles.limit}`}>
				<div className={styles.limit__from}>{limitFrom}</div>
				<div className={styles.limit__50}>{limit50}</div>
				<div className={styles.limit__to}>{limitTo}</div>
			</div>
		</label>
	);
}

export { CalcParamData };