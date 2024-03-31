import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Layout } from "../components/Layout/Layout.jsx";
import { GalleryPage } from "../pages/GalleryPage/GalleryPage.jsx";
import { BetonPage } from "../pages/BetonPage/BetonPage.jsx";
import { BrickPage } from "../pages/BrickPage/BrickPage.jsx";
import { ContactsPage } from "../pages/ContactsPage/ContactsPage.jsx";
import { HomePage } from "../pages/HomePage/HomePage.jsx";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<HomePage />} />
			<Route path="/gallery" element={<GalleryPage />} />
			<Route path="/beton" element={<BetonPage />} />
			<Route path="/brick" element={<BrickPage />} />
			<Route path="/contacts" element={<ContactsPage />} />
			<Route path="/buy" element={<ContactsPage />} />
			<Route path="*" element={<NotFoundPage />} />
		</Route>,
	),
);

export { router };
