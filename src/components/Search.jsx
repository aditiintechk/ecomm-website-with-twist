/* eslint-disable react/prop-types */
import algoliasearch from 'algoliasearch/lite'
import 'instantsearch.css/themes/satellite.css'
import { Hits, InstantSearch, SearchBox, Configure } from 'react-instantsearch'

import { Hit } from './Hit'

const searchClient = algoliasearch(
	'05BDRUAK9Q',
	'426e3e46a593710ce7f74f434d414007'
)

export const Search = () => {
	return (
		<InstantSearch searchClient={searchClient} indexName='data'>
			<Configure hitsPerPage={25} />
			<div className='ais-InstantSearch'>
				<SearchBox placeholder='Search by Name, Anime Or Hair Color' />
				<Hits hitComponent={Hit} />
			</div>
		</InstantSearch>
	)
}
