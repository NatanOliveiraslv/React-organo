import Banner from './components/Banner';
import Forms from './components/Forms';
import { useState } from 'react';
import Team from './components/Team';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#d9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [colaboradores, setColaboradores] = useState([]);

  const aoNewCollaboratorAdd = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Forms times={times.map(time => time.nome)} aoRegisteredCollaborator={ colaborador => aoNewCollaboratorAdd(colaborador)} />
      {times.map(time =>
          <Team 
            key={time.nome}
            name={time.nome}
            primaryColor={time.corPrimaria}
            secondaryColor={time.corSecundaria}
            collaborators={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          />
      )}
    </div>
  );
}

export default App;
