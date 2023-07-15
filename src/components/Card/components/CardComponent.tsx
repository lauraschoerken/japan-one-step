import CardButton from './CardButton'
import './CardComponent.scss'
export interface Difficulty {
	color: string
	name: string
}

const CardComponent = () => {
	const difficulties: Difficulty[] = [
		{
			name: 'easy',
			color: '#069C56',
		},
		{
			name: 'medium',
			color: '#FF980E',
		},
		{
			name: 'hard',
			color: '#FF681E',
		},
		{
			name: 'not_guessed',
			color: '#D3212C',
		},
	]

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
