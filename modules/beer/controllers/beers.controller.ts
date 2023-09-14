import { Controller, Get, Headers } from "root/deps.ts";
import { GetBeersService } from "root/modules/beer/services/GetBeersService.ts";

// import { BeerRepository } from "root/modules/beer/repositories/BeerRepository.ts";

@Controller()
export class BeersController {
  constructor(private readonly getBeerService: GetBeersService) {}
  // constructor(private readonly beerRepository: BeerRepository) {}

  @Get()
  get(@Headers("user-agent") userAgent: string) {
    return { status: "ok", userAgent };
  }

  @Get("beers")
  async action() {
    const beers = await this.getBeerService.do();
    return { beers };

    // const a = await this.beerRepository.selectAll();
    // console.log(a.rowDescription, a.rows);
    // return {};
  }
}
