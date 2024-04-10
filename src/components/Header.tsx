/** @format */

import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className='w-full flex justify-center bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-green-200'>
			<div className='flex items-center'>
				<ul className='flex p-4 m-4'>
					<li className='px-4'>
						<Link to='/'>Sign In</Link>
					</li>
					<li className='px-4'>
						<Link to='/signup'>Sign Up</Link>
					</li>
					<li className='px-4'>
						<Link to='/dashboard'>Dashboard</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
