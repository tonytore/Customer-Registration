import React from "react";

export default function SelectInput({
  label,
  name,
  register,
  className = "sm:col-span-2 ",
  options = [],
  multiple
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm  font-medium leading-6 text-slate-900 dark:text-slate-50"
      >
        {label}
      </label>
      <div className="mt-2">
        <select
          {...register(`${name}`)}
          id={name}
          multiple={multiple}
          name={name}
          className="block dark:bg-slate-800 bg-slate-50 dark:text-slate-50
          text-slate-500 w-full rounded-md border-0 py-3
           shadow-sm ring-1 ring-inset
            ring-lime-300  focus:ring-2 
            focus:ring-inset focus:ring-lime-600
             sm:max-w-xs sm:text-sm sm:leading-6"
        >
          {options.map((option, i) => {
            return (
              <option key={i} value={option.id}>
                {option.title}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}