# Defining Requirements
In this file there are two sections:

 1. [List of requirements](#list-of-reqs)
 2. [The prioritized list of requirements](#pr-list)

# <a id="list-of-reqs"></a>List of requirements
Before starting any coding, it's important to know what I will be building. At the very beginning of the project, I spent some time writing down the different requirements that I want my application to have in its initial version. Some of them inevitably change as I progress throughout the project. This was the initial list, I will try to keep this list updated whenever there are changes:

Glossary:
-   Admin: The head of the organization
-   Staff: An employee of the organization
-   Member: The general word used to refer to admin or staff (like "user")
-   Organization: a group of members

My requirements template:
- **ID**: The ID of the requirement. Format: [REQ-Category abbreviation-Num of the requirement in that category]
- **PR**: Priority (Low, Medium, High)
- **TIME**: Estimate time required to complete this requirement (Low, Medium, High)
- **DESC**: Description of the requirement
- **GOAL**: Goal of the requirement
- **SEQ**: Sequence of the requirement (*Member does X, system/software responds Y*)
- **DEP**: The IDs of requirements that this one is dependant on 
- **OTHER**: Any additional important notes (images, links, further explanation, design examples, etc.)

###  Miscellaneous

#### Global Search
**ID**: [REQ-MSC-1]  
**PR**: Low
**TIME**: Low
**DESC**: Given that a member has input a search query, the software should be able to return a list of links to different sections of the dashboard where the title or name match the input query.
**GOAL**: To allow a member to quickly access various parts of the dashboard.
**SEQ**: A member submits a search query in a search box, the software returns a list of links where the title or name contains the input query.
**DEP**: [REQ-M-3]
**OTHER**: Global search is accessible to all members, but staff will only see search results of the pages that they are allowed to access. Admins will see search results from the entire dashboard.

#### Live Notifications
**ID**: [REQ-MSC-2]  
**PR**: Low
**TIME**: Medium
**DESC**: Given that an action has been taken on the software regarding a member (whether by another member or by the software), the software should be able to notify the concerned member of that action in real-time, i.e. without needing to refresh the browser. There will be a notification bell icon on the screen. On click, it will display a drop-down list of all recent notifications and members can click on each notification to take them to the appropriate link within the system.
**GOAL**: To keep members updated on what is happening in the organization.
**SEQ**: The software or a member takes an action that concerns another member, the software sends a message to that concerned member about the action taken. If there are multiple members involved, the software should notify all members.
**DEP**: [REQ-M-3]

#### Weather API
    

**ID**: [REQ-MSC-3]  
**PR**: Low
**TIME**: Low
**DESC**: Given that a member has logged in, the software should be able to display the current weather based on their location.
**GOAL**: For members to know the weather.
**SEQ**: A member is logged in, the software displays the weather forecast on the dashboard.
**DEP**: [REQ-M-3]
**OTHER**:  ![](https://lh4.googleusercontent.com/eEGgt3G5RNCyO4IBbZgDlfa6pV5_XcWUsx4gTZsoWjQGebhD-VXFMTA2JjGOdE5_GXMS4R9r73zDj9rXDiME8OZzkfQSrcjdQ09grCULP_eUP5vni7QaCN-dKVItqfG9qDn0WvPX)

#### Stock API
    

**ID**: [REQ-MSC-4]  
**PR**: Low
**TIME**: Low
**DESC**: Given that a member has logged in, the software should be able to display to them the stock prices of the most famous indices (DOW, S&P, etc.).
**GOAL**: For members to know the current market prices.
**SEQ**: A member logs in, the software displays them the stock prices
**DEP**: [REQ-M-3]
**OTHER**: This could be something like a little widget showing the candle charts or like this ![](https://lh4.googleusercontent.com/JoD0ej52NTS3D9f2ItRmxEFaXzvDse04cTWamB2cy66hGxZTvQlQCXZjXl1z5-9Vh9MMs84Sf4UpmAcIaElgYJS4VSwGmpPDOpg2lXuHdfqJs5FIEM4uGQ_ONypP-2vmONAJnUgC)

  

### Members

2 member types -> admin and staff.

The admins can see all pages of the dashboard

The staff can only see all things related to them (e.g.: assigned tasks, messages)

#### Admin Registration

**ID**: [REQ-M-1]  
**PR**: High
**TIME**: Low
**DESC**: Given that a user submits the admin registration form, the software should be able to create and store an admin account for them in the database.
**GOAL**: To give the admin the ability to have an account and store information into the software
**SEQ**: The admin submits the registration form, the software creates an account, or displays an error message.
**DEP**: None
**OTHER**: None

#### Staff Registration
    

**ID**: [REQ-M-2]  
**PR**: High
**TIME**: Low
**DESC**: Given that an admin submits the staff registration form, the software should be able to create and store an account for the staff in the database.
**GOAL**: To give staff the ability to have an account registered with the admin’s organization and store information into the software.
**SEQ**: The admin submits the staff registration form, the software creates an account, or displays an error message.
**DEP**: [REQ-M-1]
**OTHER**: Only admins can register, not staff. Admins will register their staff into their organization. Once the admins have registered the staff, an email will be sent to the staff to come onto the dashboard and log in. In the email, a randomly generated password will also be sent. This is used to log in. Staff can choose to keep that password or reset it to get a new one.

#### Member Login
    

**ID**: [REQ-M-3]  
**PR**: High
**TIME**: Low
**DESC**: Given that a member inputs their email and password, the software should log them into their account.
**GOAL**: So that members can access their profile and associated activities.
**SEQ**: Members input their credentials into the login form, the software logs them in.
**DEP**: [REQ-M-1] or [REQ-M-2]
**OTHER**: None

#### Logout
    
**ID**: [REQ-M-4]  
**PR**: High
**TIME**: Low
**DESC**: Given that a member clicks the logout button, the software should log them out of their account.
**GOAL**: So that members can log out from their profile.
**SEQ**: Members click the logout button, the software logs them out.
**DEP**: [REQ-M-3]
**OTHER**: None

  

#### Reset Password
    

**ID**: [REQ-M-5]  
**PR**: Low
**TIME**: Low
**DESC**: Given that a member wants to change their current password, the software should allow them to do so by sending a reset password link to their email.
**GOAL**: So that members can change their password if they forgot it.
**SEQ**: Members click the reset password button, input their email, the software sends a password reset link to their email, members submit the form on the page that the link directed them to.
**DEP**: [REQ-M-3]
**OTHER**: None


#### “Remember Me” functionality
    
**ID**: [REQ-M-5]  
**PR**: Low
**TIME**: Low
**DESC**: Given that a member has already had a previous session with the software and has chosen the “remember me” option when logging in, the next time they come onto the site, the software should allow them to log in without asking for credentials.
**GOAL**: To make the UX better by making the experience more seamless.
**SEQ**: Members select the “remember me” checkbox during login, the next time the member comes to the site, they will be logged in automatically.
**DEP**: [REQ-M-3]
**OTHER**: None

### Live Messaging

#### Private Live Messaging

**ID**: [REQ-MSG-1]  
**PR**: Medium
**TIME**: Medium
**DESC**: Given that a member wants to communicate to another member, that member should be able to send a message directly through the dashboard to the concerned member. Both members should be able to receive messages in live-time, i.e. without needing to refresh the browser.
**GOAL**: To allow communication between 2 members.
**SEQ**: A member selects another member to message with, writes and submits the message, and the software sends the message to the receiving member.
**DEP**: [REQ-M-3]
**OTHER**: None

  

#### Live Group Messaging

**ID**: [REQ-MSG-2]  
**PR**: Medium
**TIME**: Medium
**DESC**: Given that multiple members want to communicate with each other, those members should be able to send a message directly through the dashboard to all concerned members. All members should be able to receive messages in live-time, i.e. without needing to refresh the browser.
**GOAL**: To allow communication between multiple members.
**SEQ**: A member selects multiple members to message with, writes and submits the message, and the software sends the message to all receiving members.
**DEP**: [REQ-M-3]
**OTHER**: None

### Project Management

#### Create Task

**ID**: [REQ-PM-1]  
**PR**: High
**TIME**: Medium
**DESC**: Given that an organization has a new task to complete, an admin should be able to create that task into the system.
**GOAL**: To store the task into the software to manage it effectively throughout the organization.
**SEQ**: An admin submits the task creation form, the software creates that task.
**DEP**: [REQ-M-3],  [REQ-M-1]
**OTHER**: When the admin creates a task, they will specify the deadline. Based on that, there will be a widget on the home page that displays all upcoming tasks, with relevant information, like this: ![](https://lh3.googleusercontent.com/AQcfQYWE-tTmMN-kCErRfrhdksqCKaRB6rGykuW4F6DzF37R0ZyqFP5ciA5gVKXOLz7A9ruEuhm-c5hnmW3idgn8iqufT92XhnogQRxXE3qLMEu7yg5gd-MphujB1HLEQNtr-Ge8)


#### Assign Task to Project Manager

**ID**: [REQ-PM-2]  
**PR**: High
**TIME**: Low
**DESC**: Given that the admin is creating a task, the admin should be able to assign that task to a staff member who has the role of project manager.
**GOAL**: To ensure that the task is being accounted for by the organization.
**SEQ**: An admin is creating a task, the admin is presented with a list of all the staff who are project managers, the admin can select 1 project manager from the list to assign this task to and the software creates the task while assigning that PM to the task.
**DEP**: [REQ-M-3],  [REQ-M-1] 
**OTHER**: None
  

#### Assign Staff to Task

**ID**: [REQ-PM-3]  
**PR**: High
**TIME**: Low
**DESC**: Given that a task is created, the PM of that task should be able to assign other staff members to that task.
**GOAL**: To ensure that there’s enough staff working on a task for it to be completed before the deadline.
**SEQ**: The PM selects a dropdown of all staff members that aren’t already assigned on at least 2 other tasks, excluding other PMs, the software stores those selected members as part of the task.
**DEP**: [REQ-M-3],  [REQ-M-1]
**OTHER**:
-   The dropdown to select staff members can also have a search field to narrow staff by name or by role (developer, designer, etc.)
-   Members will have roles, e.g.: one staff member will be the project leader and another can be the developer, designer, product manager, etc. the admin will add the PM and then the PM will assign other staff members. Each member in the organization will be given a role at registration (by the admin), so the PM can filter by roles as well.


#### Edit Task

**ID**: [REQ-PM-4]  
**PR**: High
**TIME**: Low
**DESC**: Given that a task is created, the PM of that task should be able to edit its information.
**GOAL**: To keep tasks updated.
**SEQ**: The PM submits the edit form, the task is saved with the new fields.
**DEP**: [REQ-M-3], Member needs to be the PM of that task.
**OTHER**: Amongst other fields, this includes changing the status of the task. The statuses of the task will be selected from a prefilled dropdown list with the following choices:
1.  Todo
2. In progress
3.  Completed
4.  On hold
    

#### Delete Task

**ID**: [REQ-PM-5]  
**PR**: High
**TIME**: Low
**DESC**: Given that a task has been completed, the PM of that task should be able to remove it from the software by deleting it.
**GOAL**: To keep the organization updated.
**SEQ**: The PM clicks the delete button, clicks on the "confirm delete" button, the task is deleted permanently from the system.
**DEP**: [REQ-M-3], Member needs to be the PM of that task.
**OTHER**: Tasks with a status of "In progress" can't be deleted. The PM will need to change its status before deleting. For this scenario, the "on hold" status is the most appropriate.
  
#### Search Task

**ID**: [REQ-PM-6]  
**PR**: High
**TIME**: Low
**DESC**: Given that the admin inputs a search query, the software should be able to return a list of all tasks that contain that search query in their title. The admin should also be able to search by the assigned PM of that task and to filter search results by task status.
**GOAL**: To allow easy access to tasks for the admin.
**SEQ**: The PM enters a search query, the software returns a list of tasks based on the search query and based on the select filtering type (by task title,  PM, deadline, status, start date, etc.)
**DEP**: [REQ-M-3],  [REQ-M-1] 
**OTHER**: To search by PM, there can be a dropdown of all PMs and the admin can select the PM from that list, then the software will return all tasks associated with that PM. To filter by task status, there can be a div containing checkboxes for each status type. Admins should be able to filter by multiple status types and multiple other fields for that matter.


# <a id="pr-list"></a> Prioritized list of requirements
![](https://lh6.googleusercontent.com/gPxmXjVIXOf1l9psgQXfK1IbjJdamCaK0ZN0K8x1O4NHcoptgeIm0AGqqiKSitbwjeo9o2tospWKGMWNAJ1Hjt9o21aO16BR5Ah36rfhPi3beDyEwKlMg_UQUq7EPXuAUqFe7htD)