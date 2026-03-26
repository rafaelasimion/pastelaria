import './globals.css';
import { Poppins, Jaro } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins'
})

export const jaro = Jaro({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-jaro'
})

export const metadata = {
  title: "Pastel do Coelho",
  description: "Pastel feito na hora, crocante e delicioso!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.variable} ${jaro.variable}`}>
        {children}
      </body>
    </html>
  )
}