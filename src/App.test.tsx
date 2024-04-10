/** @format */

import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { MemoryRouter } from "react-router-dom";

test("renders learn react link", () => {
	render(
		<Provider store={store}>
			<MemoryRouter initialEntries={["/"]}>
				<App />
			</MemoryRouter>
		</Provider>
	);
	const linkElement = screen.getByText(/Dashboard/i);
	expect(linkElement).toBeInTheDocument();
});
