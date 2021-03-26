const handler = (req, res) => {
	
  const { email, password } = req.body.input

	return res.json({
    accessToken: "<value>"
  })
}

module.exports = handler
