"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }, [resolvedTheme, setTheme])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="size-8" />
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="group/toggle extend-touch-target size-8"
      onClick={toggleTheme}
    >
      {resolvedTheme === "light" ? <Moon /> : <Sun />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}



// export const ThemeToggle = ({
//   className = "",
// }: {
//   className?: string;
// }) => {
//   const [isDark, setIsDark] = React.useState(false);
//   return (
//     <button
//       type="button"
//       className={cn(
//         "rounded-full transition-all duration-300 active:scale-95",
//         isDark ? "bg-black text-white" : "bg-white text-black",
//         className,
//       )}
//       onClick={() => setIsDark(!isDark)}
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         aria-hidden="true"
//         fill="currentColor"
//         strokeLinecap="round"
//         viewBox="0 0 32 32"
//       >
//         <clipPath id="skiper-btn-2">
//           <motion.path
//             animate={{ y: isDark ? 10 : 0, x: isDark ? -12 : 0 }}
//             transition={{ ease: "easeInOut", duration: 0.35 }}
//             d="M0-5h30a1 1 0 0 0 9 13v24H0Z"
//           />
//         </clipPath>
//         <g clipPath="url(#skiper-btn-2)">
//           <motion.circle
//             animate={{ r: isDark ? 10 : 8 }}
//             transition={{ ease: "easeInOut", duration: 0.35 }}
//             cx="16"
//             cy="16"
//           />
//           <motion.g
//             animate={{
//               rotate: isDark ? -100 : 0,
//               scale: isDark ? 0.5 : 1,
//               opacity: isDark ? 0 : 1,
//             }}
//             transition={{ ease: "easeInOut", duration: 0.35 }}
//             stroke="currentColor"
//             strokeWidth="1.5"
//           >
//             <path d="M16 5.5v-4" />
//             <path d="M16 30.5v-4" />
//             <path d="M1.5 16h4" />
//             <path d="M26.5 16h4" />
//             <path d="m23.4 8.6 2.8-2.8" />
//             <path d="m5.7 26.3 2.9-2.9" />
//             <path d="m5.8 5.8 2.8 2.8" />
//             <path d="m23.4 23.4 2.9 2.9" />
//           </motion.g>
//         </g>
//       </svg>
//     </button>
//   );
// };