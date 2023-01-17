import React from 'react';

const Tag = ({label, bgColor, color}: { label: string, bgColor?: string, color?: string }) => {
    const colorAlpha = bgColor ? bgColor + 'b3' : ''
    return (
        <div className={'tag'} style={{background: colorAlpha, color: color, borderColor: bgColor}}>
            {label}
        </div>
    );
};

export default Tag;
