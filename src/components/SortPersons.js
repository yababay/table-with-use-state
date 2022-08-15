import { useDispatch } from "react-redux"

let toggle = false

export default function SortPersons(props){

    const dispatch = useDispatch();

    return (
        <button className="btn btn-primary" style={{marginLeft: '2rem'}} 
            onClick={() => {toggle = !toggle; return dispatch({type: 'persons/sortPersons', payload: toggle})}}>Сортировать</button>
    )
}
