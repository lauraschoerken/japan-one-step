import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Deck, Decks } from 'models/Deck'
import type { RootState } from 'stores/store'

interface DecksState {
	value: Decks
}

const initialState: DecksState = {
	value: {} as Decks,
}

export const decks = createSlice({
	name: 'decks',
	initialState,
	reducers: {
		updateDecks: (state, payload: PayloadAction<Deck>) => {
			state.value = { ...state.value, ...payload.payload }
		},
		setDecks: (state, payload: PayloadAction<Decks>) => {
			state.value = payload.payload
		},
	},
})

export const { updateDecks, setDecks } = decks.actions
export default decks.reducer

export const selectDecks = (state: RootState) => state.decks.value
