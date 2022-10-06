import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoCloseCircleOutline } from 'react-icons/io5';

import { useAuthentication } from '../../hooks/useAuthentication';

import { useAuthValue } from '../../context/AuthContext';

import {
	NavbarContainer,
	NavList,
	NavWrapper,
	NavItem,
} from './MenuModal.styled';
import { ButtonLogout } from '../../styles/Button.styled';

export default function MenuModal({ onShowMenuModal }) {
	const { user } = useAuthValue();
	const { logout } = useAuthentication();

	const [isVisible, setIsVisible] = useState(false);

	const handleShowModalSearch = () => {
		setIsVisible(!isVisible);
		document.onkeydown = (e) => {
			if (e.key === 'Escape') {
				setIsVisible(false);
			}
		};
	};

	return (
		<NavbarContainer>
			<NavWrapper>
				<button onClick={onShowMenuModal}>
					<IoCloseCircleOutline size={30} />
				</button>
				<NavList>
					<NavItem>
						<NavLink
							to='/'
							end
							className={({ isActive }) =>
								isActive ? 'active' : ''
							}
						>
							Home
						</NavLink>
					</NavItem>

					{!user && (
						<>
							<NavItem>
								<NavLink
									to='/login'
									className={({ isActive }) =>
										isActive ? 'active' : ''
									}
								>
									Entrar
								</NavLink>
							</NavItem>

							<NavItem>
								<NavLink
									to='/register'
									className={({ isActive }) =>
										isActive ? 'active' : ''
									}
								>
									Cadastrar
								</NavLink>
							</NavItem>
						</>
					)}

					{user && (
						<>
							<NavItem>
								<NavLink
									to='/post/create'
									className={({ isActive }) =>
										isActive ? 'active' : ''
									}
								>
									Novo post
								</NavLink>
							</NavItem>

							<NavItem>
								<NavLink
									to='/dashboard'
									className={({ isActive }) =>
										isActive ? 'active' : ''
									}
								>
									Dashboard
								</NavLink>
							</NavItem>
						</>
					)}

					<NavItem>
						<NavLink
							to='/about'
							className={({ isActive }) =>
								isActive ? 'active' : ''
							}
						>
							Sobre
						</NavLink>
					</NavItem>

					{user && <ButtonLogout onClick={logout}>sair</ButtonLogout>}
				</NavList>
			</NavWrapper>
		</NavbarContainer>
	);
}
