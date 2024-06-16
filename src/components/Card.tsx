import React from 'react';
import { format } from 'date-fns';
import './Card.css';

interface CardProps {
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
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ id, title, date, content, thumbnail, author, onClick }) => {
  const formattedDate = format(new Date(date), 'MMM dd, yyyy');

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevent card click event from firing
    onClick();
  };

  return (
    <div className="card" onClick={onClick}>
      <div className="card-image-wrapper">
        <img src={thumbnail.large} alt={title} className="card-image" />
        <button className="learn-more" onClick={handleButtonClick}>Learn More</button>
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-content">{content}</p>
        <div className="card-footer">
          <div className="card-author">
            <div>
              <span className="author-name">{author.name}</span>
              <span className="author-role">{author.role}</span>
            </div>
          </div>
          <span className="card-date">{formattedDate}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
