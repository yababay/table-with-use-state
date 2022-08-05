import { allRandom } from 'human-names'

export default function AddPerson(props){

    return (
        <p className="text-end">
            <button className="btn btn-primary" onClick={() => props.addPerson(allRandom(), "Jackson")}>Добавить</button>
        </p>
    )
}
