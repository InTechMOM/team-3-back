import { Router } from 'express'
const router = Router()

router.get('/', (request, response, error) => {

  response.send('status: ok')

});

router.post('/user', (request, response) => {
  response.send('saved')
})

export default router;