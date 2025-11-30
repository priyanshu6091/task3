import './DynamicTable.css'

/**
 * DynamicTable Component
 * Automatically creates a table based on array values
 * 
 * @param {Array} data - Array of objects to display in the table
 * @param {Array} columns - Optional: Custom column configuration [{key: 'fieldName', label: 'Display Name'}]
 */
function DynamicTable({ data = [], columns = null }) {
  // If no data, show a message
  if (!data || data.length === 0) {
    return <p className="no-data">No data available</p>
  }

  // Auto-generate columns from the first object's keys if not provided
  const tableColumns = columns || Object.keys(data[0]).map(key => ({
    key: key,
    label: key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1') // Convert camelCase to Title Case
  }))

  return (
    <div className="table-container">
      <table className="dynamic-table">
        <thead>
          <tr>
            {tableColumns.map((column, index) => (
              <th key={index}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {tableColumns.map((column, colIndex) => (
                <td key={colIndex}>
                  {row[column.key] !== undefined ? String(row[column.key]) : '-'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DynamicTable
