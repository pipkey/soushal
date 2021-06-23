import React from "react";
import { Preloader } from "../components/Preloader/Preloader";

function WithSuspense (Component: any) {
  return (props:any) => (
    <React.Suspense
      fallback = { <Preloader/> }>
        <Component {...props } />
    </React.Suspense>
  )
};

export default WithSuspense;
