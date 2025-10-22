import { memo } from "react";
import { NavLink } from "react-router-dom";

const Register: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen text-white relative z-10">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-[0_8px_32px_rgba(255,255,255,0.1)] w-[22rem] border border-white/20">
        <h2 className="text-3xl font-semibold mb-6 text-center text-white/90">
          Ro‘yxatdan o‘tish
        </h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Ismingiz"
            className="p-3 rounded-xl bg-white/15 text-white placeholder-white/60 focus:bg-white/25 transition outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-xl bg-white/15 text-white placeholder-white/60 focus:bg-white/25 transition outline-none"
          />
          <input
            type="password"
            placeholder="Parol"
            className="p-3 rounded-xl bg-white/15 text-white placeholder-white/60 focus:bg-white/25 transition outline-none"
          />
          <input
            type="password"
            placeholder="Parolni tasdiqlang"
            className="p-3 rounded-xl bg-white/15 text-white placeholder-white/60 focus:bg-white/25 transition outline-none"
          />
          <button
            type="submit"
            className="mt-2 bg-white text-gray-900 font-semibold py-2.5 rounded-xl hover:bg-gray-200 transition active:scale-[0.98]"
          >
            Ro‘yxatdan o‘tish
          </button>
        </form>

        <p className="text-center mt-5 text-sm text-white/70">
          Allaqachon akkauntingiz bormi?{" "}
          <NavLink to="/login" className="text-white font-medium hover:underline">
            Kirish
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default memo(Register);
