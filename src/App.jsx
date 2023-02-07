import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Spell from './components/Spell/Spell';
import './App.css';

function App() {
  const [spells, setSpells] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch('https://wizard-world-api.herokuapp.com/Spells/').then(res => res.json()).then(data => {
      setSpells(data);
      setFiltered(data);
    });
  }, []);

  const filterSpells = (filter) => {
    console.log('filter: ', filter);
    setFiltered(spells.filter(spell =>
      spell.name?.toLowerCase().includes(filter) ||
      spell.incantation?.toLowerCase().includes(filter) ||
      spell.effect?.toLowerCase().includes(filter)));
  };

  let content;
  if (!spells.length)
    content = (<h1>Loading ...</h1>);
  else if (!filtered.length)
    content = (<h1>No spells found</h1>);
  else
    content = filtered.map(spell => (<Spell key={spell.id} name={spell.name} incantation={spell.incantation} effect={spell.effect} type={spell.type} />));

  return (
    <div className="App">
      <Header onSearch={filterSpells} />
      {content}
    </div>
  );
}

export default App;
