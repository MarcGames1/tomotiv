import ContactForm from "@/components/ContactForm/ContactForm";

import Avatar from "@/components/Avatar/Avatar";

const CTAComponent = ({ heading, descriere, alex=false}) => {
  return (
    <>
      <h2 className="text-center my-10 lead font-bold text-3xl">{heading}</h2>
      <div className=" items-center justify-stretch grid grid-rows-2 lg:grid-cols-2 gap-5 ">
        <div className=" m-5 p-5  h-full shadow-xl bg-base-100 rounded-md  ">
          <ContactForm />
        </div>
        <div className="flex flex-col shadow-xl bg-base-100  items-center  ">
          <Avatar
            alt={`Poza Profil ${alex ? 'Alexandru Marcu' : 'Laura Iaurum'}`}
            src={`/echipa/poze profil/${
              alex ? 'profil-alexandru.webp ' : 'profil-laura.jpg'
            }`}
          />
          <div className={'prose   block p-5 m-5'}>{descriere}</div>
        </div>
      </div>
    </>
  );
};

export default CTAComponent;