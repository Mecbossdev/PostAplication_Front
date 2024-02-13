import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  value?: string | number,
  updateValue(value: any): void,
  placeholder?: string
}

export function InputComponent({
  type, 
  value, 
  updateValue, 
  placeholder, 
  className
}: InputProps) {
  return (
    <div>
      <input 
        type={type}
        className={className}
        value={value}
        placeholder={placeholder}
        onChange={event => updateValue(event.target.value)}
      />      
    </div>
  )

}