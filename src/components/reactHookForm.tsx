import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form";

function ReactHookForms() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    alert(JSON.stringify(data));

    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>react hook form</h1>
        <input
          {...register("userName", {
            required: "User Name is required",
            minLength: {
              value: 2,
              message: "😡User Name must be at least 2 characters",
            },
          })}
          placeholder="User Name"
          type="text"
        />
        {errors.userName && <p>{`${errors.userName.message}`}</p>}

        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "😡Invalid email address",
            },
          })}
          type="email"
          placeholder="Email"
        />
        {errors.email && <p>{`${errors.email.message}`}</p>}

        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message:
                "😡Password must contain a number, uppercase letter, lowercase letter, special character, and be 8-20 characters long",
            },
            maxLength: {
              value: 20,
              message: "😡Password cannot exceed 20 characters",
            },
            pattern: {
              value:
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.*[a-zA-Z]).{8,20}$/,
              message:
                "😡Password must contain a number, uppercase letter, lowercase letter, special character, and be 8-20 characters long",
            },
          })}
          type="password"
          placeholder="Password"
        />
        {errors.password && <p>{`${errors.password.message}`}</p>}

        <button hidden={!isValid} disabled={isSubmitting} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ReactHookForms;
