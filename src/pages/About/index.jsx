import { FiExternalLink } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import { Strong } from '../../components/Navbar/Navbar.styled';
import { Container } from './About.styled';
import { Title } from '../../styles/Typography.styled';

export default function About() {
	return (
		<Container>
			<Title>
				Sobre o Mini <Strong>Blog</Strong>{' '}
			</Title>
			<p>
				Este é um projeto consiste em um blog feito com ReactJS no
				front-end e Firebase no back-end.
			</p>
			<p>
				Para acessar o código fonte do projeto, acesse o
				<a
					className='repo__code'
					target='_blank'
					href='https://github.com/lucianosants'
				>
					<span>Clique aqui</span>
					<FiExternalLink size={12} />
				</a>
			</p>
			Crie um novo post clicando no botão abaixo 😆.
			<Link to='/post/create'>Criar post</Link>
		</Container>
	);
}
