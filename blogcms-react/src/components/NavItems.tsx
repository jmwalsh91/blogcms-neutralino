interface navItem {
    text: string
    link?: string
    icon?: any
}

export default function NavItems( ) {
    const navOptions: navItem[] = [{text: 'Thing One'}, {text: 'Thing Two'}, {text: 'Thing Three'}]

    const navItems: any = navOptions.map((item: navItem) => {
        return (
        <li key={item.text} style={{color: "black"
        }}>{item.text}</li>
        ) 
    })

    return (
        <ul>
            {navItems}
        </ul>
    )
}