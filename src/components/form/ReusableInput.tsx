import { ReactNode } from "react";
import { Controller } from "react-hook-form";

type TInputProps = {
 type: string;
 name: string,
 label: string,
 required?: boolean,
 children?: ReactNode,
 className?: string,
 [props: string]: any
}

const ReusableInput = ({ type, name, label, required = false, children, className, ...props }: TInputProps) => {
 // const { register } = useFormContext();
 const labelClassName = "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
 const inputClassName = "flex h-10 w-full rounded-md border border-input bg-gray-100 px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:bg-white focus-visible:outline-none focus-visible:border focus-visible:border-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
 return (
  <div className={className}>
   {label && <label htmlFor={name} className={labelClassName}>{label}</label>}
   {/* <input type={type} id={name} {...register(name, { required })} className={inputClassName} {...props} /> */}
   <Controller name={name} render={({ field }) => <input type={type} id={name} {...field} className={inputClassName} required={required} {...props} />} />
   {children}
  </div>
 )
}

export default ReusableInput
