import { useState, useEffect, useReducer } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

const initialState = {
	loading: null,
	error: null,
};

const insertReducer = (state, action) => {
	switch (action.type) {
		case 'LOADING':
			return { loading: true, error: null };
		case 'INSERTED_DOC':
			return { loading: false, error: null };
		case 'ERROR':
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export default function useInsertDocument(docCollection) {
	const [response, dispatch] = useReducer(insertReducer, initialState);
	const [cancelled, setCancelled] = useState(false);

	const checkCancelBeforeDispatch = (action) => {
		if (!cancelled) {
			dispatch(action);
		}
	};

	const insertDocument = async (document) => {
		checkCancelBeforeDispatch({
			type: 'LOADING',
		});

		try {
			const newDocument = { ...document, createdAt: Timestamp.now() };

			const insertedDocument = await addDoc(
				collection(db, docCollection),
				newDocument
			);

			checkCancelBeforeDispatch({
				type: 'INSERTED_DOC',
				payload: insertedDocument,
			});

			console.log('teste de try', insertedDocument);
		} catch (error) {
			checkCancelBeforeDispatch({
				type: 'ERROR',
				payload: error.message,
			});

			console.log('teste de error', error.message);
		}
	};

	useEffect(() => {
		return () => setCancelled(true);
	}, []);

	return { insertDocument, response };
}
