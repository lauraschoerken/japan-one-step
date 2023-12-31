// import Header from 'components/Header/containers/Header'
import './HomeComponent.scss'
import Decks from 'components/Decks/containers/Decks'
import Card from 'components/Card/containers/Card'
import { useState } from 'react'
import { decks } from 'mock/decks'
import { Deck } from 'models/Deck'
import Header from 'components/Header/containers/Header'

const HomeComponent = () => {
	const [selectedDeck, setSelectedDeck] = useState<Deck>(decks.hiragana)

	return (
		<div className='main'>
			<div className='header'>
				<Header />
			</div>
			<div className='body'>
				<div className='decks'>
					<Decks decks={decks} setSelectedDeck={setSelectedDeck} selectedDeck={selectedDeck} />
				</div>
				<div className='cards'>
					<Card deck={selectedDeck} />
				</div>
			</div>
		</div>
	)
}

export default HomeComponent
