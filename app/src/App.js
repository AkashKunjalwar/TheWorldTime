import Header from "./Components/Layout/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Layout/Footer";
import styles from "./App.module.css";
import store from "./Store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <Provider store={store}>
        <Content />
      </Provider>
      <Footer />
    </div>
  );
};

export default App;
