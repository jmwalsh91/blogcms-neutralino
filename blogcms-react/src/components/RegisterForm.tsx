import {
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
  createStyles,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { UserCredentials } from "@supabase/supabase-js";
import { Dispatch, MouseEvent, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { sbClient } from "../services/sb";
/**
 * Types and Interfaces
 */
interface RegisterValues {
  email: string;
  password: string;
}

type Props = {
  setRegisterPage: Dispatch<SetStateAction<boolean>>
}

const useStyles = createStyles((theme) => ({
  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  logo: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    width: 120,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));
/**
 *
 * @function RegisterForm
 * Form for login with supabase auth (email strategy)
 * @returns form for user login
 */
export default function RegisterForm(){
  const classes = useStyles();
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  async function handleSubmit(values: RegisterValues) {
    console.log(values.email, values.password);
    const {user, session, error} = await sbClient.auth.signUp({
      email: values.email,
      password: values.password
  } as UserCredentials);
  }

  return (
    <>
      <Title order={2} align="center" mt="md" mb={50}>
        Register an account.
      </Title>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <TextInput
          label="Email address"
          placeholder="hello@gmail.com"
          size="md"
          required
          {...form.getInputProps("email")}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          mt="md"
          size="md"
          required
          {...form.getInputProps("password")}
        />
        <Button type="submit" fullWidth mt="xl" size="md">
          Register Account
        </Button>
      </form>

      <Text align="center" mt="md">
          Already have an account?{' '}
          <Anchor component={Link} to="/login" weight={700}>
            Login
          </Anchor>
        </Text>
    </>
  );
}
