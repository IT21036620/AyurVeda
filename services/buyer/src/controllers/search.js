import asyncHandler from '../middleware/async.js'
import makeResponse from '../middleware/response.js'

import { searchProducts } from '../repository/search.js'

//Get Data Of One buyer
export const searchProduct = asyncHandler(async (req, res) => {
  const key = req.params.key
  const ans = await searchProducts(key)
  return makeResponse({
    res,
    status: 200,
    data: ans,
    massage: 'prodcut search details fetched',
  })
})

// product.get(
//   '/search/:key',
//   tracedAsyncHandler(async function searchProductCntrl(req, res) {
//     const key = req.params.key
//     const product = await searchProductSrc(key)
//     return toSuccess({
//       res,
//       data: product,
//       massage: 'product successfully updated',
//     })
//   })
// )
