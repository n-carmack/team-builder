import React, {useState} from 'react';

import Form from './Components/Form';

function App() {

  const [members, setMembers] = useState([]);

  const [values, setValues] = useState({name: '', email: '', role: ''});

  const onSubmit = () => {
    setMembers([values, ...members]);
    setValues({name: '', email: '', role: ''});
  }

  const onChange = (title, value) => {
    setValues({ ...values, [title]: value})
  }

  return (
    <div className="App">
      <h1>Team Builder Application</h1>
        <Form 
        values={values}
        change={onChange}
        submit={onSubmit} />
              {members?.map((member, idx) => {
          return (
            <div key={idx}>
              {member.name}, {member.email}, {member.role}
            </div>
          )
        })}
    </div>
  );
}

export default App;
