/** @format */

import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<div className='Container'>
			<Header />
			<Outlet />
		</div>
	);
}

export default App;
