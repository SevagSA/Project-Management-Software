import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

import Home from "./Components/Home/Home";
import CreateTask from "./Components/Task/CreateTask";
import ViewAllTasks from "./Components/Task/ViewAllTasks";
import MessageRoom from "./Components/Message/MessageRoom";
import SidebarNav from "./Components/Nav/SidebarNav/SidebarNav";

function App() {
  return (
    <Router>
        <div>
        <SidebarNav />
            <Switch>
                <Route path="/messages">
                    <MessageRoom />
                </Route>
                <Route path="/tasks">
                    <ViewAllTasks />
                </Route>
                <Router path="/create-task">
                    <CreateTask />
                </Router>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
        <GlobalStyle />
    </Router>
  );
}

export default App;
