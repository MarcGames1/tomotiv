import Faq from 'react-faq-component';
import { colors, typography } from '../../styles';
import { tw } from 'twind';

const data = {
  title: <div className={tw('text-center block w-full')}>Intrebari Frecvente</div>,
  rows: [
    {
      title: 'Lorem ipsum dolor sit amet,',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: 'Nunc maximus, magna at ultricies elementum',
      content:
        'Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.',
    },
    {
      title: 'Curabitur laoreet, mauris vel blandit fringilla',
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: 'What is the package version',
      content: <p>current version is 1.2.1</p>,
    },
  ],
};

const styles = {
  bgColor: 'black',
  titleTextColor: 'white',
  rowTitleColor: 'white',
  arrowColor: colors.accent,
  rowContentColor: 'grey',
  // arrowColor: "red",
};

const config = {
  animate: true,
//   arrowIcon: "V",
  tabFocus: true
};


const FAQSection = () => {
  return (
    <section className={tw('bg-black flex justify-center w-full')}>
      {/* <h2 className={typography.s4heading}>Intrebari Frecvente</h2> */}
      <div className={tw('w-3/4' )}>
        <Faq  data={data} styles={styles} config={config} />
      </div>
    </section>
  );
}

export default FAQSection