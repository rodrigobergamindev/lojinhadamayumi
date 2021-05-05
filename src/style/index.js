import styled from 'styled-components';


const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    background-color: transparent;

`

const Footer = styled(Container)`

    color: white;
    flex-direction: column;
    margin-top: 90px;
    flex-wrap: nowrap;
    background-color: #eb4d4b;

    h1 {
        font-size: 1.2em;
        margin-top: 20px;
    }


    ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    img {
        width: 45px;
    }

    li {
        padding: 20px;
    }


`



const ContainerHeader = styled(Container)`  
    display:flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    margin-top: 50px;
    font-size: 1.1em;
    color:#eb4d4b;
    text-align: center;
    font-family: 'Jaldi', sans-serif;
    flex-direction:column;


    li {
        padding-top: 20px;
        background-color: transparent,
        border: 1px solid white,
        border-radius: 50,
        color: white,
        height: 48,
        padding: 30px,
        width: 500px,
        font-family: Roboto,
        font-weight: 300,
        fontSize: 1.09em
    }

    h7 {
        margin-bottom: 30px;
        color: white;
    }

    footer {
        margin-top: 40px;
        font-size: 0.6em;
        font-family: 'Roboto', serif;
        color: #eb4d4b;
    }

    a:visited {
        color: white;
    }
    
`


export {Container, ContainerHeader, Footer}