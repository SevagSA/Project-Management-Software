import {
    BrowserRouter as Router,
    Switch,
    Route,
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
import Notificatoin from "./Components/Notification/Notification";

function App() {
    return (
        <Router>
            <div>
                <TopNav>
                    <GlobalSearchBar />
                    <Notificatoin />
                </TopNav>
                <hr />
                <SidebarNav />
                <Switch>
                    <Route path="/chat">
                        <ChatRoom />
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
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/profile-page">
                        <Profile />
                    </Route>
                    <Route path="/members">
                        <ViewMembers />
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

const TopNav = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

export default App;