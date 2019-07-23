import { basics, summary, work, education, skills, training } from '../../../static/json';

const jsonData = {};
jsonData.basics = basics;
jsonData.summary = summary;
jsonData.work = work;
jsonData.skills = skills;
jsonData.education = education;
jsonData.training = training;

export default function handle(req, res) {
  const { section } = req.query;

  try {
    res.json(jsonData[section]);
  } catch (error) {
    console.error(error);
  }
}
