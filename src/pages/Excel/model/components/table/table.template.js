import { CODES, COLUMNS_COUNT } from './table.consts';

function toCell(row) {
    return function (_, col) {
        return `
      <div 
        class="cell" 
        contenteditable 
        data-col="${col}"
        data-type="cell"
        data-id="${row}:${col}"
      >333</div>
    `;
    };
}

function toColumn(col, index) {
    return `
    <div class="column" data-type="resizable" data-col="${index}">${col}
          <div class="col-resize" data-resize="col"></div>
    </div>
  `.trim();
}

function createRow(index, content) {
    const resize = index
        ? '<div class="row-resize" data-resize="row"></div>'
        : '';

    return `
    <div class="row" data-type="resizable">
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

export function createTable(rowsCount = 15) {
    const rows = [];

    const cols = new Array(COLUMNS_COUNT)
        .fill('')
        .map(toChar)
        .map(toColumn)
        .join('');
    // console.log(
    //     new Array(colsCount).fill('').map(toChar).map(toColumn).join(''),
    // );
    rows.push(createRow(null, cols));

    for (let i = 0; i < rowsCount; i += 1) {
        const cells = new Array(COLUMNS_COUNT).fill('').map(toCell(i)).join('');

        rows.push(createRow(i + 1, cells));
    }

    return rows.join('');
}
