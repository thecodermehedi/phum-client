import { Button } from 'antd'
import { toast } from 'sonner'
import { useState } from 'react'
import { FieldValues } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../redux/features/auth/authApi'
import { useAppDispatch } from '../redux/hook'
import { setUser, TUser } from '../redux/features/auth/authSlice'
import verifyToken from '../utils/verifyToken'
import ReusableForm from '../components/form/ReusableForm'
import ReusableInput from '../components/form/ReusableInput'

export default function LoginForm() {
 const dispatch = useAppDispatch();
 const navigate = useNavigate();
 const [showPassword, setShowPassword] = useState(false)
 const [login, { error }] = useLoginMutation()
 if (error) {
  console.error(error)
 }

 const defaultValues = {
  id: 'A-0001',
  password: 'admin123'
 }

 const onSubmit = async (data: FieldValues): Promise<void> => {
  const toastId = toast.loading('Logging in...')
  const userInfo = { id: data.id, password: data.password }
  try {
   const response = await login(userInfo).unwrap();
   const token = response.data.token
   const user = verifyToken(token) as TUser;
   dispatch(setUser({ user, token }))
   navigate(`/${user.role}/dashboard`);
   toast.success('Login successful', { id: toastId, duration: 2000 })
  } catch (error) {
   console.error('Failed to login', error)
   toast.error('Login failed', { id: toastId, duration: 2000 })
  }
 }

 return (
  <div className="flex min-h-screen items-center justify-center">
   <div className="w-full max-w-sm space-y-6 shadow-md border rounded-lg p-6">
    <div className="space-y-2">
     <h1 className="text-2xl font-bold">Login</h1>
     <p className="text-gray-500 dark:text-gray-400">
      Enter your credentials below to login
     </p>
    </div>
    <ReusableForm onSubmit={onSubmit} defaultValues={defaultValues} className='space-y-6'>
     <ReusableInput type="text" name="id" label="ID" className="space-y-1" required />
     <ReusableInput type={showPassword ? 'text' : 'password'} name='password' label='Password' placeholder="8-16 (A-Z, a-z, 0-9, @#$%)" minLength={8} maxLength={16} className="space-y-1 relative" required={true}>
      <button
       type="button"
       onClick={() => setShowPassword(!showPassword)}
       className="absolute right-3 top-11 -translate-y-1/2 text-gray-500"
       aria-label={showPassword ? "Hide password" : "Show password"}
      >
       {showPassword ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
         <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
        </svg>
       ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
         <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
         <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
       )}
      </button>
     </ReusableInput>
     <Button
      htmlType='submit'
      size='large'
      className='rounded-md text-sm font-medium transition-colors focus-visible:outline-none  disabled:pointer-events-none disabled:opacity-50 bg-black text-white w-full h-10'>Login</Button>
    </ReusableForm>
    <div className="mt-4 text-center text-sm">
     Don&apos;t have an account?{" "}
     <Link to="#" className="underline">
      Sign up
     </Link>
    </div>
   </div>
  </div>
 )
}

