import styles from './App.module.scss'
import {Route, Routes} from "react-router-dom";
import Layout from "../Layout/Layout";
import Main from "../../Pages/Main";
function App() {
  return (
      <div className={styles.page}>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Main/>} />
          </Route>
        </Routes>
      </div>
  );
}

export default App;
