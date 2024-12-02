import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function LoginForm() {
 const [showPassword, setShowPassword] = useState(false)
 const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()

 const onSubmit = async () => {

 }

 return (
  <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
   <div className="w-full max-w-sm space-y-6">
    <div className="space-y-2 text-center">
     <h1 className="text-3xl font-bold">Login</h1>
     <p className="text-gray-500 dark:text-gray-400">
      Enter your credentials below to login to your account
     </p>
    </div>
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
     <div className="space-y-1">
      <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
       Email Address
      </label>
      <input
       id="email"
       type="email"
       placeholder="m@example.com"
       className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-2 focus-visible:border-black disabled:cursor-not-allowed disabled:opacity-50"
       {...register('email')}
      />
      <p className={`text-sm text-red-500 h-5 ${errors.email ? 'visible' : 'invisible'}`}>
       {String(errors?.email?.message) || 'Error placeholder'}
      </p>
     </div>
     <div className="space-y-1">
      <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
       Password
      </label>
      <div className="relative">
       <input
        id="password"
        type={showPassword ? "text" : "password"}
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-2 focus-visible:border-black disabled:cursor-not-allowed disabled:opacity-50"
        {...register('password')}
       />
       <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
        aria-label={showPassword ? "Hide password" : "Show password"}
       >
        {showPassword ? (
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
         </svg>
        ) : (
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
         </svg>
        )}
       </button>
      </div>
      <p className={`text-sm text-red-500 h-5 ${errors.password ? 'visible' : 'invisible'}`}>
       {String(errors?.password?.message) || 'Error placeholder'}
      </p>
     </div>
     <div className="flex items-center space-x-2">
      <input
       type="checkbox"
       id="rememberMe"
       {...register('rememberMe')}
       className="h-4 w-4 rounded border-gray-300 text-black"
      />
      <label htmlFor="rememberMe" className="text-sm text-gray-700">Remember me</label>
     </div>
     <button
      type="submit"
      disabled={isSubmitting}
      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none  disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-black/90 h-10 px-4 py-2 w-full"
     >
      {isSubmitting ? (
       <>
        <svg className="mr-2 h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Logging in...
       </>
      ) : (
       'Login'
      )}
     </button>
    </form>
    <div className="text-center text-sm">
     <a href="#" className="underline">
      Forgot password?
     </a>
    </div>
   </div>
  </div>
 )
}

