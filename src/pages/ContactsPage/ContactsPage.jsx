import { useNavigate } from "react-router-dom";
import "./ContactsPage.scss";
import operator from "../../assets/images/form_to_mail/operator.png";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { motionContactsVariant } from "../../framer-motion/motionVariants";
import { FaWhatsappSquare } from "react-icons/fa";

function ContactsPage() {
	const navigate = useNavigate();

	const onSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);
		formData.append("access_key", "392f9114-30e5-405c-850a-44c65a67e073");

		let object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		toast.info("Vaša žiadosť sa odosiela");

		setTimeout(async () => {
			const res = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: json,
			}).then((res) => res.json());

			if (res.success) {
				//console.log("Success", res);
				navigate("/");
				toast.success("Vaša žiadosť bola úspešne odoslaná");
			}
		}, 3000);
	};

	return (
		<motion.div className="Contacts" initial={"hidden"} animate={"visible"} variants={motionContactsVariant}>
			<h2>
				<span>Kontaktujte</span>&nbsp;Nás
			</h2>
			<p> Objednajte si kalkuláciu prostredníctvom tohto formulára alebo na telefónnom čísle.</p>
			<div className="content__row">
				<div className="content__image">
					<img src={operator} alt="operator" />
					<p>
						<FaWhatsappSquare />
						+421 910 513 298
					</p>
				</div>
				<form onSubmit={onSubmit}>
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
						<input type="tel" name="phone" id="phone" maxLength="13" pattern="^[0-9\-\+]{10,13}$" placeholder=" " />
						<label htmlFor="phone">Zadajte telefónne číslo *</label>
					</div>
					<div className="address">
						<input type="text" name="address" id="address" placeholder=" " />
						<label htmlFor="address">Zadajte adresu</label>
					</div>
					<div className="textarea">
						<textarea name="message" id="message" cols="30" rows="10" placeholder=" "></textarea>
						<label htmlFor="message">Zadajte montážne podmienky</label>
					</div>
					<div className="installation">
						<span>Montáž:</span>
						<input type="radio" name="installation" id="yes" value="install" />
						<label htmlFor="yes">Áno</label>
						<input type="radio" name="installation" id="no" defaultChecked readOnly value="no_install" />
						<label htmlFor="no">Nie</label>
					</div>
					<input type="submit" value="Poslať" className="btn" name="send" />
				</form>
			</div>
		</motion.div>
	);
}

export { ContactsPage };
