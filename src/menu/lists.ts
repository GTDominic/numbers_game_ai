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
        name: 'Board',
        active: false,
        elements: [
            {
                name: 'Restart with same values',
                func: () => testcall('Restart'),
            }, {
                name: 'Create Board',
                func: () => Menu.openCreateMenu(),
            },
        ]
    }, {
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
        elements: []
    }
];

let boardOptions: Array<{
    name: string,
    func: () => void
}> = [{
    name: '1 - 12',
    func: () => board.replaceBoard([1,2,3,4,5,6,7,8,9,1,0,1,1,1,2])
}, {
    name: '1 - 13',
    func: () => board.replaceBoard([1,2,3,4,5,6,7,8,9,1,0,1,1,1,2,1,3])
}, {
    name: '15 random (without 0)',
    func: () => board.createRandomBoard(15, 1)
}, {
    name: '25 random (without 0)',
    func: () => board.createRandomBoard(25,1)
}, {
    name: '15 random (with 0)',
    func: () => board.createRandomBoard(15, 0)
}, {
    name: '25 random (with 0)',
    func: () => board.createRandomBoard(25,0)
}
];