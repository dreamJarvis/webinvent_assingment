/** @format */
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../store";
import { MemoryRouter } from "react-router-dom";
import SignUp from "../SignUp";

describe("log-in component", () => {
	test("login page should render email input", () => {
		render(
			<Provider store={store}>
				<MemoryRouter initialEntries={["/"]}>
					<SignUp />
				</MemoryRouter>
			</Provider>
		);

		const emailInput = screen.getByTestId("email-input");
		expect(emailInput).toBeInTheDocument();
	});

	test("login page should render password input", () => {
		render(
			<Provider store={store}>
				<MemoryRouter initialEntries={["/"]}>
					<SignUp />
				</MemoryRouter>
			</Provider>
		);

		const passwordInput = screen.getByTestId("email-password");
		expect(passwordInput).toBeInTheDocument();
	});
});
