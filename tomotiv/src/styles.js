import { tw } from "twind";
import styles from './styles.module.css'

export const colors = {
  accent: '#EE4444',
  blue: {
    default: '#2A19FF',
    dark20: '#2214cc',
    dark60: '#110a66',
    dark80: '#080533',
    light20: '#5547ff',
    light60: '#aaa3ff',
  },
};
export const typography = {
  h1: tw('font-extrabold md:text-3xl lg:text-6xl tracking-wider	 	text-white'),
  cardHeading: tw('font-extrabold md:text-2xl lg:text-3xl tracking-wider	 	text-white'),
  s4heading: tw('font-extrabold text-4xl md:text-3xl sm:text-3xl 	text-white'),
  p: tw('text-white lg:tracking-widest lg:leading-8'),
  p2: tw('text-white tracking-widest leading-6 text-center m-4'),
};

export const formStyles = {
  form: tw('bg-blue-D80 flex flex-col justify-center'),
  label: tw('text-white tracking-widest leading-6 text-center m-4'),
  input: tw('m-4 h-6 p-4 '),
  button: `${tw('lg:py-4 px-2 p-4')} ${styles.buttonPrimary}`,
};


export const links = styles.links;

export const button = {
  primary: `${tw('lg:py-4 px-2 p-4' )} ${styles.buttonPrimary}`,
  secondary:`${tw('px-2 p-4 text-white')} ${styles.buttonSecondary}`
};

export const responsive = {
  hideOnMobile: `${tw('lg:py-4 px-2 p-4')}`,
  showOnMobile: `${tw('lg:py-4 px-2 p-4')}`,
};