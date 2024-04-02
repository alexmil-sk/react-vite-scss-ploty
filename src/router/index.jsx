import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Layout } from "../components/Layout/Layout.jsx";
import { GalleryPage } from "../pages/GalleryPage/GalleryPage.jsx";
import { HomePage } from "../pages/HomePage/HomePage.jsx";
import { BetonPage } from "../pages/BetonPage/BetonPage.jsx";
import { BrickPage } from "../pages/BrickPage/BrickPage.jsx";
import { GatePage } from "../pages/GatePage/GatePage.jsx";
import { MinePage } from "../pages/MinePage/MinePage.jsx";
import { ContactsPage } from "../pages/ContactsPage/ContactsPage.jsx";
import { BuyPage } from "../pages/BuyPage/BuyPage.jsx";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage.jsx";

const routes = [
	{ title: "Home", path: "/" },
	{ title: "Galéria", path: "/gallery" },
	{ title: "Betónové ploty", path: "/beton" },
	{ title: "Murované ploty", path: "/brick" },
	{ title: "Posuvné brány", path: "/gate" },
	{ title: "Betónové šachty", path: "/mine" },
	{ title: "Kontaktujte Nás", path: "/contacts" },
];

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="/gallery" element={<GalleryPage />} />
					<Route path="/beton" element={<BetonPage />} />
					<Route path="/brick" element={<BrickPage />} />
					<Route path="/gate" element={<GatePage />} />
					<Route path="/mine" element={<MinePage />} />
					<Route path="/contacts" element={<ContactsPage />} />
					<Route path="/buy" element={<BuyPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>,
	),
);



export { router, routes };
