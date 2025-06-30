import HeaderWapper from "@/components/headers/headerWapper";
import "./globals.css";
import FooterWrapper from "@/components/footer/footerWrapper";

export default function RootLayout ({children}) {

  return(
    <>
      <html lang="fr">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Passero+One&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Irish+Grover&family=Passero+One&display=swap" rel="stylesheet"></link>
        </head>
        <body>
          <HeaderWapper/>
            <main className="w-full">
              {children}
            </main>
          <FooterWrapper/>
        </body>
      </html>
    </>
  )
}