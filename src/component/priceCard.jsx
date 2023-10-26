import React from 'react';



function Pricecard({ datas }) {
  return (
      <div className="card">
          <p className="head">{datas.pack}</p>
          <h1 className="title">{datas.amount}</h1>
          <div className="rulerDiv">
              <hr className="ruler"/>
          </div>
          <ul className="uList">
              {
                  datas.values.map((list,i) => {
                  if (list) {
                            return (<li key={i} className="List">   {'✔ ' + list.content}</li>)
                        }
                        else {
                            return (<li key={i} className="List xmark" >   {'✖ ' + list.content}</li>)
                        }
                                    })
              }
          </ul>
          <div className="buttondiv">
              <button className="button">Button</button>
          </div>
    
      
    </div>
  )


}
export default Pricecard;