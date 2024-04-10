/** @format */
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import Login from "../Login";
import { Provider } from "react-redux";
import { store } from "../../store";
import { MemoryRouter } from "react-router-dom";

describe("log-in component", () => {
	test("login page should render email input", () => {
		render(
			<Provider store={store}>
				<MemoryRouter initialEntries={["/"]}>
					<Login />
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
					<Login />
				</MemoryRouter>
			</Provider>
		);

		const passwordInput = screen.getByTestId("email-password");
		expect(passwordInput).toBeInTheDocument();
	});

	// test("should render Register component correctly", () => {
	// 	render(
	// 		<Provider store={store}>
	// 			<MemoryRouter initialEntries={["/"]}>
	// 				<Login />
	// 			</MemoryRouter>
	// 		</Provider>
	// 	);
	// 	const emailInput = screen.getByTestId("email-input");
	// 	userEvent.type(emailInput, "test@mail.com");

	// 	console.log("emailInput : ", emailInput?.innerText);

	// 	// expect(emailInput).toBeInTheDocument();
	// 	expect(screen.getByTestId("email-input")).toHaveValue("test@mail.com");
	// 	expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
	// });
});
