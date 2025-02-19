## ------------------------------------------------------------------------------

How long did you spend on the coding test?
I spent roughly 4 hours on this coding test. I focused on building a solid foundation with clear components, ensuring the task management application was both functional and easy to navigate.

## ------------------------------------------------------------------------------

What was the most useful feature that was added to the latest version of your chosen language?
For me, one of the most valuable additions in the latest version of JavaScript is the Optional Chaining operator (?.). This operator helps me safely access nested object properties without having to write extra checks for null or undefined. Here’s an example of how

## I used it in my code:

const taskTitle = task?.title ?? 'Untitled Task';

This snippet ensures that if task or task.title isn’t available, the application gracefully defaults to 'Untitled Task', reducing potential runtime errors.

## ------------------------------------------------------------------------------

How would you track down a performance issue in production? Have you ever had to do this?
In production, I typically start by examining logs and performance metrics using tools like New Relic or Datadog. I then use browser developer tools to profile the application and identify any bottlenecks, such as long-running scripts or unnecessary re-renders. I have dealt with performance issues before, and in one instance, optimizing a React component’s rendering cycle made a significant difference.

## ------------------------------------------------------------------------------

If you had more time, what additional features or improvements would you consider adding to the task management application?
If I had more time, I’d love to add user authentication to allow task syncing across devices. I’d also consider implementing notifications or reminders for due and overdue tasks, along with improved UI elements like drag-and-drop functionality for reordering tasks. Enhancements like offline support and integration with calendar services would also be exciting improvements to explore.
