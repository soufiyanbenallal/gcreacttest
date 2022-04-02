import { IHelpersService } from "../interfaces";

export default class HelpersService implements IHelpersService {
  public classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  public getDirection(angle: number) {
    const directions = ["North", "North-East", "East", "South-East", "South", "South-West", "West", "North-West"];
    const index = Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8;
    return directions[index];
  }
}
