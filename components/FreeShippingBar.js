import { FaShippingFast } from "react-icons/fa";
import { AiFillStar, AiOutlineUserAdd } from "react-icons/ai";
import { RiRepeatFill } from "react-icons/ri";

export default function FreeShippingBar() {
  return (
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
        <FaShippingFast size={42} color="#EE403B" />
        <div className="ml-4">
          <h3 className="text-xl font-semibold">Free Shipping</h3>
          <p className="text-lg">Australia Wide</p>
        </div>
      </div>
      <div className="flex items-center">
        <RiRepeatFill size={42} color="#EE403B" />
        <div className="ml-4">
          <h3 className="text-xl font-semibold">30-Day Change Of Mind</h3>
          <p className="text-lg">on all of our products</p>
        </div>
      </div>
      <div className="flex items-center">
        <AiOutlineUserAdd size={42} color="#EE403B" />
        <div className="ml-4">
          <h3 className="text-xl font-semibold">1 Year Warranty</h3>
          <p className="text-lg">on all of our products</p>
        </div>
      </div>
      <div className="flex items-center">
        <AiFillStar size={42} color="#EE403B" />
        <div className="ml-4">
          <h3 className="text-xl font-semibold">4.9 Star Reviews</h3>
          <p className="text-lg">Check out our reviews</p>
        </div>
      </div>
    </div>
  );
}
