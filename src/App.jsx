import './App.css'
import Home from './components/Home.jsx'
import Clan from './components/Clan.jsx'
import characters from './utilities/data.js'
import { useState } from 'react'

function App() {
	const [data, setData] = useState(characters)
	return (
		<>
			<Home data={data} />
			<Clan data={data} />
		</>
	)
}

export default App

// {
//   name: 'Saitama',
//   anime: 'One Punch Man',
//   quote: "I'm just a guy who's a hero for fun.",
//   hair: 'oops',
//   price: 8.5,
//   image: saitama,
// },
