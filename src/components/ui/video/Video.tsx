import React, { ComponentProps } from 'react';

interface VideoProps
  extends Pick<ComponentProps<'source'>, 'src'>,
    Pick<ComponentProps<'video'>, 'width' | 'height' | 'poster'> {
  className?: string;
}

export default function Video({
  className,
  height,
  poster,
  src,
  width,
}: VideoProps) {
  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <video
      className={className}
      width={width}
      height={height}
      controls
      controlsList="nodownload"
      poster={poster}
      preload="metadata"
    >
      <source src={src} />
      Your browser does not support the video tag.
    </video>
  );
}
