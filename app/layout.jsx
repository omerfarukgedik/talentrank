import './src/styles/globals.scss';
import StoreProvider from './StoreProvider';
export const metadata = {
  title: 'Talentrank',
  description: 'Developed by Ömer Faruk Gedik',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <StoreProvider>
          <main>{children}</main>
        </StoreProvider>
      </body>
    </html>
  );
}
