import React from "react";

export interface ComponentProps {
  mainHeading: string;
  sideHeading: string;
  mainContent: React.ReactNode;
  sideContent: React.ReactNode;
}
