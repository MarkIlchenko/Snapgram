import * as u from "zod"

export const SignupValidation = u.object({
  name: u.string().min(2, { message: 'Too short' }),
  username: u.string().min(2, { message: 'Too short' }),
  email: u.string().email(),
  password: u.string().min(8, { message: 'Password must be at least 8 characters.' }),
})

export const SigninValidation = u.object({
  email: u.string().email(),
  password: u.string().min(8, { message: 'Password must be at least 8 characters.' }),
})

export const PostValidation = u.object({
  caption: u.string().min(5).max(2200),
  file: u.custom<File[]>(),
  location: u.string().min(2).max(100),
  tags: u.string(),
})