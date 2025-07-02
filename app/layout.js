import "./globals.css";
import HeaderWapper from "@/components/headers/headerWapper";
import FooterWrapper from "@/components/footer/footerWrapper";
import { passero } from "@/lib/font";


export default function RootLayout ({children}) {

  return(
    <>
      <html lang="fr">
        <body>
          <div className={`${passero.className} w-full min-h-[100vh] flex flex-col overflow-hidden`}>
            <HeaderWapper/>
              <main>
                {children}
              </main>
            <FooterWrapper/>
          </div>
        </body>
      </html>
    </>
  )
}