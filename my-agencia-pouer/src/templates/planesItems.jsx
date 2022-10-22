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
    { img: world, titulo: 'Dominio', texto: 'Te ayudamos a elegir y comprar el dominio que mejor se adapta a tu proyecto.' },
    {
      img: cloud,
      titulo: 'Hosting',
      texto: 'Creamos y configuramos los correos corporativos que necesites, por ejemplo: hola@tunegocio.com.ar',
    },
    {
      img: lock,
      titulo: 'SSL',
      texto: 'Certificamos tu sitio como seguro para que tus clientes naveguen tranquilos ¡Gratis por un año!',
    },
    {
      img: pen,
      titulo: 'Contenido de calidad',
      texto: 'Nuestro equipo de profesionales se encargará de todo, imágenes, videos, fotos, mapas y formularios.',
    },
    {
      img: arrowsLine,
      titulo: 'Modificaciones',
      texto: 'Cambiar una imagen o texto, agregar o quitar una pagina luego de la entrega. No hay problema, lo pedís y listo.',
    },
    {
      img: watch,
      titulo: 'Optimizacion',
      texto: 'Nuestras páginas cumplen con las buenas practicas favoreciendo una mejor indexación en las búsquedas.',
    },
    {
      img: email,
      titulo: 'Correos',
      texto: 'Tu negocio se destacará con una ficha en los resultados cuando te busquen en Google o Google Maps.',
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
      texto: 'Diseño web económico para emprendedores y PyMEs',
      btn: 'Ver mas',
      id: 'economico',
    },
    { img: basico, titulo: 'Basica', texto: 'Diseño web para profesionales y para empresas', btn: 'Ver mas', id: 'basico' },
    {
      img: tienda,
      titulo: 'Tienda online',
      texto: 'Diseño web ecommerce: Vendé online las 24hs del día',
      btn: 'Ver mas',
      id: 'tienda',
    },
  ];