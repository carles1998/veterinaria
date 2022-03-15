export const Layout = ({ children }) => {
  return (
    <>
      <h1 className='font-bold text-4xl mt-8 text-center'>Clínica Veterinária</h1>
      <div className='flex justify-evenly items-start mt-10'>
        {children}
      </div>
    </>
  );
};
