[![Mermaid Live Editor](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/detailed/2ckppp/master&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/2ckppp/runs) [![Join our Slack!](https://img.shields.io/static/v1?message=join%20chat&color=9cf&logo=slack&label=slack)](https://join.slack.com/t/mermaid-talk/shared_invite/enQtNzc4NDIyNzk4OTAyLWVhYjQxOTI2OTg4YmE1ZmJkY2Y4MTU3ODliYmIwOTY3NDJlYjA0YjIyZTdkMDMyZTUwOGI0NjEzYmEwODcwOTE)[![Netlify Status](https://api.netlify.com/api/v1/badges/27fa023d-7c73-4a3f-9791-b3b657a47100/deploy-status)](https://app.netlify.com/sites/mermaidjs/deploys)

# Contributors are welcome!

If you want to speed up the progress for mermaid-live-editor, join the slack channel and contact knsv.

# mermaid-live-editor

Edit, preview and share mermaid charts/diagrams.

## Features

- Edit and preview flowcharts, sequence diagrams, gantt diagrams in real time.
- Save the result as a svg
- Get a link to a viewer of the diagram so that you can share it with others.
- Get a link to edit the diagram so that someone else can tweak it and send a new link back

## Live demo

You can try out a live version [here](https://mermaid.live/).

## Docker

### Run published image

```bash
docker run --publish 8000:80 ghcr.io/mermaid-js/mermaid-live-editor
```

### To configure renderer URL

Set the Environment variable MERMAID_RENDERER_URL to the rendering service.
Default is `https://mermaid.ink`

### Development

```bash
docker compose up --build
```

Then open http://localhost:8000

## Setup

[Volta](https://volta.sh) is used for managing node and yarn versions.

This project is set up using [Yarn](https://classic.yarnpkg.com/en/docs/getting-started):

```
yarn install
```

## Development

```
yarn dev -- --open
```

This app is created with Svelte Kit.

## Release

When a PR is created targeting master, it will be built and deployed by Netlify.
The URL will be indicated in a Comment in the PR.

Once the PR is merged, it will automatically be released.
