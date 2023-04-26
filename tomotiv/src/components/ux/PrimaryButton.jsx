import React, {useState} from 'react'
import { IoIosTabletLandscape, IoIosTabletPortrait } from 'react-icons/io';
import { button } from '../../styles';
import Button from './Button'
const PrimaryButton = () => {
    const [hover, setHover] = useState(false);

  return (
    <Button
      onMouseOver={(e) => {
        e.preventDefault();
        setHover(true);
      }}
      onMouseLeave={(e) => {
        e.preventDefault();
        setHover(false);
      }}
      className={button.primary}
    >
      {hover ? (
        <IoIosTabletLandscape size={'2em'} color="black" />
      ) : (
        <IoIosTabletPortrait size={'2em'} color="black" />
      )}{' '}
      <span>Afla mai mult</span>
    </Button>
  );
}

export default PrimaryButton