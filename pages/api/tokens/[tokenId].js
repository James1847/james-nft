import tokens from "../../../public/tokens.json"

// const tokens = require('../../../public/tokens.json')

export default function requestHandler(req, res) {
  var tokenId = req.query.tokenId
  const token = tokens[tokenId]
  if(typeof token === 'undefined') {
    return res.status(500).json({code: 500, message: "no such token"})
  } else {
    return res.status(200).json({code: 200, message: "success", data: {tokenId: tokenId, data: token}})
  }
}


