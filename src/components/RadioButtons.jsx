import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

function RadioButtons(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <label>{label}</label>
      <div className="flex-row">
        <Field name={name}>
          {({ field }) => {
            return options?.map((option) => {
              return (
                <React.Fragment key={option.key}>
                  <div className="flex-box">
                    <input
                      type="radio"
                      id={option.value}
                      {...field}
                      {...rest}
                      value={option.value}
                      checked={field.value === option.value}
                    />
                    <label htmlFor={option.value}>{option.key}</label>
                  </div>
                </React.Fragment>
              );
            });
          }}
        </Field>
      </div>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default RadioButtons;
