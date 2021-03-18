import SidebarNav from "./Components/Nav/SidebarNav/SidebarNav";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from "./Components/Home/Home";
import ViewAllTasks from "./Components/Task/ViewAllTasks";
import MessageRoom from "./Components/Message/MessageRoom";
import CreateTask from "./Components/Task/CreateTask";

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
    </Router>
  );
}

export default App;
