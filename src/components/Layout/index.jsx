import { useState, useEffect } from 'react';
import { useAuthentication } from '../../hooks/useAuthentication';

import { BrowserRouter } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import { AuthProvider } from '../../context/AuthContext';

import { Router } from '../../routes/Router';
import Footer from '../Footer';
import Navbar from '../Navbar';

import { Container } from './Layout.styled';

export default function Layout() {
	const [user, setUser] = useState(undefined);
	const { auth } = useAuthentication();

	const loadingUser = user === undefined;

	useEffect(() => {
		onAuthStateChanged(auth, (user) => setUser(user));
	}, [auth]);

	if (loadingUser) return <h4>Carregando...</h4>;

	return (
		<>
			<AuthProvider value={{ user }}>
				<BrowserRouter>
					<Navbar />
					<Container>
						<Router />
					</Container>
					<Footer />
				</BrowserRouter>
			</AuthProvider>
		</>
	);
}
