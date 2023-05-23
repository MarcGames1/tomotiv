import HeroCarousel from '@/components/Carousel/HeroSection/HeroCarousel'
import SectiuneGri from '@/components/SectiuneGri'
import SectiuneAlba from '@/components/LayoutComponents/SectiuneAlba';
import Card1 from '@/components/LayoutComponents/cardSectionComponents/Card1/Card1';
import {IoIosPeople} from 'react-icons/io'
import GridColsd10 from '@/components/GridColsd10';
import Sectiune3Card from '@/components/LayoutComponents/cardSectionComponents/sectiune3Card';
import CardContainer from '@/components/LayoutComponents/cardSectionComponents/CardContainer';
import Page from './PageLayout';

export default function Home() {
  return (<Page>

    <main className="">
      <SectiuneAlba margin="mr-20 ml-10">
        <HeroCarousel />
      </SectiuneAlba>
      <SectiuneGri>
        <div className="m-10 prose lg:prose-xl prose-lead max-w-none">
          <h2 className="text-center">Primul curs autorizat SEO din Romania</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem quibusdam consequatur est adipisci voluptatibus
            pariatur voluptatum libero quos dolores facilis. Reprehenderit nihil
            necessitatibus iusto vero maxime porro id neque rerum.
          </p>
        </div>
        <div className="m-10 prose lg:prose-xl prose-lead max-w-none">
          <h2 className="text-center"> De ce Tomotiv</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
            officiis dignissimos, voluptatum ducimus nemo, placeat ut aperiam
            blanditiis odio sed amet iste voluptatibus ab quis, neque magni
            assumenda expedita impedit.
          </p>
        </div>
        <div className="m-10 prose lg:prose-xl prose-lead max-w-none">
          <h2 className="prose block m-auto my-10 lead font-bold text-3xl text-center">
            Valorile Companiei
          </h2>
        </div>
        <Sectiune3Card className={' my-5 gap-3 '}>
          <CardContainer idx={1}>
            <Card1
              p={
                ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis dignissimos'
              }
              heading={'Onestitate'}
              >
              <IoIosPeople className="text-primary" size={'5em'} />
            </Card1>
          </CardContainer>
          <CardContainer idx={4}>
            <Card1
              p={
                ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis dignissimos'
              }
              heading={'Onestitate'}
              >
              <IoIosPeople className="text-primary" size={'5em'} />
            </Card1>
          </CardContainer>
          <CardContainer idx={8}>
            <Card1
              p={
                ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis dignissimos'
              }
              heading={'Onestitate'}
              >
              <IoIosPeople className="text-primary" size={'5em'} />
            </Card1>
          </CardContainer>
        </Sectiune3Card>
      </SectiuneGri>


    </main>
              </Page>
  );
}
