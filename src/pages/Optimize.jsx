import Details from '../components/Details'
import girlworkout from '../assets/girl-workout.webp'

const Optimize = () => {
    return (
        <scection
            className='
            w-full 
            min-h-screen 
            p-6
            z-30 
            bg-zinc-900 
            flex 
            flex-col
            md:flex-row 
            items-center 
            justify-center-safe 
            gap-4'
        >
            <Details />

            <div
                className='w-full rounded-[2.5rem] overflow-hidden'
            >
                <img
                    src={girlworkout}
                    alt="img-girl-workout"
                    className='md:min-h-[clamp(886px,100vw,1061px)] object-cover object-center'
                />
            </div>
        </scection>
    )
}

export default Optimize