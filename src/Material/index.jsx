import React, { useEffect, useState } from "react";
import { useMateriaPrima } from "../context/materiaprima";

export function Material() {

  const { materiaPrima, setMateriaPrima } = useMateriaPrima()

  function FnVender(e) {

    if (materiaPrima.materiaprima[e.id].estoque > 0) {

      setMateriaPrima(prevState => ({
        ...prevState,

        user: { saldo: materiaPrima.user.saldo + e.venda },

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

        user: { saldo: materiaPrima.user.saldo - e.compra },

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
      <div className='materiaPrima'>
        {materiaPrima.materiaprima.map((e, i) => e.trava === false && (

          <div className='cardMateriaPrima' key={i}>





            <div className='nomeEstoque'>
              < div className='nomeMateriaPrima' > {e.nome}</div>
              <div className='estoqueMateriaPrima'>{e.estoque}</div>
            </div>



            <img className='imgMateriaPrima'
              src={process.env.PUBLIC_URL + '/MateriaPrima/' + e.img} />






            <div className='divCompraVende'>

              <div className='divVende' onClick={() => {
                FnVender(e)

              }}>
                Vender
                <div>{'$ ' + e.venda.toFixed(2)}</div>
              </div>


              <div className='divCompra' onClick={() => {
                FnCompra(e)
              }}>
                Comprar
                <div>{'$ ' + e.compra.toFixed(2)}</div>

              </div>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
}

