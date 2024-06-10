import React from 'react';
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
    onClick: () => void; // Add the onClick prop
}

const Card: React.FC<CardProps> = ({ id, title, date, content, thumbnail, author, onClick }) => {
    return (
        <div className="card" onClick={onClick}>
            <img src={thumbnail.large} alt={title} className="card-image" />
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
                    <span className="card-date">{new Date(date).toLocaleDateString()}</span>
                </div>
                <button className="learn-more" onClick={(e) => { e.stopPropagation(); onClick(); }}>Learn More</button>
            </div>
        </div>
    );
};

export default Card;