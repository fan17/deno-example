import { getBeers } from "root/services/getBeersService.ts";

export default async ({ response }) => {
  response.body = await getBeers();
};
