
import Head from 'next/head'
import { HomePage } from '../components/home';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
      <Head>
   
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon.ico.png" />
   
   
        <title>Rishabh Tiwari | Front-End Developer Portfolio</title>
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport"></meta>

      </Head>

      <HomePage />
    </>
  );
}
