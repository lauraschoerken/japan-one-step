import Header from 'components/Header/containers/Header'
import './HomeComponent.scss'
import Decks from 'components/Decks/containers/Decks'
import Card from 'components/Card/containers/Card'

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
					<Card />
				</div>
			</div>
		</div>
	)
}

export default HomeComponent
