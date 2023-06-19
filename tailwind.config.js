/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
              'hanken': ['Hanken Grotesk', 'courier']
            },
            colors: {

              //Primary
              'light-red':'hsl(0, 100%, 67%)',
              'orangy-yellow':'hsl(39, 100%, 56%)',
              'green-teal':'hsl(166, 100%, 37%)',
              'cobalt-blue':'hsl(234, 85%, 45%)',

              //Neutral
              'pale-blue':'hsl(221, 100%, 96%)',
              'light-lavender':'hsl(241, 100%, 89%)',
              'dark-gray-blue':'hsl(224, 30%, 27%)',

              //Gradients
              'light-slate-blue': 'hsl(252, 100%, 67%)',
              'light-royal-blue': 'hsl(241, 81%, 54%)',
              'violet-blue':'hsla(256, 72%, 46%, 1)',
              'persian-blue':'hsla(241, 72%, 46%, 0.0)',
            },
        },
    },
    plugins: [],
};
