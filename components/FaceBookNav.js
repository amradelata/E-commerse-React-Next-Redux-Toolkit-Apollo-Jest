import styles from "./FaceBookNav.module.css";

const FaceBookNav = (props) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
};

export default FaceBookNav;
