const profileList = [
    {
        id: 0,
        name: 'default',
        description: 'Default profile',
        types: [
            {
                name: 'Simple',
                description:
                    'Type used for simple elements, like single variables.',
                preferences: [
                    {key: 'KS', name:'Key start', description:'Value inserted at the beginning of each key.', value:''},
                    {key: 'KE', name:'Key end', description:'Value inserted at the end of each key.', value:''},
                    {key: 'VS', name:'Value start', description:'Value inserted at the beginning of each value.', value:'"'},
                    {key: 'VE', name:'Value end', description:'Value inserted at the end of each value.', value:'"'},
                    {key: 'LS', name:'Line start', description:'Value inserted at the beginning of each line.', value:''},
                    {key: 'LE', name:'Line end', description:'Value inserted at the end of each line.', value:''},
                    {key: 'AS', name:'Assigner', description:'Assigner used in the expression.', value:' : '},
                    {key: 'NLS', name:'Nested level start', description:'Repeating nested level.', value:0},
                    {key: 'NIS', name:'Nested item start', description:'Value to be inserted before every nested item.', value:'\\t'},
                ],
            },
            {
                name: 'Complex',
                description: 'Type used for complex elements, like lists.',
                preferences: [
                    {key: 'KS', name:'Key start', description:'Value inserted at the beginning of each key.', value:''},
                    {key: 'KE', name:'Key end', description:'Value inserted at the end of each key.', value:''},
                    {key: 'VS', name:'Value start', description:'Value inserted at the beginning of each value.', value:'{'},
                    {key: 'VE', name:'Value end', description:'Value inserted at the end of each value.', value:'\\n }'},
                    {key: 'LS', name:'Line start', description:'Value inserted at the beginning of each line.', value:''},
                    {key: 'LE', name:'Line end', description:'Value inserted at the end of each line.', value:''},
                    {key: 'AS', name:'Assigner', description:'Assigner used in the expression.', value:' '},
                    {key: 'NLS', name:'Nested level start', description:'Repeating nested level.', value:0},
                    {key: 'NIS', name:'Nested item start', description:'Value to be inserted before every nested item.', value:'\\t'},
                ],
            },
        ],
    },
];

export default profileList;
