import { useState } from 'react';
import Game, { SLIDE_DIRECTION } from '15-puzzle-game-logic';
import './Grid.css';
import Cell from '../Cell/Cell';

const game = new Game();
printCurrentState(game);

export default function Grid() {
    const grid = game.getGrid();

    const [, setGridHash] = useState(grid.join('-'));

    const activeCells = Object.values(game.getTransition());
    const cellComponents = grid.map((val, index) => {
        const title = index === game.getEmptyCellIndex() ? '' : val.toString();
        const isActive = activeCells.includes(index);
        const onCellClick = () => {
            console.debug('Click on Cell with value: ', val);
            if (!isActive) {
                return;
            }
            const actualTransition = Object.entries(game.getTransition()).find((el) => el[1] === index);
            if (actualTransition) {
                const direction = actualTransition[0] as SLIDE_DIRECTION;
                game.doSlide(direction);
                setGridHash(game.getGrid().join('-'));
                printCurrentState(game);
            }
        };
        return <Cell key={val} title={title} isActive={isActive} clickHandler={onCellClick} />;
    });
    return <div className="grid">{cellComponents}</div>;
}

function printCurrentState(g: Game): void {
    console.debug('-'.repeat(33));
    let rowStart = 0;
    let rowEnd = g.getScale();
    while (rowEnd <= g.getGrid().length) {
        console.debug('|\t', g.getGrid().slice(rowStart, rowEnd).join('\t|\t'), '\t|\n');
        console.debug('-'.repeat(33));
        rowStart = rowEnd;
        rowEnd += g.getScale();
    }
    console.debug('Empty Cell: ', g.getEmptyCellIndex());
    console.debug('Transition: ', g.getTransition(), '\n');
}
