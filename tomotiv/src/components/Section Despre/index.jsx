import React from 'react'
import { tw } from 'twind';
import Image from 'next/image';
const DespreSection = () => {
  return (
    <section>
      <h2 className={tw('text-white text-center font-bold text-base	')}>
        Fa Cunostinta cu Noi
      </h2>
      <span
        className={tw('block p-5 text-white text-center font-medium text-xs	')}
      >
        Echipa din spatele proiectului Tomotiv{' '}
      </span>
      <div className={tw('container w-full h-full bg-indigo-500')}>
        Aici o sa punem cele 2 componente 
        <MembruEchipa />
        <MembruEchipa />
      </div>
    </section>
  );
}

export default DespreSection


const MembruEchipa = ({nume, imagine, socialM }) =>{
    return <div className={tw('container w-fit	h-fit	 ')}>test</div>;
}