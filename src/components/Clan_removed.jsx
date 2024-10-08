/* eslint-disable react/prop-types */
export default function Clan({ id, name, image }) {
	return (
		<div className='clan-container' id={`clan-${id}`}>
			<img src={image} alt='' className='clan-img' />
			<h4>{name}</h4>
		</div>
	)
}
