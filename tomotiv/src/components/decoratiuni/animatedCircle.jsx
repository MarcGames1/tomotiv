import React, {useState} from 'react'
import { motion } from 'framer-motion';
import VisibilitySensor from 'react-visibility-sensor';
import { tw } from 'twind';
import { Circle } from '../decoratiuni';

const AnimatedCircle = ({styles}) => {
      const [isVisible, setIsVisible] = useState(false);

      const handleVisibilityChange = () => {
        setIsVisible(true);
      };
  
    return (
      <VisibilitySensor onChange={handleVisibilityChange}>
        <motion.div
          key={'section3 bgImage'}
          initial={{ opacity: 0 }}
          animate={{
            opacity: isVisible ? [0.3, 0.6, 0.9, 1] : [0],
          }}
          exit={{ opacity: 0 }}
          className={styles}
        >
          <Circle />
        </motion.div>
      </VisibilitySensor>
    );
}

export default AnimatedCircle