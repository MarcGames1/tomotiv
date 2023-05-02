import { ImLinkedin2 } from 'react-icons/im';
import { IoLogoTiktok, IoLogoYoutube } from 'react-icons/io';
import { CiFacebook, CiInstagram } from 'react-icons/ci';
import { colors } from './styles';

export const menuItems = [
  { label: 'Despre Noi', href: '/#despre-noi' },
  { label: 'Contacteaza-ne', href: '/#contact' },
];

export const servicii = [
  { label: 'Servicii Seo', href: '/servicii/servicii-seo' },
  { label: 'Promovare Google Ads', href: '/servicii/google-ads' },
  { label: 'Creare Website', href: '/servicii/creare-website' },
  { label: 'CopyWriting', href: '/servicii/copywriting' },
  { label: 'Creare Logo', href: '/servicii/creare-logo' },
  { label: 'Promovare Social Media', href: '/servicii/promovare-social-media' },
];

export class SocialMedia {
  constructor() {
    this.socialMedia = {
      linkedin: {
        label: 'Linkedin',
        href: 'https://www.linkedin.com/',
        smIcon: <ImLinkedin2 size={'3em'} color={colors.accent} />,
      },
      tiktok: {
        label: 'Tik Tok',
        href: 'https://www.tiktok.com/',
        smIcon: <IoLogoTiktok size={'3em'} color={colors.accent} />,
      },
      facebook: {
        label: 'Facebook',
        href: 'https://www.facebook.com/',
        smIcon: <CiFacebook size={'3em'} color={colors.accent} />,
      },
      instagram: {
        label: 'Instagram',
        href: 'https://www.instagram.com/',
        smIcon: <CiInstagram size={'3em'} color={colors.accent} />,
      },
      youtube: {
        label: 'Youtube',
        href: 'https://www.youtube.com/',
        smIcon: <IoLogoYoutube size={'3em'} color={colors.accent} />,
      },
    };
  }

  // Getter pentru platforma LinkedIn
  get linkedin() {
    return this.socialMedia.linkedin;
  }

  // Getter pentru platforma TikTok
  get tiktok() {
    return this.socialMedia.tiktok;
  }

  // Getter pentru platforma Facebook
   get facebook() {
    return this.socialMedia.facebook;
  }

  // Getter pentru platforma Instagram
  get instagram() {
    return this.socialMedia.instagram;
  }

  // Getter pentru platforma YouTube
  get youtube() {
    return this.socialMedia.youtube;
  }
}
