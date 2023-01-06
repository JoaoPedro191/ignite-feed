import styles from "../components/Header.module.css";
import igniteLogo from "../images/Ignite-logo.svg";
console.log(styles);

function Header() {
  return (
    <>
      <header className={styles.header}>
        <img src={igniteLogo} alt="logotipo do ignite" />
      </header>
    </>
  );
}
export { Header };
