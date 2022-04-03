import { IHelpersService } from "../interfaces";

export default class HelpersService implements IHelpersService {
  // func: to handle class names from array of strings
  // using: for multiple class names with different conditions
  public classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  // func: get name of direction from degrees
  public getDirection(angle: number) {
    const directions = ["North", "North-East", "East", "South-East", "South", "South-West", "West", "North-West"];
    const index = Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8;
    return directions[index];
  }
}
