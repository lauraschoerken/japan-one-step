import { Decks } from 'models/Deck'
import { hiragana, kanji, katakana } from 'utils/constants'
import { default as hiraganaCardsMock } from 'mock/hiragana_deck.json'
import { default as katakanaCardsMock } from 'mock/katakana_deck.json'
import { default as kanjiCardsMock } from 'mock/kanji_deck.json'

export const decks: Decks = {
	hiragana: {
		name: hiragana,
		cards: hiraganaCardsMock,
	},
	katakana: {
		name: katakana,
		cards: katakanaCardsMock,
	},
	kanji: {
		name: kanji,
		cards: kanjiCardsMock,
	},
}
