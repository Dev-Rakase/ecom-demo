import { vars } from "nativewind";

export type themesVariant = 'brand' | 'xmas';

export const themes = {
    brand: {
        light: vars({
            '--color-primary': '221.2 83.2% 53.3%',
            '--color-secondary': '214.3 31.8% 91.4%',

        }),
        dark: vars({
            '--color-primary': '217.2 91.2% 59.8%',
            '--color-secondary': '217.2 32.6% 17.5%',
        }),

    },
    xmas: {
        light: vars({
            '--color-primary': '346.8 77.2% 49.8%',
            '--color-secondary': '240 5.9% 90%',
        }),
        dark: vars({
            '--color-primary': '346.8 77.2% 49.8%',
            '--color-secondary': '240 3.7% 15.9%',
        })
    }
}

