import { useState, useEffect } from 'react';

import {
	IoMailOutline,
	IoPersonOutline,
	IoLockClosedOutline,
	IoChevronForwardOutline,
	IoCheckmarkCircleOutline,
} from 'react-icons/io5';
import { useAuthentication } from '../../hooks/useAuthentication';

import { Button } from '../../styles/Button.styled';

import { Title, Subtitle } from '../../styles/Typography.styled';
import {
	Form,
	LabelFor,
	FormContainer,
	InputContainer,
} from '../../styles/Form.styled';

export default function Register() {
	const [displayName, setDisplayName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const [error, setError] = useState('');

	const { createUser, error: authError, loading } = useAuthentication();

	const messages = {
		errors: 'As senhas não são iguais!',
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		setError('');

		const user = {
			displayName,
			email,
			password,
		};

		if (password !== confirmPassword) {
			setError(messages.errors);
			return;
		}

		const response = await createUser(user);

		setError('');
		setDisplayName('');
		setEmail('');
		setPassword('');
		setConfirmPassword('');
	};

	useEffect(() => {
		if (authError) {
			setError(authError);
		}
	}, [authError]);

	return (
		<FormContainer>
			<Title>Cadastre-se para postar</Title>
			<Subtitle>
				Crie seu usuário e compartilhe suas histórias com a comunidade.
			</Subtitle>

			<Form onSubmit={handleSubmit}>
				{error && <span className='error'>{error}</span>}

				<LabelFor>
					<span>Nome:</span>
					<InputContainer>
						<IoPersonOutline size={20} />
						<input
							required
							type='text'
							name='displayName'
							value={displayName}
							placeholder='Nome do usuário'
							onChange={(e) =>
								setDisplayName(e.target.value.replace(/ /g, ''))
							}
						/>
						{displayName && (
							<IoCheckmarkCircleOutline
								size={22}
								className='icon__success'
							/>
						)}
					</InputContainer>
				</LabelFor>

				<LabelFor>
					<span>E-mail:</span>
					<InputContainer>
						<IoMailOutline size={20} />
						<input
							required
							type='email'
							name='email'
							value={email}
							placeholder='E-mail do usuário'
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
							placeholder='Insira uma senha'
							autoComplete='new-password'
							onChange={(e) =>
								setPassword(e.target.value.replace(/ /g, ''))
							}
						/>
					</InputContainer>
				</LabelFor>

				<LabelFor>
					<span>Confirmar senha:</span>
					<InputContainer>
						<IoLockClosedOutline size={20} />
						<input
							required
							type='password'
							name='confirmPassword'
							value={confirmPassword}
							placeholder='Confirme sua uma senha'
							onChange={(e) =>
								setConfirmPassword(
									e.target.value.replace(/ /g, '')
								)
							}
						/>
					</InputContainer>
				</LabelFor>
				{!loading && (
					<Button type='submit'>
						<span>Cadastrar</span>
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
