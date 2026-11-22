# TaskForge — Engineering Instructions

## Project
TaskForge is a distributed job scheduling and workflow engine that allows external applications to submit, execute, retry and monitor background jobs.

## Technology Stack
- Node.js and Express
- JavaScript (ES Modules)
- PostgreSQL and Prisma
- Redis and BullMQ
- React and Vite
- Tailwind CSS
- Socket.io
- Jest and Supertest
- Docker

## Engineering Rules
1. Implement only requested functionality.
2. Never generate the entire application at once.
3. Inspect existing code before modifying it.
4. Avoid unnecessary files, dependencies and abstractions.
5. Prefer simple, readable and maintainable code.
6. Do not duplicate existing logic.
7. Keep API, queue, worker and frontend responsibilities separate.
8. Handle relevant errors and edge cases.
9. Write tests for important functionality.
10. Never claim something works without verifying it.
11. Never replace working code unnecessarily.
12. Explain important architectural decisions.

## Workflow
For every feature:
1. Inspect relevant files.
2. Propose a short implementation plan.
3. Implement only the approved feature.
4. Run relevant tests.
5. Review the changes.
6. Summarize files modified and test results.

Do not proceed with large architectural changes without approval.