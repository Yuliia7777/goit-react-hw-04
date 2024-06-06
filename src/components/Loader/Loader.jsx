import { Oval } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => (
  <div className={`${css.loader} ${css.centered} ${css.popup}`}>
    <Oval color="#00BFFF" height={80} width={80} />
  </div>
);

export default Loader;
