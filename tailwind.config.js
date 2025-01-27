module.exports = {
    corePlugins: {
        preflight: true,
    },
    content: ["./src/**/*.{js,jsx,ts,tsx}", ".env"],
    safelist: [
        "placeholder:text-xs",
        "placeholder:text-sm",
        "placeholder:text-base",
        "placeholder:text-lg",
        "placeholder:text-xl",
        "placeholder:text-2xl",
        "placeholder:text-3xl",
        "placeholder:text-4xl",
        "placeholder:text-5xl",
        "placeholder:text-6xl",
        "placeholder:text-7xl",
        "placeholder:text-8xl",
        "placeholder:text-9xl",

        "placeholder:font-thin",
        "placeholder:font-extralight",
        "placeholder:font-light",
        "placeholder:font-normal",
        "placeholder:font-medium",
        "placeholder:font-semibold",
        "placeholder:font-bold",
        "placeholder:font-extrabold",
        "placeholder:font-black",

        "bg-[rgba(230, 0, 51, 1)]",
        "bg-[#601986ff]",
        "bg-[#000000ff]",
        "bg-[#e60033ff]",
        "text-[#601986ff]",
        "text-[#000000ff]",
        "text-[#e60033ff]",
        "border-[#601986ff]",
        "border-[#000000ff]",
        "border-[#e60033ff]",
        "bg-[#00ff00ff]",
        "text-[#00ff00ff]",
        "border-[#00ff00ff]",
        "bg-[#0000ffff]",
        "text-[#0000ffff]",
        "border-[#0000ffff]",
        "bg-[#00a0e9ff]",
        "text-[#00a0e9ff]",
        "border-[#00a0e9ff]",
        "bg-[#f39800ff]",
        "text-[#f39800ff]",
        "border-[#f39800ff]",
        "bg-[#fff000]",
        "bg-[#f1f1f1]",
        "bg-[#f2f2f2]",
        "bg-[#000000]",
        "bg-[#202020]",
        "bg-[#404040]",
        "bg-[#606060]",
        "bg-[#808080]",
        "bg-[#a0a0a0]",
        "bg-[#c0c0c0]",
        "bg-[#e0e0e0]",
        "bg-[#ffffff]",
        "bg-[#ff0000]",
        "bg-[#E60012]",
        "bg-[#EB6100]",
        "bg-[#F39800]",
        "bg-[#FCC800]",
        "bg-[#FFF100]",
        "bg-[#CFDB00]",
        "bg-[#8FC31F]",
        "bg-[#00FF00]",
        "bg-[#22AC38]",
        "bg-[#009944]",
        "bg-[#009B6B]",
        "bg-[#009E96]",
        "bg-[#00A0C1]",
        "bg-[#00A0E9]",
        "bg-[#0086D1]",
        "bg-[#0068B7]",
        "bg-[#0000FF]",
        "bg-[#00479D]",
        "bg-[#1D2088]",
        "bg-[#601986]",
        "bg-[#920783]",
        "bg-[#BE0081]",
        "bg-[#E4007F]",
        "bg-[#E5006A]",
        "bg-[#E5004F]",
        "bg-[#E60033]",

        "text-[#fff000]",
        "text-[#f1f1f1]",
        "text-[#f2f2f2]",
        "text-[#000000]",
        "text-[#202020]",
        "text-[#404040]",
        "text-[#606060]",
        "text-[#808080]",
        "text-[#a0a0a0]",
        "text-[#c0c0c0]",
        "text-[#e0e0e0]",
        "text-[#ffffff]",
        "text-[#ff0000]",
        "text-[#E60012]",
        "text-[#EB6100]",
        "text-[#F39800]",
        "text-[#FCC800]",
        "text-[#FFF100]",
        "text-[#CFDB00]",
        "text-[#8FC31F]",
        "text-[#00FF00]",
        "text-[#22AC38]",
        "text-[#009944]",
        "text-[#009B6B]",
        "text-[#009E96]",
        "text-[#00A0C1]",
        "text-[#00A0E9]",
        "text-[#0086D1]",
        "text-[#0068B7]",
        "text-[#0000FF]",
        "text-[#00479D]",
        "text-[#1D2088]",
        "text-[#601986]",
        "text-[#920783]",
        "text-[#BE0081]",
        "text-[#E4007F]",
        "text-[#E5006A]",
        "text-[#E5004F]",
        "text-[#E60033]",

        "border-[#fff000]",
        "border-[#f1f1f1]",
        "border-[#f2f2f2]",
        "border-[#000000]",
        "border-[#202020]",
        "border-[#404040]",
        "border-[#606060]",
        "border-[#808080]",
        "border-[#a0a0a0]",
        "border-[#c0c0c0]",
        "border-[#e0e0e0]",
        "border-[#ffffff]",
        "border-[#ff0000]",
        "border-[#E60012]",
        "border-[#EB6100]",
        "border-[#F39800]",
        "border-[#FCC800]",
        "border-[#FFF100]",
        "border-[#CFDB00]",
        "border-[#8FC31F]",
        "border-[#00FF00]",
        "border-[#22AC38]",
        "border-[#009944]",
        "border-[#009B6B]",
        "border-[#009E96]",
        "border-[#00A0C1]",
        "border-[#00A0E9]",
        "border-[#0086D1]",
        "border-[#0068B7]",
        "border-[#0000FF]",
        "border-[#00479D]",
        "border-[#1D2088]",
        "border-[#601986]",
        "border-[#920783]",
        "border-[#BE0081]",
        "border-[#E4007F]",
        "border-[#E5006A]",
        "border-[#E5004F]",
        "border-[#E60033]",
    ],
    theme: {
        extend: {
            screens: {
                // => @media (min-width: 576px) { ... }
                sm: "576px",
                md: { max: "960px" },
                // => @media (min-width: 1440px) { ... }
                lg: "1440px",
            },
            animation: {
                bounce: "bounce 0.5s infinite",
                spin: "spin 5s linear infinite",
                ping: "ping 0.5s infinite",
                wiggle: "wiggle 1s infinite",
                "fade-in-down": "fade-in-down 0.5s ease-out",
                "fade-out-down": "fade-out-down 0.5s ease-out",
                "fade-in-up": "fade-in-up 0.5s ease-out",
                "fade-out-up": "fade-out-up 0.5s ease-out",
            },
            keyframes: {
                wiggle: {
                    "0% , 100%": {
                        transform: "scale(1.2) rotate(7deg)",
                    },
                    "50%": {
                        transform: "scale(0.8) rotate(-7deg)",
                    },
                    "fade-in-down": {
                        "0%": {
                            opacity: "0",
                            transform: "translateY(-10px)",
                        },
                        "100%": {
                            opacity: "1",
                            transform: "translateY(0)",
                        },
                    },
                    "fade-out-down": {
                        from: {
                            opacity: "1",
                            transform: "translateY(0px)",
                        },
                        to: {
                            opacity: "0",
                            transform: "translateY(10px)",
                        },
                    },
                    "fade-in-up": {
                        "0%": {
                            opacity: "0",
                            transform: "translateY(10px)",
                        },
                        "100%": {
                            opacity: "1",
                            transform: "translateY(0)",
                        },
                    },
                    "fade-out-up": {
                        from: {
                            opacity: "1",
                            transform: "translateY(0px)",
                        },
                        to: {
                            opacity: "0",
                            transform: "translateY(10px)",
                        },
                    },
                },
            },
            boxShadow: {
                calendarShadow: "10px 10px 10px 8px  rgba(0, 0, 0, 0.1)",
            },
            colors: {
                green: {
                    50: "#017100",
                    // 仮のナビバーサブメニューのbgカラーです
                    100: "#e4f4eb",
                    // 仮のナビバーサブメニューのホバー時のカラーです (li item background color)
                    150: "#e4efe9", //will be replaced to 50
                    // 仮のナビバーサブメニューborder leftカラーです(li style left border color)
                    200: "#94d2af",
                    // toggle button color
                    250: "#6BD543",
                    300: "#03AF7A",
                    // 仮のナビバーのbgカラーです
                    500: "#19a75d",
                },
                gray: {
                    50: '#F4F5F7',
                    //toggle button switch color
                    100: '#efefef',
                    150: '#020202',
                    200: "#cccccc",
                    250: "#C9C6C1",
                    300: "#C8C8CB",
                    400: "#E8EEF3", //outline button hover color
                    500: "#707070",
                    // 仮のナビバーアイコンのカラーです
                    600: "#666666",
                    // 仮のナビバーアイコンのマウスホバー時のカラーです
                    700: "#888888",
                    900: "rgb(0 0 0 / 0%)" //modal input
                },
                blue: {
                    // 仮のサブメニューのフォントカラーです
                    25: "#E8EDF2",
                    50: "#8AADC6",
                    100: "#145c8f",
                    150: "#f3f8ff",
                    200: "#00A2FF",
                    300: "#5E8EB2",
                    400: "#BBCFDF",
                },
                orange: {
                    //circle (error)
                    300: "#FF4B00",
                    // 警告色70 (Warning)
                    400: "#fb804c",
                    // button background-color
                    500: "#EE280C",
                },

                primary: "#19A75D",
                cLightBlue: "#8aadc6",
                cDarkBlue: "#145c8f",
                cCellBorder: "#C8C8CB",
                cPlaceHolder: "#BBCFDF",
                cTableHeader: "#8AADC6",
                cTextLink: "#00A2FF",
                codd: "#F3F8FF",
                ceven: "#FFFFFF",
                coddhover: "#E2ECF5",
                cevenhover: "#EAF1F5",
                tableBg: "#f4f5f7",
                white: "#ffffff",
            },
            maxWidth: {
                'mw-1px': '1px',
                'mw-2px': '2px',
                'mw-3px': '3px',
                'mw-4px': '4px',
                'mw-5px': '5px',
            }
        },
    },
    variants: {
        // ナビバーのサブメニュー表示のために以下を追加しました
        visibility: ["responsive", "hover", "focus", "group-hover"],
    },
    mode: "jit",
    plugins: [
        require('@tailwindcss/line-clamp')
    ],
};
