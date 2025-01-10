"use client";

import Button from "@/components/atoms/buttons/Button";
import { Field, FieldLabel, Input } from "@/components/atoms/Input";
import {
  Select,
  SelectEmpty,
  SelectFieldInput,
  SelectLoading,
  SelectOptionsListAsync,
} from "@/components/molcules/Select";
import { fetchStateCities, fetchStates } from "@/services/locationsApi";
import { useState } from "react";

const AccountForm = () => {
  return (
    <form>
      <div className="grid gap-3 lg:grid-cols-2 lg:gap-6">
        <Field>
          <FieldLabel htmlFor="name">نام</FieldLabel>
          <Input fullWidth id="name" />
        </Field>

        <Field>
          <FieldLabel htmlFor="family-name">نام خانوادگی</FieldLabel>
          <Input fullWidth id="family-name" />
        </Field>

        <Field>
          <FieldLabel htmlFor="national-code">کدملی</FieldLabel>
          <Input fullWidth id="national-code" />
        </Field>

        <Field>
          <FieldLabel htmlFor="phone-number">شماره تلفن</FieldLabel>
          <Input fullWidth id="phone-number" />
        </Field>

        <LocationFields />
      </div>

      <div className="mt-6 flex gap-4 max-lg:flex-col lg:mt-10 lg:items-center lg:justify-between lg:gap-10">
        <p className="text-label-2 font-normal text-primary-500">
          برای تغییر هر بخش از اطلاعات کافی است به روی آن کلیک کنید و پس از
          اعمال تغییرات بر روی دکمه ذخیره کلیک کنید
        </p>

        <Button type="submit" size="md">
          ذخیره تغییرات
        </Button>
      </div>
    </form>
  );
};

export default AccountForm;

function LocationFields() {
  const [state, setState] = useState<string>("");
  const [city, setCity] = useState<string>("");

  return (
    <>
      <Select value={state} onChange={setState}>
        <SelectFieldInput
          id="state"
          value={state?.split("-")[1]}
          label="استان"
        />

        <SelectOptionsListAsync
          queryKey={["states"]}
          loadOptionsFn={async () =>
            (await fetchStates()).map((state) => ({
              value: `${state.id}-${state.name}`,
              label: state.name,
            }))
          }
        >
          <SelectEmpty>not found</SelectEmpty>
          <SelectLoading>loading states...</SelectLoading>
        </SelectOptionsListAsync>
      </Select>

      <Select value={city} onChange={setCity}>
        <SelectFieldInput
          id="city"
          label="شهر"
          value={city?.split("-")[1]}
          disabled={!state}
        />

        <SelectOptionsListAsync
          queryKey={[state, "cities"]}
          loadOptionsFn={async () =>
            (await fetchStateCities(state.split("-")[0])).map((city) => ({
              value: `${city.id}-${city.name}`,
              label: city.name,
            }))
          }
        >
          <SelectEmpty>not found</SelectEmpty>
          <SelectLoading>loading states...</SelectLoading>
        </SelectOptionsListAsync>
      </Select>
    </>
  );
}
