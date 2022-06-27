import { useEffect, useMemo, useState } from "react"

export default function Home() {
  const [campos, setCampos] = useState<any[]>([
    {
      nome: "a",
      price: "123"
    }
  ])

  const addCampos = () => {
    const newCampo = {
      nome: "b",
      price: "321"
    }

    const newItems = [
      ...campos,
      newCampo
    ]
    setCampos(newItems)
  }

  useEffect(()=>{
    console.log("entrou no site")
    setTimeout(()=>{
      alert("Esse site tem o proposito de integrar uma api com o front-end, fique avontade para testa-lo")
    }, 2000)
  },[])

  useEffect(()=>{
    console.log("atualizou no banco")
  },[campos])

  const manyCampos = useMemo(()=>{
    return campos.length
  }, [campos])



  return (
    <>
    <div>
      <ul>
        {campos.map(campo =>(
          <li>
            <div>{campo.nome}</div>
            <div>{campo.price}</div>
          </li>
        ))}
      </ul>
    </div>
    <button onClick={addCampos}>
      adicionar
    </button>
    <div>
      Quantidade de campos cadastrados no banco: {manyCampos}
    </div>
    </>
  )
}
