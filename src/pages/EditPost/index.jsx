import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAuthValue } from '../../context/AuthContext';
import useUpdateDocument from '../../hooks/useUpdateDocument';
import useFetchDocument from '../../hooks/useFetchDocument';

import { Button } from '../../styles/Button.styled';

import {
	FormContainer,
	Form,
	LabelFor,
	InputContainer,
	ImagePreview,
	ImagePreviewContainer,
	BodyInput,
} from '../../styles/Form.styled';
import { Subtitle, Text, Title } from '../../styles/Typography.styled';

import { IoLinkOutline, IoCreateOutline, IoBookOutline } from 'react-icons/io5';
import { HiOutlineHashtag } from 'react-icons/hi';

export default function EditPost() {
	const { id } = useParams();
	const { document: posts } = useFetchDocument('posts', id);

	const [title, setTitle] = useState('');
	const [image, setImage] = useState('');
	const [body, setBody] = useState('');
	const [tags, setTags] = useState([]);
	const [formError, setFormError] = useState('');

	useEffect(() => {
		if (posts) {
			setTitle(posts.title);
			setImage(posts.image);
			setBody(posts.body);

			const textTags = posts.tagsArray.join(', ');

			setTags(textTags);
		}
	}, [posts]);

	const { user } = useAuthValue();

	const { updateDocument, response } = useUpdateDocument('posts');

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormError('');

		try {
			new URL(image);
		} catch (error) {
			setFormError('A imagem precisa ser uma URL.');
			return;
		}

		const tagsArray = tags
			.split(',')
			.map((tag) => tag.trim().toLowerCase());

		if (!title || !image || !body || !tags) {
			setFormError('Todos os campos são obrigatórios.');
			return;
		}

		if (formError) return;

		const data = {
			title,
			image,
			body,
			tagsArray,
			uid: user.uid,
			createdBy: user.displayName,
		};

		updateDocument(id, data);

		navigate('/dashboard');
	};

	return (
		<>
			{posts && (
				<FormContainer>
					<Title>
						Editando post:{' '}
						<strong
							style={{ textDecoration: 'underline 2px solid' }}
						>
							{title}
						</strong>{' '}
					</Title>

					<Subtitle>
						Altere os dados do post como desejar e clique em
						'Salvar'.
					</Subtitle>

					<Form onSubmit={handleSubmit}>
						{response.error && (
							<span className='error'>{error}</span>
						)}
						{formError && (
							<span className='error'>{formError}</span>
						)}

						<LabelFor>
							<span>Titulo:</span>
							<InputContainer>
								<IoCreateOutline size={22} />
								<input
									required
									name='title'
									value={title}
									placeholder='Pense em um nom titulo...'
									onChange={(e) => setTitle(e.target.value)}
								/>
							</InputContainer>
						</LabelFor>

						<LabelFor>
							<span>URl da image:</span>
							<InputContainer>
								<IoLinkOutline size={22} />
								<input
									required
									name='image'
									value={image}
									placeholder='Informe a URL da imagem...'
									onChange={(e) => setImage(e.target.value)}
								/>
							</InputContainer>
						</LabelFor>
						{image && (
							<ImagePreviewContainer>
								<Text>Preview da imagem:</Text>
								<hr />
								<br />
								<ImagePreview
									src={image}
									title={title}
									alt={title}
								/>
							</ImagePreviewContainer>
						)}

						<LabelFor>
							<span>Conteúdo:</span>
							<InputContainer>
								<IoBookOutline size={22} />
								<BodyInput
									required
									name='body'
									value={body}
									placeholder='Insira o conteúdo do post.'
									onChange={(e) => setBody(e.target.value)}
								/>
							</InputContainer>
						</LabelFor>

						<LabelFor>
							<span>Tags:</span>
							<InputContainer>
								<HiOutlineHashtag size={22} />
								<input
									required
									name='tags'
									value={tags}
									placeholder='Insira as tags do post, separadas por vírgula.'
									onChange={(e) => setTags(e.target.value)}
								/>
							</InputContainer>
						</LabelFor>

						{!response.loading && (
							<Button type='submit'>
								<span>Salvar</span>
							</Button>
						)}

						{response.loading && (
							<Button type='submit' disabled>
								<span>Aguarde...</span>
							</Button>
						)}
					</Form>
				</FormContainer>
			)}
		</>
	);
}
