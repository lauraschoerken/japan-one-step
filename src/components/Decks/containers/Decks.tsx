import { Card, Decks } from 'models/Deck'
import DecksComponent from '../components/DecksComponent'

const card1: Card = { id: '1', japanese_value: 'あ', romanji_value: 'a' }
const card2: Card = { id: '1', japanese_value: 'あ', romanji_value: 'a' }
const card3: Card = { id: '1', japanese_value: 'あ', romanji_value: 'a' }
const card4: Card = { id: '1', japanese_value: 'あ', romanji_value: 'a' }
const card5: Card = { id: '1', japanese_value: 'あ', romanji_value: 'a' }
const card6: Card = { id: '1', japanese_value: 'あ', romanji_value: 'a' }

const decks: Decks = {
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
	return <DecksComponent />
}

export default Decks
