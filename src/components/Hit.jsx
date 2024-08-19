/* eslint-disable react/prop-types */
import { Highlight } from 'react-instantsearch'

export const Hit = ({ hit }) => {
	function handleClick(name, isClanMember) {
		console.log(name, isClanMember)
	}
	return (
		<div className='card-container'>
			<img src={hit.image} alt='' className='card-img' />
			<h4>
				<span>Warrior:</span>
				<Highlight attribute='name' hit={hit} />
			</h4>
			<h4>
				<span>World:</span>
				<Highlight attribute='anime' hit={hit} />
			</h4>
			<h4>
				<span>Hair:</span>
				<Highlight attribute='hair' hit={hit} />
			</h4>
			<h3>
				<span>Price/hr:</span> $
				<Highlight attribute='price' hit={hit} />
			</h3>
			<button
				className='add-btn'
				onClick={() => handleClick(hit.name, hit.isClanMember)}
				style={{
					color: hit.isClanMember ? 'red' : 'black',
					paddingRight: hit.isClanMember ? '30px' : '',
					paddingLeft: hit.isClanMember ? '30px' : '',
				}}
			>
				{hit.isClanMember ? 'Remove' : 'Add to Clan'}
			</button>
		</div>
	)
}
/* ;<div className='card-container' id={`card-${id}`}>
	<img src={hit.image} alt='' className='card-img' />
	<h4>
		<span>Warrior:</span> {hit.name}
		<Highlight attribute='name' hit={hit} />
	</h4>
	<h4>
		<span>World:</span> {hit.anime}
		<Highlight attribute='anime' hit={hit} />
	</h4>
	<h4>
		<span>Hair:</span> {hit.hair}
		<Highlight attribute='hair' hit={hit} />
	</h4>
	<h3>
		<span>Price/hr:</span> ${hit.price}
		<Highlight attribute='price' hit={hit} />
	</h3>
	<button
		className='add-btn'
		onClick={() => handleClick(name, isClanMember)}
		style={{
			color: isClanMember ? 'red' : 'black',
			paddingRight: isClanMember ? '30px' : '',
			paddingLeft: isClanMember ? '30px' : '',
		}}
	>
		{isClanMember ? 'Remove' : 'Add to Clan'}
	</button>
</div> */
