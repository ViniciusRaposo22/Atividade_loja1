export default function Produto({id, titulo, categoria, imagem, preco, avaliacao}) {
    return (
        <div className="produto">
            <h2>{titulo}</h2>
            <p>{categoria}</p>
            <div className="imagem">
                <img src = {imagem}/>
            </div>
            <p>{`U$: ${preco}`}</p>
            <p>{`Rate: ${avaliacao}`}</p>
        </div>
    );
}