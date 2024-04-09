import React from 'react';
import { useRouteError } from 'react-router-dom';

/* 
   TODO: create a error type for this error, and inherit the type below
   {
      status: 401,
      statusText: "",
      error: {
         message: ""
      }
   }
*/
const PageNotFound = () => {
   const err: any = useRouteError();
   return (
      <div>
         <div style={{ textAlign: "center" }}>
            <h1>
               {err?.status} : {err?.statusText}
            </h1>
            <h2>{err?.error?.message}</h2>
         </div>
      </div>
   );
};

export default PageNotFound;