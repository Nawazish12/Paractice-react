import React from "react";
import { useForm } from "react-hook-form";
import HookInput from "./common/HookInput";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

let schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  secondName: yup.string().email().required(),
});

const About = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      firstName: "",
      secondName: "",
      lastName: "",
    },
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data, "data");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h className="pl-2">react hook form paractice</h>
        <div className="flex space-x-4 pl-2">
          <div>
            <HookInput name="firstName" control={control} errors={errors} />
          </div>
          <div>
            <HookInput
              name="secondName"
              control={control}
              errors={errors}
              defaultValue=""
            />
          </div>
          <div>
            <HookInput
              name="lastName"
              control={control}
              errors={errors}
              defaultValue=""
            />
          </div>
          <button className="w-24 py-2 rounded bg-green-400 text-white">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default About;
