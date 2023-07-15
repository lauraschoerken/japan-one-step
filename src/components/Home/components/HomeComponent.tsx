import Header from 'components/Header/containers/Header'
import './HomeComponent.scss'
import Decks from 'components/Decks/containers/Decks'

const HomeComponent = () => {
	return (
		<div className='main'>
			<div className='header'>
				<Header />
			</div>
			<div className='body'>
				<div className='decks'>
					<Decks />
				</div>
				<div className='cards'>
					<h1>Cards</h1>
				</div>
			</div>
		</div>
	)
}

export default HomeComponent
