import { memo } from "react";
import logo from "../../assets/logo.png";
import "./Background.css";

const Background = () => {
  const logoCount = 15;
  return (
    <div className="background-layer">
      <div className="logo-rain">
        {Array.from({ length: logoCount }).map((_, i) => (
          <img key={i} src={logo} alt="logo" className="falling-logo" />
        ))}
      </div>
    </div>
  );
};

export default memo(Background);
