import React, { useCallback, useContext, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { IAppContext, IHelpersService } from "../interfaces";
import { AppContext } from "../context/AppContext";

export interface ISelectCountryProps {
  options: any[];
  onChange: (val: any) => void;
  loading: boolean;
}

export default function SelectCountry({ options, onChange, loading }: ISelectCountryProps) {
  const [selected, setSelected] = useState({
    name: {
      common: "Select a country",
    },
  });
  const { helpers } = useContext<IAppContext>(AppContext);
  const { classNames }: IHelpersService = helpers;
  console.log("options", options[1]);
  const handleSelect = useCallback((val: any) => {
    onChange(val);
    setSelected(val);
  }, []);

  if (loading) {
    return (
      <>
        <h3 className="block  text-sm font-medium text-gray-100 max-w-xs w-full">Countries</h3>
        <div className="skeleton mr-2 h-10 w-full rounded-md overflow-hidden relative bg-gray-200 mt-1"></div>;
      </>
    );
  }

  return (
    <Listbox value={selected} onChange={handleSelect}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-gray-100 max-w-xs w-full">Countries</Listbox.Label>
          <div className="mt-1 relative z-50">
            <Listbox.Button className="relative h-10 w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <span className="block truncate">{selected.name.common}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
              {options.map((option: any, key: React.Key) => (
                <Listbox.Option
                  key={key}
                  className={({ active }) =>
                    classNames(active ? "text-white bg-indigo-600" : "text-gray-900", "cursor-default select-none relative py-2 pl-8 pr-4")
                  }
                  value={option}
                >
                  {({ selected, active }) => (
                    <>
                      <span className={classNames(selected ? "font-semibold" : "font-normal", "block truncate")}>{option.name.common}</span>

                      {selected ? (
                        <span
                          className={classNames(
                            active ? "text-white" : "text-indigo-600",
                            "absolute inset-y-0 left-0 flex items-center pl-1.5",
                          )}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </>
      )}
    </Listbox>
  );
}
