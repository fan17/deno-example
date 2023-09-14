import EntityNotFoundException from "root/exceptions/EntityNotFoundException.ts";

export default async ({ response }) => {
  throw new EntityNotFoundException();
};
