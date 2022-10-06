import useFetchDocuments from '../../hooks/useFetchDocuments';

import { Subtitle, Title } from '../../styles/Typography.styled';
import { HomeContainer, PostsContainer } from './Home.styled';

import PostDetail from '../../components/PostDetail';
import { NavLink } from 'react-router-dom';

export default function Home() {
	const { documents: posts } = useFetchDocuments('posts');

	return (
		<HomeContainer>
			<Title>Veja os nossos posts mais recentes.</Title>

			<PostsContainer>
				{posts &&
					posts.map((post) => (
						<PostDetail key={post.id} post={post} />
					))}
				{posts && posts.length === 0 && (
					<div>
						<Subtitle>Não foram encontrado posts.</Subtitle>
						<NavLink className='button__link' to='/post/create'>
							Criar novo post.
						</NavLink>
					</div>
				)}
			</PostsContainer>
		</HomeContainer>
	);
}
