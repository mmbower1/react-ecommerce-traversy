const INITIAL_STATE = {
  sections: [
    {
      title: 'Accessory',
      imageUrl: 'https://images.unsplash.com/photo-1507457379470-08b800bebc67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      // size: 'small',
      id: 1,
      linkUrl: 'shop/cameras'
    },
    {
      title: 'Cameras',
      imageUrl: 'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtZXJhfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
      // size: 'small',
      id: 2,
      linkUrl: 'shop/consoles'
    },
    {
      title: 'Laptops',
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
      imageUrl: 'https://images.unsplash.com/photo-1514464750060-00e6e34c8b8c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzJ8fHNtYXJ0JTIwcGhvbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
      // size: 'small',
      id: 6,
      linkUrl: 'shop/mobile'
    },
    {
      title: "Television",
      imageUrl: 'https://images.unsplash.com/photo-1606646079334-198d57d26911?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c21hcnQlMjB0dnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
      // size: 'small',
      id: 5,
      linkUrl: 'shop/smart-tv'
    },
    {
      title: 'Watches',
      imageUrl: 'https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
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