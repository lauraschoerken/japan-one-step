import { DeckName, DeckSymbol } from 'models/Deck'

interface Props {
	deckSymbol: DeckSymbol
	onValidate: (deck: DeckName) => void
	isSelected?: boolean
}

const DeckBox: React.FC<Props> = (props) => {
	const { deckSymbol, onValidate, isSelected } = props

	return (
		<div
			className={`deck ${isSelected ? 'selected' : ''}`}
			onClick={() => onValidate(`${deckSymbol.name}`)}>
			{`${deckSymbol.symbol}`}
		</div>
	)
}

export default DeckBox
