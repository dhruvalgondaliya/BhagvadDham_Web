export function Image({ src, alt, width, height, className }) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`object-cover ${className}`}
    />
  );
}
