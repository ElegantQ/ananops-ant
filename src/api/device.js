import axios from 'axios'

export function getAllEdgeDevice () {
  axios.get('/cloud/device/getAllEdgeDevice').then((res) => {
    return res.data.data
  }).catch((res) => {
    console.log(res)
  })
}
