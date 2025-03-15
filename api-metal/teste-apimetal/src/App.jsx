import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [band, setBand] = useState([]);
  const [album, setAlbum] = useState([]);
  const bandName = "Slipknot";
  const albumName = "Master Of Puppets"

  async function GetBand() {
    try {
      const response = await fetch(`http://localhost:3000/api/bandas/${bandName}`);
      const data = await response.json();
      console.log("Dados recebidos:", data);
      setBand(data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }

  async function GetAlbum() {
    try {
      const response = await fetch(`http://localhost:3000/api/albuns/${albumName}`);
      const data = await response.json();
      console.log("Dados recebidos:", data);
      setAlbum(data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }

  useEffect(() => {
    GetAlbum();
    GetBand();
  }, []);

  return (
    <>
      {band.length > 0 ? (
        band.map((x, index) => (
          <div key={index}>
            <p>{x.name}</p>
            <p>{x.genre}</p>
          </div>
        ))
      ) : (
        <p>Carregando...</p>
      )}

      {album.length > 0 ? (
        album.map((x, index) => (
          <div key={index}>
            <p>{x.title}</p>
          </div>
        ))
      ) : (
        <p>Carregando...</p>
      )}
    </>
  );
}

export default App;
