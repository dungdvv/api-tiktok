import photoDao from "./photo.dao";

class PhotoService {
  createPost(postDto) {
    const { name } = postDto;
    const url = "";
    return photoDao.createPhoto(name, url);
  }

  getOne(id) {
    return photoDao.getOne(id);
  }
}

export default new PhotoService();
