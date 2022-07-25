import { useMantineTheme } from "@mantine/core"
import { NavLink } from "react-router-dom"

interface navItem {
    text: string
    link: string
    icon?: any
}

export default function NavItems( ) {
    const theme = useMantineTheme()
    const navOptions: navItem[] = [{text: 'Home', link: "/"}, {text: 'Dashboard', link: "/dash"}, {text: 'compose', link: "/compose"}]

    const navItems: any = navOptions.map((item: navItem) => {
        return (
        <li key={item.text} style={{color: theme.white
        }}><NavLink to={item.link}>{item.text}</NavLink></li>
        ) 
    })

    return (
        <ul>
            {navItems}
        </ul>
    )
}