import React, { useEffect } from 'react';
import { format } from 'date-fns';
import './Modal.css';

interface ModalProps {
    card: {
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
    };
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ card, onClose }) => {
    useEffect(() => {
        // Add no-scroll class to body when modal is open
        document.body.classList.add('no-scroll');
        // Remove no-scroll class from body when modal is closed
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, []);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-button" onClick={onClose}>&times;</span>
                <h2>{card.title}</h2>
                <img src={card.thumbnail.large} alt={card.title} />
                <p>{card.content}</p>
                <div className="card-footer">
                    <div className="card-author">
                        <div>
                            <span className="author-name">{card.author.name}</span>
                            <span className="author-role">{card.author.role}</span>
                        </div>
                    </div>
                    <span className="card-date">{format(new Date(card.date), 'MMM dd, yyyy')}</span>
                </div>
            </div>
        </div>
    );
};

export default Modal;