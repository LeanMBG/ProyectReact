import '../styles/components/pages/HomePage.css'

const HomePage = (props) => {
    return (
        <main className='holder'>
            <div className='homeimg'>
                <img src='images/home/img01.jpg' alt='avion' />
            </div>
            <div className='columnas'>
                <div className='bienvenidos_left'>
                    <h2>Bienvenidos</h2>
                    <p> Asi es la vida de hermosa.
                        Cupidatat ex magna laboris pariatur dolore officia laboris eu non labore qui anim ullamco cupidatat.<br/>
                        Dolore culpa elit mollit sunt dolore nisi adipisicing exercitation excepteur officia laborum sit dolor dolor.<br/>
                        Pariatur eu consequat in amet ipsum et officia sint ea exercitation dolor nisi. <br/>
                        Ea velit labore cillum elit commodo officia cupidatat occaecat do esse eu pariatur.<br/>
                        Veniam aute velit aute tempor pariatur nisi proident duis occaecat adipisicing ad amet magna anim. In ullamco et ullamco dolore dolor.<br/>
                        Esse dolor laborum deserunt Lorem ad aliqua qui mollit. </p>
                </div>
                <div className='testimonios right'>
                    <h2>Testimonios</h2>
                    <div className='testimonio'>
                        <span className='cita'> Simplemente excelente - </span>
                        <span className='autor'>Juanito Lopez</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;