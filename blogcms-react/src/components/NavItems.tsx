import { Group, useMantineTheme } from "@mantine/core"
import { NavLink } from "react-router-dom"

interface navItem {
    text: string
    link: string
    icon?: any
}

export default function NavItems( ) {
    const theme = useMantineTheme()
    const navOptions: navItem[] = [{text: 'Home', link: "/"}, {text: 'Dashboard', link: "/dash"}, {text: 'compose', link: "/compose"}, {text: 'View', link: '/view'}]

    const navItems: any = navOptions.map((item: navItem) => {
        return (
       

        <NavLink key={item.text} to={item.link}>{item.text}</NavLink>
    
        ) 
    })

    return (
        <nav>
              <Group position="center" spacing="xl" style={{
            flexDirection: 'row',
            marginLeft: '4rem'
         }}>
            {navItems}
            </Group>
        </nav>
    )
}