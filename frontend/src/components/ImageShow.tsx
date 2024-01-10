function ImageShow({ image }) {
  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className='h-44 w-44'
      />
    </div>
  );
}

export default ImageShow;
