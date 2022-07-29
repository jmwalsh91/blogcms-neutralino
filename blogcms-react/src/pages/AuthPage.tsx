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
import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import { sbClient } from '../services/sb';
import { theme } from '../styles/theme';
/**
 * Interfaces and types
 */

  
  
  
  export function AuthPage() {
    const [registerPage, setRegisterPage] = useState<boolean>(false)


    return (
      <div style={{
        minHeight: 900,
      backgroundSize: 'cover',
      backgroundImage:
        'url(https://images.unsplash.com/photo-1621237023000-6a628c285938?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)'
      }}>
        <Paper style={{
          borderRight: `1px solid ${
      theme.colors.white}`,
          minHeight: 900,
          maxWidth: 450,
          paddingTop: 80,
      
          [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            maxWidth: '100%',
          }
        }} radius={0} p={30}>
          {registerPage === false? <LoginForm /> : <RegisterForm />}
        </Paper>
      </div>
    );
  }
  