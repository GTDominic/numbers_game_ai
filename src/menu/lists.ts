interface MenuElement {
    name: string,
    func: () => void,
}

const menuElements: Array<{
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
                func: () => testcall('speed +'),
            }, {
                name: 'speed -',
                func: () => testcall('speed -'),
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