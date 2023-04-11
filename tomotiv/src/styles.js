import { tw } from "twind";
import styles from './styles.module.css'

export const colors = {
    accent: '#EE4444',
    blue: '#2A19FF',
}
export const typography = {
  h1: tw('font-extrabold md:text-3xl lg:text-6xl tracking-wider	 	text-white'),
  s4heading: tw('font-extrabold text-4xl md:text-3xl sm:text-3xl 	text-white'),
  p: tw('text-white lg:tracking-widest lg:leading-8'),
  p2: tw('text-white tracking-widest leading-6 text-center m-4'),
};

export const button = {
  primary: `${tw('lg:py-4 px-2 p-4' )} ${styles.buttonPrimary}`,
  secondary:`${tw('px-2 p-4 text-white')} ${styles.buttonSecondary}`
};