import { Link } from 'react-router-dom';

import {
	DashboardContainer,
	NoContent,
	PostCard,
	DashboardContent,
	MenuPost,
	PostHeader,
	Infos,
	ImageContainer,
} from './Dashboard.styled';

import {
	HashTags,
	Hash,
	TitleThumbnail,
} from '../../components/PostDetail/PostDetail.styled';
import { ButtonDelete } from '../../styles/Button.styled';
import { Text, Title } from '../../styles/Typography.styled';

import { useAuthValue } from '../../context/AuthContext';
import useFetchDocuments from '../../hooks/useFetchDocuments';
import useDeleteDocument from '../../hooks/useDeleteDocument';

export default function Dashboard() {
	const { user } = useAuthValue();
	const uid = user.uid;

	const { documents: posts } = useFetchDocuments('posts', null, uid);

	const { deleteDocument } = useDeleteDocument('posts');

	return (
		<DashboardContainer>
			<h2>Dashboard</h2>

			<Text>Gerencie os seus posts</Text>
			{posts && posts.length === 0 ? (
				<NoContent>
					<Title>Você ainda não tem posts</Title>
					<Link to='/post/create'>Criar</Link>
				</NoContent>
			) : (
				<>
					<DashboardContent>
						{posts &&
							posts.map((post) => (
								<PostCard key={post.id}>
									<PostHeader>
										<Infos>
											<TitleThumbnail>
												{post.title}
											</TitleThumbnail>

											<HashTags>
												{post.tagsArray.map((tag) => (
													<p key={tag}>
														<Hash>#</Hash>
														{tag}
													</p>
												))}
											</HashTags>
										</Infos>

										<ImageContainer>
											<img
												src={post.image}
												alt={post.title}
											/>
										</ImageContainer>
									</PostHeader>
									<MenuPost>
										<Link to={`/posts/${post.id}`}>
											Ver
										</Link>
										<Link to={`/post/edit/${post.id}`}>
											Editar
										</Link>
										<ButtonDelete
											onClick={() =>
												deleteDocument(post.id)
											}
										>
											Excluir
										</ButtonDelete>
									</MenuPost>
								</PostCard>
							))}
					</DashboardContent>
				</>
			)}
		</DashboardContainer>
	);
}
