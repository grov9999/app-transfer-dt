interface TextAreaProps {
    isDisable?: boolean
}

export const TextArea = ({ isDisable }: TextAreaProps) => {
    return (
        <textarea className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 p-1" name="log" id="log" rows={3} disabled={isDisable}>

        </textarea>
    )
}

