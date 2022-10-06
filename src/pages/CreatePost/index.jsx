import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthValue } from '../../context/AuthContext';
import useInsertDocument from '../../hooks/useInsertDocument';

import { Button } from '../../styles/Button.styled';
import { Subtitle, Text, Title } from '../../styles/Typography.styled';
import {
	FormContainer,
	Form,
	LabelFor,
	InputContainer,
	ImagePreviewContainer,
	ImagePreview,
	BodyInput,
} from '../../styles/Form.styled';

import { HiOutlineHashtag } from 'react-icons/hi';
import { IoLinkOutline, IoCreateOutline, IoBookOutline } from 'react-icons/io5';

export default function CreatePost() {
	const [title, setTitle] = useState('');
	const [image, setImage] = useState('');
	const [body, setBody] = useState('');
	const [tags, setTags] = useState([]);
	const [formError, setFormError] = useState('');

	const { user } = useAuthValue();

	const { insertDocument, response } = useInsertDocument('posts');

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

		insertDocument({
			title,
			image,
			body,
			tagsArray,
			uid: user.uid,
			createdBy: user.displayName,
		});

		navigate('/');
	};

	return (
		<FormContainer>
			<Title>Criar post</Title>

			<Subtitle>
				Escreva sobre o que você quiser, e compartilhe seu conhecimento
				com todo!
			</Subtitle>

			<Form onSubmit={handleSubmit}>
				{response.error && <span className='error'>{error}</span>}
				{formError && <span className='error'>{formError}</span>}

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
						<ImagePreview src={image} title={title} alt={title} />
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
						<span>Criar post</span>
					</Button>
				)}

				{response.loading && (
					<Button type='submit' disabled>
						<span>Aguarde...</span>
					</Button>
				)}
			</Form>
		</FormContainer>
	);
}
