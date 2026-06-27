import React, { useState, useEffect } from 'react';
import './ClockCard.css';

const pad = (value) => String(value).padStart(2, '0');

const tokyoFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Tokyo',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
});

const getTokyoParts = (date) => {
    const parts = Object.fromEntries(
        tokyoFormatter.formatToParts(date).map((part) => [part.type, part.value])
    );

    return {
        year: Number(parts.year),
        month: Number(parts.month),
        day: Number(parts.day),
        hour: Number(parts.hour),
        minute: Number(parts.minute),
        second: Number(parts.second),
    };
};

const ClockFace = ({ hour, minute, second }) => {
    const hourAngle = ((hour % 12) * 30) + (minute * 0.5);
    const minuteAngle = (minute * 6) + (second * 0.1);
    const secondAngle = second * 6;

    return (
        <div
            className="clock-face-shell"
            style={{
                '--clock-hour-angle': `${hourAngle}deg`,
                '--clock-minute-angle': `${minuteAngle}deg`,
                '--clock-second-angle': `${secondAngle}deg`,
            }}
            aria-hidden="true"
        >
            <span className="clock-face-dot dot-second"></span>
            <span className="clock-hand clock-hand-hour"></span>
            <span className="clock-hand clock-hand-minute"></span>
            <span className="clock-hand-pin"></span>
        </div>
    );
};

const ClockCard = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timerId);
    }, []);

    const tokyoTime = getTokyoParts(time);

    return (
        <a href="https://www.nict.go.jp/JST/JST5.html" target="_blank" rel="noopener noreferrer" className="clock-card-link">
            <div className="clock-card">
                <ClockFace hour={tokyoTime.hour} minute={tokyoTime.minute} second={tokyoTime.second} />
                <div className="datetime-display">
                    <p className="date-string">{tokyoTime.year}/{tokyoTime.month}/{tokyoTime.day} JST</p>
                    <h2 className="time-string">
                        <span>{pad(tokyoTime.hour)}:{pad(tokyoTime.minute)}</span>
                        <span className="time-seconds">:{pad(tokyoTime.second)}</span>
                    </h2>
                    <p className="timezone-string">JST / UTC +9:00</p>
                </div>
            </div>
        </a>
    );
};

export default ClockCard;
