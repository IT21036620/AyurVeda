import { Joi } from 'celebrate'

export const addBuyerSchema = {
  buyerName: Joi.string().required(),
  credentialId: Joi.string().hex().required(),
  address: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.required(),
}

export const viewBuyerSchema = {
  id: Joi.string().hex().length(24).required(),
}
export const updateBuyerSchema = {
  id: Joi.string().hex().length(24).required(),
}
export const deleteBuyerSchema = {
  id: Joi.string().hex().length(24).required(),
}
