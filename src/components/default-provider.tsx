'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as React from 'react';

export interface IDefaultProviderProps {
  children: React.ReactNode
}

export default function DefaultProvider ({children}: IDefaultProviderProps) {
  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  );
}
