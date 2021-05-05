import React from 'react'
import {ContainerHeader, Footer} from '../style/index.js'
import Avatar from './Avatar'
import Button from './Button'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import FacebookIcon from '@material-ui/icons/Facebook';

import pix from '../assets/pix.png'
import cartao from '../assets/cartao.png'
import boleto from '../assets/boleto.svg'
import picpay from '../assets/picpay.png'


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
    const urlCatalogoACO = 'https://drive.google.com/file/d/1DdEQARLv6uqQQJPGncpHA_7Y_PupTPgf/view?usp=sharing'
    const urlCatalogoPRATA = 'https://drive.google.com/file/d/1RpPC1TR_Dq99QCyPf8Bb2MYouXXlsLzm/view?usp=sharing'
    const urlCatalogoARGOLA = 'https://drive.google.com/file/d/14Qts8zYV_0S_lbeXEzH02PD1iXfdXQZm/view?usp=sharing'
    const urlCatalogoNIQUEL = 'https://drive.google.com/file/d/1He2SG7yrH_APBWKfLQ8sbp46nitvbY5T/view?usp=sharing'
    const urlPulseiras = 'https://drive.google.com/file/d/1Au_1vcOvM_DSm686KKpyBsvuuAg93qyY/view?usp=sharing'
    const urlMuranos = 'https://drive.google.com/file/d/1WEDmwG9UwfQn3B5OJb8X6gKewbQ08W-v/view?usp=sharing'
    const urlWhatsApp = 'https://api.whatsapp.com/send?phone=551129639226&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20pe%C3%A7as%20da%20loja'
    const urlFace = 'https://www.facebook.com/lojinhadamayumi/'


    return (

            <ContainerHeader>
                <Avatar/>
                <div>

                <h1>LOJINHA DA MAYUMI</h1>
                <p>Irashaimase ⛩</p>

                <ul>
                    <li><a href={urlCatalogoPRATA} target="_blank"><Button text={"BERLOQUES BANHADOS"} icon={<MenuBookIcon className={classes.root}></MenuBookIcon>}></Button></a></li>
                    <li><a href={urlCatalogoNIQUEL} target="_blank"><Button text={"BERLOQUES EM NÍQUEL"} icon={<MenuBookIcon className={classes.root}></MenuBookIcon>}></Button></a></li>
                    <li><a href={urlCatalogoACO} target="_blank"><Button text={"BERLOQUES ENVERNIZADOS"} icon={<MenuBookIcon className={classes.root}></MenuBookIcon>}></Button></a></li>
                    <li><a href={urlPulseiras} target="_blank"><Button text={"PULSEIRAS & TRAVAS"} icon={<MenuBookIcon className={classes.root}></MenuBookIcon>}></Button></a></li>
                    <li><a href={urlMuranos} target="_blank"><Button text={"MURANOS"} icon={<MenuBookIcon className={classes.root}></MenuBookIcon>}></Button></a></li>
                    <li><a href={urlCatalogoARGOLA} target="_blank"><Button text={"ARGOLAS"} icon={<MenuBookIcon className={classes.root}></MenuBookIcon>}></Button></a></li>
                    <li><a href={urlWhatsApp} target="_blank"><Button text={"FAÇA SEU PEDIDO"} icon={<WhatsAppIcon className={classes.root}></WhatsAppIcon>}></Button></a></li>
                    <li><a href={urlInsta} target="_blank"><Button text={"INSTAGRAM"} icon={<InstagramIcon className={classes.root}></InstagramIcon>}></Button></a></li>
                    <li><a href={urlFace} target="_blank"><Button text={"FACEBOOK"} icon={<FacebookIcon className={classes.root}></FacebookIcon>}></Button></a></li>
                </ul>

                </div>

                <Footer>
                  <h1>FORMAS DE PAGAMENTO</h1>

                  <ul>
                    <li><img src={pix}></img></li>
                    <li><img src={cartao}></img></li>
                    <li><img src={boleto}  style={{width:'80px'}}></img></li>
                    <li><img src={picpay}></img></li>
                  </ul>
                </Footer>
            </ContainerHeader>

    )
}
