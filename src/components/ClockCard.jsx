import React, { useState, useEffect } from 'react';
import './ClockCard.css';

const LeftArrowIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 18L9 12L15 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const ClockCard = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timerId);
    }, []);

    const formatDate = (date) => {
        return date.toLocaleDateString('ja-JP', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            timeZone: 'Asia/Tokyo'
        });
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString('ja-JP', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
            timeZone: 'Asia/Tokyo'
        });
    };

    return (
        <a href="https://www.nict.go.jp/JST/JST5.html" target="_blank" rel="noopener noreferrer" className="clock-card-link">
            <div className="clock-card">
                <div className="clock-icon">
                    <LeftArrowIcon />
                </div>
                <div className="datetime-display">
                    <p className="date-string">{formatDate(time)} JST</p>
                    <h2 className="time-string">{formatTime(time)}</h2>
                </div>
            </div>
        </a>
    );
};

export default ClockCard;