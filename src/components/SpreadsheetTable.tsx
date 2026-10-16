import { useState } from "react";
import { DEFAULT_CELL, SHEET_ROWS, type SheetCell } from "../data";

const ALL_CELLS = SHEET_ROWS.flat();

/** Spreadsheet-style profile: click a cell to see its "formula" in the bar above. */
export default function SpreadsheetTable() {
  const [selected, setSelected] = useState(DEFAULT_CELL);
  const active = ALL_CELLS.find((c) => c.ref === selected)!;

  const renderCell = (cell: SheetCell) => (
    <td key={cell.ref}>
      <button
        className="cell"
        type="button"
        aria-pressed={cell.ref === selected}
        onClick={() => setSelected(cell.ref)}
      >
        {cell.text}
      </button>
    </td>
  );

  return (
    <>
      <div className="formula-bar" aria-live="polite">
        <b className="formula-bar__ref">{active.ref}</b>
        <span className="formula-bar__formula">{active.formula}</span>
      </div>
      <div className="table-scroll">
        <table className="sheet">
          <tbody>
            <tr>
              <th className="row-num"></th>
              <th>A</th>
              <th>B</th>
            </tr>
            {SHEET_ROWS.map((row, i) => (
              <tr key={i} className={i === 0 ? "sheet__header" : undefined}>
                <th className="row-num">{i + 1}</th>
                {row.map(renderCell)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="hint">Click any cell to see the formula behind it.</p>
    </>
  );
}
