# EduVault V1 — School Digital Library System
### A Centralized Platform for Managing and Accessing Educational Resources

**Project Type:** Full-Stack Web Development  
**Development Approach:** AI-Assisted Development  
**Backend:** Python, Flask  
**Database:** SQLite  
**File Storage:** Gmail (SMTP and IMAP)  
**Frontend:** HTML, CSS, JavaScript

---

## 1. Project Overview

EduVault V1 is a web-based digital library application designed to provide a centralized platform for schools to organize and access educational materials.

The idea originated from observing how faculty members frequently shared notes and study materials through WhatsApp groups. As new materials were shared repeatedly, students had to search through previous messages to find the required notes.

There was no centralized application where students could access all their learning materials in one place.

Inspired by a school environment, I developed the first version of EduVault as a prototype to simplify how faculty members share educational resources and how students access them.

The initial version focused on establishing the core functionality of a digital library using Gmail as the file storage platform.

## 2. Problem Identification

The primary problem was the repeated sharing of educational materials through WhatsApp groups.

Faculty members frequently sent notes, presentations, and other study resources to student groups. This created several inconveniences:

- Students had to scroll through WhatsApp conversations to find older notes.
- Previously shared materials could become difficult to locate.
- Different subjects required students to search through multiple conversations.
- There was no dedicated location for organizing all educational resources.
- Faculty members had to repeatedly share materials whenever students requested them.

The objective was to create a centralized digital library where faculty members could upload resources once and students could access them whenever required.

## 3. Requirement Planning and Feature Design

Similar to my approach with PrintDrop, I started by identifying the problem and defining how the application should solve it.

Before generating any code, I documented the application's requirements, features, expected functionality, and user interactions in a text file.

I planned the application around two primary user groups:

**Faculty:** Responsible for uploading and managing educational materials.

**Students:** Responsible for browsing and accessing the available learning resources.

For this initial version, I used a school as the reference environment, with predefined classes and subjects to organize the library.

I then provided the documented requirements to AI to generate the application's implementation.

## 4. Solution and Key Features

### Student Interface

**Simple Access**

Students can access the library without creating an account or logging in.

**Class and Subject Navigation**

Students can select their class and subject to find the relevant educational materials.

**Centralized Resource Access**

All uploaded materials are organized within the selected class and subject rather than being scattered across messaging conversations.

**In-Browser Document Viewer**

Students can view supported educational documents directly inside the application without needing to download them first.

**Search Functionality**

Students can search for files by name within a selected subject.

### Faculty Interface

**Faculty Registration and Login**

Faculty members can create accounts and access the application through a session-based authentication system.

**Document Upload**

Faculty members can upload educational materials in supported formats, including PDF, DOC, DOCX, PPT, PPTX, JPG, and PNG.

**Faculty Dashboard**

A dedicated dashboard allows faculty members to upload, browse, and manage their own uploaded materials.

**File Management**

Faculty members can view and delete their uploaded resources.

**Upload Statistics**

The dashboard provides information about their uploaded materials.

## 5. Technical Implementation

One of the interesting aspects of EduVault V1 was the decision to use Gmail as the initial file storage solution instead of implementing a dedicated cloud storage service.

### Backend

Python and Flask were used to handle application logic, authentication, file uploads, and communication between the frontend and storage systems.

### Database Management

SQLite was used to maintain structured information about faculty accounts and uploaded documents.

The database stores file metadata such as:

- File name and title.
- Class and subject.
- File size and extension.
- Faculty member who uploaded the file.
- Upload date.
- Gmail message identifier.

The actual document files are stored separately in Gmail.

### Gmail-Based File Storage

I used Gmail's SMTP and IMAP protocols to implement the initial storage mechanism.

The workflow operates as follows:

1. Faculty uploads a document through the application.
2. The backend processes the uploaded file.
3. The file is sent as an email attachment to a dedicated Gmail account using SMTP.
4. The corresponding Gmail Message-ID is retrieved through IMAP.
5. The Message-ID and document metadata are stored in SQLite.
6. When a student opens a document, the application retrieves the attachment from Gmail through IMAP.
7. The document is streamed to the browser for viewing.

This approach allowed the prototype to store actual document files in Gmail while keeping their searchable metadata organized in a relational database.

## 6. AI-Assisted Development Process

The development approach followed the same requirement-first methodology used in PrintDrop.

**Step 1 — Problem Identification**

I identified the inconvenience caused by repeatedly sharing educational notes through WhatsApp groups.

**Step 2 — Requirement Documentation**

I created a detailed text document describing the application's purpose, required features, functionality, and expected outputs.

**Step 3 — AI-Assisted Implementation**

I provided the requirements document to AI and used it to generate the application code.

**Step 4 — Application Testing**

I ran the generated application and checked whether the implemented features behaved according to the original requirements.

**Step 5 — Logical Debugging**

Whenever an issue occurred, I first tried to understand the problem logically by comparing the expected behaviour with the actual output.

After identifying the issue, I explained it to AI and requested the necessary correction.

**Step 6 — Refinement**

I repeated the testing and correction process until the implemented functionality matched the intended requirements.

## 7. Limitations Identified in Version 1

EduVault V1 was developed as an initial prototype to establish the core concept of a centralized educational library.

During the design of this version, certain limitations were identified:

- Classes and subjects were predefined rather than dynamically configurable.
- There was no dedicated administrator panel to manage faculty accounts and library structure.
- The application was designed around a single school's structure rather than supporting multiple schools.

These limitations provided a foundation for identifying improvements that could be introduced in subsequent versions.

## 8. Key Learning Outcomes

**Problem Identification:** Learned how to identify communication and information-management problems in an educational environment and translate them into application requirements.

**Requirement Engineering:** Gained experience documenting features, defining expected behaviour, and planning application workflows before implementation.

**Backend Integration:** Gained exposure to connecting a Flask application with external email services through SMTP and IMAP.

**Database Management:** Learned how to separate actual file storage from structured metadata management using Gmail and SQLite.

**Logical Problem-Solving:** Practiced identifying application issues based on expected functionality before requesting code-level corrections from AI.

**AI-Assisted Development:** Improved my ability to translate a documented idea into a working application through requirement planning, AI-generated implementation, testing, and refinement.

## 9. Conclusion

EduVault V1 was developed to address the inconvenience of repeatedly sharing educational materials through messaging applications.

By creating a centralized digital library, the project introduced a more organized approach to uploading, categorizing, searching, and accessing educational resources.

The project also provided an opportunity to experiment with an alternative file storage approach by integrating Gmail with a Flask backend and SQLite database.

Most importantly, Version 1 helped establish the core concept and identify limitations that could guide the development of a more flexible and scalable system in future iterations.

---

**Project Repository:** [GitHub - EduVault V1](https://github.com/Adeen0504/EduVault-School-Digital-Library-System-v1-)

**Technologies:** Python · Flask · SQLite · HTML · CSS · JavaScript · Gmail SMTP/IMAP