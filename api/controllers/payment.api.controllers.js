import {MercadoPagoConfig, Preference}  from  'mercadopago'

const client = new MercadoPagoConfig({
  accessToken: "APP_USR-5586278242516409-043012-dab3093e3d9bc99caf487ce8e8404b39-1007501179",
})

async function createPreference(req, res){
try {

  const preference = await new Preference(client).create({
    body: {
      items : req.body
    }
  })

  res.json({
    id: preference
  })

} catch (error) {
  
  res.status(500).json({
    error: error
  })
}
}

export {
  createPreference
}