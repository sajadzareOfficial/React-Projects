import React from 'react';

import Desktop from './Component/Desktop/Desktop';
import Mobile from './Component/Mobile/Mobile';

function Main() {
    return (
        <section className="main">
            <Desktop />
            <Mobile />
        </section>
    );
}

export default Main;
