import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import Highlighter from "react-highlight-words";

export default function Getpost() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jaintradeserver.onrender.com/getposts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const getFilteredPosts = () => {
    return posts.filter((post) => {
      const matchesFilter = filter ? post.category === filter : true;
      const matchesSearch = searchQuery
        ? post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
        : true;
      return matchesFilter && matchesSearch;
    });
  };

  return (
    <div>
      <div className="flex justify-center my-8">
        <div className="join join-vertical lg:join-horizontal">
          <input
            className="input input-bordered join-item"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <select
            className="select select-bordered join-item"
            value={filter}
            onChange={handleFilterChange}
          >
            <option value="">Filter</option>
            <option value="Coding Problems">Coding Problems</option>
            <option value="Tech Fact">Tech Fact</option>
            <option value="Learnings">Learnings</option>
          </select>
          <button className="btn btn-primary join-item">Search</button>
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="mt-4 flex flex-wrap justify-center">
          {getFilteredPosts().map((post) => (
            <div key={post.id} className="card m-2 bg-base-100 w-96 shadow-2xl shadow-black">
              <figure>
                <img src={post.image} alt="Post" />
              </figure>
              <div className="card-body break-words">
                <h2 className="card-title font-bold text-2xl">
                  <Highlighter
                    highlightClassName="highlight-green" // Custom class for green highlight
                    searchWords={[searchQuery]}
                    autoEscape={true}
                    textToHighlight={post.title}
                  />
                </h2>
                <p>
                  <Highlighter
                    highlightClassName="highlight-green" // Custom class for green highlight
                    searchWords={[searchQuery]}
                    autoEscape={true}
                    textToHighlight={post.subtitle}
                  />
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">{post.category}</div>
                  <Link
                    to={`/post/${post._id}`}
                    className="text-bold badge badge-secondary cursor-pointer"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
