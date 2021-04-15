cmd + f = "task"
include = "frontend/"
exclude = "build/"

1. If there's functionality/styles that can be shared,
    rename it to "activity"

2. There will be one search view regarding acitvity.
    Members will be able to filter down by acitvity type
--------------------

1. These components can be shared (user ternary and a prop flag) (just change their name to "activity")
Obviously, rename also the places where these are used
    - DONE CreateTask
    - PARTIAL ViewTasks
    - PARTIAL TaskDetail
    - PARTIAL TaskList
    - PARTIAL TaskSearchResultCard
    - PARTIAL IndividualTask
    - PARTIAL TaskSidebar
    - DONE The names used for all the Styles.js files

- DONE Change the filenames as well
- DONE Make sure they have isTask flag
- DONE Make sure the props are named "activity" and not task
    - Change the prop name where you're passing
        the prop as well

2. Replace all instances of "task" related components
    on the Home component with a "project" component

3. Change "taskViewStyles" to "activityViewStyles"

4. Change the url for all of these components
    (App.js, SidebarNav.js, and other internally linked places)



check for /** TODOs */