import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddPerson from './components/AddPerson'
import Parasites from './components/Parasites';
import SortPersons from './components/SortPersons'
import ClearPersons from './components/ClearPersons'
import TableRow from './components/TableRow'


function App() {

  const persons = useSelector(state => state.persons)

  return (
    <>
      <p className="text-end" style={{marginTop: "2rem"}}>
        <AddPerson />
        <SortPersons />
        <Parasites />
        <ClearPersons />
      </p>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>First name</th>
            <th>Last name</th>
          </tr>
        </thead>
        <tbody>
          {persons.map(el => <TableRow {...el} />)}
        </tbody>
      </table>
    </>
  );
}

export default App;
