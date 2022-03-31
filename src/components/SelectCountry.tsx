import React, { Fragment, useContext, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { IAppContext } from "../interfaces";
import { AppContext } from "../context/AppContext";
import ApiService from "../services/api.service";
const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
  { id: 7, name: "Caroline Schultz" },
  { id: 8, name: "Mason Heaney" },
  { id: 9, name: "Claudie Smitham" },
  { id: 10, name: "Emil Schaefer" },
];
const api = new ApiService();
export default function SelectCountry() {
  const [selected, setSelected] = useState(people[1]);
  const [options, setOptions] = useState([]);
  const { classNames } = useContext<IAppContext>(AppContext);
  console.log("rendrings");
  useEffect(() => {
    api.fetchAllCountries().then(res => {
      console.log(res);
      setOptions(res);
    });
  }, [selected]);
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-gray-100 max-w-xs w-full">Countries</Listbox.Label>
          <div className="mt-1 relative">
            <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <span className="block truncate">{selected.name}</span>
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
