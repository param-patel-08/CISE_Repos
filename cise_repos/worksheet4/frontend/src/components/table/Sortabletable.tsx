import React from "react";
interface SortableTableProps {
headers: { key: string; label: string }[];
data: any[];
}
const SortableTable: React.FC<SortableTableProps> = ({ headers, data }) => (
<table>
<thead>
<tr>
{headers.map((header) => (
<th key={header.key}>{header.label}</th>
))}
</tr>
ENSE701 Worksheet 4 Assessment 1A
S2 2024 v3 Pg 14 of 32Jim Buchan/Tony Clear/Mark Alexander/Jingchang Chen
</thead>
<tbody>
{data.map((row, i) => (
<tr key={i}>
{headers.map((header) => (
<td key={header.key}>{row[header.key]}</td>
))}
</tr>
))}
</tbody>
</table>
);
export default SortableTable;
