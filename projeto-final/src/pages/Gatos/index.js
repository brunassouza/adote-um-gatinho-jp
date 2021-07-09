import React, {useState, useEffect} from 'react'
import Nav from '../../components/Nav'
import Banner_disponiveis from '../../components/Banner_disponiveis'
import Footer from '../../components/Footer'

import './styles.css'

const Gatos = () => {
    const [personagens, setPersonagem] = useState([]) //renderiza os personagens na tela

useEffect(()=> {
    fetch('https://my-json-server.typicode.com/brunassouza/api-gatos-disponiveis/cards')
    .then(resposta => resposta.json())
    .then(dados => setPersonagem(dados))

},[])

return (
    <>
            <Nav />
            <Banner_disponiveis />
            <div className="titulo">
        <h1>
            Gatos Disponíveis para Adoção
        </h1>
        </div>
        
        <ul className="personagens">
    {personagens.map(personagem => {
        return <li className="persos">
        
        <img className="images" src={personagem.url} alt={personagem.Nome}/>
        <p> Nome:  {personagem.Nome} </p>
        <p> Mais informações: {personagem.infos} </p>
        {/* <button className="botao">QUERO ADOTAR</button>
        <form className="botao" action="../formulario">
    <input type="submit" value="Go to Google" />
</form> */}
        <a className="botao" href="../formulario">QUERO ADOTAR</a>
        </li>
        
    })}
   
    </ul>
            
            <Footer />
            
        </>
        
    )
}
export default Gatos
