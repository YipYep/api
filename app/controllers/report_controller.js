import ReportModel from '../models/report_model';

const createReport = (req, res) => {
  const { reporter, item, type, severity, additionalInfo } = req.body;
  const r = new ReportModel({ reporter, severity, additionalInfo });
  if (type === 'COMMENT') {
    r.reportedComment = item;
  } else if (type === 'POST') {
    r.reportedPost = item;
  }
  r.timestamp = Date.now();
  // console.log(`r is ${r}`);
  r.save()
    .then((result) => {
      res.json(r);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

export default createReport;
