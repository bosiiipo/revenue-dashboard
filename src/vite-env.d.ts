/// <reference types="vite/client" />

// Allow importing SVGs as React components using ?react
declare module "*.svg?react" {
  import * as React from "react";
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
