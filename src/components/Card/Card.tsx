import styled from '@emotion/styled'
import React from 'react'



const DivEstilizada = styled.div`
    padding: ${props => props.theme.espacamentos.l};
    background: ${props => props.theme.cores.secundarias.a};
    border: 1px solid;
    border-color: ${props => props.theme.cores.primarias.a};
    border-radius: ${props => props.theme.espacamentos.s}
`
interface ICardProps {
    children: React.ReactNode
}

export const Card = ({ children }: ICardProps) => {
    return (
        <DivEstilizada>
            {children}
        </DivEstilizada>
    )
}