import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="/favicon.ico"  // Asegúrate de que este archivo esté en la carpeta public
          type="image/x-icon"
        />
        {/* También puedes agregar un favicon en formato PNG o SVG como alternativa */}
        {/* <link rel="icon" href="/favicon.png" type="image/png" /> */}
      </Head>
      <div className="mt-[8%] ml-[8%] text-2xl font-bold text-sky-100">
        <h1>POLO GROUP</h1>
      </div>
    </>
  );
}
