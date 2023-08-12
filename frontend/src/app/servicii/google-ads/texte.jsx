
import {
  FaSearch,
  FaShoppingCart,
  FaRegImages,
  FaVideo,
  FaClipboardCheck,
  FaChartLine,
  FaCogs,
  FaChartBar,
  FaFileAlt,
} from 'react-icons/fa';
export const Meta = {
  titlu: 'Agentie Google Ads » Tomotiv',
  descriere:
    'Servicii Goodle Ads si promovare Google Ads potrivita afacerii tale. Afla ce promovare Google ads ti se potriveste si pretul google ads.',
};

export const Sectiunea1 = {
  heading: (
    <>
      Agentie <span className="text-primary">Google Ads</span>
    </>
  ),
  paragraf: (
    <>
      Ai toate motivele sa ai cele mai bune campanii de Google Ads.
      Contacteaz-ne acum!
    </>
  ),
};

export const Sectiunea2 = {
  heading: (
    <h2 className="m-10 lead font-bold text-3xl text-center">
      <span className="text-primary">Servicii Google Ads</span> care Te ajuta sa
      iti cresti vanzarile{' '}
    </h2>
  ),
  elemente: [
    {
      heading: <h3 className="font-bold text-primary">Google Search Ads</h3>,
      descriere: (
        <p>
          Dacă îți dorești trafic pentru afacerea ta atunci Google Search Ads
          sunt o variantă ideală! Iată cum te putem ajuta: Realizăm un research
          de cuvinte cheie care sunt relevante pentru websiteul tau și cream
          anunțuri Google Search Ads care te vor ajuta să te afișezi atunci când
          utilizatorii te caută. Vei plăti atunci când utilizatorul dă click pe
          anunțul tău. (Pay Per Click)
        </p>
      ),
      icon: <FaSearch size={'3em'} />,
    },
    {
      heading: (
        <h3 className="font-bold text-primary">Google Performance Max</h3>
      ),
      descriere: (
        <p>
          Ai un ecommerce? Sau alt tip de afacere? Atunci cea mai nouă
          modalitate de promovare a lui Google și anume Google Performance Max
          este de a te ajuta să fii acolo când utilizatorii te caută: prin
          imagini, ca afișare, video etc. De asemenea, analizăm competiția și
          venim cu cele mai bune soluții.
        </p>
      ),
      icon: <FaShoppingCart size={'3em'} />,
    },
    {
      heading: (
        <h3 className="font-bold text-primary">Google Display Network</h3>
      ),
      descriere: (
        <p>
          Afacerea ta dispune de multe imagini ale produselor? Atunci Google
          Display Network este alegerea ideală dacă îți dorești ca potențialii
          tăi clienți să îți rețină produsele sau afacerea vizual. Astfel, cu
          ajutorul anunțurilor tip imagine putem să ne adresăm utilizatorilor
          care deja au călcat pragul site-ului tău, remarketându-i inteligent.
          Mai mult, putem fideliza clienții prin intermediul unor experiențe
          unice și personalizate adaptate nevoilor lor.
        </p>
      ),
      icon: <FaRegImages size={'3em'} />,
    },
    {
      heading: <h3 className="font-bold text-primary">Google Shopping</h3>,
      descriere: (
        <p>
          Îți dorești ca produsele tale să se vândă până la ultima bucățică?
          Atunci Google Shopping este alegerea perfectă dacă îți dorești ca
          utilizatorii să cumpere de oriunde din lume produsele pe care le
          oferi. Plata se va face numai când aceștia dau click pentru a-ți
          accesa website-ul sau doar când vizualizează inventarul.
        </p>
      ),
      icon: <FaShoppingCart size={'3em'} />,
    },
    {
      heading: <h3 className="font-bold text-primary">Google Video</h3>,
      descriere: (
        <p>
          Ai o sumedenie de videouri creative cu afacerea ta? Îți dorești să te
          știe o lume întreagă? Atunci Google Video te poate ajuta! Reclamele de
          acest tip ne permit să aducem awareness și vizite cu ajutorul unor
          materiale de tip video care pot ajunge la cine trebuie într-un timp
          scurt. Mai mult, pe cei care deja au văzut videourile tale, îi putem
          retargeta în continuare cu ajutorul acestor campanii tip Video.
        </p>
      ),
      icon: <FaVideo size={'3em'} />,
    },
  ],
};


export const Sectiunea3 = {
  heading: (
    <>
      <h2 className=" m-10 lead font-bold text-3xl text-center">
        Ce includ serviciile <span className="text-primary">Google ads?</span>{' '}
      </h2>
      <p className="lead font-bold text-center pb-4">
        Cand vine vorba de campaniile Google Ads, oferim in cadrul oricariui tip
        de campanie urmatoarele:
      </p>
    </>
  ),

  elemente: [
    {
      heading: <h3 className="font-bold text-primary">Audit Gratuit</h3>,
      descriere: (
        <p>
          Intrucât îți dorești să crești, iar noi ne dorim să te ajutăm să te
          dezvolți, oferim un audit gratuit prin care să descoperi dacă
          serviciile oferite sunt exact ceea ce ai nevoie. Mai mult, în urma
          auditului vei avea mai clare obiectivele, dar și ce ar trebui să faci
          în continuare.
        </p>
      ),
      icon: (
        <div className="text-primary">
          <FaClipboardCheck size={'3em'} />
        </div>
      ),
    },
    {
      heading: <h3 className="font-bold text-primary">Strategie</h3>,
      descriere: (
        <p>
          Nimic nu se poate obține fără o strategie în spate. Tocmai de aceea,
          cu ajutorul nostru vei putea să ai un plan bine pus la punct, care va
          putea fi adaptat pe parcurs în funcție de rezultate și piață. O idee
          poate ține o secundă, însă o strategie te poate duce la îndeplinirea
          obiectivelor.
        </p>
      ),
      icon: (
        <div className="text-primary">
          <FaChartLine size={'3em'} />
        </div>
      ),
    },
    {
      heading: <h3 className="font-bold text-primary">Set-up Campanii</h3>,
      descriere: (
        <p>
          Teoria sună perfect, însă este ineficientă fără practică. Astfel, ne
          ocupăm de setarea campaniilor de la cap la coadă, în timp ce tu poți
          vizualiza de sus tot ceea ce se întâmplă. Vei putea monitoriza tot
          procesul în timp real.
        </p>
      ),
      icon: (
        <div className="text-primary">
          
          <FaCogs size={'3em'} />
        </div>
      ),
    },
    {
      heading: <h3 className="font-bold text-primary">Monitorizare</h3>,
      descriere: (
        <p>
          Ne focusăm pe a aduce cele mai bune rezultate, adaptăm și analizăm
          constant campaniile setate.
        </p>
      ),
      icon: (
        <div className="text-primary">
          <FaChartBar size={'3em'} />
        </div>
      ),
    },
    {
      heading: <h3 className="font-bold text-primary">Optimizare</h3>,
      descriere: (
        <p>
          Ajustăm constant campaniile setate prin a le optimiza: analizăm
          cap-coadă toată campania, fiind atenți la detalii și încercând tot
          timpul să atingem obiectivele stabilite la începutul strategiei.
        </p>
      ),
      icon: (
        <div className="text-primary">
          <FaCogs size={'3em'} />
        </div>
      ),
    },
    {
      heading: <h3 className="font-bold text-primary">Raportare</h3>,
      descriere: (
        <p>
          Analizăm toate campaniile pe care le desfășurăm printr-o raportare
          elaborată în care vedem performanțele obținute. Mai mult, venim cu
          soluții astfel încât să eficientizăm și mai mult următoarele campanii
          și obiective.
        </p>
      ),
      icon: (
        <div className="text-primary">
          <FaFileAlt size={'3em'} />
        </div>
      ),
    },
  ],
};

export const Sectiunea4 = {
  heading: (
    <h2 className=" m-10 lead font-bold text-3xl text-center">Cum Lucram</h2>
  ),
  elemente:  [
  {
    heading: <h3 className="font-bold text-primary">Alocarea Proiectului</h3>,
    descriere: (
      <p>
        In cadrul agenției, proiectul tău va fi alocat specialistului in Google Ads care dispune de experiența si expertiza necesara afacerii tale.
      </p>
    ),
   
  },
  {
    heading: <h3 className="font-bold text-primary">Stabilirea Obiectivelor</h3>,
    descriere: (
      <p>
        In urma unor întâlniri repetate, vei stabili împreună cu specialistul obiectivele afacerii tale. Veti clarifica targetul si bugetul necesar pentru a ajunge la performantele dorite.
      </p>
    ),
    
  },
  {
    heading: <h3 className="font-bold text-primary">Campaniile</h3>,
    descriere: (
      <p>
        Specialistul tau va crea contul Google, il va construi si structura corect. Mai mult, acesta va identifica cele mai bune optiuni pentru tine astfel incat niciun leu sa nu fie irosit.
      </p>
    ),
   
  },
  {
    heading: <h3 className="font-bold text-primary">Monitorizarea performanțelor</h3>,
    descriere: (
      <p>
        Campaniile de succes trebuie sa fie observate indeaproape. Tocmai de aceea, se va instala si configura Google Analytics care ne va ajuta sa colectam datele eficient astfel incat sa optimizam cu succes campaniile.
      </p>
    ),
   
  },
  {
    heading: <h3 className="font-bold text-primary">Optimizarea campaniilor</h3>,
    descriere: (
      <p>
        Odata ce campaniile pornesc, acestea vor fi monotorizate in permaneneta. Mai mult, vor fi optimizate pentru a plati cat mai putin pentru un click, respectiv pentru a imbunatati conversia si a eficientiza indicatorii.
      </p>
    ),
    
  },
  {
    heading: <h3 className="font-bold text-primary">Raportare</h3>,
    descriere: (
      <p>
        Vei fi in permanenta conectat cu ceea ce face specialistul tau. Tocmai de aceea, iti vom trimite periodic rapoarte care sa te ajute sa intelegi ce se intampla in spatele cifrelor. Toate explicatiile vor fi pe intelesul tau astfel incat sa ai control total asupra contului.
      </p>
    ),
   
  },
]
};

export const Sectiunea5 = {
  heading: (
    <h2 className=" m-10 lead font-bold text-3xl text-center">
      De ce sa alegi serviciile noastre de promovare{' '}
      <span className="text-primary">google ads</span>
    </h2>
  ),
};


export const Sectiunea6 = (
  <>
    Ai toate motivele sa ajungi la cat mai multi cumparatori si ai tot suportul
    nostru pentru a ajunge exact acolo unde iti doresti. Contacteaza-ne acum si
    hai sa iti ducem afacerea la un alt nivel.
  </>
);
// vezi formular CTA