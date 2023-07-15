import { Card } from 'models/Deck'
import CardButton from './CardButton'
import './CardComponent.scss'
import { difficulties } from 'utils/difficulties'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import React, { useState } from 'react'

interface GuessValue {
	guess_value: string
}

const CardComponent = () => {
	const currentCard: Card = { id: '1', japanese_value: 'あ', romanji_value: 'a', reverse: false }
	const [guessedValue, setGuessedValue] = useState('')
	const [card, setCard] = useState(currentCard)
	const { t } = useTranslation()
	const showValue = card.reverse
		? card.romanji_value.trim().toLowerCase()
		: card.japanese_value.trim().toLowerCase()
	const guessValue = card.reverse
		? card.japanese_value.trim().toLowerCase()
		: card.romanji_value.trim().toLowerCase()

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
		console.log('values =>', value.guess_value)
		setGuessedValue(value.guess_value.trim().toLowerCase())
	}

	const onValidate = () => {
		setCard({ ...card, reverse: !card.reverse })
		formik.resetForm()
		setGuessedValue('')
	}

	return (
		<div className='card-main'>
			<div className='show-value'>
				<h2>{showValue}</h2>
			</div>
			<input
				className='guess-value'
				type='text'
				value={formik.values.guess_value}
				onChange={(e) => formik.setFieldValue('guess_value', e.currentTarget.value)}
			/>
			{guessedValue ? (
				<React.Fragment>
					<div className='guessed-value'>
						<p>
							{guessedValue === guessValue ? '✅' : '❌'}
							{guessValue}
						</p>
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
