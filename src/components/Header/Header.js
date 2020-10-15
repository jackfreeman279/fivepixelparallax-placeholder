import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

import { ReactComponent as BrandIcon } from '../../i/brand-icon.svg';
import { ReactComponent as BrandWordmark } from '../../i/brand-wordmark.svg';

export default function Header() {

    return (
        <ParallaxProvider>
            <section className="header">
                <div className="header__logo-container">
                    <Parallax className="header__icon" y={[80, -80]} tagOuter="div">
                        <BrandIcon className="header__img" alt="fivepixelparallax icon" />
                    </Parallax>
                    <Parallax className="header__wordmark" y={[120, -120]} tagOuter="div">
                        <BrandWordmark className="header__img" alt="fivepixelparallax wordmark" />
                    </Parallax>
                </div>
            </section>
        </ParallaxProvider>
    );
}