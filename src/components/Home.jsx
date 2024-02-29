import PAISTINA from "./pictures/PAISTINA.png"

function Home() {
    return ( 
        <h1>Home</h1>,
        <div >
              <img
                src={PAISTINA}
                alt="RS"
                width="100%"
                height="15%"
                className="d-inline-block align-text-middle"/>
            
        
            </div>
           
    );
}

export default Home;