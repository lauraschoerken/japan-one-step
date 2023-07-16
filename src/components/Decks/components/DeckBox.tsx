import { DeckName, DeckSimbol } from 'models/Deck'

interface Props {
	deckSimbol: DeckSimbol
	onValidate: (deck: DeckName) => void
	isSelected?: boolean
}

const DeckBox: React.FC<Props> = (props) => {
	const { deckSimbol, onValidate, isSelected } = props

	return (
		<div
			className={`deck ${isSelected ? 'selected' : ''}`}
			onClick={() => onValidate(`${deckSimbol.name}`)}>
			{`${deckSimbol.simbol}`}
		</div>
	)
}

export default DeckBox
