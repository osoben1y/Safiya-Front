import { memo } from "react";
import { NavLink } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen text-white">
      {/* Login Card */}
      <div className="backdrop-blur-xl shadow-[0_8px_32px_rgba(255,255,255,0.1)] bg-white/10 border border-white/20 p-10 rounded-3xl w-[360px] flex flex-col items-center space-y-6">
        <h2 className="text-3xl font-semibold text-white/90 tracking-tight">
          Kirish
        </h2>

        <form className="w-full flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full py-3 px-4 rounded-2xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:bg-white/25 transition-all"
          />
          <input
            type="password"
            placeholder="Parol"
            className="w-full py-3 px-4 rounded-2xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:bg-white/25 transition-all"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-2xl bg-white text-gray-900 font-semibold hover:bg-gray-100 active:bg-gray-200 transition-all shadow-md"
          >
            Davom etish
          </button>
        </form>

        <p className="text-sm text-white/60 mt-4">
          Hisobingiz yo‘qmi?{" "}
          <NavLink to="/register" className="text-white/90 underline hover:text-white">
            Ro‘yxatdan o‘tish
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default memo(Login);
