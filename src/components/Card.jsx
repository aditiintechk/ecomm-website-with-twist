/* eslint-disable react/prop-types */
export default function Card({
	id,
	name,
	image,
	anime,
	hair,
	price,
	isClanMember,
	handleClick,
}) {
	return (
		<div className='card-container' id={`card-${id}`}>
			<img src={image} alt='' className='card-img' />
			<h4>
				<span>Warrior:</span> {name}
			</h4>
			<h4>
				<span>World:</span> {anime}
			</h4>
			<h4>
				<span>Hair:</span> {hair}
			</h4>
			<h3>
				<span>Price/hr:</span> ${price}
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
		</div>
	)
}
