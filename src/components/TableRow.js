export default function TableRow(props){

    const {id, firstName, lastName} = props

    return (
        <tr>
            <td>{id}</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
        </tr>
    )
}
