import styles from "../components/Sidebar.module.css";
import { PencilLine } from "phosphor-react";
import { Avatar } from "../components/Avatar";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />
      <div className={styles.profile}>
        <Avatar hasBorder={true} src="https://github.com/JoaoPedro191.png" />
        <strong>Diego Fernandes</strong>
        <span>Web developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
export { Sidebar };
