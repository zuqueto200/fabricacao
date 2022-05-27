 import { useMateriaPrima } from "../context/materiaprima";
 
export function Saldo() {

  const { materiaPrima, setMateriaPrima } = useMateriaPrima()
 
 

 
  return (
    <div className="divMaterial">
     
     <p className="saldo">
        {' $  ' + materiaPrima.user.saldo.toFixed(2)}
      </p>
 
    </div>
  );
}

