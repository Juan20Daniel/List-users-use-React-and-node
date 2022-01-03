import React from 'react';
import './iconNotImg.css';
const IconNotImg = () => {
    return (
        <img alt="icon not img" className='iconNotImg' src="data:image/png;base64,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"/>
    );
}

export default IconNotImg;