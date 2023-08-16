declare module '*.svg' {
  export default React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

declare module '*.mp4' {
  const video: string;
  export default video;
}

declare module '*.webp' {
  const image: string;
  export default image;
}
