import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Search() {
  const [formData, setFormData] = useState({ keyword: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({ keyword: "" });
    if (formData.keyword) navigate(`search/${formData.keyword}`);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={"flex flex-row flex-wrap"}>
        <input
          className="w-13 focus:w-50 sm:w-50 border-b-2 mr-2 border-b-gray-200 text-base text-gray-800 focus:border-b-gray-800 transition-all truncate outline-none"
          type="text"
          name="keyword"
          value={formData.keyword}
          onChange={handleChange}
          placeholder="Search"
        />
        <button
          type="submit"
          className="hover:text-gray-800 hover:inset-shadow-sm cursor-pointer text-xl text-gray-500 active:text-white active:bg-gray-800 rounded-md bg-gray-200 px-2 py-1 transition-all"
        >
          <i className="bx bx-search"></i>
        </button>
      </form>
    </>
  );
}
