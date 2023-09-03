'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Modal } from 'react-daisyui';
import GetPrice from '@/components/GetPrice';

import Page from '@/app/PageLayout';
import CountdownTimer from '@/components/CountdownTimer';
import ListaAsteptareCurs from '@/components/FormulareNewsletter/ListaAsteptareCurs';
import CardList6 from '@/app/servicii/componenteServicii/CardList6';
import PasiNumerotatiCuHeading from '@/app/servicii/componenteServicii/PasiNumerotatiCuHeading';
import AuthorWidget from './authorWidget';
import { autori} from '@/dateStatice';
import Mesajelement from '@/components/MesajElement/MesajElement';

import { formatDate, calculateWeeksBetweenDates } from '@/helpers/helpers';
import {estePtMine, beneficii, DeCeSaTeInscrii, styles, cumFunctioneaza, structuraCurs, beneficii2} from './texte'

const CursSeoMainComponent = ({
  deschisInscrieri,
  dataIncepereCurs,
  dataFinalCurs,
  inscrisiEditiaCurenta,
  locuriDisponibile,
  stopInscrieri,
  price,
  discountedPrice,
}) => {
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const bonusuri = {
    heading: (
      <h2 className={styles.h2}>
        Înscrie-te în curs până pe{' '}
        <span className="underline underline-offset-8">
          {formatDate(stopInscrieri)}
        </span>{' '}
        și{' '}
        <span className="text-primary">
          primești automat 10 Bonusuri Exclusive:
        </span>
      </h2>
    ),
    elemente: [
      {
        heading: (
          <h3 className="font-bold text-primary">
            „Cum ajuți un website să crească în doar 3 luni”
          </h3>
        ),
        descriere: (
          <div className="prose">
            <p>
              {' '}
              Un webinar în care vei învăța cum să optimizezi un website fără să
              trebuiască să bagi bani sau să apelezi la nenumărate trucuri care
              ar putea să îți pună în pericol afacerea.
            </p>
          </div>
        ),
      },
      {
        heading: (
          <h3 className="font-bold text-primary">
            „Cum să fii primul în motoarele de cătuare pe Google”
          </h3>
        ),
        descriere: (
          <div className="prose">
            <p>
              un webinar înregistrat în care înveți cum să ajungi primul atunci
              când oricine îți caută afacerea pe internet.
            </p>
          </div>
        ),
      },
      {
        heading: (
          <h3 className="font-bold text-primary">
            Cum îți găsești primii clienți ca freelancer.
          </h3>
        ),
        descriere: (
          <p>
            Orice inceput are provocarile lui asa ca eu sunt aici sa te ajut
          </p>
        ),
      },
      {
        heading: (
          <h3 className="font-bold text-primary">
            Cum să îți găsești un job după ce termini cursul de SEO{' '}
          </h3>
        ),
        descriere: (
          <p>
            Orice inceput are provocarile lui asa ca eu sunt aici sa te ajut
          </p>
        ),
      },
      {
        heading: (
          <h3 className="font-bold text-primary">Proceduri și șabloane </h3>
        ),
        descriere: (
          <div className="prose">
            <p>
              iti voi da template-urile si procedurile pe care le folosesc eu -
              Proceduri testate si imbunatatite constant de mine
            </p>
            <p>
              vei înțelege concret cum să respecți anumite proceduri și șabloane
              astfel încât să te bucuri de cele mai bune rezultate
            </p>
          </div>
        ),
      },
      {
        heading: (
          <h3 className="font-bold text-primary">Google Compania Mea</h3>
        ),
        descriere: (
          <>
            <ul className="list-none">
              <li>Cum gestionezi un profil de Google Compania mea</li>
              <li>Cum Creezi un cont de Google Compania Mea</li>
            </ul>
          </>
        ),
        // icon: <GrCart size={'3em'} />,
      },
      {
        heading: (
          <h3 className="font-bold text-primary">
            Exemple de Keyword Research exact ca la carte
          </h3>
        ),
        descriere: (
          <div className="prose">
            <p>
              un material complex care te va ajuta să înțelegi faptul că un
              keyword research îți poate ușura mai apoi munca foarte mult.
            </p>
          </div>
        ),
      },
      {
        heading: (
          <h3 className="font-bold text-primary">
            Interviu cu un specialist în Google Ads
          </h3>
        ),
        descriere: (
          <div className="prose">
            <p>vei învăța despre importanța SEO și în alte domenii conexe</p>
          </div>
        ),
      },
      {
        heading: (
          <h3 className="font-bold text-primary">
            Cum treci peste blocajul începătorului în SEO{' '}
          </h3>
        ),
        descriere: (
          <div className="prose">
            <p>
              Oricune a avut acest blocaj la inceput, e normal, trebuie doar sa
              stii ca nu esti singurul
            </p>
          </div>
        ),
      },
      {
        heading: (
          <h3 className="font-bold text-primary">
            Mini Ghid de Campanie Google Ads
          </h3>
        ),
        descriere: (
          <div className="prose">
            <p>
              un ghid prin care înveți despre Google Ads, câte tipuri de
              campanii există și legătura strânsă dintre SEO și Google Ads.{' '}
            </p>
          </div>
        ),
      },
    ],
  };

  const DesfasurareCurs = () =>{
    return <div className=" text-center leading-9">
       <p>
         {<br />}Cursul se desfasoara online in perioada{' '}
         <DurataCursSapt
           dataFinalCurs={dataFinalCurs}
           dataIncepereCurs={dataIncepereCurs}
         />{' '}
       </p>
       <p>
         Lecții video și text | Feedback personalizat | Grup privat Facebook |
         Tehnici și secrete testate | Înveți research, SEO și bazele
         marketingului digital
       </p>
     </div>;
  }

  const handleAction = () => {
    const handleInscriere = () => {
      router.push('/comanda/curs-seo'); // TODO
    };

    const handleAsteapta = () => {
      console.log('HandleAsteapta');
      setIsModalVisible(!isModalVisible);
    };
    // router.post('/newsletter-subscribe', NewSletterSubscribe);
    deschisInscrieri ? handleInscriere() : handleAsteapta();
  };

  const setCtaMessage = () => {
    return deschisInscrieri
      ? 'Inscrie-te Acum!'
      : 'Intra pe lista de asteptare';
  };

  const DurataCursSapt = () => {
    return (
      <>
        <br />
        <span className="text-underline text-primary underline font-semibold">
          {formatDate(dataIncepereCurs)} - {formatDate(dataFinalCurs)} -{' '}
          {calculateWeeksBetweenDates(
            new Date(dataFinalCurs),
            new Date(dataIncepereCurs)
          )}{' '}
          saptamani
        </span>
      </>
    );
  };

  return (
    <Page>
      <Modal
        open={isModalVisible}
        onClickBackdrop={() => setIsModalVisible(false)}
      >
        <ListaAsteptareCurs numeCurs={'Curs Seo'} />
      </Modal>
      <div className="w-full h-[5rem] bg-secondary flex items-center flex-row gap-5 justify-around px-5 my-5">
        <span className="text-center text-base-100 text-xl ">
          Înscrie-te până pe {formatDate(stopInscrieri)}!
        </span>

        <CTABTN handleAction={handleAction} setCtaMessage={setCtaMessage} />
      </div>
      <section className="contaiener md:w-8/12 block m-auto p-5 bg-base-100">
        <div className="leading-9">
          <div className=" flex flex-col gap-5 items-center justify-around w-full 	 ">
            <span className="text-center text-lg tracking-wide	 ">
              SEOtropolis
            </span>
            <p className="text-lg font-semibold	">
              {formatDate(dataIncepereCurs)} - {formatDate(dataFinalCurs)}
            </p>
            <p className="text-center text-lg">
              Pentru visătorii care vor să se educe sau să vândă mai mult
            </p>
          </div>
          <h1 className="md:text-3xl text-2xl lg:text-5xl font-bold text-center p-5">
            <span className="text-primary">
              {' '}
              Învață SEO și dezvoltă-ți un super skill
            </span>{' '}
            în doar{<br />}
            {calculateWeeksBetweenDates(
              new Date(dataFinalCurs),
              new Date()
            )}{' '}
            săptămâni
          </h1>
          <p className="text-center leading-9 tracking-wider text-xl 	">
            Înveți să îți optimizezi websiteul în topul rezultatelor afisate de
            GOOGLE
          </p>
          <p className="text-center leading-9 tracking-wide text-lg italic 	">
            Un curs susținut de instructori cu experiență de lucru cu peste 100
            de afaceri
          </p>
        </div>
        <div>
          <CountdownTimer targetDate={stopInscrieri} />
        </div>
      </section>
      <section className="contaiener w-8/12  m-auto p-5 flex flex-col items-center gap-5 ">
        <CardList6 {...beneficii} />
        <CTABTN handleAction={handleAction} setCtaMessage={setCtaMessage} lg />

        {deschisInscrieri ? null : (
          <div className="alert alert-error text-center">
            Înscrierile sunt închise!{' '}
          </div>
        )}
        <p className="text-lg font-semibold	">
          {' '}
          Desfășurare online - <DurataCursSapt />
        </p>
        <div className="container border-8 border-base-300/100">
          <Mesajelement
            animation="animate-fade-up"
            start
            text={
              <>
                Lecții video și text, <br /> Feedback personalizat.
              </>
            }
          />
          <Mesajelement
            animation="animate-fade-down "
            text={<>Grup privat Facebook</>}
            delay={'animate-delay-50'}
          />
          <Mesajelement
            animation="animate-fade-left "
            start
            delay={'animate-delay-75'}
            text={<>Tehnici și secrete testate</>}
          />
          <Mesajelement
            animation="animate-fade-right "
            delay={'animate-delay-100'}
            text={<> Înveți research, SEO și bazele marketingului digital</>}
          />
        </div>
        <div className="leading-9 prose">
          <p className="text-center text-lg tracking-wide">
            Perioadă în care primești feedback personalizat de la mentori este
            de <DurataCursSapt />, dar ai acces la acest curs pe viață, cu toate
            actualizările lui, și îl poți parcurge oricând în ritmul tău.
          </p>
          <p className="text-center text-lg tracking-wide">
            Toate lecțiile (inclusiv webinariile live) sunt urcate pe o
            platforma online, deci nu trebuie să-ți adaptezi programul pentru a
            participa la curs.
          </p>
          <p className="text-center text-lg tracking-wide">
            Cursul Este actualizat constant astfel tu vei fi la curent cu
            ultimile noutati din industria SEO
          </p>
        </div>
      </section>
      <section className=" bg-gradient-to-bl from-transparent via-base-300 to-transparent p-5">
        <CardList6 numbered {...bonusuri} />
      </section>
      <section className="   p-5">
        <div className="m-auto text-center">
          <h2 className="text-5xl font-bold">+ un SUPER BONUS!</h2>
          <h2 className="text-4xl font-bold underline text-primary">
            Ședință săptămânală de consultanță cu un mentor SEOtropolis
          </h2>
          <p className="py-6">
            Ai parte de un apel video săptămânal (15 minute) cu un mentor pentru
            a te asigura că te îndrepți în direcția potrivită;
          </p>
          <p className="py-6">
            Primești suport și sfaturi pentru a-ți găsi primul client și pentru
            a te asigura că-i livrezi cele mai bune materiale;
          </p>
          <p className="py-6">
            Beneficiezi de experiența unui Expert SEO care a trecut exact prin
            ce treci tu;
          </p>
          <CTABTN
            lg
            handleAction={handleAction}
            setCtaMessage={setCtaMessage}
          />
        </div>
      </section>
      <section>
        <div className=" text-center my-10 p-10 bg-gradient-to-bl from-transparent via-base-300 to-transparent">
          <h2 className="m-10 lead font-bold text-3xl text-center">
            Primești <span className="text-primary">feedback personalizat</span>
             de la un mentor
          </h2>
          <p className="lead-9 text-lg">
            Astfel încât să fii sigur că te afli tot timpul pe drumul cel bun în
            procesul de învățare.
          </p>
        </div>
      </section>
      <section>
        <div className="container grid grid-flow-row md:grid-flow-col lg:grid-flow-col align-middle justify-center justify-items-center gap-3  relative">
          <img
            className="self-center w-[100%]  mask mask-squircle "
            src={'/png/SEO.jpg'}
            alt="seo image"
            width={300}
            height={600}
          />

          <div className=" m-5 ">
            <h2 className="md:m-10 sm:mx-5 lead font-bold text-xl md:text-3xl text-center">
              <span className="text-primary">Peste 90% din antreprenori </span>
              nu reușesc să facă profit pentru că au un website prost optimizat
            </h2>
            <div className="flex flex-col items-center prose">
              <p>
                Foarte mulți antreprenori și-au deschis websiteuri,
                <span className="font-bold">
                  {' '}
                  însă majoritatea nu știu să îl optimizeze pentru a apărea în
                  prima căutare pe Google
                </span>{' '}
                ceea ce le poate scade atât profitul, vânzările cât și traficul
                pe website.
              </p>

              <p className="lead text-xl">
                Totul se rezumă la: optimizare și iarăși optimizare.
              </p>
              <p>
                Dacă vrei ca clienții tăi să te găsească în prima căutare, este
                important să înveți să îți optimizezi websiteul cum trebuie.
              </p>
              <p>
                Dacă nu știi ce să faci, ce să aplici, cum să aplici și de unde
                să o apuci, clienții vor fugi de tine și nu vor mai intra
                niciodată pe websiteul tău.
              </p>
              <p>
                Antreprenorii care nu înțeleg importanța unui website bine
                optimizat din punct de vedere SEO, vor ajunge la pagina 5 din
                Google, ceea ce înseamnă că nu vor fi găsiți în veci de către
                clienți.
              </p>
              <p>
                Pe de altă parte, sunt afaceri care au prins din zbor sau
                înțeleg cât de cât cum să își optimizeze websiteurile și reușesc
                să își aducă paginile în primele căutări. 
              </p>
              <p>
                Acești antreprenori nu stau cu grija zilei de mâine: să nu cumva
                să le pice websiteul pe poziția 7 din Google. Acești oameni,
                știu exact ce și când să facă astfel încât să remedieze orice
                problemă și să rămână în topul căutărilor.
              </p>
              <p>
                În cursul{' '}
                <span className="italic underline font-semibold">
                  „Seotropolis 1.0”
                </span>
                  înveți de la{' '}
                <Link href="/echipa/alexandru-marcu">Alexandru Marcu</Link> și{' '}
                <Link href={'/echipa/laura-iaurum'}>Laura Iaurum</Link> co-
                fondatori Tomotiv România, tehnici avansate de optimizare în SEO
                pe care le poți aplica imediat pentru a-ți crește afacerea.
              </p>
              <p>Credeai că am încheiat?</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <CardList6 {...estePtMine} />
      </section>
      <section>
        <div className="container m-5 grid grid-flow-row md:grid-flow-col lg:grid-flow-col align-middle justify-center justify-items-center gap-3  relative">
          <img
            className="self-center w-[100%] drop-shadow-xl  mask mask-hexagon-2	m-10 "
            src={'/png/tutorial.jpg'}
            alt="seo image"
            width={300}
            height={600}
          />

          <div className="container mx-5 flex flex-col items-center gap-5">
            {' '}
            <div className="prose leading-9 text-xl drop-shadow-xl">
              <p className="mx-5">
                Locurile sunt limitate grație{' '}
                <span className="font-semibold underline">
                  intruirii 1 la 1 permanente cu fiecare cursant
                </span>{' '}
                {<br />}Cursul se desfasoara in perioada{' '}
                <DurataCursSapt
                  dataFinalCurs={dataFinalCurs}
                  dataIncepereCurs={dataIncepereCurs}
                />{' '}
                Fiecare elev beneficiază de atenție și intruire.
              </p>
            </div>
            <CTABTN
              handleAction={handleAction}
              setCtaMessage={setCtaMessage}
              lg
            />
            {deschisInscrieri ? (
              <span className="strong text-xl text-center">
                Înscrie-te înainte să expire cronometrul
              </span>
            ) : (
              <span className="strong text-xl text-center">
                Inscrierile au luat sfarsit dar te putem anunta cand va avea loc
                urmatoarea editie
              </span>
            )}
            <CountdownTimer targetDate={stopInscrieri} />
            <DesfasurareCurs />
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-bl from-transparent via-green-100 to-transparent">
        <PasiNumerotatiCuHeading {...DeCeSaTeInscrii} />
      </section>
      <section className="">
        <h2 className={styles.h2}>
          Cum am ajuns din șofer de UBER în specialist SEO, sigur te va
          determina să iei o decizie!
        </h2>
        <div className="grid grid-flow-row items-center justify-items-center md:grid-flow-col lg:grid-flow-col">
          <div>
            <AuthorWidget author={autori.alex} />
          </div>
          <div className="prose">
            <p className="leading-10 text-xl text-primary font-semibold">
              E umilitor să ai doua facultăți, si ca junior sa gasesti joburi
              platite mai prost ca un necalificat in firme cu “echipa tanara si
              dinamica”
            </p>
            <p className="font-semibold italic">
              După multe căutări, am reuști să mă specializez în SEO, să îmi
              dezvolt pe lângă și alte abilități precum programarea și să pot
              spune că am luat cele mai bune decizii din viața mea!{' '}
            </p>
            <p className="font-semibold italic">
              După terminarea facultății de actorie și a celei de economie, am
              crezut ca toți ceilalți că voi muta munții din loc. Asta am și
              făcut, însă pe atunci nu știam de asta. Pe atunci credeam că nu am
              nici o șansă, că m-am pierdut și că nu reușesc să îmi găsesc
              drumul.
            </p>
            <p className="font-semibold italic">
              Poate suna clișeic, însă curajul de a face altceva și de a
              încerca, m-a adus în punctul în care sunt astăzi.
            </p>
            <p className="font-semibold italic">
              Am ajutat peste 300 de afaceri să își dubleze vânzările, să își
              crească semnificativ profitul și să își mărească numărul de
              clienți.{' '}
            </p>
            <p className="font-semibold italic">
              Sunt mai mult decât încântat să pun la dispoziție toată experiența
              mea, să pot ajuta la fructificarea talentelor și să mă pot mândri
              cu viitorii mei colegi de breaslă că-au reușit să ajungă în topul
              celor mai buni specialiști!
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-bl py-5 my-5 from-transparent via-base-200 to-transparent">
        <CardList6 {...cumFunctioneaza} />
        <div className="flex items-center justify-center">
          <div className="prose m-5">
            <p className="leading-10	 tracking-widest font-semibold	text-xl">
              Poți parcurge lecțiile când vrei tu și în ritmul tău.
            </p>
            <p className="font-bold italic ">
              Lecțiile sunt deblocate zilnic. Le poți parcurge oricând și-ți
              poți face temele și-n următoarele zile, însă îți recomandăm să ții
              pasul cu ritmul cursului. 
            </p>
            <p className="italic">
              Vei avea acces pe viață la lecțiile cursului, dar vei primi
              feedback la teme doar pe perioada desfășurării.
            </p>
          </div>
        </div>
      </section>
      <section>
        <CardList6 numbered {...structuraCurs} />
      </section>
      <section>
        <CardList6 {...beneficii2} />
        <div className="flex m-5 p-5 flex-col bg-gradient-to-bl items-center from-green-300 via-green-50 to-green-300">
          <h2 className={styles.h2}>
            Înscrie-te în <span className="text-primary">SEOtropolis 1.0 </span>
            imbogateste-ti cunostintele, bucură-te de vânzări nelimitate{' '}
          </h2>
          <CTABTN
            handleAction={handleAction}
            setCtaMessage={setCtaMessage}
            lg
          />
        </div>
      </section>
      <section>
        <h2 className={styles.h2}>Dacă nu acum, atunci când?</h2>
        <div className="flex items-center flex-col m-5 p-5 ">
          <div className="prose">
            <p>
              <span className="font-bold"> “Acum” deja a trecut.</span> Și așa
              va trece și următorul moment și tot așa. Se vor așterne anii și te
              vei umple de regret. Oare ce era mai bine? Să-ncerci sau să îți
              pară rău tot restul vieții că nu ai încercat?
            </p>
            <p>
              Timul nu așteaptă pe nimeni. Timpul trece peste toți. Să trăiești
              cu sentimentul că ai fi putut face mai mult, este calea cea mai
              bună înspre a suferi.
            </p>
            <p>
              <span className="font-bold">Curaj! Ce mai aștepți?</span> Nu, nu
              s-a născut nimeni învățat sau mai deștept. Singura diferență
              dintre tine și altcineva este ca acel cineva a încercat. Acorzi și
              tu o șansă?{' '}
            </p>
            <p>
              Dacă încerci pe pietea ta și-ți place? Dacă peste un an de-acum,
              ești omul căruia nici măcar tu nu-i dădeai o șansă? Omul care a
              devenit împlinit și care face profit.
            </p>
            <h3 className="h3">
              Nu rata și înscrie-te și asigură-ți locul în{' '}
              <span className="text-primary">SEOtropolis 1.0!</span>
            </h3>
          </div>
        </div>
        <div className="flex m-5 p-5 flex-col bg-gradient-to-bl items-center from-green-300 via-green-50 to-green-300">
          <CTABTN
            handleAction={handleAction}
            setCtaMessage={setCtaMessage}
            lg
          />
          <h3>Preț pentru această serie: </h3>
          <GetPrice price={price} discountedPrice={discountedPrice} />
        </div>
        
        <DesfasurareCurs />
      </section>
      <section className="bg-base-200 p-5 my-5">
        <h2 className={styles.h2}>
          <span className="text-primary">SEOtropolis </span>este singurul curs
          din România care pune accent pe cursant. Cursul făcut de oameni pentru
          oameni. Care te învață SEO #pebune și care-și dorește să-și vadă cu
          adevărat toți cursanții specialiști de TOP!{' '}
        </h2>
        <div className="flex flex-col gap-10 items-center  justify-center ">
          <div className="prose">
            <p className="leading-10 italic font-semibold">
              Înveți direct de la experți: tehnici de optimizare, secrete SEO și
              strategii SEO, șabloane și multe altele. Tot ce trebuie să faci
              este să faci este să apeși pe log in!
            </p>
          </div>
        <CTABTN handleAction={handleAction} setCtaMessage={setCtaMessage} lg />
        </div>
      </section>
      <section className='py-5 m-5'>
        <h2 className={styles.h2}>Garanția ZERO riscuri asigurată!</h2>
        <h3 className={styles.h2}>
          Ai 14 zile în care poți cere banii înapoi dacă SEOtropolis  nu e
          pentru tine. 
        </h3>
        <div className="flex justify-center">
          <div className="prose">
            <p>
              Odată ce ai intrat în curs ai destul de mult timp să-ți dai seama
              dacă SEOtropolis  este pentru tine. În aceste 14 zile de garanție
              vei învăța tehnici avansate de SEO studiate, aplicate și testate
              de noi Vei învăța bazele marketingului online și concepte avansate
              precum pâlnii de vânzare, sofisticarea pieței sau călătoria
              clientului.
            </p>
            <p>
              Totuși, dacă ți se pare că acest curs nu e pentru tine, ne poți
              trimite un email la contact@tomotiv.ro în termen de 14 zile de la
              începerea oficială a cursului și-ți vom înapoia toți banii, fără
              să fii nevoit să dai vreo explicație. E atât de simplu!
            </p>
          </div>
        </div>
      </section>
      <div className="flex justify-center">
        <div className="p-10 bg-secondary text-white">
          <p>
            Disclaimer: Rezultatele diferă de la persoană la persoană, în
            funcție de determinarea fiecăreia de a învăța și de experiența
            fiecăreia în ceea ce privește marketingul și antreprenoriatul.
            Aceasta nu este o schemă de îmbogățire peste noapte, ci un curs de
            pregătire profesională care are puterea de a schimba viziunea despre
            vânzări a cursantului. Multe informații sunt revelatoare, dar ca
            acestea să funcționeze e nevoie să fie puse în practică. Vei putea
            obține maximul din acest curs dacă ești deschis la noi perspective,
            determinat să înveți, pui întrebări și lămurești nedumeririle ce pot
            apărea și aplici cât mai repede ceea ce înveți.
          </p>
        </div>
      </div>
    </Page>
  );
};

export default CursSeoMainComponent;

const CTABTN = ({ handleAction, setCtaMessage, lg = false }) => {
  return (
    <button
      onClick={handleAction}
      className={`btn btn-primary text-base-100 ${lg ? 'btn-lg' : null}`}
    >
      {setCtaMessage()}
    </button>
  );
};


