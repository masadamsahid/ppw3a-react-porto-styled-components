import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages";
import Contacts from "./pages/contacts";
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <Switch>
                <Route path={'/'} component={Home} exact/>
                <Route path={'/'} component={Contacts}/>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
