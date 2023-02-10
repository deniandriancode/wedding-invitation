import React from 'react';

function HeaderElement(): React.FC {
    return (
        <div className='py-24 mb-8 bg-[url("/img/header.png")] font-["Butler"] bg-center bg-contain bg-no-repeat'>
            <h1 className='font-bold text-xl underline'>YUYU & YAYA</h1>
        </div>
    );
}

export default HeaderElement;
