import { Injectable } from "root/deps.ts";

@Injectable()
export class TestService {
  do() {
    return "from testService";
  }
}
