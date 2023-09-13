import { getBeers } from "../services/getBeersService.ts";

export default async ({ response }) => {
  response.body = await getBeers();
};
