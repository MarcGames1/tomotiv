import { tw } from 'twind';
import Link from 'next/link';
import styles from './Offcanvas.module.css';
import { links } from '../../styles';
import Accordion from '../ux/Accordion/Accordion';
import { menuItems, servicii } from '../../dateStatice';
import Image from 'next/image';
import { SocialMedia } from '../../dateStatice';


const Offcanvas = ({ show, close }) => {

const socialMedia = new SocialMedia();

// Utilizarea getterului pentru platforma LinkedIn
const linkedin = socialMedia.linkedin;

// Utilizarea getterului pentru platforma TikTok
const tiktok = socialMedia.tiktok;

// Utilizarea getterului pentru platforma Facebook
const facebook = socialMedia.facebook;

// Utilizarea getterului pentru platforma Instagram
const instagram = socialMedia.instagram;

// Utilizarea getterului pentru platforma YouTube
const youtube = socialMedia.youtube;

  const closeMenu = ()=>{
    console.log('menuClosed')
    close();
  }

  const offCanvasStopPropagation = (e) =>{
    e.stopPropagation();
  }

  console.log('OFFCANVAS SHOW STATE = ', show);
  console.log('OFFCANVAS SHOW STATE = ', close);
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
        <div className={tw('flex items-center justify-between mb-5')}>
          <Image
            height={300}
            width={300}
            src={'/assets/Logo/Horizontal - Color.svg'}
          />
        </div>
        <div className={tw('flex flex-col gap-3')}>
          {menuItems.map((item) => (
            <Link className={links} key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Accordion title={'servicii'}>
            {servicii.map((item) => (
              <div className={links} key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </div>
            ))}
          </Accordion>
        </div>
        <div id="SocialMediaContainer">
          {Object.keys(socialMedia).map((key) => {
            const { label, href, smIcon } = socialMedia[key];
            return (
              <a href={href} key={key}>
                {smIcon}
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Offcanvas;
