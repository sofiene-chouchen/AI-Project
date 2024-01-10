import ImageShow from './ImageShow';

function ImageList({ images }) {
  const displayedImages = images.slice(0, 6);

  const renderedImages = displayedImages.map((image) => {
    return (
      <div key={image.id} className='p-4'>
        <ImageShow image={image} />
      </div>
    );
  });

  return <div className='flex flex-wrap'>{renderedImages}</div>;
}

export default ImageList;
