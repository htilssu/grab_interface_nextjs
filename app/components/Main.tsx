import banner from '../../public/VN-new-3.jpg';
import Banner from './Banner';
import FoodSection from "./FoodSection";



const Main = () => {
    return (
        <div>
            <Banner className="object-cover w-full h-[375px]" banner={banner}/>
            <hr className={'mt-32 border-gray-300'}/>
            <FoodSection className={"mt-28 py-5 px-40"}/>
        </div>
    );
};

export default Main;