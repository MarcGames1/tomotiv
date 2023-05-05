import { tw } from "twind";
import Link from "next/link";
import Image from "next/image";
import { servicii } from "../../dateStatice";
import { colors, links, typography } from "../../styles";
import SocialMediaIcons from "../ux/SocialMediaIcons/SocialMediaIcons";


const styles = {
  header: tw(`text-gray-400 text-base font-bold mb-1`),
  link: '',
}
const linkuriUtile = [...servicii];
const dispozitiiLegale = [
  { text: 'Termeni si Conditii', href: 'termeni-conditii' },
  { text: 'Politica Cookie', href: 'politica-cookie' },
  { text: 'Contact', href: 'contact' },
];

const Footer = () => (
  <>
    {/* <ScroolToTop /> */}
    <hr />
    <footer
      className={tw(
        `grid grid-cols-3 gap-1 justify-items-center bg-blue-D80 items-start p-3`
      )}
    >
      <div>
        <Link href={'/'}>
          <Image
            height={300}
            width={300}
            src={'/assets/Logo/Horizontal - Color.svg'}
          />
        </Link>
        {/* <p className={tw(`text-4xl text-indigo-500 font-bold`)}>STARTD</p> */}
        <SocialMediaIcons  />
      </div>

      <div>
        <h4 className={styles.header}>Dispozitii Legale</h4>
        <ul>
          {dispozitiiLegale.map((link, index) => (
            <FooterLink
              link={link}
              key={`dispozitiiLegale ${Math.random() * 10 * (index + 1 * 15)}`}
            />
          ))}
        </ul>
      </div>

      <div>
        <h4 className={styles.header}>Linkuri Utile</h4>
        <ul>
          {linkuriUtile.map((link, index) => (
            <FooterLink
              link={link}
              key={`linkuriUtile${Math.random() * 10 * (index + 1 * 15)}`}
            />
          ))}
        </ul>
      </div>
    </footer>
  </>
);

const FooterLink = ({ link }) => {
  return (
    <>
      <li className={`${tw(`text-gray-500 text-sm font-medium leading-6`)} ${links}`}>
        <Link href={link.href}>{link?.text || link?.label}</Link>
      </li>
    </>
  );
};

export default Footer;
