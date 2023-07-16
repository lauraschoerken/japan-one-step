import { DeckSymbol } from 'models/Deck'

export const hiragana = 'hiragana'
export const katakana = 'katakana'
export const kanji = 'kanji'

export const hiragana_symbol = 'あ'
export const katakana_symbol = 'ア'
export const kanji_symbol = '日本'

export const decksAndSymbol: DeckSymbol[] = [
	{ name: hiragana, symbol: hiragana_symbol },
	{ name: katakana, symbol: katakana_symbol },
	{ name: kanji, symbol: kanji_symbol },
]
