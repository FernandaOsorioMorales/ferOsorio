module.exports = {
    content: ['./src/**/*.{vue,js,ts}'],
    plugins: [require('daisyui')],
    daisyui: {
      themes: [
        {
          fer: {
            "primary":"#BE3E82",
            "secondary":"#E43F6F",
            "accent":"#5E4352",
            "neutral":"#DFBBB1",
            "otroRosa":"#EA5DBA",
            "base-100":"ffffff",
          },
          extend: {
            fontFamily: {
              'sen': ['Sen', 'sans-serif'],
            },
            fontOpticalSizing: {
              'auto': 'auto',
            },
          },
        },
        "dark",
        "cupcake",
      ]
    }
  };