// json2html.js
export default function json2html(data) {
    // Extract unique keys (columns) across all objects
    const columns = Array.from(
        new Set(data.flatMap(Object.keys))
    );

    // Build the HTML table as a string
    let html = `<table data-user="rakasiyeshwanthreddy@gmail.com">`;
    
    // Add table header
    html += "<thead><tr>" + columns.map(col => `<th>${col}</th>`).join('') + "</tr></thead>";
    
    // Add table body
    html += "<tbody>";
    data.forEach(row => {
        html += "<tr>" + columns.map(col => `<td>${row[col] || ''}</td>`).join('') + "</tr>";
    });
    html += "</tbody></table>";
    
    return html;
}
