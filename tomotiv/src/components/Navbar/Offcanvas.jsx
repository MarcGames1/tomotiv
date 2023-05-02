import { tw } from 'twind';
import Link from 'next/link';
import styles from './Offcanvas.module.css';
import Accordion from '../ux/Accordion/Accordion';
import { menuItems, servicii } from '../../dateStatice';

const Offcanvas = ({ show, close }) => {



  const closeMenu = ()=>{
    console.log('menuClosed')
    close();
  }

  console.log('OFFCANVAS SHOW STATE = ', show);
  console.log('OFFCANVAS SHOW STATE = ', close);
  return (
    <div
      className={`${show ? styles.overlay + ' ' + styles.active : ''}`}
      onClick={closeMenu}
    >
      <div
        className={`${styles.offcanvas} ${show ? styles.active : ''} ${tw(
          'bg-white fixed top-0 bottom-0 right-0 p-5'
        )}`}
      >
        <div className={tw('flex items-center justify-between mb-5')}>
          <span>Meniu</span>
          <button onClick={close}>X</button>
        </div>
        <div className={tw('flex flex-col gap-3')}>
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Accordion items={servicii} />
        </div>
      </div>
    </div>
  );
};

export default Offcanvas;
