import { CODES, COLUMNS_COUNT, DEFAULT_WIDTH } from './table.consts';

function getWidth(state, index) {
    // return `${state[index] || DEFAULT_WIDTH}px`;
    return state[index];
}

function toCell(state, row) {
    return function (_, col) {
        const width = getWidth(state.colState, col);
        return `
      <div 
        class="cell" 
        contenteditable 
        data-col="${col}"
        data-type="cell"
        data-id="${row}:${col}"
        ${width ? `style = width:${width}px` : ''}
      ></div>
    `;
    };
}

function toColumn({ col, index, width }) {
    return `
    <div 
      class="column" 
      data-type="resizable" 
      data-col="${index}"
      ${width ? `style = width:${width}px` : ''}
    >
      ${col}
      <div class="col-resize" data-resize="col"></div>
    </div>
  `;
} // style="width: ${width}"

function createRow(content, index, height) {
    const resize = index
        ? '<div class="row-resize" data-resize="row"></div>'
        : '';

    return `
    <div class="row" data-type="resizable"
    ${index ? `data-row=${index}` : ''}
    ${height ? `style = height:${height}px` : ''} >
      <div class="row-info">
      ${index || ''}
      ${resize}
      </div>
      <div class="row-data">${content}</div>
    </div>
  `;
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index);
}

function withWidthFrom(state) {
    return function (col, index) {
        return {
            col,
            index,
            width: getWidth(state.colState, index),
        };
    };
}

export function createTable(rowsCount = 15, state = {}) {
    const rows = [];

    const cols = new Array(COLUMNS_COUNT)
        .fill('')
        .map(toChar)
        .map(withWidthFrom(state))
        .map(toColumn)
        .join('');
    // console.log(
    //     new Array(colsCount).fill('').map(toChar).map(toColumn).join(''),
    // );
    rows.push(createRow(cols));

    for (let row = 0; row < rowsCount; row += 1) {
        const cells = new Array(COLUMNS_COUNT)
            .fill('')
            .map(toCell(state, row))
            .join('');
        const rowHeight = state.rowState[row + 1];
        rows.push(createRow(cells, row + 1, rowHeight));
    }

    return rows.join('');
}
