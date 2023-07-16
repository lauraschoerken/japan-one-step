import { DeckName, Decks } from 'models/Deck'
import './DecksComponent.scss'
import { decksAndSymbol, hiragana } from 'utils/constants'
import DeckBox from './DeckBox'
import { useState } from 'react'

interface Props {
	decks: Decks
}

const DecksComponent: React.FC<Props> = () => {
	const [selected, setSelected] = useState<DeckName>(hiragana)
	const onClickActive = (deckRecived: DeckName) => {
		setSelected(deckRecived)
	}

	return (
		<div className='decks'>
			{decksAndSymbol.map((deckNameAndSymbol, index) => (
				<DeckBox
					deckNameAndSymbol={deckNameAndSymbol}
					key={index}
					onClickActive={onClickActive}
					isSelected={deckNameAndSymbol.name === selected}
				/>
			))}
		</div>
	)
}

export default DecksComponent
