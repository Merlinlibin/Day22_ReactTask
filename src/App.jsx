import Pricecard from "../src/component/priceCard"

function App({ data }) {

  
    return(<div className="cardContainer">
      {
        
        data.map((element, i) => < Pricecard key={i } datas={element} />)
      }
      
    </div>)
  };


export default App