import {
  FaBullhorn,
  FaNewspaper,
  FaGlobe,
  FaShareAlt,
  FaShoppingBag,
  FaFileAlt,
} from 'react-icons/fa';

export const CopyWriringTexte = {
  meta: {
    titlu: 'Servicii  de Copywriting si Content Marketing » Tomotiv',
    descriere:
      'Servicii de copywriting si texte care vand de milioane.Vezi servicii de content marketing, content writing si copywriting.',
  },
  Sectiunea1: {
    heading: <>Servicii de Copywriting si Content Marketing</>,
    paragraf: (
      <>
        Ai toate motivele sa vinzi prin texte. Obtine vanzari cu texte care vand
        de milioane.Conacteaza-ne si dubleaza-ti vanzarile
      </>
    ),
  },
  Sectiunea2: {
    heading: (
      <h2 className=" m-10 lead font-bold text-3xl text-center">
        Oferim intotdeauna servicii de copywriting optimizat SEO
      </h2>
    ),
  },

  Sectiunea3: {
    heading: (
      <h2 className=" m-10 lead font-bold text-3xl text-center">
        Tipuri de Servicii de Copywriting si Content Marketing
      </h2>
    ),
    elemente: [
      {
        heading: <h3 className="font-bold text-primary">Articole de Blog</h3>,
        descriere: (
          <p>
            Redactăm articole de blog optimizate SEO și împletite cu multă
            creativitate gata să fie devorate de publicul tău țintă.
          </p>
        ),
        icon: <FaNewspaper size={'3em'} />,
      },
      {
        heading: <h3 className="font-bold text-primary">Advertoriale</h3>,
        descriere: (
          <p>
            Scriem texte de tip advertorial și oferim posibilitatea publicării
            pe platformele proprii.
          </p>
        ),
        icon: <FaBullhorn size={'3em'} />,
      },
      {
        heading: <h3 className="font-bold text-primary">Website</h3>,
        descriere: (
          <p>
            Atragem atenția clienților prin texte unice, fresh și inovatoare.
          </p>
        ),
        icon: <FaGlobe size={'3em'} />,
      },
      {
        heading: <h3 className="font-bold text-primary">Social Media</h3>,
        descriere: (
          <p>
            Nu scriem texte care vând. Scriem texte care revând și iar și iar.
            Scriem pentru ca utilizatorii tăi să revină mereu pe conturile tale.
          </p>
        ),
        icon: <FaShareAlt size={'3em'} />,
      },
      {
        heading: (
          <h3 className="font-bold text-primary">Descrieri de produse</h3>
        ),
        descriere: (
          <p>
            Punctăm în evidență produsele tale prin texte care să reflecte
            calitatea, eficacitatea și frumusețea lor.
          </p>
        ),
        icon: <FaShoppingBag size={'3em'} />,
      },
      {
        heading: <h3 className="font-bold text-primary">Brosuri și pliante</h3>,
        descriere: (
          <p>
            Într-o lume în care puțini citesc, reușim să strângem mulțimi care
            să se întoarcă la afacerea ta. Gândim, compunem și adaptăm texte
            potrivite afacerii tale.
          </p>
        ),
        icon: <FaFileAlt size={'3em'} />,
      },
    ],
  },
  Sectiunea4: {
    heading: (
      <h2 className=" m-10 lead font-bold text-3xl text-center">
        Servicii content writing vs. servicii copywriting
      </h2>
    ),
    descriere: (
      <div>
        <p>
          Content Marketing te va ajuta daca iti doresti sa atragi atentia
          utilizatorilor prin articole, bloguri.
        </p>
        <p>
          Copywritingul vine in ajutorul celor care isi doresc texte scurte,
          slogae, eficiente care sa atraga atentia utilizatorilor imediat.
        </p>
      </div>
    ),
  },
  Sectiunea5: {
    heading: (
      <>
        <h2 className=" m-10 lead font-bold text-3xl text-center">
          Avantaje Copywriting
        </h2>
        <p>
          Produsul sau serviciul tau este extraordinar? Copywritingul poate veni
          in ajutorul tau prin simpla, dar complexa manuire a cuvintelor care sa
          atraga atentia cititorului.
        </p>
        <h3>Avantajele copywritingului sunt urmatoarele:</h3>
      </>
    ),
  },
};
