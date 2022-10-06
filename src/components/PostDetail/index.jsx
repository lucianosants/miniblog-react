import { Link } from 'react-router-dom';

import {
	Thumbnail,
	PostWrapper,
	TitleThumbnail,
	HashTags,
	Hash,
	ImageContainerPost,
} from './PostDetail.styled';

export default function PostDetail({ post }) {
	return (
		<PostWrapper>
			<ImageContainerPost>
				<Thumbnail src={post.image} alt={post.title} />
			</ImageContainerPost>

			<div>
				<div>
					<TitleThumbnail>{post.title}</TitleThumbnail>
					<p>
						Criado por <strong>{post.createdBy}</strong>
					</p>
				</div>

				<HashTags>
					{post.tagsArray.map((tag) => (
						<p key={tag}>
							<Hash>#</Hash>
							{tag}
						</p>
					))}
				</HashTags>

				<Link to={`/posts/${post.id}`}>Ler</Link>
			</div>
		</PostWrapper>
	);
}
