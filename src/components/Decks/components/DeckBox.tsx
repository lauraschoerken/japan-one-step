import { DeckName, DeckNameAndSymbol } from 'models/Deck'

interface Props {
	deckNameAndSymbol: DeckNameAndSymbol
	onClickActive: (deck: DeckName) => void
	isSelected?: boolean
}

const DeckBox: React.FC<Props> = (props) => {
	const { deckNameAndSymbol, onClickActive, isSelected } = props

	return (
		<div
			className={`deck ${isSelected ? 'selected' : ''}`}
			onClick={() => onClickActive(`${deckNameAndSymbol.name}`)}>
			{deckNameAndSymbol.symbol}
		</div>
	)
}

export default DeckBox
