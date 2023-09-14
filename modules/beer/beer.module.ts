import { Module } from "root/deps.ts";
import { BeersController } from "root/modules/beer/controllers/beers.controller.ts";
import { GetBeersService } from "root/modules/beer/services/GetBeersService.ts";
import { TestService } from "root/modules/beer/services/TestService.ts";

@Module({
  controllers: [BeersController],
  providers: [GetBeersService, TestService],
})
export class BeerModule {}
