import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
const GitHub = () => {
  const data = useLoaderData();
  return (
    <div className="mt-12 bg-orange-950">
      <div className="mx-auto max-w-[1200px] p-5 flex bg-gray-300 text-lg gap-5">
        <img src={data.avatar_url} alt="" />
        <div className="flex flex-col py-4">
          <span className="">
            {" "}
            <span className="font-bold">Name:</span>
            {data.name}
          </span>
          <span>
            <span className="font-bold">Id:</span> {data.id}
          </span>
          <span>
            <span className="font-bold">Followers:</span> {data.followers}
          </span>
          <span>
            <span className="font-bold">Company: </span>{" "}
            {data.company || "No company"}
          </span>
          <span>
            <span className="font-bold">Repo Urls: </span> {data.repos_url}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GitHub;

export const gitHubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/mahad-dev");
  console.log(response);
  return response.json();
};
