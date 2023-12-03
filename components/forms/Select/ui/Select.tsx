import { selectContext as SelectContext } from "../context";
import { useCallback, useEffect, useState } from "react";
import { SelectItem, SelectProps } from "../helper";
import Basic from "./Basic";

const Select = ({
  data,
  multiple = false,
  needCheckbox,
  handleChange,
}: SelectProps) => {
  const [options, setOptions] = useState<SelectItem[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setOptions(
      data.map((item) => ({
        ...item,
        selected: item?.selected || false,
        searchMatched: true,
      }))
    );
  }, [data]);

  const handleOpen = useCallback(
    (value: boolean) => {
      setOpen(value);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [open]
  );

  const handleSearch = useCallback(
    (value: string) => {
      if (!value.length) {
        setOptions(
          options.map((item) => ({
            ...item,
            selected: item?.selected || false,
            searchMatched: true,
          }))
        );
        return;
      }
      const regex = new RegExp(value, "i");
      const res = options.map((x) => {
        if (regex.test(x.title)) {
          return {
            ...x,
            searchMatched: true,
          };
        } else {
          return {
            ...x,
            searchMatched: false,
          };
        }
      });
      setOptions(res);
    },
    [options]
  );

  const removeItem = useCallback(
    (item: SelectItem) => {
      const newOptions = options.map((option: SelectItem) => {
        if (option.value === item.value) {
          return {
            ...option,
            selected: false,
          };
        }
        return option;
      });

      setOptions(newOptions);
      handleChange?.(newOptions);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [options]
  );

  const handleSelect = useCallback(
    (item: SelectItem) => {
      const isArray = Array.isArray(options);

      if (isArray && item && options.length) {
        if (multiple) {
          const newOptions = options.map((option: SelectItem) => {
            if (option.value === item.value) {
              return {
                ...option,
                selected: !option.selected,
              };
            }
            return option;
          });

          setOptions(newOptions);
          handleChange?.(newOptions);
        } else {
          const newOptions = options.map((option: SelectItem) => {
            if (option.value === item.value) {
              return {
                ...option,
                selected: true,
              };
            } else return { ...option, selected: false };
          });

          setOptions(newOptions);
          handleChange?.(newOptions);
        }
        return;
      } else console.warn("Supplied wrong type of array");
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [options, multiple]
  );

  return (
    <SelectContext.Provider
      value={{
        list: options,
        handleSelect,
        multiple: multiple || false,
        needCheckbox: needCheckbox || false,
        open,
        handleOpen,
        handleSearch,
        removeItem,
      }}
    >
      <Basic />
    </SelectContext.Provider>
  );
};

export default Select;
