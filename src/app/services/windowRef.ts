import { Injectable } from "@angular/core";

const window: any = () => {
  return window;
}

@Injectable()
export class WindowRef {
  getWindow (): any {
    return window;
  }
}
