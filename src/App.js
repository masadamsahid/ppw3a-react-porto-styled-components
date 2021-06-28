import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages";
import Aboutme from "./pages/aboutme";
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <Switch>
                <Route path={'/'} component={Home} exact/>
                <Route path={'/aboutme'} component={Aboutme}/>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
