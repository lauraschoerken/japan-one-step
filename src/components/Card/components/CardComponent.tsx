import CardButton from './CardButton'
import './CardComponent.scss'
import { difficulties } from 'utils/difficulties'

const CardComponent = () => {
	return (
		<div className='card-main'>
			<div className='show-value'>
				<h2>あ</h2>
			</div>
			<input className='guess-value' type='text' />
			<div className='buttons'>
				{difficulties.map((difficulty) => (
					<CardButton difficulty={difficulty} />
				))}
			</div>
		</div>
	)
}

export default CardComponent
