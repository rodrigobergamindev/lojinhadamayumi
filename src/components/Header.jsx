import React from 'react'
import {Container, ContainerHeader} from '../style/index.js'
import Avatar from './Avatar'
import Button from './Button'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AccessibilityIcon from '@material-ui/icons/Accessibility';



import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      fontSize: '1.02em',
      padding: '5px',
    },
  });
  

export default function Header() {
    const classes = useStyles();
    const urlInsta = 'https://www.instagram.com/lojinha_da_mayumi/'
    const urlCatalogoACO = 'https://drive.google.com/file/d/1zwC9bmrPtXEef0s2Yssns0kCOdAiTAoe/view?usp=sharing'
    const urlCatalogoPRATA = 'https://drive.google.com/file/d/1FXEgeF2gkruskIH1_iWDHZH50sY5PxPh/view?usp=sharing'
    const urlCatalogoROUPA = 'https://drive.google.com/file/d/1wmLx6eWKOSlaUwF7LJF7FBVJhzAV1F_m/view?usp=sharing'
    const urlCatalogoARGOLA = 'https://drive.google.com/file/d/1oikyEFrQDoqehJ8dKRUngY1Avu53r0nb/view?usp=sharing'
    const urlWhatsApp = 'https://api.whatsapp.com/send?phone=5511983478844&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20pe%C3%A7as%20da%20loja'
    return (
        <Container>

            <ContainerHeader>
                <Avatar/>
                <div>

                <h1>LOJINHA DA MAYUMI</h1>
                <p>Loja de roupas e acessórios</p>

                <ul>
                    <li><a href={urlInsta} target="_blank"><Button text={"INSTAGRAM"} icon={<InstagramIcon className={classes.root}></InstagramIcon>}></Button></a></li>
                    <li><a href={urlCatalogoPRATA} target="_blank"><Button text={"PEÇAS EM PRATA"} icon={<MenuBookIcon className={classes.root}></MenuBookIcon>}></Button></a></li>
                    <li><a href={urlCatalogoACO} target="_blank"><Button text={"PEÇAS EM AÇO"} icon={<MenuBookIcon className={classes.root}></MenuBookIcon>}></Button></a></li>
                    <li><a href={urlCatalogoARGOLA} target="_blank"><Button text={"ARGOLAS"} icon={<MenuBookIcon className={classes.root}></MenuBookIcon>}></Button></a></li>
                    <li><a href={urlCatalogoROUPA} target="_blank"><Button text={"ROUPAS"} icon={<AccessibilityIcon className={classes.root}></AccessibilityIcon>}></Button></a></li>
                    <li><a href={urlWhatsApp} target="_blank"><Button text={"FAÇA SEU PEDIDO"} icon={<WhatsAppIcon className={classes.root}></WhatsAppIcon>}></Button></a></li>
                </ul>

                </div>

                <footer>
                    POR BEATRIZ MAYUMI YASHIKI<br></br>
                    TODOS OS DIREITOS RESERVADOS ®
                </footer>
            </ContainerHeader>

        </Container>
    )
}
