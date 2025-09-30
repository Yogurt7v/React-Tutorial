import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Header } from './Header';

window.addEventListener('load', () => {
    const container = document.getElementById('react_root');
    if (container) {
        const root = createRoot(container);
        root.render(<Header />);
    }
})



 