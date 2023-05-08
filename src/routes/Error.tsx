import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div
        id="error-page"
        className="flex flex-col absolute justify-center items-center w-screen h-screen"
      >
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText}</i>
        </p>
      </div>
    );
  }

  return (
    <div
      id="error-page"
      className="flex flex-col absolute justify-center items-center w-screen h-screen"
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{"Unknown Error"}</i>
      </p>
    </div>
  );
}
