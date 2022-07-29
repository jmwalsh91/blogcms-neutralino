import {
    Paper,
    createStyles,
    TextInput,
    PasswordInput,
    Checkbox,
    Button,
    Title,
    Text,
    Anchor,
  } from '@mantine/core';
import { useForm } from '@mantine/form';
import { UserCredentials } from '@supabase/supabase-js';
import { sbClient } from '../services/sb';
/**
 * Types and Interfaces
 */
interface LoginValues {
    email: string
    password: string
}
type Props = {
    classes: Record<"form" | "title" | "wrapper" | "logo", string>
}
/**
 * 
 * @function LoginForm
 * Form for login with supabase auth (email strategy)
 * @returns form for user login
 */
export default function LoginForm({classes}: Props) {
    const form = useForm({
        initialValues: {
            email: '',
            password: ''
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
          },
    })
    async function handleSubmit (values: LoginValues) {
        console.log(values.email, values.password)
        sbClient.auth.signIn(values as UserCredentials)
      } 
    return (
        <>
        <Title order={2} className={classes.title} align="center" mt="md" mb={50}>
        Welcome to BlogCMS
      </Title>
    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
      <TextInput label="Email address" placeholder="hello@gmail.com" size="md"
      required
      {...form.getInputProps('email')} />
      <PasswordInput label="Password" placeholder="Your password" mt="md" size="md"
      required
      {...form.getInputProps('password')} />
      <Button type="submit" fullWidth mt="xl" size="md">
        Login
      </Button>
    </form>

      <Text align="center" mt="md">
        Contact your administrator to request credentials.
        
      </Text>
      </>
    )
  }

