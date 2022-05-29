import React, { useEffect, useState } from "react";
import { useMateriaPrima } from "../context/materiaprima";
var vSaldo = 2
var contaObjetivo = 0;
const textoObjetivo = [
  ' Obtenha um capital de $ 10.00',
  ' Compre 2 unidades de plástico',
  ' Estoque e venda 5 unidaddes de garrafão',
  ' Venda nessa ordem: 2 engrenagens, 10 caixas e 2 garrafões',
  ' Obtenha uma capital de $ 10000.00',
  ' PARABENS !!! - Missão Comcluida - Jogo desenvoldido por Ricardo Zuqueto '

]



export function Saldo() {

  const { materiaPrima, setMateriaPrima } = useMateriaPrima()
  const [objetivo, setObjetivo] = useState(textoObjetivo[0])




  function Fnlevel() {


    if (materiaPrima.user.saldo >= 10 && contaObjetivo === 0) {
      setObjetivo(textoObjetivo[1])
      contaObjetivo = 1

      setMateriaPrima(prevState => ({
        ...prevState,

        materiaprima: prevState.materiaprima.map(item => {
          if (item.id == 1) {
            return {
              ...item,
              trava: item.trava = false,
            }
          }

          return item
        })
      }))
    }


    if (materiaPrima.materiaprima[1].estoque >= 2 && contaObjetivo === 1) {
      setObjetivo(textoObjetivo[2])
      contaObjetivo = 2

      setMateriaPrima(prevState => ({
        ...prevState,

        fabricacao: prevState.fabricacao.map(item => {
          if (item.id == 1) {
            return {
              ...item,
              trava: item.trava = false,
            }
          }

          return item
        })
      }))
    }


    if (materiaPrima.fabricacao[1].estoque >= 5 && contaObjetivo === 2) { contaObjetivo = 3 }
    if (materiaPrima.fabricacao[1].estoque === 0 && contaObjetivo === 3) {
      contaObjetivo = 4

      setObjetivo(textoObjetivo[3])


      setMateriaPrima(prevState => ({
        ...prevState,

        materiaprima: prevState.materiaprima.map(item => {
          if (item.id == 2) {
            return {
              ...item,
              trava: item.trava = false,
            }
          }

          return item
        }),
        fabricacao: prevState.fabricacao.map(item => {
          if (item.id == 2) {
            return {
              ...item,
              trava: item.trava = false,
            }
          }

          return item
        })
      }))
    }


    if (materiaPrima.fabricacao[2].estoque >= 2 && contaObjetivo === 4) { contaObjetivo = 5 }
    if (materiaPrima.fabricacao[2].estoque === 0 && contaObjetivo === 5) { contaObjetivo = 6 }

    if (materiaPrima.fabricacao[0].estoque >= 10 && contaObjetivo === 6) { contaObjetivo = 7 }
    if (materiaPrima.fabricacao[0].estoque === 0 && contaObjetivo === 7) { contaObjetivo = 8 }

    if (materiaPrima.fabricacao[1].estoque >= 2 && contaObjetivo === 8) { contaObjetivo = 9 }
    if (materiaPrima.fabricacao[1].estoque === 0 && contaObjetivo === 9) {
      contaObjetivo = 10

      setObjetivo(textoObjetivo[4])


      setMateriaPrima(prevState => ({
        ...prevState,

        materiaprima: prevState.materiaprima.map(item => {
          if (item.id == 3) {
            return {
              ...item,
              trava: item.trava = false,
            }
          }

          return item
        }),
        fabricacao: prevState.fabricacao.map(item => {
          if (item.id == 3) {
            return {
              ...item,
              trava: item.trava = false,
            }
          }

          return item
        })
      }))


    }

    if (materiaPrima.user.saldo >= 10000 && contaObjetivo === 10) {
      setObjetivo(textoObjetivo[5])

    }





  }







  function FnTrans() {

    if (vSaldo >= materiaPrima.user.saldo) {
      document.getElementsByClassName('saldo')[0].classList.add('transMenos')
      setTimeout(() => {

        document.getElementsByClassName('saldo')[0].classList.remove('transMenos')
      }, 300);
    }
    if (vSaldo <= materiaPrima.user.saldo) {
      document.getElementsByClassName('saldo')[0].classList.add('transMais')
      setTimeout(() => {

        document.getElementsByClassName('saldo')[0].classList.remove('transMais')
      }, 300);
    }


    vSaldo = materiaPrima.user.saldo

  }





  useEffect(() => {
    console.log(contaObjetivo)
    Fnlevel()
    FnTrans()

  }, [materiaPrima.user.saldo])


  return (
    <div className="divMaterial">



      <p className="saldo" >
        {' $  ' + materiaPrima.user.saldo.toFixed(2)}
      </p>

      <p className="objetivo">

        {objetivo}

      </p>

    </div>
  );
}

