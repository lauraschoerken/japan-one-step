import { Deck } from 'models/Deck'
import {
	hiragana,
	hiragana_symbol,
	kanji,
	kanji_symbol,
	katakana,
	katakana_symbol,
} from 'utils/constants'

interface Props {
	deck: Deck
	onClickActive: (deck: Deck) => void
	isSelected?: boolean
}

const DeckBox: React.FC<Props> = (props) => {
	const { deck, onClickActive, isSelected } = props

	return (
		<div className={`deck ${isSelected ? 'selected' : ''}`} onClick={() => onClickActive(deck)}>
			{deck.name === hiragana && hiragana_symbol}
			{deck.name === katakana && katakana_symbol}
			{deck.name === kanji && kanji_symbol}
		</div>
	)
}

export default DeckBox
