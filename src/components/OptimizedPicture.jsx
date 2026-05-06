const OptimizedPicture = ({
  avif,
  webp,
  src,
  alt,
  className = "",
  imgClassName = "",
  width,
  height,
  loading = "lazy",
  decoding = "async",
  fetchPriority,
  sizes,
  srcSet,
  style,
}) => (
  <picture className={className || "block h-full w-full"}>
    {avif && <source type="image/avif" srcSet={avif} sizes={sizes} />}
    {webp && <source type="image/webp" srcSet={webp} sizes={sizes} />}
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      className={imgClassName}
      style={style}
    />
  </picture>
);

export default OptimizedPicture;
