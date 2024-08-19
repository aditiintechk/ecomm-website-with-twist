import './App.css'
import Clan from './components/Clan.jsx'
import Card from './components/Card.jsx'
import characters from './utilities/data.js'
import { useState } from 'react'

function App() {
	const [data, setData] = useState(characters)

	function handleClick(name) {
		console.log('hi', name)
	}

	const cards = data.map((card, index) => {
		return (
			<Card
				key={card.name}
				id={index}
				image={card.image}
				name={card.name}
				anime={card.anime}
				hair={card.hair}
				price={card.price}
				handleClick={handleClick}
			/>
		)
	})

	return (
		<>
			<main>
				<h1 className='title'>☯︎ Build Your Anime Clan ☯︎</h1>
				<section className='cards'>{cards}</section>
				{/* <Clan data={data} /> */}
			</main>
		</>
	)
}

export default App

/* {
  name: 'Goku',
  anime: 'Dragon Ball',
  hair: 'Black',
  price: 12.2,
  image: goku,
  isClanMember: false,
}, */
