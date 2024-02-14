'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import * as React from 'react';

export interface IDefaultProviderProps {
  children: React.ReactNode
}

export default function DefaultProvider ({children}: IDefaultProviderProps) {
  const client = new QueryClient()
  return (
    <ThemeProvider enableSystem attribute='class' defaultTheme='system'>
      <QueryClientProvider client={client}>
        {children}
      </QueryClientProvider>
    </ThemeProvider>

  );
}
