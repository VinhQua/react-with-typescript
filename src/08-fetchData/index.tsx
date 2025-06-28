import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./config";

const Component = () => {
  const { isError, isLoading, error, data } = useQuery({
    queryKey: ["tours"],
    queryFn: fetchData,
  });
  if (isLoading)
    return (
      <div className="flex  items-center justify-center h-screen gap-2 bg-gray-100">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  if (isError)
    return (
      <div className="flex  items-center justify-center h-screen gap-2 bg-gray-100">
        <p className="text-red-500">Error fetching data: {error.message}</p>
      </div>
    );

  return (
    <div className="flex  items-center justify-center h-screen gap-4 flex-wrap bg-gray-100">
      {data?.map((tour) => {
        const { id, name, image, info, price } = tour;
        return (
          <div key={id} className="card bg-base-100 w-96 h-96 shadow-sm">
            <figure>
              <img src={image} alt="Tour" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {name}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{info.length > 100 ? `${info.substring(0, 100)}...` : info}</p>
              <div className="card-actions justify-between items-center">
                <span className="badge badge-outline badge-success">
                  ${price}
                </span>
                <button className="btn btn-primary" type="button">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Component;
