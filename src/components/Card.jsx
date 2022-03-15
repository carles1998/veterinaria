export const Card = ({ valuesForm }) => {
  const { mascota, owner, date, sintomas, especies } = valuesForm;
  return (
    <div className='flex flex-col w-full justify-between shadow p-4 gap-4 mb-8'>
      <p><strong>Nombre de la mascota:</strong><br /> {mascota}</p>
      <p><strong>Especie:</strong><br /> {especies}</p>
      <p><strong>Nombre del propietario:</strong><br /> {owner} </p>
      <p><strong>Fecha de la visita:</strong><br /> {date}</p>
      <p><strong>Síntomas:</strong><br /> {sintomas}</p>
    </div>
  );
};
