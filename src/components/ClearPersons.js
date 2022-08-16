import { useDispatch } from "react-redux"

export default function AddPerson(props){

    const dispatch = useDispatch();

    return (
        <button className="btn btn-primary" onClick={() => dispatch({type: 'persons/clearPersons'})} style={{marginLeft: '2rem'}}>Очистить</button>
    )
}
