interface TextAreaProps {
    isDisable?: boolean,
    tipo: string
}

export const TextArea = ({ isDisable = false,tipo }: TextAreaProps) => {
    return (
        <textarea className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 p-1" name={tipo} id={tipo} rows={3} disabled={isDisable}>
        </textarea>
    )
}

