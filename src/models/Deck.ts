import {
	hiragana,
	hiragana_symbol,
	kanji,
	kanji_symbol,
	katakana,
	katakana_symbol,
} from 'utils/constants'
export interface Card {
	id: string
	japanese_value: string
	romanji_value: string | string[]
	reverse: boolean
}

export type DeckName = typeof hiragana | typeof katakana | typeof kanji
export type DeckSymbol = typeof hiragana_symbol | typeof katakana_symbol | typeof kanji_symbol

export interface Deck {
	name: DeckName
	cards: Card[]
}

export interface Decks {
	hiragana: Deck
	katakana: Deck
	kanji: Deck
}

export interface DeckNameAndSymbol {
	name: DeckName
	symbol: DeckSymbol
}
