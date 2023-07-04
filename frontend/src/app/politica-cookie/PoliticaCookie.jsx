import React from 'react'
import Link from 'next/link';
import { dateLegale } from '@/dateStatice'
const PoliticaCookie = () => {

const { site, dateFirma, brand } = dateLegale;


  return (
    <>
      <div className="prose m-auto bg-base-100 p-10 prose-xl">
        <h1 className="text-center">POLITICA DE UTILIZARE COOKIE-URI</h1>
        <p>
          <b>1. Site-ul {dateLegale.site} utilizeaza cookie-uri.</b>
        </p>
        <p>
          Această secțiune îți oferă mai multe informații despre ce sunt
          cookie-urile, cum le folosim și cum le poți gestiona atât pe site-ul
          nostru cât și pe alte site-uri.
        </p>
        <p>Despre cookies, ce sunt şi cum funcționează.</p>
        <p>
          Informaţiile prezentate în continuare au scopul de a informa
          utilizatorul despre plasarea, utilizarea şi administrarea
          “cookie”-urilor utilizate de site-ul {site}.
        </p>
        <p>Te rugăm să citești cu atenţie informaţiile ce urmează:</p>
        <p>
          Acest website foloseşte cookie-uri proprii cât şi cookie-uri adăugate
          de terţi, pentru a furniza vizitatorilor o experienţă mult mai bună de
          navigare şi servicii adaptate nevoilor şi interesului fiecăruia.
        </p>
        <p>
          În ceea ce numim “web modern” sau “web 2.0″, cookie-urile joacă un rol
          important în facilitarea accesului şi livrării multiplelor servicii de
          care utilizatorul se bucură pe Internet, cum ar fi:
        </p>
        <p>
          <b>2. Ce este un “cookie”?</b>
        </p>
        <p>
          Un “Internet Cookie” (termen cunoscut şi ca “browser cookie” sau “HTTP
          cookie” ori pur şi simplu “cookie”) este un fişier de mici dimensiuni,
          format din litere şi numere, care va fi stocat pe computerul,
          terminalul mobil sau alte echipamente ale unui utilizator de pe care
          se accesează Internetul.
        </p>
        <p>
          Cookie-ul este trimis printr-o solicitare emisă de către web-server pe
          care este găzduit site-ul, către browser-ul utilizatorului (Ex:
          Firefox, Internet Explorer, Chrome etc.) şi este complet “pasiv”, în
          sensul că nu conţine programe software, viruşi sau spyware şi nici nu
          poate accesa informaţiile de pe hard driveul utilizatorului.
        </p>
        <p>
          Un cookie este format din 2 părţi: numele şi conţinutul sau valoarea
          cookie-ului şi este asociat în mod unic cu domeniul pe care este
          găzduit site-ul care l-a trimis către browserul utilizatorului (ex:
          {site} ). Mai mult, durata de existenţă a unui cookie este
          determinată şi doar webserver-ul care a trimis cookie-ul îl poate
          accesa din nou, şi numai în momentul în care utilizatorul se întoarce
          pe site-ul asociat webserver-ului respectiv.
        </p>
        <p>
          Cookie-urile nu solicită informaţii cu caracter personal pentru a
          putea fi utilizate şi nici nu pot identifica personal utilizatorii de
          internet.
        </p>
        <p>Există două categorii principale de cookie-uri:</p>
        <ul>
          <li>
            <p>
              Cookie-uri de sesiune – acestea sunt stocate temporar în dosarul
              de cookie-uri al browserului web până când utilizatorul părăseşte
              siteul respectiv sau închide fereastra browserului.
            </p>
          </li>
          <li>
            <p>
              Cookie-uri persistente – acestea sunt stocate în computer sau
              echipamentul folosit pe hard pentru o perioadă mai lungă și rămân
              stocate inclusiv după părăsirea siteului sau după închiderea
              browserului web (iar în general depind de durata de viaţă
              prestabilită pentru cookie).
            </p>
          </li>
        </ul>
        <p>
          Cookie-urile persistente le includ şi pe cele plasate de un alt
          website decât cel pe care îl vizitează utilizatorul la momentul
          respectiv – cunoscute sub numele de “third party cookies” (cookie-uri
          plasate de terţi) – care pot fi folosite în mod anonim pentru a memora
          interesele unui utilizator, astfel încât să fie livrată publicitate
          cât mai relevantă pentru utilizator.
        </p>
        <p>
          <b>3. Avantajele cookie-urilor</b>
        </p>
        <p>
          Un cookie conţine informaţii care fac legătura între un browser
          (utilizatorul) şi un web-server anume (site-ul). Dacă un browser
          accesează acel web-server din nou, acesta poate citi informaţia deja
          stocată şi reacţiona în consecinţă.
        </p>
        <p>
          Cookie-urile asigură utilizatorilor o experientă placută de navigare
          şi susţin eforturile multor siteuri pentru a oferi servicii
          confortabile utilizatorillor. Exemple – preferinţele în materie de
          confidenţialitate online, opţiunile privind limba site-ului sau
          publicitate relevantă etc.
        </p>
        <p>
          <b>4. Durata de viaţă a unui cookie</b>
        </p>
        <p>
          Cookie-urile sunt administrate de web-servere. Durata de viaţă a unui
          cookie poate varia semnificativ, depinzând de scopul pentru care este
          plasat. Unele cookie-uri sunt folosite exclusiv pentru o singură
          sesiune (“session cookies”) şi nu sunt reţinute după ce utilizatorul
          părăseşte site-ul, iar unele cookie-uri sunt reţinute şi refolosite de
          fiecare dată când utilizatorul revine pe acel site (“cookie-uri
          permanente”).
        </p>
        <p>
          Cu toate acestea, cookie-urile pot fi şterse de utilizator în orice
          moment prin intermediul setărilor browserului.
        </p>
        <p>
          <b>5. Cookie-urile plasate de terţi</b>
        </p>
        <p>
          Anumite secţiuni de conţinut de pe unele site-uri pot fi furnizate
          prin intermediul unor terţe părţi/furnizori (Ex: news box, un video
          sau o reclamă). Aceste terţe părţi pot plasa de asemenea cookie-uri
          prin intermediul site-ului şi ele se numesc “third party cookies”,
          pentru că nu sunt plasate de site-ului respectiv. Furnizorii terţi
          trebuie să respecte de asemenea legea în vigoare şi politicile de
          confidenţialitate ale deţinătorului site-ului.
        </p>
        <p>
          <b>6. Utilizarea cookie-urilor de către acest site</b>
        </p>
        <p>Vizita pe acest site poate plasa cookie-uri în scopuri de:</p>
        <ul>
          <li>
            <p>Cookie-uri de performanţă a site-ului</p>
          </li>
          <li>
            <p>Cookie-uri de analiză a vizitatorilor</p>
          </li>
          <li>
            <p>Cookie-uri de înregistrare sau autentificare</p>
          </li>
          <li>
            <p>Cookie-uri ale terţelor părţi</p>
          </li>
        </ul>

        <p>
          <b> 6.1. Cookie-uri de performanţă</b>
        </p>
        <p>
          Acest tip de cookie reţine preferinţele utilizatorului pe acest site,
          astfel încât nu mai este nevoie de setarea lor la fiecare vizitare a
          site-ului.
        </p>
        <p>
          <b> 6.2. Cookie-uri de analiză a vizitatorilor</b>
        </p>
        <p>
          De fiecare dată când un utilizator vizitează acest site, softul de
          analytics furnizat de o terţă parte generează un cookie de analiză a
          utilizatorului. Acest cookie ne spune dacă aţi mai vizitat acest site
          până acum. Browserul comunică dacă există acest cookie, iar dacă nu,
          este generat unul. Acest lucru permite monitorizarea utilizatorilor
          unici care vizitează site-ul şi cât de des o fac.
        </p>
        <p>
          Acest cookie nu poate fi folosit pentru a identifica persoanele
          fizice, ele sunt folosite doar în scop statistic.
        </p>
        <p>
          <b> 6.3. Cookie-uri pentru înregistrare sau autentificare</b>
        </p>
        <p>
          Când vă înregistraţi ori vă autentificaţi pe acest site, se generează
          un cookie care ne anunţă dacă sunteţi înregistrat sau nu. Server-ul
          nostru utilizează aceste cookie-uri pentru a identifica contul cu care
          sunteţi înregistrat şi dacă aveţi permisiunile necesare pentru un
          anumit serviciu ori pentru accesul la secţiuni ale site-ului. De
          asemenea, permite asocierea comentariilor pe care le postaţi pe site
          cu username-ul contului dvs. Dacă nu aţi selectat “păstrează-mă
          înregistrat”, acest cookie se va şterge automat când veţi închide
          browserul sau calculatorul.
        </p>
        <p>
          <b> 6.4. Cookie-uri ale terţelor părţi</b>
        </p>
        <p>
          Pe unele pagini, terţii pot seta propriile cookie-uri anonime, în
          scopul de a urmări succesul unei reclame/aplicaţii sau pentru
          customizarea unei aplicaţii. Datorită modului de utilizare, acest site
          nu poate accesa aceste cookie-uri, la fel cum terţele părţi nu pot
          accesa cookie-urile deţinute de acest site.
        </p>
        <p>Publicitatea online ce aparţine terţelor părţi</p>
        <p>
          Unele dintre acestea folosesc propriile cookie-uri anonime pentru a
          analiza câte persoane au vizualizat un mesaj publicitar, ori pentru a
          vedea câte persoane au vizualizat de mai multe ori aceeaşi reclamă.
        </p>
        <p>
          Companiile care generează aceste cookie-uri au propriile politici de
          confidenţialitate, iar acest site nu are acces la aceste cookie-uri.
          Cookie-urile părţilor terţe sunt folosite pentru a vă arăta
          publicitate targetată şi pe alte site-uri, bazându-se pe navigarea
          dvs. pe acest site.
        </p>
        <p>
          <b>
            7. Tipul de informaţii stocate şi accesate prin intermediul
            cookie-urilor
          </b>
        </p>
        <p>
          Cookie-urile păstrează informaţii într-un fişier text de mici
          dimensiuni care permit unui site să recunoască un browser.
          Web-serverul va recunoaşte browserul până când cookie-ul expiră sau
          este şters.
        </p>
        <p>
          Cookie-ul stochează informaţii importante care îmbunătaţesc experienţa
          de navigare pe Internet. Ex: setările privind limba în care se doreşte
          accesarea unui site, păstrarea unui user logat în contul de membru ori
          contul de mail, securitatea online, păstrarea şi memorarea unor setări
          etc.
        </p>
        <p>
          Deși cookie-urile sunt stocate în memoria calculatorului
          utilizatorului de Internet, ele nu pot accesa/citi alte informații
          aflate în respectivul calculator. Cookie-urile nu sunt viruși. Ele
          sunt doar mici fișiere text; nu sunt compilate sub formă de cod și nu
          pot fi executate. Astfel, nu se pot auto-copia, nu se pot răspândi în
          alte rețele pentru a genera acțiuni și nu pot fi folosite pentru
          răspândirea de viruși.
        </p>
        <p>
          <b>8. Importanţa cookie-urilor pentru Internet</b>
        </p>
        <p>
          Cookie-urile reprezintă punctul central al funcţionării eficiente a
          Internetului, ajutând la generarea unei experienţe de navigare
          prietenoase, adaptată preferinţelor şi intereselor fiecărui
          utilizator.
        </p>
        <p>
          Cookie-urile pot asigura o interacțiune mai rapidă și mai ușoară între
          utilizatori și site-urile web. Spre exemplu, în momentul
          autentificării unui utilizator pe un anumit site web, datele de
          autentificare sunt stocate într-un cookie; ulterior, utilizatorul
          poate accesa respectivul site fără să fie nevoie să se autentifice din
          nou.
        </p>
        <p>
          În mod similar, cookie-urile pot stoca informații referitoare la
          produsele comandate de către utilizator pe un site de comerț
          electronic, făcând astfel posibil conceptul de „coș de cumpărături”.
        </p>
        <p>
          De asemenea, cookie-urile pot oferi site-urilor web posibilitatea de a
          monitoriza activitățile online ale utilizatorilor și de a stabili
          profiluri de utilizatori, care pot fi apoi folosite în scopuri de
          marketing.
        </p>
        <p>
          Refuzarea sau dezactivarea cookie-urilor nu înseamnă că nu veţi mai
          primi publicitate online, ci doar că aceasta nu va mai putea ţine cont
          de preferinţele şi interesele dvs. evidenţiate prin comportamentul de
          navigare.
        </p>
        <p>
          Exemple de întrebuinţări importante ale cookie-urilor (care nu
          necesită autentificarea unui utilizator prin intermediul unui cont):
        </p>
        <ul>
          <li>
            <p>
              Conţinut şi servicii adaptate preferinţelor utilizatorului –
              categorii de ştiri, vreme, sport, hărţi, servicii publice şi
              guvernamentale, site-uri de entertainment şi servicii de travel.
            </p>
          </li>
          <li>
            <p>
              Oferte adaptate pe interesele utilizatorilor – reţinerea
              parolelor, preferinţele privind limba (Ex: afişarea rezultatelor
              căutărilor în limba română).
            </p>
          </li>
          <li>
            <p>
              Reţinerea filtrelor de protecţie a copiilor privind conţinutul pe
              Internet (opţiuni family mode, funcţii de safe search).
            </p>
          </li>
          <li>
            <p>
              Limitarea frecvenţei de difuzare a reclamelor – limitarea
              numarului de afişări a unei reclame pentru un anumit utilizator pe
              un site.
            </p>
          </li>
          <li>
            <p>Furnizarea de publicitate relevantă pentru utilizator.</p>
          </li>
          <li>
            <p>
              Măsurarea, optimizarea şi caracteristicile de analytics – cum sunt
              confirmarea unui anumit nivel de trafic pe un site, ce tip de
              conţinut este vizualizat mai mult şi modul cum un utilizator
              ajunge pe site (ex: prin motoare de căutare, direct, din alte
              site-uri etc). Site-urile derulează aceste analize a utilizării
              lor pentru a îmbunătăţi site-urile în beneficiul utilizatorului.
            </p>
          </li>
        </ul>
        <p>
          <b>9. Politica remarketing</b>
        </p>
        <p>
          În paginile website-ului {site}, prin intermediul unei
          etichete pentru remarketing ( remarketing tag) şi a unui cod de
          conversie, primite de la Google AdWords, sunt colectate cookie-uri
          (număr ce identifica în mod unic un browser web de pe un anumit
          computer, nu o persoană). Eticheta pentru remarketing Google
          colectează cookie-uri în vederea afişării unor anunţuri în
          website-urile reţelei Google Display şi în Google Search.
        </p>
        <p>
          Când utilizatorii vizitează o pagină a website-ului care conţine
          remarketing tag, cookie-ul browser-ului pe care îl folosesc este
          adăugat unei liste pentru remarketing. O lista pentru remarketing este
          un set de module cookie de utilizator, generate de unasau de mai multe
          etichete pentru remarketing.
        </p>
        <p>
          Google AdWords foloseşte cookie-urile pentru a afişa anunţuri
          sponsorizate în website-urile reţelei Google Display şi în Google
          Search utilizatorilor care au vizitat paginile website-ului
          {site} În cazul în care nu eşti de acord cu utilizarea
          modulelor cookie de către Google, dezactivarea se poate face prin
          Managerul preferinţelor anunţurilor
        </p>
        <p>
          <b>10. Securitatea şi problemele legate de confidenţialitate</b>
        </p>
        <p>
          Cookie-urile NU sunt viruşi! Ele folosesc un format de tip plain text.
          Nu sunt alcătuite din bucăţi de cod, aşa că nu pot fi executate şi
          nici nu pot auto-rula. În consecinţă, nu se pot duplica sau replica pe
          alte reţele pentru a rula sau replica din nou. Întrucât nu pot
          îndeplini aceste funcţii, nu pot fi considerate viruşi.
        </p>
        <p>
          Cookie-urile pot fi totuşi folosite în scopuri negative. Deoarece
          stochează informaţii despre preferinţele şi istoricul de navigare al
          utilizatorilor, atât pe un anume site cât şi pe mai multe site-uri,
          cookie-urile pot fi folosite ca o formă de spyware. Multe produse
          anti-spyware sunt conştiente de acest fapt şi în mod constant
          marchează cookie-urile pentru a fi şterse în cadrul procedurilor de
          ştergere/scanare anti-virus/anti-spyware.
        </p>
        <p>
          În general browserele au integrate setări de confidenţialitate care
          furnizează diferite nivele de acceptare a cookie-urilor, perioada de
          valabilitate şi ştergere automată după ce utilizatorul a vizitat un
          anumit site.
        </p>
        <p>
          <b>11. Alte aspecte de securitate legate de cookie-uri.</b>
        </p>
        <p>
          Având în vedere că protecţia identităţii este foarte importantă şi
          reprezintă dreptul fiecărui utilizator de internet, este indicat să se
          ştie care sunt eventuale probleme ce pot apărea în legătură cu
          cookie-urile. Întrucât prin intermediul lor se transmit în mod
          constant în ambele sensuri informaţii între browser şi site, dacă un
          atacator sau persoană neautorizată intervine în parcursul de
          transmitere a datelor, informaţiile conţinute de cookie pot fi
          interceptate. Deşi foarte rar, acest lucru se poate întâmpla dacă
          browserul se conectează la server folosind o reţea necriptată (Ex: o
          reţea Wi-Fi nesecurizată).
        </p>
        <p>
          Alte atacuri bazate pe cookie implică setări greşite ale cookie-urilor
          pe servere.
        </p>
        <p>
          Dacă un site nu solicită browserului să folosească doar canale
          criptate, atacatorii pot folosi această vulnerabilitate pentru a
          păcăli browserele în a trimite informaţii prin intermediul canalelor
          nesecurizate. Atacatorii utilizează apoi informaţiile în scopul de a
          accesa neautorizat anumite site-uri. Este foarte important să fiţi
          atenţi în alegerea metodei celei mai potrivite de protecţie a
          informaţiilor personale.
        </p>
        <p>
          <b>12. Gestionarea, dezactivarea și ștergerea cookie-urilor</b>
        </p>
        <p>
          Informații detaliate referitoare la modalitățile de gestionare,
          dezactivare și ștergere a cookie- urilor prin utilizarea setărilor
          broswer-ului folosit pentru navigarea pe Internet sunt disponibile la
          următoarele adrese:
        </p>
        <p>
          <b>Internet Explorer</b> – Ștergerea și gestionarea modulelor cookie
          (IE 8, 9 și 10):
        </p>
        <ul>
          <li>
            <a href="https://support.microsoft.com/ro-ro/windows/%C8%99tergerea-%C8%99i-gestionarea-modulelor-cookie-168dab11-0753-043d-7c16-ede5947fc64d#ie=ie-8">
              Internet Explorer 8
            </a>
          </li>
          <li>
            <a href="https://support.microsoft.com/ro-ro/windows/%C8%99tergerea-%C8%99i-gestionarea-modulelor-cookie-168dab11-0753-043d-7c16-ede5947fc64d#ie=ie-9">
              Internet Explorer 9
            </a>
          </li>
          <li>
            <a href="https://support.microsoft.com/ro-ro/windows/%C8%99tergerea-%C8%99i-gestionarea-modulelor-cookie-168dab11-0753-043d-7c16-ede5947fc64d#ie=ie-10">
              Internet Explorer 10
            </a>
          </li>
        </ul>
        <p>
          <b>Mozilla Firefox</b> – Setările pentru cookie-uri și depanarea
          cookie-urilor (activare și dezactivare cookie-uri, eliminare
          cookie-uri, blocarea anumitor site-uri de la plasarea de cookie-uri,
          deblocarea plasării de cooki-euri, etc)
        </p>
        <p>
          <a href="https://support.mozilla.org/ro/kb/cookie-urile">
            Şterge cookies pentru a elimina informaţiile stocate în computerul
            tău de alte pagini web
          </a>
        </p>
        <p>
          <b>Google Chrome</b> – Gestionarea cookie-urilor (ștergere, blocare,
          permitere, stabilirea de excepții, etc)
        </p>
        <p>
          <a href="https://support.google.com/chrome/answer/95647?hl=ro">
            Gestionarea cookie-urilor și a datelor despre site-uri
          </a>
        </p>
        <p>
          Safari – Manage cookies – Administrează cookie-uri (doar în limba
          engleză)
        </p>

        <p>Remove cookies – Șterge cookie-uri (doar în limba engleză)</p>
        <p>
          <a href="https://support.apple.com/ro-ro/guide/safari/sfri11471/mac">
            Safari: Remove cookies and other data
          </a>
        </p>
        <p>
          Opera – Gestionare și ștergere cookie-uri (doar în limba engleză)
          <a href="https://help.opera.com/en/latest/web-preferences/#cookies">
            Web preferences
          </a>
        </p>
        
        <p>
          <b>13. Surse și informații suplimentare:</b>
        </p>
        <ul>
          <li>
            <a href="https://allaboutcookies.org/">All About Cookies</a>
          </li>
          
          <li>
            <a href="https://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2009:337:0011:0036:RO:PDF">
              Directiva 2009/136/CE de modificare a Directivei 2002/22/CE
              privind serviciul universal și drepturile utilizatorilor cu
              privire la reţelele și serviciile de comunicaţii electronice, a
              Directivei 2002/58/CE privind prelucrarea datelor personale și
              protejarea confidenţialităţii în sectorul comunicaţiilor publice
              și a Regulamentului (CE) nr. 2006/ 2004 privind cooperarea dintre
              autorităţile naţionale însărcinate să asigure aplicarea
              legislaţiei în materie de protecţie a consumatorului (PDF)
            </a>
          </li>
          <li>
            <a href="https://www.legi-internet.ro/legislatie-itc/date-cu-caracter-personal/legea-privind-prelucrarea-datelor-cu-caracter-personal-si-protectia-vietii-private-in-sectorul-comunicatiilor-electronice.html">
              Legea nr.506/2004 privind prelucrarea datelor cu caracter personal
              și protecția vieții private în sectorul comunicațiilor
              electronice, cu modificările și completările ulterioare
            </a>
          </li>
  
          <li>
            <a href="https://www.w3.org/TR/tracking-dnt/">
              World Wide Web Consortium, Tracking Preferences Expression (DNT),
              W3C Working Draft, 2 Octombrie 2012
            </a>
          </li>
         
          <li>
            <a href="https://www.eff.org/encrypt-the-web">Secure Cookies</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/HTTP_cookie">
              Wikipedia – HTTP Cookie
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default PoliticaCookie