import path from "path";
const home = (req, res) => {
  return res.sendFile(path.join(`${__dirname}/../views/index.html`));
};
const homeController = {
  getHome: home,
};

export default homeController;
