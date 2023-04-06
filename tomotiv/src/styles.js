import { tw } from "twind";
import styles from './styles.module.css'

export const colors = {
    
}
export const typography = {
  h1: tw('font-extrabold text-6xl tracking-wider	 	text-white'),
  p: tw('text-white tracking-widest leading-8'),
  p2: tw('text-white tracking-widest leading-2 text-center m-4'),
};

export const button = {
  primary: `${tw('w-full')} ${styles.buttonPrimary}`,
  secondary:`${tw('w-full text-white')} ${styles.buttonSecondary}`
};