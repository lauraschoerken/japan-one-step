import { hiragana, kanji, katakana } from "utils/constants"
export interface Card {
	id: string
	japanese_value: string
	romanji_value: string
	reverse: boolean
}

export type DeckName = typeof hiragana | typeof katakana | typeof kanji
export interface Deck {
	name: DeckName
	cards: Card[]
}

export interface Decks {
	hiragana: Deck
	katakana: Deck
	kanji: Deck
}

export interface DeckSymbol {
	name: DeckName
	symbol: string
}
