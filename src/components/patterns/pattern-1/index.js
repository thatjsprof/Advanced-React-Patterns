import Pattern01 from "./01";
// import Pattern02 from "./02";

const styles = {
  root: {
    display: "flex",
    marginTop: "100px",
  },
  rootItem: {},
};

const ClapPattern01 = () => {
  return (
    <section style={styles.root}>
      <Pattern01 className={styles.rootItem} />
      {/* <Pattern02 className={styles.rootItem} /> */}
    </section>
  );
};

export default ClapPattern01;
