export interface Card {
	id: string
	japanese_value: string
	romanji_value: string
}

export type DeckName = 'hiragana' | 'katakana' | 'kanji'
export interface Deck {
	name: DeckName
	cards: Card[]
}

export interface Decks {
	hiragana: Deck
	katakana: Deck
	kanji: Deck
}
