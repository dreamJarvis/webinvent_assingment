/** @format */

import React from "react";

const UserCard = ({ userData }) => {
	const { avatar, email, first_name, last_name } = userData;
	return (
		<div className='flex flex-col items-center text-center justify-center shadow-transparent my-5 bg-pink-100 p-5  min-w-[30%] min-h-[40%] drop-shadow-lg rounded-md '>
			<img className='backdrop-blur-sm' src={avatar} alt='user-avatar' />
			<div className='my-2'>
				<h5 className='font-sans font-medium'>
					{first_name} {last_name}
				</h5>
				<p className='font-light'>{email}</p>
			</div>
		</div>
	);
};

export default UserCard;
