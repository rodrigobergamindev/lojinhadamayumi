import React from 'react'
import {Container, ContainerHeader} from '../style/index.js'
import Avatar from './Avatar'
import Button from './Button'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import FacebookIcon from '@material-ui/icons/Facebook';


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
    const urlCatalogoACO = 'https://drive.google.com/file/d/1AFcbE7RGP4XALwh0DYl3MNxwxJrgZrkR/view?usp=sharing'
    const urlCatalogoPRATA = 'https://drive.google.com/file/d/1lpEPu9i02b75BkZebPlw9sLShA484Brl/view?usp=sharing'
    const urlCatalogoROUPA = 'https://drive.google.com/file/d/1wmLx6eWKOSlaUwF7LJF7FBVJhzAV1F_m/view?usp=sharing'
    const urlCatalogoARGOLA = 'https://drive.google.com/file/d/1oikyEFrQDoqehJ8dKRUngY1Avu53r0nb/view?usp=sharing'
    const urlWhatsApp = 'https://api.whatsapp.com/send?phone=551129639226&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20pe%C3%A7as%20da%20loja'
    const urlFace = 'https://www.facebook.com/lojinhadamayumi/'


    return (
        <Container>

            <ContainerHeader>
                <Avatar/>
                <div>

                <h1>LOJINHA DA MAYUMI</h1>
                <p>Loja de roupas e acessórios</p>

                <ul>
                    <li><a href={urlCatalogoPRATA} target="_blank"><Button text={"PEÇAS EM PRATA"} icon={<MenuBookIcon className={classes.root}></MenuBookIcon>}></Button></a></li>
                    <li><a href={urlCatalogoACO} target="_blank"><Button text={"PEÇAS EM AÇO"} icon={<MenuBookIcon className={classes.root}></MenuBookIcon>}></Button></a></li>
                    <li><a href={urlCatalogoARGOLA} target="_blank"><Button text={"ARGOLAS"} icon={<MenuBookIcon className={classes.root}></MenuBookIcon>}></Button></a></li>
                    <li><a href={urlCatalogoROUPA} target="_blank"><Button text={"ROUPAS"} icon={<AccessibilityIcon className={classes.root}></AccessibilityIcon>}></Button></a></li>
                    <li><a href={urlInsta} target="_blank"><Button text={"INSTAGRAM"} icon={<InstagramIcon className={classes.root}></InstagramIcon>}></Button></a></li>
                    <li><a href={urlFace} target="_blank"><Button text={"FACEBOOK"} icon={<FacebookIcon className={classes.root}></FacebookIcon>}></Button></a></li>
                    <li><a href={urlWhatsApp} target="_blank"><Button text={"FAÇA SEU PEDIDO"} icon={<WhatsAppIcon className={classes.root}></WhatsAppIcon>}></Button></a></li>
                </ul>

                </div>

                <footer>
                    
                </footer>
            </ContainerHeader>

        </Container>
    )
}
