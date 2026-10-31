import React from 'react';

import Desktop from './Component/Desktop/Desktop';
import Mobile from './Component/Mobile/Mobile';

function Header() {
    return (
        <div className=" w-4/5 top-3 rounded-md fixed bg-DarkHeaderColor h-10">
           <Desktop/>
           <Mobile/>
        </div>
    );
}

export default Header;
