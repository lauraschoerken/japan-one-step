export interface Card {
	id: string
	japanese_value: string
	romanji_value: string
	reverse: boolean
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

export interface DeckSimbol {
	name: DeckName
	simbol: string
}
