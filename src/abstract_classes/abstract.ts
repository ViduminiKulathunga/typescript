abstract class TakesPhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;

  getReelTime(): number {
    return 10;
  }
}

//const person = new TakesPhoto("test", "test");

class Instagram extends TakesPhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("working");
  }
}

const person = new Instagram("test", "test", 1);
person.getReelTime();
