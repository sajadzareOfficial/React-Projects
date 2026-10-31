import React from 'react';

import Desktop from './Component/Desktop/Desktop';
import Mobile from './Component/Mobile/Mobile';

function Footer() {
    return (
        <section className="footer">
            <Desktop />
            <Mobile />
        </section>
    );
}

export default Footer;
