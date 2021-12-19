import React from 'react';
import './Cell.css';

interface CellProps {
    title?: string;
    isActive?: boolean;
    clickHandler?: React.MouseEventHandler<HTMLDivElement>;
}

function Cell(props: CellProps) {
    const { title, isActive, clickHandler } = props;
    const classNames = ['cell'];

    if (!title) {
        classNames.push('cell__empty');
    }
    if (isActive) {
        classNames.push('cell__active');
    }
    return (
        <div className={classNames.join(' ')} onClick={clickHandler}>
            {title}
        </div>
    );
}

export default Cell;
