import React from 'react';
import { createRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
    <React>
        <Analytics />
        <App />
    </React>
);
