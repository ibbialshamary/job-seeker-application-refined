import { Layout } from "./components/UI/Layout";
import { Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import MyJobs from "./pages/MyJobs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SearchedJobResult from "./pages/SearchedJobResult";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<Search />} />
        <Route path="/search" element={<Search />} />
        <Route path="/my-jobs" element={<MyJobs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/searched-job-result" element={<SearchedJobResult />} />
      </Routes>
    </Layout>
  );
}

export default App;
