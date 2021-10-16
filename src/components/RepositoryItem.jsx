export function RepositoryItem(props) {
  return (
    <li>
      <strong>Name: {props.repository.name ?? 'Default'}</strong>
      <p>Description: Forms in React</p>
      <a href="">Access repo</a>
    </li>
  )
}