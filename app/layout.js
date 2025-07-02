import HeaderWapper from "@/components/headers/headerWapper";
import FooterWrapper from "@/components/footer/footerWrapper";
import { passero } from "@/lib/font";
import "./globals.css";

export default function RootLayout ({children}) {

  return(
    <>
      <html lang="fr">
        <body className={`${passero.className}`}>
          <HeaderWapper/>
            <main className="w-[100%] h-[100%] flex-1">
              {children}
            </main>
          <FooterWrapper/>
        </body>
      </html>
    </>
  )
}