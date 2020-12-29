import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as getAllUsers from '../actions/usersActions'

function Users(props) {
  // const renderRows = [
  //   { name: 'Eduardo', email: 'lalo@gmail.com', contact: '@lalo' },
  //   { name: 'Sebas', email: 'sebas@gmail.com', contact: '@sebastian' }
  // ]
  // const [state, setState] = useState([])
  useEffect(() => {
    props.getAllUsers()
  }, [])

  console.log(props)

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
          {props.users.map((item) => (
            <tr key={item.email}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.website}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div >
  )
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
}

export default connect(mapStateToProps, getAllUsers)(Users)
