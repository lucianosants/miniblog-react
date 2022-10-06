import { Routes, Route, Navigate } from 'react-router-dom';

import { useAuthValue } from '../context/AuthContext';

import About from '../pages/About';
import CreatePost from '../pages/CreatePost';
import Dashboard from '../pages/dashboard';
import EditPost from '../pages/EditPost';
import Home from '../pages/Home';

import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import Post from '../pages/Post';
import Register from '../pages/Register';
import Search from '../pages/Search';

export function Router({ login }) {
	const { user } = useAuthValue();

	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<About />} />
			<Route path='/search' element={<Search />} />
			<Route path='/posts/:id' element={<Post />} />
			<Route
				path='/login'
				element={!user ? <Login /> : <Navigate to='/' />}
			/>
			<Route
				path='/register'
				element={!user ? <Register /> : <Navigate to='/' />}
			/>
			<Route
				path='/post/create'
				element={user ? <CreatePost /> : <Navigate to='/login' />}
			/>

			<Route
				path='/post/edit/:id'
				element={user ? <EditPost /> : <Navigate to='/login' />}
			/>

			<Route
				path='/dashboard'
				element={user ? <Dashboard /> : <Navigate to='/login' />}
			/>
			<Route path='*' element={<Page404 />} />
		</Routes>
	);
}
