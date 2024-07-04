# ft_trans

> Ping? Pong! Now with a side of `Uncaught TypeError: this.document is undefined`

## Project structure

- `bin/` *external programs*
  - `cli/`
    - a CLI to interact with the REST API and play games
- `scripts/` *somewhat useful random stuff :+1:*
- `services/` *what makes this shit run*
  - `backend/`
    - The django backend, organized in a micro-services architecture 
  - `frontend/`
    - HTML/JavaScript front-end, to be served by the API
  - `nginx/`
    - HTTP Server configuration and setup files
  - `docker-compose.yml`

## Chosen modules

The transcendance project is split into multiple Minor and Major modules. Here are the one we're doing:

<!-- MODULES_START -->

- **Web**
  - [x] (Major) Use a Framework as backend
  - [x] (Minor) Use a front-end framework or toolkit
  - [x] (Minor) Use a database for the backend
  - [ ] (Major) Store the score of a tournament in a Blockchain

- **User Management**
  - [x] (Major) Standard user management, authentication, users across tournaments
  - [x] (Major) Implementing remote authentication (OAuth2)

- **Gameplay and User Experience**
  - [ ] (Major) Remote players
  - [ ] (Major) Multiplayer (> 2 players)
  - [ ] (Major) Add another Game (w/ User History & Matchmaking)
  - [ ] (Minor) Game customization options
  - [ ] (Major) Live chat

- **AI / Algorithm**
  - [ ] (Major) Introduce an AI opponent
  - [ ] (Minor) User and Game stats dashboard

- **Cybersecurity**
  - [x] (Major) Implement WAF/ModSecurity w/ Hardened Configuration and HashiCorp Vault for Secrets Management (@xtrm-en)
  - [ ] (Minor) GDPR Compliance options with User Anonymization, local data management, and account deletion
  - [x] (Major) Implement Two-Factor Authentication (2FA) and JWT

- **Devops**
  - [ ] (Major) Infrastructure setup for log management
  - [ ] (Minor) Monitoring system
  - [x] (Major) Designing the Backend as Microservices (@xtrm-en)

- **Graphics**
  - [ ] (Major) Use of advanced 3D techniques.

- **Accessibility**
  - [ ] (Minor) Support on all devices
  - [ ] (Minor) Expanding Browser compatibility
  - [ ] (Minor) Multiple language support
  - [ ] (Minor) Add accessibility for visually impaired users
  - [x] (Minor) Server-Side Rendering (SSR) integration

- **Server-Side Pong**
  - [ ] (Major) Replace basic pong with server-side pong and implementing an API
  - [ ] (Major) Enabling pong gameplay via CLI against web users with API integration

<!-- MODULES_END -->

## License

This project is released under the [ISC License](./LICENSE).
