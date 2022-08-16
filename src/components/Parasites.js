import { useDispatch } from "react-redux"

let toggle = false

export default function Parasites(props){

    const dispatch = useDispatch();

    function addParasites(){
        fetch('parasites.json')
            .then(res => res.json())
            .then(arr => dispatch({type: 'persons/addParasites', payload: arr}))
    }

    return (
        <button className="btn btn-primary" style={{marginLeft: '2rem'}} 
            onClick={addParasites}>Нахлебники</button>
    )
}
