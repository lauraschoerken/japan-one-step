import { Deck, DeckName, Decks } from 'models/Deck'
import './DecksComponent.scss'
import { useState } from 'react'

interface Props {
	decks: Decks
}

const DecksComponent: React.FC<Props> = (props) => {
	const [selected, setSelected] = useState<DeckName>('hiragana')
	const active = 'active'
	const desactive = 'desactive'

	const { decks } = props
	console.log('decks =>', decks)
	const onClickDecks = (deckRecived: DeckName) => {
		setSelected(deckRecived)
	}

	return (
		<div className='decks'>
			<div
				className={`deck ${selected === 'hiragana' ? 'selected' : ''}`}
				onClick={() => onClickDecks('hiragana')}>
				あ
			</div>
			<div
				className={`deck ${selected === 'katakana' ? 'selected' : ''}`}
				onClick={() => onClickDecks('katakana')}>
				ア
			</div>
			<div
				className={`deck ${selected === 'kanji' ? 'selected' : ''}`}
				onClick={() => onClickDecks('kanji')}>
				日本
			</div>
		</div>
	)
}

export default DecksComponent
