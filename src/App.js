import { Provider } from "react-redux";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Counter />
      <Auth />
      <UserProfile />
    </Provider>
  );
}

export default App;
