import useFetchDocuments from '../../hooks/useFetchDocuments';

import useQuery from '../../hooks/useSearch';

import PostDetail from '../../components/PostDetail';
import { Link } from 'react-router-dom';
import { SearchContainer, Wrapper } from './Search.styled';

export default function Search() {
	const query = useQuery();
	const search = query.get('q');

	const { documents: posts } = useFetchDocuments('posts', search);

	return (
		<SearchContainer>
			<Wrapper>
				<h2>Search</h2>
				<div>
					{posts && posts.length === 0 && (
						<>
							<p>
								Não foram encontrados posts a partir da sua
								busca...
							</p>
							<Link className='button__link' to='/'>
								Voltar
							</Link>
						</>
					)}
					{posts &&
						posts.map((post) => (
							<PostDetail key={post.id} post={post} />
						))}
				</div>
			</Wrapper>
		</SearchContainer>
	);
}
