import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person.js'

function App(props) {
  const [personState, setPersonState] = useState({
    persons: [
      { id: 1, name: 'Kp', gender: 'Male' },
      { id: 2, name: 'Harshu', gender: 'Female' }
    ]
  });

  const [otherState, setOtherState] = useState({
      others: 'This is second State',
      showPerson: false,
      showPersonsLabel: 'Show Persons',
    });

  const switchPerson = () => {
    setPersonState({
      persons: [
        { id: 1, name: 'Krishna', gender: 'Male' },
        { id: 2, name: 'Harshu', gender: 'Female' }
      ]
    });
  }

  const togglePerson = () => {
    setOtherState({
        showPerson: !otherState.showPerson,
        showPersonsLabel: otherState.showPerson ? 'Show Persons' : 'Hide Persons'
    });
  }

  const switchPersonName = (event, id) => {
    const pindex = personState.persons.findIndex((person)=>{
      return person.id === id;
    });
    
    const person = {...personState.persons[pindex]};
    person.name = event.target.value;

    const persons = [...personState.persons];
    persons[pindex] = person;
    setPersonState({persons: persons});
  }

  const deleteRecord = (index) => {
    const per = [...personState.persons];
    per.splice(index,1);
    setPersonState({persons: per});
  }

  const inlineStyle = {
    backgroundColor: '#0684f1cf',
    borderRadius: '5px',
    color: 'white',
    width: '130px',
    height: '30px',
    cursor: 'pointer',
    fontSize: 'medium',
    fontWeight: '900'
  }
  let person = null;

  if(otherState.showPerson) {
    person = (
      <div>
        {
          personState.persons.map((person, index) => {
            return (<Person name={person.name} gender={person.gender} key={person.id} deleteHandler={()=> deleteRecord(index)} onclickChange={switchPerson} nameChangeHandler={(event)=>switchPersonName(event, person.id)}>from others: {otherState.others}</Person>)
          })
        }
      </div>
    )
  }
  return (
    <div className="App">
      { person }
      <button style={inlineStyle} onClick={togglePerson}>{otherState.showPersonsLabel}</button>
    </div>
  );
}

export default App;
