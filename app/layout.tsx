import Footer from 'template/Footer/Footer'
import '../styles/index.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div>Header</div>
        <div>{children}</div>
        <Footer/>
      </body>
    </html>
  )
}
