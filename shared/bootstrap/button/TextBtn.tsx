import React, {ReactChild} from 'react';

const TextBtn = ({clickHandler, children}: { clickHandler: () => void, children: ReactChild }) => {
    return (
        <label className={'text-btn text-primary'} onClick={clickHandler}>{children}</label>
    );
};

export default TextBtn;
