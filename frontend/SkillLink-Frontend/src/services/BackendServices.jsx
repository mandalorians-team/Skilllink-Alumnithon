

export const  pruebaConexion = async ()  => {

  try{
    const response = await fetch('/api/prueba')
    const data = await response.json();
    return data;


  } catch (error) {
    console.error(' ❌Error al conectar con el backend:', error);
    throw error;
  }
}