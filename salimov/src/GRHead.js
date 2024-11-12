import Head from "next/head";
const GRHead = () => {
  return (
    <Head>
      <title>GR</title>
      <meta charSet="utf-8" />
      {/* Standard favicon */}
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon.ico" />
      
      {/* iOS icons */}
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
      
      {/* Android icons */}
      <link rel="icon" type="image/png" sizes="192x192" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
      
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Template Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Livvic:wght@100;200;300;400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      {/* Template CSS Files */}
      <link rel="stylesheet" href="css/devicon.min.css" />
      <link rel="stylesheet" href="css/all.min.css" />
      <link rel="stylesheet" href="css/bootstrap.min.css" />
      <link rel="stylesheet" href="css/swiper-bundle.min.css" />
      <link rel="stylesheet" href="css/animate.min.css" />
      <link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css" />
      <link rel="stylesheet" href="css/style.css" />
      {/* CSS Skin File */}
      {/* <link rel="stylesheet" href="css/skins/yellow.css" /> */}
      {/* Live Style Switcher - demo only */}

      <link rel="stylesheet" type="text/css" href="css/styleswitcher.css" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    </Head>
  );
};
export default GRHead;
