interface buttonProps {
    name: string;
    color?: "blue" | "red" | "gray"; // Colores válidos;
    onRetun?: () => void;

}


export const Button = ({ name, color = "blue", onRetun }: buttonProps) => {
    const colors = {
        blue: "bg-blue-500 hover:bg-blue-700",
        red: "bg-red-500 hover:bg-red-700",
        gray: "bg-gray-400 hover:bg-gray-500",
    };
    return (
        <button className={`${colors[color]} text-white font-bold py-2 px-5 rounded text-sm `} onClick={onRetun}>
            {name}
        </button>
    )
}

