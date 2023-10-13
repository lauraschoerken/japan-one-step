import { Deck, Decks } from 'models/Deck'
import './DecksComponent.scss'
import DeckBox from './DeckBox'

interface Props {
	decks: Decks
	setSelectedDeck: (deck: Deck) => void
	selectedDeck: Deck
}

const DecksComponent: React.FC<Props> = (props) => {
	const { decks, setSelectedDeck, selectedDeck } = props
	const onClickActive = (deck: Deck) => {
		setSelectedDeck(deck)
	}

	return (
		<div className='decks'>
			{Object.values(decks).map((deck, index) => (
				<DeckBox
					deck={deck}
					key={index}
					onClickActive={onClickActive}
					isSelected={selectedDeck.name === deck.name}
				/>
			))}
		</div>
	)
}

export default DecksComponent
