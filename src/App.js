import './App.css';
import RechartGraph from "./pages/Rechart/RechartGraph";
import AgGrid from "./pages/AgGrid/AgGrid";
import AgGridEnterpr from "./pages/AgGridEnterpr/AgGridEnterpr";

function App() {
    return (
        <div className="App">
            <RechartGraph />
            {/*<AgGrid />*/}
            <AgGridEnterpr />
        </div>
    );
}

export default App;
