# Phase 1: MVP (Minimum Viable Product) TODO List

This phase focuses on delivering the core, essential functionality of the TODO list application.

## Setup &amp; Core Infrastructure (Issues)

- [x] `[Setup-1]` Initialize Next.js project with TypeScript and TailwindCSS.
-   `[Setup-2]` Set up Supabase project (Database, Auth).
- [x] `[Setup-3]` Configure Vercel deployment for the project.
-   `[Setup-4]` Define basic database schema in Supabase (users, tasks tables - minimal fields: user id, email, password hash; task id, user id, title, status).
- [x] `[Setup-5]` Implement basic ESLint configuration.

## Authentication (Issues)

-   `[Auth-1]` Implement user registration page/form (Email/Password).
-   `[Auth-2]` Implement user login page/form (Email/Password).
-   `[Auth-3]` Integrate Supabase Auth for registration and login.
-   `[Auth-4]` Implement basic session management (protected routes).
-   `[Auth-5]` Implement logout functionality.

## Basic Task Management (Issues)

-   `[Task-1]` Create UI for displaying a list of tasks.
-   `[Task-2]` Implement functionality to fetch tasks for the logged-in user from Supabase.
-   `[Task-3]` Create UI for adding a new task (Title only).
-   `[Task-4]` Implement functionality to save a new task to Supabase.
-   `[Task-5]` Implement functionality to mark a task as completed/uncompleted (status toggle).
-   `[Task-6]` Update task status in Supabase.

## Deployment (Issues)

-   `[Deploy-1]` Perform initial deployment of the MVP to Vercel.
-   `[Deploy-2]` Verify core functionality (register, login, add task, toggle status) on the deployed version.