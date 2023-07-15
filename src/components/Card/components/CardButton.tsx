import { useTranslation } from 'react-i18next'
import { Difficulty } from './CardComponent'

interface Props {
	difficulty: Difficulty
}

const CardButton: React.FC<Props> = (props) => {
	const { difficulty } = props
	const { t } = useTranslation()

	return (
		<button style={{ backgroundColor: difficulty.color }} className='button'>
			{t(`card.buttons.${difficulty.name}.name`)}
		</button>
	)
}

export default CardButton
