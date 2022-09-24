const defaultTheme = require('tailwindcss/defaultTheme');

const variableColor = (variable) => {
    const SCALE = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
    const colors = {}

    SCALE.forEach(scale => {
        colors[scale] = ({ opacityVariable, opacityValue }) => {
            if (opacityValue !== null) {
                return `rgba(var(--${variable}-${scale}), ${opacityValue ?? '1'})`
            }

            if (opacityVariable !== null) {
                return `rgba(var(--${variable}-${scale}), ${opacityVariable ?? '1'})`
            }

            return `rgb(var(--${variable}-${scale}))`
        }
    })

    return colors
}
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: variableColor('primary'),
                neutral: variableColor('neutral'),
                success: variableColor('primary'),
                warning: variableColor('danger'),
                danger: variableColor('danger'),
            },
            fontSize: {
                base: defaultTheme.fontSize.sm,
                md: defaultTheme.fontSize.base
            },
            boxShadow: {
                inset: '0px 0px 2px 0px rgb(0, 0, 0, 0.40);',
            },
            dropShadow: {
                'colored-drop-shadow': '0 4px 4px rgba(var(--tw-shadow-color), 0.25)',
            },
            transitionDuration: {
                DEFAULT: '250ms'
            },
        },
    },

    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
};
