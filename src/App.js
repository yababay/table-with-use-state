import { useSelector } from 'react-redux';
import AddPerson from './components/AddPerson'
import SortPersons from './components/SortPersons'
import TableRow from './components/TableRow'


function App() {

  const persons = useSelector(state => state.persons)

  return (
    <>
      <p className="text-end" style={{marginTop: "2rem"}}>
        <AddPerson />
        <SortPersons />
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
