import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
		<ToastContainer
			style={{fontSize: "1rem", textTransform: "uppercase", fontWeight: "bold"}}
			position="bottom-right"
			autoClose={2000}
			hideProgressBar={false}
			newestOnTop
			closeOnClick={false}
			rtl={false}
			pauseOnFocusLoss={false}
			draggable={false}
			pauseOnHover={false}
			theme="light"
			transition:Slide
		/>
	</React.StrictMode>,
);
