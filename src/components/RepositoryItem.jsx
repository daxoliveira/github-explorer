export function RepositoryItem(props) {
  return (
    <li>
      <strong>Name: {props.repository.name}</strong>
      <p>Description: Forms in React</p>
      <a href={props.repository.html_url}>Access repo</a>
    </li>
  )
}