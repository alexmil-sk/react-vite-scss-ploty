import styles from "./CalcRadioInput.module.scss";

function CalcRadioInput({ element }) {
	const { id, value, checked, labelHtmlFor, labelTitle, labelInnerHtml } = element;

	return (
		<>
			<input
				id={id}
				type="radio"
				name="program"
				defaultValue={value}
				className={styles.radio_hidden}
				defaultChecked={checked}
			/>
			<label htmlFor={labelHtmlFor} className={styles.radio_label}>
				{labelTitle}
				<span id="base-text">{labelInnerHtml}</span>
			</label>
		</>
	);
}

export { CalcRadioInput };
