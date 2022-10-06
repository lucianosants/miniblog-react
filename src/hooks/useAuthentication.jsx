import { useState, useEffect } from 'react';

import { db, analytics } from '../firebase/config';

import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
	signOut,
} from 'firebase/auth';

export function useAuthentication() {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(null);

	const [cancelled, setCancelled] = useState(false);

	const auth = getAuth();

	const checkIfIsCancelled = () => {
		if (cancelled) return;
	};

	const createUser = async (data) => {
		checkIfIsCancelled();

		setError(null);
		setLoading(true);

		try {
			const { user } = await createUserWithEmailAndPassword(
				auth,
				data.email,
				data.password
			);

			await updateProfile(user, {
				displayName: data.displayName,
			});

			setLoading(false);

			return user;
		} catch (error) {
			console.log(error.message);
			console.log(typeof error.message);

			let systemErrorMessage;

			if (error.message.includes('password')) {
				systemErrorMessage = 'A senha deve ter pelo menos 6 caracteres';
			}

			if (error.message.includes('email-already')) {
				systemErrorMessage = 'E-mail já cadastrado';
			}

			setError(systemErrorMessage);
			setLoading(null);
		}
	};

	const logout = () => {
		checkIfIsCancelled();
		signOut(auth);
	};

	const login = async (data) => {
		checkIfIsCancelled();

		setLoading(true);
		setError(null);

		try {
			await signInWithEmailAndPassword(auth, data.email, data.password);

			setLoading(null);
		} catch (error) {
			let systemErrorMessage;

			if (error.message.includes('user-not-found')) {
				systemErrorMessage = 'Usuário não encontrado.';
			}

			if (error.message.includes('wrong-password')) {
				systemErrorMessage = 'Senha incorreta.';
			}

			setError(systemErrorMessage);
			setLoading(null);
		}
	};

	useEffect(() => {
		return () => setCancelled(true);
	}, []);

	return {
		auth,
		createUser,
		error,
		loading,
		logout,
		login,
	};
}
