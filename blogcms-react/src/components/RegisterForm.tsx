import {
    TextInput,
    PasswordInput,
    Checkbox,
    Button,
    Title,
    Text,
    Anchor,
    createStyles,
  } from '@mantine/core';
import { useForm } from '@mantine/form';
import { UserCredentials } from '@supabase/supabase-js';
import { sbClient } from '../services/sb';
/**
 * Types and Interfaces
 */
interface RegisterValues {
    email: string
    password: string
}
type Props = {
    classes: Record<"form" | "title" | "wrapper" | "logo", string>
}
const useStyles = createStyles((theme) => ({
    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
  
    logo: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      width: 120,
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }));
/**
 * 
 * @function RegisterForm
 * Form for login with supabase auth (email strategy)
 * @returns form for user login
 */
export default function RegisterForm() {
    const form = useForm({
        initialValues: {
            email: '',
            password: ''
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
          },
    })
    async function handleSubmit (values: RegisterValues) {
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

