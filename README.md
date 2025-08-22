# GNViewer

GNViewer is a lightweight web application for viewing and browsing regulatory guidance notes.

The project serves Markdown content listed in `docs/manifest.json` and renders it in the browser using [marked](https://github.com/markedjs/marked) and DOMPurify with term-highlighting for defined glossary items.

## Build instructions

The site is entirely static and lives in the `docs` directory. To run it locally:

1. Install a simple static file server, for example using [serve](https://www.npmjs.com/package/serve):
   ```sh
   npm install -g serve
   ```
2. Start the server pointed at the `docs` folder:
   ```sh
   serve docs
   ```
3. Open the reported local URL (typically <http://localhost:3000>) in your browser to use GNViewer.

No additional build step is required; updates to the Markdown files or `manifest.json` are reflected automatically.

## Contributing

Contributions are welcome! To propose changes:

- Fork the repository and create a topic branch.
- Follow the existing structure within the `docs` directory.
- Run any available tests (e.g. `npm test`) before submitting.
- Submit a pull request describing your changes.

By contributing, you agree that your submissions will be licensed under the project's MIT License.
