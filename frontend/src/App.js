import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

import Home from "./Components/Home/Home";
import CreateTask from "./Components/Task/CreateTask";
import ViewTasks from "./Components/Task/ViewTasks/ViewTasks";
import MessageRoom from "./Components/Message/MessageRoom";
import SidebarNav from "./Components/Nav/SidebarNav/SidebarNav";
import TaskDetail from "./Components/Task/TaskDetail/TaskDetail"
import Registration from "./Components/Registration/Registration";

function App() {
    return (
        <Router>
            <div>
                <SidebarNav />
                <Switch>
                    <Route path="/messages">
                        <MessageRoom />
                    </Route>
                    <Route path="/tasks/:id">
                        <TaskDetail />
                    </Route>
                    <Route path="/tasks">
                        <ViewTasks />
                    </Route>
                    <Route path="/create-task">
                        <CreateTask />
                    </Route>
                    <Route path="/admin-registration">
                        <Registration isAdmin={true} />
                    </Route>
                    <Route path="/staff-registration">
                        <Registration isAdmin={false} />
                    </Route>
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
