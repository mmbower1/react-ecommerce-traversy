const products = [
  {
    name: 'TCL 55" Class UN700 Series LED 4K',
    image: '/images/tcl.png',
    description: "Founded 35 years ago and already one of the worlds best-selling consumer electronics brands, TCL is now the fastest growing TV brand in North America. ",
    brand: 'TCL',
    category: "TV's",
    price: 279.99,
    countInStock: 12,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Bose - QuietComfort Noise Cancelling Buds',
    image: '/images/earbuds.jpg',
    description: "The world's most effective noise cancelling earbuds Using a combination of patented active and passive noise cancellation innovations, Bose QuietComfort® Earbuds feature all the noise cancelling performance of our best over-ear headphones",
    brand: 'Bose',
    category: 'Audio',
    price: 69.99,
    countInStock: 12,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Insignia - Sonic Portable Bluetooth Speaker',
    image: '/images/speakerpill.jpg',
    description: "Bluetooth connectivity lets you stream music from compatible smartphones, and the stereo speakers deliver impressively powerful audio.",
    brand: 'Insignia',
    category: 'Audio',
    price: 59.99,
    countInStock: 12,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Microsoft Surface Pro 7 - 12.3" Touch Screen',
    image: '/images/microsoft-surface.png',
    description: "Surface Pro 7: Up to 10.5 hours of battery life based on typical Surface device usage. Testing conducted by Microsoft in Sept. 2019 using preproduction software and preproduction Intel® Core™ i5, 256GB, 8 GB RAM device. Testing consisted of full battery discharge with a mixture of active use and modern standby.",
    brand: 'Microsoft',
    category: 'Computers',
    price: 861.99,
    countInStock: 12,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Airpods Wireless Bluetooth Headphones',
    image: '/images/airpods.jpg',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Audio',
    price: 89.99,
    countInStock: 8,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'iPhone 11 Pro 256GB Memory',
    image: '/images/phone.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'Apple',
    category: 'Phones',
    price: 599.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Playstation 5 Disc Drive',
    image: '/images/ps5.jpg',
    description: "Newest Sony gaming system. Delivers lightning-fast loading, deeper immersion, and an all-new generation of incredible PlayStation games.",
    brand: 'Sony',
    category: 'Gaming',
    price: 499.99,
    countInStock: 12,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Xbox Series X',
    image: '/images/xboxseriesx.png',
    description: "Zen 2 processor architecture plus a graphics processor using AMD's forthcoming RDNA 2 microarchitecture. CPU is an eight-core custom Zen 2 processor running at 3.8GHz (3.66GHz with simultaneous multithreading). Its GPU is a custom RDNA 2 processor at 1.825GHz with 52 CUs that will create 12 teraflops.",
    brand: 'Amazon',
    category: 'Microsoft',
    price: 499.99,
    countInStock: 12,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Cannon EOS 80D DSLR Camera',
    image: '/images/camera.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'Cannon',
    category: 'Cameras',
    price: 929.99,
    countInStock: 13,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Sony Playstation 4 Pro White Version',
    image: '/images/playstation.jpg',
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
    brand: 'Sony',
    category: 'Gaming',
    price: 399.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Logitech G-Series Gaming Mouse',
    image: '/images/logitechmouse.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'Logitech',
    category: 'Gaming',
    price: 49.99,
    countInStock: 9,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Amazon Echo Dot 3rd Generation',
    image: '/images/alexa.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'Amazon',
    category: 'Accessories',
    price: 29.99,
    countInStock: 12,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Roku - Express (2019)',
    image: '/images/roku.png',
    description: "Home streaming service with a unique selection and the hottest shows on the market! Fast, easy and reliable UI.",
    brand: 'Amazon',
    category: 'Streaming',
    price: 24.99,
    countInStock: 12,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Apple Watch Series 6 (GPS)',
    image: '/images/applewatch6.jpg',
    description: "Measure your blood oxygen level with a revolutionary new sensor and app. Take an ECG anytime, anywhere. See your fitness metrics at a glance with the enhanced Always-On Retina display. With Apple Watch Series 6 on your wrist, a healthier, more active, more connected life is within reach.",
    brand: 'Apple',
    category: 'Watches',
    price: 379.99,
    countInStock: 12,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'HyperX QuadCast S',
    image: '/images/hyperx.jpg',
    description: "The HyperX QuadCast™ is the ideal all-inclusive standalone microphone for the aspiring streamer or podcaster looking for a condenser mic with quality sound. QuadCast comes with its own anti-vibration shock mount to help reduce the rumbles of daily life and a built-in pop filter to muffle pesky plosive sounds.",
    brand: 'HyperX',
    category: 'Audio',
    price: 134.99,
    countInStock: 14,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Zoom - LiveTrak L-8 Podcast Digital Mixer/Recorder',
    image: '/images/dj.jpg',
    description: "Battery Powered, Digital Mixer and Recorder, Music Mixer, Phone Input, Sound Pads, 4 Headphone Outputs, 12-In/4-Out Audio Interface, Built In EQ and Effects.",
    brand: 'Zoom',
    category: 'Audio',
    price: 269.99,
    countInStock: 8,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Eufy Security Wired 2K Video Doorbell',
    image: '/images/doorbell.jpg',
    description: "High definition 2560 x 1920 resolution, combined with our advanced HDR and distortion correction, ensures video is recorded in 2x the quality",
    brand: 'Eufy',
    category: 'Accessories',
    price: 120.99,
    countInStock: 12,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Amazon - Fire HD 8 10th Generation - 8" - Tablet',
    image: '/images/amazontablet.jpg',
    description: "Enjoy your entertainment with a fast processor. Fire HD 8 delivers faster performance thanks to an increase in RAM. Fire HD 8 features a widescreen 1280x800 high-definition display with over a million pixels and a bright, vivid picture. Enjoy movies and games in a crisp, clear HD resolution, with less glare and more brightness thanks to a stunning IPS LCD display. ",
    brand: 'Amazon',
    category: 'Accessories',
    price: 139.99,
    countInStock: 12,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Raptic - Shield Case (Red)',
    image: '/images/applephonecase.jpg',
    description: "Maximum phone and body protection for iPhone 11 Pro Max. Does not include screen protector.",
    brand: 'Amazon',
    category: 'Phones',
    price: 29.99,
    countInStock: 15,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'NZXT - H510 Elite Compact ATX Mid-Tower Case with Dual-Tempered Glass - Matte Black',
    image: '/images/nzxt.png',
    description: "The H510 Elite compact ATX mid-tower is perfect for your RGB build. Behind the flush-mounted, tempered glass front panel, you’ll discover our renowned Aer RGB 2 fans keeping your components brilliantly cool. Well-engineered airflow, removable radiator mounting bracket, multiple fan filters, vertical GPU mount, a front panel USB-C connector, and an all-steel and tempered glass construction are just some of the key features you’ll get.",
    brand: 'NZXT',
    category: 'Gaming',
    price: 124.99,
    countInStock: 12,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Samsung - 65" Class Q800T Series LED 8K UHD Smart Tizen TV',
    image: '/images/samsungtv.jpg',
    description: "Once you experience 8K, there’s no going back. An unprecedented level of detail and color flows through each frame, powered by an intelligent processor which instantly upscales content to 8K quality. Combined with the immersive audio of Object Tracking Sound+, it’s a cinematic experience that’s impossible to resist.",
    brand: 'Samsung',
    category: "TV's",
    price: 1999.99,
    countInStock: 5,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Nintendo Switch',
    image: '/images/switch.jpg',
    description: "Get the gaming system that lets you play the games you want, wherever you are, however you like. Includes the Nintendo Switch console and Nintendo Switch dock in black, with contrasting left and right Joy‑Con controllers—one red, one blue. Also includes all the extras you need to get started.",
    brand: 'Nintendo',
    category: 'Gaming',
    price: 249.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Zelda - Age of Calamity',
    image: '/images/zelda.jpg',
    description: " The latest gaming experience with Link as he back Hyrule with the same characters and graphics as Breath of the Wild.",
    brand: 'Nintendo',
    category: 'Gaming',
    price: 49.99,
    countInStock: 12,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Nintendo Switch Lite',
    image: '/images/switchlite.jpg',
    description: "Handheld Nintendo Switch gaming at a great price. Optimized for personal, handheld play, Nintendo Switch Lite is a small and light Nintendo Switch system. Features a sleek, unibody design with fully integrated controls and a built-in +Control Pad. Compatible with all physical and digital Nintendo Switch games that support Handheld mode",
    brand: 'Nintendo',
    category: 'Gaming',
    price: 169.99,
    countInStock: 12,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Apple iPad Mini 5',
    image: '/images/ipadmini5.png',
    description: "iPad mini is beloved for its size and capability. And now there are even more reasons to love it. The A12 Bionic chip with Neural Engine. A 7.9‑inch Retina display with True Tone. And Apple Pencil, so you can capture your biggest ideas wherever they come to you. It’s still iPad mini. There’s just more of it than ever.",
    brand: 'Apple',
    category: 'Electronics',
    price: 339.99,
    countInStock: 12,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Beats Headphones',
    image: '/images/beats.jpg',
    description: "High-performance wireless noise cancelling headphones in dark blue. Active Noise Cancelling (ANC) blocks external noise. Transparency helps you stay aware of your surroundings while listening. Features the Apple H1 Headphone Chip and Class 1 Bluetooth for extended range and fewer dropouts",
    brand: 'Beats',
    category: 'Audio',
    price: 154.99,
    countInStock: 12,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Apple TV 4K 32GB - Black',
    image: '/images/appletv.jpg',
    description: "Apple TV 4K lets you watch movies and shows in amazing 4K HDR — and now it completes the picture with immersive sound from Dolby Atmos.3 Stream your favorite channels live. Enjoy great content from apps like Amazon Prime Video, HBO NOW, Hulu, and Netflix",
    brand: 'Apple',
    category: "Streaming",
    price: 134.99,
    countInStock: 12,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Google Pixel 5',
    image: '/images/pixel5.webp', description: "A camera that helps you take your best shots. Protection from security threats and water spills. A little help on the go with Google Assistant.",
    brand: 'Google',
    category: 'Phones',
    price: 499.99,
    countInStock: 12,
    rating: 0,
    numReviews: 0,
  },
  // {
  //   name: 'Roku - Express (2019)',
  //   image: '/images/roku.png',
  //   description:
  //     'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
  //   brand: 'Amazon',
  //   category: 'Electronics',
  //   price: 24.99,
  //   countInStock: 0,
  //   rating: 0,
  //   numReviews: 0,
  // },
  // {
  //   name: 'Roku - Express (2019)',
  //   image: '/images/roku.png',
  //   description:
  //     'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
  //   brand: 'Amazon',
  //   category: 'Electronics',
  //   price: 24.99,
  //   countInStock: 0,
  //   rating: 0,
  //   numReviews: 0,
  // },
  // {
  //   name: 'Roku - Express (2019)',
  //   image: '/images/roku.png',
  //   description:
  //     'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
  //   brand: 'Amazon',
  //   category: 'Electronics',
  //   price: 24.99,
  //   countInStock: 0,
  //   rating: 0,
  //   numReviews: 0,
  // },
  // {
  //   name: 'Roku - Express (2019)',
  //   image: '/images/roku.png',
  //   description:
  //     'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
  //   brand: 'Amazon',
  //   category: 'Electronics',
  //   price: 24.99,
  //   countInStock: 0,
  //   rating: 0,
  //   numReviews: 0,
  // },
  // {
  //   name: 'Roku - Express (2019)',
  //   image: '/images/roku.png',
  //   description:
  //     'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
  //   brand: 'Amazon',
  //   category: 'Electronics',
  //   price: 24.99,
  //   countInStock: 0,
  //   rating: 0,
  //   numReviews: 0,
  // },
  // {
  //   name: 'Roku - Express (2019)',
  //   image: '/images/roku.png',
  //   description:
  //     'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
  //   brand: 'Amazon',
  //   category: 'Electronics',
  //   price: 24.99,
  //   countInStock: 0,
  //   rating: 0,
  //   numReviews: 0,
  // },
  // {
  //   name: 'Roku - Express (2019)',
  //   image: '/images/roku.png',
  //   description:
  //     'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
  //   brand: 'Amazon',
  //   category: 'Electronics',
  //   price: 24.99,
  //   countInStock: 0,
  //   rating: 0,
  //   numReviews: 0,
  // },
  // {
  //   name: 'Roku - Express (2019)',
  //   image: '/images/roku.png',
  //   description:
  //     'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
  //   brand: 'Amazon',
  //   category: 'Electronics',
  //   price: 24.99,
  //   countInStock: 0,
  //   rating: 0,
  //   numReviews: 0,
  // },
]

module.exports = products;
