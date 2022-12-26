import React from "react";
import { useSelector } from "react-redux";
import { AiTwotoneDelete } from "react-icons/ai";
import { TbEdit } from "react-icons/tb";
import { CgAdd } from "react-icons/cg";
import PostListDialog from "./PostListDialog";
import { useState } from "react";
import { delList, singleListGet } from "../features/TestSlice";
import { useDispatch } from "react-redux";

const GetList = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState("add");
  const [open, setOpen] = useState(false);
  function handleClose() {
    setOpen(!open);
    setType("add");
  }
  function handleOpen() {
    setOpen(!open);
  }
  const getDetails = useSelector((state) => state?.dashborad?.data);
  return (
    <div>
      <div className="flex justify-start px-10 my-5">
        <CgAdd
          size={35}
          className="text-blue-700 cursor-pointer"
          onClick={() => {
            setType("add");
            handleOpen();
          }}
        />
      </div>

      <div className="flex space-x-3 flex-wrap mt-3 ">
        {getDetails.map((sData, i) => {
          return (
            <div key={i} className="">
              <div className="w-96 p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {sData.name}
                </h5>

                <p className="mb-3 text-gray-700 dark:text-gray-400 font-semibold text-lg">
                  {sData.capital}
                </p>
                <p className="mb-3 text-gray-700 dark:text-gray-400 font-semibold text-lg">
                  {sData.population}
                </p>
                <p className="mb-3 text-gray-700 dark:text-gray-400 font-semibold text-lg">
                  {sData.language}
                </p>

                <div className="flex justify-between px-5 mt-5">
                  <TbEdit
                    size={25}
                    className="text-green-700 cursor-pointer"
                    onClick={() => {
                      dispatch(singleListGet(sData?.id));
                      handleOpen();
                      setType("edit");
                    }}
                  />
                  <AiTwotoneDelete
                    size={25}
                    onClick={() => {
                      dispatch(delList(sData?.id));
                    }}
                    className="text-red-600 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          );
        })}
        {open && (
          <PostListDialog
            open={open}
            handleClose={handleClose}
            handleOpen={handleOpen}
            type={type}
          />
        )}
      </div>
    </div>
  );
};

export default GetList;
