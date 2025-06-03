export const Item = ({id, name, number, onDelete}) => {
    return (
        <li>
            {name} : {number}
            <button onClick={() => onDelete(id)}>delere</button>
        </li>
    )
}