export const Input = ({ type, name, value, onChange, placeholder }) => {
  return (
    <input className='border-b-2' type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} />
  );
};
