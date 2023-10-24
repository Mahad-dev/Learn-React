import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../services/api";

const GitHub = () => {
  // let data = useLoaderData();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const gitHubInfoLoader = async (name) => {
    let response;
    try {
      setLoading(true);
      response = await apiRequest({
        endpoint: `github.com/users/${name ? name : "dev"}`,
      });
      setData(response);
    } catch (err) {
      console.log(err);
      setError(err.message)
      // navigate('play')
    }
    setLoading(false);
  };
  useEffect(() => {
    gitHubInfoLoader();
  }, []);

  return (
    <div className="mt-12 bg-slate-400">
      <div className="mx-auto my-5">
        <div class="rounded overflow-hidden flex justify-center">
          <input
            onKeyDown={(e) => e.key === "Enter" && gitHubInfoLoader(name)}
            onChange={(e) => setName(e.target.value)}
            type="text"
            class="px-4 py-2"
            placeholder="Search..."
          />

          <span
            onClick={() => gitHubInfoLoader(name)}
            class="cursor-pointer flex items-center justify-center px-4 border border-l"
          >
            <svg
              class="h-4 w-4 text-grey-dark"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </span>
        </div>
        {loading && <div className="mt-3 mx-auto w-6">Loading...</div>}
        {error && <div className="mt-3 mx-auto  text-red-600">User not found</div>}
      </div>
      <div className="mx-auto max-w-[1200px] p-5 flex bg-gray-300 text-lg gap-5">
        <img width={200} src={data?.avatar_url || ""} alt="alt" />
        <div className="flex flex-col py-4">
          <span className="">
            {" "}
            <span className="font-bold">Name:</span>
            {data?.name}
          </span>
          <span>
            <span className="font-bold">Id:</span> {data?.id}
          </span>
          <span>
            <span className="font-bold">Followers:</span> {data?.followers}
          </span>
          <span>
            <span className="font-bold">Company: </span>{" "}
            {data?.company || "No company"}
          </span>
          <span>
            <span className="font-bold">Repo Urls: </span> {data?.repos_url}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GitHub;

// export const gitHubInfoLoader = async (name) => {
//   let response;
//   console.log("kk", name);
//   try {
//     response = await apiRequest({
//       endpoint: `github.com/users/${
//         typeof name === "string" && name ? name : "dev"
//       }`,
//     });
//     console.log(response);
//   } catch (err) {
//     console.log(err);
//   }
//   return response || null;
// };
