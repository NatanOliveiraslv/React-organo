import './Collaborator.css';

const Collaborator = ({nome, imagem, cargo, background_color }) =>{
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{ backgroundColor: background_color}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Collaborator;