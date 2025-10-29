// components/FormInput.jsx
import { forwardRef } from "react";

const FormInput = forwardRef(function FormInput(
    {
        label,
        id,
        type = "text",
        hint,
        error,
        className = "",
        max, min, step,
        ...props
    },
    ref
) {
    const hintId = hint ? `${id}-hint` : undefined;

    return (
        <div className={`mb-6 ${className}`}>
            {label && (
                <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">
                    {label}
                </label>
            )}

            <input
                ref={ref}
                id={id}
                type={type}
                aria-invalid={!!error}
                aria-describedby={hintId}
                max={max ?? undefined}
                min={min}
                step={step}
                inputMode={type === "number" ? "numeric" : undefined}
                pattern={type === "number" ? "[0-9]*" : undefined}
                onWheel={(e) => type === "number" && e.currentTarget.blur()}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                    leading-tight focus:outline-none focus:shadow-outline
                    ${error ? "border-red-500" : ""}`}
                {...props}
            />

            <div className="flex items-center justify-between mt-1 h-5">
                {hint ? (
                    <span id={hintId} className="text-xs italic text-gray-400">
                        {hint}
                    </span>
                ) : <span />}
                {max != null && (
                    <span className="text-xs italic text-gray-400">max:{max}</span>
                )}
            </div>

            {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        </div>
    );
});

export default FormInput;
