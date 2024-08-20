/* eslint-disable react/prop-types */
import algoliasearch from 'algoliasearch/lite'
import 'instantsearch.css/themes/satellite.css'
import { Hits, InstantSearch, SearchBox, Configure } from 'react-instantsearch'

import { Hit } from './Hit'

const searchClient = algoliasearch(
	'OLS58B54A6',
	'1e0911843ba71cec7d0585770610566b'
)

export const Search = () => {
	return (
		<InstantSearch searchClient={searchClient} indexName='data_New'>
			<Configure hitsPerPage={25} />
			<div className='ais-InstantSearch'>
				<SearchBox placeholder='Search by Name, Anime Or Hair Color' />
				<Hits hitComponent={Hit} />
			</div>
		</InstantSearch>
	)
}
