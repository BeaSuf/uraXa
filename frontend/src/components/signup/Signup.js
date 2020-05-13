import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import history from '../../history';
import {UserContext} from '../../UserContext';

import './Signup.css';

export default function Signup() {

	const { email, setEmail } = useContext(UserContext)
	const { token, setToken } = useContext(UserContext)
	const { username, setUsername } = useContext(UserContext)

	const [ isButtonDisabled, setIsButtonDisabled ] = useState(true);
	const [ password, setPassword ] = useState('');

	useEffect(
		() => {
			if (username.trim() && email.trim() && password.trim()) {
				setIsButtonDisabled(false);
			} else {
				setIsButtonDisabled(true);
			}
		},
		[ username, email, password ]
	);
	console.log(username, email, password);

	const handleJoin = (e) => {
		e.preventDefault();

		let url = '/api/signup';

		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email: email, password: password, username: username })
		};
		fetch(url, requestOptions)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setEmail(data.user.email);
				setToken(data.user.token);
			})
			.catch((error) => {
				console.log(error.error);
				console.log(error.warning);
			});
		history.push('/map');
	};

	return (
		<div className='form-container'>
			<div className="title">
				<h1>Join uraXa</h1>
			</div>
			<form className='form-wraper' method='POST' name='signup' onSubmit={handleJoin}>
				<div className='input-wraper'>
					<input
						className='input'
						type='text'
						id='username'
						name='username'
						autoComplete='off'
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
					<label className='label' htmlFor='username'>
						Username
					</label>
				</div>

				<div className='input-wraper'>
					<input
						className='input'
						type='email'
						id='email'
						name='email'
						autoComplete='off'
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<label className='label' htmlFor='email'>
						Email address
					</label>
				</div>

				<div className='input-wraper'>
					<input
						className='input'
						type='password'
						id='password'
						name='password'
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<label className='label' htmlFor='password'>
						Password
					</label>
				</div>
				<button className='btn' type="submit" disabled={isButtonDisabled}>
					Join
				</button>
			</form>
		</div>
	);
}