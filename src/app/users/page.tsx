'use client'

// Importe as bibliotecas necessárias
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SidbarContainer } from '@/components/sidbar';
import { Option } from '@/components/sidbar/Option';
import { UserList } from '@/components/userLIst/UserList';
import { Dashbord } from '@/components/dashbord/Dashbord';
import { Header } from '@/components/header/Header';
import { HeaderOption } from '@/components/header';
import { useUserContext } from "@/contexts/ContextProvider"


const Page = () => {
    const [selectedComponent, setSelectedComponent] = useState(<Dashbord />)

    const handleOptionClick = (componentName: any) => {
        setSelectedComponent(componentName);
    };

    const { user } = useUserContext()

    return (
        <div className="flex">
            <SidbarContainer>
                <Option onClick={() => handleOptionClick(<Dashbord />)} text="Dashbord" />
                <Option onClick={() => handleOptionClick(<UserList />)} text="Users" />
            </SidbarContainer>

            
            <div className='flex flex-col flex-1'>
                <Header>
                    <HeaderOption href='#' text="header" />
                    <div className='flex gap-5'>
                        <HeaderOption href='#' text={user.name} />
                        <HeaderOption href='#' text="Logout" />
                    </div>
                </Header>
                {selectedComponent}
            </div>
        </div>
    );
};

export default Page;
