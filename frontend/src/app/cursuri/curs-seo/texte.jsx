import { ImCheckmark } from 'react-icons/im';
import { BiTimer } from 'react-icons/bi';
import { BsGraphUpArrow } from 'react-icons/bs';
import {FcCheckmark} from 'react-icons/fc'
import { FaBullseye, FaUserFriends, FaRocket } from 'react-icons/fa'; 


export const styles = {
  h2: 'lg:m-10 lead font-bold text-xl  md:text-3xl text-center',
};

const LE = ({ children }) => {
  return <li>✅ {children}</li>;
};

export const DeCeSaTeInscrii = {
  heading: (
    <h2 className=" m-10 lead font-bold text-3xl text-center">
      10 motive pentru care să te înscrii în SEOtropolis 1.0
    </h2>
  ),
  etape: [
    `Te învățăm să devii specialist în SEO. Îți vei pune bazele corect, consolidându-ți cunoștințele prin teme aplicate.`,
    'Cu ajutorul cursului nostru, oricine își poate optimiza singur websiteul fără să depindă de cineva. Cursul este pe înțelesul tuturor fiind ușor de asimilat într-un timp scurt.',
    'Este acel curs de SEO în care vei primi feedback personalizat, adecvat ție fără să îți faci griji că nu te bagă nimeni în seamă. Ești tot timpul analizat astfel încât să faci lucrurile corect.',
    'Doar curs de SEO? Nu chiar! Înveți SEO Tehnic, noțiuni de Google Ads, marketing și ești tot timpul susținut să continui să înveți atât la curs cât și în afara lui.',
    ' Nu, nu este un curs oarecare de SEO. Este un curs care te învață cum să fii autodidact, perfecționându-te mereu indiferent de stadiul de învățare la care ești.',
    `SEO din 2000 este total diferit de SEO din ziua de astăzi. Predăm
după documentație actualizată, modernă și suntem mereu
în pas cu tot ce se întâmplă în online.`,
    `Tu vei avea oprotunitatea să fii printre acei oameni care știu ce
să facă cu websiteul lor. Vei fi cel care vei știi dacă ceva merge 
bine sau nu pentru că TU ești cel care își cunoaște cel mai bine
websiteul.`,
    `Un număr foarte mare de cursanți spun că acest curs merită 
să fie mai “discutat” decât este. Mai popular ca oricând.`,
    `Cu doar un click obții acces pe viață la curs, dar și la bonusuri +
și update-urile, beneficiile în plus și cadourile de la ediție la ediție.`,
    `Ai 30 zile garanție, timp în care primești +10 lecții. Tocmai pentru 
te lămuri concrect dacă acest curs este potrivit pentru tine și
nevoile tale.`,
  ],
};

export const beneficii = {
  heading: (
    <h2 className={styles.h2}>
      <span className="text-primary">Curs SEO</span> care Te ajuta sa aduci
      site-uri in primele 3 rezultate organice{' '}
    </h2>
  ),
  elemente: [
    {
      heading: <h3 className="font-bold text-primary">Ușor</h3>,
      descriere: (
        <p>
          Curs complet de SEO organizat și pe înțelesul tuturor (timp de studiu
          și execuție aprox. 1 - 3 ore/zi).
        </p>
      ),
      icon: <ImCheckmark size={'3em'} />,
    },
    {
      heading: <h3 className="font-bold text-primary">Rapid</h3>,
      descriere: (
        <p>
          În 7 săptămâni înveți o abilitate care-ți va permite să te angajezi
          oriunde sau să îți deschizi firmă
        </p>
      ),
      icon: <BiTimer size={'3em'} />,
    },
    {
      heading: <h3 className="font-bold text-primary">Eficient</h3>,
      descriere: (
        <p>Încă din prima zi de curs vei putea înțelege cu ce se mănâncă SEO</p>
      ),
      icon: <BsGraphUpArrow size={'3em'} />,
    },
  ],
};

export const estePtMine = {
  heading: (
    <h2 className="m-10 lead font-bold text-3xl text-center">
      <span className="text-primary">
        Cursul SEO{' '}
        <span className="underline decoration-double	">Seotropolis</span>{' '}
      </span>
      este pentru tine dacă...{' '}
    </h2>
  ),
  elemente: [
    {
      heading: <h3 className="font-bold text-primary">Ești începător</h3>,
      descriere: (
        <p>
          Indiferent că ai la acest moment un job sau nu, acest curs este pentru
          tine dacă vrei să înveți un skill nou. O abilitate extrem de cerută în
          întreaga lume care îți poate asigura nu numai “pâinea”de mâine, ci
          soluții concrete pentru a îți face prorpiile fabrici.
        </p>
      ),
      // icon: <FaBookOpenReader size={'3em'} />,
    },
    {
      heading: <h3 className="font-bold text-primary">Ești antreprenor</h3>,
      descriere: (
        <p>
          Start-up sau cu ani experiență în spate? Acest curs ți se adresează
          dacă dorești să îțo optimizezi singur afacerea sau să știi cu
          exactitate ce fac specialiștii tăi în spate. Pentru antreprenori,
          acest curs le poate oferi șansa de a comunica mai bine cu specialiștii
          SEO.
        </p>
      ),
      // icon: <FcBusiness size={'3em'} />,
    },
    {
      heading: (
        <h3 className="font-bold text-primary">
          Ești proprietar de magazin online
        </h3>
      ),
      descriere: (
        <p>
          Prin vastitatea informației și aplicabilitatea acesteia, cursul oferă
          șansa tuturor magazinelor online de a își transforma websiteurile în
          magenți pentru clienți și profit.{' '}
        </p>
      ),
      // icon: <GrCart size={'3em'} />,
    },
  ],
};



export const cumFunctioneaza = {
  heading: (
    <h2 className="m-10 lead font-bold text-3xl text-center">
      Cum funcționează?{' '}
    </h2>
  ),
  elemente: [
    {
      heading: (
        <h3 className="font-bold text-primary">
          În fiecare zi vei primi o lecție sau mai multe
        </h3>
      ),
      descriere: (
        <p>
          De luni până vineri, vei primi cel puțin o lecție de SEO sau marketing
          (video sau text). Unele dintre ele conțin teme, provocări și resurse
          pentru a te ajuta să-ți perfecționezi abilitățile de expert SEO.
        </p>
      ),
      // icon: <FaBookOpenReader size={'3em'} />,
    },
    {
      heading: (
        <h3 className="font-bold text-primary">
          Vei primi feedback personalizat la temele tale
        </h3>
      ),
      descriere: (
        <p>
          Vom avea teme pe care vei primi feedback personalizat, Iar daca ai
          intrebari sau oricefel de nelamuriri fie poti posta intrebarea pe
          grupul privat de facebook fie putem discuta la webinar
        </p>
      ),
      // icon: <FcBusiness size={'3em'} />,
    },
    {
      heading: (
        <h3 className="font-bold text-primary">
          La finalul cursului, vei fi un expert SEO gata de acțiune
        </h3>
      ),
      descriere: (
        <p>
          Vom fi alături de tine în această călătorie. Vom fi prezenți în grupul
          de Facebook și- ți vom răspunde la întrebări. Te vom surprinde cu
          surprize și vom lega prietenii – chiar dacă acest curs se desfășoară
          online.
        </p>
      ),
      // icon: <GrCart size={'3em'} />,
    },
  ],
};

export const structuraCurs = {
  heading: (
    <h2 className="m-10 lead font-bold text-3xl text-center">
      Cum arată structura cursului?{' '}
    </h2>
  ),
  elemente: [
    {
      heading: (
        <h3 className="font-bold text-primary">
          Introducere in SEO
        </h3>
      ),
      descriere: (
        <ul className="list-none">
          <LE className="block">
            Vei invata cum functioneaza motoarele de cautare
          </LE>
          <LE className="block">Care sunt tipurile de rezultate</LE>
          <LE className="block">Cum ajung site-urile pe Google</LE>
          <LE className="block">
            Si vei mai avea 1 surpriza inca din prima saptamana: Vei invata sa
            setezi un cont de Google Ads ( ne vom folosi de el in saptamanile
            urmatoare)
          </LE>
        </ul>
      ),
      // icon: <FaBookOpenReader size={'3em'} />,
    },
    {
      heading: (
        <h3 className="font-bold text-primary">
          Cum Faci o cercetare de cuvinte cheie
        </h3>
      ),
      descriere: (
        <>
          <p>
            In acest modul o sa invatam cum sa gasim cuvintele cheie potrivite
            pentru site-ul tau
          </p>
          <ul className="list-none">
            <LE>
              O sa gasim exact acele cuvinte pe care le folosesc oamenii in
              cautari.
            </LE>
            <LE>
              Vei avea un exemplu de Certetare de cuvinte cheie ca sa fiu sigur
              ca ai inteles acest mecanism
            </LE>
            <LE>
              Iti voi da acces la template-ul pe care il folosesc eu pentru
              clientii mei ca sa te poti organiza mai usor
            </LE>
          </ul>
        </>
      ),
      // icon: <FcBusiness size={'3em'} />,
    },
    {
      heading: <h3 className="font-bold text-primary">SEO On Page</h3>,
      descriere: (
        <>
          <p>
            Aici vom invata o strategie de SEO care garantat da rezultate si
            care este foarte usor de implementat pentru incepatori
          </p>
          <ul className="list-none">
            <LE>REVERSE ENGENIREENG sau cum studiezi concurenta si iti vii cu ceva mai bun decat ei</LE>
            <LE>Ce este important sa urmaresti in SEO on Page</LE>
            <LE>Ce facem cu cuvintele cheie de la modulul precedent?</LE>
          </ul>
        </>
      ),
      // icon: <GrCart size={'3em'} />,
    },
    {
      heading: <h3 className="font-bold text-primary">Link Building</h3>,
      descriere: (
        <>
         
          <ul className="list-none">
            <LE>Vom vedea cand e nevoie sa facem link building</LE>
            <LE>Ce tipuri de Ancore sa folosesti</LE>
            <LE>Cum sa studiezi concurenta si cum sa iti adaptezi strategia de link building</LE>
            <LE>De unde cumperi backlinkuri</LE>
            <LE>Tool-uri pe care le folosesc eu pentru link building</LE>
          </ul>
        </>
      ),
      // icon: <GrCart size={'3em'} />,
    },
    {
      heading: <h3 className="font-bold text-primary">SEO Tehnic</h3>,
      descriere: (
        <>
         
          <ul className="list-none">
            <p>La sfarsitul acestui modul iti promit ca vei cunoaste toti acesti termeni si nu numai</p>
            <LE>Vom invata despre indexabilitate</LE>
            <LE>Cum indexezi un site?</LE>
            <LE>Cum vedem si cum rezolvam erorile de indexabilitate</LE>
            <LE>robots.txt</LE>
            <LE>sitemap</LE>
            <LE>schema sau ce sunt datele structurate</LE>
            <LE>Taguri html in SEO</LE>
            <LE>Vom invata cum sa folosim Screaming Frog un tool foarte complex pentru SEO in general</LE>
            <LE>Ce este Canibalizarea si cum scapam de ea</LE>
            <LE>Cum detectam continutul duplicat</LE>
            <LE>Viteza de incarcare si cum sa imbunatatim viteza de incarcare a site-ului</LE>
          </ul>
        </>
      ),
      // icon: <GrCart size={'3em'} />,
    },
    {
      heading: <h3 className="font-bold text-primary">EEAT si Blog</h3>,
      descriere: (
        <>
         
            
          <ul className="list-none">
            <LE>Vom invata desre cum sa prezinti incredere prin site-ul tau</LE>
            <LE>Ce inseamna continut de calitate in SEO</LE>
            <LE>Cum sa gasesti subiecte pentru sectiunea de blog</LE>
            <LE>Cum sa vinzi prin articole de blog</LE>
            <LE>Cum sa atragi mai mult trafic pe site-ul tau si cum sa ai mai multe vanzari</LE>
          </ul>
            
        </>
      ),
      // icon: <GrCart size={'3em'} />,
    },
    
  ],
};



export const beneficii2 = {
  heading: (
    <h2 className={styles.h2}>Încă nu te-ai convins? Aruncă o privire...</h2>
  ),
  elemente: [
    {
      heading: (
        <h3 className="font-bold text-primary">
          Cum se simte să fii ultimul pe Google?
        </h3>
      ),
      descriere: (
        <p>
          Cum e fii disperat și să nu știi ce să mai faci pentru că indiferent
          de ce faci, websiteul tău cade de pe-o zi pe alta tot mai jos în
          poziția din Google? Cât te-ar costa să remediezi o astfel de paguba?
          Dar să pierzi clienții noi care nu te găsesc niciodată?
        </p>
      ),
      icon: <FaUserFriends size={'3em'} />,
    },
    {
      heading: <h3 className="font-bold text-primary">Cât timp ai?</h3>,
      descriere: (
        <p>
          Să cauți de unul singur, să înțelegi, să aplici și să și funcționeze
          din prima?Totul fără a avea un mentor care să îți simplifice lucurile,
          să îți explice și să te lămurească rapid ceea ce trebuie să faci și
          ceea ce nu.
        </p>
      ),
      icon: <FaBullseye size={'3em'} />,
    },
    {
      heading: (
        <h3 className="font-bold text-primary">De ce să te înscrii acum?</h3>
      ),
      descriere: (
        <p>
          Ne dorim să ne focusăm pe fiecare cursant în parte. Să putem să ne
          mândrim la scurt timp că acel specialist ne-a onorat cu prezența la
          acest scrut.Oamenii de succes își schimbă viața chiar și învățând un
          skil nou. Oamenii de 10 iau atitudine și ies din mulțime. Oamenii
          curajoși devin specialiștii de top de mâine.
        </p>
      ),
      icon: <FaRocket size={'3em'} />,
    },
  ],
};

