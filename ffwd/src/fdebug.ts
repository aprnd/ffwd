export default function(...args: any[]): void {
  if (!process.env.NODE_ENV || (process.env.NODE_ENV && process.env.NODE_ENV !== "production")) {
    console.log(args);
  }
}

