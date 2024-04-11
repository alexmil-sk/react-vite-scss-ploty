import styles from "./CountPage.module.scss";
import { CalcRadioInput } from "../../components/Calculator/CalcRadioInput/CalcRadioInput";
import { CalcParamData } from "../../components/Calculator/CalcParamData/CalcParamData";

const radioInputsData = [
	{
		value: "base",
		id: "base-value",
		checked: true,
		labelHtmlFor: "base-value",
		labelTitle: "Базовая программа",
		labelInnerHtml: "XX",
	},
	{
		value: "it",
		id: "it-value",
		checked: false,
		labelHtmlFor: "it-value",
		labelTitle: "Ипотека для IT",
		labelInnerHtml: "XX",
	},
	{
		value: "gov",
		id: "gov-value",
		checked: false,
		labelHtmlFor: "gov-value",
		labelTitle: "Господдержка",
		labelInnerHtml: "XX",
	},
	{
		value: "zero",
		id: "zero-value",
		checked: false,
		labelHtmlFor: "zero-value",
		labelTitle: "Без первоначального взноса",
		labelInnerHtml: "XX",
	},
];

const paramsCountData = [
	{
		id: "input-cost",
		title: "Стоимость недвижимости",
		value: "12000000",
		inputMode: "decimal",
		limitFrom: "375 тыс. Р",
		limi50: "10 млн Р",
		limitTo: "100 млн Р",
	},
	{
		id: "input-downpayment",
		title: "Первоначальный взнос",
		value: "4980000",
		inputMode: "",
		limitFrom: "15%",
		limitTo: "90%",
	},
	{
		id: "input-term",
		title: "Срок кредита",
		value: "12",
		inputMode: "",
		limitFrom: "1 год",
		limitTo: "30 лет",
	},
];

function CountPage() {
	return (
		<div className={styles.container}>
			<div className={styles.title}>Онлайн калькулятор</div>
			<div className={styles.row}>
				<form id="form" className={styles.col_left}>
					{/* <!-- programms-wraper --> */}
					<div className={styles.programms_wraper}>
						{radioInputsData.map((el) => (
							<CalcRadioInput element={el} key={el.id} />
						))}
					</div>
					{/* <!-- // programms-wraper --> */}

					{/* <!-- params-wrapper --> */}
					<div className={styles.params_wrapper}>
						{paramsCountData.map((param) => (
							<CalcParamData param={param} key={param.id} />
						))}
					</div>
					{/* <!-- // params-wrapper --> */}
				</form>
				{/* <!-- Col Right --> */}
				<div className={styles.col_right}>
					{/* <!-- Summary --> */}
					<div className={styles.summary}>
						
						<div className={`${styles.summary__item} ${styles.summary_item}`}>
							<div className={styles.summary_item__title}>Ежемесячный платеж</div>
							<div className={`${styles.summary_item__value} ${styles.summary_item__value__bigger}`} id="total-month-payment">
								XXXX
							</div>
						</div>

						<div className={`${styles.summary__item} ${styles.summary_item}`}>
							<div className={styles.summary_item__title}>Процентная ставка</div>
							<div
								className={`${styles.summary_item__value} ${styles.summary_item__value__bigger} ${styles.summary_item__value__percents}`}
								id="total-percent"
							>
								XX
							</div>
						</div>

						<div className={`${styles.summary__item} ${styles.summary_item}`}>
							<div className={styles.summary_item__title}>Сумма кредита</div>
							<div className={styles.summary_item__value} id="total-cost">
								XXXX
							</div>
						</div>
					</div>
					{/* <!-- // Summary --> */}
				</div>
				{/* <!-- // Col Right --> */}
			</div>
		</div>
	);
}

export { CountPage };
