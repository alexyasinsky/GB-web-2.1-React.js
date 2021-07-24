export function List(props) {
    return props.list.map((message, ind) => (
        <li key={ind}>
            <h3>{message.user}</h3>
            <p>{message.text}</p>
        </li>
    ))
    // return <div>{props.list.toString()}</div>;
}