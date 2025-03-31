# Phase 2: Intermediate TODO List

This phase builds upon the MVP, adding more sophisticated features and improving the user experience.

## Enhanced Task Management (Issues)

-   `[Task-7]` Enhance task creation: Add fields for Description, Due Date, Priority.
-   `[Task-8]` Update database schema (`tasks` table) for new fields.
-   `[Task-9]` Implement UI for editing existing tasks (Title, Description, Due Date, Priority).
-   `[Task-10]` Implement functionality to update tasks in Supabase.
-   `[Task-11]` Implement functionality to delete tasks.
-   `[Task-12]` Implement basic task sorting (e.g., by creation date, due date).
-   `[Task-13]` Implement basic task filtering (e.g., show completed/uncompleted).
-   `[Task-14]` Implement basic search functionality (by title).

## List Management (Issues)

-   `[List-1]` Update database schema: Add `lists` table (id, user_id, name, color, is_default).
-   `[List-2]` Modify `tasks` table schema to include `list_id` (FK).
-   `[List-3]` Implement UI for creating new lists.
-   `[List-4]` Implement functionality to save new lists to Supabase.
-   `[List-5]` Implement UI to display lists (e.g., in a sidebar).
-   `[List-6]` Modify task fetching/creation to be list-specific.
-   `[List-7]` Implement functionality to switch between lists.
-   `[List-8]` Implement functionality to edit list names/colors.
-   `[List-9]` Implement functionality to delete lists (and potentially their tasks).

## User Profile (Issues)

-   `[User-1]` Create basic user profile page.
-   `[User-2]` Implement functionality to display user information (name, email).
-   `[User-3]` Implement functionality to update user name.
-   `[User-4]` Update database schema (`users` table) for name field if not already present.

## UI/UX Improvements (Issues)

-   `[UI-1]` Refine overall layout and styling using TailwindCSS.
-   `[UI-2]` Implement responsive design improvements for mobile/tablet.
-   `[UI-3]` Add loading indicators for asynchronous operations.
-   `[UI-4]` Implement basic user feedback messages (e.g., success/error notifications).

## Authentication Enhancements (Issues)

-   `[Auth-6]` Implement password reset functionality (request and reset).
-   `[Auth-7]` Consider adding Google Social Login (optional for this phase, could be moved to Phase 3).

## Testing &amp; Refinement (Issues)

-   `[Test-1]` Write basic unit tests for key utility functions or components.
-   `[Test-2]` Perform manual testing of all Phase 2 features.