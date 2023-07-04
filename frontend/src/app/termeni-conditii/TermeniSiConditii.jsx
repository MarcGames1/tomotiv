'use client'
import React, {useState, useEffect} from 'react'
import CourseDescriptionEditor from '../admin/cursuri/componenteAdministrareCurs/CourseDescriptionEditor';
import Link from 'next/link';

const TermeniSiConditii = ({site, dateFirma}) => {

    const [content, setContent] = useState(undefined)


  return (
    <>
      <div className="prose m-auto bg-base-100 p-10 prose-xl">
        <h1 className="text-center">Termene și condiții</h1>
        <p>
          Utilizarea Site-ului și achiziționarea Produselor, respectiv bunurile
          și serviciile digitale disponibile pe Site sunt reglementate de
          următorul set de Termene și condițiile (în continuare „TC” sau
          ”Contractul”), precum și de restul documentelor menționate în
          prezentul document, fiind aplicabile tuturor utilizatorilor, fie
          persoane fizice sau juridice, a site-ului {site} (denumit în
          continuare Site-ul sau platforma TOMOTIV), cu excepția cazului în care
          se prevede altfel în prezentul document.
        </p>
        <p>
          Accesarea, utilizarea sau achiziționarea oricăror produse și servicii
          puse la dispoziția Dvs. pe platforma {site} este supusă acceptării
          următorului set de termene și condiții, ce formează Contractul dintre
          Societatea noastră, și dumneavoastră.
        </p>
        <p>
          Vă rugăm să citiți cu atenție prezentul set de Termene și Condiții
          înainte de a plasa o comandă sau de a vă înscrie la un curs. 
        </p>
        <h2 className="text-center">Art.1. PĂRŢILE CONTRACTULUI </h2>
        <p>
          1.1 Prestatorul este Societatea Comerciala <b>{dateFirma.nume}</b>
          ,persoana juridica romana, cu sediul social in{' '}
          <b>{dateFirma.sediuSocial}</b>, înregistrată la Oficiul Registrul
          Comerțului sub Nr. <b>{dateFirma.regCom}</b>,{' '}
          <b>CUI {dateFirma.cui}</b>, având contul <b>{dateFirma.cont}</b>,
          reprezentant prin <b>{dateFirma.reprezentant}</b>, denumita in
          continuare <b>“PRESTATOR”</b>,
        </p>
        <p>
          1.2 Beneficiarul este persoana fizică sau juridică care accesează sau
          utilizează site-ul sau achiziționează bunurile cu conținut digital sau
          serviciile digitale (denumite în continuare produse sau bunuri și
          servicii digitale) puse la dispoziție de către Prestator și se
          identifică prin datele sale care apar pe factura de comandă care se
          generează în momentul completării formularului de înscriere și este
          denumit în continuare Beneficiar, Cursant sau Utilizator. denumite în
          continuare în mod colectiv “Părțile” și în mod individual “Partea”
        </p>
        <b>Definiții: </b>
        <p>
          În sensul prezentului set de termene și condiții, expresiile de mai
          jos au următoarele semnificații:{' '}
        </p>
        <ol>
          <li>
            <p>
              <b>Bunuri cu elemente digitale </b> – orice obiect corporal mobil
              care încorporează un conținut digital sau un serviciu digital sau
              este interconectat cu acestea, astfel încât, în absența
              respectivului conținut digital sau serviciu digital, bunurile nu
              și-ar putea îndeplini funcțiile;
            </p>
          </li>
          <li>
            <p>
              <b>Consumator </b>– orice persoană fizică care acționează în
              scopuri care se află în afara activității sale comerciale,
              industriale, artizanale sau profesionale;{' '}
            </p>
          </li>
          <li>
            <p>
              <b>Comerciant</b> – orice persoană fizică sau juridică, indiferent
              dacă este publică sau privată, care acționează în scopuri ce țin
              de activitatea comercială, industrială, artizanală sau
              profesională;{' '}
            </p>
          </li>
          <li>
            <p>
              <b>Conținut digital</b>– date produse şi furnizate în format
              digital;{' '}
            </p>
          </li>
          <li>
            <p>
              <b>Contract la distanță</b> – orice contract încheiat între
              profesionist şi consumator în cadrul unui sistem de vânzări sau de
              prestare de servicii la distanţă organizat, fără prezenţa fizică
              simultană a profesionistului şi a consumatorului, cu utilizarea
              exclusivă a unuia sau a mai multor mijloace de comunicare la
              distanţă, până la şi inclusiv în momentul în care este încheiat
              contractul;{' '}
            </p>
          </li>
          <li>
            <p>
              <b>Date cu caracter personal</b> – astfel cum sunt definite la
              art. 4 pct. 1 din Regulamentul (UE){' '}
              <Link href={'https://sintact.ro/#/dokument/79153932?cm=DOCUMENT'}>
                2016/679
              </Link>{' '}
              al Parlamentului European şi al Consiliului din 27 aprilie 2016
              privind protecţia persoanelor fizice în ceea ce priveşte
              prelucrarea datelor cu caracter personal şi privind libera
              circulație a acestor date şi de abrogare a Directivei{' '}
              <Link href={'https://sintact.ro/#/dokument/79124701?cm=DOCUMENT'}>
                95/46/CE
              </Link>
              ;{' '}
            </p>
          </li>
          <li>
            <p>
              <b>Preţ</b> – bani sau o reprezentare digitală a valorii datorate
              în schimbul furnizării de conţinut digital sau de servicii
              digitale;{' '}
            </p>
          </li>
          <li>
            <p>
              <b>Serviciu digital</b> – un serviciu ce prezintă una dintre
              următoarele caracteristici:{' '}
            </p>
            <ul>
              <li>
                <p>
                  a) permite consumatorului crearea, prelucrarea, stocarea sau
                  accesarea datelor în format digital;
                </p>
              </li>
              <li>
                <p>
                  b) permite schimbul de date în format digital încărcate sau
                  create de consumator sau de alţi utilizatori ai serviciului
                  respectiv sau orice altă interacţiune cu aceste date;
                </p>
              </li>
            </ul>
          </li>
          <li>
            <p>
              <b>Suport durabil</b> – orice instrument care permite
              consumatorului sau comerciantului să stocheze informaţii care îi
              sunt adresate personal, într-un mod accesibil pentru referinţe
              ulterioare, pentru o perioadă adecvată scopului informaţiilor şi
              care permite reproducerea neschimbată a informaţiilor stocate (de
              ex. adresa de poștă electronică){' '}
            </p>
          </li>
          <li>
            <p>
              <b>Piaţă online</b> – orice serviciu care utilizează software,
              inclusiv un site de internet sau o parte a unui site de internet
              sau o aplicație gestionată de către profesionist sau în numele
              acestuia, care le permite consumatorilor să încheie contracte la
              distanţă cu alţi profesionişti sau consumatori.{' '}
            </p>
          </li>
        </ol>
        <h2 className="text-center">Art.2. OBIECTUL CONTRACTULUI </h2>
        <p>
          1. Obiectul Contractului îl reprezintă prestarea de servicii digitale
          și/sau furnizarea de bunuri cu conținut digital, constând în cursuri
          educaționale și de formare, de către Prestator din gama de produse
          prezentate pe platforma Tomotiv sau prin alte mijloace sau canale de
          comunicare, Beneficiarului, în schimbul unui preț, pe bază de comandă
          respectiv înscriere în conformitate cu clauzele prevăzute în prezentul
          contract.{' '}
        </p>
        <p>
          2.1. Specificațiile Bunurilor și Serviciilor digitale, ce fac obiectul
          prezentului Contract sunt comunicate de către Prestator Beneficiarului
          în detaliu fie prin publicare pe platformă sau în cadrul întâlnirii de
          informare și prezentare online stabilite între Beneficiar și
          reprezentanții Prestatorului.{' '}
        </p>
        <p>
          2.2. Prestatorul își îndeplinește obligația de livrare a bunurilor cu
          conținut digital în momentul în care bunul este transmis și predat
          către Beneficiar, la adresa menționată de către beneficiar.
        </p>
        <p>
          2.3. Prestatorul își îndeplinește obligația de furnizare a
          conținutului digital/serviciilor digitale la data la care conținutul
          digital/serviciul digital devine accesibil pentru Beneficiar respectiv
          prin activarea contului de Utilizator pentru accesul pe platforma
          Tomotiv, iar achitarea prețului reprezintă acordul expres al
          Beneficiarului de începere a furnizării Serviciilor digitale.
        </p>
        <p>
          2.4. Bunurile și Serviciile Digitale nu sunt purtătoare de
          actualizări, nefiind menite a fi supuse vreunor actualizări sau
          susceptibile de actualizare.{' '}
        </p>
        <p>
          2.5 Accesul și utilizarea Site-ului, precum și efectuarea
          comenzilor/înscrierilor, respectiv achiziționarea bunurilor cu
          conținut digital și/sau prestarea serviciilor digitale sunt supuse și
          reglementate de prezentul document, de contractul încheiat între
          părți, de politicile Societății, precum și de legislația aplicabilă în
          materie. Folosirea Site-ului, efectuarea comenzilor, achiziționarea și
          furnizarea Bunurilor și Serviciilor digitale nu sunt posibile în lipsa
          unui acord asupra Termenilor și Condițiilor.{' '}
          <b>
            În situația în care nu sunteți de acord cu prevederile acestor
            documente, vă rugăm să nu utilizați Site-ul și să nu efectuați
            comenzi/înscrieri. {' '}
          </b>
        </p>
        <h2 className="text-center">
          Art.3. ÎNCHEIEREA CONTRACTULUI. DURATA CONTRACTULUI{' '}
        </h2>
        <p>
          3.1 Prin acceptarea termenilor și condițiilor, respectiv prin comanda
          Beneficiarului și confirmarea comenzii de către Prestator, contractul
          se consideră încheiat între părți.
        </p>
        <p>
          {' '}
          3.2 Prezentul document are valoare de contract, fiind valabil încheiat
          la distanță, exclusiv prin utilizarea de mijloace de comunicare la
          distanță, fără prezența fizică simultană a părților și fără a fi
          necesară semnătura părților (olografă sau electronică). Pentru
          evitarea oricărui dubiu, Părțile convin că semnătura nu reprezintă în
          niciun caz o condiție de validitate a Contractului.
        </p>
        <h2 className="text-center">
          Art.4. PREŢUL CONTRACTULUI ŞI MODALITĂŢI DE PLATĂ{' '}
        </h2>
        <p>
          4.1. Prețul bunurilor sau serviciilor digitale sunt fie afisate pe
          site, fie comunicate de către Prestator în cadrul întâlnirii de
          informare și prezentare stabilite între Beneficiar și reprezentanții
          Prestatorului.
        </p>
        <p>
          4.2. Plata se va putea face online, cu cardul, prin intermediul unui
          procesator de plăți.
        </p>
        <p>
          4.3. Bunurile sau Serviciile digitale se pot plăti fie integral, fie
          în rate, în funcție de înțelegerea părților. În cazul în care
          Beneficiarul efectuează plata prețului prin plăți recurente
          Beneficiarul nu trebuie să parcurgă o procedură lunară sau anuală de
          plată, sumele aferente bunurilor și serviciilor digitale, ce fac
          obiectul contractului, urmând a fi debitate automat din contul
          Beneficiarului, la scadența fiecărei rate, potrivit înțelegerii
          părților.
        </p>
        <p>
          4.4. Plata recurentă presupune că la data scadentă a fiecărei rate se
          va efectua automat plata de pe cardul introdus de către Beneficiar la
          prima comandă. Beneficiarul poate dezactiva în orice moment opțiunea
          de plată recurentă, cu un singur click, din contul de utilizator a
          Beneficiarului pe platforma Prestatorului.
        </p>
        <p>
          4.5. Prestatorul va emite Beneficiarului o factură pentru bunurile și
          serviciile digitale ce fac obiectul prezentului contract, scop în care
          Beneficiarul va furniza Prestatorului toate informațiile complete,
          corecte și actuale necesare emiterii facturii și a documentelor
          justificative prevăzute de lege.
        </p>
        <p>
          4.6. Factura pentru orice comandă (inclusiv pentru plățile recurente)
          va putea fi regăsită în contul de utilizator al Beneficiarului de pe
          platforma Prestatorului și descărcată de pe aceasta.
        </p>
        <h2 className="text-center">
          Art.5 CONFORMITATEA ȘI MĂSURILE CORECTIVE APLICABILE ÎN CAZUL
          CONSUMATORILOR
        </h2>
        <p>
          <b>
            Prezenta secțiune se aplică în mod exclusiv consumatorilor, astfel
            cum sunt definiți de legea aplicabilă și anume: persoanelor fizice
            care acţionează în scopuri care se află în afara activităţii lor
            comerciale, industriale, artizanale sau profesionale.{' '}
          </b>
        </p>
        <h3 className="text-center">
          5.1 Conformitatea bunului și serviciilor digitale
        </h3>
        <p>
          Prestatorul are obligația să furnizeze bunurile și serviciile digital,
          ce fac obiectul prezentului Contract, cu îndeplinirea cerințelor
          prevăzute de normele legale aplicabile, în special prevăzute de OUG
          140/2021 și OUG 141/2021. 5.2 Cerinţe subiective de conformitate
          Bunurile și serviciile digitale sunt în conformitate cu contractul
          dacă îndeplinesc următoarele condiţii:
        </p>
        <ol>
          <li>
            <p>
              respectă descrierea, tipul, cantitatea şi calitatea şi deţin
              funcţionalitatea, compatibilitatea, interoperabilitatea şi
              caracteristicile prevăzute în prezentul contract;
            </p>
          </li>
          <li>
            <p>
              corespund scopului special pentru care Beneficiarul le solicită,
              pe care Beneficiarul l-a adus la cunoștința Prestatorului cel
              târziu în momentul încheierii contractului şi pe care Prestatorul
              l-a acceptat;
            </p>
          </li>
          <li>
            <p>
              {' '}
              sunt livrate/furnizate împreună cu toate accesoriile şi cu toate
              instrucţiunile, inclusiv de instalare, dacă este cazul;
            </p>
          </li>
          <li>
            <p>sunt furnizate cu actualizări, dacă este cazul.</p>
          </li>
        </ol>
        <h3 className="text-center">5.2 Cerinţe subiective de conformitate</h3>
        <p>
          Bunurile și serviciile digitale sunt în conformitate cu contractul
          dacă îndeplinesc următoarele condiţii:
        </p>
        <ol>
          <li>
            <p>
              respectă descrierea, tipul, cantitatea şi calitatea şi deţin
              funcţionalitatea, compatibilitatea, interoperabilitatea şi
              caracteristicile prevăzute în prezentul contract;
            </p>
          </li>
          <li>
            <p>
              corespund scopului special pentru care Beneficiarul le solicită,
              pe care Beneficiarul l-a adus la cunoștința Prestatorului cel
              târziu în momentul încheierii contractului şi pe care Prestatorul
              l-a acceptat;
            </p>
          </li>
          <li>
            <p>
              {' '}
              sunt livrate/furnizate împreună cu toate accesoriile şi cu toate
              instrucţiunile, inclusiv de instalare, dacă este cazul;
            </p>
          </li>
          <li>
            <p>sunt furnizate cu actualizări, dacă este cazul.</p>
          </li>
        </ol>
        <h3 className="text-center">5.3 Cerinţe obiective de conformitate </h3>
        <p>
          (1) Pe lângă respectarea cerinţelor subiective de conformitate
          prevăzute la art. 5.2, bunurile și serviciile digitale trebuie să
          îndeplinească următoarele condiţii:
        </p>
        <ol>
          <li>
            <p>
              Corespund scopurilor pentru care s-ar utiliza în mod normal bunuri
              / servicii digitale de acelaşi tip, ţinând seama, dacă este cazul,
              de prevederile legale în vigoare, de standarde tehnice sau, în
              absenţa unor astfel de standarde tehnice, de coduri de conduită
              aplicabile în domeniu şi specifice sectorului;
            </p>
          </li>
          <li>
            <p>
              Dacă este cazul, bunul și serviciile digitale sunt furnizate
              împreună cu accesoriile și instrucțiunile;
            </p>
          </li>
          <li>
            <p>
              Bunul digital respectă cantitatea şi deţine calităţile şi alte
              caracteristici, inclusiv în materie de durabilitate,
              funcţionalitate, compatibilitate şi securitate, care sunt normale
              pentru bunurile de acelaşi tip şi la care Beneficiarul se poate
              aştepta în mod rezonabil, având în vedere natura bunului şi ţinând
              seama de orice declaraţie publică făcută de Prestator sau în
              numele acestuia;
            </p>
          </li>
          <li>
            <p>
              serviciile digitale respectă cantitatea şi deţin calităţile şi
              caracteristicile de performanţă, inclusiv în materie de
              funcţionalitate, compatibilitate, accesibilitate, continuitate şi
              securitate, care sunt normale pentru conţinutul digital sau
              serviciile digitale de acelaşi tip şi la care Beneficiraul se
              poate aştepta în mod rezonabil, având în vedere natura
              conţinutului digital sau a serviciului digital şi ţinând seama de
              orice declaraţie publică făcută de Prestator sau în numele
              acestuia.{' '}
            </p>
          </li>
          <li>
            <p>
              este în conformitate cu orice versiune de testare sau prezentare a
              conținutului digital sau a serviciului digital pusă la dispoziție
              de Prestator înainte de încheierea contractului.
            </p>
          </li>
        </ol>
        <p>
          (2) Prestatorul nu este ţinut să respecte declaraţiile publice, în
          conformitate cu dispoziţiile alin. (1) lit. c) și lit. d) de mai sus,
          în cazul în care acesta demonstrează cel puţin una din următoarele
          situaţii:
        </p>
        <ol>
          <li>
            <p>
              nu cunoştea şi nu ar fi putut, în mod rezonabil, să cunoască
              declaraţia publică în cauză;
            </p>
          </li>
          <li>
            <p>
              {' '}
              până la momentul încheierii contractului, declaraţia publică a
              fost rectificată în acelaşi mod sau într-un mod similar celui în
              care a fost făcută;
            </p>
          </li>
          <li>
            <p>
              decizia de a achiziţiona bunurile sau serviciile digitale nu ar fi
              putut fi influenţată de declaraţia publică.
            </p>
          </li>
        </ol>
        <p>
          (3) În cazul în care contractul prevede furnizarea continuă a
          conținutului digital sau a serviciului digital pe parcursul unei
          anumite perioade, conținutul digital sau serviciul digital trebuie să
          fie conform pe întreaga durată a perioadei respective.
        </p>
        <p>
          (4) Nu există o neconformitate potrivit prevederilor alin. (1) și (2)
          dacă, la momentul încheierii contractului, Beneficiarul a fost
          informat în mod explicit și într-un limbaj clar că o anumită
          caracteristică a bunurilor/serviciilor digitale nu corespund
          cerinţelor obiective de conformitate prevăzute la alin. (1) și (2),
          iar Beneficiarul a acceptat în mod expres şi separat acest lucru la
          momentul încheierii contractului.
        </p>
        <h3>Art. 5.4: Instalarea incorectă a bunurilor </h3>
        <p>
          Orice neconformitate cauzată de instalarea incorectă a bunurilor este
          considerată ca reprezentând o neconformitate a bunurilor în una din
          următoarele situaţii:
        </p>
        <ol>
          <li>
            <p>
              instalarea face parte din contractul încheiat cu Prestatorul şi a
              fost realizată de Prestator sau sub răspunderea acestuia; r.
            </p>
          </li>
          <li>
            <p>
              instalarea, destinată să fie realizată de Beneficiar, a fost
              realizată de acesta şi instalarea incorectă s-a datorat unor
              deficienţe în instrucţiunile de instalare furnizate de Prestator
            </p>
          </li>
        </ol>
        <h3 className="text-center">
          Art. 5.5: Integrarea incorectă a conţinutului digital sau a
          serviciului digital{' '}
        </h3>
        <p>
          Se consideră ca fiind o neconformitate a conţinutului digital sau a
          serviciului digital orice neconformitate cauzată de integrarea
          incorectă a conţinutului digital sau a serviciului digital în mediul
          digital al Beneficiarului, dacă este îndeplinită una din următoarele
          condiţii:
        </p>
        <ol>
          <li>
            <p>
              conţinutul digital sau serviciul digital a fost integrat de
              Prestator sau sub răspunderea acestuia;
            </p>
          </li>
          <li>
            <p>
              conţinutul digital sau serviciul digital a fost destinat să fie
              integrat de Beneficiar, iar integrarea incorectă s-a datorat unor
              deficienţe în instrucţiunile de integrare furnizate de Prestator.
            </p>
          </li>
        </ol>
        <h3 className="text-center">5.6. Răspunderea Prestatorului </h3>
        <p>
          (1) În cazul bunurilor cu conținut digital, Prestatorul răspunde faţă
          de Beneficiar pentru orice neconformitate potrivit dispozițiilor
          legale aplicabile, respectiv pentru orice neconformitate care există
          în momentul livrării și care este constatată în termen de 2 ani de la
          data respectivă.
        </p>
        <p>
          (2) În cazul serviciilor digitale, Prestatorul răspunde pentru
          nefurnizare sau neconformitate a conținutului digital sau a
          serviciului digital potrivit prevederilor legale aplicabile.
        </p>
        <h3 className="text-center">
          5.7. Măsurile corective în caz de neconformitate a bunului digital{' '}
        </h3>
        <p>
          (1) În caz de neconformitate, Beneficiarul are dreptul la aducerea în
          conformitate a bunului, la o reducere proporţională a preţului sau la
          încetarea contractului în condiţiile prevăzute de dispozițiile legale
          aplicabile.
        </p>
        <p>
          (2) Pentru ca bunul să fie adus în conformitate, Beneficiarul poate
          opta între reparaţie şi înlocuire, cu excepţia cazului în care măsura
          corectivă aleasă ar fi imposibilă sau, în comparaţie cu cealaltă
          măsură corectivă disponibilă, ar impune Prestatorului costuri care ar
          fi disproporţionate, luând în considerare toate circumstanţele,
          inclusiv următoarele:
        </p>
        <ol>
          <li>
            <p>
              valoarea bunurilor în cazul în care nu ar fi existat
              neconformitatea;
            </p>
          </li>
          <li>
            <p>gravitatea neconformităţii; </p>
          </li>
          <li>
            <p>
              dacă măsura corectivă alternativă ar putea fi executată fără vreun
              inconvenient semnificativ pentru Beneficiar.
            </p>
          </li>
        </ol>
        <p>
          (3) Prestatorul poate refuza să aducă în conformitate bunul digital
          dacă reparaţia sau înlocuirea este imposibilă sau i-ar impune costuri
          care ar fi disproporţionate, luând în considerare toate
          circumstanţele, inclusiv cele prevăzute la alin. (2) lit. a) şi b).
        </p>
        <p>
          (4) Beneficiarul are dreptul fie să obţină o reducere proporţională a
          preţului în conformitate cu dispozițiile legale aplicabile, fie să
          obţină încetarea contractului în conformitate cu dispozițiile legale
          aplicabile, în oricare dintre următoarele cazuri:
        </p>
        <ol>
          <li>
            <p>
              Prestatorul nu a finalizat reparaţia sau înlocuirea în condițiile
              legii într-un termen rezonabil care nu poate depăși 15 zile
              calendaristice sau Prestatorul a refuzat să aducă în conformitate
              bunurile potrivit prevederilor alin. (3) de mai sus;
            </p>
          </li>
          <li>
            <p>
              Se constată o neconformitate, în pofida eforturilor Prestatorului
              de a o remedia;
            </p>
          </li>
          <li>
            <p>
              Neconformitatea este de o asemenea gravitate încât justifică o
              reducere de preţ sau dreptul la încetarea imediată a contractului;
            </p>
          </li>
          <li>
            <p>
              Prestatorul a declarat că nu va aduce bunurile în conformitate
              într-un termen rezonabil sau fără inconveniente semnificative
              pentru Beneficiar ori acest lucru reiese clar din circumstanţele
              cazului.
            </p>
          </li>
        </ol>
        <p>
          (5) Beneficiarul nu are dreptul de a obţine încetarea contractului
          dacă neconformitatea este minoră.{' '}
        </p>
        <p>
          (6) Beneficiarul are dreptul de a suspenda plata unei părţi restante
          din preţul bunului digital sau a unei părţi a acestuia până în
          momentul în care Prestatorul îşi va fi îndeplinit obligaţiile care îi
          revin potrivit legii.
        </p>
        <p>
          (7) Beneficiarul poate opta pentru o anumită măsură corectivă în cazul
          în care neconformitatea bunului digital este constatată la scurt timp
          după livrare, fără a depăşi 30 de zile calendaristice.
        </p>
        <h3 className="text-center">
          5.8. Măsurile corective în cazul nefurnizării sau neconformității
          serviciilor digitale{' '}
        </h3>
        <h4>
          1. Măsurile corective în cazul nefurnizării conținutului / serviciilor
          digitale
        </h4>
        <p>
          În cazul în care Prestatorul nu furnizează serviciul digital, fără
          întârzieri nejustificate, după încheierea contractului, Beneficiarul
          îi va solicita Prestatorului să furnizeze serviciul digital. Dacă, în
          aceste circumstanţe, Prestatorul nu furnizează serviciul digital fără
          întârzieri nejustificate sau într-un termen suplimentar, astfel cum
          convin în mod expres părţile, Beneficiarul are dreptul să înceteze
          contractul.
        </p>
        <p>
          Dispozițiile de mai sus nu se aplică, iar Beneficiarul are dreptul să
          înceteze contractul direct, în una dintre următoarele situaţii:
        </p>
        <ol>
          <li>
            <p>
              Prestatorul a declarat că nu va furniza serviciul digital sau
              acest lucru reiese clar din circumstanţe;
            </p>
          </li>
          <li>
            <p>
              Părțile au convenit că pentru Beneficiar este esenţială furnizarea
              la o anumită dată sau acest lucru reiese în mod clar din
              circumstanţele care însoţesc încheierea contractului, iar
              Prestatorul nu furnizează conţinutul digital sau serviciul digital
              până la sau la data respectivă.
            </p>
          </li>
        </ol>
        <h4>
          2. Măsurile corective în cazul neconformității conținutului /
          serviciilor digitale
        </h4>
        <p>
          (1) În caz de neconformitate, Beneficiarul are dreptul la aducerea în
          conformitate a conținutului digital sau a serviciului digital, la o
          reducere proporţională a preţului sau la încetarea contractului în
          condiţiile prevăzute în prezentul articol.
        </p>
        <p>
          (2) Beneficiarul are dreptul la aducerea în conformitate a
          conţinutului digital sau a serviciului digital, cu excepţia cazului în
          care acest lucru ar fi imposibil sau ar impune Prestatorului costuri
          care ar fi disproporţionate, luând în considerare toate
          circumstanţele, inclusiv:
        </p>
        <ol>
          <li>
            <p>
              valoarea conţinutului digital sau a serviciului digital în cazul
              în care nu ar fi existat neconformitatea;
            </p>
          </li>
          <li>
            <p> gravitatea neconformităţii.</p>
          </li>
        </ol>
        <p>
          {' '}
          (3) Prestatorul aduce serviciul digital în conformitate într-o
          perioadă de timp rezonabilă care nu poate depăşi 15 zile
          calendaristice din momentul în care Prestatorul a fost informat de
          către Beneficiar cu privire la neconformitate şi care este stabilit de
          comun acord, în scris, între părți, fără costuri şi fără vreun
          inconvenient semnificativ pentru Beneficiar, ţinând seama de natura
          conţinutului digital sau a serviciului digital şi de scopul pentru
          care Beneficiarul a solicitat conţinutul digital sau serviciul
          digital.
        </p>
        <p>
          (4) Beneficiarul are dreptul fie la reducerea proporţională a preţului
          în conformitate cu dispozițiile legale aplicabile, în cazul în care
          conţinutul digital sau serviciul digital este furnizat în schimbul
          plăţii unui preţ, fie la încetarea contractului în conformitate cu
          dispozițiile legale aplicabile, în oricare dintre următoarele cazuri:
        </p>
        <ol>
          <li>
            <p>
              {' '}
              măsura corectivă pentru aducerea în conformitate a conţinutului
              digital sau a serviciului digital este imposibilă sau
              disproporţionată pentru Prestator;{' '}
            </p>
          </li>
          <li>
            <p>
              Prestatorul nu a adus în conformitate serviciul digital în
              conformitate cu alin.(3) de mai sus;
            </p>
          </li>
          <li>
            <p>
              se constată o neconformitate, în pofida încercării Prestatorului
              de a aduce conţinutul digital sau serviciul digital în
              conformitate;
            </p>
          </li>
          <li>
            <p>
              Prestatorul nu a adus în conformitate serviciul digital în
              conformitate cu alin.(3) de mai sus;
            </p>
          </li>
          <li>
            <p>
              neconformitatea este de o asemenea gravitate încât justifică o
              reducere imediată de preţ sau încetarea imediată a contractului;
            </p>
          </li>
          <li>
            <p>
              Prestatorul a declarat că nu va aduce serviciul digital în
              conformitate, în termenul şi condiţiile prevăzute la alin. (3),
              ori acest lucru reiese clar din circumstanţele cazului.
            </p>
          </li>
        </ol>
        <p>
          (5) Reducerea de preţ este proporţională cu diminuarea valorii
          serviciului digital furnizat Beneficiarului în comparaţie cu valoarea
          pe care serviciul digital ar avea-o dacă ar fi în conformitate.
        </p>
        <p>
          {' '}
          (6) Atunci când serviciul digital este furnizat în schimbul plăţii
          unui preţ, Beneficiarul are dreptul de a obţine încetarea contractului
          numai dacă neconformitatea nu este minoră.
        </p>
        <p>
          {' '}
          (7) În caz de neconformitate, Beneficiarul are dreptul de a suspenda
          plata unei părţi restante din preţul serviciului digital sau a unei
          părţi a acesteia până la aducerea în conformitate de către Prestator a
          serviciului digital, cu condiţia ca plata suspendată să nu fie
          aferentă unui conţinut digital sau serviciu digital deja furnizat de
          către Prestator şi care a fost conform.
        </p>
        <h2 className="text-center">
          Art.6 DREPTURILE ŞI OBLIGAŢIILE PĂRŢILOR
        </h2>
        <h3 className="text-center">
          6.1 Drepturile și Obligațiile Prestatorului
        </h3>
        <p>
          {' '}
          6.1.1 Să furnizeze Bunurile și Serviciile digitale, în condițiile
          prevăzute de prezentul Contract și de normele aplicabile.
        </p>{' '}
        <p>
          6.1.2 Să ofere Bunurile și Serviciile, ce fac obiectul prezentului
          Contract, în condițiile şi la termenele stabilite și comunicate în
          prealabil Beneficiarului.
        </p>{' '}
        <p>
          {' '}
          6.1.3 Să emită factura fiscală aferentă, în modalitățile și în
          termenul prevăzut în prezentul Contract.
        </p>{' '}
        <p>
          {' '}
          6.1.4 În cazul retragerii Beneficiarului din contract în condițiile
          prevăzute în Anexa 1 din Contract sau a încetării contractului de
          către Beneficiar în condițiile Contractului, Prestatorul poate
          interzice orice utilizare ulterioară a conținutului digital sau a
          serviciului digital, ce face obiectul Contractului sau furnizat în
          temeiul Contractului, Prestatorul procedând la blocarea accesului la
          conținutul digital sau la serviciul digital, inclusiv la pachetul de
          bonusuri și/sau prin dezactivarea contului de utilizator al
          Beneficiarului.
        </p>
        <h2 className="text-center">
          6.2 Drepturile și obligațiile Beneficiarului{' '}
        </h2>
        <p>
          {' '}
          6.2.1. Să achite prețul convenit conform prezentului Contract, la
          termenele stabilite. În cazul în care Beneficiarul nu onorează
          termenele de plata stabilite, Prestatorul este absolvit de livrarea
          bunului sau de furnizarea serviciilor digitale și de obligația
          oferirii accesului la platformă sau oricăror facilități sau servicii
          conexe sau bunurilor neachitate. În această situație, Beneficiarul nu
          va beneficia de bonusul prevăzut în Contract.
        </p>
        <p>
          6.2.2. Să respecte întocmai regulile de comunicare stabilite de
          Prestator pe grupul de suport, oferit ca parte a pachetului de bonus,
          și să nu folosească un limbaj nepotrivit sau licențios pe acest grup
          la adresa Prestatorului sau a oricărui alt participant în cadrul
          grupului sau cursului, fiind interzisă acestuia postarea de mesaje
          scrise/verbale sau manifestarea unor atitudini apte de a provoca orice
          fel de daună sau ar periclita imaginea Prestatorului sau a oricărei
          alte persoane. Discuțiile și/sau argumentările se vor purta pe un ton
          colegial, mesajele care nu respectă aceste minime reguli de conduită
          urmând a fi eliminate de pe platformă fără a fi necesară vreo
          notificare prealabilă.
        </p>
        <p>
          {' '}
          6.2.3 În ipoteza în care Prestatorul apreciază că faptele/mesajele
          postate/limbajul/tonul folosit ar fi de natură a aduce prejudicii de
          orice fel sau a periclita imaginea acestuia ori sunt contrare normelor
          de drept, valorilor sociale/morale, ordinii publice sau bunelor
          moravuri, poate hotărî, după notificarea prealabilă a Beneficiarului,
          să scoată Beneficiarul din grupul de suport, fără a mai avea acces la
          acesta. Pentru înlăturarea oricărei îndoieli, Beneficiarul nu va avea
          dreptul de a pretinde restituirea prețului în astfel de situații.
        </p>
        <p>
          6.2.4. Să nu pună la dispoziția niciunui terţ, indiferent de metodă
          ori suport, cu titlu gratuit sau oneros, materialele/cursul sau părți
          ale acestuia pus la dispoziția sa de către Prestator prin accesul la
          platforma Prestatorului, Beneficiarul având exclusiv dreptul de a
          folosi materialele/cursul spre îmbunătățirea abilităților personale.
          În acest sens Beneficiarul este obligat să nu divulge userul și parola
          de conectare la contul de utilizator către terți, acestea fiind
          destinate strict pentru a fi utilizate de Beneficiar.
        </p>
        <p>
          6.2.5. Să nu aducă atingere imaginii Edukiwi, participanților sau
          autorului și să respecte dreptul de proprietate intelectuală și
          confidențialitatea informațiilor și datelor la care are acces în baza
          prezentului Contract.
        </p>
        <p>
          6.2.6. Beneficiarul are dreptul să i se respecte confidențialitatea
          informațiilor și a datelor furnizate în temeiul prezentului Contract,
          inclusiv dreptul la confidențialitatea și protecția datelor cu
          caracter personal.
        </p>
        <p>
          6.2.7 Beneficiarul are dreptul să solicite și să obțină factura
          fiscală aferentă plății efectuate.
        </p>
        <p>
          {' '}
          6.2.8 În cazul încetării contractului Beneficiarul are obligația de a
          se abține de la utilizarea conținutului digital sau serviciului
          digital oferit de Prestator, fiind interzisă punerea acestora la
          dispoziția terților.
        </p>
        <p>
          6.2.9 Beneficiarul poate oferi din proprie inițiativă sau la
          solicitarea Prestatorului sugestii, păreri, testimoniale în legătură
          cu bunurile și serviciile furnizare de Prestator. În acest sens
          Prestatorul va avea dreptul de a include sugestiile, părerile sau
          testimonialele cu privire la bunurile și serviciile Prestatorului în
          articolele, platforma sau în materialele de prezentare ale
          Prestatorului, precum și de a publica sugestiile, părerile sau
          testimonialele cu privire la bunurile și serviciile Prestatorului în
          reviste și pe pagini web.
        </p>
        <h2 className="text-center"> Art.7 DREPTUL DE RETRAGERE</h2>
        <h3 className="text-center"> 7.1. Beneficiari – comercianți</h3>
        <p>
          Având în vedere prevederile OUG 34/2014, în situația în care Produsele
          respectiv bunurile și / sau serviciile digitale oferite de Prestator
          sunt achiziționate de comercianți, întrucât aceștia nu se încadrează
          în noțiunea de „consumator”, astfel cum acesta este definit de
          legislația în vigoare, dreptul de retragere nu este aplicabil.
        </p>
        <h3 className="text-center"> 7.2. Beneficiari – consumatori </h3>    
        <p>
          {' '}
          Dreptul de retragere aplicabil Beneficiarilor, care au calitatea de
          consumatori, potrivit definiției din partea introductivă, este
          reglementat în Anexa 1 la prezentul Contract.
        </p>
        <h2 className="text-center">Art.8 RĂSPUNDERE</h2>
        <p>
          8.1. Fiecare dintre părți este răspunzătoare pentru îndeplinirea
          întocmai, integral și la timp a tuturor obligațiilor asumate prin
          prezentul contract.{' '}
        </p>
        <p>
          8.2. Acceptarea termenilor și condițiilor contractuale se confirmă
          prin bifarea căsuței corespunzătoare de pe site. Prin accesarea
          site-ului, crearea Contului și utilizarea site-ului acceptați în mod
          expres și neechivoc termenii și condițiile site-ului în ultima lor
          versiune, comunicată în cadrul site-ului.{' '}
        </p>
        <p>
          8.3. În cazul în care Beneficiarul-consumator, fără a exista vreun caz
          de neconformitate/nefurnizare a bunurilor și serviciilor digitale,
          decide în mod unilateral ca, după furnizarea bunului și serviciilor
          digitale de către Prestator, să nu utilizeze bunul digital sau să nu
          acceseze platforma și instrumentele digitale puse la dispoziție de
          Prestator, în temeiul prezentului Contract sau se răzgândește fără a
          exista un caz de neconformitate/nefurnizare, Beneficiarul nu este
          îndreptățit la restituirea prețului, iar dacă prețul a fost achitat
          numai parțial, obligațiile de plată asumate rămân valabile potrivit
          contractului. Prezenta prevedere nu va aduce atingere dreptului de
          retragere a Beneficiarului.{' '}
        </p>
        <p>
          8.4. În cazul în care Beneficiarul-comerciant, decide în mod
          unilateral ca, în cursul sau după furnizarea bunului și/sau
          serviciilor digitale de către Prestator, să nu utilizeze bunul digital
          sau să nu acceseze platforma și instrumentele digitale puse la
          dispoziție de Prestator, în temeiul Contractului sau se răzgândește,
          fără a exista un caz de culpă în executarea obligațiilor contractuale
          de către Prestator, Beneficiarul nu este îndreptățit la restituirea
          prețului, iar dacă prețul a fost achitat numai parțial, obligațiile de
          plată asumate rămân valabile potrivit contractului.{' '}
        </p>
        <p>
          8.5. Pentru accesarea platformei Prestatorului este necesară existenta
          unei conexiuni la internet a Beneficiarului, Prestatorul nu poate
          garanta că serviciile oferite vor fi întotdeauna conforme cu dorințele
          Beneficiarului, neîntrerupte, la timp si fără erori, sau că erorile
          vor fi corectate în timp util, depinzând de furnizorul de servicii de
          internet a Beneficiarului, astfel Prestatorul nu poate fi ținut
          răspunzător pentru aceste disfuncționalități.{' '}
        </p>
        <p>
          8.6. Pentru utilizarea bunului digital, Beneficiarul va avea nevoie de
          o unitate CD/DVD-reader.{' '}
        </p>
        <h2 className="text-center">Art.9. CLAUZA DE CONFIDENŢIALITATE </h2>
        <p>
          9.1. Beneficiarul se obligă să păstreze confidențialitatea față de
          terți, să nu dezvăluie sub nicio formă și prin niciun mijloc, să nu
          utilizeze în nicio modalitate, fie direct, fie indirect, fie în folos
          propriu, fie în folosul altuia, niciun fel de materiale, acte, date,
          informații rezultate din/în legătură cu relația contractual dintre
          părți sau altor aspecte confidențiale aparținând Prestatorului, de
          care Beneficiarul a luat la cunoștință în orice mod pe durata
          contractului.{' '}
        </p>
        <p>
          9.2. Obligația de confidențialitate, astfel cum este prevăzută mai
          sus, se menține și după data încetării prezentului Contract. Prin
          informații confidențiale se înțelege orice informație aparținând
          Prestatorului, autorilor sau terților cu care Prestatorul are relații
          de afaceri sau privind activitatea acestora și care este transmisă de
          către Prestator în executarea Contractului, precum și orice
          împrejurare relevantă legată de Prestator (inclusiv, dar fără a se
          limita la cele prevăzute mai jos), indiferent dacă această informație
          a fost transmisă de către Prestator sau terți, primită de către
          Beneficiar în formă scrisă, orală sau în orice alt mod și care se
          referă inclusiv dar nelimitat la:
        </p>
        <ol>
          <li>
            <p>
              Planurile de afaceri, de marketing și financiare ale
              Prestatorului, precum și ale clienților acestuia și/sau ale
              terților cu care are relații de afaceri sau cu care intră în
              contact prin natura activității desfășurate;
            </p>
          </li>
          <li>
            <p>
              Sistemul organizatoric, informațional și de management al
              Prestatorului;
            </p>
          </li>
          <li>
            <p>
              Informații referitoare la numele clienților și furnizorilor
              Prestatorului, precum și orice alte informații referitoare la
              datele tehnice, financiare, comerciale, indiferent dacă în
              documentele respective figurează sau nu cuvintele “confidențial”
              ori “proprietate exclusivă”.
            </p>
          </li>
        </ol>
        <p>
          9.3. Beneficiarul declară și înțelege că va folosi informațiile
          confidențiale care îi parvin pe parcursul executării prezentului
          Contract numai în interesul și în scopul îndeplinirii obligațiilor
          sale contractuale și se obligă să nu le transmită terților, indiferent
          de motiv și indiferent de forma în care ar putea fi transmise.{' '}
        </p>
        <p>
          9.4 Beneficiarul este de acord cu folosirea imaginii, fotografiilor,
          vocii și a asemănării sale, denumite ”Informații personale”, de către
          Prestator în scopul promovării de către Prestator a serviciilor sale.{' '}
        </p>
        <p>
          9.5 Orice declarații sau interviuri, precum și dezvăluirea oricăror
          informații către media în legătură cu bunurile sau serviciile digitale
          furnizare de Prestator se poate face de Beneficiar numai cu acordul
          prealabil al Prestatorului, cu excepția situațiilor prevăzute expres
          de lege.{' '}
        </p>
        <h2 className="text-center">
          Art.10. DREPTURI DE PROPRIETATE INTELECTUALĂ{' '}
        </h2>
        <p>
          10.1. Toate drepturile ce decurg din dreptul de proprietate
          intelectuală asupra bunurilor și serviciilor digitale, cursurilor,
          modelelor de curs, precum și a oricărui material folosit de formatorii
          incluși în programul de curs, în timpul procesului de formare sunt
          proprietatea exclusivă a Prestatorului și sunt protejate de legislația
          în domeniul proprietății intelectuale.{' '}
        </p>
        <p>
          10.2. Denumirea, logo-ul, conținutul Site-ului, elementele grafice și
          de design, fotografiile, imaginile, semnele, textele, materialele
          video, precum și orice alte materiale transmise sub orice formă către
          Beneficiar (prin vizualizare directă pe site ori prin orice alte
          mijloace care aparțin sau au legătură cu Site-ul), precum și orice
          alte elemente ale site-ului sunt proprietatea Prestatorului și sunt
          protejate de legislația privind drepturile de proprietate
          intelectuală. Prin excepție, nu aparțin Prestatorului materialele, de
          orice natură, puse la dispoziția Utilizatorilor/Cursanților pe Site cu
          privire la care s-a indicat un alt titular de drepturi de proprietate
          intelectuală ori pentru care s-a arătat sursa materialului. {' '}
        </p>
        <p>
          10.3. Beneficiarii nu dobândesc niciun drept de proprietate ori de
          altă natură asupra sau în legătură cu Site-ul și cu platformele
          Prestatorului, cu întregul conținut al acestora ori asupra, fără a se
          limita la acestea, suportului de curs, webinariilor, materialelor de
          învățare (de orice natură și sub orice formă), metodologiilor, bazelor
          de date, cursurilor, testelor online, temelor, conținutului ș.a.m.d.
          puse la dispoziție de către Prestator sau cu care Beneficiarul a avut
          contact cu prilejul furnizării Bunurilor și Serviciilor digitale
          (denumite Materiale).{' '}
        </p>
        <p>
          10.4. În sensul articolelor precedente, Materialele pot fi utilizate
          de Beneficiar exclusiv în scopul pentru care acestea au fost puse la
          dispoziție, în scop necomercial. Este strict interzisă copierea,
          preluarea, reproducerea, publicarea, transmiterea, distribuirea totală
          sau parțială, în aceeași formă sau într-o formă modificată a
          Materialelor.{' '}
        </p>
        <p>
          10.5. De asemenea, Beneficiarilor le este interzis să realizeze acte
          care pot conduce la afectarea conținutului Site-ului și/sau a
          elementelor de securitate ale Site-ului ori a elementelor Site-ului
          menite să asigure protecția drepturilor de proprietate intelectuală și
          a datelor cu caracter personal.{' '}
        </p>
        <p>
          10.6. Încălcarea prevederilor prezentului capitol va atrage
          răspunderea potrivit legislației în vigoare.{' '}
        </p>
        <h2 className="text-center">Art.11. CLAUZA DE NECONCURENŢĂ </h2>
        <p>
          11.1. Beneficiarul garantează și răspunde că nu va intra, în mod
          direct sau indirect, în concurență cu activitatea Prestatorului și
          nici nu va desfășura, în mod direct sau indirect, el însuși, angajați
          ori interpuși ai acestuia, cu titlu gratuit sau cu titlu oneros, alte
          cursuri care au obiect identic sau similar cu cel pus la dispoziția sa
          de către Prestator.{' '}
        </p>
        <p>
          11.2. În măsura în care această obligație este încălcată, Beneficiarul
          va fi ținut să acopere prejudiciul generat Prestatorului.{' '}
        </p>
        <h2 className="text-center">Art.12. ÎNCETAREA </h2>
        <p>
          12.1. În cazul Beneficiarilor – consumatori: contractul dintre părți
          încetează de plin drept, fără a mai fi necesară intervenția
          instanțelor judecătorești ori alte formalități, în următoarele
          condiții:
        </p>
        <ol>
          <li>
            <p>Prin îndeplinirea obiectului Contractului;</p>
          </li>
          <li>
            <p>Prin acordul ambelor Părți;</p>
          </li>
          <li>
            <p>
              Prin încetarea de către Beneficiarul-consumator, în caz de
              intervenire a unui caz de nefurnizarea sau neconformitate, în
              condițiile reglementate în prezentul Contract și în legislația
              aplicabilă în materia protecției consumatorilor. Beneficiarul îşi
              exercită dreptul de a înceta contractul printr-o declaraţie către
              Prestator prin care îşi exprimă decizia de a înceta contractul.
              Contractul încetează la data la care consumatorul transmite
              declaraţia către comerciant.
            </p>
          </li>
          <li>
            <p>
              Prin exercitarea de către Beneficiarul-consumator a dreptului de
              retragere în condițiile prevăzute în prezentul Contract.
            </p>
          </li>
          <li>
            <p>
              Prin rezoluțiune de către oricare dintre părți, în caz de
              încălcare a uneia sau mai multor obligații asumate prin Contract,
              cu notificarea prealabilă în vederea remedierii / executării
              obligațiilor, iar în caz de neexecutare în termen de 15 zile de la
              primirea notificării, contractul se consideră rezoluționat, fără a
              mai fi necesară vreo altă formalitate.{' '}
            </p>
          </li>
        </ol>
        <p>
          12.2. În cazul Beneficiarilor – comercianți: contractul dintre părți
          încetează de plin drept, fără a mai fi necesară intervenția
          instanțelor judecătorești ori alte formalități, în următoarele
          condiții:
        </p>
        <ol>
          <li>
            <p>Prin îndeplinirea obiectului Contractului;</p>
          </li>
          <li>
            <p>Prin acordul ambelor Părți;</p>
          </li>
          <li>
            <p>
              Prin reziliere/rezoluțiune, după caz, de către Prestator, în caz
              de încălcare de către Beneficiarul-comerciant a uneia sau mai
              multor obligații asumate prin Contract. În aceste situații,
              Prestatorul va notifica Beneficiarul în vederea
              remedierii/executării obligațiilor în termen de 5 zile și va avea
              posibilitatea de a suspenda furnizarea bunurilor și/sau
              serviciilor digitale de îndată.{' '}
            </p>
          </li>
          <li>
            <p>
              Prin denunțare unilaterală a Contractului, din inițiativa
              Prestatorului, cu acordarea unui termen de preaviz de 15 zile.{' '}
            </p>
          </li>
        </ol>
        <p>
          12.3. În cazul neachitării în termen a bunurilor și / sau serviciilor
          contractate, Prestatorul este absolvit de obligația furnizării
          bunurilor și serviciilor digitale comandate.{' '}
        </p>
        <p>
          12.4. Încetarea Contractului nu va avea niciun efect asupra
          obligațiilor deja scadente ale Beneficiarului.
        </p>
        <h2 className="text-center">Art.13. FORŢA MAJORĂ </h2>
        <p>
          13.1. Niciuna dintre Părți nu răspunde de neexecutarea la termen
          sau/și de executarea în mod necorespunzător – total sau parțial – a
          oricărei obligații care îi revine în baza prezentului contract, dacă
          neexecutarea sau executarea necorespunzătoare a obligației respective
          a fost cauzată de forța majoră, aşa cum este definită de lege.{' '}
        </p>
        <p>
          13.2. Partea care invocă forța majoră este obligată să notifice
          celeilalte părți, în termen de 5 (cinci) zile de producerea
          evenimentului și să ia toate masurile posibile în vederea limitării
          consecințelor lui.{' '}
        </p>
        <p>
          13.3. Dacă în termen de 10 (zece) de zile de la producere evenimentul
          respectiv nu încetează, părțile au dreptul să-şi notifice încetarea de
          plin drept a prezentului contact fără ca vreuna dintre ele să pretindă
          daune-interese.{' '}
        </p>
        <h2 className="text-center">Art.14. ALTE CLAUZE </h2>
        <p>
          14.1. Beneficiarul nu va fi îndreptățit să cesioneze și/sau să
          transfere drepturile și/sau obligaţiile rezultând sau derivând din
          Contract către un terț fără consimțământul scris și prealabil al
          Prestatorului.{' '}
        </p>
        <p>
          14.2. Părţile înţeleg şi acceptă ca toate sumele primite din
          parteneriate, promovări şi/sau publicitate în legătură cu bunurile și
          serviciile digitale ce fac obiectul prezentului Contact revin exclusiv
          Prestatorului.
        </p>
        <p>
          14.3 În cazul neachitării în mod integral și cu respectarea termenului
          de scadență a bunurilor și serviciilor digitale comandate, conform
          prevederilor contractuale, Prestatorul este absolvit de obligația
          furnizării bunurilor și serviciilor digitale.
        </p>
        <p>
          14.4. Întârzierea la plată, peste data scadentă, dă dreptul
          Prestatorului de a întrerupe accesul la serviciile digitale până la
          achitarea sumelor cuvenite, potrivit prevederilor contractuale.{' '}
        </p>
        <p>
          14.5. Prestatorul are dreptul de a refuza accesul pe Site și/sau
          plasarea, procesarea, acceptarea și onorarea unei comenzi, respectiv
          anularea comenzii sau suspendarea furnizării bunurilor sau serviciilor
          digitale în următoarele situații, fără a se limita la acestea:{' '}
        </p>
        <ol>
          <li>
            <p>
              Prestatorul are suspiciuni rezonabile cu privire la identitatea
              Beneficiarului;{' '}
            </p>
          </li>
          <li>
            <p>
              Prestatorul are suspiciuni rezonabile că Produsele și Serviciile
              digitale vor fi folosite în scopuri ilicite sau imorale ori în
              scopuri contrare prezentului Contract ori a legislației incidente;{' '}
            </p>
          </li>
          <li>
            <p>
              Beneficiarul utilizează Site-ul și/sau Produsele și Serviciile
              digitale în mod abuziv, ilicit, imoral, ilegal;
            </p>
          </li>
          <li>
            <p>
              Plata/tranzacția nu a fost confirmată și/sau există suspiciuni
              rezonabile cu privire la aceasta;
            </p>
          </li>
          <li>
            <p>
              Beneficiarul are o conduită de natură a prejudicia drepturile,
              interesele și/sau imaginea Prestatorului, a afiliaților săi ori a
              celorlalți Beneficiari;
            </p>
          </li>
          <li>
            <p>
              Beneficiarul furnizează date false, incorecte sau incomplete
              și/sau plasează comenzi false ori frauduloase;{' '}
            </p>
          </li>
          <li>
            <p>
              Beneficiarul nu respectă instrucțiunile prevăzute pe Site privind
              efectuarea unei Comenzi și/sau utilizarea Site-ului/Produselor și
              Serviciilor digitale;{' '}
            </p>
          </li>
          <li>
            <p>
              Beneficiarul utilizează Site-ul în alte scop decât cel de
              informare și plasare comenzi respectiv nelegitime ori încalcă
              oricare dintre prevederile prezentului Contract, termenelor și
              condițiilor Site-ului, ale politicilor proprii unora dintre
              Produsele și Serviciile digitale sau instrumentele/platformele
              puse la dispoziția Beneficiarului de către Prestator și/sau ale
              legislației în vigoare;
            </p>
          </li>
          <li>
            <p>
              Beneficiarul încalcă (sau există suspiciuni rezonabile că încălca)
              drepturile de proprietate intelectuală și / sau confidențialitatea
              informațiilor ce aparțin Prestatorului.
            </p>
          </li>
        </ol>
        <p>
          14.6. Dacă situațiile prevăzute mai sus constituie o încălcare a legii
          și/sau au generat prejudicii Prestatorului, Prestatorul va avea
          dreptul de a sesiza autoritățile competente pentru sancționarea
          persoanei vinovate și, de asemenea, dreptul de a parcurge toate
          procedurile prevăzute de lege în vederea reparării în integralitate a
          prejudiciilor suferite, prezente sau viitoare.{' '}
        </p>
        <h2 className="text-center">Art.15. LITIGII </h2>
        <p>
          15.1. Toate litigiile şi disputele referitoare la prezentul contract
          vor fi soluționate pe cale amiabilă.{' '}
        </p>
        <p>
          15.2. În cazul în care părțile nu reușesc pe cale amiabilă, orice
          litigiu decurgând din sau în legătură cu prezentul contract, inclusiv
          referitor la încheierea, nulitatea, interpretarea, executarea sau
          desființarea acestuia, va fi soluționat definitiv de către instanțele
          de judecată de drept comun în cazul Beneficiarilor-consumatori și de
          către instanțele de judecată din Timișoara în cazul
          Beneficiarilor-comercianți.{' '}
        </p>
        <h2 className="text-center">Art.16. CLAUZE FINALE </h2>
        <p>
          16.1. Orice comunicare dintre părţi referitoare la prezentele termene
          şi condiţii poate fi transmisă prin e-mail sau scrisoare, potrivit
          dispozițiilor legale în vigoare.{' '}
        </p>
        <p>
          16.2. Clauzele prezentelor termene şi condiţii se completează cu
          dispozițiile legale în vigoare.{' '}
        </p>
        <p>
          16.3. Prezentele termene şi condiţii se supun dispoziţiilor legii
          române.{' '}
        </p>
        <p>
          16.4. Prezentele termene şi condiţii nu aduc atingere niciunui alt
          contract încheiat între Părţi.{' '}
        </p>
        <p>
          16.5. În cazul oricărui conflict, inconsecvențe, neconcordanțe sau
          dispoziții derogatorii între prezentele Termene și Condiții și
          prevederile oricărui contract încheiat cu Beneficiarul respectivul
          contract va prevala.{' '}
        </p>
        <p>
          16.6. Prestatorul își rezervă dreptul de a modifica în orice moment
          prezentul document (Termene și condiții), varianta actualizată fiind
          disponibilă în permanență, în mod gratuit, pe Site, Secțiunea „Termene
          și condiții”. {' '}
        </p>
        <h2 className="text-center">ANEXA 1</h2>
        <p>
          <b>
            Informații privind exercitarea dreptului de retragere. Politica de
            retragere aplicabilă pentru persoanele fizice – consumatori conform
            OUG 34/2014
          </b>
        </p>
        <p>
          <b>
            Prezenta politică se aplică numai în situația Beneficiarilor, care
            au calitatea de consumatori.{' '}
          </b>
        </p>
        <h4 className="text-center">
          • Dreptul de retragere – reguli de aplicare
        </h4>
        <p>
          Aveți dreptul de a vă retrage din prezentul contract, fără a preciza
          motivele, în termen de 14 zile.
        </p>
        <p>
          Perioada de retragere expiră după 14 zile: începând de la data
          încheierii contractului privind furnizarea de servicii digitale
          respectiv ziua în care consumatorul sau o parte terţă, alta decât
          transportatorul şi care este indicată de consumator, intră în posesia
          fizică a bunurilor cu conținut digital.{' '}
        </p>
        <p>
          <b>Excepții: </b>
        </p>
        <p>
          Vă informăm că dreptul de retragere nu este aplicabil, printre altele,
          în oricare dintre următoarele situații: (i) după prestarea integrală a
          serviciilor sau (ii) pentru furnizarea de conținut digital care nu
          este livrat pe un suport material, dacă a început executarea
          contractului; (iii) furnizarea de înregistrări audio sau video
          sigilate sau de programe informatice sigilate care au fost desigilate
          după livrare.{' '}
        </p>
        <p>Astfel, vă rugăm să aveți în vedere următoarele: </p>
        <ol>
          <li>
            <p>
              Cu privire la bunul digital: Dreptul de retragere nu se aplică
              pentru bunul digital, dacă ați desigilat bunul după livrare.
              Prestatorul nu este obligat la restituirea prețului în acest caz.{' '}
            </p>
          </li>
          <li>
            <p>
              Cu privire la serviciile digitale: odată cu începerea executării
              contractului dintre dumneavoastră și Prestator și anume odată cu
              activarea contului de utilizator al dumneavoastră în vederea
              accesării platformei de către dvs., veți pierde dreptul de
              retragere, în condiţiile în care: ne-ați dat acordul prealabil
              expres pentru începerea prestării serviciilor digitale și ați
              confirmat că ați luat cunoştinţă de faptul că veți pierde dreptul
              de retragere în consecinţă. Astfel, după activarea contului
              dumneavoastră de utilizator în vederea accesării platformei nu mai
              aveți dreptul de retragere din contract, iar Prestatorul nu poate
              fi obligat la restituirea prețului.{' '}
            </p>
          </li>
        </ol>
        <h4 className="text-center">• Exercitarea dreptului de retragere </h4>
        <ol>
          <li>
            <p>
              <b>Prin scrisoare transmisă prin poștă/curier</b> la adresa:
              <b>{dateFirma.sediuSocial}</b>
            </p>
          </li>
          <li>
            <p>
              <b>Prin e-mail, la adresa: </b> la adresa:
              <b>{dateFirma.email}</b>
            </p>
          </li>
        </ol>
        <p>
          Pentru exercitarea dreptului de retragere puteți folosi modelul de
          retragere alăturat; folosirea lui nu este însă obligatorie.{' '}
        </p>
        <p>
          Pentru a respecta termenul-limită de retragere este suficient să
          trimiteți comunicarea privind exercitarea dreptului de retragere
          înainte de expirarea perioadei de retragere.{' '}
          <b>
            Dacă Beneficiarul nu își exercită dreptul de retragere înăuntrul
            termenului prevăzut mai sus, este decăzut din acest drept și nu va
            avea dreptul de a pretinde rambursarea sumei achitate.
          </b>
        </p>
        <h4 className="text-center">• Consecințele retragerii </h4>
        <p>
          Dacă vă retrageți, vom rambursa orice sumă pe care am primit-o de la
          dumneavoastră, fără întârzieri nejustificate şi, în orice caz, nu mai
          târziu de 14 zile de la data la care suntem informaţi cu privire la
          decizia dumneavoastră de a vă retrage din prezentul contract.{' '}
        </p>
        <p>
          Vom efectua această rambursare folosind aceeaşi modalitate de plată ca
          şi cea folosită pentru tranzacţia iniţială, cu excepţia cazului în
          care v-aţi exprimat acordul expres pentru o altă modalitate de
          rambursare; în orice caz, nu vi se vor percepe comisioane ca urmare a
          unei astfel de rambursări.
        </p>
        <h2 className="text-center">ANEXA 2 Formular de retragere</h2>
        <p>
          <b>
            Prezentul formular se completează, se semnează și se transmite către
            Prestator numai dacă doriți să vă retrageți din contract.
          </b>
        </p>
        <p>
          Către {dateFirma.nume} cu sediul in {dateFirma.sediuSocial} adresa de
          email {dateFirma.email}
        </p>
        <p>Numele și prenumele dvs. ………………………………………………………………………………………………</p>
        <p>
          <em>
            (se va completa cu numele persoanei care exercită dreptul de
            retragere)
          </em>
        </p>
        <p>Adresa dvs. ………………………………………………………………………………………………</p>
        <p>
          <em>
            (se va completa cu numele persoanei care exercită dreptul de
            retragere)
          </em>
        </p>
        <p>Adresa de e-mail: ………………………………………………………………………………………………</p>
        <p>
          <em>
            (dacă optați pentru transmiterea confirmării de primire a
            formularului de retragere prin e-mail)
          </em>
        </p>
        <p>
          Vă informez prin prezenta cu privire la retragerea mea din contractul
          referitor la furnizarea următoarelor servicii / produse:
        </p>
        <p>………………………………</p>
        <p>
          {' '}
          (se va completa cu serviciile/produsele la care doriți să renunțați)
        </p>
        <p>Comandate la data ……………………………………………………………………… </p>
        <p> (se va completa cu data plasării comenzii)</p>
        <p>
          Solicit returnarea banilor (dacă este cazul) în contul
          ………………………………………….………………………………………………… deschis la
          …………………………………………………………………., titularul contului …………………….. Semnătura
          consumatorului:________________________
        </p>
        <p>(doar în cazul în care acest formular este notificat pe hârtie)</p>
        <p>Data: ………………………………………</p>
      </div>
    </>
  );
}

export default TermeniSiConditii