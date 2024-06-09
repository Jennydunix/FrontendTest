import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import './AnalyticsTable.css';

interface CardData {
  id: string;
  title: string;
}

const AnalyticsTable: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const clicks = useSelector((state: RootState) => state.cards.clicks);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts')
      .then(response => response.json())
      .then(data => setCards(data));
  }, []);

  const getCardTitleById = (id: string) => {
    const card = cards.find(card => card.id === id);
    return card ? card.title : 'Unknown';
  };

  return (
    <div className="analytics-table-container">
      <table className="analytics-table">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Card ID</th>
            <th>Card Title</th>
            <th>Number of Clicks</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(clicks).map(([id, count], index) => (
            <tr key={id}>
              <td>{index + 1}</td>
              <td>{id}</td>
              <td>{getCardTitleById(id)}</td>
              <td>{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnalyticsTable;
