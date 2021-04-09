import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import Home from "./Components/Home/Home";
import CreateTask from "./Components/Task/CreateTask";
import ViewTasks from "./Components/Task/ViewTasks/ViewTasks";
import ChatRoom from "./Components/Chat/ChatRoom/ChatRoom";
import SidebarNav from "./Components/Nav/SidebarNav/SidebarNav";
import TaskDetail from "./Components/Task/TaskDetail/TaskDetail"
import Registration from "./Components/Authentication/Registration";
import Login from "./Components/Authentication/Login";
import Profile from "./Components/Profile/Profile";
import ViewMembers from "./Components/Members/ViewMembers";
import GlobalSearchBar from "./Components/GlobalSearchBar/GlobalSearchBar";
import Notification from "./Components/Notification/Notification";
import Logout from "./Components/Authentication/Logout";

function App() {
    return (
        <Router>
            <div>
                <TopNav>
                    <GlobalSearchBar />
                    <Notification />
                    <Link exact to="/logout">Logout</Link>
                </TopNav>
                <hr />
                <SidebarNav />
                <Switch>
                    <Route exact path="/chat">
                        <ChatRoom />
                    </Route>
                    <Route exact path="/tasks/:id">
                        <TaskDetail />
                    </Route>
                    <Route exact path="/tasks">
                        <ViewTasks />
                    </Route>
                    <Route exact path="/create-task">
                        <CreateTask />
                    </Route>
                    <Route exact path="/admin-registration">
                        <Registration isAdmin={true} />
                    </Route>
                    <Route exact path="/staff-registration">
                        <Registration isAdmin={false} />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/logout">
                        <Logout />
                    </Route>
                    <Route exact path="/profile-page">
                        <Profile />
                    </Route>
                    <Route exact path="/members">
                        <ViewMembers />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="*">
                        <p>404 | Not found</p>
                    </Route>
                </Switch>
            </div>

            <GlobalStyle />
        </Router>
    );
}

const TopNav = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

export default App;