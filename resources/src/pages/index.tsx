import React from 'react'
import ReactDOM from 'react-dom'
import { PrimaryButton } from '../components/atoms/button/PrimaryButton';

const App = () => {
    const title: string = 'hoge';
    return (
        <>
        <h1>{title}</h1>
        <PrimaryButton>{title}</PrimaryButton>
        </>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)