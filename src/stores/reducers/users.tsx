import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from 'models/User'
import type { RootState } from 'stores/store'

interface UsersState {
	value: User[]
}

const initialState: UsersState = {
	value: [] as User[],
}

export const users = createSlice({
	name: 'users',
	initialState,
	reducers: {
		editUsers: (state, payload: PayloadAction<User>) => {
			state.value = state.value.map((user) =>
				user.id === payload.payload.id ? payload.payload : user
			)
		},
		updateUsers: (state, payload: PayloadAction<User[]>) => {
			state.value = [...state.value, ...payload.payload]
		},
		setUsers: (state, payload: PayloadAction<User[]>) => {
			state.value = payload.payload
		},
	},
})

export const { updateUsers, setUsers, editUsers } = users.actions
export default users.reducer

export const selectUsers = (state: RootState) => state.users.value
