"use client";

import React, { useState } from "react";
import SideNav from "../_ui/dashboard/sidenav";

import {
  Authenticator,
  View,
  useTheme,
  Theme,
  Text,
  Heading,
  useAuthenticator,
  Button,
  ThemeProvider,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import config from "@/amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
import ManandoAutoParts from "../_ui/manando-auto-parts";

Amplify.configure(config);

type Props = {
  children: React.ReactNode;
};

const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <ManandoAutoParts />
      </View>
    );
  },

  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          &copy; All Rights Reserved
        </Text>
      </View>
    );
  },

  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Sign in to your account
        </Heading>
      );
    },
    Footer() {
      const { toForgotPassword } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toForgotPassword}
            size="small"
            variation="link"
          >
            Reset Password
          </Button>
        </View>
      );
    },
  },
};

export default function Layout({ children }: Props) {
  const { tokens } = useTheme();
  const theme: Theme = {
    name: "Auth Example Theme",
    tokens: {
      components: {
        authenticator: {
          router: {
            boxShadow: `0 0 16px ${tokens.colors.overlay["10"]}`,
            borderWidth: "0",
          },
          form: {
            padding: `${tokens.space.medium} ${tokens.space.xl} ${tokens.space.medium}`,
          },
        },
        button: {
          primary: {
            backgroundColor: "#2563eb",
          },
          link: {
            color: "#2563eb",
          },
          _active: {
            color: "#CDE6F5",
          },
        },
        fieldcontrol: {
          _focus: {
            boxShadow: `0 0 0 2px #2563eb`,
          },
        },
      },
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Authenticator components={components} hideSignUp={true}>
        {({ signOut, user }) => (
          <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
              <SideNav onSignout={signOut} />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
              {children}
            </div>
          </div>
        )}
      </Authenticator>
    </ThemeProvider>
  );
}
