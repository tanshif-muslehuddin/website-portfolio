import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

// *local imports
import { NavBar, Welcome, Dock} from "#components/index.js";
import { Terminal } from "#windows/index.js"

gsap.registerPlugin(Draggable);

export const App = () => {
    return (
        <main>
            <NavBar />
            <Welcome />
            <Dock />

            <Terminal />
        </main>
    )
};

export default App;
