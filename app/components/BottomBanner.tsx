import React from 'react';
import Image from "next/image";

const BottomBanner = () => {
    return (
        <div>
            <div className="mt-10 py-20 bg-[#F7F7F7]">
                <div className="">
                    <div className="">
                        <div className="flex flex-col md:flex-row  px-20">
                            <div className="text-center p-5">
                                <div className="">
                                    <div className={"flex items-center justify-center"}>
                                        <Image height={150} width={150} alt={"food"} src={"/bottom-food-options.svg"}/>
                                    </div>
                                    <div className="text-xl font-bold mt-5">Curated restaurants</div>
                                    <div className="text-gray-500 mt-5">
                                        <p>From small bites to big meals, we won&apos;t
                                            limit your appetite. Go ahead and order all you want.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center p-5">
                                <div>
                                    <div className={"flex items-center justify-center"}>
                                        <Image height={150} width={150} className={"max-h-[150px]"} alt={"food"} src={"/ilus-cool-features-app.svg"}/>
                                    </div>
                                </div>
                                <div className="text-xl font-bold mt-5">More cool features available on the app</div>
                                <div className="text-gray-500 mt-5">Download Grab app to use other payment
                                    methods and enjoy seamless communication with your driver.
                                </div>
                                <div className="flex items-center justify-center mt-10 gap-5">
                                    <a
                                        href="https://grab.onelink.me/2695613898?pid=weblogin.grab.com&amp;c=Internal&amp;is_retargeting=true&amp;af_dp=grab%3A%2F%2Fopen%3FscreenType%3DGRABFOOD%26sourceID%3Dfood-grab-com%26sourceCampaignName%3DGF-WEB-VN-home-organic&amp;af_prt=food.grab.com&amp;af_web_dp=https%3A%2F%2Fitunes.apple.com%2Fapp%2Fid647268330%3Fmt%3D8%26l%3Dvi"
                                        target="_blank" rel="noreferrer noopener" className=""><Image width={150} height={150}
                                        src="/logo-appstore.svg" alt="App store logo"/></a><a
                                    href="https://grab.onelink.me/2695613898?pid=weblogin.grab.com&amp;c=Internal&amp;is_retargeting=true&amp;af_dp=grab%3A%2F%2Fopen%3FscreenType%3DGRABFOOD%26sourceID%3Dfood-grab-com%26sourceCampaignName%3DGF-WEB-VN-home-organic&amp;af_prt=food.grab.com&amp;af_web_dp=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.grabtaxi.passenger%26hl%3Dvi_VN"
                                    target="_blank" rel="noreferrer noopener" className=""><Image height={150} width={150}
                                    src="/logo-playstore.svg" alt="Google play logo"/></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default BottomBanner;