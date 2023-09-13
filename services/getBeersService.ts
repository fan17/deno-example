import getBeersRepository from "../repositories/getBeersRepository.ts";

export const getBeers = async () => {
  const beers = await getBeersRepository.selectAll();

  return beers.rows.map((beer) => {
    return beers?.rowDescription?.columns.reduce((acc, el, i) => {
      acc[el.name as string] = beer[i];
      return acc;
    }, {});
  });
};
