import React, {CSSProperties, ReactNode} from 'react';

const Card = ({
                  children,
                  vHeight,
                  classCard
              }: { children: ReactNode, vHeight?: boolean, classCard?: string }) => {
    return (
        <div className={`sh card ${vHeight ? 'v-height' : ''} ${classCard ? classCard : ''}`}>
            {children}
        </div>
    );
};

export default Card;
