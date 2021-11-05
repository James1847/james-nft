export default function requestHandler(req, res) {
  
    res.status(400).json({ code: 400, message: "bad request"});
  }