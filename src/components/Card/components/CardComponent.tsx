import { Card } from 'models/Deck'
import CardButton from './CardButton'
import './CardComponent.scss'
import { difficulties } from 'utils/difficulties'
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
	const [guessedValue, setGuessedValue] = useState(false)
	const [displayAnswer, setDisplayAnswer] = useState('')
	const [card, setCard] = useState(currentCard)
	const { t } = useTranslation()

	let guessValue: string[] = []
	const formatCard = (card: Card) => {
		let formattedValue = ''
		if (card.reverse) {
			guessValue = card.japanese_value
			card.romanji_value.map((romanji) => (formattedValue += `${romanji} `))
		} else {
			guessValue = card.romanji_value
			card.japanese_value.map((japanese) => (formattedValue += `${japanese} `))
		}
		return formattedValue.trim()
	}

	useEffect(() => {
		setCard(currentCard)
		formik.resetForm()
		setGuessedValue(false)
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
		setGuessedValue(true)
		const exists = guessValue.find((guess) => guess === value.guess_value)
		let answer = ''
		guessValue.map((guess) => (answer += `${exists === guess ? `✅` : `❌`} ${guess} `))
		setDisplayAnswer(answer.trim())
	}

	const onValidate = () => {
		formik.resetForm()
		setGuessedValue(false)
		nextCard()
	}

	const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
		if (event.key === 'Enter' && formik) guessedValue ? onValidate() : formik.handleSubmit()
	}

	return (
		<div className='card-main'>
			<div className='show-value'>
				<h2>{formatCard(card)}</h2>
			</div>
			<input
				className='guess-value'
				autoFocus
				type='text'
				value={formik.values.guess_value}
				onChange={(e) => {
					formik.setFieldValue('guess_value', e.currentTarget.value)
				}}
				onKeyDown={handleKeyPress}
			/>
			{guessedValue ? (
				<React.Fragment>
					<div className='guessed-value'>
						<p>{displayAnswer}</p>
					</div>
					<div className='buttons'>
						{difficulties.map((difficulty, index) => (
							<CardButton difficulty={difficulty} key={index} onValidate={onValidate} />
						))}
					</div>
				</React.Fragment>
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
