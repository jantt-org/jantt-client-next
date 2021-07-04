import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface props {
  children: React.ReactNode;
}

const Layout = ({ children }: props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 container mx-auto px-6 my-16">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
