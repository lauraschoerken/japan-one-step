import { Deck, Decks as DecksType } from 'models/Deck'
import DecksComponent from '../components/DecksComponent'

interface Props {
	decks: DecksType
	setSelectedDeck: (deck: Deck) => void
}

const Decks: React.FC<Props> = (props) => {
	const { decks, setSelectedDeck } = props
	return <DecksComponent decks={decks} setSelectedDeck={setSelectedDeck} />
}

export default Decks
