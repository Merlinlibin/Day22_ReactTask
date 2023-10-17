import Pricecard from "../component/priceCard"

function App({ data }) {

  
    return(<div class="cardContainer">
      {
        
        data.map(element =>< Pricecard datas={element} />)
      }
      
    </div>)
  };


export default App