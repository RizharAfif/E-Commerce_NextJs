"use client"
import { store } from "@/store";
import { SessionProvider } from "next-auth/react";
import { Provider as ReduxProvider } from "react-redux";

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </SessionProvider>
  );
}

export default Provider;
