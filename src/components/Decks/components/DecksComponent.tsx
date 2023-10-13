import { Deck, DeckName, Decks } from 'models/Deck'
import './DecksComponent.scss'
import { hiragana } from 'utils/constants'
import DeckBox from './DeckBox'
import { useState } from 'react'

interface Props {
	decks: Decks
	setSelectedDeck: (deck: Deck) => void
}

const DecksComponent: React.FC<Props> = (props) => {
	const { decks, setSelectedDeck } = props
	const [selected, setSelected] = useState<DeckName>(hiragana)
	const onClickActive = (deck: Deck) => {
		setSelectedDeck(deck)
		setSelected(deck.name)
	}

	return (
		<div className='decks'>
			{Object.values(decks).map((deck, index) => (
				<DeckBox
					deck={deck}
					key={index}
					onClickActive={onClickActive}
					isSelected={deck.name === selected}
				/>
			))}
		</div>
	)
}

export default DecksComponent
