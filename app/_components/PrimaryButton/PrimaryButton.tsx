
interface ButtonProps {
    className: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    name: string;
}

export default function PrimaryButton({className,type,onClick,name}:ButtonProps) {
    return (
        <button
            className={`${className} font-oxanium font-bold border-[2px] border-brand-white text-brand-white rounded-lg bg-custom-purple-gradient `}
            type={type}
            onClick={onClick} >
            {name}
        </button>
    )
}