import { NavBar, Welcome, Dock} from "#components/index.js";

export const App = () => {
    return (
        <main>
            <NavBar />
            <Welcome />
            <Dock />
        </main>
    )
};

export default App;
