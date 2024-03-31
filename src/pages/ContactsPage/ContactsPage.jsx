// Receive your html contact form submissions directly in your email inbox
//using our contact form api service without any server or backend code.Its free!
//Contac forms: https://web3forms.com/

//www.npmjs.com/package/react-notifications
//framer-motion

import { useNavigate } from "react-router-dom";
import "./ContactsPage.scss";
import operator from "../../assets/images/form_to_mail/operator.png";


function ContactsPage() {

	const navigate = useNavigate();

	const onSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);
		formData.append("access_key", "392f9114-30e5-405c-850a-44c65a67e073");

		let object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		const res = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: json,
		}).then((res) => res.json());
		
		
		if (res.success) {
			navigate("/");
			console.log("Success", res);
			alert("Vaša žiadosť bola úspešne odoslaná");
		}

	};

	return (
		<div className="Contacts">
			<h2>
				<span>Kontaktujte</span>&nbsp;Nás
			</h2>
			<p>Kontaktujte nás prostredníctvom tohto formulára alebo na telefónnom čísle 0 000 000 000.</p>
			<div className="content__row">
				<div className="content__image">
					<img src={operator} alt="operator" />
				</div>
				<form onSubmit={onSubmit}>
					{/* <form onSubmit={onSubmit} action="https://api.web3forms.com/submit" method="POST"> */}
					{/* Hidden input */}
					{/* <input type="hidden" name="access_key" value="392f9114-30e5-405c-850a-44c65a67e073" /> */}
					{/* Hidden input */}
					<div className="name-email">
						<div className="name">
							<input type="text" name="name" id="name" placeholder=" " required />
							<label htmlFor="name">Zadajte meno *</label>
						</div>
						<div className="email">
							<input type="email" name="email" id="email" placeholder=" " required />
							<label htmlFor="email">Zadajte e-mail *</label>
						</div>
					</div>
					<div className="phone">
						<input
							type="tel"
							name="phone"
							id="phone"
							maxLength="20"
							pattern="^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/gx"
							placeholder=" "
						/>
						<label htmlFor="phone">Zadajte telefónne číslo *</label>
					</div>
					<div className="address">
						<input type="text" name="address" id="address" placeholder=" " />
						<label htmlFor="address">Zadajte adresu inštalácie</label>
					</div>
					<div className="textarea">
						<textarea name="message" id="message" cols="30" rows="10" placeholder=" "></textarea>
						<label htmlFor="message">Zadajte podmienky inštalácie</label>
					</div>
					<div className="installation">
						<span>Inštalácia:</span>
						<input type="radio" name="installation" id="yes" value="install" />
						<label htmlFor="yes">Áno</label>
						<input type="radio" name="installation" id="no" defaultChecked readOnly value="no_install" />
						<label htmlFor="no">Nie</label>
					</div>
					<input type="submit" value="Poslať" className="btn" name="send" />
				</form>
			</div>
		</div>
	);
}

export { ContactsPage };
