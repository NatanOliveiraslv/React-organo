import './Forms.css';
import TextField from '../TextField';
import Dropdown from '../Dropdown';
import Button from '../Button';
import { useState } from 'react'

const Forms = (props) => {


    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        props.aoRegisteredCollaborator({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
        ;
    }

    return (
        <section className='forms'>
            <form onSubmit={handleSubmit}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    requiredField={true} 
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={nome}
                    aoChanged={value=> setNome(value)}
                />
                <TextField 
                    requiredField={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    value ={cargo}
                    aoChanged={value => setCargo(value)}
                />
                <TextField 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    value={imagem}
                    aoChanged={value => setImagem(value)}
                />
                <Dropdown 
                    requiredField={true} 
                    label="Time" 
                    itens={props.times}
                    value={time}
                    aoChanged={value => setTime(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Forms