export interface SelectProps {
  data: SelectItem[];
  multiple?: boolean;
  needCheckbox?: boolean;
  needSearch?: boolean;
  searchParam?: string;
  handleChange?: (item: SelectItem[]) => void;
}

export type SelectItem = {
  title: string;
  value: string;
  [key: string]: string | number | boolean;
} & { selected?: boolean };

export const dummySelectData: SelectItem[] = [
  {
    title: "Option 6",
    value: "option6",
  },
  {
    title: "Option 5",
    value: "option5",
  },
  {
    title: "Option 4",
    value: "option4",
  },
  {
    title: "Option 3",
    value: "option3",
  },
  {
    title: "Option 2",
    value: "option2",
  },
  {
    title: "Option 1",
    value: "option1",
  },
];
