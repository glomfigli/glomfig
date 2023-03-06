# Installation

## Development

This repository contains two distinct modules: client and server.
Each are separate from one another, using their own npm scripts.
To manually launch the project, go to both folders and type `npm install`.
Before statring the project, provide a `.env` containingthe connection string to a running MongoDB instance.
Now, running `npm start` within the client directory will now launch the development server on port 3000.
Similarly, within the server directory, executing `npm run watch` starts the backend development server on port 8080.
Because both environments are live-reloaded, there is no need to restart the server after making changes to the source code.

In addition to the manual setup, Docker may be used.
This is the most straightforward choice.
With one command, a Docker Compose configuration orchestrates the client, server, and a local MongoDB instance.
Run `docker compose up` to start the project in development mode.
The client will serve on port 3000, while the server will serve on port 8080.
No packages need to be installed with npm. However, it is still wise
to issue the installation commands once. This ensures that you can use linter successfully.
