import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'stores/hooks/hooks'
import { setUser } from 'stores/reducers/user'
import { setUsers } from 'stores/reducers/users'
import { User } from 'models/User'
import { setDecks } from 'stores/reducers/decks'

function App() {
	const [count, setCount] = useState(0)
	const dispatch = useAppDispatch()
	const user = useAppSelector((state) => state.user.value)
	const users = useAppSelector((state) => state.users.value)

	const laura: User = { id: '123-asd', name: 'Laura', email: 'lauraschorken@gmail.com' }
	const david: User = { id: '456-qwe', name: 'David', email: 'davidhormigafonso@gmail.com' }

	useEffect(() => {
		dispatch(setUser(laura))
		dispatch(setUsers([laura, david]))
		dispatch(
			setDecks({
				hiragana: { name: 'hiragana', cards: [] },
				katakana: { name: 'katakana', cards: [] },
				kanji: { name: 'kanji', cards: [] },
			})
		)
	}, [])

	console.log('user =>', user)
	console.log('users =>', users)

	return (
		<>
			<div>
				<a href='https://vitejs.dev' target='_blank'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://react.dev' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className='card'>
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
		</>
	)
}

export default App
