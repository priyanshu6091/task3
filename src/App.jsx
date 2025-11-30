import './App.css'
import DynamicTable from './components/DynamicTable'

function App() {
  // Sample data - the table will auto-generate columns from object keys
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 28, role: 'Developer' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 34, role: 'Designer' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 45, role: 'Manager' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', age: 29, role: 'Developer' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', age: 38, role: 'Analyst' },
  ]

  // Example with custom columns
  const products = [
    { productId: 'P001', productName: 'Laptop', price: 999.99, stock: 50, category: 'Electronics' },
    { productId: 'P002', productName: 'Headphones', price: 149.99, stock: 200, category: 'Electronics' },
    { productId: 'P003', productName: 'Desk Chair', price: 299.99, stock: 75, category: 'Furniture' },
    { productId: 'P004', productName: 'Monitor', price: 399.99, stock: 100, category: 'Electronics' },
  ]

  // Custom column configuration (optional)
  const customColumns = [
    { key: 'productId', label: 'Product ID' },
    { key: 'productName', label: 'Product Name' },
    { key: 'price', label: 'Price ($)' },
    { key: 'stock', label: 'In Stock' },
  ]

  return (
    <div className="app">
      <h1>Dynamic Table Demo</h1>
      
      <section>
        <h2>Users Table (Auto-generated columns)</h2>
        <p>Pass any array of objects - columns are automatically created from object keys!</p>
        <DynamicTable data={users} />
      </section>

      <section>
        <h2>Products Table (Custom columns)</h2>
        <p>You can also specify custom column labels and select which fields to display.</p>
        <DynamicTable data={products} columns={customColumns} />
      </section>

      <section>
        <h2>Empty Table</h2>
        <DynamicTable data={[]} />
      </section>
    </div>
  )
}

export default App
