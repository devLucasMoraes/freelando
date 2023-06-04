import { ThemeProvider } from '@emotion/react'

declare module '@emotion/react' {
    export interface Theme {
        espacamentos: {
            s: string;
            l: string;
        };
        cores: {
            branco: string;
            atencao: string;
            focus: string;
            primarias: {
                a: string;
                b: string;
                c: string;
            };
            secundarias: {
                a: string;
                b: string;
                c: string;
            };
            neutras: {
                a: string;
                b: string;
                c: string;
            };
            dark: {
                a: string;
                b: string;
            };
        };
        fontFamily: string
    }
}

const tema = {
    cores: {
        branco: '',
        atencao: '',
        focus: '',
        primarias: {
            a: '#5754ED',
            b: '',
            c: ''
        },
        secundarias: {
            a: '#EBEAF9',
            b: '',
            c: ''
        },
        neutras: {
            a: '',
            b: '',
            c: ''
        },
        dark: {
            a: '',
            b: '',
        }
    },
    espacamentos: {
        s: '16px',
        l: '32px',
    },
    fontFamily: "'Montserrat', sans-serif"
}

interface IProvedorTemaProps {
    children: React.ReactNode;
}

export const ProvedorTema = ({ children }: IProvedorTemaProps) => {

    return (
        <ThemeProvider theme={tema} >
            {children}
        </ThemeProvider>
    )
}