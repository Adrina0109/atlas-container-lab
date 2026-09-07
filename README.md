# Atlas Container Lab

A tiny containerized web service for a DevOps debugging exercise.

> ⚠️ **This repository is intentionally broken.** It contains **three planted faults** that you must find and fix before it will build and run correctly. Do not assume the commands below work as-is — they describe the **expected** behaviour once the repo is fixed.

## What the app does

- A single-file **Node.js (Express)** server.
- Exposes one route: `GET /` → returns `Atlas app is running` with HTTP 200.
- On startup it reads two **required** environment variables:
  - `APP_ENV` — if missing, the app logs `Error: APP_ENV is not set` and exits with code 1.
  - `APP_PORT` — the port the server listens on (not hardcoded).
- On a successful start it logs: `Atlas app listening on port <APP_PORT>`.

## Expected behaviour

- The app listens on port **5000** inside the container.
- Required env vars: `APP_ENV`, `APP_PORT`.
- Target: reachable at **http://localhost:8080** after mapping `-p 8080:5000`.

## Build and run (expected, once fixed)

```bash
docker build -t atlas-app .
docker run -d --name atlas -p 8080:5000 -e APP_ENV=production -e APP_PORT=5000 atlas-app
curl http://localhost:8080   # -> Atlas app is running
docker logs atlas            # -> Atlas app listening on port 5000
```

## Environment variables

See [`.env.example`](.env.example) for the required keys. Provide values **at run time** with `-e` flags — do not bake secrets into the image.

| Variable   | Example      | Purpose                        |
|------------|--------------|--------------------------------|
| `APP_ENV`  | `production` | Application environment        |
| `APP_PORT` | `5000`       | Port the server listens on     |


## Your task

Find and fix the **three planted faults** so the build-and-run sequence above succeeds and the app answers at `http://localhost:8080`.

## changees made
