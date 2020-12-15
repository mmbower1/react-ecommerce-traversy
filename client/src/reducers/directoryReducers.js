const INITIAL_STATE = {
  sections: [
    {
      title: 'Accessories',
      imageUrl: 'https://images.unsplash.com/photo-1507457379470-08b800bebc67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      // size: 'small',
      id: 1,
      linkUrl: 'shop/cameras'
    },
    {
      title: 'Cameras',
      imageUrl: 'https://images.unsplash.com/photo-1516571855259-d5988a8ff76e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      // size: 'small',
      id: 2,
      linkUrl: 'shop/consoles'
    },
    {
      title: 'Computers',
      imageUrl: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8bGFwdG9wfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
      // size: 'small',
      id: 3,
      linkUrl: 'shop/coldwallets'
    },
    {
      title: 'Gaming',
      imageUrl: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fGdhbWluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
      // size: 'small',
      id: 4,
      linkUrl: 'shop/rigs'
    },
    {
      title: 'Phones',
      imageUrl: 'https://images.unsplash.com/photo-1585132884271-bb39983bd2a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      // size: 'small',
      id: 6,
      linkUrl: 'shop/mobile'
    },
    {
      title: "Television",
      imageUrl: 'https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      // size: 'small',
      id: 5,
      linkUrl: 'shop/smart-tv'
    },
    {
      title: 'Watches',
      imageUrl: 'https://images.unsplash.com/photo-1517420879524-86d64ac2f339?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
      // size: 'large',
      id: 7,
      linkUrl: 'shop/laptops'
    },
  ]
}

export const directoryReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default: 
      return state
  }
}

// export default directoryReducer;