import { useEffect, useState } from 'react';

function App() {
	const API_URL = import.meta.env.VITE_API_URL;
	
	const [message, setMessage] = useState('');

	useEffect(() => {
		fetch(`${API_URL}/message`)
			.then((response) => response.json())
			.then((data) => {
				setMessage(data.message);
			});
	}, []);

	return (
		<h1>{message}</h1>
	);
}

export default App;