/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<>
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<Link className='navbar-brand mx-3' to='/'>
					<img
						src='img/logo/logo2.png'
						alt='Ultimate Financial Solutions'
						style={{ width: 150 }}
					/>
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav mx-2'>
						<li className='nav-item'>
							<Link className='nav-link' to='/'>
								Home
							</Link>
						</li>
						{/* <li className='nav-item'>
							<Link className='nav-link' to='/vision'>
								Our Vision
							</Link>
						</li> */}
						<li className='nav-item'>
							<Link className='nav-link' to='/about'>
								About Us
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/clients'>
								Our Clients
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/contact'>
								Contact Us
							</Link>
						</li>
					</ul>
				</div>
			</nav>

			{/* search area start */}
			{/* <Search /> */}
			{/* search area end */}

			{/* sidebar start */}
			{/* <Sidebar /> */}
			{/* sidebar end */}
		</>
	);
};

export default Header;
