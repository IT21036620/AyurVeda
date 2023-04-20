import asyncHandler from './middleware/async.js'
import makeResponse from './middleware/response.js'

import { mailSupplier } from './mailService.js'

//Send supplier membership request response
export const supplierMailer = asyncHandler(async (req, res) => {
  const ans = await mailSupplier(req.body)
  return makeResponse({
    res,
    status: 200,
    data: ans,
    massage: 'Email Send Successfully',
  })

  // res.status(200).json(ans)
})
