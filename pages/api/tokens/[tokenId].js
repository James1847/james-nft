export default function requestHandler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
