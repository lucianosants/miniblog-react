import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { IoSearchSharp, IoMenuOutline } from 'react-icons/io5';
import { MdOutlineLightMode, MdOutlineModeNight } from 'react-icons/md';

import { useAuthentication } from '../../hooks/useAuthentication';

import { useAuthValue } from '../../context/AuthContext';

import {
	NavbarContainer,
	NavList,
	Strong,
	NavWrapper,
	NavItem,
	NavListButton,
	Brand,
} from './Navbar.styled';
import {
	ButtonLogout,
	ButtonSearch,
	ButtonSwitchTheme,
} from '../../styles/Button.styled';
import Search from '../SearchModal';
import { useTheme } from '../../context/ThemeSwitcher';
import MenuModal from '../MenuModal';

export default function Navbar() {
	const [searchIsOpen, setSearchIsOpen] = useState(false);
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	const { user } = useAuthValue();
	const { logout } = useAuthentication();

	const { toggleTheme, toggleIcon } = useTheme();

	const handleShowModalSearch = () => {
		setSearchIsOpen(!searchIsOpen);
		document.onkeydown = (e) => {
			if (e.key === 'Escape') {
				setSearchIsOpen(false);
			}
		};
	};

	const handleShowMenuModal = () => {
		setMenuIsOpen(!menuIsOpen);
	};

	return (
		<NavbarContainer variant='blue'>
			<NavWrapper>
				<Brand>
					<button onClick={handleShowMenuModal}>
						<IoMenuOutline size={30} />
					</button>

					<NavLink className='__brand' to='/'>
						Mini <Strong>Blog</Strong>
					</NavLink>
				</Brand>

				<NavList>
					<ButtonSearch onClick={handleShowModalSearch}>
						<IoSearchSharp size={22} />
					</ButtonSearch>

					<ButtonSwitchTheme onClick={toggleTheme}>
						{toggleIcon === 'icon_moon' && (
							<MdOutlineLightMode size={22} />
						)}
						{toggleIcon === 'icon_sun' && (
							<MdOutlineModeNight size={22} />
						)}
					</ButtonSwitchTheme>

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

				<NavListButton>
					<ButtonSearch onClick={handleShowModalSearch}>
						<IoSearchSharp size={22} />
					</ButtonSearch>

					<ButtonSwitchTheme onClick={toggleTheme}>
						{toggleIcon === 'icon_moon' && (
							<MdOutlineLightMode size={22} />
						)}
						{toggleIcon === 'icon_sun' && (
							<MdOutlineModeNight size={22} />
						)}
					</ButtonSwitchTheme>
				</NavListButton>
			</NavWrapper>

			{searchIsOpen && (
				<Search
					onCloseSearch={() => {
						setSearchIsOpen(false);
					}}
					onAfterSearch={() => {
						setSearchIsOpen(false);
					}}
				/>
			)}

			{menuIsOpen && <MenuModal onShowMenuModal={handleShowMenuModal} />}
		</NavbarContainer>
	);
}
