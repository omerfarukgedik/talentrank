import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

export default function InterviewLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
