import fdebug from "./fdebug";
import EnvironmentVariable from "./interfaces/EnvironmentVariable";

interface FFWDFunction {
}

class FFunction {

  private env: EnvironmentVariable[];
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public setEnvironmentVariable(envVar: EnvironmentVariable) {

    if(!this.env.find(_envVar => _envVar.key === envVar.key)) {
      this.env.push(envVar);
    }

  }

  public getEnvironmentVariable(key: string) {
    return this.env.filter(e => e.key === key);
  }

  public invoke(payload: object) {

    fdebug(`Invoking ${this.name} with payload:`, payload);

  }

}

export default FFunction;