import Head from "next/head";
import Hero from "@/components/Hero/Hero";
import Features from "@/components/Features/Features";

export default function Home() {
  return (
    <>
      <Head>
        <title>Unleash your inner Barista</title>
        <meta
          name="description"
          content="Premium artisanal coffees delivered to your doorstep. Explore our exceptional selection and awaken your senses. Unleash your inner barista and savor the perfect cup. Order now!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Features />
      </main>
    </>
  );
}
