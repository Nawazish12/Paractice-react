import React from "react";
import { Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const HookInput = ({ control, errors, name, defaultValue, type }) => {
  return (
    <div>
      <Controller
        render={({ field }) => (
          <input
            {...field}
            type={type}
            className="w-60 py-2 rounded-md text-white bg-blue-300"
          />
        )}
        name={name}
        control={control}
        defaultValue={defaultValue}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <p className="text-red-600">{message}</p>}
      />
    </div>
  );
};

export default HookInput;
