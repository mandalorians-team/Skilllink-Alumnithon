
# Software Requirements Specification (SRS)

## Project: SkillLink – Collaborative E-Learning Platform

## Standard: IEEE 830

---

## 1. Introduction

### 1.1 Purpose

The purpose of this document is to specify the software requirements for **SkillLink**, a full-stack web platform that enables learners to connect with mentors, solve challenges, receive evaluations, and interact in real time. This specification will serve as a guideline for the development, validation, and maintenance of the platform.

### 1.2 Scope

SkillLink is a collaborative e-learning system built to connect users in a mentorship-based environment. It allows learners to:

- Register and manage their profiles

- Search for mentors and collaborators

- Solve interactive challenges via embedded code editors

- Receive evaluations and feedback

- Communicate through a real-time chat

- Receive system notifications

- Be part of structured learning paths with courses and certifications


The system includes:

- A web frontend (React + TypeScript + TailwindCSS)

- A backend API (Spring Boot, PostgreSQL, JWT, WebSockets)

- Admin dashboard and moderation tools

- API documentation (Swagger/OpenAPI)


### 1.3 Definitions, Acronyms and Abbreviations

- **JWT** – JSON Web Token

- **API** – Application Programming Interface

- **UI** – User Interface

- **CRUD** – Create, Read, Update, Delete

- **CI/CD** – Continuous Integration / Continuous Deployment

- **IDE** – Integrated Development Environment

- **SRS** – Software Requirements Specification


### 1.4 References

- IEEE 830-1998: Recommended Practice for Software Requirements Specifications

- Spring Boot Docs: [https://spring.io/projects/spring-boot](https://spring.io/projects/spring-boot)

- React Docs: [https://react.dev](https://react.dev/)


### 1.5 Overview

This document describes the functional and non-functional requirements of SkillLink, the system architecture, interface definitions, and use cases. It is structured according to IEEE 830.

---

## 2. Overall Description

### 2.1 Product Perspective

SkillLink is an original product developed for the Alumnithon 2025. It consists of a full-stack application with modular architecture and integrated services for authentication, real-time communication, code execution, and mentor-based interactions.

### 2.2 Product Functions

- User registration and login with role-based access (admin, mentor, learner)

- Profile creation and skill tagging

- Mentor and collaborator search engine

- Mentorship request and approval workflow

- Challenge system with live code editor

- Challenge evaluation by mentors

- Real-time chat via WebSocket

- Notifications and alert system

- API documentation for all endpoints


### 2.3 User Classes and Characteristics

|Role|Description|
|---|---|
|Admin|Manages system content and users|
|Mentor|Creates and evaluates challenges, accepts mentees|
|Learner|Takes challenges, receives mentorship and feedback|

### 2.4 Operating Environment

- Web application accessed via modern browsers

- Backend hosted via local server or cloud (Docker compatible)

- Database: PostgreSQL


### 2.5 Design and Implementation Constraints

- Java 17+

- React 18+

- TailwindCSS 3+

- PostgreSQL 14+

- Use of open-source libraries and Spring Boot starters only


### 2.6 User Documentation

- README for backend and frontend

- Swagger/OpenAPI documentation for APIs

- Usage guide embedded in UI


### 2.7 Assumptions and Dependencies

- Users will access the system from desktop or mobile browsers

- Initial MVP will support monolithic architecture (no microservices)


---

## 3. Specific Requirements

### 3.1 Functional Requirements

#### Authentication & Authorization

- FR1. Users must be able to register and login

- FR2. The system must return a JWT upon successful login

- FR3. Different roles (admin, mentor, learner) must have access to different endpoints


#### User Management

- FR4. Users must be able to edit their profiles and skills

- FR5. Admins must be able to view and manage all users


#### Mentorship System

- FR6. Learners must be able to search for mentors

- FR7. Learners can send mentorship requests

- FR8. Mentors can accept or reject mentorships


#### Challenges

- FR9. Users must be able to list and view challenges

- FR10. Learners must be able to write and submit code

- FR11. Mentors must be able to evaluate challenge submissions


#### Messaging & Notifications

- FR12. Users must be able to send and receive chat messages

- FR13. Users must receive real-time notifications of updates


#### Courses & Certifications

- FR14. Admins and mentors can create course entries

- FR15. Users can view and track certifications


### 3.2 Non-Functional Requirements

- NFR1. The system shall use JWT for secure authentication

- NFR2. Passwords shall be stored encrypted using BCrypt

- NFR3. The system shall respond to requests within 2 seconds

- NFR4. The application shall support at least 50 concurrent users

- NFR5. The frontend shall be responsive and mobile-friendly


### 3.3 External Interface Requirements

#### User Interfaces

- Login/Register screens

- Profile dashboard

- Challenge view/editor

- Mentorship management UI

- Admin dashboard


#### Hardware Interfaces

- None (web-based)


#### Software Interfaces

- REST API endpoints documented in Swagger

- PostgreSQL database


#### Communication Interfaces

- WebSockets for real-time chat and notifications


---

## 4. Appendices

### A. Sample Test Accounts

```
Admin:
email: admin@test.com
password: Admin123

Mentor:
email: mentor@test.com
password: Mentor123

Learner:
email: user@test.com
password: User123
```

### B. Future Features (Out of Scope for MVP)

- Gamification (badges, XP)

- Video mentor sessions (WebRTC)

- AI-assisted feedback on challenges
    