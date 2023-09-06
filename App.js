import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Produto from './Produto';

function App() {

  const [produtos, setProduto] = useState([]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
    .then((resposta) => {
      setProduto(resposta.data);
    });
  }, []);

  return (
    <div className="App">
      <div>
        {produtos.map((produto) => {
          return <Produto
            key={produto.id}
            id={produto.id}
            titulo={produto.title}
            categoria={produto.category}
            imagem={produto.image}
            preco={produto.price}
            avaliacao={produto.rating.rate}/>
        })}
      </div>
    </div>
  );
}

export default App;
