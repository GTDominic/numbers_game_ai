interface MenuElement {
    name: string,
    func: () => void,
}

let menuElements: Array<{
    name: string,
    active: boolean,
    elements: Array<MenuElement>,
}> = [
    {
        name: 'Window',
        active: false,
        elements: [
            {
                name: 'speed +',
                func: () => Menu.changeFrameRate(true),
            }, {
                name: 'speed -',
                func: () => Menu.changeFrameRate(false),
            },
        ]
    }, {
        name: 'AI',
        active: false,
        elements: [
            {
                name: 'Testing',
                func: () => testcall('AI Test'),
            },
        ]
    }
];