import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { FormControl } from "../ui/form";

type DropdownSelectProps = {
  field: {
    onChange: (value: string) => void;
    value: string;
  };
  locale: string;
  value: string;
  data: Array<{ id: string; title: { ar: string; en: string } }>;
};

const DropdownSelect: React.FC<DropdownSelectProps> = ({
  field,
  locale,
  value,
  data,
}) => {
  return (
    <Select onValueChange={field.onChange} defaultValue={field.value}>
      <FormControl dir={locale === "ar" ? "rtl" : "ltr"}>
        <SelectTrigger>
          <SelectValue placeholder={value} />
        </SelectTrigger>
      </FormControl>
      <SelectContent dir={locale === "ar" ? "rtl" : "ltr"}>
        {data &&
          data.map((item, index) => (
            <SelectItem key={index} value={item?.id}>
              {locale === "ar" ? item?.title?.ar : item?.title?.en}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
};

export default DropdownSelect;
