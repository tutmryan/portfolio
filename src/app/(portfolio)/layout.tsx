'use client'

import { PathnameContext } from "@/context/PathnameContext"
import usePrevious from "@/hooks/usePrevious"
import { usePathname } from "next/navigation"

const PortfolioLayout = async ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()
    const previousPathname = usePrevious(pathname)

    return (
        <PathnameContext.Provider value={{ previousPathname: previousPathname }} >
            {children}
        </PathnameContext.Provider>
    )
}

export default PortfolioLayout