import { memo } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";
import Background from "../../components/Background";

const Layout = () => {
  return (
    <div className="relative min-h-screen">
      <Background />

      <div className="relative z-10">
        <Header />
        <main className="pt-4">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default memo(Layout);
