import { BeerRepository } from "root/modules/beer/repositories/BeerRepository.ts";
import { Injectable } from "root/deps.ts";
import { TestService } from "root/modules/beer/services/TestService.ts";

@Injectable()
export class GetBeersService {
  constructor(private readonly testService: TestService) {}
  do() {
    return this.testService.do();
    // const beers = await this.beerRepository.selectAll();

    // return beers.rows.map((beer) => {
    //   return beers?.rowDescription?.columns.reduce((acc, el, i) => {
    //     acc[el.name as string] = beer[i];
    //     return acc;
    //   }, {});
    // });
  }
}
