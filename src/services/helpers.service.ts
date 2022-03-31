import { IHelpersService } from "../interfaces";

export default class HelpersService implements IHelpersService {
  public classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
}
