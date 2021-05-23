import axios from 'axios';
import { useDispatch } from 'react-redux';
export const GetApi = () => {
  const dispatch = useDispatch()
  let userIp;
  axios.get('https://api.ipify.org/?format=json')
    .then((response) => {
      userIp = response.data.ip
      console.log(userIp);
      setTimeout(() => {
        dispatch({
          type: "USER_IP",
          payload: userIp
        })
      }, 4000);
    });

  return (
    <>
    </>
  )
}