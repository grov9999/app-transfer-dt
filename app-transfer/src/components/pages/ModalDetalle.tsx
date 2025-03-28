import { useState } from "react"
import { Button } from "../atom/Button"
import { BodyDetalle } from "../organismo/BodyDetalle"
import { HeaderBodyDetalle } from "../organismo/HeaderBodyDetalle"
import { HeaderDetalle } from "../organismo/HeaderDetalle"


export const ModalDetalle = () => {

    const [openModalDetalle, setOpenModalDetalle] = useState(false);

    const onReturn = () => {
        setOpenModalDetalle(false);

    }
    return (
        <>    <button type='submit' onClick={() => {
            console.log(openModalDetalle)
            setOpenModalDetalle(true);
        }
        }>Modal</button>

            {/*  {openModalDetalle &&
                <div className="fixed inset-0 flex items-center justify-center backdrop-blur-[0.7px]">
                    <div className="w-[50%] h-3/4 px-7 max-w-full">
                        <HeaderDetalle onReturn={onReturn} />
                        <div className=" w-full h-[85%] bg-gray-200 shadow-lg ">
                            <HeaderBodyDetalle />
                            <BodyDetalle />
                            <div className="flex justify-center space-x-4 pt-2">
                                <Button name='Aprobar' color='blue' />
                                <Button name='Rechazar' color='red' />
                                <Button name='Exportar PDF' color='gray' />
                            </div>
                        </div>
                    </div>
                </div>
            } */}
            {openModalDetalle && (
                <div className="fixed inset-0 flex items-center justify-center backdrop-blur-[0.7px]">
                    <div className="w-full max-w-2xl h-[85vh] max-h-[90vh] px-7">
                        <HeaderDetalle onReturn={onReturn} />
                        <div className="bg-gray-200 shadow-lg pb-5">
                            <HeaderBodyDetalle />
                            <BodyDetalle />
                        </div>
                        <div className="flex justify-center space-x-4 relative -top-3">
                            <Button name='Aprobar' color='blue' />
                            <Button name='Rechazar' color='red' />
                            <Button name='Exportar PDF' color='gray' />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

