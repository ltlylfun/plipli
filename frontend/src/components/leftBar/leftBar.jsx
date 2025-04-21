import "./leftBar.css";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="menuIcons">
        {" "}
        <a href="" className="menuIcon">
          <img src="/plipli/logo.png" alt="Logo" className="logo" />
        </a>
        <a href="" className="menuIcon">
          <img src="/plipli/home.svg" alt="" />
        </a>
        <a href="" className="menuIcon">
          <img src="/plipli/create.svg" alt="" />
        </a>
        <a href="" className="menuIcon">
          <img src="/plipli/updates.svg" alt="" />
        </a>
        <a href="" className="menuIcon">
          <img src="/plipli/messages.svg" alt="" />
        </a>
      </div>
      <a href="" className="menuIcon">
        <img src="/plipli/settings.svg" alt="" />
      </a>
    </div>
  );
};
export default LeftBar;
