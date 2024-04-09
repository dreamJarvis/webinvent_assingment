/** @format */
import React from "react";

const Form = ({ getUserInfo, setEmail, setPassword, authType }) => {
	return (
		<div className='login-form'>
			<form className='input-form' onSubmit={getUserInfo}>
				<div className='input-form-container'>
					<div className='input-containers'>
						<label className='input-name'>{authType}</label>
						<input
							className='input-name'
							type='email'
							placeholder='email'
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							className='input-email'
							type='text'
							placeholder='password'
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<button type='submit' className='btn-submit'>
						{authType}
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
