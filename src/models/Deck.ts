export interface Card {
	id: string
	japanese_value: string
	romanji_value: string
	reverse: boolean
}

export interface Deck {
	name: 'hiragana' | 'katakana' | 'kanji'
	cards: Card[]
}

export interface Decks {
	hiragana: Deck
	katakana: Deck
	kanji: Deck
}
