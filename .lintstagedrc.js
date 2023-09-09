module.exports = {
  '**/*.{js,jsx,ts,tsx,d.tsx,md,yml,yaml,json,css,less,scss,sass,html,ejs,hbs}': (files) => {
    return ['prettier', '--config', '.prettierrc.js', '--write', ...files].join(' ')
  },
  '**/*.{ts,tsx,d.ts}': async (files) => {
    return ['eslint', '--max-warnings 0', ...files].join(' ')
  },
}
