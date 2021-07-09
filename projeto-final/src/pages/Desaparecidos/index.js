import React, {useState, useEffect} from 'react'
import Nav from '../../components/Nav'
import Banner_desaparecidos from '../../components/Banner_desaparecidos'
import Footer from '../../components/Footer'

import './styles.css'

const Desaparecidos = () => {
    const [personagens, setPersonagem] = useState([]) //renderiza os personagens na tela

useEffect(()=> {
    fetch('https://my-json-server.typicode.com/brunassouza/api-gatos-desaparecidos/cards')
    .then(resposta => resposta.json())
    .then(dados => setPersonagem(dados))

},[])

return (
        <>
            <Nav />
            <Banner_desaparecidos />
            <div className="titulo">
        <h1>
            Gatos Desaparecidos
        </h1>
        </div>

        <ul className="personagens">
    {personagens.map(personagem => {
        return <li className="persos">
        
        <img className="images" src={personagem.url} alt={personagem.Nome}/>
        <p> Nome: {personagem.Nome} </p>
        <p> Telefone para contato: {personagem.tel} </p>
        <p> Mais informações: {personagem.infos} </p>

        </li>
    })} </ul>
    
            <Footer />
        </>
    
)
}
export default Desaparecidos