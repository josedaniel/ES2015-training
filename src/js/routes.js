const nombre = 'jose';
const routes = {
  nombre,
  apellido(nombre = 'jose', ...apellidos){
    return `Me llamo ${nombre} ${apellidos.join(' ')}.`;
  }
}
export default routes;
