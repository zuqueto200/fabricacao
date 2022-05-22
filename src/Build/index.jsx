import { useMateriaPrima } from '../context/materiaprima';
import { Material } from '../Material';
import './index.css'



export function Build() {


    const { materiaPrima, setMateriaPrima } = useMateriaPrima()

 

    return (
        <div className="divBuild">

            <Material />

        </div>
    );
}

