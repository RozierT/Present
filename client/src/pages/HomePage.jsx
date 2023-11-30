import { Link } from 'react-router-dom'
import photoBack from '../assets/images/pexels-stock.jpg'
import presentLogo from '../assets/images/presentLogo.png'
import MyButton from '../components/profile/MyButton';
function HomePage() {
    return (
        <div className="flex flex-col justify-center text-content bg-bkg-2 h-screen" >
            <div className='flex justify-center' >
            <img src={presentLogo} className='h-60 w-60'  alt="" />
            </div>
            <h6 className="p-4 m-2 text-center  text-3xl text-purple-500"><span className='text-white'>Capture</span> the...</h6>
            <h1 className="p-4 m-2 text-center font-mono text-4xl text-purple-100">Present</h1>

            <div className="p-4 m-2 flex justify-center">
               
                <Link to="/login">
                    <button className="rounded-2xl border-2  border-black bg-purple-400 px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none mx-5 flex-1">
                        Login
                    </button>
                </Link>
                <Link to="/signup">
                    <button className="rounded-2xl border-2  border-black bg-purple-400 px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none flex-1">
                        Signup
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default HomePage;