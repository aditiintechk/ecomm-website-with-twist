/* eslint-disable react/prop-types */
import { Highlight } from 'react-instantsearch'

export const Hit = ({ hit }) => {
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
		</div>
	)
}
