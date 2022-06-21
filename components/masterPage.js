import Navigation from "./navigation";
import Head from "next/head";

function Layout({ children }) {
  return (
    <div className="layout">
      <Head>
        <title>Enes Eren Süzgen Web Site</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
      <main>{children}</main>
      <footer>design by Enes Eren Süzgen</footer>
    </div>
  );
}

export default Layout;
