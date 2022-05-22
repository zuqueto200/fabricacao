import { useEffect, useState } from "react";
import './index.css'
import { useMateriaPrima } from "../context/materiaprima";


export function Material() {

  const { materiaPrima, setMateriaPrima } = useMateriaPrima()
  // var saldo = materiaPrima.user.saldo



  // function FnVender() {
  //   if (materiaPrima.papelao.estoque > 0) {

  //     setSaldo(saldo + materiaPrima.papelao.venda)
  //     materiaPrima.papelao.estoque--
  //   }
  // }



  function FnCompra(e) {
    // if (saldo >= e.compra) {

    // saldo = saldo - e.compra
    // e.estoque++



    // setUsers(users.filter((item, index) => index !== i))

 




  }
  // } 






  useEffect(() => {

    console.log(materiaPrima)


  }, [materiaPrima])


  return (
    <div className="App">
      {/* <p className="saldo">
        {' $ ' + saldo.toFixed(2)}
      </p> */}


      <div className='materiaPrima'>
        {materiaPrima.materiaprima.map((e, i) => (

          <div className='cardMateriaPrima' key={i}>


            <div className='nomeEstoque'>
              < div className='nomeMateriaPrima' > {e.nome}</div>
              <div className='estoqueMateriaPrima'>{e.estoque}</div>
            </div>


            <img className='imgMateriaPrima'
              src={e.img} />




            <div className='divCompraVende'>

              <div className='divVende' onClick={() => {
                // FnVender()

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
    </div >
  );
}

