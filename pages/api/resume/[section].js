const fs = require('fs');

export default function handle(req, res) {
  // console.log(req.body); // The request body
  // console.log(req.cookies); // The passed cookies
  const { section } = req.query;
  console.log('Section: ', section); // The url querystring

  const realPath = fs.realpathSync('.');
  console.log('REALPATH: ', realPath);

  try {
    const rawdata = fs.readFileSync(`${realPath}/static/json/${section}.json`);
    const jsonRes = JSON.parse(rawdata);
    res.json(jsonRes);
  } catch (error) {
    console.error(error);
  }
}
