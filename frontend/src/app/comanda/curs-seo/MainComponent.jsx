import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import FormularInscriereCurs from '../FormularInscriereCurs';


const Alert = ({children}) =>{
  return (
    <>
      <div className="alert alert-success">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{children}</span>
      </div>
    </>
  );
}

const ComandaCursSeoMainComponent = () => {
  return (
    <>
      <div className="flex flex-col m-5 p-5 items-center justify-items-center">
        <h2 className=" m-10 leading-10 tracking-wide  font-bold lg:text-5xl md:text-3xl text-center">
          FELICITĂRI! Ai luat cea mai bună decizie! Ești pe cale să aduci în
          viața ta acea schimbarea care te va aduce mai aproape de visul tău!
        </h2>
        <div className="prose">
          {' '}
          <p>
            Urmează să înveți una dintre cele mai importante și bănoase
            abilități din marketing!
          </p>
          <p className="font-bold">
            Completează formularul, asigură-ți un loc în noua ediție a cursului
            „SEOtropolis”, îndeplinește-ți visul și dublează-ți profitul!
          </p>
        </div>
      </div>
      <div className="container  m-auto grid md:grid-flow-col grid-flow-row items-center justify-items-center">
        <div className="flex">
          <div className="prose">
            <h3>Să recapitulăm ce îți oferă cursul</h3>
            <div className="flex flex-col gap-5">
              {' '}
              <Alert>
                6 săptămâni de lecții practice - Împărțite pe module super ușor
                de urmărit
              </Alert>
              <Alert>
                Exemple! Practică! și iar exemple! Vei primi mereu exemple,
                exerciții și vei aplica practic toată teroia.
              </Alert>
              <Alert>
                Mereu în contact cu un mentor! Vei primi mereu feedback de la
                mentorul tău astfel încât să ne asigurăm că ai înțeles totul.
              </Alert>
              <Alert>
                Pasiunea ta va fi shareuită și cu ceilalți! Vei face parte
                dintr-un grup privat pe Facebook unde vei putea comunica
                constant cu alte persoane.
              </Alert>
              <Alert>
                BONSURI! Webinarii, materiale și multe resurse astfel încât să
                ai acces mereu la informații de ultimă oră.
              </Alert>
              <Alert>
                FOREVER! Ai acces la acest curs pentru totdeauna! Vei putea
                accesa cursul oricând în timp ce beneficiezi de fiecare dată de
                ultimele updateuri de la o ediție la alta.
              </Alert>
              <Alert>
                Posibilitatea de a colabora cu noi! De îndată ce termini cursul,
                vei putea avea șansa să lucrezi cu noi!{' '}
              </Alert>
              <img
                src="/png/MBG.jpg"
                alt="money back guarantee image"
                width={600}
                height={600}
              />
              <h3> GARANȚIA ZERO RISCURI ASIGURATĂ!</h3>
              <p>
                Ai 14 zile la dispoziție în care vei putea să vezi cu exactitate
                cu ce se mănâncă SEO. Îți vei putea face o idee despre acest
                domeniu. Vei învăța unul dintre cele mai căutate skilluri din
                întreaga lumea care îți va putea oferi șansa să ajungi să
                câștigi suma visurilor tale.{' '}
              </p>
              <p>
                Dacă în 14 zile consideri că îți doreși banii înapoi, poți cere
                acest lucru fără să dai vreo explicație!
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
        
          <FormularInscriereCurs />
        </div>
      </div>
    </>
  );
}

export default ComandaCursSeoMainComponent