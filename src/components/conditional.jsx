import React from "react";

export default function Conditional({ condition, children}) {
    if (condition) return <>{children}</>;
    return <></>;
  }