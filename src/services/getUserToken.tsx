import { store } from 'stores/store'

export function getUserToken(): string | undefined {
	const state = store.getState()
	return state.user.value.token
}

export function getUserId() {
	const state = store.getState()
	return state.user.value.id
}
