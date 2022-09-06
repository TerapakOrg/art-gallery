import './App.css';
import Gallery from './Components/Gallery'
import ButtonBar from './Components/ButtonBar'
import { useState, useEffect } from 'react'

const App = () => {
  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})

  useEffect(() => {
    document.title = 'Welcome to Artworld'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
      .then(response => response.json())
      .then(resData => setData(resData))
  }, [artId])

  // send this function down to <ButtonBar />
  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value))
  }

  return (
    <div>
      <div className="App">
        <Gallery objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title} />
        <ButtonBar handleIterate={handleIterate} />
      </div>
    </div>
  );
}


export default App;
