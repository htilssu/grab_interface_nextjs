import logo from "../assets/logo-grabfood-white2.svg";
import appleLogo from   "../assets/logo-appstore.svg";
import googleLogo from "../assets/logo-playstore.svg";

const Footer = () => {
    return (
        <div className="bg-green-500 mt-10">
            <div className="py-10 px-52">
                <div className="">
                    <div className="">
                        <div className="mb-6">
                            <div className="">
                                <div className="w-36"><a href=""><img
                                    src={logo} alt="Grabfood logo"
                                    className="w-full"/></a></div>
                            </div>
                        </div>
                        <div className="border-t-[1px] border-t-white"></div>
                        <div className="mt-6 text-white">
                            <div className="flex justify-between links___-Av_z">
                                <div className="ant-col-24 ant-col-lg-6">
                                    <div className="linkItem___2ikXR"><a href="https://www.grab.com/vn/food/"
                                                                         target="_blank" rel="noreferrer noopener">Về
                                        GrabFood</a></div>
                                    <div className="linkItem___2ikXR"><a href="https://www.grab.com/vn/about/"
                                                                         target="_blank" rel="noreferrer noopener">Về
                                        Grab</a></div>
                                    <div className="linkItem___2ikXR"><a href="https://www.grab.com/vn/food-blog/"
                                                                         target="_blank"
                                                                         rel="noreferrer noopener">Blog</a></div>
                                </div>
                                <div className="ant-col-24 ant-col-lg-6">
                                    <div className="linkItem___2ikXR"><a href="https://www.grab.com/vn/merchant/food/"
                                                                         target="_blank" rel="noreferrer noopener">Mở
                                        quán trên GrabFood</a></div>
                                    <div className="linkItem___2ikXR"><a href="https://www.grab.com/vn/driver/bike/"
                                                                         target="_blank" rel="noreferrer noopener">Trờ
                                        thành tài xế Grab</a></div>
                                </div>
                                <div className="ant-col-24 ant-col-lg-6">
                                    <div className="linkItem___2ikXR"><a
                                        href="https://help.grab.com/passenger/en-vn/115002258448-GrabFood"
                                        target="_blank" rel="noreferrer noopener">Trung tâm hỗ trợ</a></div>
                                    <div className="linkItem___2ikXR"><a
                                        href="https://help.grab.com/passenger/en-vn/115002258448-GrabFood"
                                        target="_blank" rel="noreferrer noopener">Câu hỏi thường gặp</a></div>
                                </div>

                            </div>
                        </div>
                        <div className="border-t-[1px] mt-10"></div>
                        <div className="flex mt-10 justify-between">
                            <div className="flex">
                                <div className="flex gap-4">
                                    <a
                                    href="https://grab.onelink.me/2695613898?pid=www.bing.com&amp;c=non-paid&amp;is_retargeting=true&amp;af_dp=grab%3A%2F%2Fopen%3FscreenType%3DGRABFOOD%26sourceID%3Dfood-grab-com%26sourceCampaignName%3DGF-WEB-VN-home-organic&amp;af_prt=food.grab.com&amp;af_web_dp=https%3A%2F%2Fitunes.apple.com%2Fapp%2Fid647268330%3Fmt%3D8%26l%3Dvi"
                                    target="_blank" rel="noreferrer noopener">
                                        <img
                                    src={appleLogo} alt="App store logo"/>
                                    </a>
                                    <a
                                    href="https://grab.onelink.me/2695613898?pid=www.bing.com&amp;c=non-paid&amp;is_retargeting=true&amp;af_dp=grab%3A%2F%2Fopen%3FscreenType%3DGRABFOOD%26sourceID%3Dfood-grab-com%26sourceCampaignName%3DGF-WEB-VN-home-organic&amp;af_prt=food.grab.com&amp;af_web_dp=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.grabtaxi.passenger%26hl%3Dvi_VN"
                                    target="_blank" rel="noreferrer noopener"><img
                                    src={googleLogo} alt="Google play logo"/></a>
                                </div>
                            </div>
                            <div className="text-white">
                                <div className="termsAndCopyright___2bYuq">
                                    <div className="termsAndCopyrightItem___2chNH">© 2024 Grab</div>
                                    <div className="flex grap-3"><a
                                        href="https://www.grab.com/vn/terms/" target="_blank" rel="noreferrer noopener">Câu
                                        hỏi thường gặp</a><span className="dotSeperator___3KA57">•</span><a
                                        href="https://www.grab.com/vn/privacy/" target="_blank"
                                        rel="noreferrer noopener">Chính sách bảo mật</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;