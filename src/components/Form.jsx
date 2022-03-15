import { useState } from 'react';
import { useForm } from '../hooks/useForm';
import { Button } from './Button';
import { Error } from './Error';
import { Input } from './Input';
import { Select } from './Select';
const iniciaState = { id: '', mascota: '', owner: '', date: '', sintomas: '', especies: '' };

export const Form = ({ setValue }) => {
  const [formValues, handleInputChange, reset] = useForm(iniciaState);
  const [isValid, setIsValid] = useState(false);
  const { mascota, owner, date, sintomas } = formValues;

  const handlerSubmit = e => {
    e.preventDefault();
    if (mascota === '' || owner === '' || date === '' || sintomas === '') return setIsValid(true);
    setIsValid(false);
    setValue(formValues);
    reset();
  };
  return (
    <form onSubmit={handlerSubmit} className='flex flex-col w-1/2 items-start'>
      <h1 className='text-4xl mb-10'>Formulario Mascota</h1>
      {isValid && <Error />}
      <div className='mb-7'>
        <Input type='text' name='mascota' value={mascota} placeholder='Nombre de la Mascota' onChange={handleInputChange} />
      </div>
      <div className='mb-7'>
        <Select handleInputChange={handleInputChange} />
      </div>
      <div className='mb-7'>
        <Input type='text' name='owner' value={owner} placeholder='Nombre del dueño' onChange={handleInputChange} />
      </div>
      <div className='mb-7'>
        <Input type='date' name='date' value={date} onChange={handleInputChange} />
      </div>
      <div className='mb-7'>
        <textarea className='border-2 ' value={sintomas} name='sintomas' id='sintomas' cols='30' rows='5' placeholder='Síntomas' onChange={handleInputChange} />
      </div>
      <div className='w-full'>
        <Button className='bg-blue-600 text-white items-center p-3 w-1/2 rounded hover:bg-blue-700'>
          Enviar
        </Button>
      </div>
    </form>
  );
};
