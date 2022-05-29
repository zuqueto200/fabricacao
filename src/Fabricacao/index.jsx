import React, { useEffect, useState } from "react";
import { useMateriaPrima } from "../context/materiaprima";

export function Fabricacao() {

  const { materiaPrima, setMateriaPrima } = useMateriaPrima()







  function FnFabricar(e) {

    if (materiaPrima.user.saldo >= e.fabricar) {

      var liberaFabricacao = true
      for (let x = 0; x < e.material.length; x++) {

        const IDmp = e.material[x].id

        if (materiaPrima.materiaprima[IDmp].estoque < e.material[x].estoque) {
          liberaFabricacao = false
        }
      }

      if (liberaFabricacao === true) {

        setMateriaPrima(prevState => ({

          ...prevState,

          user: { saldo: materiaPrima.user.saldo - e.fabricar },


          //////////////////////////


          materiaprima: prevState.materiaprima.map((item) => {
            const materialStock = e.material.find((mat) => item.id === mat.id);

            if (materialStock?.id === item.id) {
              return {
                ...item,
                estoque: item.estoque - materialStock.estoque,
              };
            }

            return item;
          }),


          ////////////////////////// 


          fabricacao: prevState.fabricacao.map(item => {
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
  }









  function FnVender(e) {

    if (materiaPrima.fabricacao[e.id].estoque > 0) {

      setMateriaPrima(prevState => ({
        ...prevState,

        user: prevState.user = { saldo: materiaPrima.user.saldo + e.venda * e.estoque },

        fabricacao: prevState.fabricacao.map(item => {
          if (item.id !== e.id) {
            return item
          }

          return {
            ...item,
            estoque: item.estoque = 0,
          }
        })
      }))

    }


  }

  return (
    <div className="divMaterial">






      <div className='materiaPrima'>
        {materiaPrima.fabricacao.map((e, i) => e.trava === false && (

          <div className='cardMateriaPrima' key={i}>


            <div className='nomeEstoque'>
              < div className='nomeMateriaPrima' > {e.nome}</div>
              <div className='estoqueMateriaPrima'>{e.estoque}</div>
            </div>


            <div className="imgLista">
              <img className='imgMateriaPrima'
                src={process.env.PUBLIC_URL + '/MateriaPrima/' + e.img} />


              <div className="listaItem">

                {e.material.map((item) =>

                  <div className="linhaItem" key={item.id}>
                    <div>
                      {item.nome}
                    </div>
                    <div className="estoqueItem">

                      {item.estoque + '/'}
                      {materiaPrima.materiaprima[item.id].estoque}
                    </div>
                  </div>

                )}

              </div>
            </div>





            <div className='divCompraVende'>

              <div className='divVende' onClick={() => {
                FnVender(e)

              }}>

                <div>{'$ ' + e.venda.toFixed(2)}</div>
                <div>{'$ ' + (e.venda * e.estoque).toFixed(2)}</div>

              </div>


              <div className='divCompra' onClick={() => {
                FnFabricar(e)
              }}>
                FABRICAR
                <div>{'$ ' + e.fabricar.toFixed(2)}</div>

              </div>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
}

