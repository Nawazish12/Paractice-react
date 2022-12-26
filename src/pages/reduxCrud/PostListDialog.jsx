import React from "react";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import { Controller, useForm } from "react-hook-form";
import { addList } from "../features/TestSlice";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

const PostListDialog = ({ open, handleClose, handleOpen, type }) => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {},
    mode: "onChange",
  });
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    const body = {
      ...data,
      id: uuidv4(),
    };
    console.log(body, "body");
    dispatch(addList(body));
  };
  const editDetails = useSelector((state) => state?.dashborad?.singleDetails);

  useEffect(() => {
    if (type === "edit") {
      reset(editDetails);
    }
  }, [editDetails, reset, type]);

  return (
    <>
      <div>
        <Modal
          isOpen={open}
          // onAfterOpen={afterOpenModal}
          onRequestClose={handleClose}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="header flex justify-between px-4">
            <h1>Add List</h1>
            <AiOutlineClose
              className="cursor-pointer "
              size={25}
              onClick={handleClose}
            />
          </div>
          {/* form modal */}
          <div className="flex flex-wrap my-10">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    className="bg-blue-400 w-96 mx-10 py-2 text-white"
                  />
                )}
              />
              <Controller
                name="capital"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    className="bg-blue-400 w-96 mx-10 py-2 text-white mt-8"
                  />
                )}
              />
              <Controller
                name="language"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    className="bg-blue-400 w-96 mx-10 py-2 text-white mt-8"
                  />
                )}
              />
              <Controller
                name="population"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    className="bg-blue-400 w-96 mx-10 py-2 text-white mt-8"
                  />
                )}
              />
              <div className="pl-10 mt-10 flex space-x-4">
                <button
                  type="submit"
                  class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                  Button
                </button>
                <button
                  onClick={handleClose}
                  class="bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default PostListDialog;

const customStyles = {
  content: {
    width: "500px",
    height: "500px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
