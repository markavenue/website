import React, { ComponentProps } from 'react';

interface VideoProps
  extends Pick<ComponentProps<'source'>, 'src'>,
  Pick<ComponentProps<'video'>, 'width' | 'height'> {
  className?: string;
}

export default function Video({
  src, width, height, className,
}: VideoProps) {
  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <video
      className={className}
      width={width}
      height={height}
      controlsList="nodownload"
      loop
      autoPlay
      muted
    >
      <source src={src} />
      Your browser does not support the video tag.
    </video>
  );
}
