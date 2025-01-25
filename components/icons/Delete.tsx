import { IconProps } from "@/types/icon.type";

const Delete = (props: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={22}
            height={22}
            fill="none"
            {...props}
        >
            <g clipPath="url(#a)">
                <path
                    fill="#EF0E00"
                    d="M8.8 4.4h4.4a2.2 2.2 0 0 0-4.4 0Zm-2.2 0a4.4 4.4 0 0 1 8.8 0h5.5a1.1 1.1 0 0 1 0 2.2h-.97l-.975 11.374A4.4 4.4 0 0 1 14.571 22H7.429a4.4 4.4 0 0 1-4.384-4.026L2.07 6.6H1.1a1.1 1.1 0 1 1 0-2.2h5.5Zm7.7 6.6a1.1 1.1 0 0 0-2.2 0v4.4a1.1 1.1 0 0 0 2.2 0V11ZM8.8 9.9A1.1 1.1 0 0 0 7.7 11v4.4a1.1 1.1 0 0 0 2.2 0V11a1.1 1.1 0 0 0-1.1-1.1Z"
                />
            </g>
            <defs>
                <clipPath id="a">
                    <path fill="#fff" d="M0 0h22v22H0z" />
                </clipPath>
            </defs>
        </svg>
    );
}

export default Delete;