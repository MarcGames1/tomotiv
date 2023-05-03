import { tw } from 'twind';
import Link from 'next/link';
import styles from './Offcanvas.module.css';
import { links } from '../../styles';
import Accordion from '../ux/Accordion/Accordion';
import { menuItems, servicii } from '../../dateStatice';
import Image from 'next/image';
import SocialMediaIcons from '../ux/SocialMediaIcons/SocialMediaIcons';


const Offcanvas = ({ show, close }) => {



  const closeMenu = ()=>{
    console.log('menuClosed')
    close();
  }

  const offCanvasStopPropagation = (e) =>{
    e.stopPropagation();
  }

  // Object.entries(SocialMedia).map(item =>{console.log(item)})
  
  return (
    <div
      className={`${show ? styles.overlay + ' ' + styles.active : ''}`}
      onClick={closeMenu}
    >
      <div
        onClick={offCanvasStopPropagation}
        className={`${styles.offcanvas} ${show ? styles.active : ''} ${tw(
          ' fixed top-0 bottom-0 right-0 p-5'
        )}`}
      >
        <div className={tw('flex items-center  justify-between mb-5')}>
          <Image
            height={300}
            width={300}
            src={'/assets/Logo/Horizontal - Color.svg'}
          />
        </div>
        <div className={tw('flex flex-col justify-around gap-3')}>
          <div className={tw('flex flex-col gap-3')}>
            {menuItems.map((item) => (
              <Link className={links} key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <div>

            <Accordion title={'servicii'}>
              {servicii.map((item) => (
                <div className={links} key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </div>
              ))}
            </Accordion>
              </div>
          </div>
          <SocialMediaIcons />
        </div>
      </div>
    </div>
  );
};

export default Offcanvas;







