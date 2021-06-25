import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
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
