import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Layout } from "../components/Layout/Layout.jsx";
import { BetonPage } from "../pages/BetonPage/BetonPage.jsx";
import { ContactsPage } from "../pages/ContactsPage/ContactsPage.jsx";
import { BuyPage } from "../pages/BuyPage/BuyPage.jsx";
import { CountPage } from "../pages/CountPage/CountPage.jsx";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage.jsx";

const routes = [
	{ title: "Betónové ploty", path: "/" },
	{ title: "Kontaktujte Nás", path: "/contacts" },
	{ title: "Calculator", path: "/count" },
];

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<BetonPage />} />
			<Route path="/contacts" element={<ContactsPage />} />
			<Route path="/count" element={<CountPage />} />
			<Route path="/buy" element={<BuyPage />} />
			<Route path="*" element={<NotFoundPage />} />
		</Route>,
	),
);

export { router, routes };
