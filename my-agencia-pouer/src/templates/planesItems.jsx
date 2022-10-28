import arrowsLine from '../icons/arrows-line.svg';
import blog from '../icons/blog.svg';
import cloud from '../icons/cloud.svg';
import email from '../icons/email.svg';
import lock from '../icons/lock.svg';
import pen from '../icons/pen-fountain.svg';
import watch from '../icons/watch-later.svg';
import world from '../icons/world-line.svg';

import economica from '../icons/Devices-bro2.svg';
import basico from '../icons/Hand-coding-bro2.svg';
import tienda from '../icons/Website-Creator-bro2.svg';

export const PLANES_DATA = [
  {
    img: world,
    titulo: 'Dominio',
    texto: 'Te ayudamos a elegir y comprar el dominio que mejor se adapta a tu proyecto.  ',
    explicacion: "Un nombre de dominio actúa como una dirección que la gente usa para encontrar tu sitio web en Internet. Las personas la escribirán en la barra de direcciones de su navegador web y así accederán a tu sitio."
  },
  {
    img: cloud,
    titulo: 'Hosting',
    texto: 'Configuramos tu hosting web para hubicar tu pagina y mantenerla online.',
    explicacion: "Los servicios de alojamiento web te permiten publicar tu sitio web en Internet. Los proveedores de alojamiento web almacenan los datos de tu sitio en sus servidores y envían esa información a los navegadores web de tus visitantes cuando escriben tu nombre de dominio en la barra de direcciones."
  },
  {
    img: lock,
    titulo: 'SSL',
    texto: 'Te ayudamos a certificar tu sitio como seguro para que tus clientes naveguen tranquilos.',
    explicacion: "Un certificado SSL es un certificado digital que autentica la identidad de un sitio web y habilita una conexión cifrada. La sigla SSL significa Secure Sockets Layer (Capa de sockets seguros), un protocolo de seguridad que crea un enlace cifrado entre un servidor web y un navegador web."
  },
  {
    img: pen,
    titulo: 'Contenido de calidad',
    texto: 'Nuestro equipo de profesionales se encargara de hacer que tu pagina sea los mas eficiente y atractiva posible.',
  },
  {
    img: arrowsLine,
    titulo: 'Modificaciones',
    texto: 'Cambiar una imagen o texto, agregar o quitar una pagina dentro de los 7 dias post entrega. No hay problema, lo pedis y listo.',
  },
  {
    img: watch,
    titulo: 'Optimizacion',
    texto: 'Nuestras páginas cumplen con las buenas practicas favoreciendo una mejor indexación en las búsquedas.',
  },
  {
    img: email,
    titulo: 'Correos',
    texto: 'Te ayudaremos a crear y configurar tu email corporativo en caso de que asi lo desees.',
  },
  {
    img: blog,
    titulo: 'Blog',
    texto: 'Llevá adelante el blog de tu sitio y posicionate como todo un experto. Te capacitamos con tutoriales y soporte.',
  },
];

export const TIPOS_DE_PLANES = [
  {
    img: economica,
    titulo: 'Economica',
    texto: 'Sitio web económico para emprendedores y PyMEs',
    btn: 'Ver mas',
    id: 'economico',
  },
  {
    img: basico,
    titulo: 'Basica',
    texto: 'Sitio web para profesionales y para empresas',
    btn: 'Ver mas',
    id: 'basico'
  },
  {
    img: tienda,
    titulo: 'Tienda online',
    texto: 'Sitio web ecommerce: Vendé online las 24hs del día',
    btn: 'Ver mas',
    id: 'tienda',
  },
];