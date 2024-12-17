import { Outlet } from 'react-router-dom';
const App = () => {
  return (
      <>
        <header>

        </header>
        <main>
          <Outlet/>
        </main>
        <footer>

        </footer>
      </>
  );
};

export default App;