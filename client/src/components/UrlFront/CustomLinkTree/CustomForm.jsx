import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function CustomForm({ setCustom, custom }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: custom });

  const onSubmit = (data) => {
    setCustom({ ...custom, ...data });
  };

  useEffect(() => {
    const subscription = watch((data) => {
      setCustom({ ...custom, ...data });
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Background Color</p>
        <input type="color" placeholder="#ffffff" {...register("bg")} />
        <p className="text-red-500 p-2">{errors?.bg?.message}</p>
        <p>Top Padding With Units</p>
        <input type="text" placeholder="40px" {...register("pt")} />
        <br />
        <br />
        <p>Border Radius</p>
        <input
          type="range"
          placeholder="5px"
          min="0"
          max="50"
          {...register("profile.borderRadius")}
        />
        <p className="text-red-500 p-2">
          {errors?.profile?.borderRadius?.message}
        </p>
        <p>Profile Picture Height And Width With Units</p>
        <input
          type="text"
          placeholder="100px"
          className="mr-1"
          {...register("profile.width")}
        />
        <input
          type="text"
          placeholder="100px"
          {...register("profile.height")}
        />
        <br /> <br />
        <p>Border Color</p>
        <input
          type="color"
          placeholder="#ffffff"
          {...register("profile.borderColor")}
        />
        <br />
        <br />
        <p>Border Width</p>
        <input
          type="text"
          placeholder="Profile Border Width"
          className="ml-1"
          {...register("profile.border")}
        />
        <p className="text-red-500 p-2">
          {errors?.profile?.borderColor?.message ||
            errors?.profile?.border?.message}
        </p>
        <input
          type="color"
          placeholder="Title Color"
          {...register("title.color")}
        />
        <input
          type="text"
          placeholder="Background Color"
          className="ml-1"
          {...register("title.size")}
        />
        <p className="text-red-500 p-2">{errors?.title?.color?.message}</p>
        <input
          type="text"
          placeholder="Background Color"
          {...register("bio.color", {
            pattern: {
              value: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
              message: "Provide A Valid Hex Code",
            },
          })}
        />
        <input
          type="text"
          placeholder="Background Color"
          className="ml-1"
          {...register("bio.size")}
        />
        <p className="text-red-500 p-2">{errors?.bio?.color?.message}</p>
        <input
          type="text"
          placeholder="Link Color"
          {...register("link.color", {
            pattern: {
              value: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
              message: "Provide A Valid Hex Code",
            },
          })}
        />
        <input
          type="text"
          placeholder="Link Background"
          className="ml-1"
          {...register("link.bg", {
            pattern: {
              value: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
              message: "Provide A Valid Hex Code",
            },
          })}
        />
        <input
          type="text"
          placeholder="Link Size"
          className="ml-1"
          {...register("link.size")}
        />
        <p className="text-red-500 p-2">{errors?.bio?.color?.message}</p>
        <input
          type="range"
          placeholder="borderRadius"
          min="0"
          max="50"
          {...register("link.borderRadius")}
        />
        <br /> <br />
        <input
          type="text"
          placeholder="Background Color"
          {...register("link.borderColor", {
            pattern: {
              value: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
              message: "Provide A Valid Hex Code",
            },
          })}
        />
        <input
          type="text"
          placeholder="Top Padding With Units"
          className="ml-1"
          {...register("link.border")}
        />
        <p className="text-red-500 p-2">
          {errors?.link?.borderColor?.message || errors?.link?.border?.message}
        </p>
        {/* <input
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        /> */}
      </form>
    </>
  );
}

/*
  const [custom, setCustom] = useState({
    bg: "#000000",
    pt: "40px",
    profile: {
      width: "200px",
      height: "200px",
      borderRadius: "50%",
      border: "3px",
      borderColor: "#ffffff",
    },
    title: {
      color: "#ffffff",
      size: "30px",
    },
    bio: {
      color: "#ffffff",
      size: "18px",
    },
    link: {
      bg: "#222222",
      size: "16px",
      color: "#ffffff",
      border: "4px",
      borderColor: "black",
      borderRadius: "20px",
    },
  });
*/
