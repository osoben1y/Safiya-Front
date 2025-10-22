import { memo } from "react";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white text-center">
      <h1 className="text-4xl font-bold">Safiya Tantanalar Saroyimizga hush kelibsiz!</h1>
      <p className="mt-4 text-white/80">Royhatdan o'ting yoki tizimga kiriting</p>
    </div>
  );
};

export default memo(Home);
