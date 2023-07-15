import { Difficulty } from 'models/Difficulty'
import { useTranslation } from 'react-i18next'

interface Props {
	difficulty: Difficulty
	onValidate: () => void
}

const CardButton: React.FC<Props> = (props) => {
	const { difficulty, onValidate } = props
	const { t } = useTranslation()

	return (
		<button
			type='submit'
			style={{ backgroundColor: difficulty.color }}
			className='button'
			onClick={onValidate}>
			{t(`card.buttons.${difficulty.name}.name`)}
		</button>
	)
}

export default CardButton
