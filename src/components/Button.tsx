import Image from "next/image"

type ButtonProps = {
    type: "button" | "submit";
    title: string;
    icon?: string;
    variant: "btn_dark_green"

}

const Button = ({ type, title, icon, variant}: ButtonProps ) => {
  return (
    <button className={`gap-3 rounded-full border flex items-center justify-center ${variant}`} type={type}>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="whitespace-nowrap text-[16px] font-[700]">{title}</label>
    </button>
  )
}

export default Button
