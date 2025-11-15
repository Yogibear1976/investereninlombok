"use client";

import { useEffect } from "react";
import React from "react";
import { EmptyState } from "@/components/errorstate/empty-state";

interface ErrorStateProps {
  error: Error;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <EmptyState title='Uh Oh' subtitle='Er ging iets mis!' />;
};

export default ErrorState;
