import { useState, useEffect } from 'react';

import { useAuthentication } from '../../hooks/useAuthentication';
import { Button } from '../../styles/Button.styled';

import { Title, Subtitle } from '../../styles/Typography.styled';
import {
	LabelFor,
	InputContainer,
	FormContainer,
	Form,
} from '../../styles/Form.styled';

import {
	IoMailOutline,
	IoLockClosedOutline,
	IoChevronForwardOutline,
	IoCheckmarkCircleOutline,
} from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [error, setError] = useState('');

	const { login, error: authError, loading } = useAuthentication();

	const handleSubmit = async (e) => {
		e.preventDefault();

		setError('');

		const user = {
			email,
			password,
		};

		const response = await login(user);

		console.log(response);

		setError('');
	};

	useEffect(() => {
		if (authError) {
			setError(authError);
		}
	}, [authError]);

	return (
		<FormContainer>
			<Title>Entrar</Title>
			<Subtitle>
				Faça login com seu email e senha para acessar sua conta.
			</Subtitle>

			<Form onSubmit={handleSubmit}>
				{error && <span className='error'>{error}</span>}

				<LabelFor>
					<span>E-mail:</span>
					<InputContainer>
						<IoMailOutline size={20} />
						<input
							required
							type='email'
							name='email'
							value={email}
							placeholder='Seu e-mail de usuário'
							onChange={(e) =>
								setEmail(e.target.value.replace(/ /g, ''))
							}
						/>
						{email.includes('@' && 'mail' && '.' && '.com') && (
							<IoCheckmarkCircleOutline
								size={22}
								className='icon__success'
							/>
						)}
					</InputContainer>
				</LabelFor>

				<LabelFor>
					<span>Senha:</span>
					<InputContainer>
						<IoLockClosedOutline size={20} />
						<input
							required
							type='password'
							name='password'
							value={password}
							placeholder='Insira sua senha'
							autoComplete='current-password'
							onChange={(e) =>
								setPassword(e.target.value.replace(/ /g, ''))
							}
						/>
					</InputContainer>
				</LabelFor>

				<p>
					Ainda não tem conta?{' '}
					<Link to='/register'>Então clique aqui</Link>
				</p>

				{!loading && (
					<Button type='submit'>
						<span>Entrar</span>
						<IoChevronForwardOutline size={22} />
					</Button>
				)}
				{loading && (
					<Button type='submit' disabled>
						<span>Aguarde...</span>
					</Button>
				)}
			</Form>
		</FormContainer>
	);
}
