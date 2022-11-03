import { useEffect, useState } from "react";

type Repository = {
  avatar: string
  name: string
}

function App() {
  // criando estado
  const [extratos, setExtratos] = useState<Repository[]>([])

  // consumindo dados aqui
  useEffect(() => {
    fetch('https://6363da287b209ece0f39999d.mockapi.io/dados').then(response => response.json()).then(data => setExtratos(data))
  }, [])


  // retornando os dados
  return (
    <ul>
      {extratos.map(extrato => {
        return (
          <li key={extrato.avatar}>
            <p>{extrato.name}</p>
            <img src={extrato.avatar} alt="" />
          </li>
        )
      })}
    </ul>
  )
}

export default App
