import PhotoAlbum from "react-photo-album";

const PhotoGallery = ({ project }) => {
  return (
    <div className="container mb-100">
      <PhotoAlbum layout="masonry" spacing={25} columns={3} padding={0} photos={project?.photos} />
      <div className="copyright d-flex mt-100">
        <div className="m-auto">
          <p className="fz-13">© Sazzad Designs</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
