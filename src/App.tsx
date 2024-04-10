/** @format */

import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<div className='flex flex-col items-center text-center justify-center'>
			<Header />
			<Outlet />
		</div>
	);
}

export default App;
