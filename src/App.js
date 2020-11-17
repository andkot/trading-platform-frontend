import './App.css';
import Techologies from "./Technologies";
import Headers from "./Headers";
import Currencies from "./Currencies";


function App() {
    const app = (<div>aaaaaaaaaaaaaa</div>);
    return (
        <div className="App">
            {app}
            <Headers/>
            <Techologies/>
            <Currencies/>
            <header className="App-header">
                <ul>
                    <li>App one!!</li>
                    <li>App two!!</li>
                </ul>
                <h1>Hello</h1>
            </header>
        </div>
    );
}


export default App;
