# OpenShelf — Digital Textbook Library
### A Web-Based Platform for Discovering, Reading, and Organizing Textbooks

**Project Type:** Full-Stack Web Development  
**Development Approach:** Initial Self-Development Followed by AI-Assisted Development  
**Backend:** Python, Flask  
**Database:** SQLite, Flask-SQLAlchemy  
**Frontend:** HTML, CSS, JavaScript

---

## 1. Project Overview

OpenShelf is a web-based digital textbook library designed to provide users with a centralized platform to discover, access, and organize books.

The original idea was to develop an application where users could access textbooks digitally instead of depending entirely on physical copies.

The project began as an independent development attempt using Python and Flask. I initially implemented a significant portion of the application myself, but as the requirements and backend functionality became more complex, I realized that my technical knowledge was not sufficient to complete the entire application independently.

I eventually used AI to rewrite the application, incorporating the original concept into a more complete implementation.

Interestingly, the experience and concept developed during OpenShelf later became the foundation for another project, EduVault.

## 2. Problem Identification

The initial idea was based on making educational textbooks more accessible through a digital platform.

Students often depend on physical textbooks or search across different websites to find books and learning resources.

I wanted to explore whether a centralized web application could make this process more convenient by allowing users to:

- Browse available books.
- Search for books by title or author.
- Read available books directly through the application.
- Save books for future access.
- Maintain a history of previously accessed books.

The objective was to create a simple digital library that combined book discovery, reading, and personal organization.

## 3. Initial Development Approach

Unlike my later projects, OpenShelf initially started as an independent coding attempt.

I began developing the application using Flask and implemented approximately 60% of the initial code myself.

During this stage, I worked on understanding the application structure and implementing its functionality.

However, as the project progressed, the complexity of the application increased. My understanding of Flask, backend development, and the overall implementation was not sufficient to complete all the remaining requirements.

Recognizing this limitation, I decided to change my development approach.

Instead of continuing with an implementation I could not confidently complete, I used AI to rewrite the application while retaining the original concept.

This transition allowed the project to move beyond my initial implementation and become a more complete application.

## 4. Solution and Key Features

The resulting application provides separate experiences for visitors, registered users, and administrators.

### Book Discovery

**Book Catalogue**

Users can browse available books through a centralized catalogue.

**Search Functionality**

Users can search for books using their titles or author names.

**Direct Book Access**

Available books can be opened and read through the application using their linked PDF resources.

### User Features

**User Registration and Login**

Users can create accounts and authenticate themselves using their credentials.

**Personal Profile**

Registered users can access their account information and personal library activity.

**Saved Books**

Users can save books to their personal collection for easier access later.

**Reading History**

The application maintains a record of books users have accessed, allowing them to revisit previously read materials.

**Session Management**

Authenticated users can access account-specific features through session-based login functionality.

### Administrative Features

**Admin Dashboard**

A dedicated administrative interface allows the administrator to manage the book catalogue.

**Book Management**

The administrator can add new books with details such as title, author, image, and reference link.

**Catalogue Management**

Existing books can be removed from the library through the administrative interface.

## 5. Technical Implementation

### Backend Development

Python and Flask were used to handle the application's backend functionality, including:

- User registration and authentication.
- Book catalogue management.
- Search operations.
- Reading history.
- Saved book management.
- Administrative operations.

### Database Management

Flask-SQLAlchemy was used to interact with SQLite databases.

The application uses three separate database files for organizing different types of information:

**Authentication Database**

Stores user account information, including usernames, password hashes, and profile details.

**Personal Data Database**

Stores user-specific information such as saved books and reading history.

**Global Book Database**

Stores the central book catalogue, including book titles, author names, images, and PDF reference links.

Separating these databases helps organize application information according to its purpose.

### PDF Integration

The application retrieves book PDFs through their external reference links.

A dedicated backend route uses Python's Requests library to retrieve PDF content and stream it through the Flask application, allowing supported documents to be displayed directly in the browser.

## 6. AI-Assisted Development and Problem-Solving

The development of OpenShelf was an important transition in how I approached application development.

My process involved two distinct stages.

### Stage 1: Independent Development

I initially started writing the application using Flask and implemented approximately 60% of the initial code independently.

This gave me practical exposure to building a web application and understanding how its different components interact.

However, I eventually reached a point where my knowledge was insufficient to implement the remaining functionality confidently.

### Stage 2: AI-Assisted Rewrite

After recognizing the limitations of my initial implementation, I used AI to rewrite the application.

The objective was to retain the original concept while producing a more complete implementation.

I then ran the application, reviewed its output, tested the implemented functionality, and used AI assistance to address issues during development.

This experience helped me understand the importance of recognizing technical limitations and choosing an appropriate approach to move a project forward.

## 7. Connection to EduVault

One of the most important outcomes of OpenShelf was the idea that eventually inspired EduVault.

While OpenShelf focused on creating a digital textbook library, the broader concept of centralizing educational resources led me to think about a different problem.

I later identified how faculty members repeatedly shared educational notes through WhatsApp groups, making it difficult for students to access previously shared materials.

This led to the development of EduVault, where the focus shifted from discovering and organizing textbooks to providing a centralized platform for faculty-uploaded educational resources.

In this way, OpenShelf became the starting point for an idea that evolved into another application.

## 8. Key Learning Outcomes

**Independent Development Experience**

Gained practical experience attempting to build a Flask application independently and understanding the challenges involved in developing a complete application.

**Recognizing Technical Limitations**

Learned to identify when my existing knowledge was insufficient to implement a feature and when I needed a different approach.

**Backend Development Exposure**

Gained experience with Flask routes, authentication, database operations, and external PDF integration.

**Database Organization**

Learned how to organize authentication information, personal user data, and global application data separately.

**AI-Assisted Development**

Understood how AI could help transform an incomplete implementation into a more complete application while allowing me to focus on reviewing and testing its functionality.

**Idea Evolution**

Learned how an initial project concept can lead to identifying new problems and developing different solutions.

## 9. Conclusion

OpenShelf was more than an attempt to build a digital textbook library. It was an important learning experience in my transition from independent coding to AI-assisted application development.

The project began with an independently written Flask implementation, but as its complexity increased, I recognized the limitations of my technical knowledge and used AI to rewrite the application.

Beyond its functionality, OpenShelf played an important role in shaping another project, EduVault, by introducing the broader idea of centralized educational resource management.

It represents an important stage in my development journey, where I learned to approach application development through experimentation, recognizing limitations, and evolving ideas into more complete solutions.

---

**Project Repository:** [GitHub - OpenShelf](https://github.com/Adeen0504/OpenShelf)

**Technologies:** Python · Flask · Flask-SQLAlchemy · SQLite · HTML · CSS · JavaScript