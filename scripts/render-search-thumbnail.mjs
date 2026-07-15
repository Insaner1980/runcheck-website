import { existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outputDir = resolve(root, 'output', 'search-thumbnail');
const htmlPath = resolve(outputDir, 'render.html');
const pngPath = resolve(outputDir, 'runcheck-search-thumbnail.png');
const webpPath = resolve(root, 'public', 'runcheck-search-thumbnail.webp');
const logoUrl = pathToFileURL(resolve(root, 'src', 'assets', 'runcheck-logo.webp')).toString();
const fontUrl = pathToFileURL(
  resolve(root, 'node_modules', '@fontsource-variable', 'manrope', 'files', 'manrope-latin-wght-normal.woff2'),
).toString();

const chromeCandidates = [
  process.env.CHROME_PATH,
  String.raw`C:\Program Files\Google\Chrome\Application\chrome.exe`,
  String.raw`C:\Program Files (x86)\Microsoft\EdgeCore\151.0.4129.6\msedge.exe`,
  String.raw`C:\Program Files (x86)\Microsoft\EdgeCore\150.0.4078.48\msedge.exe`,
  String.raw`C:\Program Files (x86)\Microsoft\EdgeCore\149.0.4022.98\msedge.exe`,
].filter(Boolean);

const chromePath = chromeCandidates.find((candidate) => existsSync(candidate));

if (!chromePath) {
  throw new Error('Chrome or Edge was not found. Set CHROME_PATH to a Chromium executable.');
}

mkdirSync(outputDir, { recursive: true });

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <style>
      @font-face {
        font-family: "Manrope";
        font-style: normal;
        font-weight: 200 800;
        font-display: block;
        src: url("${fontUrl}") format("woff2");
      }

      * {
        box-sizing: border-box;
      }

      html,
      body {
        margin: 0;
        width: 1200px;
        height: 1200px;
        overflow: hidden;
        background: #030708;
      }

      body {
        display: grid;
        place-items: center;
        font-family: "Manrope", Arial, sans-serif;
        color: #f8fbff;
      }

      .thumbnail {
        position: relative;
        display: grid;
        place-items: center;
        width: 1200px;
        height: 1200px;
        isolation: isolate;
        background:
          radial-gradient(circle at 50% 42%, rgb(18 140 222 / 0.36), transparent 28%),
          radial-gradient(circle at 52% 44%, rgb(93 242 225 / 0.22), transparent 22%),
          linear-gradient(180deg, #061317 0%, #030708 56%, #020506 100%);
      }

      .thumbnail::before {
        content: "";
        position: absolute;
        inset: 0;
        z-index: -1;
        background: repeating-linear-gradient(
          180deg,
          rgb(255 255 255 / 0.036) 0,
          rgb(255 255 255 / 0.036) 1px,
          transparent 1px,
          transparent 42px
        );
        opacity: 0.55;
      }

      .brand {
        display: grid;
        justify-items: center;
        gap: 34px;
        transform: translateY(-18px);
      }

      .logo {
        width: 430px;
        height: 430px;
        object-fit: contain;
        filter:
          drop-shadow(0 0 32px rgb(64 204 255 / 0.34))
          drop-shadow(0 32px 70px rgb(0 0 0 / 0.46));
      }

      .wordmark {
        margin: 0;
        font-size: 132px;
        font-weight: 500;
        line-height: 1;
        letter-spacing: 0;
        color: #ffffff;
        text-shadow:
          0 0 28px rgb(64 204 255 / 0.2),
          0 22px 46px rgb(0 0 0 / 0.44);
      }
    </style>
  </head>
  <body>
    <main class="thumbnail" aria-label="runcheck">
      <div class="brand">
        <img class="logo" src="${logoUrl}" alt="" />
        <p class="wordmark">runcheck</p>
      </div>
    </main>
  </body>
</html>`;

await writeFile(htmlPath, html);

rmSync(pngPath, { force: true });
rmSync(webpPath, { force: true });

const screenshot = spawnSync(
  chromePath,
  [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--no-first-run',
    '--no-default-browser-check',
    '--window-size=1200,1200',
    '--virtual-time-budget=1000',
    `--screenshot=${pngPath}`,
    pathToFileURL(htmlPath).toString(),
  ],
  { stdio: 'inherit' },
);

if (screenshot.status !== 0) {
  throw new Error(`Screenshot rendering failed with status ${screenshot.status}.`);
}

const imageMagickRoot = String.raw`C:\Program Files`;
const windowsImageMagickPaths = existsSync(imageMagickRoot)
  ? readdirSync(imageMagickRoot, { withFileTypes: true })
      .filter((entry) => entry.isDirectory() && entry.name.startsWith('ImageMagick-'))
      .map((entry) => resolve(imageMagickRoot, entry.name, 'magick.exe'))
  : [];
const magickPath = [...windowsImageMagickPaths, '/usr/bin/magick', '/usr/local/bin/magick']
  .find((candidate) => existsSync(candidate));

if (!magickPath || !existsSync(magickPath)) {
  throw new Error('ImageMagick was not found under C:\\Program Files.');
}

const convert = spawnSync(
  magickPath,
  [pngPath, '-define', 'webp:method=6', '-quality', '88', webpPath],
  { stdio: 'inherit' },
);

if (convert.status !== 0) {
  throw new Error(`WebP conversion failed with status ${convert.status}.`);
}

console.log(`Wrote ${webpPath}`);
