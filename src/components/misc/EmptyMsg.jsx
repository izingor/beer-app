import Lottie from 'lottie-react'
import EmptyAnimation from '../../assets/lottie-animations/favorite.empty.json'

export const EmptyMsg = () => {
  return (
    <div className='flex flex-col justify-center items-center font-mono w-2/3 h-2/3'>
        <Lottie animationData = {EmptyAnimation}  />
        <h3>You got no favorites!</h3>
        <h4>Go grab a beer!</h4>
    </div>
  )
}
