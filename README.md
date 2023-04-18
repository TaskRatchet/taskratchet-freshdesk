# taskratchet-freshdesk

Custom Freshdesk apps require the Pro plan.

https://www.freshworks.com/freshdesk/pricing/

## Dev

```bash
nvm use
pnpm install
pnpm dev
open https://taskratchet.freshdesk.com/a/tickets/1?dev=true
```

## Deploy

```bash
pnpm build
```

Then open the developer portal:

https://taskratchet.myfreshworks.com/developer/

And upload the zip in the `dist` folder.

## Freshworks CLI

The Freshworks CLI is included via pnpm. To use it locally, run the following commands:

```bash
nvm use
pnpm install
pnpm fdk
```

You can also [install][1] or update the [Freshworks CLI][2] globally using the following command:

```bash
npm install https://cdn.freshdev.io/fdk/latest.tgz -g
```

## Your First App

This app displays the name of the requester of a freshdesk ticket in the ticket_sidebar placeholder

### Files and Folders
    .
    ├── README.md                 A file for your future self and developer friends to learn about app
    ├── app                       A folder to place all assets required for frontend components
    │   ├── index.html            A landing page for the user to use the app
    │   ├── scripts               JavaScript to place files frontend components business logic
    │   │   └── app.js
    │   └── styles                A folder to place all the styles for app
    │       ├── images
    │       │   └── icon.svg
    │       └── style.css
    ├── config                    A folder to place all the configuration files
    │   └── iparams.json
    └── manifest.json             A JSON file holding meta data for app to run on platform

Explore [more of app sample apps](https://community.developers.freshworks.com/t/freshworks-sample-apps/3604) on the Freshworks github respository.

## Solidjs Usage

Those templates dependencies are maintained via [pnpm](https://pnpm.io) via `pnpm up -Lri`.

This is the reason you see a `pnpm-lock.yaml`. That being said, any package manager will work. This file can be safely be removed once you clone a template.

```bash
$ npm install # or pnpm install or yarn install
```

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `npm dev` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)

[1]: https://developers.freshdesk.com/v2/docs/quick-start/#install_the_cli
[2]: https://developers.freshdesk.com/v2/docs/freshworks-cli/