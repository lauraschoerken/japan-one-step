import { Card, Decks as DecksType } from 'models/Deck'
import DecksComponent from '../components/DecksComponent'

const card1: Card = { id: '1', japanese_value: 'あ', romanji_value: 'a', reverse: false }
const card2: Card = { id: '1', japanese_value: 'あ', romanji_value: 'a', reverse: false }
const card3: Card = { id: '1', japanese_value: 'あ', romanji_value: 'a', reverse: false }
const card4: Card = { id: '1', japanese_value: 'あ', romanji_value: 'a', reverse: false }
const card5: Card = { id: '1', japanese_value: 'あ', romanji_value: 'a', reverse: false }
const card6: Card = { id: '1', japanese_value: 'あ', romanji_value: 'a', reverse: false }

const decks: DecksType = {
	hiragana: {
		name: 'hiragana',
		cards: [card1, card2],
	},
	katakana: {
		name: 'katakana',
		cards: [card3, card4],
	},
	kanji: {
		name: 'kanji',
		cards: [card5, card6],
	},
}

const Decks = () => {
	return <DecksComponent decks={decks} />
}

export default Decks
