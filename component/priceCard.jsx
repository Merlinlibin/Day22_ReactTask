


function Pricecard({ datas }) {
  return (
      <div class="card">
          <p class="head">{datas.pack}</p>
          <h1 class="title">{datas.amount}</h1>
          <div class="rulerDiv">
              <hr class="ruler"/>
          </div>
          <ul class="uList">
              {
                  datas.values.map((list, index) => {
                  
                      if (list.valid) {
                          return (<li key={index} class="List">   {'✔ '+ list.content}</li>)
                      }
                      else {
                          return (<li key={index} class="List xmark" >   {'✖ '+ list.content}</li>)
                      }
                  })
              }
          </ul>
          <div class="buttondiv">
              <button class="button">Button</button>
          </div>
    
      
    </div>
  )


}
export default Pricecard;