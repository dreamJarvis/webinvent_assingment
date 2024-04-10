/** @format */
import React from "react";

const Form = ({
	getUserInfo,
	email,
	setEmail,
	password,
	setPassword,
	authType,
}) => {
	return (
		<div className='login-form w-1/2 bg-slate-300 m-4 p-3'>
			<form
				className='flex flex-col items-center text-center justify-center shadow-transparent drop-shadow-lg'
				onSubmit={getUserInfo}>
				<div className=''>
					<div className='flex flex-col'>
						<label className='input-name font-serif font-semibold text-lg text-slate-60'>
							{authType}
						</label>
						<input
							className='m-2 p-2'
							type='email'
							data-testid='email-input'
							placeholder='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							className='m-2 p-2'
							type='text'
							data-testid='email-password'
							value={password}
							placeholder='password'
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<button
						type='submit'
						className='px-3 py-2 m-2 bg-green-300 rounded-lg text-white-100'>
						{authType}
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
