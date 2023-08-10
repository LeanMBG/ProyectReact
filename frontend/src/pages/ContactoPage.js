import '../styles/components/pages/ContactoPage.css'

const ContactoPage = (props) => {
    return (
        <main className='holder'>
            <div className='columna contacto'>
                <h2>Complete el siguiente formulario</h2>
                <form action='/ruta-de-destino' method='POST' className='formulario' onSubmit={handleSubmit}>
                    <p>
                        <label>Nombre</label>
                        <input type='text' name='nombre' />
                    </p>
                    <p>
                        <label>Email</label>
                        <input type='text' name='email' />
                    </p>
                    <p>
                        <label>Telefono</label>
                        <input type='num' name='telefono' />
                    </p>
                    <p>
                        <label>Comentario</label>
                        <textarea name='mensaje'></textarea>
                    </p>
                    <p className='centrar'><input type="submit" value='enviar' /></p>

                </form>
            </div>
            <div className='columna datos'>
                <h2>Otras vias de contacto </h2>
                <p>Tambien puede contactarse con nosotros
                    usando los siguientes medios:
                </p>
                <ul>
                    <li>Telefono: 0303456</li>
                    <li>Email: loQueHay@gmail.com</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>


            </div>
        </main>
    );

}
// Muestra una alerta indicando que el formulario se envió correctamente
const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = '/ruta-de-redireccion'; //agregar proximamente
    alert('¡Se envió correctamente!');
}

export default ContactoPage;