import { findAllByDisplayValue } from '@testing-library/react'
import { useState, useEffect } from 'react'
import AddPerson from './components/AddPerson'
import TableRow from './components/TableRow'

const persons = []
let count = 0
let isLoaded = false

function App() {

  const [rows, setRows] = useState([])

  useEffect(() => {
    fetch('persons.json')
      .then(res => res.json())
      .then(arr => {
        if(isLoaded) return
        arr.forEach(el => {
          const {firstName, lastName} = el
          addPerson(firstName, lastName)
        })
        isLoaded = true
      })
  }, [])

  function addPerson(firstName, lastName){
    count++
    persons.push({firstName, lastName, id: count, key: count})
    const _rows = persons.map(element => <TableRow {...element} />)
    setRows(_rows)
  }

  return (
    <>
      <AddPerson addPerson={addPerson} />
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>First name</th>
            <th>Last name</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </>
  );
}

export default App;
