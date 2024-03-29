import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1 className="font-bold text-4xl p-2 m-2">OOPS!!</h1>
      <h2 className="font-bold text-4xl p-2 m-2">Something went Error!!</h2>
      <h2 className="font-bold text-4xl p-2 m-2">
        {err.status + ":" + err.statusText}
      </h2>
    </div>
  );
};

export default Error;
