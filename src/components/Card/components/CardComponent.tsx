import { Card } from 'models/Deck'
// import CardButton from './CardButton'
import './CardComponent.scss'
// import { difficulties } from 'utils/difficulties'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import React, { useEffect, useState } from 'react'

interface GuessValue {
	guess_value: string
}

interface Props {
	currentCard: Card
	nextCard: () => void
}

const CardComponent: React.FC<Props> = (props) => {
	const { currentCard, nextCard } = props
	const [guessedValue, setGuessedValue] = useState('')
	const [card, setCard] = useState(currentCard)
	const { t } = useTranslation()
	const showValue = card.reverse
		? card.romanji_value.trim().toLowerCase()
		: card.japanese_value.trim().toLowerCase()
	const guessValue = card.reverse
		? card.japanese_value.trim().toLowerCase()
		: card.romanji_value.trim().toLowerCase()

	useEffect(() => {
		setCard(currentCard)
		formik.resetForm()
		setGuessedValue('')
	}, [currentCard])

	const formik = useFormik({
		initialValues: {
			guess_value: '',
		},
		validationSchema: Yup.object().shape({
			guess_value: Yup.string().required(t('errors.required')),
		}),
		onSubmit: (value: GuessValue) => {
			submit(value)
		},
	})

	const submit = (value: GuessValue) => {
		setGuessedValue(value.guess_value.trim().toLowerCase())
	}

	const onValidate = () => {
		formik.resetForm()
		setGuessedValue('')
		nextCard()
	}

	const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
		if (event.key === 'Enter' && formik) guessedValue ? onValidate() : formik.handleSubmit()
	}

	return (
		<div className='card-main'>
			<div className='show-value'>
				<h2>{showValue}</h2>
			</div>
			<input
				className='guess-value'
				autoFocus
				type='text'
				value={formik.values.guess_value}
				onChange={(e) => formik.setFieldValue('guess_value', e.currentTarget.value)}
				onKeyDown={handleKeyPress}
			/>
			{/* TODO: COMMENTED FOR MVP RELEASE */}
			{guessedValue ? (
				// <React.Fragment>
				// 	<div className='guessed-value'>
				// 		<p>
				// 			{guessedValue === guessValue ? '✅' : '❌'}
				// 			{guessValue}
				// 		</p>
				// 	</div>
				// 	<div className='buttons'>
				// 		{difficulties.map((difficulty, index) => (
				// 			<CardButton difficulty={difficulty} key={index} onValidate={onValidate} />
				// 		))}
				// 	</div>
				// </React.Fragment>
				<div className='guessed-value' style={{ flexDirection: 'column' }}>
					<p>
						{guessedValue === guessValue ? '✅' : '❌'}
						{guessValue}
					</p>
					<button className='submit' type='submit' onClick={onValidate}>
						Next
					</button>
				</div>
			) : (
				<div className='guessed-value'>
					<button className='submit' type='submit' onClick={() => formik.handleSubmit()}>
						Submit
					</button>
				</div>
			)}
		</div>
	)
}

export default CardComponent
