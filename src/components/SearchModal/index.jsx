import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoCloseCircleOutline, IoSearchOutline } from 'react-icons/io5';

import {
	Form,
	InputContainer,
	LabelFor,
	WrapperInputSearch,
} from '../../styles/Form.styled';
import {
	HeaderModal,
	ModalContainer,
	SearchModalContainer,
} from './Search.styled';

export default function SearchModal({ onCloseSearch, onAfterSearch }) {
	const [query, setQuery] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (query) {
			navigate(`/search?q=${query}`);
		}

		onAfterSearch();
	};

	return (
		<SearchModalContainer>
			<ModalContainer>
				<HeaderModal>
					<button onClick={onCloseSearch}>
						<IoCloseCircleOutline size={30} />
					</button>
				</HeaderModal>
				<Form onSubmit={handleSubmit}>
					<LabelFor>
						<WrapperInputSearch>
							<InputContainer>
								<IoSearchOutline size={22} />

								<input
									type='search'
									value={query}
									placeholder='Busque por tags...'
									onChange={(e) => setQuery(e.target.value)}
									autoCapitalize='off'
								/>
							</InputContainer>
							<button className='button__link'>
								<IoSearchOutline size={22} />
							</button>
						</WrapperInputSearch>
					</LabelFor>
				</Form>
			</ModalContainer>
		</SearchModalContainer>
	);
}
