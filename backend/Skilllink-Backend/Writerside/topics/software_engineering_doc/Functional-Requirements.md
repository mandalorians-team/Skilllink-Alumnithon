# 📋 Technical Requirements – SkillLink

This document presents a structured summary of all **functional** and **non-functional** requirements for the SkillLink platform. Requirements are categorized and labeled as follows:

- **RF**: Functional Requirement

- **RNF**: Non-Functional Requirement


---

## ✅ Functional Requirements

|Requirement|Description|
|---|---|
|RF1|The system shall allow users to register with an email and password.|
|RF2|The system shall allow users to log in and receive a JWT token.|
|RF3|Users shall be assigned roles: Admin, Mentor, or Learner.|
|RF4|Admins shall manage (view, edit, delete) user accounts.|
|RF5|Users shall be able to update their profile information and skills.|
|RF6|Users shall be able to search mentors by skill, location, or interest.|
|RF7|Learners shall be able to request a mentorship session.|
|RF8|Mentors shall accept or reject mentorship requests.|
|RF9|The system shall provide a list of coding challenges.|
|RF10|Learners shall be able to open a challenge, write and submit code.|
|RF11|Mentors shall be able to evaluate submitted challenges with feedback.|
|RF12|Users shall be able to communicate in real-time via WebSocket chat.|
|RF13|Users shall receive notifications of system events in real-time.|
|RF14|Admins/Mentors shall create and manage course entries.|
|RF15|Learners shall be able to view and track course certifications.|

---

## 📊 Non-Functional Requirements

|Requirement|Description|
|---|---|
|RNF1|Authentication must use JWT for secure session management.|
|RNF2|All passwords must be encrypted using BCrypt.|
|RNF3|API endpoints shall respond within 2 seconds under normal load.|
|RNF4|The system shall support at least 50 concurrent users.|
|RNF5|The frontend application shall be responsive and accessible on mobile.|
|RNF6|The system shall implement CORS and CSRF protection as needed.|
|RNF7|Database queries shall be optimized to reduce latency under 300ms.|
|RNF8|Swagger documentation shall be auto-generated and available at `/swagger-ui.html`.|
|RNF9|CI/CD pipelines must run on every pull request (tests + lint + build).|
|RNF10|The backend must include Flyway migrations to manage database schema.|

---

_Last updated: June 2025_

Author: Ignacio – Backend Tech Lead  
Project: SkillLink (Alumnithon 2025)e...