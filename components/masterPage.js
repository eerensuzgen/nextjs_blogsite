import Navigation from "./Navigation";
import Head from "next/head";

function Layout({ children }) {
  return (
    <div className="layout container mx-auto max-w-4xl">
      <Head>
        <title>Enes Eren Süzgen Web Site</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="mx-auto">
        <Navigation />
        <main>{children}</main>
        <footer className="mt-4 bg-slate-600 grid place-items-center relative inset-x-0 bottom-0 h-16 ...">
          <span className="text-center">design by Enes Eren Süzgen</span>
        </footer>
      </div>
    </div>
  );
}

export default Layout;
