import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss';


class Directory extends React.Component {

    constructor() {
        super();
        
        this.state = {
            section: [
                {
                    title: 'Hats',
                    imageUrl: 'https://images.unsplash.com/photo-1620743364195-6915419c6dc6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
                    id: 1,
                    linkUrl: 'hats'
                },
                {
                    title: 'Jackets',
                    imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amFja2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'Sneakers',
                    imageUrl: 'https://images.unsplash.com/photo-1612902376491-7a8a99b424e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c25lYWtlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'Womens',
                    imageUrl: 'https://images.unsplash.com/photo-1593418440710-b0b892b147cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                },
                {
                    title: 'Mens',
                    imageUrl: 'https://images.unsplash.com/photo-1507680434567-5739c80be1ac?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbiUyMGZhc2hpb258ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                },
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.section.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps}/>
                ))}
            </div>
        )
    }
}

export default Directory;