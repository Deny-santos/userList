import React from 'react';

type Props = {
    text: string;
    onClick: () => void; // Adicione a propriedade de função de clique
};

export const Option = ({ text, onClick }: Props) => {
    return (
        <button 
            className={`
                text-lg text-white py-2 w-[100%] cursor-pointer hover:bg-blue-400 duration-300
                flex items-start pl-3
            `} 
            onClick={onClick}
        >
            {text}
        </button>
    );
};
