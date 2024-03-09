export default function TextInput({
    label,
    name,
    register,
    errors,
    isRequired = true,
    type = "text",
    className = "sm:col-span-2",
    defaultValue=""
  }) {
    return (
      <div className={className}>
        <label
          for={name}
          className="block text-sm text-slate-500 dark:text-slate-50 font-medium leading-6  mb-2 "
        >
          {label}
        </label>
        <div className="mt-2">
          <input
            {...register(`${name}`, { required: isRequired },)}
            type={type}
            name={name}
            id={name}
            defaultValue={defaultValue}
            autoComplete={name}
            className="block w-full dark:text-slate-50 text-slate-500 rounded-md border-0
             py-3  shadow-sm ring-1 
             ring-inset ring-gray-300 placeholder:text-gray-400
              focus:ring-2 bg-slate-50 dark:bg-slate-800  focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
            placeholder={`Type the ${label.toLowerCase()}`}
          />
          {errors[`${name}`] && (
            <span className="text-sm text-red-600 ">{label} is required</span>
          )}
        </div>
      </div>
    );
  }