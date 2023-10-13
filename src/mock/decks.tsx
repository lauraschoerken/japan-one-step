import { Card as CardModel } from 'models/Deck'
import { Decks } from 'models/Deck'
import { hiragana, kanji, katakana } from 'utils/constants'
import { default as hiraganaCardsMock } from 'mock/hiragana_deck.json'

const card3: CardModel = { id: '1', japanese_value: 'ア', romanji_value: 'a', reverse: false }
const card4: CardModel = { id: '1', japanese_value: 'アア', romanji_value: 'a', reverse: false }
const card5: CardModel = { id: '1', japanese_value: '日本', romanji_value: 'a', reverse: false }
const card6: CardModel = { id: '1', japanese_value: '本日', romanji_value: 'a', reverse: false }

export const decks: Decks = {
	hiragana: {
		name: hiragana,
		cards: hiraganaCardsMock,
	},
	katakana: {
		name: katakana,
		cards: [card3, card4],
	},
	kanji: {
		name: kanji,
		cards: [card5, card6],
	},
}
