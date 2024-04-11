import {useState} from "react";

export default function QuestionSection() {
    const [hidden, setHidden] = useState(true);

    return (
        <div className={'md:px-40 p-5'}>
            <div>
                <h1 className="font-bold text-4xl w-full mb-4 mt-10">Frequently Asked Questions</h1>
                <Title content={'What is GrabFood?'}></Title>
                <p className="text-sm"> GrabFood is the fastest Food Delivery service in Vietnam. We have curated all
                    your favorite dishes, restaurants, and cuisines to help you grab your food in the easiest & quickest
                    way possible. Find and order your favorite cuisines across y your hunger with a wide selection
                    of merchant partners in Vietnam.
                </p>
                <button onClick={() => setHidden(!hidden)}
                        className={!hidden ? 'hidden' : 'p-3 text-[#676767]  border-[1px] rounded-md border-[#676767] font-bold mt-3 mb-3 hover:border-green-grab hover:text-green-grab w-full'}>Read
                    more
                </button>
            </div>
            <div className={hidden ? 'hidden' : undefined}>
                <hr/>
                <Title content={'How to order Grabfood online?'}></Title>
                <p className="text-sm">Here is the easiest way to order food from GrabFood in Singapore:</p>
                <ol className="text-sm">
                    <li className="p-3"><span
                        className="font-bold ">Search your favorite restaurant or the dish</span><span> - Enter your address on the home page. Look at the GrabFood Listed Restaurants and Food spots near you. Pick your favorite restaurant and browse through the menu and select the dish you want to order.</span>
                    </li>
                    <li className="p-3"><span className="font-bold">Checkout & Payment</span><span> - Once sure that you are ordering enough, click on the &quot;ORDER NOW&quot; tab and enter your final food delivery address. Choose the payment method that best suits you, and checkout.</span>
                    </li>
                    <li className="p-3"><span className="font-bold">Delivery </span><span>- GrabFood has designed a seamless customer journey for you, so you can enjoy your food hassle-free. We will send you an instant email and SMS confirming your order and expected delivery time. Your food is then on its way.</span>
                    </li>
                </ol>
                <hr/>
                <Title content={'Does GrabFood provide food delivery 24x7?'}></Title>
                <p className="text-sm">We understand only one language - food, so yes, we do.. Please note,
                    though we are here as your 24x7 food partners, few of our listed restaurants may have
                    late-night food delivery restrictions or may be unavailable for orders. But we have listed
                    the ones that love your late-night binging in our Late Night Delivery Section.</p>
                <Title content={'Does GrabFood accept Cash?'}></Title>
                <p className="text-sm">Sure, we do! GrabFood accepts all forms of payments for food delivery
                    services, including cash on delivery.</p>
            </div>
        </div>
    );
}

function Title({
                   content
               }: {
    content: string
}) {
    return (
        <h1 className="font-bold text-2xl w-full mb-4 mt-10">{content}</h1>
    );
}