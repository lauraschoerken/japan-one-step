import { Decks } from 'models/Deck'
import './DecksComponent.scss'

interface Props {
	decks: Decks
}

const DecksComponent: React.FC<Props> = (props) => {
	const { decks } = props
	console.log('decks =>', decks)
	return (
		<div>
			<h1>Deck</h1>
		</div>
	)
}

export default DecksComponent
