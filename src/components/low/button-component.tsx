import React, {FC} from 'react';

interface buttonComponent {
    border: string;
    backgroundColor: string;
    borderRadius: string;
    content: string,
    padding: string,
    margin?: string,
    color?: string
}

const ButtonComponent:FC<buttonComponent> = ({border, backgroundColor, borderRadius, content, padding, margin, color}) => {
    return (
        <button style={{border: `${border}`, 
        background: backgroundColor, 
        borderRadius: borderRadius, 
        padding: `10px ${padding}`, 
        margin: margin || '0 auto',
        color: color
        }}>
            {content}
        </button>
    );
};

export default ButtonComponent;