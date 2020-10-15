import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

import { ReactComponent as BrandIcon } from '../../i/brand-icon.svg';
import { ReactComponent as BrandWordmark } from '../../i/brand-wordmark.svg';

export default function Header() {

    return (
        <ParallaxProvider>
            <section className="landing">
                <div className="landing__logo-container">
                    <Parallax className="landing__icon" y={[80, -80]} tagOuter="div">
                        <BrandIcon className="landing__img" alt="fivepixelparallax icon" />
                    </Parallax>
                    <Parallax className="landing__wordmark" y={[120, -120]} tagOuter="div">
                        <BrandWordmark className="landing__img" alt="fivepixelparallax wordmark" />
                    </Parallax>
                    <Parallax className="landing__wordmark" y={[240, -180]} tagOuter="div">
                        <h2 className="landing__intro u-text-center bold">
                            a web development agency based in the UK
                        </h2>
                    </Parallax>
                </div>
            </section>
        </ParallaxProvider>
    );
}