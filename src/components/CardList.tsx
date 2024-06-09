import React, { useEffect, useState } from 'react';
import Card from './Card';
import Modal from './Modal';
import { useDispatch } from 'react-redux';
import { incrementClick } from '../store/cardSlice';
import './CardList.css';

interface CardData {
  id: string;
  title: string;
  date: string;
  content: string;
  thumbnail: {
    large: string;
    small: string;
  };
  author: {
    name: string;
    role: string;
  };
}

const CardList: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts')
      .then(response => response.json())
      .then(data => setCards(data));
  }, []);

  const handleCardClick = (card: CardData) => {
    setSelectedCard(card);
    dispatch(incrementClick(card.id));
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="card-list">
      {cards.map(card => (
        <Card key={card.id} {...card} onClick={() => handleCardClick(card)} />
      ))}
      {selectedCard && <Modal card={selectedCard} onClose={closeModal} />}
    </div>
  );
};

export default CardList;
