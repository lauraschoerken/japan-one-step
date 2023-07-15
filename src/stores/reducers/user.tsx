import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from 'models/User'
import type { RootState } from 'stores/store'

interface UserState {
	value: User
}

const initialState: UserState = {
	value: {} as User,
}

export const user = createSlice({
	name: 'user',
	initialState,
	reducers: {
		updateUser: (state, payload: PayloadAction<User>) => {
			state.value = { ...state.value, ...payload }
		},
		setUser: (state, payload: PayloadAction<User>) => {
			state.value = payload.payload
		},
	},
})

export const { updateUser, setUser } = user.actions
export default user.reducer

export const selectUser = (state: RootState) => state.user.value
