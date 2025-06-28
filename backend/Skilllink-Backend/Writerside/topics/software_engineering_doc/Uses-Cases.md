# Use Cases – SkillLink Platform

---

## 🟦 Use Case: CU01 – Register

| Element          | Description                                                              |
|------------------|--------------------------------------------------------------------------|
| **Name**         | Register                                                                 |
| **Actor**        | Learner                                                                  |
| **Precondition** | User is not registered                                                   |
| **Main Flow**    | 1. Access registration form<br>2. Fill in details<br>3. Submit form      |
| **Alt Flow**     | Email already in use<br>Validation errors                                |
| **Postcondition**| User account created and redirected to dashboard                         |

---

## 🟦 Use Case: CU02 – Login

| Element          | Description                                                              |
|------------------|--------------------------------------------------------------------------|
| **Name**         | Login                                                                    |
| **Actor**        | All Users (Learner, Mentor, Admin)                                       |
| **Precondition** | Valid account exists                                                     |
| **Main Flow**    | 1. Enter email and password<br>2. Validate<br>3. Receive JWT             |
| **Alt Flow**     | Invalid credentials                                                      |
| **Postcondition**| Session started and user redirected to dashboard                         |

---

## 🟦 Use Case: CU03 – View/Edit Profile

| Element          | Description                                                              |
|------------------|--------------------------------------------------------------------------|
| **Name**         | View and Edit Profile                                                    |
| **Actor**        | Learner, Mentor                                                          |
| **Precondition** | User is authenticated                                                    |
| **Main Flow**    | 1. Access profile<br>2. Edit bio, skills, socials<br>3. Save changes     |
| **Alt Flow**     | Empty required fields<br>Invalid input                                   |
| **Postcondition**| Updated profile saved in database                                        |

---

## 🟦 Use Case: CU04 – Search for Mentors

| Element          | Description                                                              |
|------------------|--------------------------------------------------------------------------|
| **Name**         | Search Mentors or Collaborators                                          |
| **Actor**        | Learner                                                                  |
| **Precondition** | User is authenticated                                                    |
| **Main Flow**    | 1. Open search<br>2. Apply filters<br>3. View results                    |
| **Alt Flow**     | No results found                                                         |
| **Postcondition**| Results shown and mentorship can be requested                            |

---

## 🟦 Use Case: CU05 – Request Mentorship

| Element          | Description                                                              |
|------------------|--------------------------------------------------------------------------|
| **Name**         | Request Mentorship                                                       |
| **Actor**        | Learner                                                                  |
| **Precondition** | User is authenticated                                                    |
| **Main Flow**    | 1. Open mentor profile<br>2. Click “Request Mentorship”<br>3. Confirm    |
| **Alt Flow**     | Request already exists                                                   |
| **Postcondition**| Mentorship request saved                                                 |

## 🟦 Use Case: CU06 – Participate in Challenge

| Element          | Description                                                              |
|------------------|--------------------------------------------------------------------------|
| **Name**         | Participate in Challenge                                                 |
| **Actor**        | Learner                                                                  |
| **Precondition** | User is authenticated and challenge is available                         |
| **Main Flow**    | 1. Open challenge<br>2. Read description<br>3. Write code<br>4. Submit    |
| **Alt Flow**     | Code has syntax errors<br>Empty submission                               |
| **Postcondition**| Code saved for mentor evaluation                                         |

---

## 🟦 Use Case: CU07 – Chat in Real-Time

| Element          | Description                                                              |
|------------------|--------------------------------------------------------------------------|
| **Name**         | Real-Time Chat                                                           |
| **Actor**        | All Users                                                                |
| **Precondition** | User is authenticated                                                    |
| **Main Flow**    | 1. Access chat<br>2. Choose contact<br>3. Type and send message          |
| **Alt Flow**     | Contact is offline<br>Connection dropped                                 |
| **Postcondition**| Message delivered or queued                                              |

---

## 🟦 Use Case: CU08 – Receive Notifications

| Element          | Description                                                              |
|------------------|--------------------------------------------------------------------------|
| **Name**         | Receive Notifications                                                    |
| **Actor**        | All Users                                                                |
| **Precondition** | Notification system active and user authenticated                        |
| **Main Flow**    | 1. Trigger event (e.g. new message)<br>2. System pushes notification      |
| **Alt Flow**     | Connection issues<br>WebSocket fails                                     |
| **Postcondition**| User receives notification in UI                                         |

---

## 🟦 Use Case: CU09 – View Progress and Evaluations

| Element          | Description                                                              |
|------------------|--------------------------------------------------------------------------|
| **Name**         | View Progress and Evaluations                                            |
| **Actor**        | Learner                                                                  |
| **Precondition** | Authenticated with at least one challenge submitted                      |
| **Main Flow**    | 1. Open “My Progress” page<br>2. Review metrics and mentor feedback      |
| **Postcondition**| Learner reviews performance and evaluations                              |

---

## 🟦 Use Case: CU10 – Accept/Reject Mentorship Requests

| Element          | Description                                                              |
|------------------|--------------------------------------------------------------------------|
| **Name**         | Manage Mentorship Requests                                               |
| **Actor**        | Mentor                                                                   |
| **Precondition** | Mentor is authenticated and has pending requests                         |
| **Main Flow**    | 1. View requests list<br>2. Accept or reject each                        |
| **Postcondition**| Request status updated in database                                       |

---

## 🟦 Use Case: CU11 – Evaluate Challenge Submissions

| Element          | Description                                                              |
|------------------|--------------------------------------------------------------------------|
| **Name**         | Evaluate Challenges                                                      |
| **Actor**        | Mentor                                                                   |
| **Precondition** | Challenge submitted by learner                                           |
| **Main Flow**    | 1. View submitted solution<br>2. Write score and feedback<br>3. Submit   |
| **Postcondition**| Evaluation recorded                                                      |

---

## 🟦 Use Case: CU12 – Create Challenges

| Element          | Description                                                              |
|------------------|--------------------------------------------------------------------------|
| **Name**         | Create Challenge                                                         |
| **Actor**        | Mentor                                                                   |
| **Precondition** | Authenticated as mentor                                                  |
| **Main Flow**    | 1. Open “Create Challenge”<br>2. Fill in fields<br>3. Publish            |
| **Postcondition**| Challenge visible in catalog for learners                                |
## 🟦 Use Case: CU13 – View User List (Admin)

| Element          | Description                                                              |
|------------------|--------------------------------------------------------------------------|
| **Name**         | View User List                                                           |
| **Actor**        | Admin                                                                    |
| **Precondition** | Authenticated as admin                                                   |
| **Main Flow**    | 1. Open admin dashboard<br>2. Apply filters or search<br>3. Browse list  |
| **Alt Flow**     | No users found<br>Access denied                                          |
| **Postcondition**| Admin sees the current list of users                                     |

---

## 🟦 Use Case: CU14 – View System Statistics

| Element          | Description                                                              |
|------------------|--------------------------------------------------------------------------|
| **Name**         | View System Statistics                                                   |
| **Actor**        | Admin                                                                    |
| **Precondition** | Admin authenticated                                                      |
| **Main Flow**    | 1. Open metrics dashboard<br>2. View charts (activity, usage, etc.)      |
| **Postcondition**| Admin analyzes system performance                                        |

---

## 🟦 Use Case: CU15 – Remove Inappropriate Content

| Element          | Description                                                              |
|------------------|--------------------------------------------------------------------------|
| **Name**         | Remove Offensive/Invalid Content                                         |
| **Actor**        | Admin                                                                    |
| **Precondition** | Content exists and is flagged or reported                                |
| **Main Flow**    | 1. Open moderation panel<br>2. Select content<br>3. Delete or disable    |
| **Postcondition**| Content is no longer visible to users                                    |

---

## 🟦 Use Case: CU16 – Execute Code in Challenge

| Element          | Description                                                              |
|------------------|--------------------------------------------------------------------------|
| **Name**         | Execute Code in Challenge                                                |
| **Actor**        | Learner / System                                                         |
| **Precondition** | Learner is authenticated and code editor is available                    |
| **Main Flow**    | 1. Click “Run”<br>2. Code is sent to backend<br>3. Output is processed   |
| **Alt Flow**     | Syntax error<br>Runtime exception<br>Execution timeout                   |
| **Postcondition**| Execution result returned and shown to user                              |

---

## 🟦 Use Case: CU17 – Show Execution Result

| Element          | Description                                                              |
|------------------|--------------------------------------------------------------------------|
| **Name**         | Show Execution Result                                                    |
| **Actor**        | System                                                                   |
| **Precondition** | Code execution is completed successfully or with error                   |
| **Main Flow**    | 1. Receive result from backend<br>2. Display in code output console      |
| **Postcondition**| User sees output or error feedback                                       |
