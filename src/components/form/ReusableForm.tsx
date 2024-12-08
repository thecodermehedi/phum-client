import { ReactNode } from "react"
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form"

type TFormConfig = {
 defaultValues?: Record<string, any>
}

type TReusableForm = {
 onSubmit: SubmitHandler<FieldValues>
 children: ReactNode,
 className?: string
} & TFormConfig

const ReusableForm = ({ onSubmit, children, defaultValues, className }: TReusableForm) => {
 const formConfig: TFormConfig = {}
 if (defaultValues) {
  formConfig['defaultValues'] = defaultValues;
 }
 const methods = useForm(formConfig);
 return (
  <FormProvider {...methods}>
   <form onSubmit={methods.handleSubmit(onSubmit)} className={className}>{children}</form>
  </FormProvider>
 )
}

export default ReusableForm

