import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// You would create these components in separate files
// import { FileUploader } from './FileUploader';
// import { DataTable } from './DataTable';

function App() {
    const [columns, setColumns] = useState<string[]>([]);
    const [rows, setRows] = useState<any[]>([]);

    const handleUpload = async (file: File) => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch("https://collaborative-data-explorer.onrender.com/api/upload-csv/", {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            setColumns(data.columns);
            setRows(data.rows);
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    };

    return (
        <div>
            <h1>Collaborative Data Explorer</h1>
            {rows.length === 0 ? (
                // This would be your FileUploader component
                <div>
                    <input type="file" accept=".csv" onChange={(e) => e.target.files && handleUpload(e.target.files[0])} />
                </div>
            ) : (
                <div>
                    <h2>Data Table</h2>
                    {/* This would be your DataTable component */}
                    <table border={1}>
                       <thead>
                           <tr>{columns.map(col => <th key={col}>{col}</th>)}</tr>
                       </thead>
                       <tbody>
                           {rows.map((row, i) => <tr key={i}>{columns.map(col => <td key={col}>{row[col]}</td>)}</tr>)}
                       </tbody>
                    </table>

                    <h2>Data Chart</h2>
                    <BarChart width={600} height={300} data={rows.slice(0, 20)}> {/* Chart first 20 rows */}
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={columns[0]} /> {/* Assumes first column is X-axis */}
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey={columns[1]} fill="#8884d8" /> {/* Assumes second column is Y-axis */}
                    </BarChart>
                </div>
            )}
        </div>
    );
}

export default App;