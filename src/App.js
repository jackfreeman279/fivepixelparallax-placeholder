import React from 'react';
import './styles/App.scss';

import { ReactComponent as BrandIcon } from './i/brand-icon.svg';
import { ReactComponent as BrandWordmark } from './i/brand-wordmark.svg';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <BrandIcon className="navigation__icon" alt="fivepixelparallax" />
                <BrandWordmark className="navigation__wordmark" alt="fivepixelparallax" />
            </header>
        </div>
    );
}

export default App;
