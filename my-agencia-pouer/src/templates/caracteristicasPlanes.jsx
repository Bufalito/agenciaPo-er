import home_portada from "../icons/portadaDetalles.svg";
import quienesSomos from "../icons/quienesSomosDetalles.svg";
import contacto from "../icons/contactoDetalles.svg";
import servicios from "../icons/serviciosDetalle.svg";

export const DETALLES_DE_PLANES = {
  economico: {
    titulo: 'Sitio Web Economico',
    description:
      'El paquete de Diseño Web Económico es recomendable para pequeños emprendedores que quieran tener una presentación digital.',
    subDescription: 'Esta compuesta por 1 pagina, con secciones dentro:',
    sections: [
      {
        tituloSection: 'Portada',
        icon: home_portada,
        descriptionSection: 'En Internet, la página de inicio de un sitio web se conoce con el nombre de portada o homepage. Se trata de lo primero que ven los usuarios al navegar a un determinado sitio.',
      },
      {
        tituloSection: 'Contacto',
        icon: quienesSomos,
        descriptionSection: 'Incluye un correo electrónico y número de teléfono, así los visitantes pueden encontrar la información que necesitan. Incluye un formulario breve, muestran solo los campos necesarios que ayudarán a la empresa a comprender quién se pone en contacto con ellos.',
      },
      {
        tituloSection: 'Servicios',
        icon: servicios,
        descriptionSection: 'Es un espacio de su sitio web en donde se destaca los productos/servicios que ofrece tu negocio. Ejemplo: Productos, detalle de un producto, servicios, etc.',
      },
      {
        tituloSection: 'Quienes somos',
        icon: contacto,
        descriptionSection: 'La página quiénes somos está pensada para generar conexión emocional con tus usuarios. Puedes explicar cómo satisfaces sus necesidades y hacer una presentación de tu trayectoria y de la historia de tu empresa o negocio.',
      },
    ],
    carac: [
      { caracteristicas: 'Pagina de inicio la cual contiene 3 secciones internas (Servicios, Contacto, Quienes somos).' },
      { caracteristicas: 'Un carrusel de imagenes (Hasta 3 imagenes).' },
      { caracteristicas: 'Un formulario de contacto.' },
      { caracteristicas: 'Links a tus Redes Sociales, WhatsApp y Maps (esta ultima opcion solo si es requerida).' },
      { caracteristicas: 'Chat bot automático que simula el comportamiento humano.' },
      { caracteristicas: 'Este sitio web no es apto para realizar ventas a traves del mismo.' },
    ],
    precioLista: '42.399',
  },

  basico: {
    titulo: 'Sitio Web Basico',
    description:
      'El paquete es recomendable para emprendedores y/o PyMEs que busquen digitalizar su negocio, con una opción básica y económica.',
    subDescription: 'Está compuesto por 4 paginas:',
    sections: [
      {
        tituloSection: 'Inicio / Home',
        icon: home_portada,
        descriptionSection: 'En Internet, la página de inicio de un sitio web se conoce con el nombre de portada o homepage. Se trata de lo primero que ven los usuarios al navegar a un determinado sitio.',
      },
      {
        tituloSection: 'Servicios / Productos',
        icon: quienesSomos,
        descriptionSection: 'Es un espacio de su sitio web en donde se destaca los productos/servicios que ofrece tu negocio. Ejemplo: Productos, detalle de un producto, servicios, etc.',
      },
      {
        tituloSection: 'Quienes Somos',
        icon: servicios,
        descriptionSection: 'La página quiénes somos está pensada para generar conexión emocional con tus usuarios. Puedes explicar cómo satisfaces sus necesidades y hacer una presentación de tu trayectoria y de la historia de tu empresa o negocio.'
      },
      {
        tituloSection: 'Contacto',
        icon: contacto,
        descriptionSection: 'Incluye un correo electrónico y número de teléfono, así los visitantes pueden encontrar la información que necesitan. Incluye un formulario breve, muestran solo los campos necesarios que ayudarán a la empresa a comprender quién se pone en contacto con ellos.',
      },
    ],
    carac: [
      { caracteristicas: 'Home page con hasta 4 secciones internas.' },
      { caracteristicas: 'Servicios/Productos con hasta 4 secciones internas.' },
      { caracteristicas: 'Quienes Somos con hasta 4 secciones internas.' },
      { caracteristicas: 'Contacto con hasta 4 secciones internas.' },
      { caracteristicas: 'Hasta 2 carruseles de imagenes (con hasta 5 imagenes referenciales cada uno), podras situarlos donde quieras.' },
      { caracteristicas: 'Formulario de contacto.' },
      { caracteristicas: 'Links a tus Redes Sociales, WhatsApp y Maps (esta ultima es caso de que sea requerido).' },
      { caracteristicas: 'Chat bot automático que simula el comportamiento humano.' },
    ],
    precioLista: '90.275',
  },

  tienda: {
    titulo: 'Tienda Online',
    description:
      'El paquete es recomendable para comercios y emprendedores que quieran tener mayores ventas online, autogestionando sus productos.',
    subDescription: 'Está compuesto por 4 paginas:',
    sections: [
      {
        tituloSection: 'Inicio / Home',
        icon: home_portada,
        descriptionSection: 'En Internet, la página de inicio de un sitio web se conoce con el nombre de portada o homepage. Se trata de lo primero que ven los usuarios al navegar a un determinado sitio.',
      },
      {
        tituloSection: 'Servicios / Productos',
        icon: quienesSomos,
        descriptionSection: 'Es un espacio de su sitio web en donde se destaca los productos/servicios que ofrece tu negocio. Ejemplo: Productos, detalle de un producto, servicios, etc.',
      },
      {
        tituloSection: 'Quienes Somos',
        icon: servicios,
        descriptionSection: 'La página quiénes somos está pensada para generar conexión emocional con tus usuarios. Puedes explicar cómo satisfaces sus necesidades y hacer una presentación de tu trayectoria y de la historia de tu empresa o negocio.'
      },
      {
        tituloSection: 'Contacto',
        icon: contacto,
        descriptionSection: 'Incluye un correo electrónico y número de teléfono, así los visitantes pueden encontrar la información que necesitan. Incluye un formulario breve, muestran solo los campos necesarios que ayudarán a la empresa a comprender quién se pone en contacto con ellos.',
      },
    ],
    carac: [
      { caracteristicas: 'Home page con hasta 8 secciones internas.' },
      { caracteristicas: 'Servicios/Productos con hasta 6 secciones internas.' },
      { caracteristicas: 'Quienes Somos con hasta 4 secciones internas.' },
      { caracteristicas: 'Contacto con hasta 4 secciones internas.' },
      { caracteristicas: 'Hasta 4 carruseles de imagenes (con hasta 5 imagenes referenciales cada uno, pueden ser automaticos si asi lo deseas).' },
      { caracteristicas: ' Formularios de contacto.' },
      { caracteristicas: ' Links a tus Redes Sociales , WhatsApp y Google Maps.' },
      { caracteristicas: 'Carga inicial de hasta 75 productos.' },
      { caracteristicas: 'Integración con métodos de pago.' },
      { caracteristicas: 'Integración con métodos de envío.' },
      { caracteristicas: ' Tutorial para carga de productos.' },
      { caracteristicas: 'Botón de WhatsApp.' },
      { caracteristicas: 'Chat bot automático.' },
    ],
    precioLista: '109.580',
  },
};