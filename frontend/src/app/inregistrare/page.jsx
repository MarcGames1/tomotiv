import SectiuneAlba from '@/components/LayoutComponents/SectiuneAlba';
import SignUpForm from './forms/SignUpForm';


export default function Inregistrare() {
  return (
    <main className=" w-full">
      
        <SectiuneAlba className="flex flex-col w-full p-5 mx-auto prose">
          <h1 className="text-center m-6 ">Inregistrare</h1>
          <SignUpForm />
          
        </SectiuneAlba>
        
    </main>
  );
}
