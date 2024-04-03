import { useRef, forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, inputType, handleOnChange },
  ref
) {
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {inputType && (
        <input
          ref={ref}
          onChange={handleOnChange}
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          type={inputType}
        />
      )}
      {!inputType && (
        <textarea
          ref={ref}
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          type={inputType}
          onChange={handleOnChange}
        ></textarea>
      )}
    </p>
  );
});

export default Input;
