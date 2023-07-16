import { DeckName, Decks } from 'models/Deck'
import './DecksComponent.scss'
import { decksAndSimbol } from 'utils/constants'
import DeckBox from './DeckBox'
import { useState } from 'react'

interface Props {
	decks: Decks
}

const DecksComponent: React.FC<Props> = () => {
	const [selected, setSelected] = useState<DeckName>('hiragana')
	const onValidate = (deckRecived: DeckName) => {
		setSelected(deckRecived)
	}

	return (
		<div className='decks'>
			{decksAndSimbol.map((deckSimbol, index) => (
				<DeckBox
					deckSimbol={deckSimbol}
					key={index}
					onValidate={onValidate}
					isSelected={deckSimbol.name === selected}
				/>
			))}
		</div>
	)
}

export default DecksComponent
