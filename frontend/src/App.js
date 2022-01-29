import data from './data';
import Product from './component/Product';
function App() {
  return (

    <div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="/">Shop</a>
            </div>
            <div>
              <a href="/cart">Cart</a>
              <a href="singin">Sing-In</a>
          </div>  
        </header>
        <main>
           <div className="row center">
             {
               data.product.map((product) =>(

                <Product key={product.id}  product={product} />

               ))
             }
               
            

           </div>
        </main>
        <footer className="row center">
            All right reserved
        </footer>
    </div>
   
  );
}

export default App;
