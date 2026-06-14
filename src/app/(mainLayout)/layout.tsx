import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[100vh-200px]">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default layout;
