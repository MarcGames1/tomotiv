
import Page from "../PageLayout";
import SectiuneAlba from '@/components/LayoutComponents/SectiuneAlba';




export const metadata = {
  title: 'Mi-am uitat Parola ',
  description: 'TOMOTIV',
  robots:'noindex, folow'
};

export default function RootLayout({ children }) {
  return (
    <>
      <Page>
        <main className=" w-full">
          <SectiuneAlba className="flex flex-col w-full p-5 mx-auto prose">
            <h1 className="text-center m-6 ">Inregistrare</h1>
            {children}
          </SectiuneAlba>
        </main>
      </Page>
    </>
  );
  }
    

      

     
