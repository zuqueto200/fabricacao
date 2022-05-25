import React, { useEffect, useState } from "react";
import './index.css'
import { useMateriaPrima } from "../context/materiaprima";
 
export function Material() {

  const { materiaPrima, setMateriaPrima } = useMateriaPrima()
 

 


  function FnVender(e) {

    if (materiaPrima.materiaprima[e.id].estoque > 0) {

      setMateriaPrima(prevState => ({
        ...prevState,

        user: prevState.user = {saldo: materiaPrima.user.saldo + e.venda},

        materiaprima: prevState.materiaprima.map(item => {
          if (item.id !== e.id) {
            return item
          }

          return {
            ...item,
            estoque: item.estoque - 1,
          }
        })
      }))

    }
  }


  function FnCompra(e) {

    if (materiaPrima.user.saldo > e.compra) {


      setMateriaPrima(prevState => ({
        ...prevState,

       user: {saldo: materiaPrima.user.saldo - e.compra},

        materiaprima: prevState.materiaprima.map(item => {
          if (item.id !== e.id) {
            return item
          }

          return {
            ...item,
            estoque: item.estoque + 1,

          }
        })
      }))
    } 
  }


 useEffect(() => {
 
       }, [])
  

  return (
    <div className="divMaterial">



      <p className="saldo">
        {' $  ' + materiaPrima.user.saldo.toFixed(2)}
      </p>
 

      <div className='materiaPrima'>
        {materiaPrima.materiaprima.map((e, i) => (
          
          <div className='cardMateriaPrima' key={i}>


            <div className='nomeEstoque'>
              < div className='nomeMateriaPrima' > {e.nome}</div>
              <div className='estoqueMateriaPrima'>{e.estoque}</div>
            </div>

     

            <img className='imgMateriaPrima'
                src={process.env.PUBLIC_URL + '/MateriaPrima/' + e.img}/>






            <div className='divCompraVende'>

              <div className='divVende' onClick={() => {
                FnVender(e)

              }}>
                Vender
                <div>{'$ ' + e.venda}</div>
              </div>


              <div className='divCompra' onClick={() => {
                FnCompra(e)
              }}>
                Comprar
                <div>{'$ ' + e.compra}</div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

