/**
 * TODO: add `jit` (https://tailwindcss.com/docs/just-in-time-mode)
 */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{ts,tsx,scss}'],
  theme: {
    extend: {
      spacing: {
        '2px': '2px',
      },
    },
  },
}
