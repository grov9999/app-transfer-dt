import { BodyAprobacion } from '../organismo/BodyAprobacion';
import { HeaderAprobacion } from '../organismo/HeaderAprobacion';
interface modalAprobacionHeader {
    onReturn?: () => void;
    setState: React.Dispatch<React.SetStateAction<boolean>>,

}

export const ModalAprobacion = ({ setState, onReturn }: modalAprobacionHeader) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-[0.7px]">
            <div className="w-full max-w-lg h-[85vh] max-h-[75vh] border-1 border-gray-300 rounded-xl shadow-lg pb-5">
                <HeaderAprobacion setState={setState} />
                <BodyAprobacion setState={setState} onRetun={onReturn}/>
            </div>
        </div>
    )
}

