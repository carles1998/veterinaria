export const Select = ({ handleInputChange }) => {
  return (
    <select name='especies' id='especies' onChange={handleInputChange}>
      <option value=''> -- Seleccione --</option>
      <option value='perro'> Perro</option>
      <option value='gato'> Gato</option>
      <option value='conejo'> Conejo</option>
      <option value='otro'> Otro</option>
    </select>
  );
};
