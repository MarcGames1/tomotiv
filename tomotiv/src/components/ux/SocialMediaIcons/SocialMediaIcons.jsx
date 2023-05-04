import { colors } from '../../../styles';
import { ImLinkedin2 } from 'react-icons/im';
import { IoLogoYoutube } from 'react-icons/io';
import { CiFacebook, CiInstagram } from 'react-icons/ci';
import { FaTiktok } from 'react-icons/fa';
import { tw } from 'twind';

const SocialMedia = {
  linkedin: {
    label: 'Linkedin',
    href: 'https://www.linkedin.com/',
    smIcon: ImLinkedin2,
  },
  tiktok: {
    label: 'Tik Tok',
    href: 'https://www.tiktok.com/',
    smIcon: FaTiktok,
  },
  facebook: {
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    smIcon: CiFacebook,
  },
  instagram: {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    smIcon: CiInstagram,
  },
  youtube: {
    label: 'Youtube',
    href: 'https://www.youtube.com/',
    smIcon: IoLogoYoutube,
  },
};

const SocialMediaIcons = ({
  withLabel = false,
  iconSize = '2em',
  iconColor = colors.accent
}) => {



  return (
    <div
      className={tw('flex text-white gap-5 align-center')}
      id="SocialMediaContainer"
    >
      {Object.values(SocialMedia).map((data) => {
        const { label, href, smIcon: Icon } = data;
        return (
          <a href={href} key={label}>
            {withLabel ? label : null}
            <Icon size={iconSize} color={iconColor} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialMediaIcons;
