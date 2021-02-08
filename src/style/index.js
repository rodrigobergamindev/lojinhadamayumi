import styled from 'styled-components';


const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    background-color: transparent;

`

const ContainerHeader = styled(Container)`  
    display:flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    margin-top: 50px;
    font-size: 1.1em;
    color:#f5f6fa;
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
        width: 350,
        font-family: Roboto,
        font-weight: 300,
        fontSize: 1.09em
    }

    h7 {
        margin-bottom: 30px;
    }

    footer {
        margin-top: 40px;
        font-size: 0.6em;
        font-family: 'Roboto Slab', serif;
    }

    a:visited {
        color: #000;
    }
    
    a:hover {
        color: #000;
    }
   
    a:active {
        color: #000;
    }
`


export {Container, ContainerHeader}