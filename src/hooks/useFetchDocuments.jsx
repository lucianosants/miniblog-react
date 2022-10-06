import { useState, useEffect } from 'react';
import {
	collection,
	query,
	orderBy,
	onSnapshot,
	where,
} from 'firebase/firestore';

import { db } from '../firebase/config';

export default function useFetchDocuments(
	docCollection,
	search = null,
	uid = null
) {
	const [documents, setDocuments] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(null);

	const [cancelled, setCancelled] = useState(false);

	useEffect(() => {
		async function loadData() {
			if (cancelled) return;

			setLoading(true);

			const collectionRef = await collection(db, docCollection);

			try {
				let queryElement;

				// search
				// dashboard

				if (search) {
					queryElement = await query(
						collectionRef,
						where('tagsArray', 'array-contains', search),
						orderBy('createdAt', 'desc')
					);
				} else if (uid) {
					queryElement = await query(
						collectionRef,
						where('uid', '==', uid),
						orderBy('createdAt', 'desc')
					);
				} else {
					queryElement = await query(
						collectionRef,
						orderBy('createdAt', 'desc')
					);
				}

				await onSnapshot(queryElement, (querySnapshot) => {
					setDocuments(
						querySnapshot.docs.map((doc) => ({
							id: doc.id,
							...doc.data(),
						}))
					);
				});

				setLoading(false);
			} catch (error) {
				console.log(error);
				setError(error.message);

				setLoading(false);
			}
		}

		loadData();
	}, [docCollection, search, uid, cancelled]);

	useEffect(() => {
		return () => setCancelled(true);
	}, []);

	return { documents, loading, error };
}
