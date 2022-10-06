import { useParams } from 'react-router-dom';
import useFetchDocument from '../../hooks/useFetchDocument';
import {
	Hash,
	HashTags,
	Thumbnail,
	TitleThumbnail,
} from '../../components/PostDetail/PostDetail.styled';
import { Title, Text } from '../../styles/Typography.styled';
import { PostWrapper } from './Post.styled';

export default function Post() {
	const { id } = useParams();
	const { document: post } = useFetchDocument('posts', id);

	return (
		<PostWrapper>
			{post && (
				<>
					<Title>{post.title}</Title>
					<Thumbnail src={post.image} alt={post.title} />
					<Text>
						Postado por <strong>{post.createdBy}</strong>
					</Text>
					<Text>{post.body}</Text>
					<TitleThumbnail>Este post trata-se de:</TitleThumbnail>
					<HashTags>
						{post.tagsArray.map((tag) => (
							<p key={tag}>
								<Hash>#</Hash>
								{tag}
							</p>
						))}
					</HashTags>
				</>
			)}
		</PostWrapper>
	);
}
