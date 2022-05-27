import { Fabricacao } from '../Fabricacao';
import { Material } from '../Material';
import { Saldo } from '../Saldo';
import './index.css'



export function Build() {





    return (
        <div className="divBuild">
            <Saldo />
            <Material />
            <Fabricacao />

        </div>
    );
}

