import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata= {
    title: "Xôi Chú Ngọng - Đê La Thành",
    description: "Food Shop",
};

const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;