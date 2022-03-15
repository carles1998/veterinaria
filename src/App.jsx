import { useEffect, useState } from 'react';
import './App.css';
import { Card } from './components/Card';
import { Form } from './components/Form';
import { Layout } from './components/Layout';

export const App = () => {
  const [values, setValue] = useState({});
  const [listPatients, setListPatients] = useState([]);
  // const saveLocalStorage = () => { window.localStorage.setItem('patients', JSON.stringify(listPatients)); };
  const addListPatients = () => {
    const newListPatients = [...listPatients, values];
    setListPatients(newListPatients);
  };

  useEffect(() => {
    if (Object.keys(values).length > 0) {
      addListPatients();
      // saveLocalStorage();
      console.log(listPatients);
    }
  }, [values]);
  return (
    <Layout>
      <Form setValue={setValue} />
      <div>
        <h1 className='text-center text-4xl mb-8'>Lista de pacientes</h1>
        <div className='flex flex-col'>
          {
            values &&
            listPatients.map((patients, index) => (
              <Card key={index} valuesForm={patients} />
            ))

          }

        </div>
      </div>
    </Layout>
  );
};
