import { memo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { setToken } from "../../lib/features/tokenSlice";

const Login: React.FC = () => {
  const { login } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!values.email || !values.password) {
      alert("Iltimos, barcha maydonlarni to‘ldiring.");
      return;
    }

    login.mutate(values, {
      onSuccess: (res) => {
        dispatch(setToken(res?.data?.accessToken));
        navigate("/");
      },
      onError: (err: any) => {
        const message =
          err?.response?.data?.message ||
          err?.message ||
          "Kirishda xatolik yuz berdi";
        alert(message);
      },
    });
  };

  return (
    <div className="flex items-center justify-center h-screen text-white">
      <div className="backdrop-blur-xl shadow-[0_8px_32px_rgba(255,255,255,0.1)] bg-white/10 border border-white/20 p-10 rounded-3xl w-[360px] flex flex-col items-center space-y-6">
        <h2 className="text-3xl font-semibold text-white/90 tracking-tight">
          Kirish
        </h2>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col space-y-4"
        >
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            className="w-full py-3 px-4 rounded-2xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:bg-white/25 transition-all"
          />
          <input
            name="password"
            type="password"
            placeholder="Parol"
            value={values.password}
            onChange={handleChange}
            className="w-full py-3 px-4 rounded-2xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:bg-white/25 transition-all"
          />

          <button
            type="submit"
            disabled={login.isPending}
            className="w-full py-3 rounded-2xl bg-white text-gray-900 font-semibold hover:bg-gray-100 active:bg-gray-200 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {login.isPending ? "Kirilmoqda..." : "Davom etish"}
          </button>
        </form>

        <p className="text-sm text-white/60 mt-4">
          Hisobingiz yo‘qmi?{" "}
          <NavLink
            to="/register"
            className="text-white/90 underline hover:text-white"
          >
            Ro‘yxatdan o‘tish
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default memo(Login);
