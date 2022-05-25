import React, { useEffect, useState } from "react";
import './index.css'
import { useMateriaPrima } from "../context/materiaprima";
import json from '../materiaprima.json'

export function Fabricacao() {

  const { materiaPrima, setMateriaPrima } = useMateriaPrima()

  function FNTESTE() {


 setMateriaPrima((e)=> e, console.log(e))




  }


 

  function FnFabricar(e) {

    if (materiaPrima.user.saldo > e.fabricar) {

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


          // materiaprima: prevState.materiaprima.map(item => {

          //    e.material.map((mat) => {

          //     if (item.id === e.mat) {
          //       return { ...item, estoque: item.estoque - mat.estoque }
          //     }
          //   }

          //   )

          // }
          // ),


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




  useEffect(() => {
    FNTESTE()
    // console.log('USE EFF = ', materiaPrima.materiaprima)
  }, [])








  function FnVender() { }

  return (
    <div className="divMaterial">


      <div className="divMaterial">




        <div className='materiaPrima'>
          {materiaPrima.fabricacao.map((e, i) => (

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
                  <div>{'$ ' + e.venda}</div>
                </div>


                <div className='divCompra' onClick={() => {
                  FnFabricar(e)
                }}>
                  FABRICAR
                  <div>{'$ ' + e.fabricar}</div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

