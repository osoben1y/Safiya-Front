import { memo } from 'react';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-[0_8px_32px_rgba(255,255,255,0.1)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <NavLink to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" width={60} height={60} />
          <span className="text-white text-xl font-semibold tracking-wide">
            Safiya
          </span>
        </NavLink>

        <nav className="flex items-center gap-8">
          <NavLink
            to="/register"
            className={({ isActive }) =>
              `text-white/80 hover:text-white transition relative 
               after:absolute after:-bottom-1 after:left-0 after:w-0 
               after:h-[2px] after:bg-white after:transition-all 
               hover:after:w-full ${isActive ? 'text-white after:w-full' : ''}`
            }
          >
            Register
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `text-white/80 hover:text-white transition relative 
               after:absolute after:-bottom-1 after:left-0 after:w-0 
               after:h-[2px] after:bg-white after:transition-all 
               hover:after:w-full ${isActive ? 'text-white after:w-full' : ''}`
            }
          >
            Login
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default memo(Header);
