import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages";
import Contacts from "./pages/contacts";

function App() {
    return (
        <Router>
            <Switch>
                <Route path={'/'} component={Home} exact/>
                <Route path={'/'} component={Contacts}/>
            </Switch>
        </Router>
    );
}

export default App;
