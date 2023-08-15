const products = [
  {
    id: "1",
    name: "Evolve 3D Pro Air Jersey",
    price: 225,
    color: "White",
    image: "/images/maillot-man1.webp",
    category: "man",
    stock: 30,
    description:
      "The Evolve 3D Pro Air Jersey is a high-performance, lightweight jersey featuring bold graphic elements and sustainable materials for the ultimate experience. Design in our signature Pro-Fit with contoured panelling, a low profile collar and longer sleeve length for comfort and performance. Featuring ultra-lightweight mesh side panels, micro-perforated chest and back panels, and air-mesh sleeves for maximum airflow. The lazer cut perforated pockets offer added breathability and moisture-wicking technology to keep you fresh. The material selection includes mostly recycled yarns, OEKO-TEX® certified hem and bluesign® APPROVED fabrications.",
  },
  {
    id: "2",
    name: "Evolve 3D Pro Air Jersey",
    price: 225,
    color: "Gray",
    image: "/images/maillot-man2.webp",
    category: "man",
    stock: 30,
    description:
      "The Evolve 3D Pro Air Jersey is a high-performance, lightweight jersey featuring bold graphic elements and sustainable materials for the ultimate experience. Design in our signature Pro-Fit with contoured panelling, a low profile collar and longer sleeve length for comfort and performance. Featuring ultra-lightweight mesh side panels, micro-perforated chest and back panels, and air-mesh sleeves for maximum airflow. The lazer cut perforated pockets offer added breathability and moisture-wicking technology to keep you fresh. The material selection includes mostly recycled yarns, OEKO-TEX® certified hem and bluesign® APPROVED fabrications.",
  },
  {
    id: "3",
    name: "Evolve 3D Pro Air Jersey",
    price: 225,
    color: "Green",
    image: "/images/maillot-man3.webp",
    category: "man",
    stock: 30,
    description:
      "The Evolve 3D Pro Air Jersey is a high-performance, lightweight jersey featuring bold graphic elements and sustainable materials for the ultimate experience. Design in our signature Pro-Fit with contoured panelling, a low profile collar and longer sleeve length for comfort and performance. Featuring ultra-lightweight mesh side panels, micro-perforated chest and back panels, and air-mesh sleeves for maximum airflow. The lazer cut perforated pockets offer added breathability and moisture-wicking technology to keep you fresh. The material selection includes mostly recycled yarns, OEKO-TEX® certified hem and bluesign® APPROVED fabrications.",
  },
  {
    id: "4",
    name: "Evade Pro Base Jersey 2.0",
    price: 245,
    color: "Black",
    image: "/images/maillot-man4.webp",
    category: "man",
    stock: 30,
    description:
      "The Evade Pro Base Jersey 2.0 has been re-imagined with a range of sustainable materials and new design details for premium comfort and durability. The primary body is 70% recycled knitted Italian fabric with an ultra-soft skin feel, paired with a honeycomb mesh sleeve to offer all-day comfort and performance. Featuring a new bonded front hem, pocket edge and zip guard that reduces bulk and provides a sleek fit alongside anti-sag pocket material so you always look fresh. Moisture-wicking and breathable to keep you cool when the temperatures rise, while reflective prints on the chest, back and sleeves increase visibility in low-light conditions. Constructed in our signature Pro-fit, the Evade Pro Base Jersey 2.0 features a contoured fit with a longer sleeve length and low profile collar.",
  },
  {
    id: "5",
    name: "Evade Pro Base Jersey 2.0",
    price: 245,
    color: "Gray",
    image: "/images/maillot-man5.webp",
    category: "man",
    stock: 30,
    description:
      "The Evade Pro Base Jersey 2.0 has been re-imagined with a range of sustainable materials and new design details for premium comfort and durability. The primary body is 70% recycled knitted Italian fabric with an ultra-soft skin feel, paired with a honeycomb mesh sleeve to offer all-day comfort and performance. Featuring a new bonded front hem, pocket edge and zip guard that reduces bulk and provides a sleek fit alongside anti-sag pocket material so you always look fresh. Moisture-wicking and breathable to keep you cool when the temperatures rise, while reflective prints on the chest, back and sleeves increase visibility in low-light conditions. Constructed in our signature Pro-fit, the Evade Pro Base Jersey 2.0 features a contoured fit with a longer sleeve length and low profile collar.",
  },
  {
    id: "6",
    name: "Evade Pro Base Jersey 2.0",
    price: 245,
    color: "Green",
    image: "/images/maillot-man6.webp",
    category: "man",
    stock: 30,
    description:
      "The Evade Pro Base Jersey 2.0 has been re-imagined with a range of sustainable materials and new design details for premium comfort and durability. The primary body is 70% recycled knitted Italian fabric with an ultra-soft skin feel, paired with a honeycomb mesh sleeve to offer all-day comfort and performance. Featuring a new bonded front hem, pocket edge and zip guard that reduces bulk and provides a sleek fit alongside anti-sag pocket material so you always look fresh. Moisture-wicking and breathable to keep you cool when the temperatures rise, while reflective prints on the chest, back and sleeves increase visibility in low-light conditions. Constructed in our signature Pro-fit, the Evade Pro Base Jersey 2.0 features a contoured fit with a longer sleeve length and low profile collar.",
  },
  {
    id: "7",
    name: "Training Bib 3.0",
    price: 295,
    color: "Black",
    image: "/images/culotte-man1.webp",
    category: "man",
    stock: 30,
    description:
      "The Training Bib 3.0 is designed for the grind, comfortable, durable and reliable so you can focus on the ride ahead. The main fabric features a 4-way stretch that offers optimal shape retention, moisture-wicking, and breathable qualities to keep you cool when the training is heating up. Constructed with an ergonomically engineered dual-density chamois to provide an enhanced comfort level. The seamless wide, elasticised bib brace strap is paired with a lightweight mesh back for breathability. The elasticated leg hem with an internal silicone gripper keeps the leg length in place without being overly tight. Designed in a classic cut with a male-specific fit, it features panelling that shapes to the body for all-day comfort. With reflective logos and tabs for low-light conditions, the Training Bib 3.0 is ready to ride from dawn to dusk.",
  },
  {
    id: "8",
    name: "Eclipse Team Bib Evo",
    price: 375,
    color: "Black",
    image: "/images/culotte-man2.webp",
    category: "man",
    stock: 30,
    description:
      "Redefine performance with the Eclipse Team Bib Evo. A bold evolution of our most popular bib, designed for premium comfort on your longest training days and biggest race day. The primary body material is engineered for optimal stretch and shape retention, alongside anti-pilling and high abrasion resistance that won't thin over time. Featuring a seamless wide elasticised bib brace strap to alleviate pressure points, while the lightweight mesh back offers breathability. The 3D Thermo Moulded multi-layer chamois ensures ultimate comfort for long days on the bike, while laser-cut perforations provide maximum breathability no matter the conditions. Ergonomically designed in a male-specific cut, the Eclipse Team Bib Evo features a lower waistband, tailored hip, and elastic leg hem with a longer leg length alongside breathable and moisture-wicking materials.",
  },
  {
    id: "9",
    name: "Training Bib 3.0",
    price: 295,
    color: "Brown",
    image: "/images/culotte-man3.webp",
    category: "man",
    stock: 30,
    description:
      "The Training Bib 3.0 is designed for the grind, comfortable, durable and reliable so you can focus on the ride ahead. The main fabric features a 4-way stretch that offers optimal shape retention, moisture-wicking, and breathable qualities to keep you cool when the training is heating up. Constructed with an ergonomically engineered dual-density chamois to provide an enhanced comfort level. The seamless wide, elasticised bib brace strap is paired with a lightweight mesh back for breathability. The elasticated leg hem with an internal silicone gripper keeps the leg length in place without being overly tight. Designed in a classic cut with a male-specific fit, it features panelling that shapes to the body for all-day comfort. With reflective logos and tabs for low-light conditions, the Training Bib 3.0 is ready to ride from dawn to dusk.",
  },
  {
    id: "10",
    name: "Training Bib 3.0",
    price: 295,
    color: "Green",
    image: "/images/culotte-man4.webp",
    category: "man",
    stock: 30,
    description:
      "The Training Bib 3.0 is designed for the grind, comfortable, durable and reliable so you can focus on the ride ahead. The main fabric features a 4-way stretch that offers optimal shape retention, moisture-wicking, and breathable qualities to keep you cool when the training is heating up. Constructed with an ergonomically engineered dual-density chamois to provide an enhanced comfort level. The seamless wide, elasticised bib brace strap is paired with a lightweight mesh back for breathability. The elasticated leg hem with an internal silicone gripper keeps the leg length in place without being overly tight. Designed in a classic cut with a male-specific fit, it features panelling that shapes to the body for all-day comfort. With reflective logos and tabs for low-light conditions, the Training Bib 3.0 is ready to ride from dawn to dusk.",
  },
  {
    id: "11",
    name: "Eclipse Team Bib Evo",
    price: 375,
    color: "Red",
    image: "/images/culotte-man5.webp",
    category: "man",
    stock: 30,
    description:
      "Redefine performance with the Eclipse Team Bib Evo. A bold evolution of our most popular bib, designed for premium comfort on your longest training days and biggest race day. The primary body material is engineered for optimal stretch and shape retention, alongside anti-pilling and high abrasion resistance that won't thin over time. Featuring a seamless wide elasticised bib brace strap to alleviate pressure points, while the lightweight mesh back offers breathability. The 3D Thermo Moulded multi-layer chamois ensures ultimate comfort for long days on the bike, while laser-cut perforations provide maximum breathability no matter the conditions. Ergonomically designed in a male-specific cut, the Eclipse Team Bib Evo features a lower waistband, tailored hip, and elastic leg hem with a longer leg length alongside breathable and moisture-wicking materials.",
  },
  {
    id: "12",
    name: "Team Bib Evo",
    price: 355,
    color: "Brown",
    image: "/images/culotte-man6.webp",
    category: "man",
    stock: 30,
    description:
      "Redefine your performance with the Team Bib Evo, a bold evolution of our most popular bib. The 3D Thermo Moulded multi-layer chamois ensures ultimate comfort for long days on the bike, while laser-cut perforations provide maximum breathability no matter the conditions. The main body material is engineered for optimal stretch and shape retention, alongside anti-pilling and high abrasion resistance that won't thin over time. Constructed using a seamless wide elasticised bib brace strap that alleviates pressure points, paired with a lightweight mesh back for breathability. Ergonomically designed in a male-specific cut, the Team Bib Evo features a lower waistband, tailored hip, and elastic leg hem with a longer leg length, alongside breathable and moisture-wicking materials. These bibs are designed for ultimate comfort on your longest training days or biggest race days.",
  },
  {
    id: "13",
    name: "Evade Pro Base LS Jersey 2.0",
    price: 275,
    color: "Brown",
    image: "/images/NS3.webp",
    category: "new",
    stock: 30,
    description:
      "The Evade Pro Base Long Sleeve Jersey 2.0 has been re-imagined with a range of sustainable materials and new design details for premium comfort and durability. The primary body is 70% recycled knitted Italian fabric with a soft skin feel, paired with a honeycomb mesh long sleeve to offer all-day comfort and performance. Featuring a new bonded front hem, pocket edge and zip guard that reduces bulk and provides a sleek fit alongside anti-sag pocket material so you always look fresh. Moisture-wicking and breathable to keep you cool when the temperatures rise, while reflective prints on the chest, back and sleeves increase visibility in low-light conditions. Constructed in our signature Pro-fit, the Evade Pro Base Long Sleeve Jersey 2.0 features a contoured fit, tailored sleeves and a low-profile collar.",
  },
  {
    id: "14",
    name: "Evade Pro Base LS Jersey 2.0",
    price: 275,
    color: "Purple",
    image: "/images/NS4.webp",
    category: "new",
    stock: 30,
    description:
      "The Evade Pro Base Long Sleeve Jersey 2.0 has been re-imagined with a range of sustainable materials and new design details for premium comfort and durability. The primary body is 70% recycled knitted Italian fabric with a soft skin feel, paired with a honeycomb mesh long sleeve to offer all-day comfort and performance. Featuring a new bonded front hem, pocket edge and zip guard that reduces bulk and provides a sleek fit alongside anti-sag pocket material so you always look fresh. Moisture-wicking and breathable to keep you cool when the temperatures rise, while reflective prints on the chest, back and sleeves increase visibility in low-light conditions. Constructed in our signature Pro-fit, the Evade Pro Base Long Sleeve Jersey 2.0 features a contoured fit, tailored sleeves and a low-profile collar.",
  },
  {
    id: "15",
    name: "Women's Evade Pro Base Jersey 2.0",
    price: 245,
    color: "Purple",
    image: "/images/NS6.webp",
    category: "new",
    stock: 30,
    description:
      "The Evade Pro Base Jersey 2.0 has been re-imagined with a range of sustainable materials and new design details for premium comfort and durability. The primary body is 70% recycled knitted Italian fabric with an ultra-soft skin feel, paired with a honeycomb mesh sleeve to offer all-day comfort and performance. Featuring a new bonded front hem, pocket edge and zip guard that reduces bulk and provides a sleek fit alongside anti-sag pocket material so you always look fresh. Moisture-wicking and breathable to keep you cool when the temperatures rise, while reflective prints on the chest, back and sleeves increase visibility in low-light conditions. Constructed in our signature Pro-fit, the Evade Pro Base Jersey 2.0 features a contoured fit with a longer sleeve length and low profile collar.",
  },
  {
    id: "16",
    name: "Women's Evade Pro Base Jersey 2.0",
    price: 245,
    color: "Blue",
    image: "/images/NS7.webp",
    category: "new",
    stock: 30,
    description:
      "The Evade Pro Base Jersey 2.0 has been re-imagined with a range of sustainable materials and new design details for premium comfort and durability. The primary body is 70% recycled knitted Italian fabric with an ultra-soft skin feel, paired with a honeycomb mesh sleeve to offer all-day comfort and performance. Featuring a new bonded front hem, pocket edge and zip guard that reduces bulk and provides a sleek fit alongside anti-sag pocket material so you always look fresh. Moisture-wicking and breathable to keep you cool when the temperatures rise, while reflective prints on the chest, back and sleeves increase visibility in low-light conditions. Constructed in our signature Pro-fit, the Evade Pro Base Jersey 2.0 features a contoured fit with a longer sleeve length and low profile collar.",
  },
  {
    id: "17",
    name: "Evade Pro Base Jersey 2.0",
    price: 245,
    color: "White",
    image: "/images/NS8.webp",
    category: "new",
    stock: 30,
    description:
      "The Evade Pro Base Jersey 2.0 has been re-imagined with a range of sustainable materials and new design details for premium comfort and durability. The primary body is 70% recycled knitted Italian fabric with an ultra-soft skin feel, paired with a honeycomb mesh sleeve to offer all-day comfort and performance. Featuring a new bonded front hem, pocket edge and zip guard that reduces bulk and provides a sleek fit alongside anti-sag pocket material so you always look fresh. Moisture-wicking and breathable to keep you cool when the temperatures rise, while reflective prints on the chest, back and sleeves increase visibility in low-light conditions. Constructed in our signature Pro-fit, the Evade Pro Base Jersey 2.0 features a contoured fit with a longer sleeve length and low profile collar.",
  },
  {
    id: "18",
    name: "Women's Team Bib Evo",
    price: 355,
    color: "Purple",
    image: "/images/NS9.webp",
    category: "new",
    stock: 30,
    description:
      "Redefine Redefine your performance with our women's Team Bib Evo, a bold evolution of our most popular bib. The 3D Thermo Moulded multi-layer chamois ensures ultimate comfort for long days on the bike, while laser-cut perforations provide maximum breathability no matter the conditions. The main body material is engineered for optimal stretch and shape retention, alongside anti-pilling and high abrasion resistance that won't thin over time. Constructed using a seamless wide elasticised bib brace strap that alleviates pressure points, paired with a lightweight mesh back for breathability. Ergonomically designed in a female-specific cut, the women's Team Bib Evo features a higher cut mesh waist, silicone patterned leg band, and mid-leg length, alongside breathable and moisture-wicking materials. These bibs are designed for ultimate comfort on your longest training days or biggest race days.",
  },
  {
    id: "19",
    name: "Women's Team Bib Evo",
    price: 355,
    color: "Brown",
    image: "/images/NS10.webp",
    category: "new",
    stock: 30,
    description:
      "Redefine Redefine your performance with our women's Team Bib Evo, a bold evolution of our most popular bib. The 3D Thermo Moulded multi-layer chamois ensures ultimate comfort for long days on the bike, while laser-cut perforations provide maximum breathability no matter the conditions. The main body material is engineered for optimal stretch and shape retention, alongside anti-pilling and high abrasion resistance that won't thin over time. Constructed using a seamless wide elasticised bib brace strap that alleviates pressure points, paired with a lightweight mesh back for breathability. Ergonomically designed in a female-specific cut, the women's Team Bib Evo features a higher cut mesh waist, silicone patterned leg band, and mid-leg length, alongside breathable and moisture-wicking materials. These bibs are designed for ultimate comfort on your longest training days or biggest race days.",
  },
  {
    id: "20",
    name: "Team Bib Evo",
    price: 355,
    color: "Deep Purple",
    image: "/images/NS11.webp",
    category: "new",
    stock: 30,
    description:
      "Redefine your performance with the Team Bib Evo, a bold evolution of our most popular bib. The 3D Thermo Moulded multi-layer chamois ensures ultimate comfort for long days on the bike, while laser-cut perforations provide maximum breathability no matter the conditions. The main body material is engineered for optimal stretch and shape retention, alongside anti-pilling and high abrasion resistance that won't thin over time. Constructed using a seamless wide elasticised bib brace strap that alleviates pressure points, paired with a lightweight mesh back for breathability. Ergonomically designed in a male-specific cut, the Team Bib Evo features a lower waistband, tailored hip, and elastic leg hem with a longer leg length, alongside breathable and moisture-wicking materials. These bibs are designed for ultimate comfort on your longest training days or biggest race days.",
  },
  {
    id: "21",
    name: "Women's Team Bib Evo",
    price: 355,
    color: "Purple",
    image: "/images/NS9.webp",
    category: "new",
    stock: 30,
    description:
      "Redefine Redefine your performance with our women's Team Bib Evo, a bold evolution of our most popular bib. The 3D Thermo Moulded multi-layer chamois ensures ultimate comfort for long days on the bike, while laser-cut perforations provide maximum breathability no matter the conditions. The main body material is engineered for optimal stretch and shape retention, alongside anti-pilling and high abrasion resistance that won't thin over time. Constructed using a seamless wide elasticised bib brace strap that alleviates pressure points, paired with a lightweight mesh back for breathability. Ergonomically designed in a female-specific cut, the women's Team Bib Evo features a higher cut mesh waist, silicone patterned leg band, and mid-leg length, alongside breathable and moisture-wicking materials. These bibs are designed for ultimate comfort on your longest training days or biggest race days.",
  },
  {
    id: "22",
    name: "Draft Team Jacket",
    price: 215,
    color: "Brown",
    image: "/images/NS15.webp",
    category: "new",
    stock: 30,
    description:
      "The ultra-lightweight Draft Team Jacket is the ultimate stashable jacket, perfect for windy conditions, crisp temperatures, and cooler descents. Constructed from a mechanical 2-way stretch material to provide a performance fit with maximum comfort and movability. The wind-resistant fabric has a DWR water-repellent coating to help keep light moisture out. Lazer-cut ventilation is featured on the side and shoulder panels to provide breathability where you need it. The Draft Team Jacket features a 2-way zip for easy access to jersey pockets or increased airflow, and a silicone gripper hem keeps it securely in place. Reflective print transfers are featured front and back for added visibility in low-light conditions. Time to stash it, unzip the pouch pocket, fold it into itself, and you have a tidy little pack for your pocket.",
  },
  {
    id: "23",
    name: "Women's Draft Team Jacket",
    price: 215,
    color: "Purple",
    image: "/images/NS16.webp",
    category: "new",
    stock: 30,
    description:
      "The ultra-lightweight Women's Draft Team Jacket is the ultimate stashable jacket, perfect for windy conditions, crisp temperatures, and cooler descents. Constructed from a mechanical 2-way stretch material to provide a women's specific performance fit with maximum comfort and movability. The wind-resistant fabric has a DWR water-repellent coating to help keep light moisture out. Lazer-cut ventilation is featured on the side and shoulder panels to provide breathability where you need it. The Women's Draft Team Jacket features a 2-way zip for easy access to jersey pockets or increased airflow, and a silicone gripper hem keeps it securely in place. Reflective print transfers are featured front and back for added visibility in low-light conditions. Unzip the pouch pocket, fold it into itself, and you have a tidy little pack for your pocket.",
  },
  {
    id: "24",
    name: "Women's Evolve 3D Pro Air",
    price: 225,
    color: "White",
    image: "/images/maillot-woman1.webp",
    category: "woman",
    stock: 30,
    description:
      "The Evolve 3D Pro Air Jersey is a high-performance, lightweight jersey featuring bold graphic elements and sustainable materials for the ultimate experience. Design in our signature Pro-Fit with contoured panelling, a low profile collar and longer sleeve length for comfort and performance. Featuring ultra-lightweight mesh side panels, micro-perforated chest and back panels, and air-mesh sleeves for maximum airflow. The lazer cut perforated pockets offer added breathability and moisture-wicking technology to keep you fresh. The material selection includes mostly recycled yarns, OEKO-TEX® certified hem and bluesign® APPROVED fabrications.",
  },
  {
    id: "25",
    name: "Women's Evolve 3D Pro Air",
    price: 225,
    color: "Green",
    image: "/images/maillot-woman2.webp",
    category: "woman",
    stock: 30,
    description:
      "The Evolve 3D Pro Air Jersey is a high-performance, lightweight jersey featuring bold graphic elements and sustainable materials for the ultimate experience. Design in our signature Pro-Fit with contoured panelling, a low profile collar and longer sleeve length for comfort and performance. Featuring ultra-lightweight mesh side panels, micro-perforated chest and back panels, and air-mesh sleeves for maximum airflow. The lazer cut perforated pockets offer added breathability and moisture-wicking technology to keep you fresh. The material selection includes mostly recycled yarns, OEKO-TEX® certified hem and bluesign® APPROVED fabrications.",
  },
  {
    id: "26",
    name: "Women's Evade Pro Base Jersey 2.0",
    price: 245,
    color: "Light Green",
    image: "/images/maillot-woman4.webp",
    category: "woman",
    stock: 30,
    description:
      "The Evade Pro Base Jersey 2.0 has been re-imagined with a range of sustainable materials and new design details for premium comfort and durability. The primary body is 70% recycled knitted Italian fabric with an ultra-soft skin feel, paired with a honeycomb mesh sleeve to offer all-day comfort and performance. Featuring a new bonded front hem, pocket edge and zip guard that reduces bulk and provides a sleek fit alongside anti-sag pocket material so you always look fresh. Moisture-wicking and breathable to keep you cool when the temperatures rise, while reflective prints on the chest, back and sleeves increase visibility in low-light conditions. Constructed in our signature Pro-fit, the Evade Pro Base Jersey 2.0 features a contoured fit with a longer sleeve length and low profile collar.",
  },
  {
    id: "27",
    name: "Women's Evolve 3D Pro Air",
    price: 225,
    color: "Pink",
    image: "/images/maillot-woman5.webp",
    category: "woman",
    stock: 30,
    description:
      "The Evolve 3D Pro Air Jersey is a high-performance, lightweight jersey featuring bold graphic elements and sustainable materials for the ultimate experience. Design in our signature Pro-Fit with contoured panelling, a low profile collar and longer sleeve length for comfort and performance. Featuring ultra-lightweight mesh side panels, micro-perforated chest and back panels, and air-mesh sleeves for maximum airflow. The lazer cut perforated pockets offer added breathability and moisture-wicking technology to keep you fresh. The material selection includes mostly recycled yarns, OEKO-TEX® certified hem and bluesign® APPROVED fabrications.",
  },
  {
    id: "28",
    name: "Team Bib Evo",
    price: 355,
    color: "Light Gray",
    image: "/images/culotte-woman1.webp",
    category: "woman",
    stock: 30,
    description:
      "Redefine your performance with the Team Bib Evo, a bold evolution of our most popular bib. The 3D Thermo Moulded multi-layer chamois ensures ultimate comfort for long days on the bike, while laser-cut perforations provide maximum breathability no matter the conditions. The main body material is engineered for optimal stretch and shape retention, alongside anti-pilling and high abrasion resistance that won't thin over time. Constructed using a seamless wide elasticised bib brace strap that alleviates pressure points, paired with a lightweight mesh back for breathability. Ergonomically designed in a male-specific cut, the Team Bib Evo features a lower waistband, tailored hip, and elastic leg hem with a longer leg length, alongside breathable and moisture-wicking materials. These bibs are designed for ultimate comfort on your longest training days or biggest race days.",
  },
  {
    id: "29",
    name: "Women's Training Bib 3.0",
    price: 295,
    color: "Black",
    image: "/images/culotte-woman2.webp",
    category: "woman",
    stock: 30,
    description:
      "The Women's Training Bib 3.0 is designed for the grind, comfortable, durable and reliable so you can focus on the ride ahead. The main fabric features a 4-way stretch that offers optimal shape retention, moisture-wicking, and breathable qualities to keep you cool when the training is heating up. Constructed with a women's specific ergonomically engineered dual-density chamois to offer an enhanced level of comfort. The seamless wide, elasticised bib brace strap is paired with a lightweight mesh back for breathability. The elasticated leg hem with an internal silicone gripper keeps the leg length in place without being overly tight. Designed in a classic cut with a female-specific fit, it features panelling that shapes to the body for all-day comfort. With reflective logos and tabs for low-light conditions, the Women's Training Bib 3.0 is ready to ride from dawn to dusk.",
  },
  {
    id: "30",
    name: "Women's Training Bib 3.0",
    price: 295,
    color: "Green",
    image: "/images/culotte-woman3.webp",
    category: "woman",
    stock: 30,
    description:
      "The Women's Training Bib 3.0 is designed for the grind, comfortable, durable and reliable so you can focus on the ride ahead. The main fabric features a 4-way stretch that offers optimal shape retention, moisture-wicking, and breathable qualities to keep you cool when the training is heating up. Constructed with a women's specific ergonomically engineered dual-density chamois to offer an enhanced level of comfort. The seamless wide, elasticised bib brace strap is paired with a lightweight mesh back for breathability. The elasticated leg hem with an internal silicone gripper keeps the leg length in place without being overly tight. Designed in a classic cut with a female-specific fit, it features panelling that shapes to the body for all-day comfort. With reflective logos and tabs for low-light conditions, the Women's Training Bib 3.0 is ready to ride from dawn to dusk.",
  },
  {
    id: "31",
    name: "Women's Alt_Road Cargo",
    price: 415,
    color: "Purple",
    image: "/images/culotte-woman4.webp",
    category: "woman",
    stock: 30,
    description:
      "Head off-grid with the Women's Alt_Road Cargo Bib Shorts. A highly technical bib short that combines lightweight, 4-way stretch compressive material for ultimate comfort alongside highly durable qualities that will go the distance. Constructed with MAAP's proprietary women's specific 3D thermo moulded, 3-layer chamois, featuring lazer cut perforations for breathability and an antimicrobial liner for all-day riding comfort. Abrasion-resistant side leg panels provide added protection for rugged riding, while internal seams are flatlock stitched to eliminate skin abrasion. Engineered with long adventures in mind, the Women's Alt_Road Cargo Bib Shorts have an open cargo pocket on one side that easily fits a phone and a zippered pocket on the other side for securing valuables. In addition, the bib and brace feature dual rear pockets designed for storing snacks alongside high airflow mesh for breathability and comfort. Moisture-wicking, quick-drying and anti-odour properties combined with reflective external branding make the Women's Alt_Road Cargo Bibs perfect for wherever and whatever the ride.",
  },
  {
    id: "32",
    name: "Women's Alt_Road Cargo",
    price: 415,
    color: "Brown",
    image: "/images/culotte-woman5.webp",
    category: "woman",
    stock: 30,
    description:
      "Head off-grid with the Women's Alt_Road Cargo Bib Shorts. A highly technical bib short that combines lightweight, 4-way stretch compressive material for ultimate comfort alongside highly durable qualities that will go the distance. Constructed with MAAP's proprietary women's specific 3D thermo moulded, 3-layer chamois, featuring lazer cut perforations for breathability and an antimicrobial liner for all-day riding comfort. Abrasion-resistant side leg panels provide added protection for rugged riding, while internal seams are flatlock stitched to eliminate skin abrasion. Engineered with long adventures in mind, the Women's Alt_Road Cargo Bib Shorts have an open cargo pocket on one side that easily fits a phone and a zippered pocket on the other side for securing valuables. In addition, the bib and brace feature dual rear pockets designed for storing snacks alongside high airflow mesh for breathability and comfort. Moisture-wicking, quick-drying and anti-odour properties combined with reflective external branding make the Women's Alt_Road Cargo Bibs perfect for wherever and whatever the ride.",
  },
  {
    id: "33",
    name: "Women's Training Bib 3.0",
    price: 295,
    color: "Brown",
    image: "/images/culotte-woman6.webp",
    category: "woman",
    stock: 30,
    description:
      "The Women's Training Bib 3.0 is designed for the grind, comfortable, durable and reliable so you can focus on the ride ahead. The main fabric features a 4-way stretch that offers optimal shape retention, moisture-wicking, and breathable qualities to keep you cool when the training is heating up. Constructed with a women's specific ergonomically engineered dual-density chamois to offer an enhanced level of comfort. The seamless wide, elasticised bib brace strap is paired with a lightweight mesh back for breathability. The elasticated leg hem with an internal silicone gripper keeps the leg length in place without being overly tight. Designed in a classic cut with a female-specific fit, it features panelling that shapes to the body for all-day comfort. With reflective logos and tabs for low-light conditions, the Women's Training Bib 3.0 is ready to ride from dawn to dusk.",
  },
  {
    id: "34",
    name: "MAAP x 100% Hypercraft",
    price: 305,
    color: "Red",
    image: "/images/acc1.webp",
    category: "accessories",
    stock: 30,
    description:
      "See the light in the new MAAP x 100% Hypercraft Sunglasses. The lightest and strongest ever, featuring the robust UltraCarbon® featherweight frame, paired with complete full-spectrum UV protection including UVA, UVB and UV400 wavelengths, so you're always ready to go hyper.",
  },
  {
    id: "35",
    name: "MAAP x 100% Hypercraft",
    price: 305,
    color: "Green",
    image: "/images/acc2.webp",
    category: "accessories",
    stock: 30,
    description:
      "See the light in the new MAAP x 100% Hypercraft Sunglasses. The lightest and strongest ever, featuring the robust UltraCarbon® featherweight frame, paired with complete full-spectrum UV protection including UVA, UVB and UV400 wavelengths, so you're always ready to go hyper.",
  },
  {
    id: "36",
    name: "Pro Race Mitt",
    price: 115,
    color: "Green",
    image: "/images/acc3.webp",
    category: "accessories",
    stock: 30,
    description:
      "Slip on the Pro Race Mitt for the ultimate protection, comfort, and control when racing or training. The anatomically tailored mitt is designed with a fixing-free enclosure and a small reinforced tab for a sleek fit that's easy to pull on. The mitt features a seamless three-dimensional Elastic Interface® palm paired with three multi-density perforated foams that offer a lightly padded feel. This specific design and material combination delivers superior comfort by alleviating pressure where you need it while eliminating bunching and seam chafing. The lightweight mesh backing provides ventilation to keep your hands cool, with reflective details to add visibility. Abrasion-resistant, grippy and breathable, the Pro Race Mitt is ready to perform when you are.",
  },
  {
    id: "37",
    name: "Leg Warmers",
    price: 95,
    color: "Black",
    image: "/images/acc4.webp",
    category: "accessories",
    stock: 30,
    description:
      "Keep your legs warm and ready to ride with a pair of Leg Warmers. The Italian-made fabric features a matte outer for a modern, sleek look, while the thermo-regulating brushed-back internal provides a soft skin feel. The 4-way stretch fabric and articulated leg-shaping offer ease of movement alongside moisture-wicking and breathable technology to reduce moisture when the tempo rises. Featuring an elastic ankle hem that makes the Leg Warmers easy to pull on and off. The wide elastic thigh hem features internal gripper silicon to keep them securely in place and sit flush with the skin for all-day comfort.",
  },
  {
    id: "38",
    name: "Leg Warmers",
    price: 95,
    color: "Blue",
    image: "/images/acc5.webp",
    category: "accessories",
    stock: 30,
    description:
      "Keep your legs warm and ready to ride with a pair of Leg Warmers. The Italian-made fabric features a matte outer for a modern, sleek look, while the thermo-regulating brushed-back internal provides a soft skin feel. The 4-way stretch fabric and articulated leg-shaping offer ease of movement alongside moisture-wicking and breathable technology to reduce moisture when the tempo rises. Featuring an elastic ankle hem that makes the Leg Warmers easy to pull on and off. The wide elastic thigh hem features internal gripper silicon to keep them securely in place and sit flush with the skin for all-day comfort.",
  },
  {
    id: "39",
    name: "Knee Warmers",
    price: 80,
    color: "Black",
    image: "/images/acc6.webp",
    category: "accessories",
    stock: 30,
    description:
      "As the mornings cool off, reach for a set of Knee Warmers. The Italian-made fabric features a matte outer for a modern, sleek look, while the thermo-regulating brushed-back internal provides a soft skin feel. The 4-way stretch fabric and articulated knee-shaping offer ease of movement alongside moisture-wicking and breathable technology to reduce moisture when the tempo rises. The wide elastic hem features internal gripper silicon that sits flush with the skin to keep them securely in place for the ultimate all-day comfort.",
  },
  {
    id: "40",
    name: "Arm Warmers",
    price: 75,
    color: "Blue",
    image: "/images/acc7.webp",
    category: "accessories",
    stock: 30,
    description:
      "Arm Warmers are a must-have piece of kit, perfect for trans-seasonal riding. The Italian-made fabric features a matte outer for a modern, sleek look, while the thermo-regulating brushed-back internal provides a soft skin feel. The 4-way stretch fabric and articulated arm-shaping offer ease of movement alongside moisture-wicking and breathable technology to reduce moisture when the tempo rises. The wide elastic hem features internal gripper silicon that sits flush with the skin to keep them securely in place for the ultimate all-day comfort.",
  },
  {
    id: "41",
    name: "Evade Bottle",
    price: 30,
    color: "Black",
    image: "/images/acc8.webp",
    category: "accessories",
    stock: 30,
    description:
      "Quench your thirst with the graphic Evade Bottle. The 500ml capcity bottle pairs a flexible, easy-to-squeeze outer with a no-turn spout to provide a high-flow rate drinking experience. The leak-free spout makes sure every drop of water keeps you hydrated. Purist technology ensures no bad tastes while being 100% recyclable and BPA-free.",
  },
  {
    id: "42",
    name: "Evade Bottle",
    price: 30,
    color: "White",
    image: "/images/acc9.webp",
    category: "accessories",
    stock: 30,
    description:
      "Quench your thirst with the graphic Evade Bottle. The 500ml capcity bottle pairs a flexible, easy-to-squeeze outer with a no-turn spout to provide a high-flow rate drinking experience. The leak-free spout makes sure every drop of water keeps you hydrated. Purist technology ensures no bad tastes while being 100% recyclable and BPA-free.",
  },
  {
    id: "43",
    name: "ADL 2023 Sock",
    price: 35,
    color: "Black",
    image: "/images/acc10.webp",
    category: "accessories",
    stock: 30,
    description:
      "Take the party home with limited edition MAAP x Specialized apparel - originally only available at ADL 2023. When you're looking for a comfortable and reliable training sock, reach for the ADL 2023 Sock. A mid-weight sock featuring dynamic arch support and padded toe for comfort alongside soft mesh fabric on the top and sides for ventilation. The mesh fabrics paired with Q-Skin® technology provides breathability, moisture-wicking qualities, and antimicrobial properties. The ADL 2023 Sock is designed to keep your feet feeling fresh even when the training gets tough.",
  },
  {
    id: "44",
    name: "Emerge Pro Air Sock",
    price: 30,
    color: "Green",
    image: "/images/acc11.webp",
    category: "accessories",
    stock: 30,
    description:
      "When the temperatures soar, keep your feet cool with the Emerge Pro Air Socks. Designed specifically for hot weather riding, the Emerge Pro Air Sock is constructed from over 60% lightweight open mesh fabric that provides airflow and breathability alongside antibacterial yarns for added freshness. Featuring a double cuff for durability and arch support for comfort, these lightweight socks are the perfect addition to your summer cycling kit.",
  },
  {
    id: "45",
    name: "Emerge Pro Air Sock",
    price: 30,
    color: "Black",
    image: "/images/acc12.webp",
    category: "accessories",
    stock: 30,
    description:
      "When the temperatures soar, keep your feet cool with the Emerge Pro Air Socks. Designed specifically for hot weather riding, the Emerge Pro Air Sock is constructed from over 60% lightweight open mesh fabric that provides airflow and breathability alongside antibacterial yarns for added freshness. Featuring a double cuff for durability and arch support for comfort, these lightweight socks are the perfect addition to your summer cycling kit.",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};

export const getProductsByCategory = (productCategory) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === productCategory));
    }, 500);
  });
};
