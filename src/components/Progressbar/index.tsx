import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ProgressbarElement = styled.div`
    position: relative;
    overflow: hidden;
    display: block;
    border-radius: 8px;
    background: ${props => props.backgroundColor};
    height: ${props => props.height};

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        transition: 0.3s ease width;
        background-color: ${props => props.progressColor};
        width: ${props => props.progress}%;
        height: ${props => props.height};
    }
`;

interface ProgressbarProps {
    progress: number
    backgroundColor?: string
    progressColor?: string
    height?: string
}

const ProgressbarDefaults = {
    progress: 0,
    backgroundColor: '#EEE',
    progressColor: '#009DFF',
    height: '7px',
}

/**
 * Displaying a 0-100 value in a progressbar.
 * 
 * @param props {Object} 
 * @returns 
 */
const Progressbar: React.FC<ProgressbarProps> = props => {
    const maxValue = 100,
        minValue = 0,
        incrementVal = 10;
    const [progress, setProgress] = useState(props.progress);

    useEffect(() => setProgress(progress), [progress]);

    const onIncreaseBtnClick = () => {
        (progress + incrementVal) <= maxValue && setProgress(progress + incrementVal);
    };

    const onDecreaseBtnClick = () => {
        (progress - incrementVal) >= minValue && setProgress(progress - incrementVal);
    };

    return (
        <React.Fragment>
                <ProgressbarElement
                    progress={progress}
                    backgroundColor={props.backgroundColor}
                    progressColor={props.progressColor}
                    height={props.height}
                />
                <button onClick={onDecreaseBtnClick}>Decrease</button>
                <button onClick={onIncreaseBtnClick}>Increase</button>
        </React.Fragment>
    );
}

Progressbar.defaultProps = ProgressbarDefaults;


export { Progressbar }