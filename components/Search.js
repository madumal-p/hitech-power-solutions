import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  function handleSubmit(event) {
    event.preventDefault();
    router.push(`/search?query=${searchTerm}`);
  }
  useEffect(() => {
    if (router.query.query) {
      setSearchTerm(router.query.query);
    }
  }, [router]);
  return (
    <React.Fragment>
      <form className="relative" onSubmit={handleSubmit}>
        <input
          placeholder="Search Products"
          name="search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="w-full absolute top-0 left-0 py-3 px-4 border-2 outline-0 border-black border-solid"
        />
        <button
          type="submit"
          className="absolute right-0 bg-black text-white p-4"
        >
          <BsSearch size={20} />
        </button>
      </form>
    </React.Fragment>
  );
}
