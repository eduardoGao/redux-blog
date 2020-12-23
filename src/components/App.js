import React from 'react';
import './App.css'

function App() {
  const renderRows = [
    { name: 'Eduardo', email: 'lalo@gmail.com', contact: '@lalo' },
    { name: 'Sebas', email: 'sebas@gmail.com', contact: '@sebastian' }
  ]

  return (
    <div className='container'>
      <table className='table'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>
          {renderRows.map((item) => (
            <tr key={item.email}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
}

export default App;
