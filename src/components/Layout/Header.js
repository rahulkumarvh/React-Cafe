import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import Slider from "./Slider";
import pattern from "../../assets/pattern.png";
import coffee_bg from "../../assets/coffee.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <div className={classes["main-image"]}>
        <img src={coffee_bg}></img>
      </div>
      <div className={classes.pattern}>
        <img src={pattern}></img>
      </div>
      <header className={classes.header}>
        <h1>React Cafe</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
    </Fragment>
  );
};

export default Header;
