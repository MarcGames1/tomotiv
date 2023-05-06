import Head from "next/head";
import { tw } from "twind";
import Page from "../components/Page";
import { typography, links } from "../styles";
import FoggotPassword from "../components/Forms/FoggotPassword";
import Head from "next/head";

const ResetPassword = () => {
  return (
    <Page>
        <Head>
            <meta name='robots' content='noindex,follow' />
            <link rel='canonical' href='https://tomotiv.ro/reset-password/' />
            <title>Am Uitat Parola</title>
        </Head>
      <div className={tw('flex items-center flex-col m-4 p-4 gap-4')}>
      <h1 className={typography.h1}>Am Uitat Parola </h1>

      <FoggotPassword />
      
      </div>
    </Page>
  );
};

export default ResetPassword;