import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();
const pkgPath=path.join(root,'node_modules','@astrojs','starlight','package.json');
if(!fs.existsSync(pkgPath)){ console.error('Starlight node_modules not found. Run npm ci first.'); process.exit(2); }
const pkg=JSON.parse(fs.readFileSync(pkgPath,'utf8'));
console.log(`Starlight version: ${pkg.version}`);
const rootPkg=JSON.parse(fs.readFileSync(path.join(root,'package.json'),'utf8'));
console.log(`Astro declared: ${rootPkg.dependencies?.astro || rootPkg.devDependencies?.astro || 'unknown'}`);
console.log('Preflight note: the batch uses stable Starlight features: locales, component overrides, customCss, routeMiddleware, route data.');
