import './App.css'
import Clan from './components/Clan.jsx'
import Card from './components/Card.jsx'
import { Search } from './components/Search.jsx'
import characters from './utilities/data.js'
import { useState } from 'react'

function App() {
	const [data, setData] = useState(characters)
	const [showClan, setShowClan] = useState(false)

	function handleClick(name, isClanMember) {
		console.log('hi', name, isClanMember)
		const updatedData = data.map((character) => {
			if (character.name === name) {
				return { ...character, isClanMember: !isClanMember }
			}
			return character
		})
		setData(updatedData)
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
				isClanMember={card.isClanMember}
				handleClick={handleClick}
			/>
		)
	})

	const clan = data.map((character, index) => {
		if (character.isClanMember) {
			return (
				<Clan
					key={character.name}
					id={index}
					image={character.image}
					name={character.name}
				/>
			)
		}
	})

	function handleShowClan() {
		setShowClan(!showClan)
	}

	return (
		<>
			<main>
				<h1 className='title'>☯︎ Build Your Anime Clan ☯︎</h1>
				<button className='show-clan-btn' onClick={handleShowClan}>
					{!showClan ? 'Show Clan' : 'Show Characters'}
				</button>
				<Search />

				{/* {showClan ? (
					<section className='clan'>{clan}</section>
				) : (
					<section className='cards'>{cards}</section>
				)} */}
			</main>
		</>
	)
}

export default App

{
	/* <main>
<h1 className='title'>☯︎ Build Your Anime Clan ☯︎</h1>
<Search />
<button className='show-clan-btn' onClick={handleShowClan}>
  {!showClan ? 'Show Clan' : 'Show Characters'}
</button>
{showClan ? (
  <section className='clan'>{clan}</section>
) : (
  <section className='cards'>{cards}</section>
)}
</main>
 */
}
