import React from 'react';
import './src/css/style.css';

export function Section1() {
    return (
        <div className="section__1">
            <h1>I'M Christian</h1>
            <p>Section 1 content...</p>
            <img src="./src/images/myIcon.png" className="mb-11.5 h-6 not-dark:hidden" alt="Tailwind Play" />
        </div>
    );
}