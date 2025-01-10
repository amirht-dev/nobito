import { wait } from "@/utils/helpers";

export type State = {
  name: string;
  center: string;
  latitude: string;
  longitude: string;
  id: number;
};

export type City = {
  name: string;
  state: string;
  latitude: string;
  longitude: string;
  id: number;
};

export async function fetchStates() {
  const res = await fetch("https://iran-locations-api.ir/api/v1/fa/states");

  if (!res.ok) throw new Error("failed to fetch states");

  const states: State[] = await res.json();

  return states;
}

export async function fetchStateCities(stateId: string) {
  const res = await fetch(
    `https://iran-locations-api.ir/api/v1/fa/cities?state_id=${stateId}`,
  );

  if (!res.ok) throw new Error(`failed to fetch cities of ${stateId} state`);

  const cities: City[] = await res.json();

  return cities;
}
