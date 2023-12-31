import { Deck, Decks as DecksType } from 'models/Deck'
import DecksComponent from '../components/DecksComponent'

interface Props {
	decks: DecksType
	setSelectedDeck: (deck: Deck) => void
	selectedDeck: Deck
}

const Decks: React.FC<Props> = (props) => {
	const { decks, setSelectedDeck, selectedDeck } = props
	return (
		<DecksComponent decks={decks} setSelectedDeck={setSelectedDeck} selectedDeck={selectedDeck} />
	)
}

export default Decks
