import styles from "./Layout.module.css";
// import Header from "./Header";
// import Menu from "./Menu";

function Layout() {
  return (
    // <div className={styles.container}>
    //   <Header />
    //   <div className={styles.layout}>
    //     <Menu />
    //     <div className={styles.contents}>{children}</div>
    //   </div>
    // </div>

    <div className={styles.title}>
      {true && <div>True 일떄 출력되는 메세지</div>}
      {false && <div>False 일떄 출력되는 메세지</div>}
      <button type="button">True</button>
    </div>
  );
}

export default Layout;
