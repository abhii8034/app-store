import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl, url} = appDetails

  return (
    <li className="app-item">
      <a href={url} target="_blank" rel="noreferrer">
        <img className="app-image" src={imageUrl} alt={appName} />
        <p className="app-name">{appName}</p>
      </a>
    </li>
  )
}

export default AppItem
