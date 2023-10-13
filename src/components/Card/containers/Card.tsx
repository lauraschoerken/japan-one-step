import { Deck } from 'models/Deck'
import { Card as CardModel } from 'models/Deck'
import CardComponent from '../components/CardComponent'
import { useEffect, useState } from 'react'

interface Props {
	deck: Deck
}

const Card: React.FC<Props> = (props) => {
	const { deck } = props
	const [cards, setCards] = useState<CardModel[]>(deck.cards)
	const [cardIndex, setCardIndex] = useState<number>(0)
	const [currentCard, setCurrentCard] = useState<CardModel>(cards[cardIndex])

	const shuffleDeck = () => {
		const newDeckCards = deck.cards.sort(() => Math.random() - 0.5)
		setCards(newDeckCards)
		setCurrentCard(newDeckCards[0])
	}

	const nextCard = () => {
		const nextCardExists = cards.length - 1 > cardIndex
		if (nextCardExists) {
			const newIndex = cardIndex + 1
			setCardIndex(newIndex)
			setCurrentCard(cards[newIndex])
		}
		if (!nextCardExists) {
			shuffleDeck()
		}
		return
	}

	useEffect(() => {
		shuffleDeck()
	}, [deck])

	return <CardComponent currentCard={currentCard} nextCard={nextCard} />
}

export default Card
