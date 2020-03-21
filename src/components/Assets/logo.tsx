import React from "react";
import { rems } from "../../constants/tokens";

export const Logo = () => (
    <svg fill="none" viewBox='0 0 256 256' width={`${rems[32]}`} height={`${rems[32]}`}>
        <path
            d="M255 126.972l-.001.469H113.418c15.08-20.037 41.738-54.753 53.597-70.144V20.616H58.603C78.55 7.578 102.39 0 128 0c70.14 0 127 56.847 127 126.972z"
        />
        <path
            d="M19.726 60.577h94.052l-50.841 66.864H1L1 126.972c0-24.338 6.85-47.077 18.726-66.395zM60.799 130.252H1.042c.145 5.725.669 11.355 1.548 16.867h59.956l-6.818-10.197 5.071-6.67zM67.558 154.616H4.018a125.995 125.995 0 004.32 14.993h102.557c-12.268-5.705-27.09-6.887-37.421-6.146l-5.916-8.847zM168.241 169.609c-2.772-5.243-6.213-10.305-10.428-14.993h94.169a126.183 126.183 0 01-4.319 14.993h-79.422zM124.945 179.917H12.534a126.73 126.73 0 006.988 13.119H131.76c-1.346-5.169-3.723-9.503-6.814-13.119zM176.412 193.036a88.466 88.466 0 00-3.618-13.119h70.673a126.75 126.75 0 01-6.989 13.119h-60.066zM132.911 206.155H28.714a127.57 127.57 0 007.366 8.433h96.078c.174-1.32.259-2.564.268-3.708.234-1.627.395-3.202.485-4.725zM178.021 214.588c.082-1.266.123-2.503.123-3.708 0-1.545-.04-3.122-.122-4.725h49.264a127.537 127.537 0 01-7.366 8.433h-41.899zM124.862 232.392H57.19a127.722 127.722 0 005.917 3.749h58.553a37.848 37.848 0 003.202-3.749zM173.1 236.141a80.946 80.946 0 001.345-3.749h24.366a128.065 128.065 0 01-5.918 3.749H173.1zM149.98 147.119c-9.141-7.523-20.943-13.511-36.003-16.867h140.981a127.576 127.576 0 01-1.548 16.867H149.98z"
        />
    </svg>
);
